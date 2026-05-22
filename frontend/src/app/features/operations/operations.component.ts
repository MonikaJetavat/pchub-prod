import {
  Component, OnInit, OnDestroy, signal, inject,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';
import { PaginatorComponent, FilterBarComponent } from '../../shared/components/shared-components';

// ── Shared styles ─────────────────────────────────────────────────
const OPS_STYLES = `
  :host { display:block; }
  .ops-shell { padding:0; }
  .ops-header { margin-bottom:16px; }
  .ops-title { font-size:18px; font-weight:700; color:#1a2240; margin:0; }
  .ops-sub { font-size:12px; color:#64748b; margin-top:2px; }
  .kpi-strip { display:grid; grid-template-columns:repeat(auto-fit,minmax(140px,1fr)); gap:10px; margin-bottom:16px; }
  .kpi { background:#fff; border:1px solid #dde2ee; border-radius:8px; padding:12px 14px; }
  .kpi-val { font-size:24px; font-weight:800; color:#2563eb; }
  .kpi-val.red { color:#dc2626; } .kpi-val.green { color:#16a34a; } .kpi-val.amber { color:#d97706; }
  .kpi-label { font-size:11px; color:#8a9bb8; margin-top:2px; font-weight:500; }
  .card { background:#fff; border:1px solid #dde2ee; border-radius:8px; overflow:hidden; margin-bottom:12px; }
  .card-header { display:flex; align-items:center; justify-content:space-between; padding:11px 14px; background:#f8fafc; border-bottom:1px solid #e2e8f0; }
  .card-title { font-size:12.5px; font-weight:700; color:#1a2240; }
  .card-body { padding:14px; }
  .tbl-wrap { overflow-x:auto; }
  table { width:100%; border-collapse:collapse; font-size:12.5px; }
  thead th { background:#f5f7fb; padding:8px 10px; font-size:10.5px; font-weight:700; text-transform:uppercase; letter-spacing:.3px; color:#5a6b8a; border-bottom:2px solid #e2e8f0; white-space:nowrap; }
  tbody tr { border-bottom:1px solid #f0f2f7; cursor:pointer; transition:background .08s; }
  tbody tr:hover { background:#f8fafc; }
  tbody td { padding:8px 10px; vertical-align:middle; }
  .badge { display:inline-block; padding:2px 8px; border-radius:10px; font-size:10.5px; font-weight:700; }
  .badge-green  { background:#dcfce7; color:#166534; }
  .badge-amber  { background:#fef3c7; color:#92400e; }
  .badge-red    { background:#fee2e2; color:#991b1b; }
  .badge-blue   { background:#dbeafe; color:#1d4ed8; }
  .badge-gray   { background:#f1f5f9; color:#475569; }
  .badge-purple { background:#ede9fe; color:#5b21b6; }
  .chip { display:inline-block; padding:2px 8px; border-radius:10px; background:rgba(37,99,235,.08); color:#1d4ed8; font-size:10.5px; font-weight:600; }
  .text-muted { color:#64748b; font-size:12px; }
  .sla-bar { display:flex; align-items:center; gap:5px; }
  .sla-track { width:80px; height:5px; background:#e2e8f0; border-radius:3px; overflow:hidden; }
  .sla-fill { height:100%; border-radius:3px; }
  .btn { display:inline-flex; align-items:center; gap:4px; padding:5px 12px; border-radius:6px; border:1px solid transparent; cursor:pointer; font-size:12px; font-weight:600; font-family:inherit; }
  .btn-primary { background:#2563eb; color:#fff; } .btn-primary:hover { background:#1d4ed8; }
  .btn-ghost { background:#fff; color:#5a6b8a; border-color:#dde2ee; } .btn-ghost:hover { background:#f5f7fb; }
  .btn-sm { padding:3px 9px; font-size:11.5px; }
  .empty { text-align:center; padding:30px; color:#94a3b8; font-size:12.5px; }
  .tabs { display:flex; gap:0; border-bottom:2px solid #dde2ee; margin-bottom:14px; }
  .tab { padding:8px 16px; font-size:12.5px; color:#8a9bb8; cursor:pointer; border-bottom:2px solid transparent; margin-bottom:-2px; font-weight:500; background:none; border-top:none; border-left:none; border-right:none; font-family:inherit; transition:all .12s; }
  .tab.active { color:#2563eb; border-bottom-color:#2563eb; font-weight:700; }
  .action-section { margin-bottom:14px; }
  .action-section-hdr { display:flex; align-items:center; gap:8px; padding:9px 12px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:7px 7px 0 0; cursor:pointer; }
  .action-section-hdr h4 { font-size:12px; font-weight:700; color:#1a2240; margin:0; flex:1; }
  .action-count { background:#dc2626; color:#fff; font-size:10px; font-weight:700; padding:1px 6px; border-radius:10px; }
  .action-count.amber { background:#d97706; }
  .action-count.blue { background:#2563eb; }
  .action-body { border:1px solid #e2e8f0; border-top:none; border-radius:0 0 7px 7px; overflow:hidden; }
  .action-row { display:flex; align-items:center; gap:10px; padding:9px 12px; border-bottom:1px solid #f0f2f7; font-size:12px; }
  .action-row:last-child { border-bottom:none; }
  .action-icon { width:28px; height:28px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:13px; flex-shrink:0; }
  .action-text { flex:1; min-width:0; }
  .action-title { font-weight:600; color:#1a2240; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .action-meta { color:#64748b; font-size:11px; }
  .overdue-badge { background:#fee2e2; color:#991b1b; font-size:10.5px; font-weight:700; padding:2px 7px; border-radius:8px; }
  .timeline { display:flex; flex-direction:column; gap:0; }
  .tl-entry { display:flex; gap:10px; padding:8px 0; border-bottom:1px solid #f5f7fb; font-size:12px; }
  .tl-entry:last-child { border-bottom:none; }
  .tl-dot { width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:#fff; flex-shrink:0; }
  .tl-body { flex:1; }
  .tl-title { font-weight:600; color:#1a2240; }
  .tl-meta { color:#64748b; font-size:11px; margin-top:1px; }
  /* Calendar */
  .cal-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:1px; background:#e2e8f0; border-radius:8px; overflow:hidden; }
  .cal-day-hdr { background:#f5f7fb; padding:6px; text-align:center; font-size:10.5px; font-weight:700; text-transform:uppercase; color:#5a6b8a; }
  .cal-cell { background:#fff; min-height:80px; padding:4px; }
  .cal-cell.other-month { background:#f8fafc; }
  .cal-cell.today { background:#eff6ff; }
  .cal-date { font-size:11px; font-weight:600; color:#475569; margin-bottom:3px; }
  .cal-event { font-size:9.5px; padding:2px 4px; border-radius:3px; margin-bottom:1px; cursor:pointer; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .cal-nav { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
  .cal-month { font-size:15px; font-weight:700; color:#1a2240; }
  .cal-view-toggle { display:flex; gap:4px; }
  .cal-view-btn { padding:4px 10px; border-radius:5px; border:1px solid #dde2ee; background:#fff; font-size:11.5px; font-weight:600; cursor:pointer; color:#5a6b8a; }
  .cal-view-btn.active { background:#2563eb; color:#fff; border-color:#2563eb; }
  .legend { display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
  .legend-item { display:flex; align-items:center; gap:4px; font-size:11px; color:#5a6b8a; }
  .legend-dot { width:8px; height:8px; border-radius:50%; }
`;

// ================================================================
// ACTIVITY CENTER COMPONENT
// ================================================================
@Component({
  selector: 'app-activity-center',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, FormsModule, FilterBarComponent, PaginatorComponent],
  styles: [OPS_STYLES],
  template: `
  <div class="ops-shell">
    <div class="ops-header">
      <h1 class="ops-title">Activity Center</h1>
      <p class="ops-sub">Live audit trail — all workflow events across the platform</p>
    </div>

    <div class="kpi-strip">
      <div class="kpi"><div class="kpi-val">{{ total() | number }}</div><div class="kpi-label">Total Events</div></div>
      <div class="kpi"><div class="kpi-val amber">{{ pendingCount() }}</div><div class="kpi-label">Pending Actions</div></div>
      <div class="kpi"><div class="kpi-val green">{{ todayCount() }}</div><div class="kpi-label">Activity Today</div></div>
      <div class="kpi"><div class="kpi-val">{{ uniqueUsers() }}</div><div class="kpi-label">Active Users</div></div>
    </div>

    <div class="card">
      <div class="card-header">
        <span class="card-title">Audit Timeline</span>
        <div style="display:flex;gap:6px">
          <select class="btn btn-ghost btn-sm" [(ngModel)]="entityFilter" (ngModelChange)="load()"
            style="border:1px solid #dde2ee;font-size:12px;padding:4px 8px;border-radius:5px;background:#fff;cursor:pointer">
            <option value="">All Modules</option>
            <option *ngFor="let m of modules; trackBy: trkId" [value]="m">{{ m }}</option>
          </select>
          <input type="date" [(ngModel)]="dateFrom" (ngModelChange)="load()" style="border:1px solid #dde2ee;border-radius:5px;padding:4px 8px;font-size:12px;font-family:inherit">
          <input type="date" [(ngModel)]="dateTo" (ngModelChange)="load()" style="border:1px solid #dde2ee;border-radius:5px;padding:4px 8px;font-size:12px;font-family:inherit">
          <button class="btn btn-ghost btn-sm" (click)="exportCSV()">Export</button>
        </div>
      </div>
      <app-filter-bar placeholder="Search description, module, user…" [count]="total()"
        (searchChange)="onSearch($event)"></app-filter-bar>
      <div class="tbl-wrap">
        <table>
          <thead><tr>
            <th style="width:130px">Timestamp</th>
            <th style="width:120px">User</th>
            <th style="width:100px">Action</th>
            <th>Module</th>
            <th>Description</th>
            <th style="width:80px">Commission</th>
          </tr></thead>
          <tbody>
            <tr *ngFor="let e of rows(); trackBy: trkId">
              <td class="text-muted" style="white-space:nowrap;font-size:11.5px">{{ e.createdAt | date:'dd MMM HH:mm' }}</td>
              <td>
                <div style="display:flex;align-items:center;gap:5px">
                  <div class="tl-dot" [style.background]="e.user?.avatarColor||'#3d7eff'" style="width:22px;height:22px;font-size:8px">{{ e.user?.initials||'SY' }}</div>
                  <span style="font-size:12px">{{ e.user?.name||'System' }}</span>
                </div>
              </td>
              <td><span class="badge" [class]="actionBadge(e.action)">{{ e.action }}</span></td>
              <td class="text-muted">{{ e.entityType }}</td>
              <td style="max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px">{{ e.description }}</td>
              <td>
                <a *ngIf="e.opportunityId" [routerLink]="['/opportunities',e.opportunityId]"
                  style="color:#2563eb;font-size:11px;font-weight:600">View →</a>
              </td>
            </tr>
            <tr *ngIf="!rows().length">
              <td colspan="6" class="empty">{{ loading() ? 'Loading activity…' : 'No activity found.' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class ActivityCenterComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();

  readonly rows     = signal<any[]>([]);
  readonly total    = signal(0);
  readonly loading  = signal(false);
  readonly page     = signal(1);
  readonly pageSize = signal(50);

  pendingCount = signal(0);
  todayCount   = signal(0);
  uniqueUsers  = signal(0);

  search = ''; entityFilter = ''; dateFrom = ''; dateTo = '';
  modules = ['opportunities','srps','fee_calculators','ce_events','invoices','suppliers','users','delegations'];

  ngOnInit() { this.load(); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  load() {
    this.loading.set(true);
    const params: any = { page: this.page(), pageSize: this.pageSize() };
    if (this.search) params.search = this.search;
    if (this.entityFilter) params.entityType = this.entityFilter;
    if (this.dateFrom) params.from = this.dateFrom;
    if (this.dateTo) params.to = this.dateTo;

    this.api.getList<any>('/v1/audit', params).pipe(takeUntil(this.destroy$)).subscribe({
      next: r => {
        this.rows.set(r.data);
        this.total.set(r.meta.total);
        this.loading.set(false);
        this.uniqueUsers.set(new Set(r.data.map((e: any) => e.userId).filter(Boolean)).size);
        const today = new Date().toDateString();
        this.todayCount.set(r.data.filter((e: any) => new Date(e.createdAt).toDateString() === today).length);
      },
      error: () => this.loading.set(false),
    });

    this.api.get<any>('/v1/reporting/pending-actions').pipe(takeUntil(this.destroy$)).subscribe(r => {
      this.pendingCount.set(r?.total || 0);
    });
  }

  onSearch(q: string) { this.search = q; this.page.set(1); this.load(); }
  onPage(e: {page:number;pageSize:number}) { this.page.set(e.page); this.pageSize.set(e.pageSize); this.load(); }
  trkId(_: number, r: any) { return r.id; }

  actionBadge(a: string) {
    return { Create:'badge-green', Update:'badge-blue', Approve:'badge-green', Reject:'badge-red', Delete:'badge-red', Login:'badge-purple', Logout:'badge-gray', Export:'badge-amber', System:'badge-gray' }[a] || 'badge-gray';
  }

  exportCSV() {
    const rows = this.rows();
    const csv = ['Timestamp,User,Action,Module,Description',
      ...rows.map(r => `"${r.createdAt}","${r.user?.name||'System'}","${r.action}","${r.entityType}","${r.description?.replace(/"/g,"'")}"`),
    ].join('\n');
    const a = document.createElement('a');
    a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    a.download = `activity_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  }
}

// ================================================================
// PENDING ACTIONS COMPONENT
// ================================================================
@Component({
  selector: 'app-pending-actions',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, FormsModule],
  styles: [OPS_STYLES],
  template: `
  <div class="ops-shell">
    <div class="ops-header">
      <h1 class="ops-title">Pending Actions</h1>
      <p class="ops-sub">Workflow tasks requiring attention — sorted by urgency</p>
    </div>

    <div class="kpi-strip" *ngIf="data() as d">
      <div class="kpi"><div class="kpi-val red">{{ d.sections?.srpApprovals?.count||0 }}</div><div class="kpi-label">SRP Approvals Overdue</div></div>
      <div class="kpi"><div class="kpi-val red">{{ d.sections?.overdueInvoices?.count||0 }}</div><div class="kpi-label">Overdue Invoices</div></div>
      <div class="kpi"><div class="kpi-val amber">{{ d.sections?.openCEs?.count||0 }}</div><div class="kpi-label">Open CE Events</div></div>
      <div class="kpi"><div class="kpi-val blue">{{ d.sections?.pendingPIs?.count||0 }}</div><div class="kpi-label">PIs Awaiting Approval</div></div>
    </div>

    <div *ngIf="data() as d">

      <!-- SRP Approvals -->
      <div class="action-section" *ngIf="d.sections?.srpApprovals?.count">
        <div class="action-section-hdr">
          <div class="action-icon" style="background:#fee2e2">📋</div>
          <h4>SRP Approvals — Waiting for Commercial Lead</h4>
          <span class="action-count">{{ d.sections.srpApprovals.count }}</span>
        </div>
        <div class="action-body">
          <div class="action-row" *ngFor="let item of d.sections.srpApprovals.items">
            <div style="flex:1">
              <div class="action-title"><span class="chip">{{ item.opportunity?.commNum }}</span> {{ item.opportunity?.name }}</div>
              <div class="action-meta">{{ item.opportunity?.clientName }} · Lead: {{ item.opportunity?.lead?.name }}</div>
            </div>
            <span class="overdue-badge">{{ daysSince(item.sentForApprovalAt) }}d waiting</span>
            <a [routerLink]="['/opportunities',item.opportunityId,'srp']" class="btn btn-primary btn-sm">Review SRP</a>
          </div>
        </div>
      </div>

      <!-- Overdue Invoices -->
      <div class="action-section" *ngIf="d.sections?.overdueInvoices?.count">
        <div class="action-section-hdr">
          <div class="action-icon" style="background:#fef3c7">💰</div>
          <h4>Overdue Client Invoices — Payment Required</h4>
          <span class="action-count amber">{{ d.sections.overdueInvoices.count }}</span>
        </div>
        <div class="action-body">
          <div class="action-row" *ngFor="let item of d.sections.overdueInvoices.items">
            <div style="flex:1">
              <div class="action-title"><span class="chip">{{ item.invoiceRef }}</span> {{ item.schedule?.opportunity?.commNum }}</div>
              <div class="action-meta">{{ item.schedule?.opportunity?.clientName }} · £{{ item.totalAmount | number:'1.0-0' }} outstanding</div>
            </div>
            <span class="overdue-badge amber" style="background:#fef3c7;color:#92400e">{{ daysSince(item.issuedAt) }}d overdue</span>
            <a [routerLink]="['/invoices/client']" class="btn btn-ghost btn-sm">View Invoice</a>
          </div>
        </div>
      </div>

      <!-- Open CEs -->
      <div class="action-section" *ngIf="d.sections?.openCEs?.count">
        <div class="action-section-hdr">
          <div class="action-icon" style="background:#ede9fe">◆</div>
          <h4>Open Compensation Events — Awaiting Assessment</h4>
          <span class="action-count blue">{{ d.sections.openCEs.count }}</span>
        </div>
        <div class="action-body">
          <div class="action-row" *ngFor="let item of d.sections.openCEs.items">
            <div style="flex:1">
              <div class="action-title"><span class="chip">{{ item.ceRef }}</span> {{ item.opportunity?.commNum }}</div>
              <div class="action-meta">{{ item.opportunity?.clientName }} · £{{ item.value | number:'1.0-0' }} · {{ item.stage }}</div>
            </div>
            <span style="font-size:11px;color:#7c3aed;font-weight:600">{{ daysSince(item.raisedAt) }}d open</span>
            <a [routerLink]="['/ce']" class="btn btn-ghost btn-sm">View CE</a>
          </div>
        </div>
      </div>

      <!-- Pending PIs -->
      <div class="action-section" *ngIf="d.sections?.pendingPIs?.count">
        <div class="action-section-hdr">
          <div class="action-icon" style="background:#dcfce7">◇</div>
          <h4>Project PIs — Pending Approval</h4>
          <span class="action-count" style="background:#16a34a">{{ d.sections.pendingPIs.count }}</span>
        </div>
        <div class="action-body">
          <div class="action-row" *ngFor="let item of d.sections.pendingPIs.items">
            <div style="flex:1">
              <div class="action-title"><span class="chip">{{ item.opportunity?.commNum }}</span> {{ item.opportunity?.name }}</div>
              <div class="action-meta">Lead: {{ item.opportunity?.lead?.name }} · v{{ item.version }}</div>
            </div>
            <a [routerLink]="['/project-pi']" class="btn btn-ghost btn-sm">Review PI</a>
          </div>
        </div>
      </div>

      <!-- All clear -->
      <div *ngIf="!d.total" class="card">
        <div class="card-body" style="text-align:center;padding:40px;color:#16a34a">
          <div style="font-size:32px">✅</div>
          <div style="font-size:14px;font-weight:700;margin-top:8px">All Actions Clear</div>
          <div class="text-muted" style="margin-top:4px">No pending actions require your attention.</div>
        </div>
      </div>

    </div>

    <div *ngIf="loading()" class="card"><div class="card-body empty">Loading pending actions…</div></div>
  </div>
  `,
})
export class PendingActionsComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();

  readonly data    = signal<any>(null);
  readonly loading = signal(true);

  ngOnInit() {
    this.api.get<any>('/v1/reporting/pending-actions').pipe(takeUntil(this.destroy$)).subscribe({
      next: r => { this.data.set(r); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  daysSince(date: string): number {
    if (!date) return 0;
    return Math.floor((Date.now() - new Date(date).getTime()) / 86400000);
  }
}

// ================================================================
// CALENDAR COMPONENT
// ================================================================
@Component({
  selector: 'app-operations-calendar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, FormsModule],
  styles: [OPS_STYLES],
  template: `
  <div class="ops-shell">
    <div class="ops-header">
      <h1 class="ops-title">Operations Calendar</h1>
      <p class="ops-sub">Invoice deadlines, CE milestones, delegation expiry, survey deadlines</p>
    </div>

    <div class="cal-nav">
      <div style="display:flex;align-items:center;gap:8px">
        <button class="btn btn-ghost btn-sm" (click)="changeMonth(-1)">‹</button>
        <span class="cal-month">{{ monthLabel }}</span>
        <button class="btn btn-ghost btn-sm" (click)="changeMonth(1)">›</button>
        <button class="btn btn-ghost btn-sm" (click)="today()">Today</button>
      </div>
      <div class="cal-view-toggle">
        <button class="cal-view-btn" [class.active]="view==='month'" (click)="view='month'">Month</button>
        <button class="cal-view-btn" [class.active]="view==='agenda'" (click)="view='agenda'">Agenda</button>
      </div>
    </div>

    <!-- Month View -->
    <div *ngIf="view==='month'">
      <div class="cal-grid">
        <div class="cal-day-hdr" *ngFor="let d of ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']">{{ d }}</div>
        <div class="cal-cell" *ngFor="let cell of calCells"
          [class.other-month]="!cell.current"
          [class.today]="cell.isToday">
          <div class="cal-date" [style.color]="cell.isToday?'#2563eb':''" [style.fontWeight]="cell.isToday?'800':''">{{ cell.day }}</div>
          <div *ngFor="let ev of cell.events | slice:0:3" class="cal-event"
            [style.background]="ev.color+'20'" [style.color]="ev.color" [title]="ev.title">
            {{ ev.title }}
          </div>
          <div *ngIf="cell.events.length > 3" style="font-size:9px;color:#94a3b8">+{{ cell.events.length-3 }} more</div>
        </div>
      </div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#2563eb"></div> Invoice Due</div>
        <div class="legend-item"><div class="legend-dot" style="background:#d97706"></div> CE Milestone</div>
        <div class="legend-item"><div class="legend-dot" style="background:#7c3aed"></div> Delegation Expiry</div>
        <div class="legend-item"><div class="legend-dot" style="background:#16a34a"></div> Survey Deadline</div>
      </div>
    </div>

    <!-- Agenda View -->
    <div *ngIf="view==='agenda'" class="card">
      <div class="card-header">
        <span class="card-title">Upcoming Events — Next 30 Days</span>
        <span class="text-muted">{{ events().length }} events</span>
      </div>
      <div *ngIf="!events().length" class="empty">No events in the next 30 days.</div>
      <div class="tbl-wrap" *ngIf="events().length">
        <table>
          <thead><tr><th>Date</th><th>Type</th><th>Title</th><th>Details</th></tr></thead>
          <tbody>
            <tr *ngFor="let ev of events()">
              <td style="font-size:12px;white-space:nowrap;font-weight:600">{{ ev.date | date:'EEE dd MMM' }}</td>
              <td><span class="badge" [style.background]="ev.color+'20'" [style.color]="ev.color">{{ ev.type }}</span></td>
              <td style="font-size:12.5px;font-weight:600">{{ ev.title }}</td>
              <td class="text-muted">{{ ev.subtitle }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `,
})
export class OperationsCalendarComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = new Subject<void>();

  readonly events = signal<any[]>([]);
  view: 'month' | 'agenda' = 'month';
  currentDate = new Date();

  get monthLabel() {
    return this.currentDate.toLocaleString('en-GB', { month: 'long', year: 'numeric' });
  }

  get calCells() {
    const y = this.currentDate.getFullYear();
    const m = this.currentDate.getMonth();
    const firstDay = new Date(y, m, 1);
    const lastDay  = new Date(y, m + 1, 0);
    // Start on Monday
    let start = new Date(firstDay);
    const dow = (firstDay.getDay() + 6) % 7;
    start.setDate(start.getDate() - dow);

    const cells: any[] = [];
    const today = new Date().toDateString();
    const ev = this.events();

    for (let i = 0; i < 42; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const ds = d.toISOString().slice(0,10);
      cells.push({
        day: d.getDate(),
        current: d.getMonth() === m,
        isToday: d.toDateString() === today,
        events: ev.filter(e => new Date(e.date).toISOString().slice(0,10) === ds),
      });
    }
    return cells;
  }

  ngOnInit() { this.loadEvents(); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  loadEvents() {
    const y = this.currentDate.getFullYear();
    const m = this.currentDate.getMonth();
    const from = new Date(y, m, 1).toISOString().slice(0,10);
    const to   = new Date(y, m + 2, 0).toISOString().slice(0,10);
    this.api.get<any[]>(`/v1/reporting/calendar?from=${from}&to=${to}`).pipe(takeUntil(this.destroy$)).subscribe(evs => {
      this.events.set(evs || []);
      this.cdr.markForCheck();
    });
  }

  changeMonth(d: number) { this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + d, 1); this.loadEvents(); }
  today() { this.currentDate = new Date(); this.loadEvents(); }
}

