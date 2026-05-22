import {
  Component, OnInit, OnDestroy, signal, inject, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';
import { FilterBarComponent } from '../../shared/components/shared-components';

// ── Shared reporting styles ───────────────────────────────────────
const RPT_STYLES = `
  :host{display:block;}
  .rpt-shell{display:flex;flex-direction:column;gap:0;}
  .rpt-toolbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px;}
  .rpt-title{font-size:18px;font-weight:700;color:#1a2240;margin:0;}
  .rpt-sub{font-size:12px;color:#64748b;margin-top:2px;}
  .kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:16px;}
  .kpi{background:#fff;border:1px solid #dde2ee;border-radius:8px;padding:13px 15px;}
  .kpi-val{font-size:24px;font-weight:800;color:#2563eb;line-height:1.1;}
  .kpi-val.red{color:#dc2626;}.kpi-val.green{color:#16a34a;}.kpi-val.amber{color:#d97706;}.kpi-val.purple{color:#7c3aed;}
  .kpi-label{font-size:11px;color:#8a9bb8;margin-top:3px;font-weight:500;}
  .kpi-trend{font-size:10.5px;margin-top:2px;}
  .card{background:#fff;border:1px solid #dde2ee;border-radius:8px;overflow:hidden;margin-bottom:12px;}
  .card-hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#f8fafc;border-bottom:1px solid #e2e8f0;flex-wrap:wrap;gap:6px;}
  .card-title{font-size:12.5px;font-weight:700;color:#1a2240;}
  .card-body{padding:14px;}
  .row-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
  .row-grid-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px;}
  /* Bar charts */
  .bar-chart{display:flex;flex-direction:column;gap:6px;}
  .bar-row{display:flex;align-items:center;gap:8px;}
  .bar-label{font-size:11.5px;color:#5a6b8a;width:170px;flex-shrink:0;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
  .bar-track{flex:1;height:20px;background:#f1f5f9;border-radius:4px;overflow:hidden;position:relative;}
  .bar-fill{height:100%;border-radius:4px;transition:width .4s;display:flex;align-items:center;padding-left:6px;}
  .bar-fill-text{font-size:10.5px;font-weight:700;color:#fff;white-space:nowrap;}
  .bar-val{font-size:11.5px;font-weight:700;color:#1a2240;width:90px;text-align:right;flex-shrink:0;}
  /* Tables */
  .tbl-wrap{overflow-x:auto;}
  table{width:100%;border-collapse:collapse;font-size:12px;}
  thead th{background:#f5f7fb;padding:8px 10px;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.3px;color:#5a6b8a;border-bottom:2px solid #e2e8f0;white-space:nowrap;}
  tbody tr{border-bottom:1px solid #f0f2f7;cursor:pointer;transition:background .08s;}
  tbody tr:hover{background:#f8fafc;}
  tbody td{padding:7px 10px;vertical-align:middle;}
  .badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:10.5px;font-weight:700;}
  .bg{background:#dcfce7;color:#166534;}.ba{background:#fef3c7;color:#92400e;}.br{background:#fee2e2;color:#991b1b;}.bb{background:#dbeafe;color:#1d4ed8;}.bgr{background:#f1f5f9;color:#475569;}.bp{background:#ede9fe;color:#5b21b6;}
  .chip{display:inline-block;padding:2px 7px;border-radius:10px;background:rgba(37,99,235,.08);color:#1d4ed8;font-size:10.5px;font-weight:600;}
  .text-muted{color:#64748b;font-size:12px;}
  .val{font-weight:700;color:#d97706;}
  .btn{display:inline-flex;align-items:center;gap:4px;padding:6px 14px;border-radius:6px;border:1px solid transparent;cursor:pointer;font-size:12.5px;font-weight:600;font-family:inherit;transition:all .12s;}
  .btn-primary{background:#2563eb;color:#fff;border-color:#2563eb;}.btn-primary:hover{background:#1d4ed8;}
  .btn-ghost{background:#fff;color:#5a6b8a;border-color:#dde2ee;}.btn-ghost:hover{background:#f5f7fb;}
  .btn-sm{padding:4px 10px;font-size:12px;}
  .btn-success{background:#16a34a;color:#fff;}.btn-success:hover{background:#15803d;}
  .empty{text-align:center;padding:30px;color:#94a3b8;font-size:12.5px;}
  .tabs{display:flex;gap:0;border-bottom:2px solid #dde2ee;margin-bottom:14px;}
  .tab{padding:8px 16px;font-size:12.5px;color:#8a9bb8;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-weight:500;background:none;border-top:none;border-left:none;border-right:none;font-family:inherit;transition:all .12s;}
  .tab.active{color:#2563eb;border-bottom-color:#2563eb;font-weight:700;}
  /* AI Insight cards */
  .insight-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;margin-bottom:14px;}
  .insight-card{background:#fff;border:1px solid #dde2ee;border-radius:8px;padding:14px;position:relative;overflow:hidden;}
  .insight-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;border-radius:4px 0 0 4px;}
  .insight-card.good::before{background:#16a34a;}.insight-card.info::before{background:#2563eb;}
  .insight-card.warning::before{background:#d97706;}.insight-card.critical::before{background:#dc2626;}
  .insight-hdr{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px;}
  .insight-cat{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#94a3b8;}
  .insight-title{font-size:13px;font-weight:700;color:#1a2240;margin-bottom:4px;}
  .insight-summary{font-size:12px;color:#5a6b8a;line-height:1.5;}
  .insight-rec{font-size:11.5px;color:#2563eb;margin-top:8px;padding-top:8px;border-top:1px solid #f0f2f7;}
  .insight-metric{font-size:22px;font-weight:800;}
  .insight-metric.good{color:#16a34a;}.insight-metric.info{color:#2563eb;}.insight-metric.warning{color:#d97706;}.insight-metric.critical{color:#dc2626;}
  /* Ageing buckets */
  .ageing-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;}
  .ageing-bucket{padding:12px;border-radius:7px;text-align:center;}
  .ageing-val{font-size:20px;font-weight:800;}
  .ageing-lbl{font-size:11px;color:#5a6b8a;margin-top:2px;}
  /* Scheduled report cards */
  .sched-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:12px;}
  .sched-card{background:#fff;border:1px solid #dde2ee;border-radius:8px;padding:14px;}
  .sched-card-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}
  .sched-name{font-size:13px;font-weight:700;color:#1a2240;}
  .sched-meta{font-size:11.5px;color:#64748b;margin-top:2px;}
  .sched-foot{display:flex;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid #f0f2f7;}
  /* Overdue badge */
  .overdue{background:#fee2e2;color:#991b1b;font-size:10.5px;font-weight:700;padding:2px 7px;border-radius:8px;}
  /* Progress arc */
  .progress-ring{display:flex;flex-direction:column;align-items:center;gap:4px;}
  .ring-val{font-size:18px;font-weight:800;color:#2563eb;}
  .ring-label{font-size:11px;color:#8a9bb8;}
  /* Donut SVG */
  .donut-wrap{display:flex;align-items:center;justify-content:center;gap:14px;}
  .donut-legend{display:flex;flex-direction:column;gap:5px;}
  .donut-leg-item{display:flex;align-items:center;gap:5px;font-size:11.5px;color:#5a6b8a;}
  .donut-leg-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}
`;

// ── Mini bar chart helper ────────────────────────────────────────
function maxVal(items: any[], key: string): number {
  return Math.max(...items.map(i => i[key] || 0), 1);
}

// ── Currency format ──────────────────────────────────────────────
function fmtGBP(v: number): string {
  if (v >= 1_000_000) return '£' + (v/1_000_000).toFixed(1) + 'M';
  if (v >= 1_000)     return '£' + (v/1_000).toFixed(0) + 'k';
  return '£' + v.toFixed(0);
}

// ================================================================
// REPORTING HUB (top-level nav component — all sub-report tabs)
// ================================================================
@Component({
  selector: 'app-reporting-hub',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [RPT_STYLES + `
    .hub-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:14px;}
    .hub-card{display:flex;flex-direction:column;gap:4px;padding:14px;background:#fff;border:1px solid #dde2ee;border-radius:8px;cursor:pointer;transition:border-color .12s,box-shadow .12s;text-decoration:none;}
    .hub-card:hover{border-color:#93c5fd;box-shadow:0 2px 8px rgba(0,0,0,.07);}
    .hub-icon{font-size:20px;margin-bottom:4px;}
    .hub-name{font-size:13px;font-weight:700;color:#1a2240;}
    .hub-desc{font-size:11.5px;color:#64748b;}
  `],
  template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Reporting</h1><p class="rpt-sub">Enterprise analytics, AI insights and scheduled reports</p></div>
      <div style="display:flex;gap:6px">
        <a class="btn btn-primary btn-sm" routerLink="/reporting/ai-insights">🤖 AI Insights</a>
        <a class="btn btn-ghost btn-sm" routerLink="/reporting/scheduled">⏱ Scheduled</a>
      </div>
    </div>
    <div class="hub-grid">
      <a class="hub-card" routerLink="/reporting/pipeline">
        <div class="hub-icon">📊</div>
        <div class="hub-name">Opportunity Pipeline</div>
        <div class="hub-desc">Pipeline by status, sector and region</div>
      </a>
      <a class="hub-card" routerLink="/reporting/ce">
        <div class="hub-icon">◆</div>
        <div class="hub-name">CE Summary</div>
        <div class="hub-desc">Compensation event analysis and risk</div>
      </a>
      <a class="hub-card" routerLink="/reporting/srp">
        <div class="hub-icon">📋</div>
        <div class="hub-name">SRP Approval Status</div>
        <div class="hub-desc">Approval bottlenecks and overdue SRPs</div>
      </a>
      <a class="hub-card" routerLink="/reporting/invoices">
        <div class="hub-icon">💰</div>
        <div class="hub-name">Invoice Ageing</div>
        <div class="hub-desc">Outstanding payments and overdue recovery</div>
      </a>
      <a class="hub-card" routerLink="/reporting/fees">
        <div class="hub-icon">⊟</div>
        <div class="hub-name">Fee Forecasting</div>
        <div class="hub-desc">Commission fee forecast by procurement route</div>
      </a>
      <a class="hub-card" routerLink="/reporting/activity">
        <div class="hub-icon">▤</div>
        <div class="hub-name">Activity Report</div>
        <div class="hub-desc">Platform activity and audit analysis</div>
      </a>
      <a class="hub-card" routerLink="/reporting/ai-insights">
        <div class="hub-icon">🤖</div>
        <div class="hub-name">AI Insights</div>
        <div class="hub-desc">Trend analysis, risk indicators, recommendations</div>
      </a>
      <a class="hub-card" routerLink="/reporting/scheduled">
        <div class="hub-icon">⏱</div>
        <div class="hub-name">Scheduled Reports</div>
        <div class="hub-desc">Automated report delivery management</div>
      </a>
    </div>
  </div>
  `,
})
export class ReportingHubComponent {}

// ================================================================
// PIPELINE REPORT
// ================================================================
@Component({
  selector: 'app-pipeline-report',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [RPT_STYLES],
  template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Opportunity Pipeline Report</h1><p class="rpt-sub">Pipeline analysis by status, sector, region and value</p></div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost btn-sm" (click)="exportCSV()">⬇ CSV</button>
        <a class="btn btn-ghost btn-sm" routerLink="/reporting">← All Reports</a>
      </div>
    </div>
    <ng-container *ngIf="data() as d">
      <div class="kpi-grid">
        <div class="kpi"><div class="kpi-val">{{ d.kpis.totalCommissions | number }}</div><div class="kpi-label">Total Commissions</div></div>
        <div class="kpi"><div class="kpi-val amber">{{ fmtGBP(d.kpis.totalPipeline) }}</div><div class="kpi-label">Total Pipeline Value</div></div>
        <div class="kpi"><div class="kpi-val green">{{ d.kpis.contracted }}</div><div class="kpi-label">Contracted / In Progress</div></div>
        <div class="kpi"><div class="kpi-val">{{ fmtGBP(d.kpis.avgValue) }}</div><div class="kpi-label">Average Commission Value</div></div>
      </div>
      <div class="row-grid">
        <!-- By Status -->
        <div class="card">
          <div class="card-hdr"><span class="card-title">By Stage</span></div>
          <div class="card-body">
            <div class="bar-chart">
              <div class="bar-row" *ngFor="let row of d.byStatus; trackBy: trkIdx">
                <span class="bar-label">{{ row.status.replace('StrongProbable','Strong Probable') }}</span>
                <div class="bar-track">
                  <div class="bar-fill" [style.width.%]="(row.count / maxCount(d.byStatus,'count')) * 100"
                    [style.background]="stagePalette(row.status)">
                    <span class="bar-fill-text" *ngIf="row.count > 0">{{ row.count }}</span>
                  </div>
                </div>
                <span class="bar-val">{{ fmtGBP(row.value) }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- By Sector -->
        <div class="card">
          <div class="card-hdr"><span class="card-title">By Sector</span></div>
          <div class="card-body">
            <div class="bar-chart" *ngIf="d.bySector.length">
              <div class="bar-row" *ngFor="let row of d.bySector | slice:0:8; trackBy: trkIdx">
                <span class="bar-label">{{ row.name }}</span>
                <div class="bar-track">
                  <div class="bar-fill" [style.width.%]="(row.value / maxCount(d.bySector,'value')) * 100" style="background:#2563eb">
                    <span class="bar-fill-text" *ngIf="row.count > 0">{{ row.count }}</span>
                  </div>
                </div>
                <span class="bar-val">{{ fmtGBP(row.value) }}</span>
              </div>
            </div>
            <div *ngIf="!d.bySector.length" class="empty">No sector data available.</div>
          </div>
        </div>
      </div>
      <!-- By Region -->
      <div class="card" *ngIf="d.byRegion.length">
        <div class="card-hdr"><span class="card-title">By Region</span></div>
        <div class="card-body">
          <div class="bar-chart">
            <div class="bar-row" *ngFor="let row of d.byRegion | slice:0:10; trackBy: trkIdx">
              <span class="bar-label">{{ row.name }}</span>
              <div class="bar-track">
                <div class="bar-fill" [style.width.%]="(row.value / maxCount(d.byRegion,'value')) * 100" style="background:#7c3aed">
                  <span class="bar-fill-text" *ngIf="row.count > 0">{{ row.count }}</span>
                </div>
              </div>
              <span class="bar-val">{{ fmtGBP(row.value) }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Table -->
      <div class="card">
        <div class="card-hdr"><span class="card-title">Pipeline Detail</span><span class="text-muted">Top 50 commissions</span></div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Comm #</th><th>Name</th><th>Client</th><th>Lead</th><th>Stage</th><th>Value</th></tr></thead>
            <tbody>
              <tr *ngFor="let o of d.rows; trackBy: trkId" [routerLink]="['/opportunities',o.id]">
                <td><span class="chip">{{ o.commNum }}</span></td>
                <td style="font-weight:600;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ o.name }}</td>
                <td class="text-muted">{{ o.clientName }}</td>
                <td class="text-muted">{{ o.lead?.name }}</td>
                <td><span class="badge" [style.background]="stagePalette(o.status)+'20'" [style.color]="stagePalette(o.status)">{{ o.status }}</span></td>
                <td class="val">{{ o.value | currency:'GBP':'symbol':'1.0-0' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ng-container>
    <div *ngIf="!data()" class="empty">Loading report…</div>
  </div>
  `,
})
export class PipelineReportComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();
  readonly data = signal<any>(null);

  ngOnInit() {
    this.api.get<any>('/v1/reporting/pipeline').pipe(takeUntil(this.destroy$)).subscribe(d => this.data.set(d));
  }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
  trkId = (_: number, o: any) => o.id;
  fmtGBP = fmtGBP;
  maxCount = maxVal;
  stagePalette(s: string) {
    return { Lead:'#8a9bb8', Probable:'#2563eb', StrongProbable:'#7c3aed', Contracted:'#16a34a', WorkStarted:'#0f766e', Completed:'#075985' }[s] || '#2563eb';
  }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ['CommNum,Name,Client,Lead,Status,Value',
      ...rows.map((o: any) => `"${o.commNum}","${o.name}","${o.clientName}","${o.lead?.name||''}","${o.status}","${o.value}"`)
    ].join('\n');
    const a = document.createElement('a');
    a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    a.download = `pipeline_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
  }
}

// ================================================================
// CE REPORT
// ================================================================
@Component({
  selector: 'app-ce-report',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [RPT_STYLES],
  template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Compensation Event Summary</h1><p class="rpt-sub">CE pipeline analysis, risk assessment and approval tracking</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">⬇ CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">← Reports</a></div>
    </div>
    <ng-container *ngIf="data() as d">
      <div class="kpi-grid">
        <div class="kpi"><div class="kpi-val">{{ d.kpis.total }}</div><div class="kpi-label">Total CEs</div></div>
        <div class="kpi"><div class="kpi-val amber">{{ fmtGBP(d.kpis.totalValue) }}</div><div class="kpi-label">Total CE Value</div></div>
        <div class="kpi"><div class="kpi-val red">{{ d.kpis.open }}</div><div class="kpi-label">Open CEs</div></div>
        <div class="kpi"><div class="kpi-val green">{{ d.kpis.approved }}</div><div class="kpi-label">Approved</div></div>
      </div>
      <div class="card">
        <div class="card-hdr"><span class="card-title">By Stage</span></div>
        <div class="card-body">
          <div class="bar-chart">
            <div class="bar-row" *ngFor="let row of d.byStage; trackBy: trkIdx">
              <span class="bar-label">{{ row.stage }}</span>
              <div class="bar-track">
                <div class="bar-fill" [style.width.%]="(row.count / maxVal(d.byStage,'count'))*100" [style.background]="cePalette(row.stage)">
                  <span class="bar-fill-text" *ngIf="row.count>0">{{ row.count }}</span>
                </div>
              </div>
              <span class="bar-val">{{ fmtGBP(row.value) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-hdr"><span class="card-title">CE Detail</span></div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>CE Ref</th><th>Commission</th><th>Client</th><th>Stage</th><th>Value</th><th>Raised</th></tr></thead>
            <tbody>
              <tr *ngFor="let c of d.rows; trackBy: trkId">
                <td><span class="chip">{{ c.ceRef }}</span></td>
                <td><span class="chip">{{ c.opportunity?.commNum }}</span></td>
                <td class="text-muted">{{ c.opportunity?.clientName }}</td>
                <td><span class="badge" [class]="ceBadge(c.stage)">{{ c.stage }}</span></td>
                <td class="val">{{ c.value | currency:'GBP':'symbol':'1.0-0' }}</td>
                <td class="text-muted">{{ c.raisedAt | date:'dd MMM yyyy' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ng-container>
    <div *ngIf="!data()" class="empty">Loading report…</div>
  </div>
  `,
})
export class CeReportComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();
  readonly data = signal<any>(null);
  ngOnInit() { this.api.get<any>('/v1/reporting/ce').pipe(takeUntil(this.destroy$)).subscribe(d => this.data.set(d)); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
  trkId = (_: number, o: any) => o.id;
  fmtGBP = fmtGBP;
  maxVal = maxVal;
  cePalette(s: string) { return { Approved:'#16a34a', Rejected:'#dc2626', Assessment:'#d97706', Submitted:'#2563eb', Reviewed:'#7c3aed' }[s] || '#64748b'; }
  ceBadge(s: string) { return { Approved:'badge bg', Rejected:'badge br', Assessment:'badge ba', Submitted:'badge bb', Reviewed:'badge bp' }[s] || 'badge bgr'; }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ['CERef,CommNum,Client,Stage,Value,Raised', ...rows.map((c: any) => `"${c.ceRef}","${c.opportunity?.commNum}","${c.opportunity?.clientName}","${c.stage}","${c.value}","${c.raisedAt}"`)].join('\n');
    const a = document.createElement('a'); a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv); a.download = `ce_${new Date().toISOString().slice(0,10)}.csv`; a.click();
  }
}

// ================================================================
// SRP APPROVAL REPORT
// ================================================================
@Component({
  selector: 'app-srp-report',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [RPT_STYLES],
  template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">SRP Approval Status Report</h1><p class="rpt-sub">Approval pipeline, bottlenecks and overdue SRPs</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">⬇ CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">← Reports</a></div>
    </div>
    <ng-container *ngIf="data() as d">
      <div class="kpi-grid">
        <div class="kpi"><div class="kpi-val">{{ d.kpis.total }}</div><div class="kpi-label">Total SRPs</div></div>
        <div class="kpi"><div class="kpi-val amber">{{ d.kpis.pending }}</div><div class="kpi-label">Awaiting Approval</div></div>
        <div class="kpi"><div class="kpi-val red">{{ d.kpis.overdue }}</div><div class="kpi-label">Overdue (>7 days)</div></div>
        <div class="kpi"><div class="kpi-val green">{{ d.kpis.approved }}</div><div class="kpi-label">Approved</div></div>
      </div>

      <!-- Overdue SRPs -->
      <div class="card" *ngIf="d.overdue.length">
        <div class="card-hdr" style="background:#fff8f0;border-bottom-color:#fed7aa">
          <span class="card-title" style="color:#c2410c">⚠ Overdue Approvals — Immediate Action Required</span>
          <span class="text-muted">{{ d.overdue.length }} SRPs</span>
        </div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Commission</th><th>Client</th><th>Lead</th><th>Sent For Approval</th><th>Days Waiting</th><th></th></tr></thead>
            <tbody>
              <tr *ngFor="let s of d.overdue; trackBy: trkIdx">
                <td><span class="chip">{{ s.opportunity?.commNum }}</span></td>
                <td>{{ s.opportunity?.clientName }}</td>
                <td class="text-muted">{{ s.opportunity?.lead?.name }}</td>
                <td class="text-muted">{{ s.sentForApprovalAt | date:'dd MMM yyyy' }}</td>
                <td><span class="overdue">{{ s.daysPending }}d</span></td>
                <td><a [routerLink]="['/opportunities',s.opportunityId,'srp']" class="btn btn-primary btn-sm">Review</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row-grid">
        <div class="card">
          <div class="card-hdr"><span class="card-title">By Status</span></div>
          <div class="card-body">
            <div class="bar-chart">
              <div class="bar-row" *ngFor="let row of d.byStatus; trackBy: trkIdx">
                <span class="bar-label">{{ row.status }}</span>
                <div class="bar-track">
                  <div class="bar-fill" [style.width.%]="(row.count/d.kpis.total)*100" [style.background]="srpPalette(row.status)">
                    <span class="bar-fill-text" *ngIf="row.count>0">{{ row.count }}</span>
                  </div>
                </div>
                <span class="bar-val">{{ row.count }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-hdr"><span class="card-title">All SRPs</span></div>
          <div class="tbl-wrap" style="max-height:300px;overflow-y:auto">
            <table>
              <thead><tr><th>Commission</th><th>Client</th><th>Status</th><th>Approved By</th></tr></thead>
              <tbody>
                <tr *ngFor="let s of d.rows; trackBy: trkId" [routerLink]="['/opportunities',s.opportunityId,'srp']">
                  <td><span class="chip">{{ s.opportunity?.commNum }}</span></td>
                  <td class="text-muted">{{ s.opportunity?.clientName }}</td>
                  <td><span class="badge" [class]="srpBadge(s.status)">{{ s.status }}</span></td>
                  <td class="text-muted">{{ s.approvedBy || '—' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-container>
    <div *ngIf="!data()" class="empty">Loading report…</div>
  </div>
  `,
})
export class SrpReportComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();
  readonly data = signal<any>(null);
  ngOnInit() { this.api.get<any>('/v1/reporting/srp').pipe(takeUntil(this.destroy$)).subscribe(d => this.data.set(d)); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
  trkId = (_: number, o: any) => o.id;
  srpPalette(s: string) { return { Approved:'#16a34a', SentForApproval:'#d97706', Draft:'#2563eb', Rejected:'#dc2626' }[s] || '#94a3b8'; }
  srpBadge(s: string) { return { Approved:'badge bg', SentForApproval:'badge ba', Draft:'badge bb', Rejected:'badge br' }[s] || 'badge bgr'; }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ['CommNum,Client,Status,ApprovedBy', ...rows.map((s: any) => `"${s.opportunity?.commNum}","${s.opportunity?.clientName}","${s.status}","${s.approvedBy||''}"`)] .join('\n');
    const a = document.createElement('a'); a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv); a.download = `srp_${new Date().toISOString().slice(0,10)}.csv`; a.click();
  }
}

// ================================================================
// INVOICE AGEING REPORT
// ================================================================
@Component({
  selector: 'app-invoice-report',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [RPT_STYLES],
  template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Invoice Ageing Report</h1><p class="rpt-sub">Outstanding invoice analysis by payment age and overdue recovery</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">⬇ CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">← Reports</a></div>
    </div>
    <ng-container *ngIf="data() as d">
      <div class="kpi-grid">
        <div class="kpi"><div class="kpi-val red">{{ d.kpis.totalOutstanding | currency:'GBP':'symbol':'1.0-0' }}</div><div class="kpi-label">Total Outstanding</div></div>
        <div class="kpi"><div class="kpi-val green">{{ d.kpis.totalPaid | currency:'GBP':'symbol':'1.0-0' }}</div><div class="kpi-label">Total Paid</div></div>
        <div class="kpi"><div class="kpi-val red">{{ d.kpis.overdue | currency:'GBP':'symbol':'1.0-0' }}</div><div class="kpi-label">90+ Days Overdue</div></div>
        <div class="kpi"><div class="kpi-val">{{ d.kpis.totalInvoices }}</div><div class="kpi-label">Total Invoices</div></div>
      </div>
      <!-- Ageing buckets -->
      <div class="card">
        <div class="card-hdr"><span class="card-title">Ageing Analysis</span></div>
        <div class="card-body">
          <div class="ageing-grid">
            <div class="ageing-bucket" *ngFor="let b of d.ageing; let i=index; trackBy: trkIdx"
              [style.background]="ageColors[i]+'15'" [style.border]="'1px solid '+ageColors[i]+'30'">
              <div class="ageing-val" [style.color]="ageColors[i]">{{ b.value | currency:'GBP':'symbol':'1.0-0' }}</div>
              <div class="ageing-lbl">{{ b.label }}</div>
              <div style="font-size:11px;color:#94a3b8;margin-top:2px">{{ b.count }} invoices</div>
            </div>
          </div>
          <div style="margin-top:12px">
            <div class="bar-chart">
              <div class="bar-row" *ngFor="let b of d.ageing; let i=index; trackBy: trkIdx">
                <span class="bar-label">{{ b.label }}</span>
                <div class="bar-track">
                  <div class="bar-fill" [style.width.%]="(b.value / maxVal(d.ageing,'value'))*100" [style.background]="ageColors[i]">
                    <span class="bar-fill-text" *ngIf="b.count>0">{{ b.count }}</span>
                  </div>
                </div>
                <span class="bar-val">{{ b.value | currency:'GBP':'symbol':'1.0-0' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table -->
      <div class="card">
        <div class="card-hdr"><span class="card-title">Invoice Detail</span></div>
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Invoice Ref</th><th>Commission</th><th>Client</th><th>Net Amount</th><th>Status</th><th>Issued</th></tr></thead>
            <tbody>
              <tr *ngFor="let inv of d.rows; trackBy: trkId">
                <td><span class="chip">{{ inv.invoiceRef }}</span></td>
                <td><span class="chip">{{ inv.schedule?.opportunity?.commNum }}</span></td>
                <td class="text-muted">{{ inv.schedule?.opportunity?.clientName }}</td>
                <td class="val">{{ inv.netAmount | currency:'GBP':'symbol':'1.0-0' }}</td>
                <td><span class="badge" [class]="invBadge(inv.status)">{{ inv.status }}</span></td>
                <td class="text-muted">{{ inv.issuedAt | date:'dd MMM yyyy' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ng-container>
    <div *ngIf="!data()" class="empty">Loading report…</div>
  </div>
  `,
})
export class InvoiceReportComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();
  readonly data = signal<any>(null);
  readonly ageColors = ['#16a34a','#2563eb','#d97706','#dc2626'];
  ngOnInit() { this.api.get<any>('/v1/reporting/invoices').pipe(takeUntil(this.destroy$)).subscribe(d => this.data.set(d)); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
  trkId = (_: number, o: any) => o.id;
  maxVal = maxVal;
  invBadge(s: string) { return { Paid:'badge bg', Pending:'badge ba', Overdue:'badge br', Draft:'badge bb', Cancelled:'badge bgr' }[s] || 'badge bgr'; }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ['InvoiceRef,CommNum,Client,NetAmount,Status,Issued', ...rows.map((i: any) => `"${i.invoiceRef}","${i.schedule?.opportunity?.commNum}","${i.schedule?.opportunity?.clientName}","${i.netAmount}","${i.status}","${i.issuedAt}"`)].join('\n');
    const a = document.createElement('a'); a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv); a.download = `invoices_${new Date().toISOString().slice(0,10)}.csv`; a.click();
  }
}

// ================================================================
// FEE FORECAST REPORT
// ================================================================
@Component({
  selector: 'app-fee-report',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [RPT_STYLES],
  template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Fee Forecasting Report</h1><p class="rpt-sub">Commission fee forecast, margin analysis and procurement route breakdown</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">⬇ CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">← Reports</a></div>
    </div>
    <ng-container *ngIf="data() as d">
      <div class="kpi-grid">
        <div class="kpi"><div class="kpi-val amber">{{ d.kpis.totalForecast | currency:'GBP':'symbol':'1.0-0' }}</div><div class="kpi-label">Total Fee Forecast</div></div>
        <div class="kpi"><div class="kpi-val">{{ d.kpis.totalConstruction | currency:'GBP':'symbol':'1.0-0' }}</div><div class="kpi-label">Total Construction Value</div></div>
        <div class="kpi"><div class="kpi-val green">{{ d.kpis.avgMargin | number:'1.1-1' }}%</div><div class="kpi-label">Average Margin</div></div>
        <div class="kpi"><div class="kpi-val">{{ d.kpis.commissions }}</div><div class="kpi-label">Commissions with FC</div></div>
      </div>
      <div class="row-grid">
        <div class="card">
          <div class="card-hdr"><span class="card-title">By Procurement Route</span></div>
          <div class="card-body">
            <div class="bar-chart" *ngIf="d.byProcRoute.length">
              <div class="bar-row" *ngFor="let row of d.byProcRoute; trackBy: trkIdx">
                <span class="bar-label">{{ row.name }}</span>
                <div class="bar-track">
                  <div class="bar-fill" [style.width.%]="(row.count / maxVal(d.byProcRoute,'count'))*100" style="background:#2563eb">
                    <span class="bar-fill-text" *ngIf="row.count>0">{{ row.count }}</span>
                  </div>
                </div>
                <span class="bar-val">{{ row.count }}</span>
              </div>
            </div>
            <div *ngIf="!d.byProcRoute.length" class="empty">No procurement data.</div>
          </div>
        </div>
        <div class="card">
          <div class="card-hdr"><span class="card-title">Fee Calculator Detail</span></div>
          <div class="tbl-wrap" style="max-height:300px;overflow-y:auto">
            <table>
              <thead><tr><th>Commission</th><th>Construction Value</th><th>Proc Route</th><th>Grand Total</th></tr></thead>
              <tbody>
                <tr *ngFor="let f of d.rows; trackBy: trkId" [routerLink]="['/opportunities',f.opportunityId,'fee-calculator']">
                  <td><span class="chip">{{ f.opportunity?.commNum }}</span></td>
                  <td>{{ f.constructionValue | currency:'GBP':'symbol':'1.0-0' }}</td>
                  <td class="text-muted" style="font-size:11px">{{ f.procRoute }}</td>
                  <td class="val">{{ f.grandTotal | currency:'GBP':'symbol':'1.0-0' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-container>
    <div *ngIf="!data()" class="empty">Loading report…</div>
  </div>
  `,
})
export class FeeReportComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();
  readonly data = signal<any>(null);
  ngOnInit() { this.api.get<any>('/v1/reporting/fees').pipe(takeUntil(this.destroy$)).subscribe(d => this.data.set(d)); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
  trkId = (_: number, o: any) => o.id;
  maxVal = maxVal;
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ['CommNum,Client,ProcRoute,Construction,GrandTotal', ...rows.map((f: any) => `"${f.opportunity?.commNum}","${f.opportunity?.clientName}","${f.procRoute}","${f.constructionValue}","${f.grandTotal}"`)].join('\n');
    const a = document.createElement('a'); a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv); a.download = `fees_${new Date().toISOString().slice(0,10)}.csv`; a.click();
  }
}

// ================================================================
// ACTIVITY REPORT
// ================================================================
@Component({
  selector: 'app-activity-report',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, FormsModule, FilterBarComponent],
  styles: [RPT_STYLES],
  template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Activity Report</h1><p class="rpt-sub">Platform audit trail with advanced filtering and export</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">⬇ CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">← Reports</a></div>
    </div>
    <div class="card">
      <div class="card-hdr">
        <span class="card-title">Filters</span>
        <div style="display:flex;gap:6px">
          <input type="date" [(ngModel)]="from" (ngModelChange)="load()" style="border:1px solid #dde2ee;border-radius:5px;padding:4px 8px;font-size:12px;font-family:inherit">
          <input type="date" [(ngModel)]="to" (ngModelChange)="load()" style="border:1px solid #dde2ee;border-radius:5px;padding:4px 8px;font-size:12px;font-family:inherit">
          <select [(ngModel)]="entityType" (ngModelChange)="load()" style="border:1px solid #dde2ee;border-radius:5px;padding:4px 8px;font-size:12px;background:#fff;cursor:pointer">
            <option value="">All Modules</option>
            <option *ngFor="let m of modules; trackBy: trkId" [value]="m">{{ m }}</option>
          </select>
        </div>
      </div>
      <app-filter-bar placeholder="Search description, user, module…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
      <div class="tbl-wrap">
        <table>
          <thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Module</th><th>Description</th></tr></thead>
          <tbody>
            <tr *ngFor="let e of rows(); trackBy: trkId">
              <td class="text-muted" style="white-space:nowrap;font-size:11px">{{ e.createdAt | date:'dd MMM HH:mm' }}</td>
              <td>
                <div style="display:flex;align-items:center;gap:5px">
                  <div style="width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;color:#fff"
                    [style.background]="e.user?.avatarColor||'#3d7eff'">{{ e.user?.initials||'SY' }}</div>
                  <span style="font-size:12px">{{ e.user?.name||'System' }}</span>
                </div>
              </td>
              <td><span class="badge" [class]="aBadge(e.action)">{{ e.action }}</span></td>
              <td class="text-muted">{{ e.entityType }}</td>
              <td style="max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px">{{ e.description }}</td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="5" class="empty">{{ loading() ? 'Loading…' : 'No activity found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <div style="display:flex;justify-content:space-between;padding:8px 12px;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b">
        <span>{{ total() | number }} total entries</span>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" [disabled]="page()<=1" (click)="onPage(page()-1)">‹</button>
          <span style="padding:4px 8px">Page {{ page() }}</span>
          <button class="btn btn-ghost btn-sm" [disabled]="rows().length < pageSize()" (click)="onPage(page()+1)">›</button>
        </div>
      </div>
    </div>
  </div>
  `,
})
export class ActivityReportComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();
  readonly rows = signal<any[]>([]);
  readonly total = signal(0);
  readonly loading = signal(false);
  readonly page = signal(1);
  readonly pageSize = signal(50);
  search = ''; from = ''; to = ''; entityType = '';
  modules = ['opportunities','srps','fee_calculators','ce_events','invoices','suppliers','users','delegations'];

  ngOnInit() { this.load(); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  load() {
    this.loading.set(true);
    const p: any = { page: this.page(), pageSize: this.pageSize() };
    if (this.search) p.search = this.search;
    if (this.entityType) p.entityType = this.entityType;
    if (this.from) p.from = this.from;
    if (this.to) p.to = this.to;
    this.api.getList<any>('/v1/reporting/activity', p).pipe(takeUntil(this.destroy$)).subscribe({
      next: r => { this.rows.set(r.data); this.total.set(r.meta.total); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
  onSearch(q: string) { this.search = q; this.page.set(1); this.load(); }
  onPage(p: number) { this.page.set(p); this.load(); }
  trkId = (_: number, e: any) => e.id;
  aBadge(a: string) { return { Create:'badge bg', Update:'badge bb', Approve:'badge bg', Reject:'badge br', Delete:'badge br', System:'badge bgr' }[a] || 'badge bgr'; }
  exportCSV() {
    const rows = this.rows();
    const csv = ['Timestamp,User,Action,Module,Description', ...rows.map(r => `"${r.createdAt}","${r.user?.name||'System'}","${r.action}","${r.entityType}","${r.description?.replace(/"/g,"'")}"`)] .join('\n');
    const a = document.createElement('a'); a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv); a.download = `activity_${new Date().toISOString().slice(0,10)}.csv`; a.click();
  }
}

// ================================================================
// AI INSIGHTS COMPONENT
// ================================================================
@Component({
  selector: 'app-ai-insights',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [RPT_STYLES + `
    .ai-hdr{display:flex;align-items:center;gap:8px;margin-bottom:14px;padding:12px 14px;background:linear-gradient(135deg,#1e3a5f,#2563eb);border-radius:8px;color:#fff;}
    .ai-hdr-icon{font-size:24px;}
    .ai-hdr-text h2{font-size:15px;font-weight:700;margin:0;}
    .ai-hdr-text p{font-size:12px;opacity:.8;margin:2px 0 0;}
    .ai-badge{background:rgba(255,255,255,.15);padding:3px 10px;border-radius:10px;font-size:11px;font-weight:600;margin-left:auto;}
    .refresh-btn{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);color:#fff;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;cursor:pointer;}
    .refresh-btn:hover{background:rgba(255,255,255,.25);}
    .sev-critical{border-left:4px solid #dc2626 !important;}
    .sev-warning{border-left:4px solid #d97706 !important;}
    .sev-info{border-left:4px solid #2563eb !important;}
    .sev-good{border-left:4px solid #16a34a !important;}
    .overdue{background:#fee2e2;color:#991b1b;font-size:10.5px;font-weight:700;padding:2px 7px;border-radius:8px;}
  `],
  template: `
  <div class="rpt-shell">
    <div class="ai-hdr">
      <span class="ai-hdr-icon">🤖</span>
      <div class="ai-hdr-text">
        <h2>AI-Powered Insights</h2>
        <p>Deterministic pattern analysis — bottleneck detection, risk indicators, recommendations</p>
      </div>
      <span class="ai-badge" *ngIf="generatedAt()">Generated {{ generatedAt() | date:'dd MMM HH:mm' }}</span>
      <button class="refresh-btn" (click)="load()" [disabled]="loading()">{{ loading() ? '⟳ Analysing…' : '⟳ Refresh' }}</button>
    </div>

    <div *ngIf="loading()" class="card"><div class="card-body empty">Analysing platform data…</div></div>

    <div class="insight-grid" *ngIf="!loading() && insights().length">
      <div class="insight-card" *ngFor="let ins of insights(); trackBy: trkIdx" [class]="'insight-card sev-'+ins.severity">
        <div class="insight-hdr">
          <div>
            <div class="insight-cat">{{ ins.category }}</div>
            <div class="insight-title">{{ ins.title }}</div>
          </div>
          <div *ngIf="ins.metric !== null" style="text-align:right">
            <div class="insight-metric" [class]="ins.severity">{{ ins.metric }}</div>
            <div style="font-size:10px;color:#94a3b8">{{ ins.metricLabel }}</div>
          </div>
          <div *ngIf="ins.metric === null" style="font-size:18px">
            {{ severityIcon(ins.severity) }}
          </div>
        </div>
        <div class="insight-summary">{{ ins.summary }}</div>
        <div class="insight-rec">💡 {{ ins.recommendation }}</div>
      </div>
    </div>

    <div class="card" *ngIf="!loading() && !insights().length">
      <div class="card-body empty">No insights available. Try refreshing.</div>
    </div>

    <!-- Quick links -->
    <div class="card" *ngIf="!loading() && insights().length">
      <div class="card-hdr"><span class="card-title">Recommended Actions</span></div>
      <div class="card-body" style="display:flex;flex-wrap:wrap;gap:8px">
        <a class="btn btn-primary btn-sm" routerLink="/operations/pending">View Pending Actions</a>
        <a class="btn btn-ghost btn-sm" routerLink="/reporting/srp">SRP Approval Status</a>
        <a class="btn btn-ghost btn-sm" routerLink="/reporting/invoices">Invoice Ageing</a>
        <a class="btn btn-ghost btn-sm" routerLink="/reporting/ce">CE Risk Report</a>
        <a class="btn btn-ghost btn-sm" routerLink="/reporting/pipeline">Pipeline Health</a>
      </div>
    </div>
  </div>
  `,
})
export class AiInsightsComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();
  readonly insights = signal<any[]>([]);
  readonly generatedAt = signal<string>('');
  readonly loading = signal(false);

  ngOnInit() { this.load(); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  load() {
    this.loading.set(true);
    this.api.get<any>('/v1/reporting/ai-insights').pipe(takeUntil(this.destroy$)).subscribe({
      next: r => { this.insights.set(r.insights || []); this.generatedAt.set(r.generatedAt); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }
  severityIcon(s: string) { return { critical:'🔴', warning:'🟡', info:'🔵', good:'✅' }[s] || '⚪'; }
}

// ================================================================
// SCHEDULED REPORTS
// ================================================================
@Component({
  selector: 'app-scheduled-reports',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [RPT_STYLES],
  template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Scheduled Reports</h1><p class="rpt-sub">Automated report delivery — configure, schedule and track execution</p></div>
      <button class="btn btn-primary btn-sm" (click)="createSchedule()">+ New Schedule</button>
    </div>
    <div class="sched-grid" *ngIf="reports().length">
      <div class="sched-card" *ngFor="let r of reports(); trackBy: trkIdx">
        <div class="sched-card-hdr">
          <div>
            <div class="sched-name">{{ r.name }}</div>
            <div class="sched-meta">{{ r.frequency | titlecase }} · {{ r.time }}</div>
          </div>
          <span class="badge" [class]="r.status==='active'?'badge bg':r.status==='paused'?'badge ba':'badge bgr'">{{ r.status }}</span>
        </div>
        <div style="font-size:11.5px;color:#5a6b8a">
          <div style="margin-bottom:3px"><strong>Report:</strong> {{ r.reportType }}</div>
          <div style="margin-bottom:3px"><strong>Delivery:</strong> {{ r.deliveryMethod }}</div>
          <div *ngIf="r.recipients" style="margin-bottom:3px"><strong>To:</strong> {{ r.recipients }}</div>
          <div *ngIf="r.lastRun"><strong>Last run:</strong> {{ r.lastRun | date:'dd MMM yyyy HH:mm' }}</div>
          <div *ngIf="r.nextRun"><strong>Next run:</strong> {{ r.nextRun | date:'dd MMM yyyy HH:mm' }}</div>
          <div *ngIf="!r.lastRun" style="color:#94a3b8">Not yet executed</div>
        </div>
        <div class="sched-foot">
          <button class="btn btn-ghost btn-sm" (click)="toggleEnabled(r)">{{ r.enabled ? '⏸ Pause' : '▶ Enable' }}</button>
          <button class="btn btn-ghost btn-sm" (click)="runNow(r)">▷ Run Now</button>
          <a class="btn btn-ghost btn-sm" [routerLink]="['/reporting', r.reportType]">View Report</a>
        </div>
      </div>
    </div>
    <div *ngIf="!reports().length" class="card"><div class="card-body empty">No scheduled reports configured.</div></div>

    <div class="card" style="margin-top:12px">
      <div class="card-hdr"><span class="card-title">Available Report Types</span></div>
      <div class="card-body" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px">
        <div *ngFor="let t of reportTypes; trackBy: trkIdx" style="padding:8px 10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;font-size:12px">
          <div style="font-weight:600;color:#1a2240">{{ t.label }}</div>
          <div style="color:#64748b;font-size:11px;margin-top:2px">{{ t.desc }}</div>
        </div>
      </div>
    </div>
  </div>
  `,
})
export class ScheduledReportsComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();
  readonly reports = signal<any[]>([]);

  readonly reportTypes = [
    { label:'Pipeline', desc:'Opportunity pipeline by status/sector' },
    { label:'CE Summary', desc:'Compensation event analysis' },
    { label:'SRP Status', desc:'Approval bottlenecks and overdue' },
    { label:'Invoice Ageing', desc:'Outstanding payments by age bucket' },
    { label:'Fee Forecast', desc:'Commission fee forecast' },
    { label:'Activity', desc:'Platform audit trail' },
    { label:'AI Insights', desc:'AI-powered risk analysis' },
  ];

  ngOnInit() {
    this.api.get<any[]>('/v1/reporting/scheduled').pipe(takeUntil(this.destroy$)).subscribe(r => this.reports.set(r || []));
  }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
  trkIdx = (i: number) => i;

  toggleEnabled(r: any) { r.enabled = !r.enabled; r.status = r.enabled ? 'active' : 'paused'; this.reports.set([...this.reports()]); }
  runNow(r: any) { alert(`Report "${r.name}" queued for immediate execution.\n\nIn production this would trigger the report generation service and deliver to ${r.deliveryMethod}.`); }
  createSchedule() { alert('Schedule creation UI — in production this would open a modal to configure a new automated report schedule.'); }
}

