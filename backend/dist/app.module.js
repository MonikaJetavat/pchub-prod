"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const audit_module_1 = require("./modules/audit/audit.module");
const notifications_module_1 = require("./modules/notifications/notifications.module");
const opportunities_module_1 = require("./modules/opportunities/opportunities.module");
const srp_module_1 = require("./modules/srp/srp.module");
const fee_calculator_module_1 = require("./modules/fee-calculator/fee-calculator.module");
const invoices_module_1 = require("./modules/invoices/invoices.module");
const ce_module_1 = require("./modules/ce/ce.module");
const project_pi_module_1 = require("./modules/project-pi/project-pi.module");
const surveys_module_1 = require("./modules/surveys/surveys.module");
const suppliers_module_1 = require("./modules/suppliers/suppliers.module");
const users_module_1 = require("./modules/users/users.module");
const roles_module_1 = require("./modules/roles/roles.module");
const delegation_module_1 = require("./modules/delegation/delegation.module");
const master_lookup_module_1 = require("./modules/master-lookup/master-lookup.module");
const reporting_module_1 = require("./modules/reporting/reporting.module");
const dashboard_module_1 = require("./modules/dashboard/dashboard.module");
const health_controller_1 = require("./health.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.local', '.env'] }),
            throttler_1.ThrottlerModule.forRootAsync({ inject: [config_1.ConfigService], useFactory: (c) => ([{ ttl: c.get('THROTTLE_TTL', 60000), limit: c.get('THROTTLE_LIMIT', 200) }]) }),
            prisma_module_1.PrismaModule, auth_module_1.AuthModule, audit_module_1.AuditModule, notifications_module_1.NotificationsModule,
            opportunities_module_1.OpportunitiesModule, srp_module_1.SrpModule, fee_calculator_module_1.FeeCalculatorModule, invoices_module_1.InvoicesModule,
            ce_module_1.CeModule, project_pi_module_1.ProjectPiModule, surveys_module_1.SurveysModule, suppliers_module_1.SuppliersModule,
            users_module_1.UsersModule, roles_module_1.RolesModule, delegation_module_1.DelegationModule, master_lookup_module_1.MasterLookupModule, reporting_module_1.ReportingModule, dashboard_module_1.DashboardModule,
        ],
        controllers: [health_controller_1.HealthController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map