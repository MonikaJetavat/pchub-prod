import {
  Component, OnInit, OnDestroy, signal, computed, inject,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';

// ── Constants (exact match from prototype) ──────────────────────
const FC_STAFF_GRADES = [
  {grade:'Director',rate:195},{grade:'Associate Director',rate:165},
  {grade:'Senior Associate',rate:145},{grade:'Associate',rate:125},
  {grade:'Senior Engineer/Architect',rate:110},{grade:'Engineer/Architect',rate:90},
  {grade:'Graduate',rate:72},{grade:'Technician',rate:65},{grade:'Admin',rate:45},
];
const FC_RIBA_STAGES = [
  'Stage 0 – Strategic Definition','Stage 1 – Preparation & Briefing',
  'Stage 2 – Concept Design','Stage 3 – Spatial Coordination',
  'Stage 4 – Technical Design','Stage 5 – Construction',
  'Stage 6 – Handover','Stage 7 – Use',
];
const FC_PRIMARY_SERVICES = [
  'Project Manager','Quantity Surveyor','Architect','Building Surveyor',
  'Commercial Surveyor','Electrical Engineer','Mechanical Engineer','Structural Engineer',
];
const FC_PROC_ROUTES = ['SFR','AFR','CPO','CT','BM','OB','CPS'];
const FC_SUPPLIERS = [
  '1st Horizon','360 Energy','Perfect Circle','Stride Structural Ltd','Enviro MEP Solutions',
  'CostPro QS Ltd','Urban Transport Consulting','GreenBuild Architects','Apex Civil Engineering',
  'PlanX Consultants','Heritage & Place Ltd','Sustainable Futures Ltd','TechDraw Design Studio','Pick Everard',
];
const FC_PROC_ROUTE_FULL = [
  'Design & Build – 1 stage','Design & Build – 2 stage','Traditional','Framework Agreement','Negotiated',
];
const FC_PSC_PCT: Record<string,number> = {
  'Design & Build – 1 stage':2.45,'Design & Build – 2 stage':2.65,
  'Traditional':2.80,'Framework Agreement':2.20,'Negotiated':2.00,
};
const FC_NEC_FORMS = [
  'Option A NEC4 PSC (Service DA) Priced Contract',
  'Option C NEC4 PSC (Service DA) Target Contract',
  'Option E NEC4 PSC (Service DA) Cost Reimbursable',
  'NEC3 PSC',
];
const FC_BIM = ['Standard (no IM)','BIM Level 2','BIM Level 3','Federated Model'];

function defaultFC() {
  return {
    inputDate:'', constructionValue:0, preContractWeeks:0, postContractWeeks:0,
    procRoute:'Design & Build – 1 stage', overridePSCPct:0,
    contractLead:'', supervisor:'', bim:'Standard (no IM)',
    necContractForm:'Option A NEC4 PSC (Service DA) Priced Contract', necOption:'A',
    inflationRequired:'No', inflationApplied:'Outset',
    selectedServices: FC_PRIMARY_SERVICES.map(s => ({ name:s, ribaStages:[] as number[], supplier:'', procRoute:'SFR', isPct:false })),
    timeCharges: [] as any[],
    nonSfr: [] as any[],
    disbursements: [] as any[],
    ceList: [] as any[],
  };
}

function calcTotals(fc: any) {
  const tc = (fc.timeCharges||[]) as any[];
  const nsf = (fc.nonSfr||[]) as any[];
  const disb = (fc.disbursements||[]) as any[];

  const tcExclCE  = tc.filter(r=>!r.ceId).reduce((a:number,r:any)=>a+((r.overrideRate>0?r.overrideRate:r.hourlyRate||0)*(r.estHours||0))+(r.inflationAmount||0),0);
  const nsfExclCE = nsf.filter(r=>!r.ceId).reduce((a:number,r:any)=>a+(+r.netFee||0),0);
  const disbExclCE = disb.filter(r=>!r.ceId).reduce((a:number,r:any)=>a+(+r.netFee||0),0);

  const subTotal     = tcExclCE;                   // prime core + core = 0 in prototype
  const totalCharges = subTotal + nsfExclCE;
  const pscPct       = fc.overridePSCPct > 0 ? +fc.overridePSCPct : (FC_PSC_PCT[fc.procRoute] || 2.45);
  const pscFee       = totalCharges * pscPct / 100;
  const totalCommission = totalCharges + pscFee;

  // CE totals
  const ceMap: Record<string,{status:string,total:number}> = {};
  [...tc,...nsf,...disb].forEach((r:any) => {
    if (r.ceId) {
      const ce = (fc.ceList||[]).find((c:any) => c.id===r.ceId);
      if (!ceMap[r.ceId]) ceMap[r.ceId] = { status:ce?.status||'Open', total:0 };
      ceMap[r.ceId].total += (r.overrideRate||r.hourlyRate) ?
        ((r.overrideRate||r.hourlyRate||0)*(r.estHours||0)) : (+r.netFee||0);
    }
  });
  const ceVals = Object.values(ceMap);
  const totalApproved = ceVals.filter(c=>c.status==='Approved').reduce((a,c)=>a+c.total,0);
  const totalOpen     = ceVals.filter(c=>c.status==='Open').reduce((a,c)=>a+c.total,0);
  const totalRejected = ceVals.filter(c=>c.status==='Rejected').reduce((a,c)=>a+c.total,0);
  const overall       = totalCommission + disbExclCE;

  return {
    tcExclCE, nsfExclCE, disbExclCE, subTotal, totalCharges,
    pscPct, pscFee, totalCommission,
    totalApproved, totalOpen, totalRejected,
    overall, disbInclCE: disbExclCE + totalApproved,
    overridePSCPct: fc.overridePSCPct,
  };
}

function fmtGBP(v: number): string {
  return v.toLocaleString('en-GB', { minimumFractionDigits:2, maximumFractionDigits:2 });
}

function calcProgramme(constructionValue: number) {
  if (!constructionValue || constructionValue <= 0) return { pre:0, post:0 };
  return {
    pre:  +((Math.log10(constructionValue+1)*0.6).toFixed(2)),
    post: +((Math.log10(constructionValue+1)*1.1).toFixed(2)),
  };
}

@Component({
  selector: 'app-fee-calculator',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, FormsModule],
  styles: [`
    :host { display:flex; flex-direction:column; height:100%; font-family:inherit; }
    .fc-shell { display:flex; flex-direction:column; height:100%; background:#f0f2f7; }
    /* Toolbar */
    .fc-toolbar { display:flex; align-items:center; gap:8px; padding:7px 14px; background:#fff; border-bottom:1px solid #dde2ee; flex-shrink:0; position:relative; }
    .fc-toolbar::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#00aeef,#f5a800); }
    /* Top tabs (Input / RIBA Summary) */
    .fc-top-tabs { display:flex; background:#f5f7fb; border-bottom:2px solid #dde2ee; flex-shrink:0; }
    .fc-top-tab { padding:9px 20px; font-size:12.5px; font-weight:600; color:#8a9bb8; cursor:pointer; border-bottom:2px solid transparent; margin-bottom:-2px; transition:all .15s; }
    .fc-top-tab.active { color:#2563eb; border-bottom-color:#2563eb; }
    .fc-top-tab:hover:not(.active) { color:#1a2240; }
    /* Body layout: tendered sidebar + right panel */
    .fc-body { flex:1; display:flex; overflow:hidden; }
    /* Tendered Total sidebar */
    .fc-sidebar { width:280px; flex-shrink:0; background:#fff; border-right:1px solid #dde2ee; display:flex; flex-direction:column; }
    .fc-sidebar-hdr { padding:10px 14px; background:#1e3a5f; color:#fff; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.5px; }
    .fc-sidebar-inner { flex:1; overflow-y:auto; padding:8px 0; }
    .fc-row { display:flex; justify-content:space-between; align-items:baseline; padding:5px 14px; font-size:11.5px; border-bottom:1px solid #f5f7fb; }
    .fc-row:last-child { border-bottom:none; }
    .fc-row-label { color:#5a6b8a; flex:1; padding-right:8px; line-height:1.3; }
    .fc-row-val { font-weight:600; color:#1a2240; white-space:nowrap; font-variant-numeric:tabular-nums; }
    .fc-row-val.highlight { color:#2563eb; font-weight:800; font-size:13px; }
    .fc-row-val.ce-approved { color:#16a34a; }
    .fc-row-val.ce-open { color:#d97706; }
    .fc-row-val.ce-rejected { color:#dc2626; }
    .fc-divider { height:1px; background:#e2e8f0; margin:4px 0; }
    /* Right panel */
    .fc-right { flex:1; overflow-y:auto; display:flex; flex-direction:column; }
    /* Sub-tabs (Config / TC / Ext / Disb) */
    .fc-sub-tabs { display:flex; background:#f8fafc; border-bottom:2px solid #dde2ee; flex-shrink:0; overflow-x:auto; }
    .fc-sub-tab { display:flex; align-items:center; gap:5px; padding:9px 16px; font-size:12.5px; color:#8a9bb8; cursor:pointer; white-space:nowrap; border-bottom:2px solid transparent; margin-bottom:-2px; font-weight:500; transition:all .15s; }
    .fc-sub-tab.active { color:#2563eb; border-bottom-color:#2563eb; font-weight:700; }
    .fc-sub-tab:hover:not(.active) { color:#1a2240; }
    .fc-sub-count { background:#e2e8f0; color:#5a6b8a; border-radius:10px; padding:1px 7px; font-size:10px; font-weight:700; }
    .fc-sub-tab.active .fc-sub-count { background:#2563eb; color:#fff; }
    .fc-sub-total { font-size:10.5px; color:#d97706; font-weight:600; }
    /* Section panels */
    .fc-panel { padding:14px 16px; }
    .fc-section { background:#fff; border:1px solid #dde2ee; border-radius:7px; margin-bottom:10px; overflow:hidden; }
    .fc-section-hdr { display:flex; align-items:center; justify-content:space-between; padding:9px 14px; background:#f8fafc; border-bottom:1px solid #e2e8f0; cursor:pointer; }
    .fc-section-hdr span { font-size:12.5px; font-weight:700; color:#1a2240; }
    .fc-section-body { padding:12px 14px; }
    .fc-grid2 { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
    .fc-grid3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; }
    .fc-field { display:flex; flex-direction:column; gap:3px; }
    .fc-label { font-size:11px; font-weight:600; color:#5a6b8a; }
    .fc-input { border:1px solid #dde2ee; border-radius:6px; padding:6px 9px; font-size:12.5px; font-family:inherit; background:#fff; outline:none; }
    .fc-input:focus { border-color:#2563eb; box-shadow:0 0 0 2px rgba(37,99,235,.1); }
    .fc-select { border:1px solid #dde2ee; border-radius:6px; padding:6px 9px; font-size:12.5px; font-family:inherit; background:#fff; cursor:pointer; outline:none; }
    .fc-select:focus { border-color:#2563eb; }
    /* Spreadsheet grids */
    .grid-wrap { overflow-x:auto; max-height:360px; overflow-y:auto; }
    .eg-grid { width:100%; border-collapse:collapse; font-size:12px; }
    .eg-grid th { background:#f5f7fb; padding:7px 8px; font-size:10.5px; font-weight:700; text-transform:uppercase; letter-spacing:.3px; color:#5a6b8a; border-bottom:2px solid #e2e8f0; white-space:nowrap; position:sticky; top:0; z-index:1; }
    .eg-grid td { padding:4px 6px; border-bottom:1px solid #f5f7fb; vertical-align:middle; }
    .eg-grid tr:hover td { background:#f8fafc; }
    .eg-cell { border:1px solid transparent; border-radius:4px; padding:4px 6px; font-size:12px; font-family:inherit; background:transparent; outline:none; width:100%; min-width:60px; }
    .eg-cell:focus { border-color:#2563eb; background:#eff6ff; }
    .eg-cell[type=number] { text-align:right; }
    .eg-cell-ro { background:#f8fafc; color:#64748b; cursor:default; }
    .eg-rownum { width:28px; text-align:center; color:#94a3b8; font-size:11px; padding:0 4px; }
    .eg-actions { width:52px; white-space:nowrap; }
    .eg-act-btn { background:transparent; border:none; cursor:pointer; color:#94a3b8; font-size:13px; padding:2px 4px; border-radius:3px; }
    .eg-act-btn:hover { background:#fee2e2; color:#dc2626; }
    .eg-act-copy:hover { background:#f0fdf4; color:#16a34a; }
    .grid-toolbar { display:flex; align-items:center; gap:8px; padding:7px 10px; background:#f8fafc; border-bottom:1px solid #e2e8f0; }
    .grid-search { border:1px solid #dde2ee; border-radius:5px; padding:4px 8px; font-size:12px; font-family:inherit; background:#fff; outline:none; flex:1; max-width:220px; }
    .grid-footer { display:flex; align-items:center; gap:8px; padding:7px 10px; background:#f8fafc; border-top:1px solid #e2e8f0; }
    .add-row-btn { background:transparent; border:1px dashed #93c5fd; border-radius:5px; padding:4px 12px; font-size:12px; font-weight:600; color:#2563eb; cursor:pointer; font-family:inherit; transition:all .12s; }
    .add-row-btn:hover { background:#eff6ff; }
    .row-count { font-size:11px; color:#94a3b8; margin-left:auto; }
    .total-pill { background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; font-size:11.5px; font-weight:700; padding:2px 10px; border-radius:10px; }
    .ce-row td { background:rgba(245,168,0,.07) !important; }
    /* RIBA Summary */
    .riba-table { width:100%; border-collapse:collapse; font-size:12px; }
    .riba-table th { background:#1e3a5f; color:#fff; padding:8px 10px; font-size:10.5px; text-align:center; position:sticky; top:0; }
    .riba-table th:first-child { text-align:left; }
    .riba-table td { padding:7px 10px; border-bottom:1px solid #f0f2f7; text-align:center; }
    .riba-table td:first-child { text-align:left; font-weight:600; font-size:12px; }
    .riba-table tbody tr:hover td { background:#f8fafc; }
    .riba-check { color:#16a34a; font-size:14px; }
    /* Services table */
    .svc-table { width:100%; border-collapse:collapse; font-size:12px; }
    .svc-table th { background:#f5f7fb; padding:7px 8px; font-size:10.5px; font-weight:700; text-transform:uppercase; color:#5a6b8a; border-bottom:2px solid #e2e8f0; }
    .svc-table td { padding:6px 8px; border-bottom:1px solid #f5f7fb; vertical-align:middle; }
    /* Buttons */
    .btn { display:inline-flex; align-items:center; gap:4px; padding:6px 14px; border-radius:6px; border:1px solid transparent; cursor:pointer; font-size:12.5px; font-weight:600; font-family:inherit; transition:all .12s; }
    .btn-primary { background:#2563eb; color:#fff; border-color:#2563eb; }
    .btn-primary:hover { background:#1d4ed8; }
    .btn-ghost { background:#fff; color:#5a6b8a; border-color:#dde2ee; }
    .btn-ghost:hover { background:#f5f7fb; }
    .btn-sm { padding:4px 10px; font-size:12px; }
    .chip { display:inline-block; padding:2px 8px; border-radius:10px; background:rgba(37,99,235,.08); color:#1d4ed8; font-size:10.5px; font-weight:600; }
    .badge { display:inline-block; padding:2px 8px; border-radius:10px; font-size:10.5px; font-weight:700; }
    .save-dot { font-size:11px; color:#16a34a; opacity:0; transition:opacity .3s; }
    .save-dot.show { opacity:1; }
    .empty-grid { text-align:center; padding:20px; color:#94a3b8; font-size:12px; }
    .riba-stage-pill { display:inline-block; padding:1px 6px; border-radius:8px; background:#eff6ff; color:#2563eb; font-size:10px; font-weight:700; margin:1px; }
  `],
  template: `
  <div class="fc-shell">

    <!-- Toolbar -->
    <div class="fc-toolbar">
      <a routerLink="/opportunities" style="font-size:12px;color:#64748b;text-decoration:none">← Back</a>
      <span class="chip" *ngIf="opp">{{ opp?.commNum }}</span>
      <span style="font-size:13px;font-weight:600;color:#1a2240">{{ opp?.name }}</span>
      <div style="margin-left:auto;display:flex;gap:6px;align-items:center">
        <span class="save-dot" [class.show]="saved">✓ Saved</span>
        <button class="btn btn-ghost btn-sm" (click)="save()">💾 Save</button>
        <button class="btn btn-ghost btn-sm" (click)="undo()" [disabled]="!canUndo">↩ Undo</button>
        <button class="btn btn-ghost btn-sm" (click)="print()">🖨 Print</button>
      </div>
    </div>

    <!-- Top-level tabs: Input | RIBA Summary -->
    <div class="fc-top-tabs">
      <div class="fc-top-tab" [class.active]="mainTab==='input'"  (click)="mainTab='input'">Fee Calculator Input</div>
      <div class="fc-top-tab" [class.active]="mainTab==='riba'"   (click)="mainTab='riba'">RIBA Summary</div>
    </div>

    <div class="fc-body" *ngIf="fc">

      <!-- Tendered Total sidebar -->
      <div class="fc-sidebar">
        <div class="fc-sidebar-hdr">Tendered Total</div>
        <div class="fc-sidebar-inner" *ngIf="totals as t">
          <div class="fc-row"><span class="fc-row-label">Charges for Prime Core Services (RIBA 2–7) £</span><span class="fc-row-val">{{ fmt(0) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Charges for Core Services (RIBA 2–7) £</span><span class="fc-row-val">{{ fmt(0) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Time Charges (excl. CEs) £</span><span class="fc-row-val">{{ fmt(t.tcExclCE) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">Sub Total: Core Services + Time Charges £</span><span class="fc-row-val highlight">{{ fmt(t.subTotal) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">External Consultancy (excl. CEs) £</span><span class="fc-row-val">{{ fmt(t.nsfExclCE) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total of Charges £</span><span class="fc-row-val">{{ fmt(t.totalCharges) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">PSC / PSSC Fee Percentage %</span><span class="fc-row-val">{{ t.pscPct | number:'1.2-2' }}</span></div>
          <div class="fc-row"><span class="fc-row-label" *ngIf="fc.overridePSCPct>0" style="color:#d97706">Override PSC / PSSC Fee %</span><span class="fc-row-val" *ngIf="fc.overridePSCPct>0" style="color:#d97706">{{ fc.overridePSCPct | number:'1.2-2' }}</span></div>
          <div class="fc-row"><span class="fc-row-label">PSC / PSSC Fee £</span><span class="fc-row-val">{{ fmt(t.pscFee) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total Commission Value £</span><span class="fc-row-val highlight">{{ fmt(t.totalCommission) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">Disbursements (excl. CEs) £</span><span class="fc-row-val">{{ fmt(t.disbExclCE) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total Approved CEs £</span><span class="fc-row-val ce-approved">{{ fmt(t.totalApproved) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total Open CEs £</span><span class="fc-row-val ce-open">{{ fmt(t.totalOpen) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total Rejected CEs £</span><span class="fc-row-val ce-rejected">{{ fmt(t.totalRejected) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">Overall Commission Value £</span><span class="fc-row-val highlight" style="font-size:14px">{{ fmt(t.overall) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">Total Disbursements (inc. CEs) £</span><span class="fc-row-val">{{ fmt(t.disbInclCE) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total PSC / PSSC Fee (inc. CEs) £</span><span class="fc-row-val">{{ fmt(t.pscFee) }}</span></div>
        </div>
      </div>

      <!-- Right panel -->
      <div class="fc-right">

        <!-- INPUT VIEW -->
        <ng-container *ngIf="mainTab==='input'">
          <!-- Sub-tabs -->
          <div class="fc-sub-tabs">
            <div class="fc-sub-tab" [class.active]="subTab==='config'" (click)="subTab='config'">⚙ Configuration</div>
            <div class="fc-sub-tab" [class.active]="subTab==='tc'" (click)="subTab='tc'">
              ⏱ Time Charges
              <span class="fc-sub-count" *ngIf="fc.timeCharges.length">{{ fc.timeCharges.length }}</span>
              <span class="fc-sub-total" *ngIf="tcTotal>0">£{{ fmt(tcTotal) }}</span>
            </div>
            <div class="fc-sub-tab" [class.active]="subTab==='ext'" (click)="subTab='ext'">
              🏢 External Consultancy
              <span class="fc-sub-count" *ngIf="fc.nonSfr.length">{{ fc.nonSfr.length }}</span>
              <span class="fc-sub-total" *ngIf="extTotal>0">£{{ fmt(extTotal) }}</span>
            </div>
            <div class="fc-sub-tab" [class.active]="subTab==='disb'" (click)="subTab='disb'">
              💳 Disbursements
              <span class="fc-sub-count" *ngIf="fc.disbursements.length">{{ fc.disbursements.length }}</span>
              <span class="fc-sub-total" *ngIf="disbTotal>0">£{{ fmt(disbTotal) }}</span>
            </div>
          </div>

          <!-- CONFIG TAB -->
          <div class="fc-panel" *ngIf="subTab==='config'">

            <!-- 1. Input -->
            <div class="fc-section">
              <div class="fc-section-hdr" (click)="toggle('input')">
                <span>▼ 1. Input</span>
              </div>
              <div class="fc-section-body" *ngIf="!collapsed['input']">
                <div class="fc-grid3">
                  <div class="fc-field">
                    <label class="fc-label">Date</label>
                    <input class="fc-input" type="date" [(ngModel)]="fc.inputDate" (ngModelChange)="dirty()">
                  </div>
                  <div class="fc-field" style="grid-column:span 2">
                    <label class="fc-label">1. Estimated Construction Value (£)</label>
                    <input class="fc-input" type="number" [(ngModel)]="fc.constructionValue" min="0" step="1000"
                      (ngModelChange)="onConstructionValueChange()">
                  </div>
                </div>
                <div style="margin-top:10px;padding:8px 10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;font-size:12px">
                  <strong style="color:#5a6b8a;font-size:11px">2. Programme Benchmark Defaults</strong>
                  <div style="display:flex;gap:24px;margin-top:4px">
                    <span>Pre Contract (Weeks): <strong>{{ fc.preContractWeeks | number:'1.2-2' }}</strong></span>
                    <span>Post Contract (Weeks): <strong>{{ fc.postContractWeeks | number:'1.2-2' }}</strong></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. Services -->
            <div class="fc-section">
              <div class="fc-section-hdr" (click)="toggle('services')">
                <span>▼ 3. Services</span>
              </div>
              <div *ngIf="!collapsed['services']" style="overflow-x:auto">
                <table class="svc-table">
                  <thead><tr>
                    <th></th>
                    <th>Service Name</th>
                    <th>RIBA Stages</th>
                    <th>Supplier</th>
                    <th>Procurement Route</th>
                    <th>% Charges?</th>
                  </tr></thead>
                  <tbody>
                    <tr *ngFor="let svc of fc.selectedServices; let i=index">
                      <td style="width:28px;text-align:center">
                        <button class="eg-act-btn" (click)="editService(i)" title="Edit">✏</button>
                      </td>
                      <td style="font-weight:600;font-size:12px">{{ svc.name }}</td>
                      <td>
                        <span *ngFor="let rs of svc.ribaStages" class="riba-stage-pill">S{{ rs }}</span>
                        <span *ngIf="!svc.ribaStages.length" style="color:#94a3b8">—</span>
                      </td>
                      <td>
                        <select class="eg-cell fc-select" [(ngModel)]="svc.supplier" (ngModelChange)="dirty()" style="min-width:130px">
                          <option value="">— Select —</option>
                          <option *ngFor="let s of suppliers" [value]="s">{{ s }}</option>
                        </select>
                      </td>
                      <td>
                        <select class="eg-cell fc-select" [(ngModel)]="svc.procRoute" (ngModelChange)="dirty()">
                          <option *ngFor="let p of procRoutes" [value]="p">{{ p }}</option>
                        </select>
                      </td>
                      <td style="text-align:center">
                        <input type="checkbox" [(ngModel)]="svc.isPct" (ngModelChange)="dirty()">
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 4. Procurement Route -->
            <div class="fc-section">
              <div class="fc-section-hdr" (click)="toggle('proc')">
                <span>▼ 4. Construction Procurement Route</span>
              </div>
              <div class="fc-section-body" *ngIf="!collapsed['proc']">
                <div class="fc-grid2">
                  <div class="fc-field">
                    <label class="fc-label">Procurement Route</label>
                    <select class="fc-select" [(ngModel)]="fc.procRoute" (ngModelChange)="dirty()">
                      <option *ngFor="let r of procRouteFull" [value]="r">{{ r }}</option>
                    </select>
                    <span style="font-size:11px;color:#64748b;margin-top:3px">
                      PSC Rate: {{ getPscPct() | number:'1.2-2' }}%
                    </span>
                  </div>
                  <div class="fc-field">
                    <label class="fc-label">Override PSC / PSSC Fee % (0 = use default)</label>
                    <input class="fc-input" type="number" [(ngModel)]="fc.overridePSCPct" step="0.01" min="0" max="100" (ngModelChange)="dirty()">
                  </div>
                </div>
              </div>
            </div>

            <!-- 5. Escalator -->
            <div class="fc-section">
              <div class="fc-section-hdr" (click)="toggle('escalator')">
                <span>▼ 5. Escalator</span>
              </div>
              <div class="fc-section-body" *ngIf="!collapsed['escalator']">
                <div class="fc-grid2">
                  <div class="fc-field">
                    <label class="fc-label">Contract Lead</label>
                    <select class="fc-select" [(ngModel)]="fc.contractLead" (ngModelChange)="dirty()">
                      <option value="">Please Select</option>
                      <option *ngFor="let s of primaryServices" [value]="s">{{ s }}</option>
                    </select>
                  </div>
                  <div class="fc-field">
                    <label class="fc-label">Supervisor(s)</label>
                    <select class="fc-select" [(ngModel)]="fc.supervisor" (ngModelChange)="dirty()">
                      <option value="">Please Select</option>
                      <option *ngFor="let s of primaryServices" [value]="s">{{ s }}</option>
                    </select>
                  </div>
                  <div class="fc-field">
                    <label class="fc-label">Inflation Required?</label>
                    <select class="fc-select" [(ngModel)]="fc.inflationRequired" (ngModelChange)="dirty()">
                      <option>No</option><option>Yes</option>
                    </select>
                  </div>
                  <div class="fc-field" *ngIf="fc.inflationRequired==='Yes'">
                    <label class="fc-label">Inflation Applied</label>
                    <select class="fc-select" [(ngModel)]="fc.inflationApplied" (ngModelChange)="dirty()">
                      <option>Outset</option><option>Midpoint</option><option>End</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <!-- 6. BIM / NEC -->
            <div class="fc-section">
              <div class="fc-section-hdr" (click)="toggle('bim')">
                <span>▼ 6. BIM / NEC Contract</span>
              </div>
              <div class="fc-section-body" *ngIf="!collapsed['bim']">
                <div class="fc-grid2">
                  <div class="fc-field">
                    <label class="fc-label">BIM Level</label>
                    <select class="fc-select" [(ngModel)]="fc.bim" (ngModelChange)="dirty()">
                      <option *ngFor="let b of bimOptions" [value]="b">{{ b }}</option>
                    </select>
                  </div>
                  <div class="fc-field">
                    <label class="fc-label">NEC Contract Form</label>
                    <select class="fc-select" [(ngModel)]="fc.necContractForm" (ngModelChange)="dirty()">
                      <option *ngFor="let n of necForms" [value]="n">{{ n }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- TIME CHARGES TAB -->
          <div *ngIf="subTab==='tc'" style="display:flex;flex-direction:column;flex:1">
            <div class="grid-toolbar">
              <input class="grid-search" placeholder="🔍 Search rows…" [(ngModel)]="tcSearch" (ngModelChange)="filterTC()">
              <span class="total-pill" *ngIf="tcTotal>0">Total: £{{ fmt(tcTotal) }}</span>
            </div>
            <div class="grid-wrap">
              <table class="eg-grid" style="min-width:1060px">
                <thead><tr>
                  <th class="eg-rownum">#</th>
                  <th>Discipline</th>
                  <th>Secondary Service</th>
                  <th>Supplier</th>
                  <th>RIBA Stage</th>
                  <th>Task Details</th>
                  <th>Staff Grade</th>
                  <th style="width:80px;text-align:right">Est Hours</th>
                  <th style="width:90px;text-align:right">Rate £/hr</th>
                  <th style="width:100px;text-align:right">Total £</th>
                  <th class="eg-actions"></th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let r of filteredTC; let i=index" [class.ce-row]="r.ceId">
                    <td class="eg-rownum">{{ i+1 }}</td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.discipline" (ngModelChange)="onTCGradeOrHoursChange(r)">
                        <option value="">— Select —</option>
                        <option *ngFor="let d of tcDisciplines" [value]="d">{{ d }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" [(ngModel)]="r.secondaryService" placeholder="If non-core…" (ngModelChange)="dirty()"></td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.supplier" (ngModelChange)="dirty()" style="min-width:120px">
                        <option value="">— Select —</option>
                        <option *ngFor="let s of suppliers" [value]="s">{{ s }}</option>
                      </select>
                    </td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.ribaStage" (ngModelChange)="dirty()">
                        <option [value]="null">—</option>
                        <option *ngFor="let n of [0,1,2,3,4,5,6,7]; trackBy: trkIdx" [value]="n">Stage {{ n }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" [(ngModel)]="r.taskDetails" placeholder="Task details…" style="min-width:120px" (ngModelChange)="dirty()"></td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.staffGrade" (ngModelChange)="onTCGradeChange(r)" style="min-width:120px">
                        <option value="">— Select —</option>
                        <option *ngFor="let g of staffGrades" [value]="g.grade">{{ g.grade }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" type="number" [(ngModel)]="r.estHours" min="0" step="0.25" (ngModelChange)="onTCHoursChange(r)" style="text-align:right;width:70px"></td>
                    <td><input class="eg-cell" type="number" [(ngModel)]="r.overrideRate" min="0" step="0.01" (ngModelChange)="onTCRateChange(r)" style="text-align:right;width:80px" [placeholder]="r.hourlyRate||(0)|number:'1.2-2'"></td>
                    <td style="text-align:right;font-weight:700;color:#d97706;padding-right:8px">{{ fmt(tcRowTotal(r)) }}</td>
                    <td class="eg-actions">
                      <button class="eg-act-btn eg-act-copy" (click)="copyTC(i)" title="Copy">⎘</button>
                      <button class="eg-act-btn" (click)="delTC(i)" title="Delete">✕</button>
                    </td>
                  </tr>
                  <tr *ngIf="!filteredTC.length">
                    <td colspan="11" class="empty-grid">No time charge rows. Click + Add Row below.</td>
                  </tr>
                </tbody>
                <tfoot *ngIf="fc.timeCharges.length>0">
                  <tr style="background:#f8fafc">
                    <td colspan="9" style="text-align:right;font-size:11.5px;font-weight:700;color:#5a6b8a;padding:7px 8px">Total</td>
                    <td style="text-align:right;font-weight:800;color:#d97706;font-size:13px;padding:7px 8px">£{{ fmt(tcTotal) }}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="grid-footer">
              <button class="add-row-btn" (click)="addTC()">＋ Add Row</button>
              <span class="total-pill" *ngIf="tcTotal>0">Total: £{{ fmt(tcTotal) }}</span>
              <span class="row-count">{{ fc.timeCharges.length }} rows</span>
            </div>
          </div>

          <!-- EXTERNAL CONSULTANCY TAB -->
          <div *ngIf="subTab==='ext'" style="display:flex;flex-direction:column;flex:1">
            <div class="grid-toolbar">
              <input class="grid-search" placeholder="🔍 Search rows…" [(ngModel)]="extSearch" (ngModelChange)="filterExt()">
              <span class="total-pill" *ngIf="extTotal>0">Total: £{{ fmt(extTotal) }}</span>
            </div>
            <div class="grid-wrap">
              <table class="eg-grid" style="min-width:800px">
                <thead><tr>
                  <th class="eg-rownum">#</th>
                  <th>Supplier</th>
                  <th>Discipline</th>
                  <th>Proc. Route</th>
                  <th>Services Description</th>
                  <th style="width:110px;text-align:right">Net Fee £</th>
                  <th class="eg-actions"></th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let r of filteredExt; let i=index" [class.ce-row]="r.ceId">
                    <td class="eg-rownum">{{ i+1 }}</td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.supplier" (ngModelChange)="dirty()" style="min-width:130px">
                        <option value="">— Select —</option>
                        <option *ngFor="let s of suppliers" [value]="s">{{ s }}</option>
                      </select>
                    </td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.discipline" (ngModelChange)="dirty()">
                        <option value="">— Select —</option>
                        <option *ngFor="let d of tcDisciplines" [value]="d">{{ d }}</option>
                      </select>
                    </td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.procRoute" (ngModelChange)="dirty()">
                        <option *ngFor="let p of procRoutes" [value]="p">{{ p }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" [(ngModel)]="r.services" placeholder="Services description…" style="min-width:180px" (ngModelChange)="dirty()"></td>
                    <td><input class="eg-cell" type="number" [(ngModel)]="r.netFee" min="0" step="0.01" (ngModelChange)="dirty()" style="text-align:right;width:100px"></td>
                    <td class="eg-actions">
                      <button class="eg-act-btn eg-act-copy" (click)="copyExt(i)" title="Copy">⎘</button>
                      <button class="eg-act-btn" (click)="delExt(i)" title="Delete">✕</button>
                    </td>
                  </tr>
                  <tr *ngIf="!filteredExt.length">
                    <td colspan="7" class="empty-grid">No external consultancy rows. Click + Add Row below.</td>
                  </tr>
                </tbody>
                <tfoot *ngIf="fc.nonSfr.length>0">
                  <tr style="background:#f8fafc">
                    <td colspan="5" style="text-align:right;font-size:11.5px;font-weight:700;color:#5a6b8a;padding:7px 8px">Total</td>
                    <td style="text-align:right;font-weight:800;color:#d97706;font-size:13px;padding:7px 8px">£{{ fmt(extTotal) }}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="grid-footer">
              <button class="add-row-btn" (click)="addExt()">＋ Add Row</button>
              <span class="total-pill" *ngIf="extTotal>0">Total: £{{ fmt(extTotal) }}</span>
              <span class="row-count">{{ fc.nonSfr.length }} rows</span>
            </div>
          </div>

          <!-- DISBURSEMENTS TAB -->
          <div *ngIf="subTab==='disb'" style="display:flex;flex-direction:column;flex:1">
            <div class="grid-toolbar">
              <input class="grid-search" placeholder="🔍 Search rows…" [(ngModel)]="disbSearch" (ngModelChange)="filterDisb()">
              <span class="total-pill" *ngIf="disbTotal>0">Total: £{{ fmt(disbTotal) }}</span>
            </div>
            <div class="grid-wrap">
              <table class="eg-grid" style="min-width:600px">
                <thead><tr>
                  <th class="eg-rownum">#</th>
                  <th>Supplier</th>
                  <th>Disbursement Details</th>
                  <th style="width:110px;text-align:right">Net Fee £</th>
                  <th class="eg-actions"></th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let r of filteredDisb; let i=index" [class.ce-row]="r.ceId">
                    <td class="eg-rownum">{{ i+1 }}</td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.supplier" (ngModelChange)="dirty()" style="min-width:130px">
                        <option value="">— Select —</option>
                        <option *ngFor="let s of suppliers" [value]="s">{{ s }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" [(ngModel)]="r.details" placeholder="Disbursement details…" style="min-width:200px" (ngModelChange)="dirty()"></td>
                    <td><input class="eg-cell" type="number" [(ngModel)]="r.netFee" min="0" step="0.01" (ngModelChange)="dirty()" style="text-align:right;width:100px"></td>
                    <td class="eg-actions">
                      <button class="eg-act-btn eg-act-copy" (click)="copyDisb(i)" title="Copy">⎘</button>
                      <button class="eg-act-btn" (click)="delDisb(i)" title="Delete">✕</button>
                    </td>
                  </tr>
                  <tr *ngIf="!filteredDisb.length">
                    <td colspan="5" class="empty-grid">No disbursements. Click + Add Row below.</td>
                  </tr>
                </tbody>
                <tfoot *ngIf="fc.disbursements.length>0">
                  <tr style="background:#f8fafc">
                    <td colspan="3" style="text-align:right;font-size:11.5px;font-weight:700;color:#5a6b8a;padding:7px 8px">Total</td>
                    <td style="text-align:right;font-weight:800;color:#d97706;font-size:13px;padding:7px 8px">£{{ fmt(disbTotal) }}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="grid-footer">
              <button class="add-row-btn" (click)="addDisb()">＋ Add Row</button>
              <span class="total-pill" *ngIf="disbTotal>0">Total: £{{ fmt(disbTotal) }}</span>
              <span class="row-count">{{ fc.disbursements.length }} rows</span>
            </div>
          </div>

        </ng-container>

        <!-- RIBA SUMMARY VIEW -->
        <div class="fc-panel" *ngIf="mainTab==='riba'">
          <div class="fc-section">
            <div class="fc-section-hdr"><span>RIBA Stage Summary — Services Matrix</span></div>
            <div style="overflow-x:auto">
              <table class="riba-table">
                <thead><tr>
                  <th>Service</th>
                  <th *ngFor="let s of ribaStages">{{ s.replace('Stage ','S') }}</th>
                  <th>Supplier</th>
                  <th>Route</th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let svc of fc.selectedServices">
                    <td>{{ svc.name }}</td>
                    <td *ngFor="let n of [0,1,2,3,4,5,6,7]; trackBy: trkIdx" style="text-align:center">
                      <span *ngIf="svc.ribaStages?.includes(n)" class="riba-check">✓</span>
                      <span *ngIf="!svc.ribaStages?.includes(n)" style="color:#e2e8f0">·</span>
                    </td>
                    <td style="font-size:12px">{{ svc.supplier||'—' }}</td>
                    <td style="font-size:12px">{{ svc.procRoute||'—' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="fc-section" style="margin-top:12px">
            <div class="fc-section-hdr"><span>Time Charges by Stage</span></div>
            <div style="overflow-x:auto;padding:12px">
              <table class="riba-table">
                <thead><tr>
                  <th>Discipline</th>
                  <th>Staff Grade</th>
                  <th style="text-align:right">Hours</th>
                  <th style="text-align:right">Rate £/hr</th>
                  <th style="text-align:right">Total £</th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let r of fc.timeCharges">
                    <td>{{ r.discipline||'—' }}</td>
                    <td>{{ r.staffGrade||'—' }}</td>
                    <td style="text-align:right">{{ r.estHours | number:'1.2-2' }}</td>
                    <td style="text-align:right">{{ (r.overrideRate||r.hourlyRate||0) | number:'1.2-2' }}</td>
                    <td style="text-align:right;font-weight:700;color:#d97706">£{{ fmt(tcRowTotal(r)) }}</td>
                  </tr>
                  <tr *ngIf="!fc.timeCharges.length">
                    <td colspan="5" class="empty-grid">No time charge rows.</td>
                  </tr>
                </tbody>
                <tfoot *ngIf="fc.timeCharges.length>0">
                  <tr style="background:#f8fafc">
                    <td colspan="4" style="text-align:right;font-weight:700;padding:7px">Total Time Charges</td>
                    <td style="text-align:right;font-weight:800;color:#d97706;padding:7px">£{{ fmt(tcTotal) }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Loading state -->
    <div *ngIf="!fc" style="flex:1;display:flex;align-items:center;justify-content:center;color:#94a3b8">
      Loading Fee Calculator…
    </div>

  </div>

  <!-- Edit Service Modal (inline) -->
  <div *ngIf="editingServiceIdx!==null" style="position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center" (click)="editingServiceIdx=null">
    <div style="background:#fff;border-radius:10px;padding:20px;min-width:420px;max-width:520px" (click)="$event.stopPropagation()" *ngIf="fc?.selectedServices[editingServiceIdx!] as svc">
      <div style="font-size:14px;font-weight:700;color:#1a2240;margin-bottom:14px">Edit Service: {{ svc.name }}</div>
      <div style="margin-bottom:12px">
        <label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:5px">RIBA Stages</label>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          <label *ngFor="let n of [0,1,2,3,4,5,6,7]; trackBy: trkIdx" style="display:flex;align-items:center;gap:4px;font-size:12px;padding:4px 8px;border-radius:5px;border:1px solid #dde2ee;cursor:pointer"
            [style.background]="svc.ribaStages?.includes(n)?'#eff6ff':'#fff'"
            [style.borderColor]="svc.ribaStages?.includes(n)?'#93c5fd':'#dde2ee'">
            <input type="checkbox" [checked]="svc.ribaStages?.includes(n)" (change)="toggleRibaStage(editingServiceIdx!, n, $any($event.target).checked)" style="margin:0">
            Stage {{ n }}
          </label>
        </div>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:14px">
        <button class="btn btn-ghost btn-sm" (click)="editingServiceIdx=null">Close</button>
      </div>
    </div>
  </div>
  `,
})
export class FeeCalculatorComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = new Subject<void>();
  private readonly save$ = new Subject<void>();
  private undoStack: string[] = [];

  opp: any = null;
  fc: any = null;

  mainTab: 'input' | 'riba' = 'input';
  subTab: 'config' | 'tc' | 'ext' | 'disb' = 'config';
  collapsed: Record<string, boolean> = {};
  saved = false;
  editingServiceIdx: number | null = null;

  tcSearch = ''; extSearch = ''; disbSearch = '';
  filteredTC: any[] = [];
  filteredExt: any[] = [];
  filteredDisb: any[] = [];

  // Readonly refs from constants
  readonly staffGrades = FC_STAFF_GRADES;
  readonly ribaStages = FC_RIBA_STAGES;
  readonly primaryServices = FC_PRIMARY_SERVICES;
  readonly suppliers = FC_SUPPLIERS;
  readonly procRoutes = FC_PROC_ROUTES;
  readonly procRouteFull = FC_PROC_ROUTE_FULL;
  readonly necForms = FC_NEC_FORMS;
  readonly bimOptions = FC_BIM;

  get tcDisciplines() {
    return this.fc
      ? [...(this.fc.selectedServices || []).map((s: any) => s.name), 'Non Core', 'Other']
      : FC_PRIMARY_SERVICES;
  }

  get totals() { return this.fc ? calcTotals(this.fc) : null; }
  get tcTotal()   { return (this.fc?.timeCharges||[]).reduce((a:number,r:any)=>a+this.tcRowTotal(r),0); }
  get extTotal()  { return (this.fc?.nonSfr||[]).reduce((a:number,r:any)=>a+(+r.netFee||0),0); }
  get disbTotal() { return (this.fc?.disbursements||[]).reduce((a:number,r:any)=>a+(+r.netFee||0),0); }
  get canUndo()   { return this.undoStack.length > 0; }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.get<any>(`/v1/opportunities/${id}`).subscribe(o => {
      this.opp = o;
      this.api.get<any>(`/v1/fee-calculator/${id}`).subscribe(fc => {
        this.fc = this.hydrate(fc);
        this.filterAll();
        this.cdr.markForCheck();
      });
    });

    this.save$.pipe(debounceTime(2000), takeUntil(this.destroy$)).subscribe(() => this.doSave());
  }

  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  private hydrate(fc: any) {
    const base = defaultFC();
    const merged = { ...base, ...fc };
    if (!merged.selectedServices?.length) merged.selectedServices = base.selectedServices;
    if (!merged.timeCharges) merged.timeCharges = [];
    if (!merged.nonSfr) merged.nonSfr = [];
    if (!merged.disbursements) merged.disbursements = [];
    if (!merged.ceList) merged.ceList = [];
    // Ensure each TC row has hourlyRate from grade
    merged.timeCharges.forEach((r: any) => {
      if (r.staffGrade && !r.hourlyRate) {
        r.hourlyRate = this.gradeRate(r.staffGrade);
      }
    });
    return merged;
  }

  private gradeRate(grade: string): number {
    return FC_STAFF_GRADES.find(g => g.grade === grade)?.rate || 0;
  }

  fmt(v: number): string { return fmtGBP(v); }
  getPscPct(): number { return FC_PSC_PCT[this.fc?.procRoute] || 2.45; }

  toggle(key: string) { this.collapsed[key] = !this.collapsed[key]; }

  dirty() {
    this.filterAll();
    this.cdr.markForCheck();
    this.save$.next();
  }

  filterAll() {
    this.filterTC(); this.filterExt(); this.filterDisb();
  }

  filterTC() {
    const q = this.tcSearch.toLowerCase();
    this.filteredTC = q
      ? (this.fc?.timeCharges||[]).filter((r: any) =>
          Object.values(r).some(v => String(v||'').toLowerCase().includes(q)))
      : [...(this.fc?.timeCharges||[])];
  }

  filterExt() {
    const q = this.extSearch.toLowerCase();
    this.filteredExt = q
      ? (this.fc?.nonSfr||[]).filter((r: any) =>
          Object.values(r).some(v => String(v||'').toLowerCase().includes(q)))
      : [...(this.fc?.nonSfr||[])];
  }

  filterDisb() {
    const q = this.disbSearch.toLowerCase();
    this.filteredDisb = q
      ? (this.fc?.disbursements||[]).filter((r: any) =>
          Object.values(r).some(v => String(v||'').toLowerCase().includes(q)))
      : [...(this.fc?.disbursements||[])];
  }

  tcRowTotal(r: any): number {
    const rate = r.overrideRate > 0 ? r.overrideRate : (r.hourlyRate || 0);
    return (rate * (r.estHours || 0)) + (r.inflationAmount || 0);
  }

  onConstructionValueChange() {
    const p = calcProgramme(this.fc.constructionValue);
    this.fc.preContractWeeks = p.pre;
    this.fc.postContractWeeks = p.post;
    this.dirty();
  }

  onTCGradeChange(r: any) {
    r.hourlyRate = this.gradeRate(r.staffGrade);
    this.dirty();
  }

  onTCGradeOrHoursChange(r: any) { this.dirty(); }

  onTCHoursChange(r: any) { this.dirty(); }

  onTCRateChange(r: any) { this.dirty(); }

  // ── Time Charges ──
  addTC() {
    this.pushUndo();
    this.fc.timeCharges.push({
      discipline:'', secondaryService:'', supplier:'', ribaStage:null,
      taskDetails:'', staffGrade:'', hourlyRate:0, estHours:0, overrideRate:0,
      inflationAmount:0, ceId:null,
    });
    this.dirty();
  }
  delTC(i: number) { this.pushUndo(); this.fc.timeCharges.splice(i,1); this.dirty(); }
  copyTC(i: number) { this.pushUndo(); this.fc.timeCharges.splice(i+1,0,{...this.fc.timeCharges[i]}); this.dirty(); }

  // ── External Consultancy ──
  addExt() {
    this.pushUndo();
    this.fc.nonSfr.push({ supplier:'', discipline:'', procRoute:'SFR', services:'', netFee:0, ceId:null });
    this.dirty();
  }
  delExt(i: number) { this.pushUndo(); this.fc.nonSfr.splice(i,1); this.dirty(); }
  copyExt(i: number) { this.pushUndo(); this.fc.nonSfr.splice(i+1,0,{...this.fc.nonSfr[i]}); this.dirty(); }

  // ── Disbursements ──
  addDisb() {
    this.pushUndo();
    this.fc.disbursements.push({ supplier:'', details:'', netFee:0, ceId:null });
    this.dirty();
  }
  delDisb(i: number) { this.pushUndo(); this.fc.disbursements.splice(i,1); this.dirty(); }
  copyDisb(i: number) { this.pushUndo(); this.fc.disbursements.splice(i+1,0,{...this.fc.disbursements[i]}); this.dirty(); }

  // ── Services ──
  editService(i: number) { this.editingServiceIdx = i; }

  toggleRibaStage(svcIdx: number, stage: number, checked: boolean) {
    const svc = this.fc.selectedServices[svcIdx];
    if (!svc.ribaStages) svc.ribaStages = [];
    if (checked && !svc.ribaStages.includes(stage)) svc.ribaStages.push(stage);
    else if (!checked) svc.ribaStages = svc.ribaStages.filter((s: number) => s !== stage);
    this.dirty();
  }

  // ── Undo ──
  pushUndo() {
    this.undoStack.push(JSON.stringify({
      tc:[...this.fc.timeCharges], nsf:[...this.fc.nonSfr], disb:[...this.fc.disbursements],
    }));
    if (this.undoStack.length > 20) this.undoStack.shift();
  }

  undo() {
    if (!this.undoStack.length) return;
    const snap = JSON.parse(this.undoStack.pop()!);
    this.fc.timeCharges = snap.tc; this.fc.nonSfr = snap.nsf; this.fc.disbursements = snap.disb;
    this.dirty();
  }

  save() { this.doSave(); }

  private doSave() {
    if (!this.fc || !this.opp) return;
    this.api.put(`/v1/fee-calculator/${this.opp.id}`, this.fc).subscribe(() => {
      this.saved = true;
      this.cdr.markForCheck();
      setTimeout(() => { this.saved = false; this.cdr.markForCheck(); }, 2500);
    });
  }

  print() { window.print(); }
}
