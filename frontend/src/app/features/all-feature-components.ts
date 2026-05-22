// ================================================================
// PC HUB 2.0 — All Angular Feature Components
// Each is a standalone component, lazy-loaded via routes
// ================================================================
import { Component, Directive, OnInit, OnDestroy, signal, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { ApiService, OpportunitiesService, AuthService, AuthTokenService, Opportunity, OppStatus } from '../core/services/api.service';
import { StageBadgeComponent, PaginatorComponent, FilterBarComponent, VersionHistoryComponent } from '../shared/components/shared-components';

// ── Shared enterprise table styles ───────────────────────────────
const ENT_STYLES = `
  :host{display:block;}
  .page-shell{display:flex;flex-direction:column;gap:0;height:100%;}
  .toolbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px;}
  .page-title{font-size:18px;font-weight:700;color:#1a2240;margin:0;}
  .toolbar-actions{display:flex;gap:6px;align-items:center;}
  .stat-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:14px;}
  .stat{background:#fff;border:1px solid #dde2ee;border-radius:8px;padding:12px 14px;}
  .stat-val{font-size:22px;font-weight:800;color:#2563eb;}
  .stat-val.green{color:#16a34a;} .stat-val.amber{color:#d97706;} .stat-val.red{color:#dc2626;}
  .stat-label{font-size:11px;color:#8a9bb8;margin-top:2px;font-weight:500;}
  .tbl-card{background:#fff;border:1px solid #dde2ee;border-radius:8px;overflow:hidden;}
  .tbl-scroll{overflow-x:auto;}
  table{width:100%;border-collapse:collapse;font-size:12.5px;}
  thead th{background:#f5f7fb;padding:9px 12px;font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#5a6b8a;border-bottom:2px solid #dde2ee;white-space:nowrap;cursor:pointer;user-select:none;}
  thead th:hover{background:#eef1f8;color:#2563eb;}
  tbody tr{border-bottom:1px solid #f0f2f7;transition:background .08s;cursor:pointer;}
  tbody tr:hover{background:#f5f7fb;}
  tbody td{padding:9px 12px;vertical-align:middle;}
  .empty{text-align:center;padding:40px;color:#94a3b8;font-size:13px;}
  .badge{display:inline-block;padding:2px 9px;border-radius:10px;font-size:10.5px;font-weight:700;}
  .badge-green{background:#dcfce7;color:#166534;} .badge-amber{background:#fef3c7;color:#92400e;}
  .badge-blue{background:#dbeafe;color:#1d4ed8;} .badge-red{background:#fee2e2;color:#991b1b;}
  .badge-gray{background:#f1f5f9;color:#475569;} .badge-purple{background:#ede9fe;color:#5b21b6;}
  .chip{display:inline-block;padding:2px 8px;border-radius:10px;background:rgba(37,99,235,.08);color:#1d4ed8;font-size:10.5px;font-weight:600;}
  .btn{display:inline-flex;align-items:center;gap:4px;padding:6px 14px;border-radius:7px;border:1px solid transparent;cursor:pointer;font-size:12.5px;font-weight:600;font-family:inherit;transition:all .12s;}
  .btn-primary{background:#2563eb;color:#fff;border-color:#2563eb;}
  .btn-primary:hover{background:#1d4ed8;}
  .btn-outline{background:#fff;color:#2563eb;border-color:#2563eb;}
  .btn-outline:hover{background:#eff6ff;}
  .btn-ghost{background:transparent;color:#5a6b8a;border-color:#dde2ee;}
  .btn-ghost:hover{background:#f5f7fb;}
  .btn-sm{padding:4px 10px;font-size:11.5px;}
  .btn-danger{background:#dc2626;color:#fff;border-color:#dc2626;}
  .value{font-weight:700;color:#d97706;}
  .text-muted{color:#64748b;font-size:12px;}
  .avatar{display:inline-flex;align-items:center;justify-content:center;border-radius:50%;color:#fff;font-weight:700;flex-shrink:0;}
  .progress-wrap{display:flex;align-items:center;gap:5px;min-width:80px;}
  .progress-track{flex:1;height:5px;background:#e2e8f0;border-radius:3px;overflow:hidden;}
  .progress-fill{height:100%;background:#2563eb;border-radius:3px;}
  .form-input{border:1px solid #dde2ee;border-radius:6px;padding:7px 10px;font-size:12.5px;font-family:inherit;background:#fff;outline:none;width:100%;}
  .form-input:focus{border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.1);}
  .form-select{border:1px solid #dde2ee;border-radius:6px;padding:7px 10px;font-size:12.5px;font-family:inherit;background:#fff;cursor:pointer;outline:none;}
  .form-select:focus{border-color:#2563eb;}
`;


// ================================================================
// OPPORTUNITIES LIST COMPONENT
// ================================================================
const BOARD_COLS = [
  {status:'Lead',          label:'Lead',           pct:20,  color:'#8a9bb8', bgLight:'rgba(138,155,184,.12)'},
  {status:'Probable',      label:'Probable',        pct:50,  color:'#2563eb', bgLight:'rgba(37,99,235,.1)'},
  {status:'StrongProbable',label:'Strong Probable', pct:75,  color:'#7c3aed', bgLight:'rgba(124,58,237,.1)'},
  {status:'Contracted',    label:'Contracted',      pct:100, color:'#16a34a', bgLight:'rgba(22,163,74,.1)'},
  {status:'WorkStarted',   label:'Work Started',    pct:100, color:'#0f766e', bgLight:'rgba(15,118,110,.1)'},
  {status:'Completed',     label:'Completed',       pct:100, color:'#0369a1', bgLight:'rgba(3,105,161,.1)'},
];

@Component({
  selector: 'app-opportunities-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, StageBadgeComponent, PaginatorComponent],
  styles: [ENT_STYLES + `
    /* Stat strip — 4 equal columns */
    .opp-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:12px;}
    .opp-stat{background:#fff;border:1px solid #dde2ee;border-radius:10px;padding:14px 18px;}
    .opp-stat-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8a9bb8;margin-bottom:6px;}
    .opp-stat-val{font-size:26px;font-weight:800;line-height:1;}
    /* Filter row */
    .filter-row{display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap;}
    .search-wrap{position:relative;flex:1;min-width:180px;}
    .search-icon{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:#8a9bb8;font-size:12px;pointer-events:none;}
    .search-inp{padding:7px 10px 7px 28px;border:1px solid #dde2ee;border-radius:7px;font-size:12.5px;font-family:inherit;background:#fff;outline:none;width:100%;}
    .search-inp:focus{border-color:#2563eb;box-shadow:0 0 0 2px rgba(37,99,235,.1);}
    .f-select{padding:7px 28px 7px 10px;border:1px solid #dde2ee;border-radius:7px;font-size:12.5px;font-family:inherit;background:#fff;cursor:pointer;outline:none;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238a9bb8'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 9px center;}
    .f-select:focus{border-color:#2563eb;}
    .view-toggle{display:flex;gap:0;background:#f1f5f9;border-radius:7px;padding:3px;margin-left:auto;}
    .vt-btn{background:transparent;border:none;padding:5px 12px;border-radius:5px;cursor:pointer;font-size:12px;font-weight:600;color:#64748b;transition:all .12s;display:flex;align-items:center;gap:4px;}
    .vt-btn.active{background:#fff;color:#1a2240;box-shadow:0 1px 4px rgba(0,0,0,.1);}
    /* Board layout */
    .board-grid{display:flex;gap:10px;overflow-x:auto;padding-bottom:12px;}
    .board-col{width:235px;min-width:235px;flex-shrink:0;background:#fff;border:1px solid #dde2ee;border-radius:10px;display:flex;flex-direction:column;overflow:hidden;}
    .board-head{padding:10px 12px 0;}
    .bh-top{display:flex;align-items:center;gap:6px;margin-bottom:5px;}
    .bdot{width:9px;height:9px;border-radius:50%;flex-shrink:0;}
    .blbl{flex:1;font-size:12.5px;font-weight:700;color:#1a2240;}
    .bpct{font-size:10px;font-weight:700;padding:2px 6px;border-radius:5px;}
    .bcnt{background:#f1f5f9;color:#5a6b8a;font-size:10.5px;font-weight:700;padding:2px 8px;border-radius:10px;}
    .board-pipeline{font-size:11.5px;font-weight:700;color:#1a2240;padding:4px 12px 8px;border-bottom:1px solid #f0f2f7;}
    .bpipe-sub{font-size:10px;color:#8a9bb8;font-weight:400;margin-left:2px;}
    .board-body{flex:1;overflow-y:auto;max-height:520px;padding:8px 7px 6px;display:flex;flex-direction:column;gap:6px;}
    /* Board card */
    .bcard{border:1px solid #e8edf5;border-radius:8px;padding:10px 11px;cursor:pointer;background:#fff;transition:all .12s;display:block;text-decoration:none;color:inherit;}
    .bcard:hover{border-color:#93c5fd;box-shadow:0 2px 10px rgba(37,99,235,.1);transform:translateY(-1px);}
    .bcard-top{display:flex;justify-content:space-between;align-items:flex-start;gap:6px;margin-bottom:2px;}
    .bcard-name{font-size:12px;font-weight:700;color:#1a2240;line-height:1.35;flex:1;}
    .bcard-num{font-size:9.5px;font-weight:700;background:#dbeafe;color:#1d4ed8;padding:2px 7px;border-radius:5px;white-space:nowrap;flex-shrink:0;}
    .bcard-client{font-size:11px;color:#64748b;margin-bottom:6px;}
    .bcard-chips{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:7px;}
    .bc-chip{font-size:9.5px;font-weight:600;background:#f1f5f9;color:#475569;padding:2px 7px;border-radius:5px;}
    .bc-more{background:#e2e8f0;color:#64748b;}
    .bcard-prog{height:3px;background:#e2e8f0;border-radius:2px;overflow:hidden;margin-bottom:8px;}
    .bcard-prog-fill{height:100%;border-radius:2px;}
    .bcard-foot{display:flex;align-items:center;justify-content:space-between;}
    .bcard-lead{display:flex;align-items:center;gap:5px;font-size:11px;color:#64748b;}
    .bc-av{width:18px;height:18px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:7px;font-weight:700;flex-shrink:0;}
    .bcard-val{font-size:11.5px;font-weight:700;color:#d97706;}
    .board-empty{text-align:center;color:#94a3b8;font-size:11.5px;padding:20px 8px;}
    @media(max-width:900px){.opp-stats{grid-template-columns:repeat(2,1fr);}}
    /* ── New Opportunity Drawer ── */
    .drawer-overlay{position:fixed;inset:0;background:rgba(15,23,42,.4);z-index:400;cursor:pointer;}
    .drawer{position:fixed;top:0;right:0;height:100vh;background:#fff;z-index:401;display:flex;flex-direction:column;box-shadow:-6px 0 40px rgba(0,0,0,.18);transition:width .2s ease;}
    .drawer.compact{width:480px;} .drawer.expanded{width:780px;}
    .drawer-header{display:flex;align-items:flex-start;justify-content:space-between;padding:20px 22px 16px;border-bottom:2px solid #f0f2f7;flex-shrink:0;}
    .drawer-title{font-size:17px;font-weight:800;color:#1a2240;margin-bottom:3px;}
    .drawer-sub{font-size:12px;color:#8a9bb8;}
    .drawer-btns{display:flex;gap:6px;align-items:center;margin-top:2px;}
    .dic{background:none;border:1px solid #dde2ee;border-radius:6px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#8a9bb8;font-size:14px;transition:all .12s;}
    .dic:hover{background:#f1f5f9;color:#1a2240;border-color:#b0bcce;}
    .drawer-body{flex:1;overflow-y:auto;padding:20px 22px;}
    .drawer-footer{padding:16px 22px;border-top:1px solid #f0f2f7;display:flex;gap:10px;flex-shrink:0;}
    .form-row{display:grid;gap:12px;margin-bottom:14px;}
    .form-row.two{grid-template-columns:1fr 1fr;}
    .form-row.three{grid-template-columns:1fr 1fr 1fr;}
    .form-row.one{grid-template-columns:1fr;}
    .fg{display:flex;flex-direction:column;gap:5px;}
    .flbl{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8a9bb8;}
    .finp{border:1.5px solid #d1d9e8;border-radius:7px;padding:9px 11px;font-size:13px;font-family:inherit;color:#1a2240;outline:none;background:#fff;transition:border .12s,box-shadow .12s;width:100%;box-sizing:border-box;}
    .finp:focus{border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.12);}
    .finp[readonly]{background:#f8fafc;color:#94a3b8;cursor:default;}
    .finp.ng-invalid.ng-touched{border-color:#ef4444;}
    .svc-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:7px;margin-top:6px;}
    .svc-item{display:flex;align-items:center;gap:8px;padding:7px 10px;border:1.5px solid #e2e8f0;border-radius:7px;cursor:pointer;font-size:12.5px;color:#475569;user-select:none;transition:all .1s;}
    .svc-item.on{border-color:#2563eb;background:#eff6ff;color:#1d4ed8;font-weight:600;}
    .svc-item input[type=checkbox]{accent-color:#2563eb;width:14px;height:14px;margin:0;pointer-events:none;}
    .err-txt{font-size:11px;color:#ef4444;margin-top:3px;}
  `],
  template: `
<div class="page-shell">
  <!-- Toolbar -->
  <div class="toolbar">
    <h1 class="page-title">Opportunities</h1>
    <div class="toolbar-actions">
      <button class="btn btn-ghost btn-sm">Export</button>
      <button class="btn btn-primary btn-sm" (click)="openDrawer()">+ New Opportunity</button>
    </div>
  </div>

  <!-- Stat strip -->
  <div class="opp-stats">
    <div class="opp-stat">
      <div class="opp-stat-lbl">Total Pipeline</div>
      <div class="opp-stat-val" style="color:#2563eb">{{fmtK(totalPipeline())}}</div>
    </div>
    <div class="opp-stat">
      <div class="opp-stat-lbl">All Commissions</div>
      <div class="opp-stat-val" style="color:#1a2240">{{rows().length}}</div>
    </div>
    <div class="opp-stat">
      <div class="opp-stat-lbl">Contracted / Work Started</div>
      <div class="opp-stat-val" style="color:#16a34a">{{contractedCount()}}</div>
    </div>
    <div class="opp-stat">
      <div class="opp-stat-lbl">Completed</div>
      <div class="opp-stat-val" style="color:#0369a1">{{completedCount()}}</div>
    </div>
  </div>

  <!-- Filter + View toggle row -->
  <div class="filter-row">
    <div class="search-wrap">
      <span class="search-icon">🔍</span>
      <input class="search-inp" type="text" placeholder="Search commissions..." [formControl]="searchCtrl" autocomplete="off" aria-label="Search">
    </div>
    <select class="f-select" [formControl]="leadCtrl" aria-label="Filter by lead">
      <option value="">All Leads</option>
      <option *ngFor="let l of uniqueLeads()" [value]="l">{{l}}</option>
    </select>
    <select class="f-select" [formControl]="statusCtrl" aria-label="Filter by status">
      <option value="">All Statuses</option>
      <option *ngFor="let s of statuses" [value]="s">{{statusLabel(s)}}</option>
    </select>
    <div class="view-toggle" role="group" aria-label="View mode">
      <button class="vt-btn" [class.active]="view()==='board'" (click)="view.set('board')">⊞ Board</button>
      <button class="vt-btn" [class.active]="view()==='list'" (click)="view.set('list')">☰ List</button>
    </div>
  </div>

  <!-- BOARD VIEW -->
  <ng-container *ngIf="view()==='board'">
    <div class="board-grid" role="region" aria-label="Opportunity board">
      <div class="board-col" *ngFor="let col of visibleCols()" [attr.aria-label]="col.label">
        <div class="board-head">
          <div class="bh-top">
            <div class="bdot" [style.background]="col.color"></div>
            <span class="blbl">{{col.label}}</span>
            <span class="bpct" [style.color]="col.color" [style.background]="col.bgLight">{{col.pct}}%</span>
            <span class="bcnt">{{colItems(col.status).length}}</span>
          </div>
        </div>
        <div class="board-pipeline">
          {{fmtK(colTotal(col.status))}}<span class="bpipe-sub">pipeline</span>
        </div>
        <div class="board-body">
          <a class="bcard" *ngFor="let o of colItems(col.status); trackBy: trackById"
            [routerLink]="['/opportunities',o.id]" tabindex="0" role="button" [attr.aria-label]="o.name">
            <div class="bcard-top">
              <div class="bcard-name">{{o.name}}</div>
              <span class="bcard-num">{{o.commNum}}</span>
            </div>
            <div class="bcard-client">{{o.clientName}}</div>
            <div class="bcard-chips" *ngIf="o.services?.length">
              <span class="bc-chip" *ngFor="let s of (o.services || []).slice(0,2)">{{s}}</span>
              <span class="bc-chip bc-more" *ngIf="(o.services?.length||0) > 2">+{{(o.services?.length||0)-2}}</span>
            </div>
            <div class="bcard-prog">
              <div class="bcard-prog-fill" [style.width]="o.stagePercent+'%'" [style.background]="col.color"></div>
            </div>
            <div class="bcard-foot">
              <div class="bcard-lead" *ngIf="o.lead">
                <div class="bc-av" [style.background]="o.lead.avatarColor||'#3d7eff'">{{o.lead.initials}}</div>
                <span>{{o.lead.name}}</span>
              </div>
              <span class="bcard-val">{{fmtK(+o.value)}}</span>
            </div>
          </a>
          <div class="board-empty" *ngIf="!colItems(col.status).length">No commissions</div>
        </div>
      </div>
    </div>
  </ng-container>

  <!-- LIST VIEW -->
  <ng-container *ngIf="view()==='list'">
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr>
            <th (click)="sortBy('commNum')">Comm #</th>
            <th (click)="sortBy('name')">Name</th>
            <th (click)="sortBy('clientName')">Client</th>
            <th>Lead</th>
            <th (click)="sortBy('status')">Status</th>
            <th style="text-align:right" (click)="sortBy('value')">Value</th>
            <th>Stage</th>
            <th></th>
          </tr></thead>
          <tbody>
            <tr *ngFor="let o of pagedRows(); trackBy: trackById"
              [routerLink]="['/opportunities',o.id]" tabindex="0" (keydown.enter)="goto(o.id)">
              <td><span class="chip">{{o.commNum}}</span></td>
              <td style="font-weight:600;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{o.name}}</td>
              <td class="text-muted">{{o.clientName}}</td>
              <td>
                <div style="display:flex;align-items:center;gap:5px" *ngIf="o.lead">
                  <span class="avatar" [style.background]="o.lead.avatarColor||'#3d7eff'" style="width:22px;height:22px;font-size:8px">{{o.lead.initials}}</span>
                  <span style="font-size:12px">{{o.lead.name}}</span>
                </div>
              </td>
              <td><app-stage-badge [status]="o.status" [stagePercent]="o.stagePercent"></app-stage-badge></td>
              <td style="font-weight:700;color:#d97706;text-align:right">{{o.value | currency:'GBP':'symbol':'1.0-0'}}</td>
              <td>
                <div class="progress-wrap">
                  <div class="progress-track"><div class="progress-fill" [style.width.%]="o.stagePercent" style="background:#2563eb"></div></div>
                  <span style="font-size:10px;color:#64748b">{{o.stagePercent}}%</span>
                </div>
              </td>
              <td><a class="btn btn-ghost btn-sm" [routerLink]="['/opportunities',o.id]" (click)="$event.stopPropagation()">Open →</a></td>
            </tr>
            <tr *ngIf="!filteredRows().length">
              <td colspan="8" class="empty">{{loading() ? 'Loading…' : 'No commissions match the current filters.'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="filteredRows().length" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </ng-container>

  <!-- New Opportunity Drawer Overlay -->
  <div class="drawer-overlay" *ngIf="showDrawer()" (click)="closeDrawer()"></div>

  <!-- New Opportunity Drawer -->
  <div class="drawer" [class.compact]="!drawerExpanded()" [class.expanded]="drawerExpanded()" *ngIf="showDrawer()">
    <div class="drawer-header">
      <div>
        <div class="drawer-title">New Opportunity</div>
        <div class="drawer-sub">Create a new commission – SRP will be auto-generated</div>
      </div>
      <div class="drawer-btns">
        <button class="dic" (click)="drawerExpanded.set(!drawerExpanded())" [title]="drawerExpanded() ? 'Compact view' : 'Expand'">
          <span *ngIf="!drawerExpanded()" style="font-size:13px">↗</span>
          <span *ngIf="drawerExpanded()" style="font-size:13px">↙</span>
        </button>
        <button class="dic" (click)="closeDrawer()" title="Close">✕</button>
      </div>
    </div>

    <div class="drawer-body" [formGroup]="createForm">

      <!-- Row 1: Commission Number + Status -->
      <div class="form-row two">
        <div class="fg">
          <label class="flbl">Commission Number</label>
          <input class="finp" [value]="nextCommNum()" readonly tabindex="-1">
        </div>
        <div class="fg">
          <label class="flbl">Status</label>
          <select class="finp" formControlName="status">
            <option value="Lead">Lead</option>
            <option value="Probable">Probable</option>
            <option value="StrongProbable">Strong Probable</option>
            <option value="Contracted">Contracted</option>
            <option value="WorkStarted">Work Started</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <!-- Row 2: Commission Name -->
      <div class="form-row one">
        <div class="fg">
          <label class="flbl">Commission Name <span style="color:#ef4444">*</span></label>
          <input class="finp" formControlName="name" placeholder="e.g. City Centre Office Refurbishment" autocomplete="off">
          <span class="err-txt" *ngIf="createForm.get('name')?.invalid && createForm.get('name')?.touched">Commission name is required.</span>
        </div>
      </div>

      <!-- Row 3: Client + Lead (+ Value if expanded) -->
      <div class="form-row" [class.two]="!drawerExpanded()" [class.three]="drawerExpanded()">
        <div class="fg">
          <label class="flbl">Client <span style="color:#ef4444">*</span></label>
          <select class="finp" formControlName="clientName">
            <option value="">Select a client…</option>
            <option *ngFor="let c of uniqueClients()" [value]="c">{{c}}</option>
          </select>
          <span class="err-txt" *ngIf="createForm.get('clientName')?.invalid && createForm.get('clientName')?.touched">Client is required.</span>
        </div>
        <div class="fg">
          <label class="flbl">Commission Lead</label>
          <select class="finp" formControlName="leadId">
            <option value="">Select a lead…</option>
            <option *ngFor="let u of leadUsers()" [value]="u.id">{{u.name}}</option>
          </select>
        </div>
        <div class="fg" *ngIf="drawerExpanded()">
          <label class="flbl">Estimated Value (£)</label>
          <input class="finp" type="number" formControlName="value" placeholder="0" min="0">
        </div>
      </div>

      <!-- Value row when compact -->
      <div class="form-row one" *ngIf="!drawerExpanded()">
        <div class="fg">
          <label class="flbl">Estimated Value (£)</label>
          <input class="finp" type="number" formControlName="value" placeholder="0" min="0">
        </div>
      </div>

      <!-- Services Required -->
      <div class="fg" style="margin-bottom:14px">
        <label class="flbl">Services Required</label>
        <div class="svc-grid">
          <label class="svc-item" *ngFor="let s of SERVICE_LIST" [class.on]="selectedServices().has(s)" (click)="toggleService(s)">
            <input type="checkbox" [checked]="selectedServices().has(s)" (click)="$event.stopPropagation()">
            {{s}}
          </label>
        </div>
      </div>

      <!-- Initial Notes -->
      <div class="fg">
        <label class="flbl">Initial Notes</label>
        <textarea class="finp" formControlName="notes" placeholder="Brief description of the opportunity…" rows="3" style="resize:vertical;min-height:70px"></textarea>
      </div>

      <div *ngIf="createErr()" class="err-txt" style="margin-top:10px;font-size:12px">⚠ {{createErr()}}</div>
    </div>

    <div class="drawer-footer">
      <button class="btn btn-primary" [disabled]="createForm.invalid || saving()" (click)="submitCreate()">
        {{saving() ? 'Creating…' : 'Create Opportunity'}}
      </button>
      <button class="btn btn-ghost" (click)="closeDrawer()">Cancel</button>
    </div>
  </div>

</div>
  `,
})
export class OpportunitiesListComponent implements OnInit, OnDestroy {
  private readonly svc = inject(OpportunitiesService);
  private readonly api = inject(ApiService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  // Form controls (for template binding)
  readonly searchCtrl = this.fb.control('');
  readonly statusCtrl = this.fb.control('');
  readonly leadCtrl   = this.fb.control('');

  // Mirror as signals so computed() picks up changes (OnPush-safe)
  private readonly _search = signal('');
  private readonly _status = signal('');
  private readonly _lead   = signal('');

  readonly view     = signal<'list'|'board'>('board');
  readonly page     = signal(1);
  readonly pageSize = signal(20);
  readonly _sortField = signal('createdAt');
  readonly _sortDir   = signal<'asc'|'desc'>('desc');

  readonly rows    = this.svc.rows;
  readonly loading = this.svc.loading;
  readonly statuses: OppStatus[] = ['Lead','Probable','StrongProbable','Contracted','WorkStarted','Completed'];

  // Stat-strip values (from all loaded rows, unfiltered)
  readonly totalPipeline   = computed(() => this.rows().reduce((s,o) => s + (+o.value||0), 0));
  readonly contractedCount = computed(() => this.rows().filter(o => o.status==='Contracted' || o.status==='WorkStarted').length);
  readonly completedCount  = computed(() => this.rows().filter(o => o.status==='Completed').length);

  // Unique lead names for the dropdown
  readonly uniqueLeads = computed(() => {
    const names = this.rows().map((o:any) => o.lead?.name).filter(Boolean) as string[];
    return [...new Set(names)].sort();
  });

  // Client-side filtered rows
  readonly filteredRows = computed(() => {
    const q      = this._search().toLowerCase().trim();
    const lead   = this._lead();
    const status = this._status();
    return this.rows().filter((o:any) => {
      if (q && !`${o.name} ${o.clientName} ${o.commNum}`.toLowerCase().includes(q)) return false;
      if (lead   && o.lead?.name !== lead)   return false;
      if (status && o.status     !== status) return false;
      return true;
    });
  });

  // Paginated rows for list view
  readonly pagedRows = computed(() => {
    const start = (this.page() - 1) * this.pageSize();
    return this.filteredRows().slice(start, start + this.pageSize());
  });

  // Board columns — when status filter is active, show only that column
  readonly visibleCols = computed(() => {
    const s = this._status();
    return s ? BOARD_COLS.filter(c => c.status === s) : BOARD_COLS;
  });

  // ── New Opportunity Drawer ──────────────────────────────────────
  readonly showDrawer      = signal(false);
  readonly drawerExpanded  = signal(false);
  readonly saving          = signal(false);
  readonly createErr       = signal('');
  readonly leadUsers       = signal<any[]>([]);
  readonly selectedServices = signal<Set<string>>(new Set());

  readonly SERVICE_LIST = [
    'Architecture','Structural Engineering','MEP Engineering','Project Management',
    'Cost Consultancy','Planning Consultancy','Interior Design','Landscape Architecture',
  ];

  readonly createForm = this.fb.group({
    name:       ['', Validators.required],
    clientName: ['', Validators.required],
    leadId:     [''],
    status:     ['Lead', Validators.required],
    value:      [0],
    notes:      [''],
  });

  // Unique client names derived from already-loaded rows
  readonly uniqueClients = computed(() => {
    const names = this.rows().map((o:any) => o.clientName).filter(Boolean) as string[];
    return [...new Set(names)].sort();
  });

  // Next commNum derived from loaded rows (same logic as backend)
  readonly nextCommNum = computed(() => {
    const r = this.rows();
    if (!r.length) return 'PC-15300';
    const max = Math.max(...r.map((o:any) => {
      const m = o.commNum?.match(/PC-(\d+)/);
      return m ? parseInt(m[1]) : 0;
    }));
    return 'PC-' + (max + 1);
  });

  openDrawer() {
    this.createForm.reset({ name:'', clientName:'', leadId:'', status:'Lead', value:0, notes:'' });
    this.selectedServices.set(new Set());
    this.createErr.set('');
    this.drawerExpanded.set(false);
    this.showDrawer.set(true);
  }

  closeDrawer() { this.showDrawer.set(false); }

  toggleService(s: string) {
    const curr = new Set(this.selectedServices());
    curr.has(s) ? curr.delete(s) : curr.add(s);
    this.selectedServices.set(curr);
  }

  submitCreate() {
    this.createForm.markAllAsTouched();
    if (this.createForm.invalid) return;
    this.saving.set(true);
    this.createErr.set('');
    const body = {
      ...this.createForm.value,
      value: Number(this.createForm.value.value) || 0,
      services: [...this.selectedServices()],
      leadId: this.createForm.value.leadId || null,
    };
    this.api.post<any>('/v1/opportunities', body).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.saving.set(false);
        this.closeDrawer();
        this.svc.findAll({ pageSize:500, sortBy:'createdAt', sortDir:'desc' })
          .pipe(takeUntil(this.destroy$)).subscribe();
      },
      error: (e: any) => {
        this.saving.set(false);
        this.createErr.set(e?.message || 'Failed to create opportunity. Please try again.');
      },
    });
  }
  // ─────────────────────────────────────────────────────────────────

  ngOnInit() {
    // Load all data once for board view; high pageSize to capture all records
    this.svc.findAll({ pageSize:500, sortBy:'createdAt', sortDir:'desc' })
      .pipe(takeUntil(this.destroy$)).subscribe();

    // Load users for lead dropdown
    this.api.getList<any>('/v1/users', { pageSize:100, status:'Active' })
      .pipe(takeUntil(this.destroy$))
      .subscribe(r => this.leadUsers.set(r.data || []));

    // Bridge FormControls → signals so computed() reacts
    this.searchCtrl.valueChanges.pipe(debounceTime(200), takeUntil(this.destroy$))
      .subscribe(v => { this._search.set(v||''); this.page.set(1); });
    this.statusCtrl.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(v => { this._status.set(v||''); this.page.set(1); });
    this.leadCtrl.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(v => { this._lead.set(v||''); this.page.set(1); });
  }

  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  onPage(e: {page:number;pageSize:number}) { this.page.set(e.page); this.pageSize.set(e.pageSize); }
  sortBy(col: string) {
    this._sortDir.set(this._sortField()===col && this._sortDir()==='asc' ? 'desc' : 'asc');
    this._sortField.set(col);
    this.page.set(1);
  }
  goto(id: string) { this.router.navigate(['/opportunities', id]); }
  trackById(_: number, o: any) { return o.id; }
  colItems(status: string) { return this.filteredRows().filter((o:any) => o.status === status); }
  colTotal(status: string) { return this.colItems(status).reduce((s,o:any) => s + (+o.value||0), 0); }
  statusLabel(s: string) {
    return ({Lead:'Lead',Probable:'Probable',StrongProbable:'Strong Probable',Contracted:'Contracted',WorkStarted:'Work Started',Completed:'Completed'} as any)[s] ?? s;
  }
  fmtK(val: number): string {
    if (!val) return '£0';
    if (val >= 1_000_000) return '£' + (val/1_000_000).toFixed(1).replace(/\.0$/,'') + 'M';
    if (val >= 1_000)     return '£' + Math.round(val/1_000) + 'K';
    return '£' + Math.round(val);
  }
  srpBadge(s: string) { return ({Approved:'green',SentForApproval:'amber',Draft:'blue',Rejected:'red'} as any)[s]||'gray'; }
}


// ================================================================
// OPPORTUNITY DETAIL COMPONENT
// ================================================================
@Component({
  selector: 'app-opportunity-detail',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, StageBadgeComponent, VersionHistoryComponent],
  styles: [ENT_STYLES + `
    .detail-shell{display:flex;gap:16px;align-items:flex-start;}
    .detail-main{flex:1;min-width:0;}
    .detail-sidebar{width:260px;flex-shrink:0;}
    .detail-card{background:#fff;border:1px solid #dde2ee;border-radius:8px;padding:16px;margin-bottom:12px;}
    .detail-card-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#8a9bb8;margin-bottom:10px;}
    .detail-row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #f0f2f7;font-size:12.5px;}
    .detail-row:last-child{border-bottom:none;}
    .detail-key{color:#8a9bb8;font-weight:500;}
    .detail-val{color:#1a2240;font-weight:600;text-align:right;}
    .tabs{display:flex;gap:0;border-bottom:1px solid #dde2ee;margin-bottom:14px;}
    .tab{padding:8px 16px;font-size:12px;color:#8a9bb8;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;font-weight:500;transition:all .12s;background:none;border-top:none;border-left:none;border-right:none;font-family:inherit;}
    .tab:hover{color:#1a2240;}
    .tab.active{color:#2563eb;border-bottom-color:#2563eb;font-weight:700;}
    .tab-panel{background:#fff;border:1px solid #dde2ee;border-radius:8px;padding:16px;}
  `],
  template: `
  <div class="page-shell" *ngIf="opp(); else loading">
    <div class="toolbar">
      <div style="display:flex;align-items:center;gap:10px">
        <a routerLink="/opportunities" class="btn btn-ghost btn-sm">← Back</a>
        <div>
          <span class="chip">{{ opp()!.commNum }}</span>
          <span style="font-size:18px;font-weight:700;color:#1a2240;margin-left:8px">{{ opp()!.name }}</span>
        </div>
      </div>
      <div class="toolbar-actions">
        <app-stage-badge [status]="opp()!.status" [stagePercent]="opp()!.stagePercent"></app-stage-badge>
        <a class="btn btn-outline btn-sm" [routerLink]="['/opportunities', opp()!.id, 'srp']">📋 SRP</a>
        <a class="btn btn-outline btn-sm" [routerLink]="['/opportunities', opp()!.id, 'fee-calculator']">⊟ Fee Calculator</a>
      </div>
    </div>

    <div class="detail-shell">
      <div class="detail-main">
        <!-- Tabs -->
        <div class="tabs" role="tablist">
          @for (t of tabs; track t.key) {
            <button class="tab" [class.active]="activeTab()===t.key" (click)="activeTab.set(t.key)"
              role="tab" [attr.aria-selected]="activeTab()===t.key">{{ t.label }}</button>
          }
        </div>

        <!-- Overview tab -->
        <div class="tab-panel" *ngIf="activeTab()==='overview'" role="tabpanel">
          <div class="detail-row"><span class="detail-key">Client</span><span class="detail-val">{{ opp()!.clientName }}</span></div>
          <div class="detail-row"><span class="detail-key">Lead</span><span class="detail-val">{{ opp()!.lead?.name || '—' }}</span></div>
          <div class="detail-row"><span class="detail-key">Sector</span><span class="detail-val">{{ opp()!.sector || '—' }}</span></div>
          <div class="detail-row"><span class="detail-key">Region</span><span class="detail-val">{{ opp()!.region || '—' }}</span></div>
          <div class="detail-row"><span class="detail-key">Value</span><span class="detail-val value">{{ opp()!.value | currency:'GBP':'symbol':'1.0-0' }}</span></div>
          <div class="detail-row"><span class="detail-key">SRP Status</span><span class="detail-val"><span class="badge" [class]="'badge-'+srpBadge(opp()!.srpStatus)">{{ opp()!.srpStatus }}</span></span></div>
          <div class="detail-row"><span class="detail-key">Services</span><span class="detail-val">{{ opp()!.services?.join(', ') }}</span></div>
        </div>

        <!-- SRP tab -->
        <div class="tab-panel" *ngIf="activeTab()==='srp'" role="tabpanel">
          <div class="empty" *ngIf="!srp()">Loading SRP data…</div>
          <div *ngIf="srp()">
            <div class="detail-row"><span class="detail-key">Status</span><span class="detail-val"><span class="badge" [class]="'badge-'+srpBadge(srp()!.status)">{{ srp()!.status }}</span></span></div>
            <div class="detail-row"><span class="detail-key">Client Contact</span><span class="detail-val">{{ srp()!.clientContactName || '—' }}</span></div>
            <div class="detail-row"><span class="detail-key">Commission Lead</span><span class="detail-val">{{ srp()!.commissionLead || '—' }}</span></div>
            <div class="detail-row"><span class="detail-key">Contract Type</span><span class="detail-val text-muted">{{ srp()!.mainContractType || '—' }}</span></div>
            <div class="detail-row" *ngIf="srp()!.approvedBy"><span class="detail-key">Approved By</span><span class="detail-val">{{ srp()!.approvedBy }}</span></div>
            <div style="margin-top:12px;display:flex;gap:6px" *ngIf="srp()!.status==='Draft'">
              <button class="btn btn-primary btn-sm" (click)="sendSrpForApproval()">Send for Approval</button>
            </div>
            <div style="margin-top:12px;display:flex;gap:6px" *ngIf="srp()!.status==='SentForApproval'">
              <button class="btn btn-primary btn-sm" (click)="approveSrp()">Approve SRP</button>
              <button class="btn btn-danger btn-sm" (click)="rejectSrp()">Reject</button>
            </div>
          </div>
        </div>

        <!-- Fee Calculator tab -->
        <div class="tab-panel" *ngIf="activeTab()==='fee'" role="tabpanel">
          <div class="empty" *ngIf="!fc()">Loading Fee Calculator…</div>
          <div *ngIf="fc()">
            <div class="detail-row"><span class="detail-key">Construction Value</span><span class="detail-val value">{{ fc()!.constructionValue | currency:'GBP':'symbol':'1.0-0' }}</span></div>
            <div class="detail-row"><span class="detail-key">Procurement Route</span><span class="detail-val">{{ fc()!.procRoute }}</span></div>
            <div class="detail-row"><span class="detail-key">BIM</span><span class="detail-val">{{ fc()!.bim }}</span></div>
            <div class="detail-row"><span class="detail-key">Total Time Charges</span><span class="detail-val">{{ fc()!.totalTimeCharges | currency:'GBP':'symbol':'1.0-0' }}</span></div>
            <div class="detail-row"><span class="detail-key">External Consultancy</span><span class="detail-val">{{ fc()!.totalExtConsultancy | currency:'GBP':'symbol':'1.0-0' }}</span></div>
            <div class="detail-row"><span class="detail-key">PSC Fee</span><span class="detail-val">{{ fc()!.pscFee | currency:'GBP':'symbol':'1.0-0' }}</span></div>
            <div class="detail-row"><span class="detail-key">Grand Total</span><span class="detail-val value" style="font-size:15px">{{ fc()!.grandTotal | currency:'GBP':'symbol':'1.0-0' }}</span></div>
          </div>
        </div>

        <!-- CE tab -->
        <div class="tab-panel" *ngIf="activeTab()==='ce'" role="tabpanel">
          <div class="empty">CE Events — {{ opp()!._count?.ceEvents || 0 }} events. Navigate to CE module for full management.</div>
        </div>

        <!-- Version History tab -->
        <div class="tab-panel" *ngIf="activeTab()==='versions'" role="tabpanel">
          <app-version-history [versions]="versions()" [loading]="versionsLoading()"></app-version-history>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="detail-sidebar">
        <div class="detail-card">
          <div class="detail-card-title">Commission Details</div>
          <div class="detail-row"><span class="detail-key">Status</span><span class="detail-val">{{ opp()!.status }}</span></div>
          <div class="detail-row"><span class="detail-key">Stage</span><span class="detail-val">{{ opp()!.stagePercent }}%</span></div>
          <div class="detail-row"><span class="detail-key">Created</span><span class="detail-val">{{ opp()!.createdAt | date:'dd MMM yyyy' }}</span></div>
          <div class="detail-row"><span class="detail-key">CEs</span><span class="detail-val">{{ opp()!._count?.ceEvents || 0 }}</span></div>
          <div class="detail-row"><span class="detail-key">Surveys</span><span class="detail-val">{{ opp()!._count?.surveys || 0 }}</span></div>
        </div>
      </div>
    </div>
  </div>
  <ng-template #loading><div class="empty">Loading commission…</div></ng-template>
  `,
})
export class OpportunityDetailComponent implements OnInit {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);

  readonly opp = signal<Opportunity|null>(null);
  readonly srp = signal<any>(null);
  readonly fc = signal<any>(null);
  readonly versions = signal<any[]>([]);
  readonly versionsLoading = signal(false);
  readonly activeTab = signal('overview');
  readonly tabs = [
    { key:'overview', label:'Overview' }, { key:'srp', label:'SRP' },
    { key:'fee', label:'Fee Calculator' }, { key:'ce', label:'Comp. Events' },
    { key:'versions', label:'Version History' },
  ];

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.get<any>(`/v1/opportunities/${id}`).subscribe(o => {
      this.opp.set(o);
      this.api.get<any>(`/v1/srp/${id}`).subscribe(s => this.srp.set(s), () => {});
      this.api.get<any>(`/v1/fee-calculator/${id}`).subscribe(f => this.fc.set(f), () => {});
    });
    this.versionsLoading.set(true);
    this.api.get<any[]>(`/v1/opportunities/${id}/versions`).subscribe(v => { this.versions.set(v); this.versionsLoading.set(false); }, () => this.versionsLoading.set(false));
  }

  srpBadge(s: string) { return { Approved:'green', SentForApproval:'amber', Draft:'blue', Rejected:'red' }[s] || 'gray'; }

  sendSrpForApproval() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.post(`/v1/srp/${id}/send-approval`, {}).subscribe(() => this.srp.update(s => ({...s, status:'SentForApproval'})));
  }
  approveSrp() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.post(`/v1/srp/${id}/approve`, { comments:'Approved via dashboard' }).subscribe(() => this.srp.update(s => ({...s, status:'Approved'})));
  }
  rejectSrp() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.post(`/v1/srp/${id}/reject`, { comments:'Rejected via dashboard' }).subscribe(() => this.srp.update(s => ({...s, status:'Rejected'})));
  }
}

// ================================================================
// BASE LIST COMPONENT (inherited pattern for all list views)
// ================================================================
// Mixin-style base pattern — each list component follows same structure
@Directive()
abstract class BaseListComponent implements OnInit, OnDestroy {
  protected readonly api = inject(ApiService);
  protected readonly destroy$ = new Subject<void>();

  readonly rows = signal<any[]>([]);
  readonly total = signal(0);
  readonly loading = signal(false);
  readonly page = signal(1);
  readonly pageSize = signal(20);
  readonly search = signal('');
  readonly chips = signal<{ field:string; value:string; label:string; }[]>([]);

  abstract readonly apiPath: string;
  abstract extraParams(): Record<string,any>;

  ngOnInit() { this.load(); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  load() {
    this.loading.set(true);
    const params = { page:this.page(), pageSize:this.pageSize(), q:this.search() || undefined, ...this.extraParams() };
    this.api.getList<any>(this.apiPath, params).pipe(takeUntil(this.destroy$))
      .subscribe({ next:r => { this.rows.set(r.data); this.total.set(r.meta.total); this.loading.set(false); }, error:() => this.loading.set(false) });
  }

  onSearch(q: string) { this.search.set(q); this.page.set(1); this.load(); }
  onPage(e: {page:number;pageSize:number}) { this.page.set(e.page); this.pageSize.set(e.pageSize); this.load(); }
}

// ================================================================
// CLIENT INVOICES
// ================================================================
@Component({
  selector: 'app-client-invoices',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent],
  styles: [ENT_STYLES],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Client Invoices</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val green">{{ totalPaid | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Total Paid</div></div>
      <div class="stat"><div class="stat-val amber">{{ totalPending | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Outstanding</div></div>
      <div class="stat"><div class="stat-val">{{ total() }}</div><div class="stat-label">Total Invoices</div></div>
    </div>
    <app-filter-bar placeholder="Search invoice ref, commission, client…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr>
            <th>Invoice Ref</th><th>Commission</th><th>Client</th><th>Milestone</th>
            <th>Net Amount</th><th>Total inc. VAT</th><th>Due Date</th><th>Status</th>
          </tr></thead>
          <tbody>
            <tr *ngFor="let inv of rows(); trackBy: trackById">
              <td><span class="chip">{{ inv.invoiceRef }}</span></td>
              <td><span class="chip">{{ inv.schedule?.opportunity?.commNum }}</span></td>
              <td class="text-muted">{{ inv.schedule?.opportunity?.clientName }}</td>
              <td class="text-muted">{{ inv.schedule?.milestone }}</td>
              <td class="value">{{ inv.netAmount | currency:'GBP':'symbol':'1.0-0' }}</td>
              <td>{{ inv.totalAmount | currency:'GBP':'symbol':'1.0-0' }}</td>
              <td class="text-muted">{{ inv.issuedAt | date:'dd MMM yyyy' }}</td>
              <td><span class="badge" [class]="'badge-'+invBadge(inv.status)">{{ inv.status }}</span></td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="8" class="empty">{{ loading() ? 'Loading…' : 'No invoices found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class ClientInvoicesComponent extends BaseListComponent {
  override readonly apiPath = '/v1/invoices/client';
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
  get totalPaid() { return this.rows().filter(r=>r.status==='Paid').reduce((a:number,r:any)=>a+(+r.netAmount||0),0); }
  get totalPending() { return this.rows().filter(r=>r.status==='Pending').reduce((a:number,r:any)=>a+(+r.netAmount||0),0); }
  invBadge(s:string) { return {Paid:'green',Pending:'amber',Overdue:'red',Cancelled:'gray',Draft:'blue'}[s]||'gray'; }
}

// ================================================================
// SUPPLIER INVOICES
// ================================================================
@Component({
  selector: 'app-supplier-invoices',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent],
  styles: [ENT_STYLES],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Supplier Invoices</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ totalSupplierValue | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Total Supplier</div></div>
      <div class="stat"><div class="stat-val green">{{ totalPaid | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Paid</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingCount }}</div><div class="stat-label">Pending</div></div>
      <div class="stat"><div class="stat-val" style="color:#0369a1">{{ awaitingCount }}</div><div class="stat-label">Awaiting Receipt</div></div>
    </div>
    <app-filter-bar placeholder="Search supplier, ref, commission…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>Invoice Ref</th><th>Supplier</th><th>Commission</th><th>Net Amount</th><th>Total</th><th>Received</th><th>Status</th></tr></thead>
          <tbody>
            <tr *ngFor="let si of rows(); trackBy: trackById">
              <td><span class="chip">{{ si.invoiceRef }}</span></td>
              <td style="font-weight:600">{{ si.supplierName }}</td>
              <td><span class="chip">{{ si.schedule?.opportunity?.commNum }}</span></td>
              <td class="value">{{ si.netAmount | currency:'GBP':'symbol':'1.0-0' }}</td>
              <td>{{ si.totalAmount | currency:'GBP':'symbol':'1.0-0' }}</td>
              <td class="text-muted">{{ si.receivedAt | date:'dd MMM yyyy' }}</td>
              <td><span class="badge" [class]="'badge-'+invBadge(si.status)">{{ si.status }}</span></td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading…' : 'No supplier invoices found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class SupplierInvoicesComponent extends BaseListComponent {
  override readonly apiPath = '/v1/invoices/supplier';
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
  get totalSupplierValue() { return this.rows().reduce((a:number,r:any)=>a+(+r.netAmount||0),0); }
  get totalPaid() { return this.rows().filter((r:any)=>r.status==='Paid').reduce((a:number,r:any)=>a+(+r.netAmount||0),0); }
  get pendingCount() { return this.rows().filter((r:any)=>r.status==='Pending').length; }
  get awaitingCount() { return this.rows().filter((r:any)=>r.status==='AwaitingReceipt'||r.status==='Awaiting Receipt').length; }
  invBadge(s:string) { return {Paid:'green',Pending:'amber',Overdue:'red',Cancelled:'gray'}[s]||'gray'; }
}

// ================================================================
// CE LIST
// ================================================================
@Component({
  selector: 'app-ce-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent],
  styles: [ENT_STYLES],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Compensation Events</h1><div class="toolbar-actions"><button class="btn btn-primary btn-sm" (click)="newCe()">+ New CE</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val">{{ total() }}</div><div class="stat-label">Total CEs</div></div>
      <div class="stat"><div class="stat-val red">{{ openCount }}</div><div class="stat-label">Open</div></div>
      <div class="stat"><div class="stat-val green">{{ approvedCount }}</div><div class="stat-label">Approved</div></div>
      <div class="stat"><div class="stat-val amber">{{ totalValue | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Total Value</div></div>
    </div>
    <app-filter-bar placeholder="Search CE ref, commission, description…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>CE Ref</th><th>Commission</th><th>Client</th><th>Description</th><th>Stage</th><th>Value</th><th>Raised</th></tr></thead>
          <tbody>
            <tr *ngFor="let ce of rows(); trackBy: trackById">
              <td><span class="chip">{{ ce.ceRef }}</span></td>
              <td><span class="chip">{{ ce.opportunity?.commNum }}</span></td>
              <td class="text-muted">{{ ce.opportunity?.clientName }}</td>
              <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ ce.description }}</td>
              <td><span class="badge" [class]="'badge-'+ceBadge(ce.stage)">{{ ce.stage }}</span></td>
              <td class="value">{{ ce.value | currency:'GBP':'symbol':'1.0-0' }}</td>
              <td class="text-muted">{{ ce.raisedAt | date:'dd MMM yyyy' }}</td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading…' : 'No compensation events found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class CeListComponent extends BaseListComponent {
  override readonly apiPath = '/v1/ce';
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
  ceBadge(s:string) { return {Approved:'green',Rejected:'red',Assessment:'amber',Submitted:'blue',Reviewed:'purple'}[s]||'gray'; }
  get openCount() { return this.rows().filter(r=>r.stage!=='Approved'&&r.stage!=='Rejected').length; }
  get approvedCount() { return this.rows().filter(r=>r.stage==='Approved').length; }
  get totalValue() { return this.rows().reduce((a,r)=>a+(+r.value||0),0); }
  newCe() { alert('Select a commission first to raise a CE'); }
}

// ================================================================
// PROJECT PI LIST
// ================================================================
@Component({
  selector: 'app-project-pi-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent],
  styles: [ENT_STYLES],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Project PI Register</h1></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ total() }}</div><div class="stat-label">Total PIs</div></div>
      <div class="stat"><div class="stat-val green">{{ approvedPiCount }}</div><div class="stat-label">Approved</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingPiCount }}</div><div class="stat-label">Pending</div></div>
      <div class="stat"><div class="stat-val">{{ notStartedCount }}</div><div class="stat-label">Not Started</div></div>
    </div>
    <app-filter-bar placeholder="Search commission, client, lead…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>Commission</th><th>Name</th><th>Client</th><th>Lead</th><th>PI Status</th><th>Version</th><th>Approver</th></tr></thead>
          <tbody>
            <tr *ngFor="let pi of rows(); trackBy: trackById">
              <td><span class="chip">{{ pi.opportunity?.commNum }}</span></td>
              <td style="font-weight:600;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ pi.opportunity?.name }}</td>
              <td class="text-muted">{{ pi.opportunity?.clientName }}</td>
              <td class="text-muted">{{ pi.opportunity?.lead?.name }}</td>
              <td><span class="badge" [class]="'badge-'+piBadge(pi.status)">{{ pi.status }}</span></td>
              <td>v{{ pi.version }}</td>
              <td class="text-muted">{{ pi.approver || '—' }}</td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading…' : 'No PIs found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class ProjectPiListComponent extends BaseListComponent {
  override readonly apiPath = '/v1/project-pi';
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
  get approvedPiCount() { return this.rows().filter((r:any)=>r.status==='Approved').length; }
  get pendingPiCount() { return this.rows().filter((r:any)=>r.status==='Pending Approval').length; }
  get notStartedCount() { return this.rows().filter((r:any)=>r.status==='Not Started').length; }
  piBadge(s:string) { return {Approved:'green','Pending Approval':'amber','Not Started':'gray'}[s]||'gray'; }
}

// ================================================================
// SURVEYS LIST
// ================================================================
@Component({
  selector: 'app-surveys-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent],
  styles: [ENT_STYLES],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Survey Management</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export All</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ total() }}</div><div class="stat-label">Total Surveys</div></div>
      <div class="stat"><div class="stat-val green">{{ submittedCount }}</div><div class="stat-label">Submitted</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingSurveyCount }}</div><div class="stat-label">Pending</div></div>
      <div class="stat"><div class="stat-val" style="color:#0369a1">{{ avgSatisfaction }}</div><div class="stat-label">Avg Satisfaction</div></div>
    </div>
    <app-filter-bar placeholder="Search commission, client, type…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>Type</th><th>Commission</th><th>Client</th><th>Sent</th><th>Deadline</th><th>Submitted</th><th>Satisfaction</th><th>NPS</th></tr></thead>
          <tbody>
            <tr *ngFor="let sv of rows(); trackBy: trackById">
              <td><span class="badge" [class]="sv.type==='client'?'badge-blue':'badge-purple'">{{ sv.type }}</span></td>
              <td><span class="chip">{{ sv.opportunity?.commNum }}</span></td>
              <td class="text-muted">{{ sv.opportunity?.clientName }}</td>
              <td class="text-muted">{{ sv.sentAt | date:'dd MMM yyyy' }}</td>
              <td class="text-muted">{{ sv.deadline | date:'dd MMM yyyy' }}</td>
              <td><span class="badge" [class]="sv.submittedAt?'badge-green':'badge-amber'">{{ sv.submittedAt ? 'Yes' : 'Pending' }}</span></td>
              <td>{{ sv.satisfaction ? sv.satisfaction+'/5' : '—' }}</td>
              <td style="font-weight:600;color:#2563eb">{{ sv.nps ?? '—' }}</td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="8" class="empty">{{ loading() ? 'Loading…' : 'No surveys found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class SurveysListComponent extends BaseListComponent {
  override readonly apiPath = '/v1/surveys';
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
  get submittedCount() { return this.rows().filter((r:any)=>r.submittedAt).length; }
  get pendingSurveyCount() { return this.rows().filter((r:any)=>!r.submittedAt).length; }
  get avgSatisfaction() { const s=this.rows().filter((r:any)=>r.satisfaction); return s.length?+(s.reduce((a:number,r:any)=>a+r.satisfaction,0)/s.length).toFixed(1):0; }
}

// ================================================================
// SUPPLIER LIST
// ================================================================
@Component({
  selector: 'app-supplier-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent],
  styles: [ENT_STYLES],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Supplier Portal</h1><div class="toolbar-actions"><button class="btn btn-primary btn-sm">+ Add Supplier</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ total() }}</div><div class="stat-label">Total Suppliers</div></div>
      <div class="stat"><div class="stat-val green">{{ approvedSuppCount }}</div><div class="stat-label">Approved</div></div>
      <div class="stat"><div class="stat-val red">{{ expiredSuppCount }}</div><div class="stat-label">Expired</div></div>
      <div class="stat"><div class="stat-val amber">{{ underReviewCount }}</div><div class="stat-label">Under Review</div></div>
    </div>
    <app-filter-bar placeholder="Search supplier, type, status…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>Supplier</th><th>Type</th><th>Contact</th><th>Status</th><th>Certificate Expiry</th><th>Tags</th></tr></thead>
          <tbody>
            <tr *ngFor="let s of rows(); trackBy: trackById">
              <td>
                <div style="display:flex;align-items:center;gap:8px">
                  <span class="avatar" style="width:28px;height:28px;background:#2563eb;color:#fff;font-size:11px;font-weight:700">{{ s.name.charAt(0) }}</span>
                  <div><div style="font-weight:600">{{ s.name }}</div><div class="text-muted">{{ s.email }}</div></div>
                </div>
              </td>
              <td class="text-muted">{{ s.type }}</td>
              <td class="text-muted">{{ s.contact }}</td>
              <td><span class="badge" [class]="'badge-'+suppBadge(s.status)">{{ s.status }}</span></td>
              <td [style.color]="s.status==='Expired'?'#dc2626':'inherit'">{{ s.certExpiry | date:'dd MMM yyyy' }}</td>
              <td><span class="badge badge-gray" *ngFor="let t of s.tags" style="margin-right:3px;font-size:10px">{{ t }}</span></td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="6" class="empty">{{ loading() ? 'Loading…' : 'No suppliers found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class SupplierListComponent extends BaseListComponent {
  override readonly apiPath = '/v1/suppliers';
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
  get approvedSuppCount() { return this.rows().filter((r:any)=>r.status==='Approved').length; }
  get expiredSuppCount() { return this.rows().filter((r:any)=>r.status==='Expired').length; }
  get underReviewCount() { return this.rows().filter((r:any)=>r.status==='UnderReview').length; }
  suppBadge(s:string) { return {Approved:'green',Expired:'red',UnderReview:'amber',Suspended:'red'}[s]||'gray'; }
}

// ================================================================
// AUDIT LOG
// ================================================================
@Component({
  selector: 'app-audit-log',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent],
  styles: [ENT_STYLES + `.action-badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:10.5px;font-weight:700;} .create{background:#dcfce7;color:#166534;} .update{background:#dbeafe;color:#1d4ed8;} .approve{background:#ccfbf1;color:#0f766e;} .delete,.reject{background:#fee2e2;color:#991b1b;} .login,.logout{background:#f3e8ff;color:#6d28d9;} .export{background:#fef3c7;color:#92400e;} .system{background:#f1f5f9;color:#64748b;}`],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Audit Log</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val">{{ total() }}</div><div class="stat-label">Total Entries</div></div>
    </div>
    <app-filter-bar placeholder="Search user, module, description…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>Timestamp</th><th>User</th><th>Action</th><th>Module</th><th>Commission</th><th>Description</th></tr></thead>
          <tbody>
            <tr *ngFor="let e of rows(); trackBy: trackById">
              <td class="text-muted" style="white-space:nowrap">{{ e.createdAt | date:'dd MMM HH:mm' }}</td>
              <td>
                <div style="display:flex;align-items:center;gap:6px">
                  <span class="avatar" style="width:20px;height:20px;font-size:8px;background:#2563eb">{{ e.user?.initials || 'SY' }}</span>
                  <span style="font-size:12px">{{ e.user?.name || 'System' }}</span>
                </div>
              </td>
              <td><span class="action-badge" [class]="e.action.toLowerCase()">{{ e.action }}</span></td>
              <td class="text-muted">{{ e.entityType }}</td>
              <td>{{ e.opportunityId ? '✓' : '' }}</td>
              <td style="font-size:12px;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ e.description }}</td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="6" class="empty">{{ loading() ? 'Loading…' : 'No audit records found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class AuditLogComponent extends BaseListComponent {
  override readonly apiPath = '/v1/audit';
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
}

// ================================================================
// USERS LIST
// ================================================================
@Component({
  selector: 'app-users-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent],
  styles: [ENT_STYLES],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">User Management</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export</button><button class="btn btn-ghost btn-sm" (click)="syncUsers()">⟳ Sync Users</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val green">{{ activeCount }}</div><div class="stat-label">Active Users</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingCount }}</div><div class="stat-label">Pending Activation</div></div>
      <div class="stat"><div class="stat-val">{{ inactiveCount }}</div><div class="stat-label">Inactive</div></div>
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ total() }}</div><div class="stat-label">Total Users</div></div>
    </div>
    <app-filter-bar placeholder="Search name, email, role, region…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>User</th><th>Role(s)</th><th>Region</th><th>Business Unit</th><th>Status</th><th>Last Login</th><th></th></tr></thead>
          <tbody>
            <tr *ngFor="let u of rows(); trackBy: trackById">
              <td>
                <div style="display:flex;align-items:center;gap:8px">
                  <span class="avatar" [style.background]="u.avatarColor||'#3d7eff'" style="width:28px;height:28px;font-size:10px">{{ u.initials }}</span>
                  <div><div style="font-weight:600;font-size:12.5px">{{ u.name }}</div><div class="text-muted">{{ u.email }}</div></div>
                </div>
              </td>
              <td><span class="badge badge-blue" *ngFor="let ur of u.roles" style="margin-right:3px;font-size:10px">{{ ur.role.name }}</span></td>
              <td class="text-muted">{{ u.region }}</td>
              <td class="text-muted">{{ u.businessUnit }}</td>
              <td><span class="badge" [class]="userBadge(u.status)">{{ u.status }}</span></td>
              <td class="text-muted">{{ u.lastLoginAt | date:'dd MMM HH:mm' }}</td>
              <td>
                <button class="btn btn-ghost btn-sm" (click)="toggleStatus(u)">{{ u.status==='Active'?'Disable':'Enable' }}</button>
              </td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading…' : 'No users found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class UsersListComponent extends BaseListComponent {
  override readonly apiPath = '/v1/users';
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
  get activeCount() { return this.rows().filter(r=>r.status==='Active').length; }
  get pendingCount() { return this.rows().filter(r=>r.status==='Pending').length; }
  get inactiveCount() { return this.rows().filter(r=>r.status==='Inactive').length; }
  userBadge(s:string) { return {Active:'badge-green',Inactive:'badge-gray',Pending:'badge-amber'}[s]||'badge-gray'; }
  syncUsers() { this.api.post('/v1/users/sync',{}).subscribe(() => this.load()); }
  toggleStatus(u: any) {
    const newStatus = u.status==='Active'?'Inactive':'Active';
    this.api.patch(`/v1/users/${u.id}/status`,{status:newStatus}).subscribe(() => { u.status=newStatus; this.rows.set([...this.rows()]); });
  }
}

// ================================================================
// ROLES
// ================================================================
@Component({
  selector: 'app-roles',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent],
  styles: [ENT_STYLES + `.role-card{display:flex;align-items:center;gap:12px;padding:14px;background:#fff;border:1px solid #dde2ee;border-radius:8px;margin-bottom:8px;cursor:pointer;transition:border-color .12s;} .role-card:hover{border-color:#93c5fd;} .role-icon{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#fff;flex-shrink:0;}`],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Roles & Permissions</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">⎘ Clone</button><button class="btn btn-primary btn-sm" (click)="createRole()">+ Create Role</button></div></div>
    <app-filter-bar placeholder="Search roles…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div *ngFor="let r of rows(); trackBy: trackById" class="role-card" (click)="selectedRole.set(r)">
      <div class="role-icon" [style.background]="r.color||'#2563eb'">{{ r.icon || r.name.charAt(0) }}</div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:700;color:#1a2240">{{ r.name }}</div>
        <div class="text-muted">{{ r.description }}</div>
      </div>
      <div class="text-muted">{{ r._count?.users || 0 }} users</div>
      <span class="badge" [class]="r.isSystem?'badge-blue':r.isActive?'badge-green':'badge-gray'">{{ r.isSystem?'System':r.isActive?'Active':'Disabled' }}</span>
    </div>
    <div *ngIf="!rows().length" class="empty">{{ loading() ? 'Loading…' : 'No roles found.' }}</div>
  </div>
  `,
})
export class RolesComponent extends BaseListComponent {
  override readonly apiPath = '/v1/roles';
  readonly selectedRole = signal<any>(null);
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }
  createRole() { this.api.post('/v1/roles',{ name:'New Role',description:'',permissions:{} }).subscribe(() => this.load()); }
}

// ================================================================
// DELEGATIONS
// ================================================================
@Component({
  selector: 'app-delegation',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FilterBarComponent, PaginatorComponent, ReactiveFormsModule],
  styles: [ENT_STYLES + `.dlg-badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:10.5px;font-weight:700;} .full{background:#ede9fe;color:#5b21b6;} .workflow{background:#dbeafe;color:#1d4ed8;} .approvalonly{background:#dcfce7;color:#166534;} .readonly{background:#f1f5f9;color:#64748b;} .active-dlg{background:#dcfce7;color:#166534;} .pending-dlg{background:#fef3c7;color:#92400e;} .expired-dlg{background:#f1f5f9;color:#64748b;} .revoked-dlg{background:#fee2e2;color:#991b1b;}`],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Delegations</h1><div class="toolbar-actions"><button class="btn btn-primary btn-sm" (click)="showCreate.set(!showCreate())">{{ showCreate() ? 'Cancel' : '+ New Delegation' }}</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val green">{{ activeCount }}</div><div class="stat-label">Active</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingCount }}</div><div class="stat-label">Pending</div></div>
      <div class="stat"><div class="stat-val">{{ expiredCount }}</div><div class="stat-label">Expired</div></div>
    </div>

    <!-- Create form -->
    <div *ngIf="showCreate()" class="tbl-card" style="padding:16px;margin-bottom:14px">
      <div style="display:grid;grid-template-columns:repeat(3,1fr) auto;gap:10px;align-items:end" [formGroup]="createForm">
        <div><label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:4px">From User ID</label><input class="form-input" formControlName="fromUserId" placeholder="User UUID…"></div>
        <div><label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:4px">To User ID</label><input class="form-input" formControlName="toUserId" placeholder="User UUID…"></div>
        <div><label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:4px">Type</label>
          <select class="form-select" formControlName="type" style="width:100%"><option>Workflow</option><option>ApprovalOnly</option><option>Full</option><option>ReadOnly</option></select>
        </div>
        <button class="btn btn-primary" (click)="submitCreate()">Create</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr auto;gap:10px;margin-top:10px;align-items:end" [formGroup]="createForm">
        <div><label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:4px">Scope / Modules</label><input class="form-input" formControlName="scope" placeholder="e.g. CE Actions only"></div>
        <div><label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:4px">Start Date</label><input class="form-input" type="date" formControlName="startDate"></div>
        <div><label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:4px">End Date</label><input class="form-input" type="date" formControlName="endDate"></div>
      </div>
    </div>

    <app-filter-bar placeholder="Search name, scope, type…" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>From → To</th><th>Type</th><th>Scope</th><th>Start</th><th>End</th><th>Status</th><th></th></tr></thead>
          <tbody>
            <tr *ngFor="let d of rows(); trackBy: trackById">
              <td>
                <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap">
                  <span class="avatar" [style.background]="d.fromUser?.avatarColor||'#2563eb'" style="width:22px;height:22px;font-size:8px">{{ d.fromUser?.initials }}</span>
                  <span style="font-size:12px;font-weight:600">{{ d.fromUser?.name }}</span>
                  <span style="color:#94a3b8">→</span>
                  <span class="avatar" style="width:22px;height:22px;font-size:8px;background:#16a34a">{{ d.toUser?.initials }}</span>
                  <span style="font-size:12px;font-weight:600">{{ d.toUser?.name }}</span>
                </div>
              </td>
              <td><span class="dlg-badge" [class]="d.type.toLowerCase()">{{ d.type }}</span></td>
              <td class="text-muted" style="max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ d.scope }}</td>
              <td class="text-muted">{{ d.startDate | date:'dd MMM yyyy' }}</td>
              <td class="text-muted">{{ d.endDate | date:'dd MMM yyyy' }}</td>
              <td><span class="dlg-badge" [class]="d.status.toLowerCase()+'-dlg'">{{ d.status }}</span></td>
              <td>
                <button *ngIf="d.status==='Active'" class="btn btn-ghost btn-sm" (click)="revoke(d)">Revoke</button>
              </td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading…' : 'No delegations found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `,
})
export class DelegationComponent extends BaseListComponent {
  override readonly apiPath = '/v1/delegations';
  private readonly fb = inject(FormBuilder);
  readonly showCreate = signal(false);
  get activeCount() { return this.rows().filter((r:any)=>r.status==='Active').length; }
  get pendingCount() { return this.rows().filter((r:any)=>r.status==='Pending').length; }
  get expiredCount() { return this.rows().filter((r:any)=>r.status==='Expired').length; }
  readonly createForm = this.fb.group({
    fromUserId:['',Validators.required], toUserId:['',Validators.required],
    type:['Workflow'], scope:['',Validators.required],
    startDate:[new Date().toISOString().slice(0,10)],
    endDate:[new Date(Date.now()+14*864e5).toISOString().slice(0,10)],
  });
  extraParams() { return {}; }
  trackById(_:number, r:any) { return r.id; }

  submitCreate() {
    if (this.createForm.invalid) return;
    this.api.post('/v1/delegations', this.createForm.value).subscribe(() => { this.showCreate.set(false); this.createForm.reset(); this.load(); });
  }
  revoke(d: any) {
    this.api.patch(`/v1/delegations/${d.id}/revoke`, {}).subscribe(() => this.load());
  }
}

// ================================================================
// MASTER LOOKUP
// ================================================================
@Component({
  selector: 'app-master-lookup',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule],
  styles: [ENT_STYLES + `.ml-tabs{display:flex;gap:0;border-bottom:1px solid #dde2ee;margin-bottom:14px;} .ml-tab{padding:8px 16px;font-size:12px;color:#8a9bb8;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-1px;font-weight:500;background:none;border-top:none;border-left:none;border-right:none;font-family:inherit;transition:all .12s;} .ml-tab.active{color:#2563eb;border-bottom-color:#2563eb;font-weight:700;} .ml-cell{border:1px solid transparent;background:transparent;padding:5px 8px;font-family:inherit;font-size:12.5px;width:100%;border-radius:4px;} .ml-cell:focus{border-color:#2563eb;background:#f0f7ff;outline:none;}`],
  template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Master Lookup</h1><div class="toolbar-actions"><button class="btn btn-primary btn-sm" (click)="addRow()">+ Add Row</button><button class="btn btn-ghost btn-sm">Export</button></div></div>
    <div class="ml-tabs">
      @for (tab of tabs; track tab.key) {
        <button class="ml-tab" [class.active]="activeTab()===tab.key" (click)="switchTab(tab.key)">{{ tab.label }}</button>
      }
    </div>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>Label</th><th *ngIf="activeTab()==='staff-grades'">Rate (£/hr)</th><th>Active</th><th></th></tr></thead>
          <tbody>
            <tr *ngFor="let item of items(); let i=index; trackBy: trackById">
              <td><input class="ml-cell" [value]="item.label||item.grade" (change)="updateLabel(i,$any($event.target).value)" [attr.aria-label]="'Label for row '+(i+1)"></td>
              <td *ngIf="activeTab()==='staff-grades'"><input class="ml-cell" type="number" [value]="item.rate" (change)="updateRate(i,+$any($event.target).value)" [attr.aria-label]="'Rate for row '+(i+1)"></td>
              <td><span class="badge" [class]="item.isActive!==false?'badge-green':'badge-gray'">{{ item.isActive!==false?'Active':'Inactive' }}</span></td>
              <td><button class="btn btn-ghost btn-sm" (click)="deleteRow(i)">✕</button></td>
            </tr>
            <tr *ngIf="!items().length"><td colspan="4" class="empty">No records in this category.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `,
})
export class MasterLookupComponent implements OnInit {
  private readonly api = inject(ApiService);
  readonly activeTab = signal('services');
  readonly items = signal<any[]>([]);
  readonly tabs = [
    { key:'services', label:'Services' }, { key:'bim_levels', label:'BIM Levels' },
    { key:'nec_types', label:'NEC Types' }, { key:'lot_sectors', label:'Lot Sectors' },
    { key:'regions', label:'Regions' }, { key:'partners', label:'Partners' },
    { key:'proc_routes', label:'Proc. Routes' }, { key:'vat_rates', label:'VAT Rates' },
    { key:'staff-grades', label:'Staff Grades' }, { key:'people-band-rates', label:'Band Rates' },
  ];

  ngOnInit() { this.switchTab('services'); }

  switchTab(key: string) {
    this.activeTab.set(key);
    const path = key === 'staff-grades' ? '/v1/master-lookup/staff-grades' : key === 'people-band-rates' ? '/v1/master-lookup/people-band-rates' : `/v1/master-lookup/category/${key}`;
    this.api.get<any[]>(path).subscribe(data => this.items.set(data));
  }

  trackById(_:number, r:any) { return r.id; }

  updateLabel(i: number, value: string) {
    const item = this.items()[i];
    if (this.activeTab() === 'staff-grades') {
      this.api.put(`/v1/master-lookup/staff-grades/${item.id}`, { grade:value }).subscribe();
    } else {
      this.api.put(`/v1/master-lookup/upsert`, { category:this.activeTab(), code:item.code, label:value }).subscribe();
    }
    const updated = [...this.items()]; updated[i] = { ...item, label:value, grade:value }; this.items.set(updated);
  }

  updateRate(i: number, rate: number) {
    const item = this.items()[i];
    this.api.put(`/v1/master-lookup/staff-grades/${item.id}`, { rate }).subscribe();
    const updated = [...this.items()]; updated[i] = { ...item, rate }; this.items.set(updated);
  }

  addRow() {
    const newItem = this.activeTab() === 'staff-grades' ? { grade:'New Grade', rate:0, isActive:true } : { label:'New Item', category:this.activeTab(), isActive:true };
    this.items.update(items => [...items, newItem]);
  }

  deleteRow(i: number) {
    const item = this.items()[i];
    if (item.id) this.api.delete(`/v1/master-lookup/${item.id}`).subscribe(() => this.switchTab(this.activeTab()));
    else this.items.update(items => items.filter((_,idx)=>idx!==i));
  }
}

// ================================================================
// LOGIN COMPONENT
// ================================================================
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <div class="login-shell">
    <div class="login-card">
      <div class="login-logo">
        <svg width="56" height="56" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M85,50 A35,35 0 1,0 85,52" fill="none" stroke="#00aeef" stroke-width="11" stroke-linecap="round"/>
          <path d="M36,68 A20,20 0 0,0 64,68" fill="none" stroke="#f5a800" stroke-width="9" stroke-linecap="round"/>
          <circle cx="27" cy="50" r="7" fill="#00aeef"/>
        </svg>
        <div class="login-brand">PERFECT CIRCLE</div>
        <div class="login-sub">PC HUB 2.0 — Enterprise Suite</div>
      </div>
      <form [formGroup]="form" (ngSubmit)="submit()" class="login-form">
        <div class="login-field">
          <label class="login-label" for="dev-user">Dev User (select to auto-login)</label>
          <select id="dev-user" class="login-input" formControlName="userId">
            <option value="">Select user…</option>
            <option value="11111111-1111-1111-1111-111111111111">James Dawson (Commission Lead)</option>
            <option value="22222222-2222-2222-2222-222222222222">Sarah Mitchell (Commercial Manager)</option>
            <option value="33333333-3333-3333-3333-333333333333">Priya Patel (Commission Lead)</option>
            <option value="44444444-4444-4444-4444-444444444444">Tom Hargreaves (Lead Partner)</option>
            <option value="55555555-5555-5555-5555-555555555555">Lucy Chen (Commission Lead)</option>
          </select>
        </div>
        <button type="submit" class="login-btn" [disabled]="!form.value.userId">Sign In (Dev Mode)</button>
        <p class="login-note">Production: configure JWT from your enterprise identity provider (Azure AD, Okta, etc.)</p>
      </form>
    </div>
  </div>
  `,
  styles: [`
    .login-shell{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#f0f7ff 0%,#f5f7fb 100%);}
    .login-card{background:#fff;border:1px solid #dde2ee;border-radius:12px;padding:40px 36px;width:380px;box-shadow:0 8px 32px rgba(0,0,0,.1);}
    .login-logo{text-align:center;margin-bottom:24px;}
    .login-brand{font-size:18px;font-weight:800;color:#0f172a;letter-spacing:-.5px;margin-top:8px;}
    .login-sub{font-size:11px;color:#94a3b8;margin-top:3px;}
    .login-form{display:flex;flex-direction:column;gap:14px;}
    .login-field{display:flex;flex-direction:column;gap:5px;}
    .login-label{font-size:12px;font-weight:600;color:#5a6b8a;}
    .login-input{border:1px solid #dde2ee;border-radius:7px;padding:9px 12px;font-size:13px;font-family:inherit;outline:none;}
    .login-input:focus{border-color:#2563eb;box-shadow:0 0 0 3px rgba(37,99,235,.1);}
    .login-btn{background:#2563eb;color:#fff;border:none;border-radius:7px;padding:11px;font-size:13.5px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .12s;}
    .login-btn:hover:not(:disabled){background:#1d4ed8;}
    .login-btn:disabled{opacity:.5;cursor:not-allowed;}
    .login-note{font-size:11px;color:#94a3b8;text-align:center;margin-top:4px;}
  `],
})
export class LoginComponent {
  private readonly api = inject(ApiService);
  private readonly tokens = inject(AuthTokenService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({ userId:[''] });

  submit() {
    const userId = this.form.value.userId;
    if (!userId) return;
    this.api.post<{token:string}>(`/v1/auth/dev-token/${userId}`, {}).subscribe({
      next: ({ token }) => {
        this.tokens.setToken(token, false);
        this.auth.loadMe().subscribe(() => this.router.navigate(['/opportunities']));
      },
      error: () => alert('Dev token unavailable. Configure JWT_SECRET in .env and ensure API is running.'),
    });
  }
}

// ── DASHBOARD ─────────────────────────────────────────────────────
@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule],
  styles: [ENT_STYLES + `
    .dash-kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:14px;}
    .kpi-card{background:#fff;border:1px solid #dde2ee;border-radius:10px;padding:18px 20px;}
    .kpi-label{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#8a9bb8;margin-bottom:8px;}
    .kpi-value{font-size:26px;font-weight:800;line-height:1;}
    .kpi-value.blue{color:#2563eb;} .kpi-value.green{color:#16a34a;} .kpi-value.amber{color:#d97706;} .kpi-value.gray{color:#64748b;}
    .kpi-sub{font-size:11.5px;color:#8a9bb8;margin-top:5px;}
    .dash-mid-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;}
    .dash-bot-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;}
    .section-card{background:#fff;border:1px solid #dde2ee;border-radius:10px;padding:18px 20px;}
    .section-title{font-size:13px;font-weight:700;color:#1a2240;margin-bottom:14px;display:flex;justify-content:space-between;align-items:center;}
    .section-link{font-size:11.5px;color:#2563eb;text-decoration:none;font-weight:600;}
    .pipe-row{display:flex;align-items:center;gap:10px;margin-bottom:10px;}
    .pipe-lbl{font-size:11px;color:#8a9bb8;width:96px;flex-shrink:0;}
    .pipe-bar-wrap{flex:1;height:8px;background:#f0f2f7;border-radius:4px;overflow:hidden;}
    .pipe-bar{height:100%;border-radius:4px;transition:width .3s;}
    .pipe-val{font-size:11.5px;font-weight:700;color:#1a2240;width:80px;text-align:right;flex-shrink:0;}
    .wf-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;}
    .wf-cell{background:#f5f7fb;border-radius:8px;padding:12px 14px;}
    .wf-num{font-size:22px;font-weight:800;line-height:1;}
    .wf-num.blue{color:#2563eb;} .wf-num.green{color:#16a34a;} .wf-num.amber{color:#d97706;} .wf-num.purple{color:#7c3aed;}
    .wf-lbl{font-size:11px;color:#8a9bb8;margin-top:3px;}
    .mini-tbl{width:100%;border-collapse:collapse;font-size:12px;}
    .mini-tbl th{font-size:10.5px;font-weight:700;text-transform:uppercase;letter-spacing:.4px;color:#8a9bb8;padding:6px 8px;border-bottom:2px solid #f0f2f7;text-align:left;}
    .mini-tbl td{padding:9px 8px;border-bottom:1px solid #f5f7fb;vertical-align:middle;}
    .mini-tbl tr:last-child td{border-bottom:none;}
    .comm-num{font-size:11px;font-weight:700;color:#2563eb;}
    .comm-name{font-size:11px;color:#64748b;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
    .prog-wrap{display:flex;align-items:center;gap:5px;}
    .prog-track{flex:1;height:4px;background:#e2e8f0;border-radius:2px;overflow:hidden;}
    .prog-fill{height:100%;border-radius:2px;}
    .alert-bar{display:flex;align-items:center;gap:8px;background:#fef3c7;border:1px solid #fcd34d;border-radius:8px;padding:10px 16px;font-size:12.5px;color:#92400e;margin-bottom:10px;}
    .alert-lnk{color:#b45309;font-weight:600;text-decoration:none;margin-left:4px;}
    @media(max-width:900px){.dash-kpi-grid{grid-template-columns:1fr 1fr;}.dash-mid-grid,.dash-bot-grid{grid-template-columns:1fr;}}
  `],
  template: `
<div class="page-shell">
  <div class="toolbar">
    <h1 class="page-title">Dashboard</h1>
    <div class="toolbar-actions">
      <button class="btn btn-ghost btn-sm" (click)="reload()">↻ Refresh</button>
    </div>
  </div>

  <div *ngIf="loadErr()" class="alert-bar" style="background:#fee2e2;border-color:#fca5a5;color:#7f1d1d;">⚠ {{loadErr()}}</div>

  <ng-container *ngIf="data() as d">
    <!-- Alert banner -->
    <div class="alert-bar" *ngIf="d.alerts.expiredSuppliers > 0">
      ⚠ {{d.alerts.expiredSuppliers}} supplier certificate(s) have expired.
      <a class="alert-lnk" routerLink="/suppliers">Review Supplier Portal →</a>
    </div>

    <!-- KPI Cards -->
    <div class="dash-kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Total Pipeline</div>
        <div class="kpi-value blue">{{fmtK(d.kpis.totalPipeline)}}</div>
        <div class="kpi-sub">{{d.kpis.totalPipelineCount}} commissions</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Invoiced (Paid)</div>
        <div class="kpi-value green">{{fmtK(d.kpis.invoicedPaid)}}</div>
        <div class="kpi-sub">collected to date</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Outstanding</div>
        <div class="kpi-value amber">{{fmtK(d.kpis.outstandingAmount)}}</div>
        <div class="kpi-sub">{{d.kpis.outstandingCount}} pending invoices</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Active CEs / Alerts</div>
        <div class="kpi-value gray">{{d.workflowStatus.activeCEs}}</div>
        <div class="kpi-sub">{{d.workflowStatus.activeCEs}} open CEs · {{d.alerts.expiredSuppliers}} expired supplier</div>
      </div>
    </div>

    <!-- Pipeline by Status + Workflow Status -->
    <div class="dash-mid-grid">
      <div class="section-card">
        <div class="section-title">Pipeline by Status <span style="font-size:11px;color:#8a9bb8;font-weight:400">Value distribution</span></div>
        <div *ngFor="let p of d.pipelineByStatus">
          <div class="pipe-row">
            <div class="pipe-lbl">{{statusLabel(p.status)}}</div>
            <div class="pipe-bar-wrap">
              <div class="pipe-bar" [style.width]="barPct(p.value,d.kpis.totalPipeline)+'%'" [style.background]="barColor(p.status)"></div>
            </div>
            <div class="pipe-val">{{fmtK(p.value)}}</div>
          </div>
        </div>
      </div>
      <div class="section-card">
        <div class="section-title">Workflow Status</div>
        <div class="wf-grid">
          <div class="wf-cell"><div class="wf-num blue">{{d.workflowStatus.opportunities}}</div><div class="wf-lbl">Opportunities</div></div>
          <div class="wf-cell"><div class="wf-num amber">{{d.workflowStatus.activeCEs}}</div><div class="wf-lbl">Active CEs</div></div>
          <div class="wf-cell"><div class="wf-num amber">{{d.workflowStatus.pendingInvoices}}</div><div class="wf-lbl">Pending Invoices</div></div>
          <div class="wf-cell"><div class="wf-num green">{{d.workflowStatus.approvedPIs}}</div><div class="wf-lbl">Approved PIs</div></div>
          <div class="wf-cell"><div class="wf-num green">{{d.workflowStatus.finalReady}}</div><div class="wf-lbl">Final Ready</div></div>
          <div class="wf-cell"><div class="wf-num purple">{{d.workflowStatus.surveysPending}}</div><div class="wf-lbl">Surveys Pending</div></div>
        </div>
      </div>
    </div>

    <!-- Recent Commissions + Upcoming Milestones -->
    <div class="dash-bot-grid">
      <div class="section-card">
        <div class="section-title">
          Recent Commissions
          <a class="section-link" routerLink="/opportunities">View All →</a>
        </div>
        <table class="mini-tbl">
          <thead><tr><th>Commission</th><th>Status</th><th>Stage</th><th>Value</th></tr></thead>
          <tbody>
            <tr *ngFor="let c of d.recentCommissions">
              <td>
                <div class="comm-num">{{c.commNum}}</div>
                <div class="comm-name" [title]="c.name">{{c.name}}</div>
              </td>
              <td>
                <span class="chip" [style.background]="stageBg(c.status)" [style.color]="stageFg(c.status)">{{statusLabel(c.status)}}</span>
              </td>
              <td>
                <div class="prog-wrap">
                  <div class="prog-track"><div class="prog-fill" [style.width]="c.stagePercent+'%'" [style.background]="barColor(c.status)"></div></div>
                  <span style="font-size:10.5px;color:#8a9bb8;width:28px;text-align:right">{{c.stagePercent}}%</span>
                </div>
              </td>
              <td style="font-weight:700;color:#d97706;white-space:nowrap">{{fmtK(c.value)}}</td>
            </tr>
            <tr *ngIf="!d.recentCommissions.length">
              <td colspan="4" class="empty">No commissions found.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="section-card">
        <div class="section-title">Upcoming Milestones</div>
        <table class="mini-tbl">
          <thead><tr><th>Milestone</th><th>Commission</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>
            <tr *ngFor="let m of d.upcomingMilestones">
              <td style="font-weight:600;font-size:12px">{{m.milestone}}</td>
              <td><span class="chip">{{m.commNum}}</span></td>
              <td style="font-weight:700;color:#16a34a;white-space:nowrap">{{fmtK(m.amount)}}</td>
              <td><span class="badge" [class]="msBadge(m.status)">{{m.status}}</span></td>
            </tr>
            <tr *ngIf="!d.upcomingMilestones.length">
              <td colspan="4" class="empty">No upcoming milestones.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </ng-container>

  <div *ngIf="!data() && !loadErr()" style="padding:60px;text-align:center;color:#8a9bb8">Loading dashboard…</div>
</div>
  `,
})
export class DashboardComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly destroy$ = new Subject<void>();

  readonly data = signal<any>(null);
  readonly loadErr = signal<string>('');

  ngOnInit() { this.fetchData(); }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  reload() { this.data.set(null); this.loadErr.set(''); this.fetchData(); }

  private fetchData() {
    this.api.get<any>('/v1/dashboard').pipe(takeUntil(this.destroy$)).subscribe({
      next: d => this.data.set(d),
      error: () => this.loadErr.set('Failed to load dashboard data. Ensure the API is running.'),
    });
  }

  fmtK(val: number): string {
    if (!val || val === 0) return '£0';
    if (val >= 1_000_000) return '£' + (val / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (val >= 1_000) return '£' + Math.round(val / 1_000) + 'K';
    return '£' + Math.round(val);
  }

  statusLabel(s: string): string {
    const map: Record<string,string> = { Lead:'Lead', Probable:'Probable', StrongProbable:'Strong Probable', Contracted:'Contracted', WorkStarted:'Work Started', Completed:'Completed' };
    return map[s] ?? s;
  }

  barPct(val: number, total: number): number {
    return total > 0 ? Math.min(100, Math.round((val / total) * 100)) : 0;
  }

  barColor(s: string): string {
    const m: Record<string,string> = { Lead:'#94a3b8', Probable:'#2563eb', StrongProbable:'#7c3aed', Contracted:'#16a34a', WorkStarted:'#0f766e', Completed:'#0369a1' };
    return m[s] ?? '#2563eb';
  }

  stageBg(s: string): string {
    const m: Record<string,string> = { Lead:'#f1f5f9', Probable:'#dbeafe', StrongProbable:'#ede9fe', Contracted:'#dcfce7', WorkStarted:'#ccfbf1', Completed:'#e0f2fe' };
    return m[s] ?? '#f1f5f9';
  }

  stageFg(s: string): string {
    const m: Record<string,string> = { Lead:'#475569', Probable:'#1d4ed8', StrongProbable:'#5b21b6', Contracted:'#166534', WorkStarted:'#0f766e', Completed:'#0369a1' };
    return m[s] ?? '#475569';
  }

  msBadge(s: string): string {
    const m: Record<string,string> = { Pending:'badge-amber', Paid:'badge-green', Overdue:'badge-red', Upcoming:'badge-blue', Draft:'badge-gray' };
    return m[s] ?? 'badge-gray';
  }
}
