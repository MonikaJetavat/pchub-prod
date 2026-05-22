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
exports.DashboardModule = exports.MasterLookupModule = exports.DelegationModule = exports.RolesModule = exports.UsersModule = exports.SuppliersModule = exports.SurveysModule = exports.ProjectPiModule = exports.CeModule = exports.InvoicesModule = exports.FeeCalculatorModule = exports.SrpModule = exports.OpportunitiesModule = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const prisma_service_1 = require("../../prisma/prisma.service");
const audit_service_1 = require("../audit/audit.service");
const notifications_service_1 = require("../notifications/notifications.service");
const audit_module_1 = require("../audit/audit.module");
const notifications_module_1 = require("../notifications/notifications.module");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const rbac_guard_1 = require("../../common/guards/rbac.guard");
const permissions_decorator_1 = require("../../common/decorators/permissions.decorator");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
class ListQuery {
    constructor() {
        this.page = 1;
        this.pageSize = 20;
        this.sortBy = 'createdAt';
        this.sortDir = 'desc';
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListQuery.prototype, "q", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ListQuery.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], ListQuery.prototype, "pageSize", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListQuery.prototype, "sortBy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListQuery.prototype, "sortDir", void 0);
const meta = (total, page, ps) => ({ total, page, pageSize: ps, pages: Math.ceil(total / ps) });
const safeCol = (col, valid, def = 'createdAt') => valid.includes(col) ? col : def;
const STAGE_PCT = {
    Lead: 20, Probable: 50, StrongProbable: 75, Contracted: 100, WorkStarted: 100, Completed: 100,
};
const PSC_RATES = {
    'Design & Build - 1 stage': 2.45, 'Design & Build - 2 stage': 2.65,
    'Traditional': 2.80, 'Framework Agreement': 2.20, 'Negotiated': 2.00,
};
let OpportunitiesService = class OpportunitiesService {
    constructor(p, a) {
        this.p = p;
        this.a = a;
    }
    async findAll(q) {
        const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take;
        const ob = { [safeCol(q.sortBy || 'createdAt', ['createdAt', 'name', 'clientName', 'value', 'status', 'commNum', 'stagePercent'])]: q.sortDir || 'desc' };
        const w = {
            ...(q.status && { status: q.status }), ...(q.leadId && { leadId: q.leadId }),
            ...(q.sector && { sector: q.sector }), ...(q.region && { region: q.region }),
            ...(q.q && { OR: [{ name: { contains: q.q, mode: 'insensitive' } }, { clientName: { contains: q.q, mode: 'insensitive' } }, { commNum: { contains: q.q, mode: 'insensitive' } }] }),
        };
        const [data, total] = await Promise.all([
            this.p.opportunity.findMany({ where: w, skip, take, orderBy: ob, include: { lead: { select: { id: true, name: true, initials: true, avatarColor: true } }, _count: { select: { ceEvents: true, invoiceSchedules: true } } } }),
            this.p.opportunity.count({ where: w }),
        ]);
        return { data, meta: meta(total, +(q.page || 1), take) };
    }
    async findOne(id) {
        const o = await this.p.opportunity.findUnique({ where: { id }, include: { lead: true, srp: { select: { id: true, status: true, approvedAt: true, commercialLead: true, approvedBy: true } }, feeCalculator: { select: { id: true, grandTotal: true, constructionValue: true, procRoute: true, totalPrimeCore: true, totalCore: true, totalTimeCharges: true, totalExtConsultancy: true, totalDisbursements: true, pscFee: true } }, projectPi: true, _count: { select: { ceEvents: true, invoiceSchedules: true, surveys: true } } } });
        if (!o)
            throw new common_1.NotFoundException(`Opportunity ${id} not found`);
        return o;
    }
    async create(dto, user) {
        const latest = await this.p.opportunity.findFirst({ orderBy: { commNum: 'desc' }, select: { commNum: true } });
        const n = latest ? parseInt(latest.commNum.replace('PC-', '')) + 1 : 15300;
        const commNum = `PC-${n}`;
        const o = await this.p.opportunity.create({ data: {
                name: dto.name,
                clientName: dto.clientName,
                leadId: dto.leadId || undefined,
                status: dto.status || 'Lead',
                value: dto.value || 0,
                services: dto.services || [],
                sector: dto.sector || undefined,
                region: dto.region || undefined,
                commNum,
                stagePercent: STAGE_PCT[dto.status || 'Lead'] ?? 20,
                srp: { create: { projectOverview: dto.notes || undefined } },
                feeCalculator: { create: {} },
                projectPi: { create: {} },
            }, include: { lead: { select: { name: true } } } });
        await this.a.log({ action: 'Create', entityType: 'opportunities', entityId: o.id, opportunityId: o.id, userId: user?.id, description: `Commission ${commNum} created`, afterVal: { commNum, status: dto.status } });
        return o;
    }
    async update(id, dto, user) {
        const before = await this.findOne(id);
        const data = { ...dto };
        if (dto.status)
            data.stagePercent = STAGE_PCT[dto.status] ?? before.stagePercent;
        const o = await this.p.opportunity.update({ where: { id }, data });
        await this.a.log({ action: 'Update', entityType: 'opportunities', entityId: id, opportunityId: id, userId: user?.id, description: `Commission ${before.commNum} updated`, beforeVal: { status: before.status }, afterVal: { status: o.status } });
        await this.a.versionSnapshot('opportunities', id, id, before, user?.name || 'System', 'Updated');
        return o;
    }
    async remove(id, user) {
        const o = await this.findOne(id);
        await this.p.opportunity.delete({ where: { id } });
        await this.a.log({ action: 'Delete', entityType: 'opportunities', entityId: id, userId: user?.id, description: `Commission ${o.commNum} deleted` });
    }
    async getVersions(id) { return this.p.entityVersion.findMany({ where: { entityType: 'opportunities', entityId: id }, orderBy: { version: 'desc' }, take: 20 }); }
};
OpportunitiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService])
], OpportunitiesService);
let OpportunitiesController = class OpportunitiesController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    fo(id) { return this.s.findOne(id); }
    cr(d, u) { return this.s.create(d, u); }
    up(id, d, u) { return this.s.update(id, d, u); }
    st(id, s, u) { return this.s.update(id, { status: s }, u); }
    rm(id, u) { return this.s.remove(id, u); }
    vr(id) { return this.s.getVersions(id); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('opportunities:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "fa", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, permissions_decorator_1.Permissions)('opportunities:read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "fo", null);
__decorate([
    (0, common_1.Post)(),
    (0, permissions_decorator_1.Permissions)('opportunities:write'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "cr", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, permissions_decorator_1.Permissions)('opportunities:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "up", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, permissions_decorator_1.Permissions)('opportunities:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "st", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, permissions_decorator_1.Permissions)('opportunities:delete'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "rm", null);
__decorate([
    (0, common_1.Get)(':id/versions'),
    (0, permissions_decorator_1.Permissions)('opportunities:read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpportunitiesController.prototype, "vr", null);
OpportunitiesController = __decorate([
    (0, swagger_1.ApiTags)('Opportunities'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'opportunities', version: '1' }),
    __metadata("design:paramtypes", [OpportunitiesService])
], OpportunitiesController);
let OpportunitiesModule = class OpportunitiesModule {
};
exports.OpportunitiesModule = OpportunitiesModule;
exports.OpportunitiesModule = OpportunitiesModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule], controllers: [OpportunitiesController], providers: [OpportunitiesService] })
], OpportunitiesModule);
let SrpService = class SrpService {
    constructor(p, a, n) {
        this.p = p;
        this.a = a;
        this.n = n;
    }
    async findByOpp(id) { const s = await this.p.srp.findUnique({ where: { opportunityId: id } }); if (!s)
        throw new common_1.NotFoundException('SRP not found'); return s; }
    async update(id, dto, user) { const before = await this.findByOpp(id); const s = await this.p.srp.update({ where: { opportunityId: id }, data: dto }); await this.a.log({ action: 'Update', entityType: 'srps', entityId: s.id, opportunityId: id, userId: user?.id, description: 'SRP updated' }); await this.a.versionSnapshot('srps', s.id, id, before, user?.name || 'System', 'SRP updated'); return s; }
    async sendForApproval(id, user) { const s = await this.p.srp.update({ where: { opportunityId: id }, data: { status: 'SentForApproval', sentForApprovalAt: new Date() } }); await this.p.opportunity.update({ where: { id }, data: { srpStatus: 'SentForApproval' } }); await this.a.log({ action: 'Approve', entityType: 'srps', entityId: s.id, opportunityId: id, userId: user?.id, description: 'SRP sent for approval' }); await this.n.push({ userId: user?.id, type: 'SrpApproval', priority: 'High', title: 'SRP pending approval', body: 'Awaiting commercial lead review', entityType: 'opportunities', entityId: id }); return s; }
    async approve(id, user, comments) { const s = await this.p.srp.update({ where: { opportunityId: id }, data: { status: 'Approved', approvedAt: new Date(), approvedBy: user?.name, approvalComments: comments } }); await this.p.opportunity.update({ where: { id }, data: { srpStatus: 'Approved' } }); await this.a.log({ action: 'Approve', entityType: 'srps', entityId: s.id, opportunityId: id, userId: user?.id, description: 'SRP approved', afterVal: { approvedBy: user?.name } }); return s; }
    async reject(id, user, comments) { const s = await this.p.srp.update({ where: { opportunityId: id }, data: { status: 'Rejected', approvalComments: comments } }); await this.p.opportunity.update({ where: { id }, data: { srpStatus: 'Rejected' } }); await this.a.log({ action: 'Reject', entityType: 'srps', entityId: s.id, opportunityId: id, userId: user?.id, description: 'SRP rejected' }); return s; }
};
SrpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService, notifications_service_1.NotificationsService])
], SrpService);
let SrpController = class SrpController {
    constructor(s) {
        this.s = s;
    }
    fo(id) { return this.s.findByOpp(id); }
    up(id, d, u) { return this.s.update(id, d, u); }
    sa(id, u) { return this.s.sendForApproval(id, u); }
    ap(id, u, c) { return this.s.approve(id, u, c); }
    rj(id, u, c) { return this.s.reject(id, u, c); }
};
__decorate([
    (0, common_1.Get)(':oid'),
    (0, permissions_decorator_1.Permissions)('srp:read'),
    __param(0, (0, common_1.Param)('oid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SrpController.prototype, "fo", null);
__decorate([
    (0, common_1.Put)(':oid'),
    (0, permissions_decorator_1.Permissions)('srp:write'),
    __param(0, (0, common_1.Param)('oid')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], SrpController.prototype, "up", null);
__decorate([
    (0, common_1.Post)(':oid/send-approval'),
    (0, permissions_decorator_1.Permissions)('srp:write'),
    __param(0, (0, common_1.Param)('oid')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SrpController.prototype, "sa", null);
__decorate([
    (0, common_1.Post)(':oid/approve'),
    (0, permissions_decorator_1.Permissions)('srp:approve'),
    __param(0, (0, common_1.Param)('oid')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)('comments')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", void 0)
], SrpController.prototype, "ap", null);
__decorate([
    (0, common_1.Post)(':oid/reject'),
    (0, permissions_decorator_1.Permissions)('srp:approve'),
    __param(0, (0, common_1.Param)('oid')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Body)('comments')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", void 0)
], SrpController.prototype, "rj", null);
SrpController = __decorate([
    (0, swagger_1.ApiTags)('SRP'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'srp', version: '1' }),
    __metadata("design:paramtypes", [SrpService])
], SrpController);
let SrpModule = class SrpModule {
};
exports.SrpModule = SrpModule;
exports.SrpModule = SrpModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule, notifications_module_1.NotificationsModule], controllers: [SrpController], providers: [SrpService] })
], SrpModule);
function fcTotals(d) {
    const tc = (d.timeCharges || []), nsf = (d.nonSfr || []), dis = (d.disbursements || []);
    const tcT = tc.filter(r => !r.ceId).reduce((a, r) => a + ((r.overrideRate || r.hourlyRate || 0) * (r.estHours || 0)) + (r.inflationAmount || 0), 0);
    const extT = nsf.filter(r => !r.ceId).reduce((a, r) => a + (+r.netFee || 0), 0);
    const disT = dis.filter(r => !r.ceId).reduce((a, r) => a + (+r.netFee || 0), 0);
    const pscPct = d.overridePscPct > 0 ? +d.overridePscPct : (PSC_RATES[d.procRoute] || 2.45);
    const pscFee = (tcT + extT) * pscPct / 100;
    return { totalTimeCharges: tcT, totalExtConsultancy: extT, totalDisbursements: disT, pscFee, grandTotal: tcT + extT + pscFee + disT };
}
let FeeCalculatorService = class FeeCalculatorService {
    constructor(p, a) {
        this.p = p;
        this.a = a;
    }
    async findByOpp(id) { const f = await this.p.feeCalculator.findUnique({ where: { opportunityId: id } }); if (!f)
        throw new common_1.NotFoundException('FC not found'); return f; }
    async update(id, dto, user) { const before = await this.findByOpp(id); const tots = fcTotals(dto); const f = await this.p.feeCalculator.update({ where: { opportunityId: id }, data: { ...dto, ...tots } }); await this.a.log({ action: 'Update', entityType: 'fee_calculators', entityId: f.id, opportunityId: id, userId: user?.id, description: `FC updated — £${tots.grandTotal.toFixed(0)}`, beforeVal: { grandTotal: Number(before.grandTotal) }, afterVal: { grandTotal: tots.grandTotal } }); await this.a.versionSnapshot('fee_calculators', f.id, id, before, user?.name || 'System', 'FC updated'); return f; }
};
FeeCalculatorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService])
], FeeCalculatorService);
let FeeCalculatorController = class FeeCalculatorController {
    constructor(s) {
        this.s = s;
    }
    fo(id) { return this.s.findByOpp(id); }
    up(id, d, u) { return this.s.update(id, d, u); }
};
__decorate([
    (0, common_1.Get)(':oid'),
    (0, permissions_decorator_1.Permissions)('fee_calculator:read'),
    __param(0, (0, common_1.Param)('oid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeeCalculatorController.prototype, "fo", null);
__decorate([
    (0, common_1.Put)(':oid'),
    (0, permissions_decorator_1.Permissions)('fee_calculator:write'),
    __param(0, (0, common_1.Param)('oid')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], FeeCalculatorController.prototype, "up", null);
FeeCalculatorController = __decorate([
    (0, swagger_1.ApiTags)('Fee Calculator'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'fee-calculator', version: '1' }),
    __metadata("design:paramtypes", [FeeCalculatorService])
], FeeCalculatorController);
let FeeCalculatorModule = class FeeCalculatorModule {
};
exports.FeeCalculatorModule = FeeCalculatorModule;
exports.FeeCalculatorModule = FeeCalculatorModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule], controllers: [FeeCalculatorController], providers: [FeeCalculatorService] })
], FeeCalculatorModule);
let InvoicesService = class InvoicesService {
    constructor(p, a) {
        this.p = p;
        this.a = a;
    }
    async clientList(q) { const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take; const w = { ...(q.status && { status: q.status }), ...(q.q ? { OR: [{ invoiceRef: { contains: q.q, mode: 'insensitive' } }, { schedule: { opportunity: { clientName: { contains: q.q, mode: 'insensitive' } } } }, { schedule: { opportunity: { commNum: { contains: q.q, mode: 'insensitive' } } } }] } : {}) }; const [d, t] = await Promise.all([this.p.clientInvoice.findMany({ where: w, skip, take, orderBy: { issuedAt: 'desc' }, include: { schedule: { include: { opportunity: { select: { commNum: true, name: true, clientName: true } } } } } }), this.p.clientInvoice.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async supplierList(q) { const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take; const w = { ...(q.status && { status: q.status }), ...(q.q ? { OR: [{ invoiceRef: { contains: q.q, mode: 'insensitive' } }, { supplierName: { contains: q.q, mode: 'insensitive' } }] } : {}) }; const [d, t] = await Promise.all([this.p.supplierInvoice.findMany({ where: w, skip, take, orderBy: { receivedAt: 'desc' }, include: { schedule: { include: { opportunity: { select: { commNum: true, name: true } } } } } }), this.p.supplierInvoice.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async updateClientStatus(id, status, user) { const i = await this.p.clientInvoice.update({ where: { id }, data: { status: status, ...(status === 'Paid' && { paidAt: new Date() }) } }); await this.a.log({ action: 'Update', entityType: 'client_invoices', entityId: id, userId: user?.id, description: `Invoice ${i.invoiceRef} → ${status}` }); return i; }
};
InvoicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService])
], InvoicesService);
let InvoicesController = class InvoicesController {
    constructor(s) {
        this.s = s;
    }
    cl(q) { return this.s.clientList(q); }
    sl(q) { return this.s.supplierList(q); }
    us(id, s, u) { return this.s.updateClientStatus(id, s, u); }
};
__decorate([
    (0, common_1.Get)('client'),
    (0, permissions_decorator_1.Permissions)('invoices:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "cl", null);
__decorate([
    (0, common_1.Get)('supplier'),
    (0, permissions_decorator_1.Permissions)('invoices:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "sl", null);
__decorate([
    (0, common_1.Patch)('client/:id/status'),
    (0, permissions_decorator_1.Permissions)('invoices:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], InvoicesController.prototype, "us", null);
InvoicesController = __decorate([
    (0, swagger_1.ApiTags)('Invoices'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'invoices', version: '1' }),
    __metadata("design:paramtypes", [InvoicesService])
], InvoicesController);
let InvoicesModule = class InvoicesModule {
};
exports.InvoicesModule = InvoicesModule;
exports.InvoicesModule = InvoicesModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule], controllers: [InvoicesController], providers: [InvoicesService] })
], InvoicesModule);
let CeService = class CeService {
    constructor(p, a, n) {
        this.p = p;
        this.a = a;
        this.n = n;
    }
    async findAll(q) { const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take; const w = { ...(q.opportunityId && { opportunityId: q.opportunityId }), ...(q.q ? { OR: [{ ceRef: { contains: q.q, mode: 'insensitive' } }, { description: { contains: q.q, mode: 'insensitive' } }, { opportunity: { commNum: { contains: q.q, mode: 'insensitive' } } }] } : {}) }; const [d, t] = await Promise.all([this.p.ceEvent.findMany({ where: w, skip, take, orderBy: { raisedAt: 'desc' }, include: { opportunity: { select: { commNum: true, name: true, clientName: true } } } }), this.p.ceEvent.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async create(dto, user) { const opp = await this.p.opportunity.findUnique({ where: { id: dto.opportunityId }, select: { commNum: true } }); if (!opp)
        throw new common_1.NotFoundException('Opportunity not found'); const ce = await this.p.ceEvent.create({ data: { ...dto, raisedBy: user?.name } }); await this.a.log({ action: 'Create', entityType: 'ce_events', entityId: ce.id, opportunityId: dto.opportunityId, userId: user?.id, description: `CE ${ce.ceRef} raised on ${opp.commNum}`, afterVal: { value: Number(ce.value) } }); return ce; }
    async updateStage(id, stage, user) { const ce = await this.p.ceEvent.update({ where: { id }, data: { stage: stage } }); await this.a.log({ action: 'Update', entityType: 'ce_events', entityId: id, opportunityId: ce.opportunityId, userId: user?.id, description: `CE ${ce.ceRef} → ${stage}` }); return ce; }
};
CeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService, notifications_service_1.NotificationsService])
], CeService);
let CeController = class CeController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    cr(d, u) { return this.s.create(d, u); }
    us(id, s, u) { return this.s.updateStage(id, s, u); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('ce:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CeController.prototype, "fa", null);
__decorate([
    (0, common_1.Post)(),
    (0, permissions_decorator_1.Permissions)('ce:write'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CeController.prototype, "cr", null);
__decorate([
    (0, common_1.Patch)(':id/stage'),
    (0, permissions_decorator_1.Permissions)('ce:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('stage')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], CeController.prototype, "us", null);
CeController = __decorate([
    (0, swagger_1.ApiTags)('CE'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'ce', version: '1' }),
    __metadata("design:paramtypes", [CeService])
], CeController);
let CeModule = class CeModule {
};
exports.CeModule = CeModule;
exports.CeModule = CeModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule, notifications_module_1.NotificationsModule], controllers: [CeController], providers: [CeService] })
], CeModule);
let ProjectPiService = class ProjectPiService {
    constructor(p, a) {
        this.p = p;
        this.a = a;
    }
    async findAll(q) { const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take; const w = q.q ? { OR: [{ opportunity: { commNum: { contains: q.q, mode: 'insensitive' } } }, { opportunity: { clientName: { contains: q.q, mode: 'insensitive' } } }] } : {}; const [d, t] = await Promise.all([this.p.projectPi.findMany({ where: w, skip, take, include: { opportunity: { select: { commNum: true, name: true, clientName: true, lead: { select: { name: true } } } } } }), this.p.projectPi.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async update(oid, dto, user) { const pi = await this.p.projectPi.update({ where: { opportunityId: oid }, data: dto }); await this.a.log({ action: 'Update', entityType: 'project_pis', entityId: pi.id, opportunityId: oid, userId: user?.id, description: 'PI updated' }); return pi; }
    async approve(oid, user) { const before = await this.p.projectPi.findUnique({ where: { opportunityId: oid }, select: { version: true } }); const pi = await this.p.projectPi.update({ where: { opportunityId: oid }, data: { status: 'Approved', approver: user?.name, approvedAt: new Date(), version: (before?.version || 1) + 1 } }); await this.a.log({ action: 'Approve', entityType: 'project_pis', entityId: pi.id, opportunityId: oid, userId: user?.id, description: `PI approved v${pi.version}` }); return pi; }
};
ProjectPiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService])
], ProjectPiService);
let ProjectPiController = class ProjectPiController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    up(id, d, u) { return this.s.update(id, d, u); }
    ap(id, u) { return this.s.approve(id, u); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('pi:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectPiController.prototype, "fa", null);
__decorate([
    (0, common_1.Put)(':oid'),
    (0, permissions_decorator_1.Permissions)('pi:write'),
    __param(0, (0, common_1.Param)('oid')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], ProjectPiController.prototype, "up", null);
__decorate([
    (0, common_1.Post)(':oid/approve'),
    (0, permissions_decorator_1.Permissions)('pi:approve'),
    __param(0, (0, common_1.Param)('oid')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProjectPiController.prototype, "ap", null);
ProjectPiController = __decorate([
    (0, swagger_1.ApiTags)('Project PI'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'project-pi', version: '1' }),
    __metadata("design:paramtypes", [ProjectPiService])
], ProjectPiController);
let ProjectPiModule = class ProjectPiModule {
};
exports.ProjectPiModule = ProjectPiModule;
exports.ProjectPiModule = ProjectPiModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule], controllers: [ProjectPiController], providers: [ProjectPiService] })
], ProjectPiModule);
let SurveysService = class SurveysService {
    constructor(p) {
        this.p = p;
    }
    async findAll(q) { const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take; const w = { ...(q.type && { type: q.type }), ...(q.q ? { OR: [{ opportunity: { clientName: { contains: q.q, mode: 'insensitive' } } }, { opportunity: { commNum: { contains: q.q, mode: 'insensitive' } } }] } : {}) }; const [d, t] = await Promise.all([this.p.survey.findMany({ where: w, skip, take, orderBy: { createdAt: 'desc' }, include: { opportunity: { select: { commNum: true, name: true, clientName: true } }, supplier: { select: { name: true } } } }), this.p.survey.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async submit(id, r) { return this.p.survey.update({ where: { id }, data: { responses: r, submittedAt: new Date(), satisfaction: r.satisfaction, nps: r.nps } }); }
};
SurveysService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SurveysService);
let SurveysController = class SurveysController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    sb(id, b) { return this.s.submit(id, b); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('surveys:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SurveysController.prototype, "fa", null);
__decorate([
    (0, common_1.Post)(':id/submit'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SurveysController.prototype, "sb", null);
SurveysController = __decorate([
    (0, swagger_1.ApiTags)('Surveys'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'surveys', version: '1' }),
    __metadata("design:paramtypes", [SurveysService])
], SurveysController);
let SurveysModule = class SurveysModule {
};
exports.SurveysModule = SurveysModule;
exports.SurveysModule = SurveysModule = __decorate([
    (0, common_1.Module)({ controllers: [SurveysController], providers: [SurveysService] })
], SurveysModule);
let SuppliersService = class SuppliersService {
    constructor(p, a) {
        this.p = p;
        this.a = a;
    }
    async findAll(q) { const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take; const w = { ...(q.status && { status: q.status }), ...(q.q ? { OR: [{ name: { contains: q.q, mode: 'insensitive' } }, { type: { contains: q.q, mode: 'insensitive' } }] } : {}) }; const [d, t] = await Promise.all([this.p.supplier.findMany({ where: w, skip, take, orderBy: { name: 'asc' } }), this.p.supplier.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async findOne(id) { const s = await this.p.supplier.findUnique({ where: { id } }); if (!s)
        throw new common_1.NotFoundException('Supplier not found'); return s; }
    async create(dto, user) { const s = await this.p.supplier.create({ data: dto }); await this.a.log({ action: 'Create', entityType: 'suppliers', entityId: s.id, userId: user?.id, description: `Supplier ${s.name} created` }); return s; }
    async update(id, dto, user) { const s = await this.p.supplier.update({ where: { id }, data: dto }); await this.a.log({ action: 'Update', entityType: 'suppliers', entityId: id, userId: user?.id, description: `Supplier ${s.name} updated` }); return s; }
};
SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService])
], SuppliersService);
let SuppliersController = class SuppliersController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    fo(id) { return this.s.findOne(id); }
    cr(d, u) { return this.s.create(d, u); }
    up(id, d, u) { return this.s.update(id, d, u); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('suppliers:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "fa", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, permissions_decorator_1.Permissions)('suppliers:read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "fo", null);
__decorate([
    (0, common_1.Post)(),
    (0, permissions_decorator_1.Permissions)('suppliers:write'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "cr", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, permissions_decorator_1.Permissions)('suppliers:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], SuppliersController.prototype, "up", null);
SuppliersController = __decorate([
    (0, swagger_1.ApiTags)('Suppliers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'suppliers', version: '1' }),
    __metadata("design:paramtypes", [SuppliersService])
], SuppliersController);
let SuppliersModule = class SuppliersModule {
};
exports.SuppliersModule = SuppliersModule;
exports.SuppliersModule = SuppliersModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule], controllers: [SuppliersController], providers: [SuppliersService] })
], SuppliersModule);
let UsersService = class UsersService {
    constructor(p, a) {
        this.p = p;
        this.a = a;
    }
    async findAll(q) { const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take; const w = { ...(q.status && { status: q.status }), ...(q.q ? { OR: [{ name: { contains: q.q, mode: 'insensitive' } }, { email: { contains: q.q, mode: 'insensitive' } }, { region: { contains: q.q, mode: 'insensitive' } }] } : {}) }; const [d, t] = await Promise.all([this.p.user.findMany({ where: w, skip, take, orderBy: { name: 'asc' }, include: { roles: { include: { role: { select: { id: true, name: true, color: true } } } } } }), this.p.user.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async findOne(id) { const u = await this.p.user.findUnique({ where: { id }, include: { roles: { include: { role: true } } } }); if (!u)
        throw new common_1.NotFoundException('User not found'); return u; }
    async sync(dto) { return this.p.user.upsert({ where: { email: dto.email }, update: { name: dto.name, status: dto.status || 'Active', region: dto.region, businessUnit: dto.businessUnit, externalId: dto.externalId }, create: { ...dto, initials: dto.name.split(' ').map((n) => n[0]).join('').substring(0, 3).toUpperCase(), avatarColor: dto.avatarColor || '#3d7eff' } }); }
    async updateStatus(id, status, user) { const u = await this.p.user.update({ where: { id }, data: { status: status } }); await this.a.log({ action: 'Update', entityType: 'users', entityId: id, userId: user?.id, description: `User ${u.name} → ${status}`, afterVal: { status } }); return u; }
    async assignRole(uid, rid, grantor) { await this.p.userRole.upsert({ where: { userId_roleId: { userId: uid, roleId: rid } }, create: { userId: uid, roleId: rid, grantedBy: grantor?.id }, update: { grantedBy: grantor?.id } }); await this.a.log({ action: 'Update', entityType: 'users', entityId: uid, userId: grantor?.id, description: `Role assigned to ${uid}` }); }
    async removeRole(uid, rid, grantor) { await this.p.userRole.delete({ where: { userId_roleId: { userId: uid, roleId: rid } } }); await this.a.log({ action: 'Update', entityType: 'users', entityId: uid, userId: grantor?.id, description: `Role removed from ${uid}` }); }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService])
], UsersService);
let UsersController = class UsersController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    fo(id) { return this.s.findOne(id); }
    sy(d) { return this.s.sync(d); }
    us(id, s, u) { return this.s.updateStatus(id, s, u); }
    ar(uid, rid, u) { return this.s.assignRole(uid, rid, u); }
    rr(uid, rid, u) { return this.s.removeRole(uid, rid, u); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('users:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "fa", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, permissions_decorator_1.Permissions)('users:read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "fo", null);
__decorate([
    (0, common_1.Post)('sync'),
    (0, permissions_decorator_1.Permissions)('users:write'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "sy", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, permissions_decorator_1.Permissions)('users:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "us", null);
__decorate([
    (0, common_1.Post)(':uid/roles/:rid'),
    (0, permissions_decorator_1.Permissions)('users:write'),
    __param(0, (0, common_1.Param)('uid')),
    __param(1, (0, common_1.Param)('rid')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "ar", null);
__decorate([
    (0, common_1.Delete)(':uid/roles/:rid'),
    (0, permissions_decorator_1.Permissions)('users:write'),
    __param(0, (0, common_1.Param)('uid')),
    __param(1, (0, common_1.Param)('rid')),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "rr", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'users', version: '1' }),
    __metadata("design:paramtypes", [UsersService])
], UsersController);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule], controllers: [UsersController], providers: [UsersService], exports: [UsersService] })
], UsersModule);
let RolesService = class RolesService {
    constructor(p, a) {
        this.p = p;
        this.a = a;
    }
    async findAll(q) { const w = q.q ? { name: { contains: q.q, mode: 'insensitive' } } : {}; const d = await this.p.role.findMany({ where: w, orderBy: { sortOrder: 'asc' }, include: { _count: { select: { users: true } } } }); return { data: d, meta: meta(d.length, 1, d.length) }; }
    async findOne(id) { const r = await this.p.role.findUnique({ where: { id }, include: { users: { include: { user: { select: { id: true, name: true, email: true, initials: true, avatarColor: true } } } } } }); if (!r)
        throw new common_1.NotFoundException('Role not found'); return r; }
    async create(dto, user) { const r = await this.p.role.create({ data: { ...dto, isSystem: false } }); await this.a.log({ action: 'Create', entityType: 'roles', entityId: r.id, userId: user?.id, description: `Role ${r.name} created` }); return r; }
    async update(id, dto, user) { const ex = await this.p.role.findUnique({ where: { id }, select: { isSystem: true, name: true } }); if (ex?.isSystem && dto.permissions)
        throw new common_1.BadRequestException('Cannot modify system role permissions'); const r = await this.p.role.update({ where: { id }, data: dto }); await this.a.log({ action: 'Update', entityType: 'roles', entityId: id, userId: user?.id, description: `Role ${ex?.name} updated` }); return r; }
    async clone(id, user) { const s = await this.findOne(id); const r = await this.p.role.create({ data: { name: `${s.name} (Copy)`, description: s.description || undefined, color: s.color || undefined, icon: s.icon || undefined, permissions: s.permissions, isSystem: false, isActive: true } }); await this.a.log({ action: 'Create', entityType: 'roles', entityId: r.id, userId: user?.id, description: `Role cloned from ${s.name}` }); return r; }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService])
], RolesService);
let RolesController = class RolesController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    fo(id) { return this.s.findOne(id); }
    cr(d, u) { return this.s.create(d, u); }
    up(id, d, u) { return this.s.update(id, d, u); }
    cl(id, u) { return this.s.clone(id, u); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('roles:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "fa", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, permissions_decorator_1.Permissions)('roles:read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "fo", null);
__decorate([
    (0, common_1.Post)(),
    (0, permissions_decorator_1.Permissions)('roles:write'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "cr", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, permissions_decorator_1.Permissions)('roles:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "up", null);
__decorate([
    (0, common_1.Post)(':id/clone'),
    (0, permissions_decorator_1.Permissions)('roles:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "cl", null);
RolesController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'roles', version: '1' }),
    __metadata("design:paramtypes", [RolesService])
], RolesController);
let RolesModule = class RolesModule {
};
exports.RolesModule = RolesModule;
exports.RolesModule = RolesModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule], controllers: [RolesController], providers: [RolesService] })
], RolesModule);
let DelegationService = class DelegationService {
    constructor(p, a, n) {
        this.p = p;
        this.a = a;
        this.n = n;
    }
    async findAll(q) { const take = Math.min(+(q.pageSize || 20), 100), skip = ((+(q.page || 1)) - 1) * take; const w = { ...(q.status && { status: q.status }), ...(q.q ? { OR: [{ fromUser: { name: { contains: q.q, mode: 'insensitive' } } }, { toUser: { name: { contains: q.q, mode: 'insensitive' } } }, { scope: { contains: q.q, mode: 'insensitive' } }] } : {}) }; const [d, t] = await Promise.all([this.p.delegation.findMany({ where: w, skip, take, orderBy: { createdAt: 'desc' }, include: { fromUser: { select: { name: true, initials: true, avatarColor: true } }, toUser: { select: { name: true, initials: true, avatarColor: true } } } }), this.p.delegation.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async create(dto, user) { if (dto.fromUserId === dto.toUserId)
        throw new common_1.BadRequestException('From/To users must differ'); if (new Date(dto.endDate) <= new Date(dto.startDate))
        throw new common_1.BadRequestException('End date must be after start date'); const d = await this.p.delegation.create({ data: { ...dto, createdById: user?.id, status: 'Pending' }, include: { fromUser: { select: { name: true } }, toUser: { select: { name: true } } } }); await this.a.log({ action: 'Create', entityType: 'delegations', entityId: d.id, userId: user?.id, description: `Delegation: ${d.fromUser.name} → ${d.toUser.name}`, afterVal: { type: dto.type } }); await this.n.push({ userId: dto.toUserId, type: 'Delegation', priority: 'Low', title: `Delegation from ${d.fromUser.name}`, body: `${dto.type} · ${dto.scope}` }); return d; }
    async revoke(id, user) { const d = await this.p.delegation.update({ where: { id }, data: { status: 'Revoked', revokedAt: new Date() } }); await this.a.log({ action: 'Update', entityType: 'delegations', entityId: id, userId: user?.id, description: 'Delegation revoked' }); return d; }
    async expireOverdue() { return this.p.delegation.updateMany({ where: { status: 'Active', endDate: { lt: new Date() } }, data: { status: 'Expired' } }); }
};
DelegationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService, notifications_service_1.NotificationsService])
], DelegationService);
let DelegationController = class DelegationController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    cr(d, u) { return this.s.create(d, u); }
    rv(id, u) { return this.s.revoke(id, u); }
    expire() { return this.s.expireOverdue(); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('delegations:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DelegationController.prototype, "fa", null);
__decorate([
    (0, common_1.Post)(),
    (0, permissions_decorator_1.Permissions)('delegations:write'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], DelegationController.prototype, "cr", null);
__decorate([
    (0, common_1.Patch)(':id/revoke'),
    (0, permissions_decorator_1.Permissions)('delegations:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DelegationController.prototype, "rv", null);
__decorate([
    (0, common_1.Post)('expire-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DelegationController.prototype, "expire", null);
DelegationController = __decorate([
    (0, swagger_1.ApiTags)('Delegations'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'delegations', version: '1' }),
    __metadata("design:paramtypes", [DelegationService])
], DelegationController);
let DelegationModule = class DelegationModule {
};
exports.DelegationModule = DelegationModule;
exports.DelegationModule = DelegationModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule, notifications_module_1.NotificationsModule], controllers: [DelegationController], providers: [DelegationService] })
], DelegationModule);
let MasterLookupService = class MasterLookupService {
    constructor(p, a) {
        this.p = p;
        this.a = a;
    }
    async findByCategory(cat) { return this.p.masterLookup.findMany({ where: { category: cat, isActive: true }, orderBy: { sortOrder: 'asc' } }); }
    async findAll(q) { const take = Math.min(+(q.pageSize || 100), 500), skip = ((+(q.page || 1)) - 1) * take; const w = { isActive: true, ...(q.category && { category: q.category }), ...(q.q && { label: { contains: q.q, mode: 'insensitive' } }) }; const [d, t] = await Promise.all([this.p.masterLookup.findMany({ where: w, skip, take, orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }] }), this.p.masterLookup.count({ where: w })]); return { data: d, meta: meta(t, +(q.page || 1), take) }; }
    async upsert(category, code, label, mdata, user) { const item = await this.p.masterLookup.upsert({ where: { category_code: { category, code: code || '' } }, update: { label, metadata: mdata, updatedAt: new Date() }, create: { category, code, label, metadata: mdata || {} } }); await this.a.log({ action: 'Update', entityType: 'master_lookups', entityId: item.id, userId: user?.id, description: `ML ${category}/${label} updated` }); return item; }
    async deactivate(id, user) { const item = await this.p.masterLookup.update({ where: { id }, data: { isActive: false } }); await this.a.log({ action: 'Delete', entityType: 'master_lookups', entityId: id, userId: user?.id, description: `ML ${item.category}/${item.label} deactivated` }); return item; }
    async getGrades() { return this.p.staffGrade.findMany({ where: { isActive: true }, orderBy: { sortOrder: 'asc' } }); }
    async createGrade(dto, user) { const g = await this.p.staffGrade.create({ data: dto }); await this.a.log({ action: 'Create', entityType: 'staff_grades', entityId: g.id, userId: user?.id, description: `Grade ${g.grade} created £${g.rate}/hr` }); return g; }
    async updateGrade(id, dto, user) { const g = await this.p.staffGrade.update({ where: { id }, data: dto }); await this.a.log({ action: 'Update', entityType: 'staff_grades', entityId: id, userId: user?.id, description: `Grade ${g.grade} → £${g.rate}/hr` }); return g; }
    async getBandRates() { return this.p.peopleBandRate.findMany({ orderBy: { dateFrom: 'desc' } }); }
};
MasterLookupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, audit_service_1.AuditService])
], MasterLookupService);
let MasterLookupController = class MasterLookupController {
    constructor(s) {
        this.s = s;
    }
    fa(q) { return this.s.findAll(q); }
    bc(c) { return this.s.findByCategory(c); }
    gg() { return this.s.getGrades(); }
    cg(d, u) { return this.s.createGrade(d, u); }
    ug(id, d, u) { return this.s.updateGrade(id, d, u); }
    br() { return this.s.getBandRates(); }
    up(d, u) { return this.s.upsert(d.category, d.code, d.label, d.metadata, u); }
    rm(id, u) { return this.s.deactivate(id, u); }
};
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('master_lookup:read'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MasterLookupController.prototype, "fa", null);
__decorate([
    (0, common_1.Get)('category/:cat'),
    (0, permissions_decorator_1.Permissions)('master_lookup:read'),
    __param(0, (0, common_1.Param)('cat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MasterLookupController.prototype, "bc", null);
__decorate([
    (0, common_1.Get)('staff-grades'),
    (0, permissions_decorator_1.Permissions)('master_lookup:read'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MasterLookupController.prototype, "gg", null);
__decorate([
    (0, common_1.Post)('staff-grades'),
    (0, permissions_decorator_1.Permissions)('master_lookup:write'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MasterLookupController.prototype, "cg", null);
__decorate([
    (0, common_1.Put)('staff-grades/:id'),
    (0, permissions_decorator_1.Permissions)('master_lookup:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], MasterLookupController.prototype, "ug", null);
__decorate([
    (0, common_1.Get)('people-band-rates'),
    (0, permissions_decorator_1.Permissions)('master_lookup:read'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MasterLookupController.prototype, "br", null);
__decorate([
    (0, common_1.Put)('upsert'),
    (0, permissions_decorator_1.Permissions)('master_lookup:write'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MasterLookupController.prototype, "up", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, permissions_decorator_1.Permissions)('master_lookup:write'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MasterLookupController.prototype, "rm", null);
MasterLookupController = __decorate([
    (0, swagger_1.ApiTags)('Master Lookup'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, rbac_guard_1.RbacGuard),
    (0, common_1.Controller)({ path: 'master-lookup', version: '1' }),
    __metadata("design:paramtypes", [MasterLookupService])
], MasterLookupController);
let MasterLookupModule = class MasterLookupModule {
};
exports.MasterLookupModule = MasterLookupModule;
exports.MasterLookupModule = MasterLookupModule = __decorate([
    (0, common_1.Module)({ imports: [audit_module_1.AuditModule], controllers: [MasterLookupController], providers: [MasterLookupService], exports: [MasterLookupService] })
], MasterLookupModule);
let DashboardService = class DashboardService {
    constructor(p) {
        this.p = p;
    }
    async getSummary() {
        const [allOpps, ceActive, paidAgg, pendingAgg, overdueAgg, pendingCnt, overdueCnt, piApproved, surveyPending, expiredSupp, recentOpps, milestones] = await Promise.all([
            this.p.opportunity.findMany({ select: { status: true, value: true } }),
            this.p.ceEvent.count({ where: { stage: { notIn: ['Approved', 'Rejected'] } } }),
            this.p.clientInvoice.aggregate({ where: { status: 'Paid' }, _sum: { netAmount: true } }),
            this.p.clientInvoice.aggregate({ where: { status: 'Pending' }, _sum: { netAmount: true } }),
            this.p.clientInvoice.aggregate({ where: { status: 'Overdue' }, _sum: { netAmount: true } }),
            this.p.clientInvoice.count({ where: { status: 'Pending' } }),
            this.p.clientInvoice.count({ where: { status: 'Overdue' } }),
            this.p.projectPi.count({ where: { status: 'Approved' } }),
            this.p.survey.count({ where: { submittedAt: null } }),
            this.p.supplier.count({ where: { status: 'Expired' } }),
            this.p.opportunity.findMany({ take: 5, orderBy: { createdAt: 'desc' }, select: { id: true, commNum: true, name: true, clientName: true, status: true, stagePercent: true, value: true, lead: { select: { name: true, initials: true, avatarColor: true } } } }),
            this.p.invoiceSchedule.findMany({
                where: { clientInvoices: { some: { status: { in: ['Pending', 'Overdue'] } } } },
                take: 5,
                orderBy: { dueDate: 'asc' },
                select: { id: true, milestone: true, dueDate: true, opportunity: { select: { commNum: true } }, clientInvoices: { select: { status: true, netAmount: true } } },
            }),
        ]);
        const totalPipeline = allOpps.reduce((a, o) => a + Number(o.value), 0);
        const pipelineByStatus = ['Lead', 'Probable', 'StrongProbable', 'Contracted', 'WorkStarted', 'Completed'].map(s => ({
            status: s,
            value: allOpps.filter((o) => o.status === s).reduce((a, o) => a + Number(o.value), 0),
            count: allOpps.filter((o) => o.status === s).length,
        }));
        return {
            kpis: { totalPipeline, totalPipelineCount: allOpps.length, invoicedPaid: Number(paidAgg._sum.netAmount || 0), outstandingAmount: Number(pendingAgg._sum.netAmount || 0) + Number(overdueAgg._sum.netAmount || 0), outstandingCount: pendingCnt + overdueCnt, expiredSuppliers: expiredSupp },
            pipelineByStatus,
            workflowStatus: { opportunities: allOpps.length, activeCEs: ceActive, pendingInvoices: pendingCnt, approvedPIs: piApproved, finalReady: 0, surveysPending: surveyPending },
            recentCommissions: recentOpps.map((o) => ({ ...o, value: Number(o.value) })),
            upcomingMilestones: milestones.map((m) => ({ id: m.id, milestone: m.milestone, dueDate: m.dueDate, commNum: m.opportunity.commNum, amount: m.clientInvoices.reduce((a, i) => a + Number(i.netAmount), 0), status: m.clientInvoices[0]?.status || 'Upcoming' })),
            alerts: { expiredSuppliers: expiredSupp },
        };
    }
};
DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
let DashboardController = class DashboardController {
    constructor(s) {
        this.s = s;
    }
    gs() { return this.s.getSummary(); }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DashboardController.prototype, "gs", null);
DashboardController = __decorate([
    (0, swagger_1.ApiTags)('Dashboard'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)({ path: 'dashboard', version: '1' }),
    __metadata("design:paramtypes", [DashboardService])
], DashboardController);
let DashboardModule = class DashboardModule {
};
exports.DashboardModule = DashboardModule;
exports.DashboardModule = DashboardModule = __decorate([
    (0, common_1.Module)({ controllers: [DashboardController], providers: [DashboardService] })
], DashboardModule);
//# sourceMappingURL=all-modules.js.map