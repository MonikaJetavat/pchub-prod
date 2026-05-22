import {
  FilterBarComponent,
  PaginatorComponent
} from "./chunk-U4P3JNUZ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VJ5BUTS4.js";
import {
  ApiService,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  SlicePipe,
  Subject,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YNIEOD7T.js";

// src/app/features/operations/operations.component.ts
var _c0 = (a0) => ["/opportunities", a0];
function ActivityCenterComponent_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("value", m_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1);
  }
}
function ActivityCenterComponent_tr_59_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275text(1, "View \u2192");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, e_r2.opportunityId));
  }
}
function ActivityCenterComponent_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 30)(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, ActivityCenterComponent_tr_59_a_18_Template, 2, 3, "a", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 11, e_r2.createdAt, "dd MMM HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", (e_r2.user == null ? null : e_r2.user.avatarColor) || "#3d7eff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((e_r2.user == null ? null : e_r2.user.initials) || "SY");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((e_r2.user == null ? null : e_r2.user.name) || "System");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.actionBadge(e_r2.action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r2.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.entityType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", e_r2.opportunityId);
  }
}
function ActivityCenterComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading() ? "Loading activity\u2026" : "No activity found.");
  }
}
var _c1 = (a0) => ["/opportunities", a0, "srp"];
var _c2 = () => ["/invoices/client"];
var _c3 = () => ["/ce"];
var _c4 = () => ["/project-pi"];
function PendingActionsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5, "SRP Approvals Overdue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10, "Overdue Invoices");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 8)(12, "div", 11);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15, "Open CE Events");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10);
    \u0275\u0275text(20, "PIs Awaiting Approval");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r1 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((d_r1.sections == null ? null : d_r1.sections.srpApprovals == null ? null : d_r1.sections.srpApprovals.count) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((d_r1.sections == null ? null : d_r1.sections.overdueInvoices == null ? null : d_r1.sections.overdueInvoices.count) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((d_r1.sections == null ? null : d_r1.sections.openCEs == null ? null : d_r1.sections.openCEs.count) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((d_r1.sections == null ? null : d_r1.sections.pendingPIs == null ? null : d_r1.sections.pendingPIs.count) || 0);
  }
}
function PendingActionsComponent_div_7_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 26);
    \u0275\u0275text(11, "Review SRP");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.opportunity == null ? null : item_r2.opportunity.commNum);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.opportunity == null ? null : item_r2.opportunity.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r2.opportunity == null ? null : item_r2.opportunity.clientName, " \xB7 Lead: ", item_r2.opportunity == null ? null : item_r2.opportunity.lead == null ? null : item_r2.opportunity.lead.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.daysSince(item_r2.sentForApprovalAt), "d waiting");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c1, item_r2.opportunityId));
  }
}
function PendingActionsComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    \u0275\u0275text(3, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "SRP Approvals \u2014 Waiting for Commercial Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275template(9, PendingActionsComponent_div_7_div_1_div_9_Template, 12, 8, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r4.sections.srpApprovals.count);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", d_r4.sections.srpApprovals.items);
  }
}
function PendingActionsComponent_div_7_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 30);
    \u0275\u0275text(12, "View Invoice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.invoiceRef);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5.schedule == null ? null : item_r5.schedule.opportunity == null ? null : item_r5.schedule.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r5.schedule == null ? null : item_r5.schedule.opportunity == null ? null : item_r5.schedule.opportunity.clientName, " \xB7 \xA3", \u0275\u0275pipeBind2(8, 6, item_r5.totalAmount, "1.0-0"), " outstanding");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.daysSince(item_r5.issuedAt), "d overdue");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c2));
  }
}
function PendingActionsComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 27);
    \u0275\u0275text(3, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Overdue Client Invoices \u2014 Payment Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275template(9, PendingActionsComponent_div_7_div_2_div_9_Template, 13, 10, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r4.sections.overdueInvoices.count);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", d_r4.sections.overdueInvoices.items);
  }
}
function PendingActionsComponent_div_7_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 30);
    \u0275\u0275text(12, "View CE");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r6.ceRef);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r6.opportunity == null ? null : item_r6.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", item_r6.opportunity == null ? null : item_r6.opportunity.clientName, " \xB7 \xA3", \u0275\u0275pipeBind2(8, 7, item_r6.value, "1.0-0"), " \xB7 ", item_r6.stage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.daysSince(item_r6.raisedAt), "d open");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c3));
  }
}
function PendingActionsComponent_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 31);
    \u0275\u0275text(3, "\u25C6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Open Compensation Events \u2014 Awaiting Assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275template(9, PendingActionsComponent_div_7_div_3_div_9_Template, 13, 11, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r4.sections.openCEs.count);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", d_r4.sections.openCEs.items);
  }
}
function PendingActionsComponent_div_7_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22)(3, "span", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 30);
    \u0275\u0275text(9, "Review PI");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r7.opportunity == null ? null : item_r7.opportunity.commNum);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.opportunity == null ? null : item_r7.opportunity.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Lead: ", item_r7.opportunity == null ? null : item_r7.opportunity.lead == null ? null : item_r7.opportunity.lead.name, " \xB7 v", item_r7.version);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c4));
  }
}
function PendingActionsComponent_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 34);
    \u0275\u0275text(3, "\u25C7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4");
    \u0275\u0275text(5, "Project PIs \u2014 Pending Approval");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275template(9, PendingActionsComponent_div_7_div_4_div_9_Template, 10, 6, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r4.sections.pendingPIs.count);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", d_r4.sections.pendingPIs.items);
  }
}
function PendingActionsComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38);
    \u0275\u0275text(3, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 39);
    \u0275\u0275text(5, "All Actions Clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275text(7, "No pending actions require your attention.");
    \u0275\u0275elementEnd()()();
  }
}
function PendingActionsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, PendingActionsComponent_div_7_div_1_Template, 10, 2, "div", 13)(2, PendingActionsComponent_div_7_div_2_Template, 10, 2, "div", 13)(3, PendingActionsComponent_div_7_div_3_Template, 10, 2, "div", 13)(4, PendingActionsComponent_div_7_div_4_Template, 10, 2, "div", 13)(5, PendingActionsComponent_div_7_div_5_Template, 8, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r4.sections == null ? null : d_r4.sections.srpApprovals == null ? null : d_r4.sections.srpApprovals.count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r4.sections == null ? null : d_r4.sections.overdueInvoices == null ? null : d_r4.sections.overdueInvoices.count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r4.sections == null ? null : d_r4.sections.openCEs == null ? null : d_r4.sections.openCEs.count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r4.sections == null ? null : d_r4.sections.pendingPIs == null ? null : d_r4.sections.pendingPIs.count);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !d_r4.total);
  }
}
function PendingActionsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 41);
    \u0275\u0275text(2, "Loading pending actions\u2026");
    \u0275\u0275elementEnd()();
  }
}
var _c5 = "\n[_nghost-%COMP%] {\n  display: block;\n}\n.ops-shell[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.ops-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.ops-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.ops-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.kpi-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.kpi-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.kpi-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.sla-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.sla-track[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.sla-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: inherit;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 3px 9px;\n  font-size: 11.5px;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.action-section[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.action-section-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 7px 7px 0 0;\n  cursor: pointer;\n}\n.action-section-hdr[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n  flex: 1;\n}\n.action-count[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n}\n.action-count.amber[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.action-count.blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.action-body[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 7px 7px;\n  overflow: hidden;\n}\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-bottom: 1px solid #f0f2f7;\n  font-size: 12px;\n}\n.action-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.action-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.action-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.action-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a2240;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-meta[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 11px;\n}\n.overdue-badge[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tl-entry[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #f5f7fb;\n  font-size: 12px;\n}\n.tl-entry[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tl-dot[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.tl-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tl-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a2240;\n}\n.tl-meta[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 11px;\n  margin-top: 1px;\n}\n.cal-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cal-day-hdr[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 6px;\n  text-align: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #5a6b8a;\n}\n.cal-cell[_ngcontent-%COMP%] {\n  background: #fff;\n  min-height: 80px;\n  padding: 4px;\n}\n.cal-cell.other-month[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.cal-cell.today[_ngcontent-%COMP%] {\n  background: #eff6ff;\n}\n.cal-date[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 3px;\n}\n.cal-event[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  margin-bottom: 1px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cal-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cal-month[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.cal-view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.cal-view-btn[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 5px;\n  border: 1px solid #dde2ee;\n  background: #fff;\n  font-size: 11.5px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #5a6b8a;\n}\n.cal-view-btn.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #5a6b8a;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=operations.component.css.map */";
var _c6 = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function OperationsCalendarComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1);
  }
}
function OperationsCalendarComponent_div_21_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ev_r2 = ctx.$implicit;
    \u0275\u0275styleProp("background", ev_r2.color + "20")("color", ev_r2.color);
    \u0275\u0275property("title", ev_r2.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ev_r2.title, " ");
  }
}
function OperationsCalendarComponent_div_21_div_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", cell_r3.events.length - 3, " more");
  }
}
function OperationsCalendarComponent_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, OperationsCalendarComponent_div_21_div_3_div_3_Template, 2, 6, "div", 24);
    \u0275\u0275pipe(4, "slice");
    \u0275\u0275template(5, OperationsCalendarComponent_div_21_div_3_div_5_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    \u0275\u0275classProp("other-month", !cell_r3.current)("today", cell_r3.isToday);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", cell_r3.isToday ? "#2563eb" : "")("font-weight", cell_r3.isToday ? "800" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r3.day);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(4, 11, cell_r3.events, 0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cell_r3.events.length > 3);
  }
}
function OperationsCalendarComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 12);
    \u0275\u0275template(2, OperationsCalendarComponent_div_21_div_2_Template, 2, 1, "div", 13)(3, OperationsCalendarComponent_div_21_div_3_Template, 6, 15, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "div", 16);
    \u0275\u0275element(6, "div", 17);
    \u0275\u0275text(7, " Invoice Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275element(9, "div", 18);
    \u0275\u0275text(10, " CE Milestone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 16);
    \u0275\u0275element(12, "div", 19);
    \u0275\u0275text(13, " Delegation Expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 16);
    \u0275\u0275element(15, "div", 20);
    \u0275\u0275text(16, " Survey Deadline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(2, _c6));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.calCells);
  }
}
function OperationsCalendarComponent_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, "No events in the next 30 days.");
    \u0275\u0275elementEnd();
  }
}
function OperationsCalendarComponent_div_22_div_7_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ev_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 8, ev_r5.date, "EEE dd MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ev_r5.color + "20")("color", ev_r5.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ev_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ev_r5.subtitle);
  }
}
function OperationsCalendarComponent_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Details");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275template(13, OperationsCalendarComponent_div_22_div_7_tr_13_Template, 11, 11, "tr", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx_r3.events());
  }
}
function OperationsCalendarComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3, "Upcoming Events \u2014 Next 30 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, OperationsCalendarComponent_div_22_div_6_Template, 2, 0, "div", 32)(7, OperationsCalendarComponent_div_22_div_7_Template, 14, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r3.events().length, " events");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.events().length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.events().length);
  }
}
var ActivityCenterComponent = class _ActivityCenterComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.rows = signal([], ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.total = signal(0, ...ngDevMode ? [{ debugName: "total" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = signal(50, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pendingCount = signal(0, ...ngDevMode ? [{ debugName: "pendingCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.todayCount = signal(0, ...ngDevMode ? [{ debugName: "todayCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.uniqueUsers = signal(0, ...ngDevMode ? [{ debugName: "uniqueUsers" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search = "";
    this.entityFilter = "";
    this.dateFrom = "";
    this.dateTo = "";
    this.modules = ["opportunities", "srps", "fee_calculators", "ce_events", "invoices", "suppliers", "users", "delegations"];
  }
  ngOnInit() {
    this.load();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  load() {
    this.loading.set(true);
    const params = { page: this.page(), pageSize: this.pageSize() };
    if (this.search)
      params.search = this.search;
    if (this.entityFilter)
      params.entityType = this.entityFilter;
    if (this.dateFrom)
      params.from = this.dateFrom;
    if (this.dateTo)
      params.to = this.dateTo;
    this.api.getList("/v1/audit", params).pipe(takeUntil(this.destroy$)).subscribe({
      next: (r) => {
        this.rows.set(r.data);
        this.total.set(r.meta.total);
        this.loading.set(false);
        this.uniqueUsers.set(new Set(r.data.map((e) => e.userId).filter(Boolean)).size);
        const today = (/* @__PURE__ */ new Date()).toDateString();
        this.todayCount.set(r.data.filter((e) => new Date(e.createdAt).toDateString() === today).length);
      },
      error: () => this.loading.set(false)
    });
    this.api.get("/v1/reporting/pending-actions").pipe(takeUntil(this.destroy$)).subscribe((r) => {
      this.pendingCount.set(r?.total || 0);
    });
  }
  onSearch(q) {
    this.search = q;
    this.page.set(1);
    this.load();
  }
  onPage(e) {
    this.page.set(e.page);
    this.pageSize.set(e.pageSize);
    this.load();
  }
  trkId(_, r) {
    return r.id;
  }
  actionBadge(a) {
    return { Create: "badge-green", Update: "badge-blue", Approve: "badge-green", Reject: "badge-red", Delete: "badge-red", Login: "badge-purple", Logout: "badge-gray", Export: "badge-amber", System: "badge-gray" }[a] || "badge-gray";
  }
  exportCSV() {
    const rows = this.rows();
    const csv = [
      "Timestamp,User,Action,Module,Description",
      ...rows.map((r) => `"${r.createdAt}","${r.user?.name || "System"}","${r.action}","${r.entityType}","${r.description?.replace(/"/g, "'")}"`)
    ].join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = `activity_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
  }
  static {
    this.\u0275fac = function ActivityCenterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivityCenterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivityCenterComponent, selectors: [["app-activity-center"]], decls: 62, vars: 18, consts: [[1, "ops-shell"], [1, "ops-header"], [1, "ops-title"], [1, "ops-sub"], [1, "kpi-strip"], [1, "kpi"], [1, "kpi-val"], [1, "kpi-label"], [1, "kpi-val", "amber"], [1, "kpi-val", "green"], [1, "card"], [1, "card-header"], [1, "card-title"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 2, "border", "1px solid #dde2ee", "font-size", "12px", "padding", "4px 8px", "border-radius", "5px", "background", "#fff", "cursor", "pointer", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "date", 2, "border", "1px solid #dde2ee", "border-radius", "5px", "padding", "4px 8px", "font-size", "12px", "font-family", "inherit", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["placeholder", "Search description, module, user\u2026", 3, "searchChange", "count"], [1, "tbl-wrap"], [2, "width", "130px"], [2, "width", "120px"], [2, "width", "100px"], [2, "width", "80px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [3, "value"], [1, "text-muted", 2, "white-space", "nowrap", "font-size", "11.5px"], [2, "display", "flex", "align-items", "center", "gap", "5px"], [1, "tl-dot", 2, "width", "22px", "height", "22px", "font-size", "8px"], [2, "font-size", "12px"], [1, "badge"], [1, "text-muted"], [2, "max-width", "260px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap", "font-size", "12px"], ["style", "color:#2563eb;font-size:11px;font-weight:600", 3, "routerLink", 4, "ngIf"], [2, "color", "#2563eb", "font-size", "11px", "font-weight", "600", 3, "routerLink"], ["colspan", "6", 1, "empty"]], template: function ActivityCenterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Activity Center");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Live audit trail \u2014 all workflow events across the platform");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275text(12, "Total Events");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5)(14, "div", 8);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 7);
        \u0275\u0275text(17, "Pending Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 5)(19, "div", 9);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 7);
        \u0275\u0275text(22, "Activity Today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 5)(24, "div", 6);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 7);
        \u0275\u0275text(27, "Active Users");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 10)(29, "div", 11)(30, "span", 12);
        \u0275\u0275text(31, "Audit Timeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 13)(33, "select", 14);
        \u0275\u0275twoWayListener("ngModelChange", function ActivityCenterComponent_Template_select_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.entityFilter, $event) || (ctx.entityFilter = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ActivityCenterComponent_Template_select_ngModelChange_33_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(34, "option", 15);
        \u0275\u0275text(35, "All Modules");
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, ActivityCenterComponent_option_36_Template, 2, 2, "option", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function ActivityCenterComponent_Template_input_ngModelChange_37_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateFrom, $event) || (ctx.dateFrom = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ActivityCenterComponent_Template_input_ngModelChange_37_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "input", 17);
        \u0275\u0275twoWayListener("ngModelChange", function ActivityCenterComponent_Template_input_ngModelChange_38_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.dateTo, $event) || (ctx.dateTo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ActivityCenterComponent_Template_input_ngModelChange_38_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 18);
        \u0275\u0275listener("click", function ActivityCenterComponent_Template_button_click_39_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(40, "Export");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "app-filter-bar", 19);
        \u0275\u0275listener("searchChange", function ActivityCenterComponent_Template_app_filter_bar_searchChange_41_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 20)(43, "table")(44, "thead")(45, "tr")(46, "th", 21);
        \u0275\u0275text(47, "Timestamp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th", 22);
        \u0275\u0275text(49, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "th", 23);
        \u0275\u0275text(51, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th");
        \u0275\u0275text(53, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th");
        \u0275\u0275text(55, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "th", 24);
        \u0275\u0275text(57, "Commission");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "tbody");
        \u0275\u0275template(59, ActivityCenterComponent_tr_59_Template, 19, 14, "tr", 25)(60, ActivityCenterComponent_tr_60_Template, 3, 1, "tr", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "app-paginator", 27);
        \u0275\u0275listener("pageChange", function ActivityCenterComponent_Template_app_paginator_pageChange_61_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 16, ctx.total()));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.pendingCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.todayCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.uniqueUsers());
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.entityFilter);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.modules)("ngForTrackBy", ctx.trkId);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.dateFrom);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.dateTo);
        \u0275\u0275advance(3);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(18);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trkId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, FilterBarComponent, PaginatorComponent, DecimalPipe, DatePipe], styles: [_c5], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityCenterComponent, [{
    type: Component,
    args: [{ selector: "app-activity-center", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, FormsModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="ops-shell">
    <div class="ops-header">
      <h1 class="ops-title">Activity Center</h1>
      <p class="ops-sub">Live audit trail \u2014 all workflow events across the platform</p>
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
      <app-filter-bar placeholder="Search description, module, user\u2026" [count]="total()"
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
                  style="color:#2563eb;font-size:11px;font-weight:600">View \u2192</a>
              </td>
            </tr>
            <tr *ngIf="!rows().length">
              <td colspan="6" class="empty">{{ loading() ? 'Loading activity\u2026' : 'No activity found.' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;1611ec86475afeeb52620a06ba59d959ee89f146c1cc46cd853bbc720c638190;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/operations/operations.component.ts */\n:host {\n  display: block;\n}\n.ops-shell {\n  padding: 0;\n}\n.ops-header {\n  margin-bottom: 16px;\n}\n.ops-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.ops-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 8px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.sla-bar {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.sla-track {\n  width: 80px;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.sla-fill {\n  height: 100%;\n  border-radius: 3px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: inherit;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 3px 9px;\n  font-size: 11.5px;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.action-section {\n  margin-bottom: 14px;\n}\n.action-section-hdr {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 7px 7px 0 0;\n  cursor: pointer;\n}\n.action-section-hdr h4 {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n  flex: 1;\n}\n.action-count {\n  background: #dc2626;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n}\n.action-count.amber {\n  background: #d97706;\n}\n.action-count.blue {\n  background: #2563eb;\n}\n.action-body {\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 7px 7px;\n  overflow: hidden;\n}\n.action-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-bottom: 1px solid #f0f2f7;\n  font-size: 12px;\n}\n.action-row:last-child {\n  border-bottom: none;\n}\n.action-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.action-text {\n  flex: 1;\n  min-width: 0;\n}\n.action-title {\n  font-weight: 600;\n  color: #1a2240;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-meta {\n  color: #64748b;\n  font-size: 11px;\n}\n.overdue-badge {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tl-entry {\n  display: flex;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #f5f7fb;\n  font-size: 12px;\n}\n.tl-entry:last-child {\n  border-bottom: none;\n}\n.tl-dot {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.tl-body {\n  flex: 1;\n}\n.tl-title {\n  font-weight: 600;\n  color: #1a2240;\n}\n.tl-meta {\n  color: #64748b;\n  font-size: 11px;\n  margin-top: 1px;\n}\n.cal-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cal-day-hdr {\n  background: #f5f7fb;\n  padding: 6px;\n  text-align: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #5a6b8a;\n}\n.cal-cell {\n  background: #fff;\n  min-height: 80px;\n  padding: 4px;\n}\n.cal-cell.other-month {\n  background: #f8fafc;\n}\n.cal-cell.today {\n  background: #eff6ff;\n}\n.cal-date {\n  font-size: 11px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 3px;\n}\n.cal-event {\n  font-size: 9.5px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  margin-bottom: 1px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cal-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cal-month {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.cal-view-toggle {\n  display: flex;\n  gap: 4px;\n}\n.cal-view-btn {\n  padding: 4px 10px;\n  border-radius: 5px;\n  border: 1px solid #dde2ee;\n  background: #fff;\n  font-size: 11.5px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #5a6b8a;\n}\n.cal-view-btn.active {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #5a6b8a;\n}\n.legend-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=operations.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivityCenterComponent, { className: "ActivityCenterComponent", filePath: "src/app/features/operations/operations.component.ts", lineNumber: 171 });
})();
var PendingActionsComponent = class _PendingActionsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.api.get("/v1/reporting/pending-actions").pipe(takeUntil(this.destroy$)).subscribe({
      next: (r) => {
        this.data.set(r);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  daysSince(date) {
    if (!date)
      return 0;
    return Math.floor((Date.now() - new Date(date).getTime()) / 864e5);
  }
  static {
    this.\u0275fac = function PendingActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PendingActionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingActionsComponent, selectors: [["app-pending-actions"]], decls: 9, vars: 3, consts: [[1, "ops-shell"], [1, "ops-header"], [1, "ops-title"], [1, "ops-sub"], ["class", "kpi-strip", 4, "ngIf"], [4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "kpi-strip"], [1, "kpi"], [1, "kpi-val", "red"], [1, "kpi-label"], [1, "kpi-val", "amber"], [1, "kpi-val", "blue"], ["class", "action-section", 4, "ngIf"], [1, "action-section"], [1, "action-section-hdr"], [1, "action-icon", 2, "background", "#fee2e2"], [1, "action-count"], [1, "action-body"], ["class", "action-row", 4, "ngFor", "ngForOf"], [1, "action-row"], [2, "flex", "1"], [1, "action-title"], [1, "chip"], [1, "action-meta"], [1, "overdue-badge"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "action-icon", 2, "background", "#fef3c7"], [1, "action-count", "amber"], [1, "overdue-badge", "amber", 2, "background", "#fef3c7", "color", "#92400e"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], [1, "action-icon", 2, "background", "#ede9fe"], [1, "action-count", "blue"], [2, "font-size", "11px", "color", "#7c3aed", "font-weight", "600"], [1, "action-icon", 2, "background", "#dcfce7"], [1, "action-count", 2, "background", "#16a34a"], [1, "card"], [1, "card-body", 2, "text-align", "center", "padding", "40px", "color", "#16a34a"], [2, "font-size", "32px"], [2, "font-size", "14px", "font-weight", "700", "margin-top", "8px"], [1, "text-muted", 2, "margin-top", "4px"], [1, "card-body", "empty"]], template: function PendingActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Pending Actions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Workflow tasks requiring attention \u2014 sorted by urgency");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, PendingActionsComponent_div_6_Template, 21, 4, "div", 4)(7, PendingActionsComponent_div_7_Template, 6, 5, "div", 5)(8, PendingActionsComponent_div_8_Template, 3, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, DecimalPipe], styles: [_c5], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingActionsComponent, [{
    type: Component,
    args: [{ selector: "app-pending-actions", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, FormsModule], template: `
  <div class="ops-shell">
    <div class="ops-header">
      <h1 class="ops-title">Pending Actions</h1>
      <p class="ops-sub">Workflow tasks requiring attention \u2014 sorted by urgency</p>
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
          <div class="action-icon" style="background:#fee2e2">\u{1F4CB}</div>
          <h4>SRP Approvals \u2014 Waiting for Commercial Lead</h4>
          <span class="action-count">{{ d.sections.srpApprovals.count }}</span>
        </div>
        <div class="action-body">
          <div class="action-row" *ngFor="let item of d.sections.srpApprovals.items">
            <div style="flex:1">
              <div class="action-title"><span class="chip">{{ item.opportunity?.commNum }}</span> {{ item.opportunity?.name }}</div>
              <div class="action-meta">{{ item.opportunity?.clientName }} \xB7 Lead: {{ item.opportunity?.lead?.name }}</div>
            </div>
            <span class="overdue-badge">{{ daysSince(item.sentForApprovalAt) }}d waiting</span>
            <a [routerLink]="['/opportunities',item.opportunityId,'srp']" class="btn btn-primary btn-sm">Review SRP</a>
          </div>
        </div>
      </div>

      <!-- Overdue Invoices -->
      <div class="action-section" *ngIf="d.sections?.overdueInvoices?.count">
        <div class="action-section-hdr">
          <div class="action-icon" style="background:#fef3c7">\u{1F4B0}</div>
          <h4>Overdue Client Invoices \u2014 Payment Required</h4>
          <span class="action-count amber">{{ d.sections.overdueInvoices.count }}</span>
        </div>
        <div class="action-body">
          <div class="action-row" *ngFor="let item of d.sections.overdueInvoices.items">
            <div style="flex:1">
              <div class="action-title"><span class="chip">{{ item.invoiceRef }}</span> {{ item.schedule?.opportunity?.commNum }}</div>
              <div class="action-meta">{{ item.schedule?.opportunity?.clientName }} \xB7 \xA3{{ item.totalAmount | number:'1.0-0' }} outstanding</div>
            </div>
            <span class="overdue-badge amber" style="background:#fef3c7;color:#92400e">{{ daysSince(item.issuedAt) }}d overdue</span>
            <a [routerLink]="['/invoices/client']" class="btn btn-ghost btn-sm">View Invoice</a>
          </div>
        </div>
      </div>

      <!-- Open CEs -->
      <div class="action-section" *ngIf="d.sections?.openCEs?.count">
        <div class="action-section-hdr">
          <div class="action-icon" style="background:#ede9fe">\u25C6</div>
          <h4>Open Compensation Events \u2014 Awaiting Assessment</h4>
          <span class="action-count blue">{{ d.sections.openCEs.count }}</span>
        </div>
        <div class="action-body">
          <div class="action-row" *ngFor="let item of d.sections.openCEs.items">
            <div style="flex:1">
              <div class="action-title"><span class="chip">{{ item.ceRef }}</span> {{ item.opportunity?.commNum }}</div>
              <div class="action-meta">{{ item.opportunity?.clientName }} \xB7 \xA3{{ item.value | number:'1.0-0' }} \xB7 {{ item.stage }}</div>
            </div>
            <span style="font-size:11px;color:#7c3aed;font-weight:600">{{ daysSince(item.raisedAt) }}d open</span>
            <a [routerLink]="['/ce']" class="btn btn-ghost btn-sm">View CE</a>
          </div>
        </div>
      </div>

      <!-- Pending PIs -->
      <div class="action-section" *ngIf="d.sections?.pendingPIs?.count">
        <div class="action-section-hdr">
          <div class="action-icon" style="background:#dcfce7">\u25C7</div>
          <h4>Project PIs \u2014 Pending Approval</h4>
          <span class="action-count" style="background:#16a34a">{{ d.sections.pendingPIs.count }}</span>
        </div>
        <div class="action-body">
          <div class="action-row" *ngFor="let item of d.sections.pendingPIs.items">
            <div style="flex:1">
              <div class="action-title"><span class="chip">{{ item.opportunity?.commNum }}</span> {{ item.opportunity?.name }}</div>
              <div class="action-meta">Lead: {{ item.opportunity?.lead?.name }} \xB7 v{{ item.version }}</div>
            </div>
            <a [routerLink]="['/project-pi']" class="btn btn-ghost btn-sm">Review PI</a>
          </div>
        </div>
      </div>

      <!-- All clear -->
      <div *ngIf="!d.total" class="card">
        <div class="card-body" style="text-align:center;padding:40px;color:#16a34a">
          <div style="font-size:32px">\u2705</div>
          <div style="font-size:14px;font-weight:700;margin-top:8px">All Actions Clear</div>
          <div class="text-muted" style="margin-top:4px">No pending actions require your attention.</div>
        </div>
      </div>

    </div>

    <div *ngIf="loading()" class="card"><div class="card-body empty">Loading pending actions\u2026</div></div>
  </div>
  `, styles: ["/* angular:styles/component:css;1611ec86475afeeb52620a06ba59d959ee89f146c1cc46cd853bbc720c638190;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/operations/operations.component.ts */\n:host {\n  display: block;\n}\n.ops-shell {\n  padding: 0;\n}\n.ops-header {\n  margin-bottom: 16px;\n}\n.ops-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.ops-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 8px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.sla-bar {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.sla-track {\n  width: 80px;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.sla-fill {\n  height: 100%;\n  border-radius: 3px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: inherit;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 3px 9px;\n  font-size: 11.5px;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.action-section {\n  margin-bottom: 14px;\n}\n.action-section-hdr {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 7px 7px 0 0;\n  cursor: pointer;\n}\n.action-section-hdr h4 {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n  flex: 1;\n}\n.action-count {\n  background: #dc2626;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n}\n.action-count.amber {\n  background: #d97706;\n}\n.action-count.blue {\n  background: #2563eb;\n}\n.action-body {\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 7px 7px;\n  overflow: hidden;\n}\n.action-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-bottom: 1px solid #f0f2f7;\n  font-size: 12px;\n}\n.action-row:last-child {\n  border-bottom: none;\n}\n.action-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.action-text {\n  flex: 1;\n  min-width: 0;\n}\n.action-title {\n  font-weight: 600;\n  color: #1a2240;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-meta {\n  color: #64748b;\n  font-size: 11px;\n}\n.overdue-badge {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tl-entry {\n  display: flex;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #f5f7fb;\n  font-size: 12px;\n}\n.tl-entry:last-child {\n  border-bottom: none;\n}\n.tl-dot {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.tl-body {\n  flex: 1;\n}\n.tl-title {\n  font-weight: 600;\n  color: #1a2240;\n}\n.tl-meta {\n  color: #64748b;\n  font-size: 11px;\n  margin-top: 1px;\n}\n.cal-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cal-day-hdr {\n  background: #f5f7fb;\n  padding: 6px;\n  text-align: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #5a6b8a;\n}\n.cal-cell {\n  background: #fff;\n  min-height: 80px;\n  padding: 4px;\n}\n.cal-cell.other-month {\n  background: #f8fafc;\n}\n.cal-cell.today {\n  background: #eff6ff;\n}\n.cal-date {\n  font-size: 11px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 3px;\n}\n.cal-event {\n  font-size: 9.5px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  margin-bottom: 1px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cal-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cal-month {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.cal-view-toggle {\n  display: flex;\n  gap: 4px;\n}\n.cal-view-btn {\n  padding: 4px 10px;\n  border-radius: 5px;\n  border: 1px solid #dde2ee;\n  background: #fff;\n  font-size: 11.5px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #5a6b8a;\n}\n.cal-view-btn.active {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #5a6b8a;\n}\n.legend-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=operations.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingActionsComponent, { className: "PendingActionsComponent", filePath: "src/app/features/operations/operations.component.ts", lineNumber: 351 });
})();
var OperationsCalendarComponent = class _OperationsCalendarComponent {
  constructor() {
    this.api = inject(ApiService);
    this.cdr = inject(ChangeDetectorRef);
    this.destroy$ = new Subject();
    this.events = signal([], ...ngDevMode ? [{ debugName: "events" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = "month";
    this.currentDate = /* @__PURE__ */ new Date();
  }
  get monthLabel() {
    return this.currentDate.toLocaleString("en-GB", { month: "long", year: "numeric" });
  }
  get calCells() {
    const y = this.currentDate.getFullYear();
    const m = this.currentDate.getMonth();
    const firstDay = new Date(y, m, 1);
    const lastDay = new Date(y, m + 1, 0);
    let start = new Date(firstDay);
    const dow = (firstDay.getDay() + 6) % 7;
    start.setDate(start.getDate() - dow);
    const cells = [];
    const today = (/* @__PURE__ */ new Date()).toDateString();
    const ev = this.events();
    for (let i = 0; i < 42; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const ds = d.toISOString().slice(0, 10);
      cells.push({
        day: d.getDate(),
        current: d.getMonth() === m,
        isToday: d.toDateString() === today,
        events: ev.filter((e) => new Date(e.date).toISOString().slice(0, 10) === ds)
      });
    }
    return cells;
  }
  ngOnInit() {
    this.loadEvents();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadEvents() {
    const y = this.currentDate.getFullYear();
    const m = this.currentDate.getMonth();
    const from = new Date(y, m, 1).toISOString().slice(0, 10);
    const to = new Date(y, m + 2, 0).toISOString().slice(0, 10);
    this.api.get(`/v1/reporting/calendar?from=${from}&to=${to}`).pipe(takeUntil(this.destroy$)).subscribe((evs) => {
      this.events.set(evs || []);
      this.cdr.markForCheck();
    });
  }
  changeMonth(d) {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + d, 1);
    this.loadEvents();
  }
  today() {
    this.currentDate = /* @__PURE__ */ new Date();
    this.loadEvents();
  }
  static {
    this.\u0275fac = function OperationsCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OperationsCalendarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OperationsCalendarComponent, selectors: [["app-operations-calendar"]], decls: 23, vars: 7, consts: [[1, "ops-shell"], [1, "ops-header"], [1, "ops-title"], [1, "ops-sub"], [1, "cal-nav"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "cal-month"], [1, "cal-view-toggle"], [1, "cal-view-btn", 3, "click"], [4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "cal-grid"], ["class", "cal-day-hdr", 4, "ngFor", "ngForOf"], ["class", "cal-cell", 3, "other-month", "today", 4, "ngFor", "ngForOf"], [1, "legend"], [1, "legend-item"], [1, "legend-dot", 2, "background", "#2563eb"], [1, "legend-dot", 2, "background", "#d97706"], [1, "legend-dot", 2, "background", "#7c3aed"], [1, "legend-dot", 2, "background", "#16a34a"], [1, "cal-day-hdr"], [1, "cal-cell"], [1, "cal-date"], ["class", "cal-event", 3, "background", "color", "title", 4, "ngFor", "ngForOf"], ["style", "font-size:9px;color:#94a3b8", 4, "ngIf"], [1, "cal-event", 3, "title"], [2, "font-size", "9px", "color", "#94a3b8"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "text-muted"], ["class", "empty", 4, "ngIf"], ["class", "tbl-wrap", 4, "ngIf"], [1, "empty"], [1, "tbl-wrap"], [4, "ngFor", "ngForOf"], [2, "font-size", "12px", "white-space", "nowrap", "font-weight", "600"], [1, "badge"], [2, "font-size", "12.5px", "font-weight", "600"]], template: function OperationsCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Operations Calendar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Invoice deadlines, CE milestones, delegation expiry, survey deadlines");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "button", 6);
        \u0275\u0275listener("click", function OperationsCalendarComponent_Template_button_click_8_listener() {
          return ctx.changeMonth(-1);
        });
        \u0275\u0275text(9, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function OperationsCalendarComponent_Template_button_click_12_listener() {
          return ctx.changeMonth(1);
        });
        \u0275\u0275text(13, "\u203A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function OperationsCalendarComponent_Template_button_click_14_listener() {
          return ctx.today();
        });
        \u0275\u0275text(15, "Today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "button", 9);
        \u0275\u0275listener("click", function OperationsCalendarComponent_Template_button_click_17_listener() {
          return ctx.view = "month";
        });
        \u0275\u0275text(18, "Month");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 9);
        \u0275\u0275listener("click", function OperationsCalendarComponent_Template_button_click_19_listener() {
          return ctx.view = "agenda";
        });
        \u0275\u0275text(20, "Agenda");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(21, OperationsCalendarComponent_div_21_Template, 17, 3, "div", 10)(22, OperationsCalendarComponent_div_22_Template, 8, 3, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.monthLabel);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.view === "month");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.view === "agenda");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.view === "month");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view === "agenda");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, SlicePipe, DatePipe], styles: [_c5], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OperationsCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-operations-calendar", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, FormsModule], template: `
  <div class="ops-shell">
    <div class="ops-header">
      <h1 class="ops-title">Operations Calendar</h1>
      <p class="ops-sub">Invoice deadlines, CE milestones, delegation expiry, survey deadlines</p>
    </div>

    <div class="cal-nav">
      <div style="display:flex;align-items:center;gap:8px">
        <button class="btn btn-ghost btn-sm" (click)="changeMonth(-1)">\u2039</button>
        <span class="cal-month">{{ monthLabel }}</span>
        <button class="btn btn-ghost btn-sm" (click)="changeMonth(1)">\u203A</button>
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
        <span class="card-title">Upcoming Events \u2014 Next 30 Days</span>
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
  `, styles: ["/* angular:styles/component:css;1611ec86475afeeb52620a06ba59d959ee89f146c1cc46cd853bbc720c638190;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/operations/operations.component.ts */\n:host {\n  display: block;\n}\n.ops-shell {\n  padding: 0;\n}\n.ops-header {\n  margin-bottom: 16px;\n}\n.ops-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.ops-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 11px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 8px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.sla-bar {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.sla-track {\n  width: 80px;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.sla-fill {\n  height: 100%;\n  border-radius: 3px;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: inherit;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 3px 9px;\n  font-size: 11.5px;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.action-section {\n  margin-bottom: 14px;\n}\n.action-section-hdr {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 7px 7px 0 0;\n  cursor: pointer;\n}\n.action-section-hdr h4 {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n  flex: 1;\n}\n.action-count {\n  background: #dc2626;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 10px;\n}\n.action-count.amber {\n  background: #d97706;\n}\n.action-count.blue {\n  background: #2563eb;\n}\n.action-body {\n  border: 1px solid #e2e8f0;\n  border-top: none;\n  border-radius: 0 0 7px 7px;\n  overflow: hidden;\n}\n.action-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  border-bottom: 1px solid #f0f2f7;\n  font-size: 12px;\n}\n.action-row:last-child {\n  border-bottom: none;\n}\n.action-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.action-text {\n  flex: 1;\n  min-width: 0;\n}\n.action-title {\n  font-weight: 600;\n  color: #1a2240;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.action-meta {\n  color: #64748b;\n  font-size: 11px;\n}\n.overdue-badge {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.tl-entry {\n  display: flex;\n  gap: 10px;\n  padding: 8px 0;\n  border-bottom: 1px solid #f5f7fb;\n  font-size: 12px;\n}\n.tl-entry:last-child {\n  border-bottom: none;\n}\n.tl-dot {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n.tl-body {\n  flex: 1;\n}\n.tl-title {\n  font-weight: 600;\n  color: #1a2240;\n}\n.tl-meta {\n  color: #64748b;\n  font-size: 11px;\n  margin-top: 1px;\n}\n.cal-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 1px;\n  background: #e2e8f0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.cal-day-hdr {\n  background: #f5f7fb;\n  padding: 6px;\n  text-align: center;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #5a6b8a;\n}\n.cal-cell {\n  background: #fff;\n  min-height: 80px;\n  padding: 4px;\n}\n.cal-cell.other-month {\n  background: #f8fafc;\n}\n.cal-cell.today {\n  background: #eff6ff;\n}\n.cal-date {\n  font-size: 11px;\n  font-weight: 600;\n  color: #475569;\n  margin-bottom: 3px;\n}\n.cal-event {\n  font-size: 9.5px;\n  padding: 2px 4px;\n  border-radius: 3px;\n  margin-bottom: 1px;\n  cursor: pointer;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cal-nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.cal-month {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.cal-view-toggle {\n  display: flex;\n  gap: 4px;\n}\n.cal-view-btn {\n  padding: 4px 10px;\n  border-radius: 5px;\n  border: 1px solid #dde2ee;\n  background: #fff;\n  font-size: 11.5px;\n  font-weight: 600;\n  cursor: pointer;\n  color: #5a6b8a;\n}\n.cal-view-btn.active {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n.legend-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #5a6b8a;\n}\n.legend-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=operations.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OperationsCalendarComponent, { className: "OperationsCalendarComponent", filePath: "src/app/features/operations/operations.component.ts", lineNumber: 448 });
})();
export {
  ActivityCenterComponent,
  OperationsCalendarComponent,
  PendingActionsComponent
};
//# sourceMappingURL=chunk-DMQ5TQLD.js.map
