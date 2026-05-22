// notifications.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async push(input: {
    userId: string; type: string; priority?: string;
    title: string; body?: string; entityType?: string;
    entityId?: string; metadata?: any;
  }): Promise<void> {
    try {
      await this.prisma.notification.create({ data: input as any });
    } catch { /* non-blocking */ }
  }

  async pushBulk(userIds: string[], input: Omit<Parameters<this['push']>[0], 'userId'>): Promise<void> {
    if (!userIds.length) return;
    try {
      await this.prisma.notification.createMany({
        data: userIds.map(userId => ({ userId, ...input } as any)),
      });
    } catch { /* non-blocking */ }
  }

  async findForUser(userId: string, q: { unread?: string; page?: number; pageSize?: number }) {
    const unread = q.unread === 'true';
    const page = +(q.page || 1);
    const pageSize = Math.min(+(q.pageSize || 20), 50);
    const where = { userId, ...(unread && { isRead: false }) };
    const [data, total, unreadCount] = await Promise.all([
      this.prisma.notification.findMany({ where, skip: (page-1)*pageSize, take: pageSize, orderBy: { createdAt: 'desc' } }),
      this.prisma.notification.count({ where }),
      this.prisma.notification.count({ where: { userId, isRead: false } }),
    ]);
    return { data, meta: { total, page, pageSize, pages: Math.ceil(total/pageSize), unreadCount } };
  }

  async markRead(id: string, userId: string) {
    return this.prisma.notification.updateMany({
      where: { id, userId }, data: { isRead: true, readAt: new Date() },
    });
  }

  async markAllRead(userId: string) {
    return this.prisma.notification.updateMany({
      where: { userId, isRead: false }, data: { isRead: true, readAt: new Date() },
    });
  }

  async unreadCount(userId: string): Promise<number> {
    return this.prisma.notification.count({ where: { userId, isRead: false } });
  }
}
