import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { AuthService } from '../auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly auth;
    constructor(auth: AuthService, config: ConfigService);
    validate(req: Request, payload: any): Promise<{
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
}
export {};
