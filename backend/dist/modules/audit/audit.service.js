"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AuditService = class AuditService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async log(input) {
        try {
            await this.prisma.auditLog.create({ data: input });
        }
        catch { }
    }
    async versionSnapshot(entityType, entityId, opportunityId, snapshot, changedBy, summary) {
        try {
            const latest = await this.prisma.entityVersion.findFirst({
                where: { entityType, entityId }, orderBy: { version: 'desc' }, select: { version: true },
            });
            await this.prisma.entityVersion.create({ data: {
                    entityType, entityId, opportunityId: opportunityId,
                    version: (latest?.version ?? 0) + 1, snapshot, changedBy, changeSummary: summary,
                } });
        }
        catch { }
    }
    async findAll(q) {
        const page = +(q.page || 1);
        const take = Math.min(+(q.pageSize || 20), 100);
        const skip = (page - 1) * take;
        const where = {
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
                ] }),
        };
        const [data, total] = await Promise.all([
            this.prisma.auditLog.findMany({ where, skip, take, orderBy: { createdAt: 'desc' },
                include: { user: { select: { name: true, initials: true, avatarColor: true } } } }),
            this.prisma.auditLog.count({ where }),
        ]);
        return { data, meta: { total, page, pageSize: take, pages: Math.ceil(total / take) } };
    }
};
exports.AuditService = AuditService;
exports.AuditService = AuditService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuditService);
//# sourceMappingURL=audit.service.js.map