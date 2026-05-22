import {
  FilterBarComponent
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
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  SlicePipe,
  Subject,
  TitleCasePipe,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YNIEOD7T.js";

// src/app/features/reporting/reporting.component.ts
var _c0 = (a0) => ["/opportunities", a0];
function PipelineReportComponent_ng_container_12_div_30_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.count);
  }
}
function PipelineReportComponent_ng_container_12_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 30);
    \u0275\u0275template(5, PipelineReportComponent_ng_container_12_div_30_span_5_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const d_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.status.replace("StrongProbable", "Strong Probable"));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r1.count / ctx_r2.maxCount(d_r2.byStatus, "count") * 100, "%")("background", ctx_r2.stagePalette(row_r1.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r1.count > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtGBP(row_r1.value));
  }
}
function PipelineReportComponent_ng_container_12_div_36_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.count);
  }
}
function PipelineReportComponent_ng_container_12_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 34);
    \u0275\u0275template(5, PipelineReportComponent_ng_container_12_div_36_div_1_span_5_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const d_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r4.value / ctx_r2.maxCount(d_r2.bySector, "value") * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.count > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtGBP(row_r4.value));
  }
}
function PipelineReportComponent_ng_container_12_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, PipelineReportComponent_ng_container_12_div_36_div_1_Template, 8, 5, "div", 21);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 2, d_r2.bySector, 0, 8))("ngForTrackBy", ctx_r2.trkIdx);
  }
}
function PipelineReportComponent_ng_container_12_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "No sector data available.");
    \u0275\u0275elementEnd();
  }
}
function PipelineReportComponent_ng_container_12_div_38_div_6_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.count);
  }
}
function PipelineReportComponent_ng_container_12_div_38_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 36);
    \u0275\u0275template(5, PipelineReportComponent_ng_container_12_div_38_div_6_span_5_Template, 2, 1, "span", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const d_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r5.value / ctx_r2.maxCount(d_r2.byRegion, "value") * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r5.count > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtGBP(row_r5.value));
  }
}
function PipelineReportComponent_ng_container_12_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3, "By Region");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275template(6, PipelineReportComponent_ng_container_12_div_38_div_6_Template, 8, 5, "div", 21);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(7, 2, d_r2.byRegion, 0, 10))("ngForTrackBy", ctx_r2.trkIdx);
  }
}
function PipelineReportComponent_ng_container_12_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 37)(1, "td")(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 41);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, o_r6.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r6.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r6.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r6.lead == null ? null : o_r6.lead.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.stagePalette(o_r6.status) + "20")("color", ctx_r2.stagePalette(o_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(15, 11, o_r6.value, "GBP", "symbol", "1.0-0"));
  }
}
function PipelineReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7, "Total Commissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 13);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 12);
    \u0275\u0275text(12, "Total Pipeline Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "div", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 12);
    \u0275\u0275text(17, "Contracted / In Progress");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12);
    \u0275\u0275text(22, "Average Commission Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 15)(24, "div", 16)(25, "div", 17)(26, "span", 18);
    \u0275\u0275text(27, "By Stage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 19)(29, "div", 20);
    \u0275\u0275template(30, PipelineReportComponent_ng_container_12_div_30_Template, 8, 7, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 16)(32, "div", 17)(33, "span", 18);
    \u0275\u0275text(34, "By Sector");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 19);
    \u0275\u0275template(36, PipelineReportComponent_ng_container_12_div_36_Template, 3, 6, "div", 22)(37, PipelineReportComponent_ng_container_12_div_37_Template, 2, 0, "div", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(38, PipelineReportComponent_ng_container_12_div_38_Template, 8, 6, "div", 23);
    \u0275\u0275elementStart(39, "div", 16)(40, "div", 17)(41, "span", 18);
    \u0275\u0275text(42, "Pipeline Detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 24);
    \u0275\u0275text(44, "Top 50 commissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 25)(46, "table")(47, "thead")(48, "tr")(49, "th");
    \u0275\u0275text(50, "Comm #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th");
    \u0275\u0275text(56, "Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th");
    \u0275\u0275text(58, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "th");
    \u0275\u0275text(60, "Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "tbody");
    \u0275\u0275template(62, PipelineReportComponent_ng_container_12_tr_62_Template, 16, 18, "tr", 26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 11, d_r2.kpis.totalCommissions));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fmtGBP(d_r2.kpis.totalPipeline));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.kpis.contracted);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.fmtGBP(d_r2.kpis.avgValue));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", d_r2.byStatus)("ngForTrackBy", ctx_r2.trkIdx);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", d_r2.bySector.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !d_r2.bySector.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r2.byRegion.length);
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", d_r2.rows)("ngForTrackBy", ctx_r2.trkId);
  }
}
function PipelineReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Loading report\u2026");
    \u0275\u0275elementEnd();
  }
}
function CeReportComponent_ng_container_12_div_28_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.count);
  }
}
function CeReportComponent_ng_container_12_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "div", 27);
    \u0275\u0275template(5, CeReportComponent_ng_container_12_div_28_span_5_Template, 2, 1, "span", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const d_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.stage);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r1.count / ctx_r2.maxVal(d_r2.byStage, "count") * 100, "%")("background", ctx_r2.cePalette(row_r1.stage));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r1.count > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtGBP(row_r1.value));
  }
}
function CeReportComponent_ng_container_12_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 34);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 32);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.ceRef);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.opportunity == null ? null : c_r4.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.opportunity == null ? null : c_r4.opportunity.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.ceBadge(c_r4.stage));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.stage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 8, c_r4.value, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 13, c_r4.raisedAt, "dd MMM yyyy"));
  }
}
function CeReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6, "Total CEs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 12);
    \u0275\u0275text(11, "Total CE Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16, "Open CEs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "div", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275text(21, "Approved");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17)(24, "span", 18);
    \u0275\u0275text(25, "By Stage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 19)(27, "div", 20);
    \u0275\u0275template(28, CeReportComponent_ng_container_12_div_28_Template, 8, 7, "div", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 16)(30, "div", 17)(31, "span", 18);
    \u0275\u0275text(32, "CE Detail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 22)(34, "table")(35, "thead")(36, "tr")(37, "th");
    \u0275\u0275text(38, "CE Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Raised");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275template(50, CeReportComponent_ng_container_12_tr_50_Template, 18, 16, "tr", 23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r2.kpis.total);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.fmtGBP(d_r2.kpis.totalValue));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.kpis.open);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.kpis.approved);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", d_r2.byStage)("ngForTrackBy", ctx_r2.trkIdx);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", d_r2.rows)("ngForTrackBy", ctx_r2.trkId);
  }
}
function CeReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "Loading report\u2026");
    \u0275\u0275elementEnd();
  }
}
var _c1 = '\n[_nghost-%COMP%] {\n  display: block;\n}\n.rpt-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.kpi-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.kpi-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.kpi-val.purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.row-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good[_ngcontent-%COMP%]::before {\n  background: #16a34a;\n}\n.insight-card.info[_ngcontent-%COMP%]::before {\n  background: #2563eb;\n}\n.insight-card.warning[_ngcontent-%COMP%]::before {\n  background: #d97706;\n}\n.insight-card.critical[_ngcontent-%COMP%]::before {\n  background: #dc2626;\n}\n.insight-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.insight-metric.info[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.insight-metric.warning[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.insight-metric.critical[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.ageing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=reporting.component.css.map */';
var _c2 = (a0) => ["/opportunities", a0, "srp"];
function SrpReportComponent_ng_container_12_div_22_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 32);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "a", 33);
    \u0275\u0275text(16, "Review");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.opportunity == null ? null : s_r1.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.opportunity == null ? null : s_r1.opportunity.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.opportunity == null ? null : s_r1.opportunity.lead == null ? null : s_r1.opportunity.lead.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, s_r1.sentForApprovalAt, "dd MMM yyyy"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", s_r1.daysPending, "d");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c2, s_r1.opportunityId));
  }
}
function SrpReportComponent_ng_container_12_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3, "\u26A0 Overdue Approvals \u2014 Immediate Action Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 29)(7, "table")(8, "thead")(9, "tr")(10, "th");
    \u0275\u0275text(11, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Sent For Approval");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Days Waiting");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, SrpReportComponent_ng_container_12_div_22_tr_22_Template, 17, 11, "tr", 30);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", d_r2.overdue.length, " SRPs");
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", d_r2.overdue)("ngForTrackBy", ctx_r2.trkIdx);
  }
}
function SrpReportComponent_ng_container_12_div_30_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.count);
  }
}
function SrpReportComponent_ng_container_12_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "div", 37);
    \u0275\u0275template(5, SrpReportComponent_ng_container_12_div_30_span_5_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const d_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r4.count / d_r2.kpis.total * 100, "%")("background", ctx_r2.srpPalette(row_r4.status));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.count > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.count);
  }
}
function SrpReportComponent_ng_container_12_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 41)(1, "td")(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c2, s_r5.opportunityId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r5.opportunity == null ? null : s_r5.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.opportunity == null ? null : s_r5.opportunity.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.srpBadge(s_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.approvedBy || "\u2014");
  }
}
function SrpReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12);
    \u0275\u0275text(6, "Total SRPs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 10)(8, "div", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 12);
    \u0275\u0275text(11, "Awaiting Approval");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div", 14);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275text(16, "Overdue (>7 days)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "div", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 12);
    \u0275\u0275text(21, "Approved");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, SrpReportComponent_ng_container_12_div_22_Template, 23, 3, "div", 16);
    \u0275\u0275elementStart(23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "span", 20);
    \u0275\u0275text(27, "By Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 21)(29, "div", 22);
    \u0275\u0275template(30, SrpReportComponent_ng_container_12_div_30_Template, 8, 7, "div", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 18)(32, "div", 19)(33, "span", 20);
    \u0275\u0275text(34, "All SRPs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 24)(36, "table")(37, "thead")(38, "tr")(39, "th");
    \u0275\u0275text(40, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Approved By");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "tbody");
    \u0275\u0275template(48, SrpReportComponent_ng_container_12_tr_48_Template, 11, 9, "tr", 25);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r2.kpis.total);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.kpis.pending);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.kpis.overdue);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.kpis.approved);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", d_r2.overdue.length);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", d_r2.byStatus)("ngForTrackBy", ctx_r2.trkIdx);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", d_r2.rows)("ngForTrackBy", ctx_r2.trkId);
  }
}
function SrpReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "Loading report\u2026");
    \u0275\u0275elementEnd();
  }
}
function InvoiceReportComponent_ng_container_12_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r2.ageColors[i_r2] + "15")("border", "1px solid " + ctx_r2.ageColors[i_r2] + "30");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r2.ageColors[i_r2]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(3, 9, b_r1.value, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", b_r1.count, " invoices");
  }
}
function InvoiceReportComponent_ng_container_12_div_34_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r4.count);
  }
}
function InvoiceReportComponent_ng_container_12_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "div", 33);
    \u0275\u0275template(5, InvoiceReportComponent_ng_container_12_div_34_span_5_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const d_r6 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", b_r4.value / ctx_r2.maxVal(d_r6.ageing, "value") * 100, "%")("background", ctx_r2.ageColors[i_r5]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r4.count > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(8, 7, b_r4.value, "GBP", "symbol", "1.0-0"));
  }
}
function InvoiceReportComponent_ng_container_12_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td", 38);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inv_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r7.invoiceRef);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r7.schedule == null ? null : inv_r7.schedule.opportunity == null ? null : inv_r7.schedule.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r7.schedule == null ? null : inv_r7.schedule.opportunity == null ? null : inv_r7.schedule.opportunity.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 8, inv_r7.netAmount, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.invBadge(inv_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 13, inv_r7.issuedAt, "dd MMM yyyy"));
  }
}
function InvoiceReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7, "Total Outstanding");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 13);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275text(13, "Total Paid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 11);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12);
    \u0275\u0275text(19, "90+ Days Overdue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 14);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 12);
    \u0275\u0275text(24, "Total Invoices");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "span", 17);
    \u0275\u0275text(28, "Ageing Analysis");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 18)(30, "div", 19);
    \u0275\u0275template(31, InvoiceReportComponent_ng_container_12_div_31_Template, 8, 14, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 21)(33, "div", 22);
    \u0275\u0275template(34, InvoiceReportComponent_ng_container_12_div_34_Template, 9, 12, "div", 23);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 15)(36, "div", 16)(37, "span", 17);
    \u0275\u0275text(38, "Invoice Detail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 24)(40, "table")(41, "thead")(42, "tr")(43, "th");
    \u0275\u0275text(44, "Invoice Ref");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50, "Net Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th");
    \u0275\u0275text(54, "Issued");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "tbody");
    \u0275\u0275template(56, InvoiceReportComponent_ng_container_12_tr_56_Template, 18, 16, "tr", 25);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 10, d_r6.kpis.totalOutstanding, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 15, d_r6.kpis.totalPaid, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 20, d_r6.kpis.overdue, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r6.kpis.totalInvoices);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", d_r6.ageing)("ngForTrackBy", ctx_r2.trkIdx);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", d_r6.ageing)("ngForTrackBy", ctx_r2.trkIdx);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", d_r6.rows)("ngForTrackBy", ctx_r2.trkId);
  }
}
function InvoiceReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1, "Loading report\u2026");
    \u0275\u0275elementEnd();
  }
}
var _c3 = (a0) => ["/opportunities", a0, "fee-calculator"];
function FeeReportComponent_ng_container_12_div_31_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r1.count);
  }
}
function FeeReportComponent_ng_container_12_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "div", 28);
    \u0275\u0275template(5, FeeReportComponent_ng_container_12_div_31_div_1_span_5_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const d_r2 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", row_r1.count / ctx_r2.maxVal(d_r2.byProcRoute, "count") * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r1.count > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r1.count);
  }
}
function FeeReportComponent_ng_container_12_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, FeeReportComponent_ng_container_12_div_31_div_1_Template, 8, 5, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r2.byProcRoute)("ngForTrackBy", ctx_r2.trkIdx);
  }
}
function FeeReportComponent_ng_container_12_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "No procurement data.");
    \u0275\u0275elementEnd();
  }
}
function FeeReportComponent_ng_container_12_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "td")(2, "span", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 35);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 36);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c3, f_r4.opportunityId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.opportunity == null ? null : f_r4.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 5, f_r4.constructionValue, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.procRoute);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 10, f_r4.grandTotal, "GBP", "symbol", "1.0-0"));
  }
}
function FeeReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10)(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275text(7, "Total Fee Forecast");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 13);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12);
    \u0275\u0275text(13, "Total Construction Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "div", 14);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12);
    \u0275\u0275text(19, "Average Margin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 10)(21, "div", 13);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 12);
    \u0275\u0275text(24, "Commissions with FC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "div", 17)(28, "span", 18);
    \u0275\u0275text(29, "By Procurement Route");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 19);
    \u0275\u0275template(31, FeeReportComponent_ng_container_12_div_31_Template, 2, 2, "div", 20)(32, FeeReportComponent_ng_container_12_div_32_Template, 2, 0, "div", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 16)(34, "div", 17)(35, "span", 18);
    \u0275\u0275text(36, "Fee Calculator Detail");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 21)(38, "table")(39, "thead")(40, "tr")(41, "th");
    \u0275\u0275text(42, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44, "Construction Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46, "Proc Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48, "Grand Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "tbody");
    \u0275\u0275template(50, FeeReportComponent_ng_container_12_tr_50_Template, 12, 17, "tr", 22);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 8, d_r2.kpis.totalForecast, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 13, d_r2.kpis.totalConstruction, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 18, d_r2.kpis.avgMargin, "1.1-1"), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(d_r2.kpis.commissions);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", d_r2.byProcRoute.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !d_r2.byProcRoute.length);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", d_r2.rows)("ngForTrackBy", ctx_r2.trkId);
  }
}
function FeeReportComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "Loading report\u2026");
    \u0275\u0275elementEnd();
  }
}
function ActivityReportComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 21);
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
function ActivityReportComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 23)(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 26);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 27);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 28);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 10, e_r2.createdAt, "dd MMM HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", (e_r2.user == null ? null : e_r2.user.avatarColor) || "#3d7eff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((e_r2.user == null ? null : e_r2.user.initials) || "SY");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((e_r2.user == null ? null : e_r2.user.name) || "System");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.aBadge(e_r2.action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r2.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.entityType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r2.description);
  }
}
function ActivityReportComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading() ? "Loading\u2026" : "No activity found.");
  }
}
function AiInsightsComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Generated ", \u0275\u0275pipeBind2(2, 1, ctx_r0.generatedAt(), "dd MMM HH:mm"));
  }
}
function AiInsightsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "Analysing platform data\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AiInsightsComponent_div_13_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ins_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(ins_r2.severity);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ins_r2.metric);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ins_r2.metricLabel);
  }
}
function AiInsightsComponent_div_13_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ins_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.severityIcon(ins_r2.severity), " ");
  }
}
function AiInsightsComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div")(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AiInsightsComponent_div_13_div_1_div_7_Template, 5, 4, "div", 17)(8, AiInsightsComponent_div_13_div_1_div_8_Template, 2, 1, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 19);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ins_r2 = ctx.$implicit;
    \u0275\u0275classMap("insight-card sev-" + ins_r2.severity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ins_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ins_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ins_r2.metric !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ins_r2.metric === null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ins_r2.summary);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4A1} ", ins_r2.recommendation);
  }
}
function AiInsightsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, AiInsightsComponent_div_13_div_1_Template, 13, 8, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.insights())("ngForTrackBy", ctx_r0.trkIdx);
  }
}
function AiInsightsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2, "No insights available. Try refreshing.");
    \u0275\u0275elementEnd()();
  }
}
function AiInsightsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3, "Recommended Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 27)(5, "a", 28);
    \u0275\u0275text(6, "View Pending Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 29);
    \u0275\u0275text(8, "SRP Approval Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 30);
    \u0275\u0275text(10, "Invoice Ageing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 31);
    \u0275\u0275text(12, "CE Risk Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 32);
    \u0275\u0275text(14, "Pipeline Health");
    \u0275\u0275elementEnd()()();
  }
}
var _c4 = (a0) => ["/reporting", a0];
function ScheduledReportsComponent_div_9_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "strong");
    \u0275\u0275text(2, "To:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r2.recipients);
  }
}
function ScheduledReportsComponent_div_9_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Last run:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, r_r2.lastRun, "dd MMM yyyy HH:mm"));
  }
}
function ScheduledReportsComponent_div_9_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Next run:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, r_r2.nextRun, "dd MMM yyyy HH:mm"));
  }
}
function ScheduledReportsComponent_div_9_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1, "Not yet executed");
    \u0275\u0275elementEnd();
  }
}
function ScheduledReportsComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div")(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 19)(11, "div", 20)(12, "strong");
    \u0275\u0275text(13, "Report:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20)(16, "strong");
    \u0275\u0275text(17, "Delivery:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ScheduledReportsComponent_div_9_div_1_div_19_Template, 4, 1, "div", 21)(20, ScheduledReportsComponent_div_9_div_1_div_20_Template, 5, 4, "div", 22)(21, ScheduledReportsComponent_div_9_div_1_div_21_Template, 5, 4, "div", 22)(22, ScheduledReportsComponent_div_9_div_1_div_22_Template, 2, 0, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 24)(24, "button", 25);
    \u0275\u0275listener("click", function ScheduledReportsComponent_div_9_div_1_Template_button_click_24_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleEnabled(r_r2));
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 25);
    \u0275\u0275listener("click", function ScheduledReportsComponent_div_9_div_1_Template_button_click_26_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.runNow(r_r2));
    });
    \u0275\u0275text(27, "\u25B7 Run Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 26);
    \u0275\u0275text(29, "View Report");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 14, r_r2.frequency), " \xB7 ", r_r2.time);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(r_r2.status === "active" ? "badge bg" : r_r2.status === "paused" ? "badge ba" : "badge bgr");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", r_r2.reportType);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", r_r2.deliveryMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.recipients);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.lastRun);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r2.nextRun);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r2.lastRun);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.enabled ? "\u23F8 Pause" : "\u25B6 Enable");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c4, r_r2.reportType));
  }
}
function ScheduledReportsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, ScheduledReportsComponent_div_9_div_1_Template, 30, 18, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.reports())("ngForTrackBy", ctx_r2.trkIdx);
  }
}
function ScheduledReportsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2, "No scheduled reports configured.");
    \u0275\u0275elementEnd()();
  }
}
function ScheduledReportsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.desc);
  }
}
function maxVal(items, key) {
  return Math.max(...items.map((i) => i[key] || 0), 1);
}
function fmtGBP(v) {
  if (v >= 1e6)
    return "\xA3" + (v / 1e6).toFixed(1) + "M";
  if (v >= 1e3)
    return "\xA3" + (v / 1e3).toFixed(0) + "k";
  return "\xA3" + v.toFixed(0);
}
var ReportingHubComponent = class _ReportingHubComponent {
  static {
    this.\u0275fac = function ReportingHubComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportingHubComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportingHubComponent, selectors: [["app-reporting-hub"]], decls: 69, vars: 0, consts: [[1, "rpt-shell"], [1, "rpt-toolbar"], [1, "rpt-title"], [1, "rpt-sub"], [2, "display", "flex", "gap", "6px"], ["routerLink", "/reporting/ai-insights", 1, "btn", "btn-primary", "btn-sm"], ["routerLink", "/reporting/scheduled", 1, "btn", "btn-ghost", "btn-sm"], [1, "hub-grid"], ["routerLink", "/reporting/pipeline", 1, "hub-card"], [1, "hub-icon"], [1, "hub-name"], [1, "hub-desc"], ["routerLink", "/reporting/ce", 1, "hub-card"], ["routerLink", "/reporting/srp", 1, "hub-card"], ["routerLink", "/reporting/invoices", 1, "hub-card"], ["routerLink", "/reporting/fees", 1, "hub-card"], ["routerLink", "/reporting/activity", 1, "hub-card"], ["routerLink", "/reporting/ai-insights", 1, "hub-card"], ["routerLink", "/reporting/scheduled", 1, "hub-card"]], template: function ReportingHubComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Reporting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Enterprise analytics, AI insights and scheduled reports");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
        \u0275\u0275text(9, "\u{1F916} AI Insights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "\u23F1 Scheduled");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 7)(13, "a", 8)(14, "div", 9);
        \u0275\u0275text(15, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275text(17, "Opportunity Pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275text(19, "Pipeline by status, sector and region");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "a", 12)(21, "div", 9);
        \u0275\u0275text(22, "\u25C6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10);
        \u0275\u0275text(24, "CE Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 11);
        \u0275\u0275text(26, "Compensation event analysis and risk");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "a", 13)(28, "div", 9);
        \u0275\u0275text(29, "\u{1F4CB}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 10);
        \u0275\u0275text(31, "SRP Approval Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 11);
        \u0275\u0275text(33, "Approval bottlenecks and overdue SRPs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "a", 14)(35, "div", 9);
        \u0275\u0275text(36, "\u{1F4B0}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 10);
        \u0275\u0275text(38, "Invoice Ageing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 11);
        \u0275\u0275text(40, "Outstanding payments and overdue recovery");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "a", 15)(42, "div", 9);
        \u0275\u0275text(43, "\u229F");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 10);
        \u0275\u0275text(45, "Fee Forecasting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 11);
        \u0275\u0275text(47, "Commission fee forecast by procurement route");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "a", 16)(49, "div", 9);
        \u0275\u0275text(50, "\u25A4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 10);
        \u0275\u0275text(52, "Activity Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 11);
        \u0275\u0275text(54, "Platform activity and audit analysis");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "a", 17)(56, "div", 9);
        \u0275\u0275text(57, "\u{1F916}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 10);
        \u0275\u0275text(59, "AI Insights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 11);
        \u0275\u0275text(61, "Trend analysis, risk indicators, recommendations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "a", 18)(63, "div", 9);
        \u0275\u0275text(64, "\u23F1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 10);
        \u0275\u0275text(66, "Scheduled Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 11);
        \u0275\u0275text(68, "Automated report delivery management");
        \u0275\u0275elementEnd()()()();
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.rpt-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.kpi-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.kpi-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.kpi-val.purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.row-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good[_ngcontent-%COMP%]::before {\n  background: #16a34a;\n}\n.insight-card.info[_ngcontent-%COMP%]::before {\n  background: #2563eb;\n}\n.insight-card.warning[_ngcontent-%COMP%]::before {\n  background: #d97706;\n}\n.insight-card.critical[_ngcontent-%COMP%]::before {\n  background: #dc2626;\n}\n.insight-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.insight-metric.info[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.insight-metric.warning[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.insight-metric.critical[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.ageing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.hub-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.hub-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 14px;\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color .12s, box-shadow .12s;\n  text-decoration: none;\n}\n.hub-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .07);\n}\n.hub-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 4px;\n}\n.hub-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.hub-desc[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n}\n/*# sourceMappingURL=reporting.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportingHubComponent, [{
    type: Component,
    args: [{ selector: "app-reporting-hub", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Reporting</h1><p class="rpt-sub">Enterprise analytics, AI insights and scheduled reports</p></div>
      <div style="display:flex;gap:6px">
        <a class="btn btn-primary btn-sm" routerLink="/reporting/ai-insights">\u{1F916} AI Insights</a>
        <a class="btn btn-ghost btn-sm" routerLink="/reporting/scheduled">\u23F1 Scheduled</a>
      </div>
    </div>
    <div class="hub-grid">
      <a class="hub-card" routerLink="/reporting/pipeline">
        <div class="hub-icon">\u{1F4CA}</div>
        <div class="hub-name">Opportunity Pipeline</div>
        <div class="hub-desc">Pipeline by status, sector and region</div>
      </a>
      <a class="hub-card" routerLink="/reporting/ce">
        <div class="hub-icon">\u25C6</div>
        <div class="hub-name">CE Summary</div>
        <div class="hub-desc">Compensation event analysis and risk</div>
      </a>
      <a class="hub-card" routerLink="/reporting/srp">
        <div class="hub-icon">\u{1F4CB}</div>
        <div class="hub-name">SRP Approval Status</div>
        <div class="hub-desc">Approval bottlenecks and overdue SRPs</div>
      </a>
      <a class="hub-card" routerLink="/reporting/invoices">
        <div class="hub-icon">\u{1F4B0}</div>
        <div class="hub-name">Invoice Ageing</div>
        <div class="hub-desc">Outstanding payments and overdue recovery</div>
      </a>
      <a class="hub-card" routerLink="/reporting/fees">
        <div class="hub-icon">\u229F</div>
        <div class="hub-name">Fee Forecasting</div>
        <div class="hub-desc">Commission fee forecast by procurement route</div>
      </a>
      <a class="hub-card" routerLink="/reporting/activity">
        <div class="hub-icon">\u25A4</div>
        <div class="hub-name">Activity Report</div>
        <div class="hub-desc">Platform activity and audit analysis</div>
      </a>
      <a class="hub-card" routerLink="/reporting/ai-insights">
        <div class="hub-icon">\u{1F916}</div>
        <div class="hub-name">AI Insights</div>
        <div class="hub-desc">Trend analysis, risk indicators, recommendations</div>
      </a>
      <a class="hub-card" routerLink="/reporting/scheduled">
        <div class="hub-icon">\u23F1</div>
        <div class="hub-name">Scheduled Reports</div>
        <div class="hub-desc">Automated report delivery management</div>
      </a>
    </div>
  </div>
  `, styles: ['/* angular:styles/component:css;958f2878e492b76c04de311107729915e3748f110ca6116f578c85d028c0bd25;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.hub-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.hub-card {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 14px;\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color .12s, box-shadow .12s;\n  text-decoration: none;\n}\n.hub-card:hover {\n  border-color: #93c5fd;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, .07);\n}\n.hub-icon {\n  font-size: 20px;\n  margin-bottom: 4px;\n}\n.hub-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.hub-desc {\n  font-size: 11.5px;\n  color: #64748b;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportingHubComponent, { className: "ReportingHubComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 180 });
})();
var PipelineReportComponent = class _PipelineReportComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.trkId = (_, o) => o.id;
    this.fmtGBP = fmtGBP;
    this.maxCount = maxVal;
  }
  ngOnInit() {
    this.api.get("/v1/reporting/pipeline").pipe(takeUntil(this.destroy$)).subscribe((d) => this.data.set(d));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  stagePalette(s) {
    return { Lead: "#8a9bb8", Probable: "#2563eb", StrongProbable: "#7c3aed", Contracted: "#16a34a", WorkStarted: "#0f766e", Completed: "#075985" }[s] || "#2563eb";
  }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = [
      "CommNum,Name,Client,Lead,Status,Value",
      ...rows.map((o) => `"${o.commNum}","${o.name}","${o.clientName}","${o.lead?.name || ""}","${o.status}","${o.value}"`)
    ].join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = `pipeline_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
  }
  static {
    this.\u0275fac = function PipelineReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PipelineReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PipelineReportComponent, selectors: [["app-pipeline-report"]], decls: 14, vars: 2, consts: [[1, "rpt-shell"], [1, "rpt-toolbar"], [1, "rpt-title"], [1, "rpt-sub"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["routerLink", "/reporting", 1, "btn", "btn-ghost", "btn-sm"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi"], [1, "kpi-val"], [1, "kpi-label"], [1, "kpi-val", "amber"], [1, "kpi-val", "green"], [1, "row-grid"], [1, "card"], [1, "card-hdr"], [1, "card-title"], [1, "card-body"], [1, "bar-chart"], ["class", "bar-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "bar-chart", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "text-muted"], [1, "tbl-wrap"], [3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], ["class", "bar-fill-text", 4, "ngIf"], [1, "bar-val"], [1, "bar-fill-text"], [1, "bar-fill", 2, "background", "#2563eb"], [1, "empty"], [1, "bar-fill", 2, "background", "#7c3aed"], [3, "routerLink"], [1, "chip"], [2, "font-weight", "600", "max-width", "180px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap"], [1, "badge"], [1, "val"]], template: function PipelineReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Opportunity Pipeline Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Pipeline analysis by status, sector, region and value");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function PipelineReportComponent_Template_button_click_8_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(9, "\u2B07 CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "\u2190 All Reports");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, PipelineReportComponent_ng_container_12_Template, 63, 13, "ng-container", 7)(13, PipelineReportComponent_div_13_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.data());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, SlicePipe, DecimalPipe, CurrencyPipe], styles: [_c1], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PipelineReportComponent, [{
    type: Component,
    args: [{ selector: "app-pipeline-report", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Opportunity Pipeline Report</h1><p class="rpt-sub">Pipeline analysis by status, sector, region and value</p></div>
      <div style="display:flex;gap:6px">
        <button class="btn btn-ghost btn-sm" (click)="exportCSV()">\u2B07 CSV</button>
        <a class="btn btn-ghost btn-sm" routerLink="/reporting">\u2190 All Reports</a>
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
    <div *ngIf="!data()" class="empty">Loading report\u2026</div>
  </div>
  `, styles: ['/* angular:styles/component:css;ac03a079a93478cd5bc80b0b7707eb1513bdc86fcdcd6d334450233113f6bfe6;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PipelineReportComponent, { className: "PipelineReportComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 286 });
})();
var CeReportComponent = class _CeReportComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.trkId = (_, o) => o.id;
    this.fmtGBP = fmtGBP;
    this.maxVal = maxVal;
  }
  ngOnInit() {
    this.api.get("/v1/reporting/ce").pipe(takeUntil(this.destroy$)).subscribe((d) => this.data.set(d));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  cePalette(s) {
    return { Approved: "#16a34a", Rejected: "#dc2626", Assessment: "#d97706", Submitted: "#2563eb", Reviewed: "#7c3aed" }[s] || "#64748b";
  }
  ceBadge(s) {
    return { Approved: "badge bg", Rejected: "badge br", Assessment: "badge ba", Submitted: "badge bb", Reviewed: "badge bp" }[s] || "badge bgr";
  }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ["CERef,CommNum,Client,Stage,Value,Raised", ...rows.map((c) => `"${c.ceRef}","${c.opportunity?.commNum}","${c.opportunity?.clientName}","${c.stage}","${c.value}","${c.raisedAt}"`)].join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = `ce_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
  }
  static {
    this.\u0275fac = function CeReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CeReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CeReportComponent, selectors: [["app-ce-report"]], decls: 14, vars: 2, consts: [[1, "rpt-shell"], [1, "rpt-toolbar"], [1, "rpt-title"], [1, "rpt-sub"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["routerLink", "/reporting", 1, "btn", "btn-ghost", "btn-sm"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi"], [1, "kpi-val"], [1, "kpi-label"], [1, "kpi-val", "amber"], [1, "kpi-val", "red"], [1, "kpi-val", "green"], [1, "card"], [1, "card-hdr"], [1, "card-title"], [1, "card-body"], [1, "bar-chart"], ["class", "bar-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tbl-wrap"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], ["class", "bar-fill-text", 4, "ngIf"], [1, "bar-val"], [1, "bar-fill-text"], [1, "chip"], [1, "text-muted"], [1, "badge"], [1, "val"], [1, "empty"]], template: function CeReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Compensation Event Summary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "CE pipeline analysis, risk assessment and approval tracking");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function CeReportComponent_Template_button_click_8_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(9, "\u2B07 CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "\u2190 Reports");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, CeReportComponent_ng_container_12_Template, 51, 8, "ng-container", 7)(13, CeReportComponent_div_13_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.data());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, CurrencyPipe, DatePipe], styles: [_c1], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CeReportComponent, [{
    type: Component,
    args: [{ selector: "app-ce-report", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Compensation Event Summary</h1><p class="rpt-sub">CE pipeline analysis, risk assessment and approval tracking</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">\u2B07 CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">\u2190 Reports</a></div>
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
    <div *ngIf="!data()" class="empty">Loading report\u2026</div>
  </div>
  `, styles: ['/* angular:styles/component:css;ac03a079a93478cd5bc80b0b7707eb1513bdc86fcdcd6d334450233113f6bfe6;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CeReportComponent, { className: "CeReportComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 374 });
})();
var SrpReportComponent = class _SrpReportComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.trkId = (_, o) => o.id;
  }
  ngOnInit() {
    this.api.get("/v1/reporting/srp").pipe(takeUntil(this.destroy$)).subscribe((d) => this.data.set(d));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  srpPalette(s) {
    return { Approved: "#16a34a", SentForApproval: "#d97706", Draft: "#2563eb", Rejected: "#dc2626" }[s] || "#94a3b8";
  }
  srpBadge(s) {
    return { Approved: "badge bg", SentForApproval: "badge ba", Draft: "badge bb", Rejected: "badge br" }[s] || "badge bgr";
  }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ["CommNum,Client,Status,ApprovedBy", ...rows.map((s) => `"${s.opportunity?.commNum}","${s.opportunity?.clientName}","${s.status}","${s.approvedBy || ""}"`)].join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = `srp_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
  }
  static {
    this.\u0275fac = function SrpReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SrpReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SrpReportComponent, selectors: [["app-srp-report"]], decls: 14, vars: 2, consts: [[1, "rpt-shell"], [1, "rpt-toolbar"], [1, "rpt-title"], [1, "rpt-sub"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["routerLink", "/reporting", 1, "btn", "btn-ghost", "btn-sm"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi"], [1, "kpi-val"], [1, "kpi-label"], [1, "kpi-val", "amber"], [1, "kpi-val", "red"], [1, "kpi-val", "green"], ["class", "card", 4, "ngIf"], [1, "row-grid"], [1, "card"], [1, "card-hdr"], [1, "card-title"], [1, "card-body"], [1, "bar-chart"], ["class", "bar-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tbl-wrap", 2, "max-height", "300px", "overflow-y", "auto"], [3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "card-hdr", 2, "background", "#fff8f0", "border-bottom-color", "#fed7aa"], [1, "card-title", 2, "color", "#c2410c"], [1, "text-muted"], [1, "tbl-wrap"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "chip"], [1, "overdue"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], ["class", "bar-fill-text", 4, "ngIf"], [1, "bar-val"], [1, "bar-fill-text"], [3, "routerLink"], [1, "badge"], [1, "empty"]], template: function SrpReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "SRP Approval Status Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Approval pipeline, bottlenecks and overdue SRPs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function SrpReportComponent_Template_button_click_8_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(9, "\u2B07 CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "\u2190 Reports");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, SrpReportComponent_ng_container_12_Template, 49, 9, "ng-container", 7)(13, SrpReportComponent_div_13_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.data());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, DatePipe], styles: [_c1], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SrpReportComponent, [{
    type: Component,
    args: [{ selector: "app-srp-report", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">SRP Approval Status Report</h1><p class="rpt-sub">Approval pipeline, bottlenecks and overdue SRPs</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">\u2B07 CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">\u2190 Reports</a></div>
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
          <span class="card-title" style="color:#c2410c">\u26A0 Overdue Approvals \u2014 Immediate Action Required</span>
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
                  <td class="text-muted">{{ s.approvedBy || '\u2014' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ng-container>
    <div *ngIf="!data()" class="empty">Loading report\u2026</div>
  </div>
  `, styles: ['/* angular:styles/component:css;ac03a079a93478cd5bc80b0b7707eb1513bdc86fcdcd6d334450233113f6bfe6;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SrpReportComponent, { className: "SrpReportComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 477 });
})();
var InvoiceReportComponent = class _InvoiceReportComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.ageColors = ["#16a34a", "#2563eb", "#d97706", "#dc2626"];
    this.trkId = (_, o) => o.id;
    this.maxVal = maxVal;
  }
  ngOnInit() {
    this.api.get("/v1/reporting/invoices").pipe(takeUntil(this.destroy$)).subscribe((d) => this.data.set(d));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  invBadge(s) {
    return { Paid: "badge bg", Pending: "badge ba", Overdue: "badge br", Draft: "badge bb", Cancelled: "badge bgr" }[s] || "badge bgr";
  }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ["InvoiceRef,CommNum,Client,NetAmount,Status,Issued", ...rows.map((i) => `"${i.invoiceRef}","${i.schedule?.opportunity?.commNum}","${i.schedule?.opportunity?.clientName}","${i.netAmount}","${i.status}","${i.issuedAt}"`)].join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = `invoices_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
  }
  static {
    this.\u0275fac = function InvoiceReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InvoiceReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceReportComponent, selectors: [["app-invoice-report"]], decls: 14, vars: 2, consts: [[1, "rpt-shell"], [1, "rpt-toolbar"], [1, "rpt-title"], [1, "rpt-sub"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["routerLink", "/reporting", 1, "btn", "btn-ghost", "btn-sm"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi"], [1, "kpi-val", "red"], [1, "kpi-label"], [1, "kpi-val", "green"], [1, "kpi-val"], [1, "card"], [1, "card-hdr"], [1, "card-title"], [1, "card-body"], [1, "ageing-grid"], ["class", "ageing-bucket", 3, "background", "border", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "margin-top", "12px"], [1, "bar-chart"], ["class", "bar-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tbl-wrap"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ageing-bucket"], [1, "ageing-val"], [1, "ageing-lbl"], [2, "font-size", "11px", "color", "#94a3b8", "margin-top", "2px"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], ["class", "bar-fill-text", 4, "ngIf"], [1, "bar-val"], [1, "bar-fill-text"], [1, "chip"], [1, "text-muted"], [1, "val"], [1, "badge"], [1, "empty"]], template: function InvoiceReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Invoice Ageing Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Outstanding invoice analysis by payment age and overdue recovery");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function InvoiceReportComponent_Template_button_click_8_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(9, "\u2B07 CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "\u2190 Reports");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, InvoiceReportComponent_ng_container_12_Template, 57, 25, "ng-container", 7)(13, InvoiceReportComponent_div_13_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.data());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, CurrencyPipe, DatePipe], styles: [_c1], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceReportComponent, [{
    type: Component,
    args: [{ selector: "app-invoice-report", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Invoice Ageing Report</h1><p class="rpt-sub">Outstanding invoice analysis by payment age and overdue recovery</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">\u2B07 CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">\u2190 Reports</a></div>
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
    <div *ngIf="!data()" class="empty">Loading report\u2026</div>
  </div>
  `, styles: ['/* angular:styles/component:css;ac03a079a93478cd5bc80b0b7707eb1513bdc86fcdcd6d334450233113f6bfe6;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceReportComponent, { className: "InvoiceReportComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 566 });
})();
var FeeReportComponent = class _FeeReportComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.trkId = (_, o) => o.id;
    this.maxVal = maxVal;
  }
  ngOnInit() {
    this.api.get("/v1/reporting/fees").pipe(takeUntil(this.destroy$)).subscribe((d) => this.data.set(d));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  exportCSV() {
    const rows = this.data()?.rows || [];
    const csv = ["CommNum,Client,ProcRoute,Construction,GrandTotal", ...rows.map((f) => `"${f.opportunity?.commNum}","${f.opportunity?.clientName}","${f.procRoute}","${f.constructionValue}","${f.grandTotal}"`)].join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = `fees_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
  }
  static {
    this.\u0275fac = function FeeReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeeReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeReportComponent, selectors: [["app-fee-report"]], decls: 14, vars: 2, consts: [[1, "rpt-shell"], [1, "rpt-toolbar"], [1, "rpt-title"], [1, "rpt-sub"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["routerLink", "/reporting", 1, "btn", "btn-ghost", "btn-sm"], [4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi"], [1, "kpi-val", "amber"], [1, "kpi-label"], [1, "kpi-val"], [1, "kpi-val", "green"], [1, "row-grid"], [1, "card"], [1, "card-hdr"], [1, "card-title"], [1, "card-body"], ["class", "bar-chart", 4, "ngIf"], [1, "tbl-wrap", 2, "max-height", "300px", "overflow-y", "auto"], [3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bar-chart"], ["class", "bar-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill", 2, "background", "#2563eb"], ["class", "bar-fill-text", 4, "ngIf"], [1, "bar-val"], [1, "bar-fill-text"], [1, "empty"], [3, "routerLink"], [1, "chip"], [1, "text-muted", 2, "font-size", "11px"], [1, "val"]], template: function FeeReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Fee Forecasting Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Commission fee forecast, margin analysis and procurement route breakdown");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function FeeReportComponent_Template_button_click_8_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(9, "\u2B07 CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "\u2190 Reports");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(12, FeeReportComponent_ng_container_12_Template, 51, 21, "ng-container", 7)(13, FeeReportComponent_div_13_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.data());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, DecimalPipe, CurrencyPipe], styles: [_c1], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeReportComponent, [{
    type: Component,
    args: [{ selector: "app-fee-report", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Fee Forecasting Report</h1><p class="rpt-sub">Commission fee forecast, margin analysis and procurement route breakdown</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">\u2B07 CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">\u2190 Reports</a></div>
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
    <div *ngIf="!data()" class="empty">Loading report\u2026</div>
  </div>
  `, styles: ['/* angular:styles/component:css;ac03a079a93478cd5bc80b0b7707eb1513bdc86fcdcd6d334450233113f6bfe6;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeReportComponent, { className: "FeeReportComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 645 });
})();
var ActivityReportComponent = class _ActivityReportComponent {
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
    this.search = "";
    this.from = "";
    this.to = "";
    this.entityType = "";
    this.modules = ["opportunities", "srps", "fee_calculators", "ce_events", "invoices", "suppliers", "users", "delegations"];
    this.trkId = (_, e) => e.id;
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
    const p = { page: this.page(), pageSize: this.pageSize() };
    if (this.search)
      p.search = this.search;
    if (this.entityType)
      p.entityType = this.entityType;
    if (this.from)
      p.from = this.from;
    if (this.to)
      p.to = this.to;
    this.api.getList("/v1/reporting/activity", p).pipe(takeUntil(this.destroy$)).subscribe({
      next: (r) => {
        this.rows.set(r.data);
        this.total.set(r.meta.total);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  onSearch(q) {
    this.search = q;
    this.page.set(1);
    this.load();
  }
  onPage(p) {
    this.page.set(p);
    this.load();
  }
  aBadge(a) {
    return { Create: "badge bg", Update: "badge bb", Approve: "badge bg", Reject: "badge br", Delete: "badge br", System: "badge bgr" }[a] || "badge bgr";
  }
  exportCSV() {
    const rows = this.rows();
    const csv = ["Timestamp,User,Action,Module,Description", ...rows.map((r) => `"${r.createdAt}","${r.user?.name || "System"}","${r.action}","${r.entityType}","${r.description?.replace(/"/g, "'")}"`)].join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = `activity_${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    a.click();
  }
  static {
    this.\u0275fac = function ActivityReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivityReportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivityReportComponent, selectors: [["app-activity-report"]], decls: 52, vars: 15, consts: [[1, "rpt-shell"], [1, "rpt-toolbar"], [1, "rpt-title"], [1, "rpt-sub"], [2, "display", "flex", "gap", "6px"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["routerLink", "/reporting", 1, "btn", "btn-ghost", "btn-sm"], [1, "card"], [1, "card-hdr"], [1, "card-title"], ["type", "date", 2, "border", "1px solid #dde2ee", "border-radius", "5px", "padding", "4px 8px", "font-size", "12px", "font-family", "inherit", 3, "ngModelChange", "ngModel"], [2, "border", "1px solid #dde2ee", "border-radius", "5px", "padding", "4px 8px", "font-size", "12px", "background", "#fff", "cursor", "pointer", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["placeholder", "Search description, user, module\u2026", 3, "searchChange", "count"], [1, "tbl-wrap"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [2, "display", "flex", "justify-content", "space-between", "padding", "8px 12px", "border-top", "1px solid #e2e8f0", "font-size", "12px", "color", "#64748b"], [1, "btn", "btn-ghost", "btn-sm", 3, "click", "disabled"], [2, "padding", "4px 8px"], [3, "value"], [1, "text-muted", 2, "white-space", "nowrap", "font-size", "11px"], [2, "display", "flex", "align-items", "center", "gap", "5px"], [2, "width", "20px", "height", "20px", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "8px", "font-weight", "700", "color", "#fff"], [2, "font-size", "12px"], [1, "badge"], [1, "text-muted"], [2, "max-width", "260px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap", "font-size", "12px"], ["colspan", "5", 1, "empty"]], template: function ActivityReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Activity Report");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Platform audit trail with advanced filtering and export");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
        \u0275\u0275listener("click", function ActivityReportComponent_Template_button_click_8_listener() {
          return ctx.exportCSV();
        });
        \u0275\u0275text(9, "\u2B07 CSV");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 6);
        \u0275\u0275text(11, "\u2190 Reports");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 7)(13, "div", 8)(14, "span", 9);
        \u0275\u0275text(15, "Filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 4)(17, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ActivityReportComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.from, $event) || (ctx.from = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ActivityReportComponent_Template_input_ngModelChange_17_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ActivityReportComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.to, $event) || (ctx.to = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ActivityReportComponent_Template_input_ngModelChange_18_listener() {
          return ctx.load();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "select", 11);
        \u0275\u0275twoWayListener("ngModelChange", function ActivityReportComponent_Template_select_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.entityType, $event) || (ctx.entityType = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ActivityReportComponent_Template_select_ngModelChange_19_listener() {
          return ctx.load();
        });
        \u0275\u0275elementStart(20, "option", 12);
        \u0275\u0275text(21, "All Modules");
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, ActivityReportComponent_option_22_Template, 2, 2, "option", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "app-filter-bar", 14);
        \u0275\u0275listener("searchChange", function ActivityReportComponent_Template_app_filter_bar_searchChange_23_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 15)(25, "table")(26, "thead")(27, "tr")(28, "th");
        \u0275\u0275text(29, "Timestamp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "th");
        \u0275\u0275text(31, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "tbody");
        \u0275\u0275template(39, ActivityReportComponent_tr_39_Template, 17, 13, "tr", 16)(40, ActivityReportComponent_tr_40_Template, 3, 1, "tr", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 18)(42, "span");
        \u0275\u0275text(43);
        \u0275\u0275pipe(44, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 4)(46, "button", 19);
        \u0275\u0275listener("click", function ActivityReportComponent_Template_button_click_46_listener() {
          return ctx.onPage(ctx.page() - 1);
        });
        \u0275\u0275text(47, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "span", 20);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 19);
        \u0275\u0275listener("click", function ActivityReportComponent_Template_button_click_50_listener() {
          return ctx.onPage(ctx.page() + 1);
        });
        \u0275\u0275text(51, "\u203A");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275twoWayProperty("ngModel", ctx.from);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.to);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.entityType);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.modules)("ngForTrackBy", ctx.trkId);
        \u0275\u0275advance();
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(16);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trkId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(44, 13, ctx.total()), " total entries");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.page() <= 1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Page ", ctx.page());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.rows().length < ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, FilterBarComponent, DecimalPipe, DatePipe], styles: [_c1], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityReportComponent, [{
    type: Component,
    args: [{ selector: "app-activity-report", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, FormsModule, FilterBarComponent], template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Activity Report</h1><p class="rpt-sub">Platform audit trail with advanced filtering and export</p></div>
      <div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" (click)="exportCSV()">\u2B07 CSV</button><a class="btn btn-ghost btn-sm" routerLink="/reporting">\u2190 Reports</a></div>
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
      <app-filter-bar placeholder="Search description, user, module\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
            <tr *ngIf="!rows().length"><td colspan="5" class="empty">{{ loading() ? 'Loading\u2026' : 'No activity found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <div style="display:flex;justify-content:space-between;padding:8px 12px;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b">
        <span>{{ total() | number }} total entries</span>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" [disabled]="page()<=1" (click)="onPage(page()-1)">\u2039</button>
          <span style="padding:4px 8px">Page {{ page() }}</span>
          <button class="btn btn-ghost btn-sm" [disabled]="rows().length < pageSize()" (click)="onPage(page()+1)">\u203A</button>
        </div>
      </div>
    </div>
  </div>
  `, styles: ['/* angular:styles/component:css;ac03a079a93478cd5bc80b0b7707eb1513bdc86fcdcd6d334450233113f6bfe6;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivityReportComponent, { className: "ActivityReportComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 721 });
})();
var AiInsightsComponent = class _AiInsightsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.insights = signal([], ...ngDevMode ? [{ debugName: "insights" }] : (
      /* istanbul ignore next */
      []
    ));
    this.generatedAt = signal("", ...ngDevMode ? [{ debugName: "generatedAt" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.api.get("/v1/reporting/ai-insights").pipe(takeUntil(this.destroy$)).subscribe({
      next: (r) => {
        this.insights.set(r.insights || []);
        this.generatedAt.set(r.generatedAt);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  severityIcon(s) {
    return { critical: "\u{1F534}", warning: "\u{1F7E1}", info: "\u{1F535}", good: "\u2705" }[s] || "\u26AA";
  }
  static {
    this.\u0275fac = function AiInsightsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiInsightsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiInsightsComponent, selectors: [["app-ai-insights"]], decls: 16, vars: 7, consts: [[1, "rpt-shell"], [1, "ai-hdr"], [1, "ai-hdr-icon"], [1, "ai-hdr-text"], ["class", "ai-badge", 4, "ngIf"], [1, "refresh-btn", 3, "click", "disabled"], ["class", "card", 4, "ngIf"], ["class", "insight-grid", 4, "ngIf"], [1, "ai-badge"], [1, "card"], [1, "card-body", "empty"], [1, "insight-grid"], ["class", "insight-card", 3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "insight-card"], [1, "insight-hdr"], [1, "insight-cat"], [1, "insight-title"], ["style", "text-align:right", 4, "ngIf"], ["style", "font-size:18px", 4, "ngIf"], [1, "insight-summary"], [1, "insight-rec"], [2, "text-align", "right"], [1, "insight-metric"], [2, "font-size", "10px", "color", "#94a3b8"], [2, "font-size", "18px"], [1, "card-hdr"], [1, "card-title"], [1, "card-body", 2, "display", "flex", "flex-wrap", "wrap", "gap", "8px"], ["routerLink", "/operations/pending", 1, "btn", "btn-primary", "btn-sm"], ["routerLink", "/reporting/srp", 1, "btn", "btn-ghost", "btn-sm"], ["routerLink", "/reporting/invoices", 1, "btn", "btn-ghost", "btn-sm"], ["routerLink", "/reporting/ce", 1, "btn", "btn-ghost", "btn-sm"], ["routerLink", "/reporting/pipeline", 1, "btn", "btn-ghost", "btn-sm"]], template: function AiInsightsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "\u{1F916}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "h2");
        \u0275\u0275text(6, "AI-Powered Insights");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Deterministic pattern analysis \u2014 bottleneck detection, risk indicators, recommendations");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, AiInsightsComponent_span_9_Template, 3, 4, "span", 4);
        \u0275\u0275elementStart(10, "button", 5);
        \u0275\u0275listener("click", function AiInsightsComponent_Template_button_click_10_listener() {
          return ctx.load();
        });
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, AiInsightsComponent_div_12_Template, 3, 0, "div", 6)(13, AiInsightsComponent_div_13_Template, 2, 2, "div", 7)(14, AiInsightsComponent_div_14_Template, 3, 0, "div", 6)(15, AiInsightsComponent_div_15_Template, 15, 0, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.generatedAt());
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.loading() ? "\u27F3 Analysing\u2026" : "\u27F3 Refresh");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && ctx.insights().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && !ctx.insights().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading() && ctx.insights().length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, DatePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.rpt-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.kpi-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.kpi-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.kpi-val.purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 14px;\n}\n.row-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good[_ngcontent-%COMP%]::before {\n  background: #16a34a;\n}\n.insight-card.info[_ngcontent-%COMP%]::before {\n  background: #2563eb;\n}\n.insight-card.warning[_ngcontent-%COMP%]::before {\n  background: #d97706;\n}\n.insight-card.critical[_ngcontent-%COMP%]::before {\n  background: #dc2626;\n}\n.insight-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.insight-metric.info[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.insight-metric.warning[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.insight-metric.critical[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.ageing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.ai-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  padding: 12px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a5f,\n      #2563eb);\n  border-radius: 8px;\n  color: #fff;\n}\n.ai-hdr-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.ai-hdr-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0;\n}\n.ai-hdr-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: .8;\n  margin: 2px 0 0;\n}\n.ai-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .15);\n  padding: 3px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: auto;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .15);\n  border: 1px solid rgba(255, 255, 255, .3);\n  color: #fff;\n  border-radius: 6px;\n  padding: 5px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.refresh-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .25);\n}\n.sev-critical[_ngcontent-%COMP%] {\n  border-left: 4px solid #dc2626 !important;\n}\n.sev-warning[_ngcontent-%COMP%] {\n  border-left: 4px solid #d97706 !important;\n}\n.sev-info[_ngcontent-%COMP%] {\n  border-left: 4px solid #2563eb !important;\n}\n.sev-good[_ngcontent-%COMP%] {\n  border-left: 4px solid #16a34a !important;\n}\n.overdue[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=reporting.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiInsightsComponent, [{
    type: Component,
    args: [{ selector: "app-ai-insights", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
  <div class="rpt-shell">
    <div class="ai-hdr">
      <span class="ai-hdr-icon">\u{1F916}</span>
      <div class="ai-hdr-text">
        <h2>AI-Powered Insights</h2>
        <p>Deterministic pattern analysis \u2014 bottleneck detection, risk indicators, recommendations</p>
      </div>
      <span class="ai-badge" *ngIf="generatedAt()">Generated {{ generatedAt() | date:'dd MMM HH:mm' }}</span>
      <button class="refresh-btn" (click)="load()" [disabled]="loading()">{{ loading() ? '\u27F3 Analysing\u2026' : '\u27F3 Refresh' }}</button>
    </div>

    <div *ngIf="loading()" class="card"><div class="card-body empty">Analysing platform data\u2026</div></div>

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
        <div class="insight-rec">\u{1F4A1} {{ ins.recommendation }}</div>
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
  `, styles: ['/* angular:styles/component:css;9bdb20de50378f90d5dd9826067a5b513c11560c161ed08b6f6c63bda694914c;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.ai-hdr {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  padding: 12px 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a5f,\n      #2563eb);\n  border-radius: 8px;\n  color: #fff;\n}\n.ai-hdr-icon {\n  font-size: 24px;\n}\n.ai-hdr-text h2 {\n  font-size: 15px;\n  font-weight: 700;\n  margin: 0;\n}\n.ai-hdr-text p {\n  font-size: 12px;\n  opacity: .8;\n  margin: 2px 0 0;\n}\n.ai-badge {\n  background: rgba(255, 255, 255, .15);\n  padding: 3px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  margin-left: auto;\n}\n.refresh-btn {\n  background: rgba(255, 255, 255, .15);\n  border: 1px solid rgba(255, 255, 255, .3);\n  color: #fff;\n  border-radius: 6px;\n  padding: 5px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.refresh-btn:hover {\n  background: rgba(255, 255, 255, .25);\n}\n.sev-critical {\n  border-left: 4px solid #dc2626 !important;\n}\n.sev-warning {\n  border-left: 4px solid #d97706 !important;\n}\n.sev-info {\n  border-left: 4px solid #2563eb !important;\n}\n.sev-good {\n  border-left: 4px solid #16a34a !important;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiInsightsComponent, { className: "AiInsightsComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 832 });
})();
var ScheduledReportsComponent = class _ScheduledReportsComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.reports = signal([], ...ngDevMode ? [{ debugName: "reports" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reportTypes = [
      { label: "Pipeline", desc: "Opportunity pipeline by status/sector" },
      { label: "CE Summary", desc: "Compensation event analysis" },
      { label: "SRP Status", desc: "Approval bottlenecks and overdue" },
      { label: "Invoice Ageing", desc: "Outstanding payments by age bucket" },
      { label: "Fee Forecast", desc: "Commission fee forecast" },
      { label: "Activity", desc: "Platform audit trail" },
      { label: "AI Insights", desc: "AI-powered risk analysis" }
    ];
    this.trkIdx = (i) => i;
  }
  ngOnInit() {
    this.api.get("/v1/reporting/scheduled").pipe(takeUntil(this.destroy$)).subscribe((r) => this.reports.set(r || []));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggleEnabled(r) {
    r.enabled = !r.enabled;
    r.status = r.enabled ? "active" : "paused";
    this.reports.set([...this.reports()]);
  }
  runNow(r) {
    alert(`Report "${r.name}" queued for immediate execution.

In production this would trigger the report generation service and deliver to ${r.deliveryMethod}.`);
  }
  createSchedule() {
    alert("Schedule creation UI \u2014 in production this would open a modal to configure a new automated report schedule.");
  }
  static {
    this.\u0275fac = function ScheduledReportsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduledReportsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduledReportsComponent, selectors: [["app-scheduled-reports"]], decls: 17, vars: 4, consts: [[1, "rpt-shell"], [1, "rpt-toolbar"], [1, "rpt-title"], [1, "rpt-sub"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["class", "sched-grid", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "card", 2, "margin-top", "12px"], [1, "card-hdr"], [1, "card-title"], [1, "card-body", 2, "display", "grid", "grid-template-columns", "repeat(auto-fit,minmax(180px,1fr))", "gap", "8px"], ["style", "padding:8px 10px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;font-size:12px", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "sched-grid"], ["class", "sched-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "sched-card"], [1, "sched-card-hdr"], [1, "sched-name"], [1, "sched-meta"], [1, "badge"], [2, "font-size", "11.5px", "color", "#5a6b8a"], [2, "margin-bottom", "3px"], ["style", "margin-bottom:3px", 4, "ngIf"], [4, "ngIf"], ["style", "color:#94a3b8", 4, "ngIf"], [1, "sched-foot"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "btn", "btn-ghost", "btn-sm", 3, "routerLink"], [2, "color", "#94a3b8"], [1, "card"], [1, "card-body", "empty"], [2, "padding", "8px 10px", "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "6px", "font-size", "12px"], [2, "font-weight", "600", "color", "#1a2240"], [2, "color", "#64748b", "font-size", "11px", "margin-top", "2px"]], template: function ScheduledReportsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Scheduled Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Automated report delivery \u2014 configure, schedule and track execution");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 4);
        \u0275\u0275listener("click", function ScheduledReportsComponent_Template_button_click_7_listener() {
          return ctx.createSchedule();
        });
        \u0275\u0275text(8, "+ New Schedule");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ScheduledReportsComponent_div_9_Template, 2, 2, "div", 5)(10, ScheduledReportsComponent_div_10_Template, 3, 0, "div", 6);
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "span", 9);
        \u0275\u0275text(14, "Available Report Types");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275template(16, ScheduledReportsComponent_div_16_Template, 5, 2, "div", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.reports().length);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.reports().length);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.reportTypes)("ngForTrackBy", ctx.trkIdx);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, TitleCasePipe, DatePipe], styles: [_c1], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduledReportsComponent, [{
    type: Component,
    args: [{ selector: "app-scheduled-reports", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
  <div class="rpt-shell">
    <div class="rpt-toolbar">
      <div><h1 class="rpt-title">Scheduled Reports</h1><p class="rpt-sub">Automated report delivery \u2014 configure, schedule and track execution</p></div>
      <button class="btn btn-primary btn-sm" (click)="createSchedule()">+ New Schedule</button>
    </div>
    <div class="sched-grid" *ngIf="reports().length">
      <div class="sched-card" *ngFor="let r of reports(); trackBy: trkIdx">
        <div class="sched-card-hdr">
          <div>
            <div class="sched-name">{{ r.name }}</div>
            <div class="sched-meta">{{ r.frequency | titlecase }} \xB7 {{ r.time }}</div>
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
          <button class="btn btn-ghost btn-sm" (click)="toggleEnabled(r)">{{ r.enabled ? '\u23F8 Pause' : '\u25B6 Enable' }}</button>
          <button class="btn btn-ghost btn-sm" (click)="runNow(r)">\u25B7 Run Now</button>
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
  `, styles: ['/* angular:styles/component:css;ac03a079a93478cd5bc80b0b7707eb1513bdc86fcdcd6d334450233113f6bfe6;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/reporting/reporting.component.ts */\n:host {\n  display: block;\n}\n.rpt-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.rpt-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rpt-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.rpt-sub {\n  font-size: 12px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.kpi {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 13px 15px;\n}\n.kpi-val {\n  font-size: 24px;\n  font-weight: 800;\n  color: #2563eb;\n  line-height: 1.1;\n}\n.kpi-val.red {\n  color: #dc2626;\n}\n.kpi-val.green {\n  color: #16a34a;\n}\n.kpi-val.amber {\n  color: #d97706;\n}\n.kpi-val.purple {\n  color: #7c3aed;\n}\n.kpi-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n  font-weight: 500;\n}\n.kpi-trend {\n  font-size: 10.5px;\n  margin-top: 2px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n.card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.card-title {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.card-body {\n  padding: 14px;\n}\n.row-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.row-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.bar-chart {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.bar-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label {\n  font-size: 11.5px;\n  color: #5a6b8a;\n  width: 170px;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.bar-track {\n  flex: 1;\n  height: 20px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n  position: relative;\n}\n.bar-fill {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .4s;\n  display: flex;\n  align-items: center;\n  padding-left: 6px;\n}\n.bar-fill-text {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n}\n.bar-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 90px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.tbl-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background .08s;\n}\ntbody tr:hover {\n  background: #f8fafc;\n}\ntbody td {\n  padding: 7px 10px;\n  vertical-align: middle;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.bg {\n  background: #dcfce7;\n  color: #166534;\n}\n.ba {\n  background: #fef3c7;\n  color: #92400e;\n}\n.br {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.bb {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.bgr {\n  background: #f1f5f9;\n  color: #475569;\n}\n.bp {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 7px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.val {\n  font-weight: 700;\n  color: #d97706;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.empty {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.insight-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.insight-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n  position: relative;\n  overflow: hidden;\n}\n.insight-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 4px 0 0 4px;\n}\n.insight-card.good::before {\n  background: #16a34a;\n}\n.insight-card.info::before {\n  background: #2563eb;\n}\n.insight-card.warning::before {\n  background: #d97706;\n}\n.insight-card.critical::before {\n  background: #dc2626;\n}\n.insight-hdr {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.insight-cat {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #94a3b8;\n}\n.insight-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 4px;\n}\n.insight-summary {\n  font-size: 12px;\n  color: #5a6b8a;\n  line-height: 1.5;\n}\n.insight-rec {\n  font-size: 11.5px;\n  color: #2563eb;\n  margin-top: 8px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f2f7;\n}\n.insight-metric {\n  font-size: 22px;\n  font-weight: 800;\n}\n.insight-metric.good {\n  color: #16a34a;\n}\n.insight-metric.info {\n  color: #2563eb;\n}\n.insight-metric.warning {\n  color: #d97706;\n}\n.insight-metric.critical {\n  color: #dc2626;\n}\n.ageing-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n}\n.ageing-bucket {\n  padding: 12px;\n  border-radius: 7px;\n  text-align: center;\n}\n.ageing-val {\n  font-size: 20px;\n  font-weight: 800;\n}\n.ageing-lbl {\n  font-size: 11px;\n  color: #5a6b8a;\n  margin-top: 2px;\n}\n.sched-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 12px;\n}\n.sched-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px;\n}\n.sched-card-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.sched-name {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.sched-meta {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-top: 2px;\n}\n.sched-foot {\n  display: flex;\n  gap: 6px;\n  margin-top: 12px;\n  padding-top: 10px;\n  border-top: 1px solid #f0f2f7;\n}\n.overdue {\n  background: #fee2e2;\n  color: #991b1b;\n  font-size: 10.5px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 8px;\n}\n.progress-ring {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.ring-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.ring-label {\n  font-size: 11px;\n  color: #8a9bb8;\n}\n.donut-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.donut-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.donut-leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #5a6b8a;\n}\n.donut-leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=reporting.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduledReportsComponent, { className: "ScheduledReportsComponent", filePath: "src/app/features/reporting/reporting.component.ts", lineNumber: 905 });
})();
export {
  ActivityReportComponent,
  AiInsightsComponent,
  CeReportComponent,
  FeeReportComponent,
  InvoiceReportComponent,
  PipelineReportComponent,
  ReportingHubComponent,
  ScheduledReportsComponent,
  SrpReportComponent
};
//# sourceMappingURL=chunk-57RWZTFR.js.map
