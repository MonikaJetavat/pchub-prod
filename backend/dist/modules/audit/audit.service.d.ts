import { PrismaService } from '../../prisma/prisma.service';
export interface AuditInput {
    action: string;
    entityType: string;
    entityId?: string;
    opportunityId?: string;
    userId?: string;
    proxyUserId?: string;
    isProxy?: boolean;
    isSystem?: boolean;
    description: string;
    beforeVal?: Record<string, any>;
    afterVal?: Record<string, any>;
    comments?: string;
    ipAddress?: string;
}
export declare class AuditService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    log(input: AuditInput): Promise<void>;
    versionSnapshot(entityType: string, entityId: string, opportunityId: string | undefined, snapshot: any, changedBy: string, summary: string): Promise<void>;
    findAll(q: {
        search?: string;
        action?: string;
        entityType?: string;
        userId?: string;
        opportunityId?: string;
        from?: string;
        to?: string;
        page?: number;
        pageSize?: number;
    }): Promise<{
        data: ({
            user: {
                name: string;
                initials: string;
                avatarColor: string;
            };
        } & {
            id: string;
            createdAt: Date;
            description: string;
            isSystem: boolean;
            userId: string | null;
            action: import(".prisma/client").$Enums.AuditAction;
            entityType: string;
            entityId: string | null;
            isProxy: boolean;
            beforeVal: import("@prisma/client/runtime/library").JsonValue | null;
            afterVal: import("@prisma/client/runtime/library").JsonValue | null;
            comments: string | null;
            ipAddress: string | null;
            userAgent: string | null;
            opportunityId: string | null;
            proxyUserId: string | null;
        })[];
        meta: {
            total: number;
            page: number;
            pageSize: number;
            pages: number;
        };
    }>;
}
