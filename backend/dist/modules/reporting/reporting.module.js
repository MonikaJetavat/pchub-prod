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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportingModule = exports.ReportingController = exports.ReportingService = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const prisma_service_1 = require("../../prisma/prisma.service");
const audit_module_1 = require("../audit/audit.module");
const audit_service_1 = require("../audit/audit.service");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const rbac_guard_1 = require("../../common/guards/rbac.guard");
const permissions_decorator_1 = require("../../common/decorators/permissions.decorator");
function paged(total, page, ps) {
    return { total, page, pageSize: ps, pages: Math.ceil(total / ps) };
}
let ReportingService = class ReportingService {
    constructor(prisma, audit) {
        this.prisma = prisma;
        this.audit = audit;
    }
    async pipelineReport(q) {
        const [statusAgg, kpiAgg, rows] = await Promise.all([
            this.prisma.$queryRaw `
        SELECT status, COUNT(*) as count, COALESCE(SUM(value),0) as value
        FROM opportunities GROUP BY status ORDER BY status`,
            this.prisma.$queryRaw `
        SELECT COUNT(*) as total, COALESCE(SUM(value),0) as total_value,
          COALESCE(AVG(value),0) as avg_value,
          COUNT(*) FILTER (WHERE status IN ('Contracted','WorkStarted')) as contracted,
          COUNT(*) FILTER (WHERE status = 'Completed') as completed
        FROM opportunities`,
            this.prisma.opportunity.findMany({
                include: { lead: { select: { name: true } } },
                orderBy: { createdAt: 'desc' }, take: 50,
            }),
        ]);
        const kp = kpiAgg[0] || {};
        const byStatus = statusAgg.map((s) => ({ status: s.status, count: Number(s.count), value: Number(s.value) }));
        const [bySectorRaw, byRegionRaw] = await Promise.all([
            this.prisma.$queryRaw `SELECT COALESCE(sector,'Unknown') as name, COUNT(*) as count, COALESCE(SUM(value),0) as value FROM opportunities GROUP BY sector ORDER BY value DESC LIMIT 10`,
            this.prisma.$queryRaw `SELECT COALESCE(region,'Unknown') as name, COUNT(*) as count, COALESCE(SUM(value),0) as value FROM opportunities GROUP BY region ORDER BY value DESC LIMIT 10`,
        ]);
        const kpis = {
            totalCommissions: Number(kp.total || 0),
            totalPipeline: Number(kp.total_value || 0),
            contracted: Number(kp.contracted || 0),
            completed: Number(kp.completed || 0),
            avgValue: Number(kp.avg_value || 0),
        };
        return {
            kpis, byStatus,
            bySector: bySectorRaw.map((r) => ({ name: r.name, count: Number(r.count), value: Number(r.value) })),
            byRegion: byRegionRaw.map((r) => ({ name: r.name, count: Number(r.count), value: Number(r.value) })),
            rows,
        };
    }
    async ceReport(q) {
        const [stageAgg, rows] = await Promise.all([
            this.prisma.$queryRaw `
        SELECT stage, COUNT(*) as count, COALESCE(SUM(value),0) as value
        FROM ce_events GROUP BY stage ORDER BY stage`,
            this.prisma.ceEvent.findMany({
                include: { opportunity: { select: { commNum: true, clientName: true, lead: { select: { name: true } } } } },
                orderBy: { raisedAt: 'desc' }, take: 100,
            }),
        ]);
        const byStage = stageAgg.map((s) => ({ stage: s.stage, count: Number(s.count), value: Number(s.value) }));
        const total = byStage.reduce((a, s) => a + s.count, 0);
        const totalValue = byStage.reduce((a, s) => a + s.value, 0);
        const approved = byStage.find(s => s.stage === 'Approved')?.count || 0;
        const open = byStage.filter(s => s.stage !== 'Approved' && s.stage !== 'Rejected').reduce((a, s) => a + s.count, 0);
        return { kpis: { total, totalValue, approved, open }, byStage, rows };
    }
    async srpReport(q) {
        const srps = await this.prisma.srp.findMany({
            include: { opportunity: { select: { commNum: true, name: true, clientName: true, lead: { select: { name: true } } } } },
            orderBy: { createdAt: 'desc' }, take: 1000,
        });
        const byStatus = ['Draft', 'SentForApproval', 'Approved', 'Rejected'].map(s => ({
            status: s,
            count: srps.filter(r => r.status === s).length,
        }));
        const overdue = srps.filter(r => r.status === 'SentForApproval' &&
            r.sentForApprovalAt &&
            (Date.now() - new Date(r.sentForApprovalAt).getTime()) > 7 * 24 * 3600 * 1000);
        return {
            kpis: {
                total: srps.length,
                approved: srps.filter(r => r.status === 'Approved').length,
                pending: srps.filter(r => r.status === 'SentForApproval').length,
                overdue: overdue.length,
                draft: srps.filter(r => r.status === 'Draft').length,
            },
            byStatus,
            overdue: overdue.map(r => ({ ...r, daysPending: Math.floor((Date.now() - new Date(r.sentForApprovalAt).getTime()) / 86400000) })),
            rows: srps.slice(0, 100),
        };
    }
    async invoiceReport(q) {
        const clientInvs = await this.prisma.clientInvoice.findMany({
            include: { schedule: { include: { opportunity: { select: { commNum: true, clientName: true } } } } },
            orderBy: { issuedAt: 'desc' }, take: 1000,
        });
        const now = Date.now();
        const age = (inv) => inv.issuedAt ? Math.floor((now - new Date(inv.issuedAt).getTime()) / 86400000) : 0;
        const buckets = [
            { label: 'Current (0-30d)', filter: (i) => age(i) <= 30 && i.status !== 'Paid' },
            { label: '31-60 days', filter: (i) => age(i) > 30 && age(i) <= 60 && i.status !== 'Paid' },
            { label: '61-90 days', filter: (i) => age(i) > 60 && age(i) <= 90 && i.status !== 'Paid' },
            { label: '90+ days overdue', filter: (i) => age(i) > 90 && i.status !== 'Paid' },
        ];
        const ageing = buckets.map(b => ({
            label: b.label,
            count: clientInvs.filter(b.filter).length,
            value: clientInvs.filter(b.filter).reduce((a, i) => a + Number(i.totalAmount), 0),
        }));
        const totalOutstanding = clientInvs.filter(i => i.status !== 'Paid').reduce((a, i) => a + Number(i.netAmount), 0);
        const totalPaid = clientInvs.filter(i => i.status === 'Paid').reduce((a, i) => a + Number(i.netAmount), 0);
        return {
            kpis: { totalOutstanding, totalPaid, overdue: ageing[3].value, totalInvoices: clientInvs.length },
            ageing,
            rows: clientInvs.slice(0, 100),
        };
    }
    async feeReport(q) {
        const fcs = await this.prisma.feeCalculator.findMany({
            include: { opportunity: { select: { commNum: true, name: true, clientName: true, status: true, value: true, lead: { select: { name: true } } } } },
            orderBy: { updatedAt: 'desc' }, take: 1000,
        });
        const withData = fcs.filter(f => Number(f.grandTotal) > 0);
        const totalForecast = withData.reduce((a, f) => a + Number(f.grandTotal), 0);
        const totalConstruction = withData.reduce((a, f) => a + Number(f.constructionValue), 0);
        return {
            kpis: {
                totalForecast,
                totalConstruction,
                avgMargin: totalConstruction > 0 ? (totalForecast / totalConstruction) * 100 : 0,
                commissions: withData.length,
            },
            byProcRoute: this.groupByField(fcs, 'procRoute'),
            rows: fcs.slice(0, 100),
        };
    }
    async activityReport(q) {
        const { page = 1, pageSize = 50, search, userId, entityType, from, to } = q;
        const take = Math.min(+pageSize, 200);
        const skip = (+page - 1) * take;
        const where = {
            ...(userId && { userId }),
            ...(entityType && { entityType }),
            ...((from || to) && { createdAt: { ...(from && { gte: new Date(from) }), ...(to && { lte: new Date(to) }) } }),
            ...(search && { OR: [
                    { description: { contains: search, mode: 'insensitive' } },
                    { entityType: { contains: search, mode: 'insensitive' } },
                ] }),
        };
        const [data, total] = await Promise.all([
            this.prisma.auditLog.findMany({
                where, skip, take, orderBy: { createdAt: 'desc' },
                include: { user: { select: { name: true, initials: true, avatarColor: true } } },
            }),
            this.prisma.auditLog.count({ where }),
        ]);
        return { data, meta: paged(total, +page, take) };
    }
    async pendingActions(userId) {
        const now = new Date();
        const [pendingSRPs, overdueInvoices, openCEs, pendingPIs, expDelegations] = await Promise.all([
            this.prisma.srp.findMany({
                where: { status: 'SentForApproval', sentForApprovalAt: { lte: new Date(Date.now() - 3 * 86400000) } },
                include: { opportunity: { select: { commNum: true, name: true, clientName: true, lead: { select: { name: true } } } } },
                orderBy: { sentForApprovalAt: 'asc' }, take: 20,
            }),
            this.prisma.clientInvoice.findMany({
                where: { status: { not: 'Paid' }, issuedAt: { lte: new Date(Date.now() - 30 * 86400000) } },
                include: { schedule: { include: { opportunity: { select: { commNum: true, clientName: true } } } } },
                orderBy: { issuedAt: 'asc' }, take: 20,
            }),
            this.prisma.ceEvent.findMany({
                where: { stage: { notIn: ['Approved', 'Rejected'] }, raisedAt: { lte: new Date(Date.now() - 14 * 86400000) } },
                include: { opportunity: { select: { commNum: true, clientName: true } } },
                orderBy: { raisedAt: 'asc' }, take: 20,
            }),
            this.prisma.projectPi.findMany({
                where: { status: 'Pending Approval' },
                include: { opportunity: { select: { commNum: true, name: true, lead: { select: { name: true } } } } },
                take: 20,
            }),
            this.prisma.delegation.findMany({
                where: { status: 'Active', endDate: { lte: new Date(Date.now() + 7 * 86400000), gte: now } },
                include: { fromUser: { select: { name: true } }, toUser: { select: { name: true } } },
                take: 10,
            }),
        ]);
        return {
            total: pendingSRPs.length + overdueInvoices.length + openCEs.length + pendingPIs.length,
            sections: {
                srpApprovals: { count: pendingSRPs.length, items: pendingSRPs },
                overdueInvoices: { count: overdueInvoices.length, items: overdueInvoices },
                openCEs: { count: openCEs.length, items: openCEs },
                pendingPIs: { count: pendingPIs.length, items: pendingPIs },
                expiringDelegations: { count: expDelegations.length, items: expDelegations },
            },
        };
    }
    async calendarEvents(from, to) {
        const start = new Date(from);
        const end = new Date(to);
        const [invoices, ces, delegations, surveys] = await Promise.all([
            this.prisma.invoiceSchedule.findMany({
                where: { dueDate: { gte: start, lte: end } },
                include: { opportunity: { select: { commNum: true, clientName: true } } },
            }),
            this.prisma.ceEvent.findMany({
                where: { raisedAt: { gte: start, lte: end } },
                include: { opportunity: { select: { commNum: true, clientName: true } } },
            }),
            this.prisma.delegation.findMany({
                where: { endDate: { gte: start, lte: end } },
                include: { fromUser: { select: { name: true } }, toUser: { select: { name: true } } },
            }),
            this.prisma.survey.findMany({
                where: { deadline: { gte: start, lte: end } },
                include: { opportunity: { select: { commNum: true, clientName: true } } },
            }),
        ]);
        const events = [
            ...invoices.map(i => ({ id: `inv-${i.id}`, type: 'invoice', date: i.dueDate, title: `Invoice Due: ${i.opportunity?.commNum}`, subtitle: i.opportunity?.clientName, color: '#2563eb', milestone: i.milestone })),
            ...ces.map(c => ({ id: `ce-${c.id}`, type: 'ce', date: c.raisedAt, title: `CE Raised: ${c.opportunity?.commNum}`, subtitle: c.description?.substring(0, 40), color: '#d97706' })),
            ...delegations.map(d => ({ id: `dlg-${d.id}`, type: 'delegation', date: d.endDate, title: `Delegation Expires`, subtitle: `${d.fromUser?.name} → ${d.toUser?.name}`, color: '#7c3aed' })),
            ...surveys.map(s => ({ id: `srv-${s.id}`, type: 'survey', date: s.deadline, title: `Survey Deadline: ${s.opportunity?.commNum}`, subtitle: s.opportunity?.clientName, color: '#16a34a' })),
        ];
        return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    async aiInsights(type) {
        const [oppCount, ceCount, srpPending, overdueInvCount] = await Promise.all([
            this.prisma.opportunity.count(),
            this.prisma.ceEvent.count({ where: { stage: { notIn: ['Approved', 'Rejected'] } } }),
            this.prisma.srp.count({ where: { status: 'SentForApproval' } }),
            this.prisma.clientInvoice.count({ where: { status: { not: 'Paid' }, issuedAt: { lte: new Date(Date.now() - 30 * 86400000) } } }),
        ]);
        const insights = [
            {
                id: 'pipeline-health',
                category: 'Pipeline',
                severity: oppCount > 50 ? 'info' : 'warning',
                title: 'Pipeline Volume Analysis',
                summary: `${oppCount} active commissions in pipeline.${oppCount < 10 ? ' Pipeline volume is below typical thresholds — consider business development activity.' : ' Pipeline is healthy.'}`,
                metric: oppCount,
                metricLabel: 'commissions',
                trend: 'stable',
                recommendation: 'Review Lead-stage commissions and progress stalled opportunities.',
            },
            {
                id: 'ce-risk',
                category: 'Risk',
                severity: ceCount > 5 ? 'warning' : 'info',
                title: 'Compensation Event Backlog',
                summary: `${ceCount} open CEs require action.${ceCount > 10 ? ' High CE backlog may indicate scope uncertainty. Review Assessment-stage CEs for escalation.' : ''}`,
                metric: ceCount,
                metricLabel: 'open CEs',
                trend: ceCount > 5 ? 'increasing' : 'stable',
                recommendation: ceCount > 5 ? 'Prioritise CE review meetings. Escalate CEs open >14 days.' : 'CE pipeline is well-managed.',
            },
            {
                id: 'srp-bottleneck',
                category: 'Approvals',
                severity: srpPending > 3 ? 'critical' : srpPending > 0 ? 'warning' : 'good',
                title: 'SRP Approval Bottleneck',
                summary: `${srpPending} SRPs awaiting commercial lead approval.${srpPending > 3 ? ' Approval queue is above normal — may indicate resource constraint.' : ''}`,
                metric: srpPending,
                metricLabel: 'pending approvals',
                trend: srpPending > 3 ? 'critical' : 'stable',
                recommendation: srpPending > 0 ? 'Delegate SRP approvals if primary approver is unavailable. Use delegation module.' : 'All SRPs are up to date.',
            },
            {
                id: 'invoice-overdue',
                category: 'Finance',
                severity: overdueInvCount > 2 ? 'critical' : overdueInvCount > 0 ? 'warning' : 'good',
                title: 'Overdue Invoice Recovery',
                summary: `${overdueInvCount} client invoices are overdue >30 days. Prompt action required to recover outstanding fees.`,
                metric: overdueInvCount,
                metricLabel: 'overdue invoices',
                trend: overdueInvCount > 0 ? 'action-required' : 'stable',
                recommendation: overdueInvCount > 0 ? 'Issue payment reminders. Escalate invoices >60 days to finance director.' : 'All invoices are current.',
            },
            {
                id: 'workload-distribution',
                category: 'Operations',
                severity: 'info',
                title: 'Commission Lead Workload',
                summary: 'Workload appears distributed across leads. Monitor for concentration risk if a lead leaves.',
                metric: null,
                metricLabel: null,
                trend: 'stable',
                recommendation: 'Ensure cover plans are in place for all leads with active Contracted/Work Started commissions.',
            },
        ];
        return { insights, generatedAt: new Date().toISOString() };
    }
    async getScheduledReports() {
        return [
            { id: 'sched-1', name: 'Weekly Pipeline Summary', reportType: 'pipeline', frequency: 'weekly', dayOfWeek: 1, time: '08:00', enabled: true, lastRun: new Date(Date.now() - 7 * 86400000).toISOString(), nextRun: new Date(Date.now() + 86400000).toISOString(), deliveryMethod: 'email', recipients: 'management@perfectcircle.co.uk', status: 'active' },
            { id: 'sched-2', name: 'Monthly CE Report', reportType: 'ce', frequency: 'monthly', dayOfMonth: 1, time: '07:00', enabled: true, lastRun: new Date(Date.now() - 30 * 86400000).toISOString(), nextRun: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString(), deliveryMethod: 'email', recipients: 'commercial@perfectcircle.co.uk', status: 'active' },
            { id: 'sched-3', name: 'Daily Overdue Invoice Alert', reportType: 'invoices', frequency: 'daily', time: '09:00', enabled: false, lastRun: null, nextRun: null, deliveryMethod: 'notification', recipients: null, status: 'paused' },
        ];
    }
    groupBy(items, field) {
        const map = {};
        items.forEach(item => {
            const key = item[field] || 'Unknown';
            if (!map[key])
                map[key] = { count: 0, value: 0 };
            map[key].count++;
            map[key].value += Number(item.value || 0);
        });
        return Object.entries(map).map(([k, v]) => ({ name: k, ...v })).sort((a, b) => b.value - a.value).slice(0, 10);
    }
    groupByField(items, field) {
        const map = {};
        items.forEach(item => { const k = item[field] || 'Unknown'; map[k] = (map[k] || 0) + 1; });
        return Object.entries(map).map(([name, count]) => ({ name, count }));
    }
};
exports.ReportingService = ReportingService;
exports.ReportingService = ReportingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audit_service_1.AuditService])
], ReportingService);
let ReportingController = class ReportingController {
    constructor(svc) {
        this.svc = svc;
    }
    pipeline(q) { return this.svc.pipelineReport(q); }
    ce(q) { return this.svc.ceReport(q); }
    srp(q) { return this.svc.srpReport(q); }
    invoices(q) { return this.svc.invoiceReport(q); }
    fees(q) { return this.svc.feeReport(q); }
    activity(q) { return this.svc.activityReport(q); }
    pending(q) { return this.svc.pendingActions(q.userId); }
    calendar(from, to) { return this.svc.calendarEvents(from || new Date().toISOString().slice(0, 10), to || new Date(Date.now() + 30 * 86400000).toISOString().slice(0, 10)); }
    aiInsights(type) { return this.svc.aiInsights(type); }
    scheduled() { return this.svc.getScheduledReports(); }
};
exports.ReportingController = ReportingController;
__decorate([
    (0, common_1.Get)('pipeline'),
    (0, permissions_decorator_1.Permissions)('reporting:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "pipeline", null);
__decorate([
    (0, common_1.Get)('ce'),
    (0, permissions_decorator_1.Permissions)('reporting:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "ce", null);
__decorate([
    (0, common_1.Get)('srp'),
    (0, permissions_decorator_1.Permissions)('reporting:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "srp", null);
__decorate([
    (0, common_1.Get)('invoices'),
    (0, permissions_decorator_1.Permissions)('reporting:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "invoices", null);
__decorate([
    (0, common_1.Get)('fees'),
    (0, permissions_decorator_1.Permissions)('reporting:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "fees", null);
__decorate([
    (0, common_1.Get)('activity'),
    (0, permissions_decorator_1.Permissions)('reporting:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "activity", null);
__decorate([
    (0, common_1.Get)('pending-actions'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "pending", null);
__decorate([
    (0, common_1.Get)('calendar'),
    __param(0, (0, common_1.Query)('from')),
    __param(1, (0, common_1.Query)('to')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "calendar", null);
__decorate([
    (0, common_1.Get)('ai-insights'),
    (0, permissions_decorator_1.Permissions)('reporting:read'),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "aiInsights", null);
__decorate([
    (0, common_1.Get)('scheduled'),
    (0, permissions_decorator_1.Permissions)('reporting:read'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportingController.prototype, "scheduled", null);
exports.ReportingController = ReportingController = __decorate([
    (0, swagger_1.ApiTags)('Reporting'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'reporting', version: '1' }),
    __metadata("design:paramtypes", [ReportingService])
], ReportingController);
let ReportingModule = class ReportingModule {
};
exports.ReportingModule = ReportingModule;
exports.ReportingModule = ReportingModule = __decorate([
    (0, common_1.Module)({
        imports: [audit_module_1.AuditModule],
        controllers: [ReportingController],
        providers: [ReportingService],
        exports: [ReportingService],
    })
], ReportingModule);
//# sourceMappingURL=reporting.module.js.map