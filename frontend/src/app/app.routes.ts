import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell.component').then(m => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent), title: 'Dashboard — PC HUB 2.0' },
      { path: 'opportunities', loadComponent: () => import('./features/opportunities/opportunities-list.component').then(m => m.OpportunitiesListComponent), title: 'Opportunities — PC HUB 2.0' },
      { path: 'opportunities/:id', loadComponent: () => import('./features/opportunities/opportunity-detail.component').then(m => m.OpportunityDetailComponent), title: 'Commission — PC HUB 2.0' },
      { path: 'opportunities/:id/srp', loadComponent: () => import('./features/srp/srp-form.component').then(m => m.SrpFormComponent), title: 'SRP — PC HUB 2.0' },
      { path: 'opportunities/:id/fee-calculator', loadComponent: () => import('./features/fee-calculator/fee-calculator.component').then(m => m.FeeCalculatorComponent), title: 'Fee Calculator — PC HUB 2.0' },
      { path: 'invoices/client', loadComponent: () => import('./features/invoices/client-invoices.component').then(m => m.ClientInvoicesComponent), title: 'Client Invoices — PC HUB 2.0' },
      { path: 'invoices/supplier', loadComponent: () => import('./features/invoices/supplier-invoices.component').then(m => m.SupplierInvoicesComponent), title: 'Supplier Invoices — PC HUB 2.0' },
      { path: 'ce', loadComponent: () => import('./features/ce/ce-list.component').then(m => m.CeListComponent), title: 'Comp. Events — PC HUB 2.0' },
      { path: 'project-pi', loadComponent: () => import('./features/project-pi/project-pi-list.component').then(m => m.ProjectPiListComponent), title: 'Project PI — PC HUB 2.0' },
      { path: 'surveys', loadComponent: () => import('./features/surveys/surveys-list.component').then(m => m.SurveysListComponent), title: 'Surveys — PC HUB 2.0' },
      { path: 'suppliers', loadComponent: () => import('./features/supplier-portal/supplier-list.component').then(m => m.SupplierListComponent), title: 'Supplier Portal — PC HUB 2.0' },
      { path: 'master-lookup', loadComponent: () => import('./features/master-lookup/master-lookup.component').then(m => m.MasterLookupComponent), title: 'Master Lookup — PC HUB 2.0' },
      { path: 'audit', loadComponent: () => import('./features/audit/audit-log.component').then(m => m.AuditLogComponent), title: 'Audit Log — PC HUB 2.0' },
      { path: 'users', loadComponent: () => import('./features/users/users-list.component').then(m => m.UsersListComponent), title: 'Users — PC HUB 2.0' },
      { path: 'roles', loadComponent: () => import('./features/roles/roles.component').then(m => m.RolesComponent), title: 'Roles & Permissions — PC HUB 2.0' },
      { path: 'delegations', loadComponent: () => import('./features/delegation/delegation.component').then(m => m.DelegationComponent), title: 'Delegations — PC HUB 2.0' },
      // Operations
      { path: 'operations', redirectTo: 'operations/activity', pathMatch: 'full' },
      { path: 'operations/activity', loadComponent: () => import('./features/operations/operations.component').then(m => m.ActivityCenterComponent), title: 'Activity Center — PC HUB 2.0' },
      { path: 'operations/pending', loadComponent: () => import('./features/operations/operations.component').then(m => m.PendingActionsComponent), title: 'Pending Actions — PC HUB 2.0' },
      { path: 'operations/calendar', loadComponent: () => import('./features/operations/operations.component').then(m => m.OperationsCalendarComponent), title: 'Calendar — PC HUB 2.0' },
      // Reporting
      { path: 'reporting', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.ReportingHubComponent), title: 'Reporting — PC HUB 2.0' },
      { path: 'reporting/pipeline', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.PipelineReportComponent), title: 'Pipeline Report — PC HUB 2.0' },
      { path: 'reporting/ce', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.CeReportComponent), title: 'CE Report — PC HUB 2.0' },
      { path: 'reporting/srp', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.SrpReportComponent), title: 'SRP Report — PC HUB 2.0' },
      { path: 'reporting/invoices', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.InvoiceReportComponent), title: 'Invoice Report — PC HUB 2.0' },
      { path: 'reporting/fees', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.FeeReportComponent), title: 'Fee Report — PC HUB 2.0' },
      { path: 'reporting/activity', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.ActivityReportComponent), title: 'Activity Report — PC HUB 2.0' },
      { path: 'reporting/ai-insights', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.AiInsightsComponent), title: 'AI Insights — PC HUB 2.0' },
      { path: 'reporting/scheduled', loadComponent: () => import('./features/reporting/reporting.component').then(m => m.ScheduledReportsComponent), title: 'Scheduled Reports — PC HUB 2.0' },
    ],
  },
  { path: 'auth', loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent), title: 'Sign In — PC HUB 2.0' },
  { path: '**', redirectTo: 'dashboard' },
];
