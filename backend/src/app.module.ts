import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AuditModule } from './modules/audit/audit.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { OpportunitiesModule } from './modules/opportunities/opportunities.module';
import { SrpModule } from './modules/srp/srp.module';
import { FeeCalculatorModule } from './modules/fee-calculator/fee-calculator.module';
import { InvoicesModule } from './modules/invoices/invoices.module';
import { CeModule } from './modules/ce/ce.module';
import { ProjectPiModule } from './modules/project-pi/project-pi.module';
import { SurveysModule } from './modules/surveys/surveys.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { DelegationModule } from './modules/delegation/delegation.module';
import { MasterLookupModule } from './modules/master-lookup/master-lookup.module';
import { ReportingModule } from './modules/reporting/reporting.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HealthController } from './health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true, envFilePath:['.env.local','.env'] }),
    ThrottlerModule.forRootAsync({ inject:[ConfigService], useFactory:(c:ConfigService) => ([{ ttl:c.get('THROTTLE_TTL',60000), limit:c.get('THROTTLE_LIMIT',200) }]) }),
    PrismaModule, AuthModule, AuditModule, NotificationsModule,
    OpportunitiesModule, SrpModule, FeeCalculatorModule, InvoicesModule,
    CeModule, ProjectPiModule, SurveysModule, SuppliersModule,
    UsersModule, RolesModule, DelegationModule, MasterLookupModule, ReportingModule, DashboardModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
