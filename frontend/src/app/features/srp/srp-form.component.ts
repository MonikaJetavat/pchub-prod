import {
  Component, OnInit, OnDestroy, inject, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';

const CONTRACT_TYPES = [
  'Option A NEC4 PSC (Service DA) Priced Contract',
  'Option C NEC4 PSC (Service DA) Target Contract',
  'Option E NEC4 PSC (Service DA) Cost Reimbursable',
  'Task Order',
  'PSSC Short Form',
];

const DELIVERY_METHODS = [
  'Service Delivery Agreement',
  'Short Service Delivery Agreement',
  'Term Service Delivery Agreement',
  'Task Order',
  'PSSC Short Form',
];

const LEADS = [
  'Monika Chauhan Jetawat (5313), Asite Solutions',
  'James Dawson',
  'Sarah Mitchell',
  'Priya Patel',
  'Tom Hargreaves',
  'Lucy Chen',
];

const TOMS_OPTIONS = [
  'NT18 - Total amount (£) spent in LOCAL supply chain',
  'NT19 - Total amount (£) spent through contract with LOCAL MSMEs',
  'NT61 - Fair Payment Percentage',
  'NT17 - Jobs created or safeguarded',
  'NT62 - Apprenticeships',
];

const PROCUREMENT_ROUTES = ['SFR', 'AFR', 'CPO', 'CT', 'BM', 'OB', 'CPS'];
const RIBA_STAGES = [0, 1, 2, 3, 4, 5, 6, 7];

const PRE_ENG_ITEMS = [
  "Advice on Scape, its Framework(s) and how each operates, (if not already provided)",
  "Options to engage the Partner using the Agreement, i.e. Service, Short Service or Term Service Delivery Agreements",
  "Advice on the proposed Services required to meet the Client's brief/commission requirements",
  "Discussion on the requirement for statutory approvals required as part of the Services",
  "A timetable for pre-engagement matters",
  "Supply-chain procurement of required subcontractors and suppliers",
  "CVs of staff proposed to undertake the Service(s)",
  "Indicative Price(s) of undertaking the proposed Services",
  "Survey(s) to assist pricing, programming and development of strategy",
  "A draft Delivery Agreement using the pre-agreed Model Delivery Agreement",
  "A draft Scope, Activity Schedule, Price List and/or Task Schedule",
  "Assist with the preparation of the initial NEC3 PSC Risk Register or NEC4 PSC Early Warning Register",
  "Attend meeting(s) to review design team procurement considerations",
  "Any additional pre-engagement services",
];

const EXTENDED_SCOPE = [
  { key: 's90',  label: '9.0 Schedule of Deliverables' },
  { key: 's100', label: '10.0 Design Specifications and Technical/Quality/Regulatory Standards' },
  { key: 's110', label: '11.0 BIM Requirements and Document Control' },
  { key: 's120', label: '12.0 Client Acceptance Criteria' },
  { key: 's130', label: '13.0 Risks and Opportunities' },
  { key: 's140', label: '14.0 Prerequisites, assumptions and constraints' },
  { key: 's150', label: '15.0 Requirements for Surveys, Investigations and Third-Party Historic Data' },
];

const SCOPE_SERVICE_ITEMS = [
  "Leadership: Acting as client's Lead Adviser, co-ordinating and integrating the work of all advisers and design team members.",
  "Representation: Provide and maintain effective representation of the wider client's design team in all formal communications with the client.",
  "Strategy Planning/Monitoring: Working with client and stakeholders to establish appropriate Strategies and oversee their fulfilment.",
  "Collaborative working: support effective collaboration between parties at each stage.",
  "Project Management: Effective management of project including programme and commercial control and procurement.",
  "Contract Management: fulfil contract management (Contract Lead) duties.",
  "Attendance/engagement: activities should include convening/arranging and attending/chairing meetings.",
  "BIM/Digital Execution: Support the effective delivery of BIM Services on every Commission.",
  "Compliance: Ensure compliance with the statutory requirements, e.g. advising the client of its CDM obligations.",
  "Communication: Maintaining effective communication between all project stakeholders throughout the life of the project.",
];

const PROCUREMENT_LEGEND: Array<[string, string]> = [
  ['SFR', 'Scape Framework Rates'],
  ['AFR', 'Alternative Framework Rates'],
  ['CPO', 'Client Proposed Organisation using rates agreed with the Client'],
  ['CT',  'Competitive tender with 3 or more suppliers'],
  ['BM',  'Negotiation with a single provider, using an alternative benchmark mechanism'],
  ['OB',  'Adopting an Open book arrangement with a single provider'],
  ['CPS', "Client determines that a Preferred Supplier's fee offers value for money"],
];

const NAV_SECTIONS = [
  { id: 'partA',    num: 'A',  label: 'Outline Service Requirements' },
  { id: 'partB',    num: 'B',  label: 'Pre-Engagement Checklist' },
  { id: 'partC',    num: 'C',  label: 'Detailed Service Requirements' },
  { id: 'sec6',     num: '6',  label: 'Scope of Services' },
  { id: 'sec8',     num: '8',  label: 'Delivery Programme' },
  { id: 'sec16',    num: '16', label: 'Fee' },
  { id: 'sec17',    num: '17', label: 'Delivery Agreement / PSC Model' },
  { id: 'approval', num: 'OK', label: 'SRP Approval' },
];

// CSV visibility rule: oriMsgCustomFields.Client_Specific_Value_For_Money_Driver
// shown when any VfM driver equals this exact string.
const VFM_CLIENT_SPECIFIC = '12) Client specific Value for Money Driver';

@Component({
  selector: 'app-srp-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './srp-form.component.html',
  styleUrls: ['./srp-form.component.css'],
})
export class SrpFormComponent implements OnInit, OnDestroy {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly destroy$ = new Subject<void>();
  private readonly save$ = new Subject<void>();

  opp: any = null;
  srp: any = null;
  fc: any = null;
  saved = false;
  navOpen = false;

  openCards: Record<string, boolean> = { partA: true };
  subOpen: Record<string, boolean> = { toms: true, sec64: false, appA: false, sec162: false };
  scopeBodyOpen: Record<string, boolean> = {};

  // Tracks email-format validation errors keyed by field flag (email1, email2).
  // Mirrors ValidateEmail() logic from pc.service.request.proposal.js.
  emailErrors: Record<string, boolean> = {};

  readonly contractTypes     = CONTRACT_TYPES;
  readonly deliveryMethods   = DELIVERY_METHODS;
  readonly leads             = LEADS;
  readonly tomsOptions       = TOMS_OPTIONS;
  readonly procRoutes        = PROCUREMENT_ROUTES;
  readonly ribaStages        = RIBA_STAGES;
  readonly preEngItems       = PRE_ENG_ITEMS;
  readonly extendedScope     = EXTENDED_SCOPE;
  readonly procLegend        = PROCUREMENT_LEGEND;
  readonly navSections       = NAV_SECTIONS;
  readonly scopeServiceItems = SCOPE_SERVICE_ITEMS;
  readonly vfmClientSpecific = VFM_CLIENT_SPECIFIC;

  isSectionDone(id: string): boolean {
    const s = this.srp;
    if (!s) return false;
    switch (id) {
      case 'partA': {
        // Core mandatory fields (CSV: required=true)
        const coreOk = !!(s.clientContactName && s.clientContactTel && s.clientContactPosition &&
                          s.commissionLead && s.commissionLeadEmail && s.commissionLeadMobile &&
                          s.serviceManager && s.commissionDesc && s.commissionPostCode);
        // Conditional comments are mandatory when their parent toggle is 'Yes' (CSV visibility rules)
        const progOk   = s.hasProgramme      !== 'Yes' || !!s.hasProgrammeComment;
        const briefOk  = s.hasProjectBrief   !== 'Yes' || !!s.hasProjectBriefComment;
        const schemeOk = s.hasSchemeLayout   !== 'Yes' || !!s.hasSchemeLayoutComment;
        // CSV: Client_Proposed_Organisations_Comment required when clientProposedOrg==='Yes'
        const cpoOk    = s.clientProposedOrg !== 'Yes' || !!s.clientProposedOrgComment;
        return coreOk && progOk && briefOk && schemeOk && cpoOk;
      }
      case 'partC':
        return !!(s.projectOverview && s.projectSuccessCriteria);
      case 'approval':
        return !!(s.srpDeliveryMethod && s.commercialLead);
      default:
        return false;
    }
  }

  get doneCount(): number {
    return this.navSections.filter(sec => this.isSectionDone(sec.id)).length;
  }

  get progressPct(): number {
    return Math.round(this.doneCount / this.navSections.length * 100);
  }

  get mandatoryComplete(): boolean {
    return this.isSectionDone('partA') && this.isSectionDone('partC');
  }

  get missingCount(): number {
    const s = this.srp;
    if (!s) return 11;
    // Static mandatory fields from CSV (required=true, always visible)
    const checks: (string | null | undefined)[] = [
      s.clientContactName, s.clientContactTel, s.clientContactPosition,
      s.commissionLead, s.commissionLeadEmail, s.commissionLeadMobile,
      s.serviceManager, s.commissionDesc, s.commissionPostCode,
      s.projectOverview, s.projectSuccessCriteria,
    ];
    // Conditional mandatory fields: required only when parent Yes/No toggle is 'Yes'
    if (s.hasProgramme     === 'Yes') checks.push(s.hasProgrammeComment);
    if (s.hasProjectBrief  === 'Yes') checks.push(s.hasProjectBriefComment);
    if (s.hasSchemeLayout  === 'Yes') checks.push(s.hasSchemeLayoutComment);
    // CSV: Client_Proposed_Organisations_Comment — required when clientProposedOrg==='Yes'
    if (s.clientProposedOrg === 'Yes') checks.push(s.clientProposedOrgComment);
    return checks.filter(v => !v).length;
  }

  /**
   * CSV visibilityRule: oriMsgCustomFields.Client_Specific_Value_For_Money_Driver
   * Shown when any VfM driver equals the "12) Client specific" string.
   */
  get isClientSpecificVfm(): boolean {
    const s = this.srp;
    if (!s) return false;
    const v = VFM_CLIENT_SPECIFIC;
    return s.vfmDriver1 === v || s.vfmDriver2 === v || s.vfmDriver3 === v;
  }

  /**
   * Angular equivalent of calculateSVAddvalue(currRow) from pc.service.request.proposal.js.
   * Stores the computed SV_Add_Value back on the row so it is persisted when tomsRows is saved.
   * Also acts as calcSVTotalValue() — tomsTotal reads the stored svAdd values.
   * CSV: tomsmeasure.Target eventChange="calculateSVAddvalue(tomsmeasure);calcSVTotalValue()"
   */
  calcTomsRow(row: any): void {
    const proxy  = +(row.svProxy  || 0);
    const target = +(row.target   || 0);
    if (proxy && target) {
      row.svAdd = Math.round(proxy * target * 100) / 100;   // roundDecimal equivalent
    } else if (!proxy && target) {
      row.svAdd = Math.round(target * 100) / 100;            // no proxy → svAdd = target
    } else {
      row.svAdd = 0;
    }
    this.cdr.markForCheck();
  }

  get tomsTotal(): number {
    // Reads the stored svAdd set by calcTomsRow() — mirrors calcSVTotalValue() summation.
    return (this.srp?.tomsRows || []).reduce(
      (a: number, r: any) => a + (+(r.svAdd ?? r.target * r.svProxy) || 0), 0
    );
  }

  get statusBadge(): string {
    const map: Record<string, string> = {
      Draft: 'badge-blue', SentForApproval: 'badge-amber',
      Approved: 'badge-green', Rejected: 'badge-red',
    };
    return map[this.srp?.status] || 'badge-blue';
  }

  get statusLabel(): string {
    const map: Record<string, string> = {
      Draft: 'Draft', SentForApproval: 'Sent for Approval',
      Approved: 'Approved', Rejected: 'Rejected',
    };
    return map[this.srp?.status] || 'Draft';
  }

  get fcPrimeCore(): number        { return +(this.fc?.totalPrimeCore || 0); }
  get fcCore(): number             { return +(this.fc?.totalCore || 0); }
  get fcTime(): number             { return +(this.fc?.totalTimeCharges || 0); }
  get fcExt(): number              { return +(this.fc?.totalExtConsultancy || 0); }
  get fcDisb(): number             { return +(this.fc?.totalDisbursements || 0); }
  get fcPSC(): number              { return +(this.fc?.pscFee || 0); }
  get fcGrand(): number            { return +(this.fc?.grandTotal || 0); }
  get fcSubDE(): number            { return this.fcPrimeCore + this.fcCore + this.fcTime + this.fcExt; }
  get fcTotalCommission(): number  { return this.fcSubDE + this.fcPSC; }
  get fcOverall(): number          { return this.fcTotalCommission + this.fcDisb; }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.api.get<any>(`/v1/opportunities/${id}`).subscribe(o => {
      this.opp = o;
      this.fc = o.feeCalculator || null;
      this.api.get<any>(`/v1/srp/${id}`).subscribe(s => {
        if (!s.tomsRows || !s.tomsRows.length) {
          s.tomsRows = [
            { ref: 'NT18 - Total amount spent in LOCAL supply chain through the contract', comments: '', unit: 'GBP', svProxy: 0.91, target: 0, svAdd: 0 },
            { ref: 'NT19 - Total amount spent through contract with LOCAL MSMEs',          comments: '', unit: 'GBP', svProxy: 0.91, target: 0, svAdd: 0 },
            { ref: 'NT61 - Fair Payment - Percentage of invoices paid within 30 days',     comments: '', unit: '%',   svProxy: 0.00, target: 100, svAdd: 0 },
            { ref: 'Please Select', comments: '', unit: 'GBP', svProxy: 0.00, target: 0, svAdd: 0 },
            { ref: 'Please Select', comments: '', unit: 'GBP', svProxy: 0.00, target: 0, svAdd: 0 },
            { ref: 'Please Select', comments: '', unit: 'GBP', svProxy: 0.00, target: 0, svAdd: 0 },
            { ref: 'Please Select', comments: '', unit: 'GBP', svProxy: 0.00, target: 0, svAdd: 0 },
            { ref: 'Please Select', comments: '', unit: 'GBP', svProxy: 0.00, target: 0, svAdd: 0 },
          ];
        } else {
          // Rows loaded from DB may not have svAdd yet — backfill via calcTomsRow
          s.tomsRows.forEach((r: any) => { if (r.svAdd === undefined) this.calcTomsRow(r); });
        }
        if (!s.deliveryRows || !s.deliveryRows.length) {
          s.deliveryRows = [
            { stage: 'Stage 2', activity: 'Concept Design',       startDate: '', endDate: '' },
            { stage: 'Stage 3', activity: 'Spatial Coordination',  startDate: '', endDate: '' },
            { stage: 'Stage 4', activity: 'Technical Design',      startDate: '', endDate: '' },
            { stage: 'Stage 5', activity: 'Construction',          startDate: '', endDate: '' },
          ];
        }
        if (!s.preEngagementItems) s.preEngagementItems = {};
        if (!s.scopeSelections)    s.scopeSelections = {};
        // Initialise conditional comment fields (CSV visibility rules)
        if (s.hasProgrammeComment    === undefined) s.hasProgrammeComment    = '';
        if (s.hasProjectBriefComment === undefined) s.hasProjectBriefComment = '';
        if (s.hasSchemeLayoutComment === undefined) s.hasSchemeLayoutComment = '';
        // CSV: Client_Proposed_Organisations_Comment — conditional required field
        if (s.clientProposedOrg        === undefined) s.clientProposedOrg        = 'No';
        if (s.clientProposedOrgComment === undefined) s.clientProposedOrgComment = '';
        // CSV: Client_Specific_Value_For_Money_Driver — conditional field
        if (s.clientSpecificVfmDriver  === undefined) s.clientSpecificVfmDriver  = '';
        if (o.services) {
          (o.services as string[]).forEach((svc: string) => {
            if (!s.scopeSelections[svc]) {
              s.scopeSelections[svc] = {
                supplier: '',
                stages: { 0: 'No', 1: 'No', 2: 'No', 3: 'No', 4: 'No', 5: 'No', 6: 'No', 7: 'No' },
                procRoute: 'SFR',
                isShown: 'Yes',
                scopeItems: {},
              };
            } else {
              // Back-fill scope checkbox model for existing saved selections
              if (!s.scopeSelections[svc].scopeItems) {
                s.scopeSelections[svc].scopeItems = {};
              }
              if (s.scopeSelections[svc].isShown === undefined) {
                s.scopeSelections[svc].isShown = 'Yes';
              }
            }
            // Default all scope item checkboxes to checked (mirrors static checked in original form)
            this.scopeServiceItems.forEach((_, i) => {
              if (!s.scopeSelections[svc].scopeItems[i]) {
                s.scopeSelections[svc].scopeItems[i] = { db1: true, db2: true, trad: true };
              }
            });
          });
        }
        this.srp = s;
        this.cdr.markForCheck();
      });
    });
    this.save$.pipe(debounceTime(1500), takeUntil(this.destroy$)).subscribe(() => this.doSave());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleCard(id: string): void { this.openCards[id] = !this.openCards[id]; this.cdr.markForCheck(); }
  isCardOpen(id: string): boolean { return !!this.openCards[id]; }
  toggleSub(id: string): void { this.subOpen[id] = !this.subOpen[id]; this.cdr.markForCheck(); }
  isSubOpen(id: string): boolean { return !!this.subOpen[id]; }

  navJump(id: string): void {
    if (!this.openCards[id]) { this.openCards[id] = true; this.cdr.markForCheck(); }
    setTimeout(() => document.getElementById('srp-card-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    this.navOpen = false;
  }

  trkIdx(i: number): number { return i; }

  /**
   * Mirrors ValidateEmail() from pc.service.request.proposal.js.
   * Validates one or more comma-separated email addresses on blur.
   * Sets emailErrors[flag]=true when any address is malformed.
   */
  validateEmail(value: string | null | undefined, flag: string): void {
    if (!value) { this.emailErrors[flag] = false; return; }
    const emails = (value + ',').split(',');
    const pattern = /^(([^<>()[\]\.,;:\s@"]+(\.([^<>()[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,}))$/i;
    this.emailErrors[flag] = emails.some(e => e.trim() && !pattern.test(e.trim()));
    this.cdr.markForCheck();
  }

  /**
   * Returns remaining characters for a maxlength-bounded field.
   * Used in templates to show live character counters.
   */
  charsLeft(text: string | null | undefined, max: number): number {
    return max - (text?.length ?? 0);
  }

  /**
   * Angular equivalent of onSubSectionSelection(serv, secServ, currRow) from pc.service.request.proposal.js.
   * Called when any scope-body checkbox (D&B1, D&B2, Traditional) changes.
   * Sets scopeSelections[svc].isShown='Yes'/'No' based on whether any item is still checked.
   * CSV: serv.Design_Build_Single_Stage / Design_Build_Two_Stage / Traditional
   *      eventChange="onSubSectionSelection(serv,secServ,currRow)"
   */
  onScopeItemChange(svc: string): void {
    const sel = this.srp?.scopeSelections?.[svc];
    if (!sel?.scopeItems) return;
    const hasAny = this.scopeServiceItems.some((_, i) => {
      const item = sel.scopeItems[i];
      return item && (item.db1 || item.db2 || item.trad);
    });
    sel.isShown = hasAny ? 'Yes' : 'No';
    this.autoSave();
    this.cdr.markForCheck();
  }

  toggleScopeBody(svc: string): void {
    this.scopeBodyOpen[svc] = !this.scopeBodyOpen[svc];
    this.cdr.markForCheck();
  }
  isScopeBodyOpen(svc: string): boolean { return !!this.scopeBodyOpen[svc]; }

  addDeliveryRow(): void {
    if (!this.srp) return;
    this.srp.deliveryRows = [...(this.srp.deliveryRows || []), { stage: '', activity: '', startDate: '', endDate: '' }];
    this.autoSave();
  }

  removeDeliveryRow(i: number): void {
    if (!this.srp) return;
    this.srp.deliveryRows = (this.srp.deliveryRows as any[]).filter((_, idx) => idx !== i);
    this.autoSave();
  }

  autoSave(): void { this.save$.next(); }
  saveDraft(): void { this.doSave(); }

  private doSave(): void {
    if (!this.srp || !this.opp) return;
    this.api.put(`/v1/srp/${this.opp.id}`, this.srp).subscribe(() => {
      this.saved = true;
      this.cdr.markForCheck();
      setTimeout(() => { this.saved = false; this.cdr.markForCheck(); }, 2500);
    });
  }

  sendForApproval(): void {
    if (!this.opp) return;
    this.doSave();
    this.api.post(`/v1/srp/${this.opp.id}/send-approval`, {}).subscribe(() => {
      this.srp = { ...this.srp, status: 'SentForApproval' };
      this.cdr.markForCheck();
    });
  }

  approve(): void {
    if (!this.opp) return;
    this.api.post(`/v1/srp/${this.opp.id}/approve`, { comments: this.srp.approvalComments || 'Approved' })
      .subscribe(() => { this.srp = { ...this.srp, status: 'Approved', approvedAt: new Date().toISOString() }; this.cdr.markForCheck(); });
  }

  reject(): void {
    if (!this.opp) return;
    this.api.post(`/v1/srp/${this.opp.id}/reject`, { comments: this.srp.approvalComments || 'Rejected' })
      .subscribe(() => { this.srp = { ...this.srp, status: 'Rejected' }; this.cdr.markForCheck(); });
  }

  printSRP(): void { window.print(); }
}
