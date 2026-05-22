import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async getUserFromToken(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        roles: {
          include: { role: { select: { name: true, permissions: true } } },
        },
      },
    });
    if (!user || user.status !== 'Active') {
      throw new UnauthorizedException('User account is inactive or not found');
    }

    // Merge permissions from all roles
    const permissions = user.roles.reduce((acc: Record<string, string[]>, ur) => {
      const p = ur.role.permissions as Record<string, any>;
      if (p.all) return { ...acc, all: ['*'] };
      Object.entries(p).forEach(([mod, perms]) => {
        if (!acc[mod]) acc[mod] = [];
        if (Array.isArray(perms)) acc[mod].push(...perms);
      });
      return acc;
    }, {});

    return { ...user, permissions };
  }

  hasPermission(user: any, permission: string): boolean {
    if (!user?.permissions) return false;
    if (user.permissions.all) return true;
    const [mod, action] = permission.split(':');
    return user.permissions[mod]?.includes(action) ?? false;
  }

  generateToken(userId: string): string {
    return this.jwt.sign({ sub: userId });
  }

  generateDevToken(userId: string): string {
    if (this.config.get('NODE_ENV') === 'production') {
      throw new UnauthorizedException('Dev tokens not available in production');
    }
    return this.jwt.sign({ sub: userId, type: 'dev' });
  }

  async validateProxy(fromUserId: string, toUserId: string) {
    return this.prisma.delegation.findFirst({
      where: {
        fromUserId,
        toUserId,
        status: 'Active',
        startDate: { lte: new Date() },
        endDate: { gte: new Date() },
      },
    });
  }
}
