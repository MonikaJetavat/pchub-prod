import { PrismaService } from '../../prisma/prisma.service';
export declare class NotificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    push(input: {
        userId: string;
        type: string;
        priority?: string;
        title: string;
        body?: string;
        entityType?: string;
        entityId?: string;
        metadata?: any;
    }): Promise<void>;
    pushBulk(userIds: string[], input: Omit<Parameters<this['push']>[0], 'userId'>): Promise<void>;
    findForUser(userId: string, q: {
        unread?: string;
        page?: number;
        pageSize?: number;
    }): Promise<{
        data: {
            id: string;
            createdAt: Date;
            userId: string;
            type: import(".prisma/client").$Enums.NotifType;
            entityType: string | null;
            entityId: string | null;
            priority: import(".prisma/client").$Enums.NotifPriority;
            title: string;
            body: string | null;
            isRead: boolean;
            readAt: Date | null;
            metadata: import("@prisma/client/runtime/library").JsonValue;
        }[];
        meta: {
            total: number;
            page: number;
            pageSize: number;
            pages: number;
            unreadCount: number;
        };
    }>;
    markRead(id: string, userId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    markAllRead(userId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    unreadCount(userId: string): Promise<number>;
}
