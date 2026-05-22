import { Injectable } from '@nestjs/common';
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
  beforeVal?: Record<string,any>;
  afterVal?: Record<string,any>;
  comments?: string;
  ipAddress?: string;
}

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async log(input: AuditInput): Promise<void> {
    try {
      await this.prisma.auditLog.create({ data: input as any });
    } catch { /* non-blocking — never fail a request due to audit */ }
  }

  async versionSnapshot(
    entityType: string, entityId: string, opportunityId: string | undefined,
    snapshot: any, changedBy: string, summary: string,
  ): Promise<void> {
    try {
      const latest = await this.prisma.entityVersion.findFirst({
        where: { entityType, entityId }, orderBy: { version: 'desc' }, select: { version: true },
      });
      await this.prisma.entityVersion.create({ data: {
        entityType, entityId, opportunityId: opportunityId as any,
        version: (latest?.version ?? 0) + 1, snapshot, changedBy, changeSummary: summary,
      }});
    } catch { /* non-blocking */ }
  }

  async findAll(q: {
    search?: string; action?: string; entityType?: string;
    userId?: string; opportunityId?: string;
    from?: string; to?: string; page?: number; pageSize?: number;
  }) {
    const page = +(q.page || 1);
    const take = Math.min(+(q.pageSize || 20), 100);
    const skip = (page - 1) * take;
    const where: any = {
      ...(q.action && { action: q.action }),
      ...(q.entityType && { entityType: q.entityType }),
      ...(q.userId && { userId: q.userId }),
      ...(q.opportunityId && { opportunityId: q.opportunityId }),
      ...((q.from || q.to) && {
        createdAt: { ...(q.from && { gte: new Date(q.from) }), ...(q.to && { lte: new Date(q.to) }) },
      }),
      ...(q.search && { OR: [
        { description: { contains: q.search, mode: 'insensitive' } },
        { entityType: { contains: q.search, mode: 'insensitive' } },
      ]}),
    };
    const [data, total] = await Promise.all([
      this.prisma.auditLog.findMany({ where, skip, take, orderBy: { createdAt: 'desc' },
        include: { user: { select: { name: true, initials: true, avatarColor: true } } } }),
      this.prisma.auditLog.count({ where }),
    ]);
    return { data, meta: { total, page, pageSize: take, pages: Math.ceil(total / take) } };
  }
}
