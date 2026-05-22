import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    getUserFromToken(userId: string): Promise<{
        permissions: Record<string, string[]>;
        roles: ({
            role: {
                name: string;
                permissions: import("@prisma/client/runtime/library").JsonValue;
            };
        } & {
            userId: string;
            roleId: string;
            grantedAt: Date;
            grantedBy: string | null;
        })[];
        id: string;
        externalId: string | null;
        email: string;
        name: string;
        initials: string;
        avatarColor: string | null;
        status: import(".prisma/client").$Enums.UserStatus;
        region: string | null;
        businessUnit: string | null;
        reportingMgr: string | null;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    hasPermission(user: any, permission: string): boolean;
    generateToken(userId: string): string;
    generateDevToken(userId: string): string;
    validateProxy(fromUserId: string, toUserId: string): Promise<{
        id: string;
        status: import(".prisma/client").$Enums.DelegationStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.DelegationType;
        fromUserId: string;
        toUserId: string;
        scope: string;
        approvalLimit: import("@prisma/client/runtime/library").Decimal | null;
        startDate: Date;
        endDate: Date;
        createdById: string;
        revokedAt: Date | null;
    }>;
}
