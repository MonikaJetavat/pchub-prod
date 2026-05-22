import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(ctx: ExecutionContext): boolean {
    const required = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY, [ctx.getHandler(), ctx.getClass()],
    );
    if (!required?.length) return true;
    const { user } = ctx.switchToHttp().getRequest();
    if (!user) throw new ForbiddenException('Not authenticated');
    if (!required.every(p => this.hasPermission(user, p))) {
      throw new ForbiddenException('Insufficient permissions');
    }
    return true;
  }

  private hasPermission(user: any, permission: string): boolean {
    if (!user?.permissions) return false;
    if (user.permissions.all) return true;
    const [mod, action] = permission.split(':');
    return user.permissions[mod]?.includes(action) ?? false;
  }
}
