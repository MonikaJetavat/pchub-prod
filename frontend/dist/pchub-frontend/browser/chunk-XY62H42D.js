import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-VJ5BUTS4.js";
import {
  ActivatedRoute,
  ApiService,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  Subject,
  __spreadValues,
  debounceTime,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YNIEOD7T.js";

// src/app/features/fee-calculator/fee-calculator.component.ts
var _c0 = () => [0, 1, 2, 3, 4, 5, 6, 7];
function FeeCalculatorComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.opp == null ? null : ctx_r0.opp.commNum);
  }
}
function FeeCalculatorComponent_div_21_div_4_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Override PSC / PSSC Fee %");
    \u0275\u0275elementEnd();
  }
}
function FeeCalculatorComponent_div_21_div_4_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r0.fc.overridePSCPct, "1.2-2"));
  }
}
function FeeCalculatorComponent_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3, "Charges for Prime Core Services (RIBA 2\u20137) \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 23)(7, "span", 24);
    \u0275\u0275text(8, "Charges for Core Services (RIBA 2\u20137) \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "span", 24);
    \u0275\u0275text(13, "Time Charges (excl. CEs) \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "div", 26);
    \u0275\u0275elementStart(17, "div", 23)(18, "span", 24);
    \u0275\u0275text(19, "Sub Total: Core Services + Time Charges \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 27);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "div", 26);
    \u0275\u0275elementStart(23, "div", 23)(24, "span", 24);
    \u0275\u0275text(25, "External Consultancy (excl. CEs) \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 25);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 23)(29, "span", 24);
    \u0275\u0275text(30, "Total of Charges \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 25);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 26);
    \u0275\u0275elementStart(34, "div", 23)(35, "span", 24);
    \u0275\u0275text(36, "PSC / PSSC Fee Percentage %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 25);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 23);
    \u0275\u0275template(41, FeeCalculatorComponent_div_21_div_4_span_41_Template, 2, 0, "span", 28)(42, FeeCalculatorComponent_div_21_div_4_span_42_Template, 3, 4, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 23)(44, "span", 24);
    \u0275\u0275text(45, "PSC / PSSC Fee \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 25);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 23)(49, "span", 24);
    \u0275\u0275text(50, "Total Commission Value \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 27);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(53, "div", 26);
    \u0275\u0275elementStart(54, "div", 23)(55, "span", 24);
    \u0275\u0275text(56, "Disbursements (excl. CEs) \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 25);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 23)(60, "span", 24);
    \u0275\u0275text(61, "Total Approved CEs \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 30);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 23)(65, "span", 24);
    \u0275\u0275text(66, "Total Open CEs \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span", 31);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 23)(70, "span", 24);
    \u0275\u0275text(71, "Total Rejected CEs \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span", 32);
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(74, "div", 26);
    \u0275\u0275elementStart(75, "div", 23)(76, "span", 24);
    \u0275\u0275text(77, "Overall Commission Value \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 33);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(80, "div", 26);
    \u0275\u0275elementStart(81, "div", 23)(82, "span", 24);
    \u0275\u0275text(83, "Total Disbursements (inc. CEs) \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span", 25);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 23)(87, "span", 24);
    \u0275\u0275text(88, "Total PSC / PSSC Fee (inc. CEs) \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "span", 25);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.tcExclCE));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.subTotal));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.nsfExclCE));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.totalCharges));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 18, t_r2.pscPct, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.fc.overridePSCPct > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fc.overridePSCPct > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.pscFee));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.totalCommission));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.disbExclCE));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.totalApproved));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.totalOpen));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.totalRejected));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.overall));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.disbInclCE));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmt(t_r2.pscFee));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fc.timeCharges.length);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA3", ctx_r0.fmt(ctx_r0.tcTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fc.nonSfr.length);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA3", ctx_r0.fmt(ctx_r0.extTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.fc.disbursements.length);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xA3", ctx_r0.fmt(ctx_r0.disbTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "label", 51);
    \u0275\u0275text(4, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_5_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.inputDate, $event) || (ctx_r0.fc.inputDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_5_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 53)(7, "label", 51);
    \u0275\u0275text(8, "1. Estimated Construction Value (\xA3)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_5_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.constructionValue, $event) || (ctx_r0.fc.constructionValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_5_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onConstructionValueChange());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 55)(11, "strong", 56);
    \u0275\u0275text(12, "2. Programme Benchmark Defaults");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 57)(14, "span");
    \u0275\u0275text(15, "Pre Contract (Weeks): ");
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Post Contract (Weeks): ");
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.inputDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.constructionValue);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 4, ctx_r0.fc.preContractWeeks, "1.2-2"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 7, ctx_r0.fc.postContractWeeks, "1.2-2"));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rs_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("S", rs_r8);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 73);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    \u0275\u0275property("value", s_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r10);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    \u0275\u0275property("value", p_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 61)(2, "button", 62);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template_button_click_2_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.editService(i_r7));
    });
    \u0275\u0275text(3, "\u270F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275template(7, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_span_7_Template, 2, 1, "span", 64)(8, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_span_8_Template, 2, 0, "span", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template_select_ngModelChange_10_listener($event) {
      const svc_r9 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(svc_r9.supplier, $event) || (svc_r9.supplier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template_select_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(11, "option", 67);
    \u0275\u0275text(12, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_option_13_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "select", 69);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template_select_ngModelChange_15_listener($event) {
      const svc_r9 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(svc_r9.procRoute, $event) || (svc_r9.procRoute = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template_select_ngModelChange_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275template(16, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_option_16_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 70)(18, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template_input_ngModelChange_18_listener($event) {
      const svc_r9 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(svc_r9.isPct, $event) || (svc_r9.isPct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template_input_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const svc_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(svc_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", svc_r9.ribaStages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !svc_r9.ribaStages.length);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", svc_r9.supplier);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.suppliers);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", svc_r9.procRoute);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.procRoutes);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", svc_r9.isPct);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "table", 59)(2, "thead")(3, "tr");
    \u0275\u0275element(4, "th");
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Service Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "RIBA Stages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Procurement Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "% Charges?");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_tr_16_Template, 19, 8, "tr", 60);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.fc.selectedServices);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_15_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275property("value", r_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r13);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 75)(2, "div", 50)(3, "label", 51);
    \u0275\u0275text(4, "Procurement Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_15_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.procRoute, $event) || (ctx_r0.fc.procRoute = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_15_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275template(6, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_15_option_6_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 77);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 50)(11, "label", 51);
    \u0275\u0275text(12, "Override PSC / PSSC Fee % (0 = use default)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_15_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.overridePSCPct, $event) || (ctx_r0.fc.overridePSCPct = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_15_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.procRoute);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.procRouteFull);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" PSC Rate: ", \u0275\u0275pipeBind2(9, 4, ctx_r0.getPscPct(), "1.2-2"), "% ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.overridePSCPct);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    \u0275\u0275property("value", s_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r15);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    \u0275\u0275property("value", s_r16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r16);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "label", 51);
    \u0275\u0275text(2, "Inflation Applied");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_div_24_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.inflationApplied, $event) || (ctx_r0.fc.inflationApplied = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_div_24_Template_select_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(4, "option");
    \u0275\u0275text(5, "Outset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option");
    \u0275\u0275text(7, "Midpoint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option");
    \u0275\u0275text(9, "End");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.inflationApplied);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 75)(2, "div", 50)(3, "label", 51);
    \u0275\u0275text(4, "Contract Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.contractLead, $event) || (ctx_r0.fc.contractLead = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(6, "option", 67);
    \u0275\u0275text(7, "Please Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_option_8_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 50)(10, "label", 51);
    \u0275\u0275text(11, "Supervisor(s)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.supervisor, $event) || (ctx_r0.fc.supervisor = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_Template_select_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(13, "option", 67);
    \u0275\u0275text(14, "Please Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_option_15_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 50)(17, "label", 51);
    \u0275\u0275text(18, "Inflation Required?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_Template_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.inflationRequired, $event) || (ctx_r0.fc.inflationRequired = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_Template_select_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(20, "option");
    \u0275\u0275text(21, "No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option");
    \u0275\u0275text(23, "Yes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(24, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_div_24_Template, 10, 1, "div", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.contractLead);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.primaryServices);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.supervisor);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.primaryServices);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.inflationRequired);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.fc.inflationRequired === "Yes");
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r19 = ctx.$implicit;
    \u0275\u0275property("value", b_r19);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r19);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r20 = ctx.$implicit;
    \u0275\u0275property("value", n_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r20);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 75)(2, "div", 50)(3, "label", 51);
    \u0275\u0275text(4, "BIM Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.bim, $event) || (ctx_r0.fc.bim = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275template(6, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_option_6_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50)(8, "label", 51);
    \u0275\u0275text(9, "NEC Contract Form");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.fc.necContractForm, $event) || (ctx_r0.fc.necContractForm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_Template_select_ngModelChange_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275template(11, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_option_11_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.bim);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.bimOptions);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.fc.necContractForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.necForms);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 45);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_16_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggle("input"));
    });
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "\u25BC 1. Input");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_5_Template, 24, 10, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44)(7, "div", 45);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_16_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggle("services"));
    });
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "\u25BC 3. Services");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_10_Template, 17, 1, "div", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 44)(12, "div", 45);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_16_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggle("proc"));
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "\u25BC 4. Construction Procurement Route");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_15_Template, 14, 7, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 44)(17, "div", 45);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_16_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggle("escalator"));
    });
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "\u25BC 5. Escalator");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_20_Template, 25, 6, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 44)(22, "div", 45);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_16_Template_div_click_22_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggle("bim"));
    });
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "\u25BC 6. BIM / NEC Contract");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, FeeCalculatorComponent_div_21_ng_container_6_div_16_div_25_Template, 12, 4, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["input"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["services"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["proc"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["escalator"]);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["bim"]);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Total: \xA3", ctx_r0.fmt(ctx_r0.tcTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r24 = ctx.$implicit;
    \u0275\u0275property("value", d_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r24);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r25 = ctx.$implicit;
    \u0275\u0275property("value", s_r25);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r25);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r26 = ctx.$implicit;
    \u0275\u0275property("value", n_r26);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Stage ", n_r26);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r27 = ctx.$implicit;
    \u0275\u0275property("value", g_r27.grade);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r27.grade);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_select_ngModelChange_4_listener($event) {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(r_r23.discipline, $event) || (r_r23.discipline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_select_ngModelChange_4_listener() {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onTCGradeOrHoursChange(r_r23));
    });
    \u0275\u0275elementStart(5, "option", 67);
    \u0275\u0275text(6, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_option_7_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_input_ngModelChange_9_listener($event) {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(r_r23.secondaryService, $event) || (r_r23.secondaryService = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "select", 98);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_select_ngModelChange_11_listener($event) {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(r_r23.supplier, $event) || (r_r23.supplier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_select_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(12, "option", 67);
    \u0275\u0275text(13, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_option_14_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_select_ngModelChange_16_listener($event) {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(r_r23.ribaStage, $event) || (r_r23.ribaStage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_select_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(17, "option", 74);
    \u0275\u0275text(18, "\u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_option_19_Template, 2, 2, "option", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td")(21, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_input_ngModelChange_21_listener($event) {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(r_r23.taskDetails, $event) || (r_r23.taskDetails = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_input_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td")(23, "select", 98);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_select_ngModelChange_23_listener($event) {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(r_r23.staffGrade, $event) || (r_r23.staffGrade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_select_ngModelChange_23_listener() {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onTCGradeChange(r_r23));
    });
    \u0275\u0275elementStart(24, "option", 67);
    \u0275\u0275text(25, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_option_26_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_input_ngModelChange_28_listener($event) {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(r_r23.estHours, $event) || (r_r23.estHours = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_input_ngModelChange_28_listener() {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onTCHoursChange(r_r23));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "td")(30, "input", 102);
    \u0275\u0275pipe(31, "number");
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_input_ngModelChange_30_listener($event) {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      \u0275\u0275twoWayBindingSet(r_r23.overrideRate, $event) || (r_r23.overrideRate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_input_ngModelChange_30_listener() {
      const r_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onTCRateChange(r_r23));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 103);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 90)(35, "button", 104);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_button_click_35_listener() {
      const i_r28 = \u0275\u0275restoreView(_r22).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.copyTC(i_r28));
    });
    \u0275\u0275text(36, "\u2398");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 105);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template_button_click_37_listener() {
      const i_r28 = \u0275\u0275restoreView(_r22).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.delTC(i_r28));
    });
    \u0275\u0275text(38, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r23 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("ce-row", r_r23.ceId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r28 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r23.discipline);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.tcDisciplines);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r23.secondaryService);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r23.supplier);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.suppliers);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r23.ribaStage);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(22, _c0))("ngForTrackBy", ctx_r0.trkIdx);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r23.taskDetails);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r23.staffGrade);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.staffGrades);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r23.estHours);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r23.overrideRate);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(31, 19, r_r23.hourlyRate || 0, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.fmt(ctx_r0.tcRowTotal(r_r23)));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 106);
    \u0275\u0275text(2, "No time charge rows. Click + Add Row below.");
    \u0275\u0275elementEnd()();
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_tfoot_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr", 107)(2, "td", 108);
    \u0275\u0275text(3, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "td");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xA3", ctx_r0.fmt(ctx_r0.tcTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Total: \xA3", ctx_r0.fmt(ctx_r0.tcTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.tcSearch, $event) || (ctx_r0.tcSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_17_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.filterTC());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FeeCalculatorComponent_div_21_ng_container_6_div_17_span_3_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 84)(5, "table", 85)(6, "thead")(7, "tr")(8, "th", 86);
    \u0275\u0275text(9, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Discipline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Secondary Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "RIBA Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Task Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Staff Grade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 87);
    \u0275\u0275text(23, "Est Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 88);
    \u0275\u0275text(25, "Rate \xA3/hr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 89);
    \u0275\u0275text(27, "Total \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "th", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275template(30, FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_30_Template, 39, 23, "tr", 91)(31, FeeCalculatorComponent_div_21_ng_container_6_div_17_tr_31_Template, 3, 0, "tr", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, FeeCalculatorComponent_div_21_ng_container_6_div_17_tfoot_32_Template, 7, 1, "tfoot", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 92)(34, "button", 93);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_17_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addTC());
    });
    \u0275\u0275text(35, "\uFF0B Add Row");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, FeeCalculatorComponent_div_21_ng_container_6_div_17_span_36_Template, 2, 1, "span", 83);
    \u0275\u0275elementStart(37, "span", 94);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.tcSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tcTotal > 0);
    \u0275\u0275advance(27);
    \u0275\u0275property("ngForOf", ctx_r0.filteredTC);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.filteredTC.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fc.timeCharges.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.tcTotal > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.fc.timeCharges.length, " rows");
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Total: \xA3", ctx_r0.fmt(ctx_r0.extTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r32 = ctx.$implicit;
    \u0275\u0275property("value", s_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r32);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r33 = ctx.$implicit;
    \u0275\u0275property("value", d_r33);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r33);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r34 = ctx.$implicit;
    \u0275\u0275property("value", p_r34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r34);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 112);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_select_ngModelChange_4_listener($event) {
      const r_r31 = \u0275\u0275restoreView(_r30).$implicit;
      \u0275\u0275twoWayBindingSet(r_r31.supplier, $event) || (r_r31.supplier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(5, "option", 67);
    \u0275\u0275text(6, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_option_7_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_select_ngModelChange_9_listener($event) {
      const r_r31 = \u0275\u0275restoreView(_r30).$implicit;
      \u0275\u0275twoWayBindingSet(r_r31.discipline, $event) || (r_r31.discipline = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_select_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(10, "option", 67);
    \u0275\u0275text(11, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_option_12_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "select", 96);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_select_ngModelChange_14_listener($event) {
      const r_r31 = \u0275\u0275restoreView(_r30).$implicit;
      \u0275\u0275twoWayBindingSet(r_r31.procRoute, $event) || (r_r31.procRoute = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_select_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275template(15, FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_option_15_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_input_ngModelChange_17_listener($event) {
      const r_r31 = \u0275\u0275restoreView(_r30).$implicit;
      \u0275\u0275twoWayBindingSet(r_r31.services, $event) || (r_r31.services = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_input_ngModelChange_17_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_input_ngModelChange_19_listener($event) {
      const r_r31 = \u0275\u0275restoreView(_r30).$implicit;
      \u0275\u0275twoWayBindingSet(r_r31.netFee, $event) || (r_r31.netFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_input_ngModelChange_19_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 90)(21, "button", 104);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_button_click_21_listener() {
      const i_r35 = \u0275\u0275restoreView(_r30).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.copyExt(i_r35));
    });
    \u0275\u0275text(22, "\u2398");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 105);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template_button_click_23_listener() {
      const i_r35 = \u0275\u0275restoreView(_r30).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.delExt(i_r35));
    });
    \u0275\u0275text(24, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r31 = ctx.$implicit;
    const i_r35 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("ce-row", r_r31.ceId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r35 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r31.supplier);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.suppliers);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r31.discipline);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.tcDisciplines);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r31.procRoute);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.procRoutes);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r31.services);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r31.netFee);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 115);
    \u0275\u0275text(2, "No external consultancy rows. Click + Add Row below.");
    \u0275\u0275elementEnd()();
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_tfoot_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr", 107)(2, "td", 116);
    \u0275\u0275text(3, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "td");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xA3", ctx_r0.fmt(ctx_r0.extTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Total: \xA3", ctx_r0.fmt(ctx_r0.extTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.extSearch, $event) || (ctx_r0.extSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_18_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.filterExt());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FeeCalculatorComponent_div_21_ng_container_6_div_18_span_3_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 84)(5, "table", 110)(6, "thead")(7, "tr")(8, "th", 86);
    \u0275\u0275text(9, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Discipline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Proc. Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Services Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 111);
    \u0275\u0275text(19, "Net Fee \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_22_Template, 25, 11, "tr", 91)(23, FeeCalculatorComponent_div_21_ng_container_6_div_18_tr_23_Template, 3, 0, "tr", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, FeeCalculatorComponent_div_21_ng_container_6_div_18_tfoot_24_Template, 7, 1, "tfoot", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 92)(26, "button", 93);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_18_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addExt());
    });
    \u0275\u0275text(27, "\uFF0B Add Row");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, FeeCalculatorComponent_div_21_ng_container_6_div_18_span_28_Template, 2, 1, "span", 83);
    \u0275\u0275elementStart(29, "span", 94);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.extSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.extTotal > 0);
    \u0275\u0275advance(19);
    \u0275\u0275property("ngForOf", ctx_r0.filteredExt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.filteredExt.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fc.nonSfr.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.extTotal > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.fc.nonSfr.length, " rows");
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_19_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Total: \xA3", ctx_r0.fmt(ctx_r0.disbTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r39 = ctx.$implicit;
    \u0275\u0275property("value", s_r39);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r39);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 86);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 112);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template_select_ngModelChange_4_listener($event) {
      const r_r38 = \u0275\u0275restoreView(_r37).$implicit;
      \u0275\u0275twoWayBindingSet(r_r38.supplier, $event) || (r_r38.supplier = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template_select_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementStart(5, "option", 67);
    \u0275\u0275text(6, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_option_7_Template, 2, 2, "option", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td")(9, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template_input_ngModelChange_9_listener($event) {
      const r_r38 = \u0275\u0275restoreView(_r37).$implicit;
      \u0275\u0275twoWayBindingSet(r_r38.details, $event) || (r_r38.details = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template_input_ngModelChange_11_listener($event) {
      const r_r38 = \u0275\u0275restoreView(_r37).$implicit;
      \u0275\u0275twoWayBindingSet(r_r38.netFee, $event) || (r_r38.netFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template_input_ngModelChange_11_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.dirty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 90)(13, "button", 104);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template_button_click_13_listener() {
      const i_r40 = \u0275\u0275restoreView(_r37).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.copyDisb(i_r40));
    });
    \u0275\u0275text(14, "\u2398");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 105);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template_button_click_15_listener() {
      const i_r40 = \u0275\u0275restoreView(_r37).index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.delDisb(i_r40));
    });
    \u0275\u0275text(16, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r38 = ctx.$implicit;
    const i_r40 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("ce-row", r_r38.ceId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r40 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r38.supplier);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.suppliers);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r38.details);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", r_r38.netFee);
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 119);
    \u0275\u0275text(2, "No disbursements. Click + Add Row below.");
    \u0275\u0275elementEnd()();
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_19_tfoot_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr", 107)(2, "td", 120);
    \u0275\u0275text(3, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 109);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "td");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xA3", ctx_r0.fmt(ctx_r0.disbTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_19_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 95);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Total: \xA3", ctx_r0.fmt(ctx_r0.disbTotal));
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_19_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.disbSearch, $event) || (ctx_r0.disbSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FeeCalculatorComponent_div_21_ng_container_6_div_19_Template_input_ngModelChange_2_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.filterDisb());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FeeCalculatorComponent_div_21_ng_container_6_div_19_span_3_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 84)(5, "table", 117)(6, "thead")(7, "tr")(8, "th", 86);
    \u0275\u0275text(9, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Disbursement Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 111);
    \u0275\u0275text(15, "Net Fee \xA3");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275template(18, FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_18_Template, 17, 7, "tr", 91)(19, FeeCalculatorComponent_div_21_ng_container_6_div_19_tr_19_Template, 3, 0, "tr", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, FeeCalculatorComponent_div_21_ng_container_6_div_19_tfoot_20_Template, 7, 1, "tfoot", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 92)(22, "button", 93);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_div_19_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addDisb());
    });
    \u0275\u0275text(23, "\uFF0B Add Row");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, FeeCalculatorComponent_div_21_ng_container_6_div_19_span_24_Template, 2, 1, "span", 83);
    \u0275\u0275elementStart(25, "span", 94);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.disbSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.disbTotal > 0);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.filteredDisb);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.filteredDisb.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fc.disbursements.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.disbTotal > 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.fc.disbursements.length, " rows");
  }
}
function FeeCalculatorComponent_div_21_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 37);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.subTab = "config");
    });
    \u0275\u0275text(3, "\u2699 Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.subTab = "tc");
    });
    \u0275\u0275text(5, " \u23F1 Time Charges ");
    \u0275\u0275template(6, FeeCalculatorComponent_div_21_ng_container_6_span_6_Template, 2, 1, "span", 38)(7, FeeCalculatorComponent_div_21_ng_container_6_span_7_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 37);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.subTab = "ext");
    });
    \u0275\u0275text(9, " \u{1F3E2} External Consultancy ");
    \u0275\u0275template(10, FeeCalculatorComponent_div_21_ng_container_6_span_10_Template, 2, 1, "span", 38)(11, FeeCalculatorComponent_div_21_ng_container_6_span_11_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 37);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_21_ng_container_6_Template_div_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.subTab = "disb");
    });
    \u0275\u0275text(13, " \u{1F4B3} Disbursements ");
    \u0275\u0275template(14, FeeCalculatorComponent_div_21_ng_container_6_span_14_Template, 2, 1, "span", 38)(15, FeeCalculatorComponent_div_21_ng_container_6_span_15_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, FeeCalculatorComponent_div_21_ng_container_6_div_16_Template, 26, 5, "div", 21)(17, FeeCalculatorComponent_div_21_ng_container_6_div_17_Template, 39, 7, "div", 40)(18, FeeCalculatorComponent_div_21_ng_container_6_div_18_Template, 31, 7, "div", 40)(19, FeeCalculatorComponent_div_21_ng_container_6_div_19_Template, 27, 7, "div", 40);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.subTab === "config");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.subTab === "tc");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.fc.timeCharges.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.tcTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.subTab === "ext");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.fc.nonSfr.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.extTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.subTab === "disb");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.fc.disbursements.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.disbTotal > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subTab === "config");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subTab === "tc");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subTab === "ext");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.subTab === "disb");
  }
}
function FeeCalculatorComponent_div_21_div_7_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r41 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r41.replace("Stage ", "S"));
  }
}
function FeeCalculatorComponent_div_21_div_7_tr_17_td_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function FeeCalculatorComponent_div_21_div_7_tr_17_td_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 131);
    \u0275\u0275text(1, "\xB7");
    \u0275\u0275elementEnd();
  }
}
function FeeCalculatorComponent_div_21_div_7_tr_17_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 70);
    \u0275\u0275template(1, FeeCalculatorComponent_div_21_div_7_tr_17_td_3_span_1_Template, 2, 0, "span", 128)(2, FeeCalculatorComponent_div_21_div_7_tr_17_td_3_span_2_Template, 2, 0, "span", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r42 = ctx.$implicit;
    const svc_r43 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", svc_r43.ribaStages == null ? null : svc_r43.ribaStages.includes(n_r42));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(svc_r43.ribaStages == null ? null : svc_r43.ribaStages.includes(n_r42)));
  }
}
function FeeCalculatorComponent_div_21_div_7_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, FeeCalculatorComponent_div_21_div_7_tr_17_td_3_Template, 3, 2, "td", 126);
    \u0275\u0275elementStart(4, "td", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 127);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const svc_r43 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r43.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c0))("ngForTrackBy", ctx_r0.trkIdx);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r43.supplier || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(svc_r43.procRoute || "\u2014");
  }
}
function FeeCalculatorComponent_div_21_div_7_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 125);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 132);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r44 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r44.discipline || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r44.staffGrade || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, r_r44.estHours, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, r_r44.overrideRate || r_r44.hourlyRate || 0, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xA3", ctx_r0.fmt(ctx_r0.tcRowTotal(r_r44)));
  }
}
function FeeCalculatorComponent_div_21_div_7_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 119);
    \u0275\u0275text(2, "No time charge rows.");
    \u0275\u0275elementEnd()();
  }
}
function FeeCalculatorComponent_div_21_div_7_tfoot_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot")(1, "tr", 107)(2, "td", 133);
    \u0275\u0275text(3, "Total Time Charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 134);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xA3", ctx_r0.fmt(ctx_r0.tcTotal));
  }
}
function FeeCalculatorComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div", 121)(3, "span");
    \u0275\u0275text(4, "RIBA Stage Summary \u2014 Services Matrix");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 58)(6, "table", 122)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, FeeCalculatorComponent_div_21_div_7_th_11_Template, 2, 1, "th", 60);
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Route");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, FeeCalculatorComponent_div_21_div_7_tr_17_Template, 8, 6, "tr", 60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 123)(19, "div", 121)(20, "span");
    \u0275\u0275text(21, "Time Charges by Stage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 124)(23, "table", 122)(24, "thead")(25, "tr")(26, "th");
    \u0275\u0275text(27, "Discipline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "th");
    \u0275\u0275text(29, "Staff Grade");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 125);
    \u0275\u0275text(31, "Hours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 125);
    \u0275\u0275text(33, "Rate \xA3/hr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 125);
    \u0275\u0275text(35, "Total \xA3");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275template(37, FeeCalculatorComponent_div_21_div_7_tr_37_Template, 13, 11, "tr", 60)(38, FeeCalculatorComponent_div_21_div_7_tr_38_Template, 3, 0, "tr", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, FeeCalculatorComponent_div_21_div_7_tfoot_39_Template, 6, 1, "tfoot", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.ribaStages);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.fc.selectedServices);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r0.fc.timeCharges);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.fc.timeCharges.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fc.timeCharges.length > 0);
  }
}
function FeeCalculatorComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3, "Tendered Total");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FeeCalculatorComponent_div_21_div_4_Template, 91, 21, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275template(6, FeeCalculatorComponent_div_21_ng_container_6_Template, 20, 18, "ng-container", 20)(7, FeeCalculatorComponent_div_21_div_7_Template, 40, 5, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.totals);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.mainTab === "input");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mainTab === "riba");
  }
}
function FeeCalculatorComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1, " Loading Fee Calculator\u2026 ");
    \u0275\u0275elementEnd();
  }
}
function FeeCalculatorComponent_div_23_div_1_label_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 145)(1, "input", 146);
    \u0275\u0275listener("change", function FeeCalculatorComponent_div_23_div_1_label_7_Template_input_change_1_listener($event) {
      const n_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleRibaStage(ctx_r0.editingServiceIdx, n_r48, $event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r48 = ctx.$implicit;
    const svc_r49 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275styleProp("background", (svc_r49.ribaStages == null ? null : svc_r49.ribaStages.includes(n_r48)) ? "#eff6ff" : "#fff")("border-color", (svc_r49.ribaStages == null ? null : svc_r49.ribaStages.includes(n_r48)) ? "#93c5fd" : "#dde2ee");
    \u0275\u0275advance();
    \u0275\u0275property("checked", svc_r49.ribaStages == null ? null : svc_r49.ribaStages.includes(n_r48));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Stage ", n_r48, " ");
  }
}
function FeeCalculatorComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_23_div_1_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(1, "div", 139);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 140)(4, "label", 141);
    \u0275\u0275text(5, "RIBA Stages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 142);
    \u0275\u0275template(7, FeeCalculatorComponent_div_23_div_1_label_7_Template, 3, 6, "label", 143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 144)(9, "button", 7);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_23_div_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editingServiceIdx = null);
    });
    \u0275\u0275text(10, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const svc_r49 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Edit Service: ", svc_r49.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0))("ngForTrackBy", ctx_r0.trkIdx);
  }
}
function FeeCalculatorComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 136);
    \u0275\u0275listener("click", function FeeCalculatorComponent_div_23_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editingServiceIdx = null);
    });
    \u0275\u0275template(1, FeeCalculatorComponent_div_23_div_1_Template, 11, 4, "div", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fc == null ? null : ctx_r0.fc.selectedServices[ctx_r0.editingServiceIdx]);
  }
}
var FC_STAFF_GRADES = [
  { grade: "Director", rate: 195 },
  { grade: "Associate Director", rate: 165 },
  { grade: "Senior Associate", rate: 145 },
  { grade: "Associate", rate: 125 },
  { grade: "Senior Engineer/Architect", rate: 110 },
  { grade: "Engineer/Architect", rate: 90 },
  { grade: "Graduate", rate: 72 },
  { grade: "Technician", rate: 65 },
  { grade: "Admin", rate: 45 }
];
var FC_RIBA_STAGES = [
  "Stage 0 \u2013 Strategic Definition",
  "Stage 1 \u2013 Preparation & Briefing",
  "Stage 2 \u2013 Concept Design",
  "Stage 3 \u2013 Spatial Coordination",
  "Stage 4 \u2013 Technical Design",
  "Stage 5 \u2013 Construction",
  "Stage 6 \u2013 Handover",
  "Stage 7 \u2013 Use"
];
var FC_PRIMARY_SERVICES = [
  "Project Manager",
  "Quantity Surveyor",
  "Architect",
  "Building Surveyor",
  "Commercial Surveyor",
  "Electrical Engineer",
  "Mechanical Engineer",
  "Structural Engineer"
];
var FC_PROC_ROUTES = ["SFR", "AFR", "CPO", "CT", "BM", "OB", "CPS"];
var FC_SUPPLIERS = [
  "1st Horizon",
  "360 Energy",
  "Perfect Circle",
  "Stride Structural Ltd",
  "Enviro MEP Solutions",
  "CostPro QS Ltd",
  "Urban Transport Consulting",
  "GreenBuild Architects",
  "Apex Civil Engineering",
  "PlanX Consultants",
  "Heritage & Place Ltd",
  "Sustainable Futures Ltd",
  "TechDraw Design Studio",
  "Pick Everard"
];
var FC_PROC_ROUTE_FULL = [
  "Design & Build \u2013 1 stage",
  "Design & Build \u2013 2 stage",
  "Traditional",
  "Framework Agreement",
  "Negotiated"
];
var FC_PSC_PCT = {
  "Design & Build \u2013 1 stage": 2.45,
  "Design & Build \u2013 2 stage": 2.65,
  "Traditional": 2.8,
  "Framework Agreement": 2.2,
  "Negotiated": 2
};
var FC_NEC_FORMS = [
  "Option A NEC4 PSC (Service DA) Priced Contract",
  "Option C NEC4 PSC (Service DA) Target Contract",
  "Option E NEC4 PSC (Service DA) Cost Reimbursable",
  "NEC3 PSC"
];
var FC_BIM = ["Standard (no IM)", "BIM Level 2", "BIM Level 3", "Federated Model"];
function defaultFC() {
  return {
    inputDate: "",
    constructionValue: 0,
    preContractWeeks: 0,
    postContractWeeks: 0,
    procRoute: "Design & Build \u2013 1 stage",
    overridePSCPct: 0,
    contractLead: "",
    supervisor: "",
    bim: "Standard (no IM)",
    necContractForm: "Option A NEC4 PSC (Service DA) Priced Contract",
    necOption: "A",
    inflationRequired: "No",
    inflationApplied: "Outset",
    selectedServices: FC_PRIMARY_SERVICES.map((s) => ({ name: s, ribaStages: [], supplier: "", procRoute: "SFR", isPct: false })),
    timeCharges: [],
    nonSfr: [],
    disbursements: [],
    ceList: []
  };
}
function calcTotals(fc) {
  const tc = fc.timeCharges || [];
  const nsf = fc.nonSfr || [];
  const disb = fc.disbursements || [];
  const tcExclCE = tc.filter((r) => !r.ceId).reduce((a, r) => a + (r.overrideRate > 0 ? r.overrideRate : r.hourlyRate || 0) * (r.estHours || 0) + (r.inflationAmount || 0), 0);
  const nsfExclCE = nsf.filter((r) => !r.ceId).reduce((a, r) => a + (+r.netFee || 0), 0);
  const disbExclCE = disb.filter((r) => !r.ceId).reduce((a, r) => a + (+r.netFee || 0), 0);
  const subTotal = tcExclCE;
  const totalCharges = subTotal + nsfExclCE;
  const pscPct = fc.overridePSCPct > 0 ? +fc.overridePSCPct : FC_PSC_PCT[fc.procRoute] || 2.45;
  const pscFee = totalCharges * pscPct / 100;
  const totalCommission = totalCharges + pscFee;
  const ceMap = {};
  [...tc, ...nsf, ...disb].forEach((r) => {
    if (r.ceId) {
      const ce = (fc.ceList || []).find((c) => c.id === r.ceId);
      if (!ceMap[r.ceId])
        ceMap[r.ceId] = { status: ce?.status || "Open", total: 0 };
      ceMap[r.ceId].total += r.overrideRate || r.hourlyRate ? (r.overrideRate || r.hourlyRate || 0) * (r.estHours || 0) : +r.netFee || 0;
    }
  });
  const ceVals = Object.values(ceMap);
  const totalApproved = ceVals.filter((c) => c.status === "Approved").reduce((a, c) => a + c.total, 0);
  const totalOpen = ceVals.filter((c) => c.status === "Open").reduce((a, c) => a + c.total, 0);
  const totalRejected = ceVals.filter((c) => c.status === "Rejected").reduce((a, c) => a + c.total, 0);
  const overall = totalCommission + disbExclCE;
  return {
    tcExclCE,
    nsfExclCE,
    disbExclCE,
    subTotal,
    totalCharges,
    pscPct,
    pscFee,
    totalCommission,
    totalApproved,
    totalOpen,
    totalRejected,
    overall,
    disbInclCE: disbExclCE + totalApproved,
    overridePSCPct: fc.overridePSCPct
  };
}
function fmtGBP(v) {
  return v.toLocaleString("en-GB", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function calcProgramme(constructionValue) {
  if (!constructionValue || constructionValue <= 0)
    return { pre: 0, post: 0 };
  return {
    pre: +(Math.log10(constructionValue + 1) * 0.6).toFixed(2),
    post: +(Math.log10(constructionValue + 1) * 1.1).toFixed(2)
  };
}
var FeeCalculatorComponent = class _FeeCalculatorComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.cdr = inject(ChangeDetectorRef);
    this.destroy$ = new Subject();
    this.save$ = new Subject();
    this.undoStack = [];
    this.opp = null;
    this.fc = null;
    this.mainTab = "input";
    this.subTab = "config";
    this.collapsed = {};
    this.saved = false;
    this.editingServiceIdx = null;
    this.tcSearch = "";
    this.extSearch = "";
    this.disbSearch = "";
    this.filteredTC = [];
    this.filteredExt = [];
    this.filteredDisb = [];
    this.staffGrades = FC_STAFF_GRADES;
    this.ribaStages = FC_RIBA_STAGES;
    this.primaryServices = FC_PRIMARY_SERVICES;
    this.suppliers = FC_SUPPLIERS;
    this.procRoutes = FC_PROC_ROUTES;
    this.procRouteFull = FC_PROC_ROUTE_FULL;
    this.necForms = FC_NEC_FORMS;
    this.bimOptions = FC_BIM;
  }
  get tcDisciplines() {
    return this.fc ? [...(this.fc.selectedServices || []).map((s) => s.name), "Non Core", "Other"] : FC_PRIMARY_SERVICES;
  }
  get totals() {
    return this.fc ? calcTotals(this.fc) : null;
  }
  get tcTotal() {
    return (this.fc?.timeCharges || []).reduce((a, r) => a + this.tcRowTotal(r), 0);
  }
  get extTotal() {
    return (this.fc?.nonSfr || []).reduce((a, r) => a + (+r.netFee || 0), 0);
  }
  get disbTotal() {
    return (this.fc?.disbursements || []).reduce((a, r) => a + (+r.netFee || 0), 0);
  }
  get canUndo() {
    return this.undoStack.length > 0;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.api.get(`/v1/opportunities/${id}`).subscribe((o) => {
      this.opp = o;
      this.api.get(`/v1/fee-calculator/${id}`).subscribe((fc) => {
        this.fc = this.hydrate(fc);
        this.filterAll();
        this.cdr.markForCheck();
      });
    });
    this.save$.pipe(debounceTime(2e3), takeUntil(this.destroy$)).subscribe(() => this.doSave());
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  hydrate(fc) {
    const base = defaultFC();
    const merged = __spreadValues(__spreadValues({}, base), fc);
    if (!merged.selectedServices?.length)
      merged.selectedServices = base.selectedServices;
    if (!merged.timeCharges)
      merged.timeCharges = [];
    if (!merged.nonSfr)
      merged.nonSfr = [];
    if (!merged.disbursements)
      merged.disbursements = [];
    if (!merged.ceList)
      merged.ceList = [];
    merged.timeCharges.forEach((r) => {
      if (r.staffGrade && !r.hourlyRate) {
        r.hourlyRate = this.gradeRate(r.staffGrade);
      }
    });
    return merged;
  }
  gradeRate(grade) {
    return FC_STAFF_GRADES.find((g) => g.grade === grade)?.rate || 0;
  }
  fmt(v) {
    return fmtGBP(v);
  }
  getPscPct() {
    return FC_PSC_PCT[this.fc?.procRoute] || 2.45;
  }
  toggle(key) {
    this.collapsed[key] = !this.collapsed[key];
  }
  dirty() {
    this.filterAll();
    this.cdr.markForCheck();
    this.save$.next();
  }
  filterAll() {
    this.filterTC();
    this.filterExt();
    this.filterDisb();
  }
  filterTC() {
    const q = this.tcSearch.toLowerCase();
    this.filteredTC = q ? (this.fc?.timeCharges || []).filter((r) => Object.values(r).some((v) => String(v || "").toLowerCase().includes(q))) : [...this.fc?.timeCharges || []];
  }
  filterExt() {
    const q = this.extSearch.toLowerCase();
    this.filteredExt = q ? (this.fc?.nonSfr || []).filter((r) => Object.values(r).some((v) => String(v || "").toLowerCase().includes(q))) : [...this.fc?.nonSfr || []];
  }
  filterDisb() {
    const q = this.disbSearch.toLowerCase();
    this.filteredDisb = q ? (this.fc?.disbursements || []).filter((r) => Object.values(r).some((v) => String(v || "").toLowerCase().includes(q))) : [...this.fc?.disbursements || []];
  }
  tcRowTotal(r) {
    const rate = r.overrideRate > 0 ? r.overrideRate : r.hourlyRate || 0;
    return rate * (r.estHours || 0) + (r.inflationAmount || 0);
  }
  onConstructionValueChange() {
    const p = calcProgramme(this.fc.constructionValue);
    this.fc.preContractWeeks = p.pre;
    this.fc.postContractWeeks = p.post;
    this.dirty();
  }
  onTCGradeChange(r) {
    r.hourlyRate = this.gradeRate(r.staffGrade);
    this.dirty();
  }
  onTCGradeOrHoursChange(r) {
    this.dirty();
  }
  onTCHoursChange(r) {
    this.dirty();
  }
  onTCRateChange(r) {
    this.dirty();
  }
  // ── Time Charges ──
  addTC() {
    this.pushUndo();
    this.fc.timeCharges.push({
      discipline: "",
      secondaryService: "",
      supplier: "",
      ribaStage: null,
      taskDetails: "",
      staffGrade: "",
      hourlyRate: 0,
      estHours: 0,
      overrideRate: 0,
      inflationAmount: 0,
      ceId: null
    });
    this.dirty();
  }
  delTC(i) {
    this.pushUndo();
    this.fc.timeCharges.splice(i, 1);
    this.dirty();
  }
  copyTC(i) {
    this.pushUndo();
    this.fc.timeCharges.splice(i + 1, 0, __spreadValues({}, this.fc.timeCharges[i]));
    this.dirty();
  }
  // ── External Consultancy ──
  addExt() {
    this.pushUndo();
    this.fc.nonSfr.push({ supplier: "", discipline: "", procRoute: "SFR", services: "", netFee: 0, ceId: null });
    this.dirty();
  }
  delExt(i) {
    this.pushUndo();
    this.fc.nonSfr.splice(i, 1);
    this.dirty();
  }
  copyExt(i) {
    this.pushUndo();
    this.fc.nonSfr.splice(i + 1, 0, __spreadValues({}, this.fc.nonSfr[i]));
    this.dirty();
  }
  // ── Disbursements ──
  addDisb() {
    this.pushUndo();
    this.fc.disbursements.push({ supplier: "", details: "", netFee: 0, ceId: null });
    this.dirty();
  }
  delDisb(i) {
    this.pushUndo();
    this.fc.disbursements.splice(i, 1);
    this.dirty();
  }
  copyDisb(i) {
    this.pushUndo();
    this.fc.disbursements.splice(i + 1, 0, __spreadValues({}, this.fc.disbursements[i]));
    this.dirty();
  }
  // ── Services ──
  editService(i) {
    this.editingServiceIdx = i;
  }
  toggleRibaStage(svcIdx, stage, checked) {
    const svc = this.fc.selectedServices[svcIdx];
    if (!svc.ribaStages)
      svc.ribaStages = [];
    if (checked && !svc.ribaStages.includes(stage))
      svc.ribaStages.push(stage);
    else if (!checked)
      svc.ribaStages = svc.ribaStages.filter((s) => s !== stage);
    this.dirty();
  }
  // ── Undo ──
  pushUndo() {
    this.undoStack.push(JSON.stringify({
      tc: [...this.fc.timeCharges],
      nsf: [...this.fc.nonSfr],
      disb: [...this.fc.disbursements]
    }));
    if (this.undoStack.length > 20)
      this.undoStack.shift();
  }
  undo() {
    if (!this.undoStack.length)
      return;
    const snap = JSON.parse(this.undoStack.pop());
    this.fc.timeCharges = snap.tc;
    this.fc.nonSfr = snap.nsf;
    this.fc.disbursements = snap.disb;
    this.dirty();
  }
  save() {
    this.doSave();
  }
  doSave() {
    if (!this.fc || !this.opp)
      return;
    this.api.put(`/v1/fee-calculator/${this.opp.id}`, this.fc).subscribe(() => {
      this.saved = true;
      this.cdr.markForCheck();
      setTimeout(() => {
        this.saved = false;
        this.cdr.markForCheck();
      }, 2500);
    });
  }
  print() {
    window.print();
  }
  static {
    this.\u0275fac = function FeeCalculatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeeCalculatorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeeCalculatorComponent, selectors: [["app-fee-calculator"]], decls: 24, vars: 12, consts: [[1, "fc-shell"], [1, "fc-toolbar"], ["routerLink", "/opportunities", 2, "font-size", "12px", "color", "#64748b", "text-decoration", "none"], ["class", "chip", 4, "ngIf"], [2, "font-size", "13px", "font-weight", "600", "color", "#1a2240"], [2, "margin-left", "auto", "display", "flex", "gap", "6px", "align-items", "center"], [1, "save-dot"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "btn", "btn-ghost", "btn-sm", 3, "click", "disabled"], [1, "fc-top-tabs"], [1, "fc-top-tab", 3, "click"], ["class", "fc-body", 4, "ngIf"], ["style", "flex:1;display:flex;align-items:center;justify-content:center;color:#94a3b8", 4, "ngIf"], ["style", "position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center", 3, "click", 4, "ngIf"], [1, "chip"], [1, "fc-body"], [1, "fc-sidebar"], [1, "fc-sidebar-hdr"], ["class", "fc-sidebar-inner", 4, "ngIf"], [1, "fc-right"], [4, "ngIf"], ["class", "fc-panel", 4, "ngIf"], [1, "fc-sidebar-inner"], [1, "fc-row"], [1, "fc-row-label"], [1, "fc-row-val"], [1, "fc-divider"], [1, "fc-row-val", "highlight"], ["class", "fc-row-label", "style", "color:#d97706", 4, "ngIf"], ["class", "fc-row-val", "style", "color:#d97706", 4, "ngIf"], [1, "fc-row-val", "ce-approved"], [1, "fc-row-val", "ce-open"], [1, "fc-row-val", "ce-rejected"], [1, "fc-row-val", "highlight", 2, "font-size", "14px"], [1, "fc-row-label", 2, "color", "#d97706"], [1, "fc-row-val", 2, "color", "#d97706"], [1, "fc-sub-tabs"], [1, "fc-sub-tab", 3, "click"], ["class", "fc-sub-count", 4, "ngIf"], ["class", "fc-sub-total", 4, "ngIf"], ["style", "display:flex;flex-direction:column;flex:1", 4, "ngIf"], [1, "fc-sub-count"], [1, "fc-sub-total"], [1, "fc-panel"], [1, "fc-section"], [1, "fc-section-hdr", 3, "click"], ["class", "fc-section-body", 4, "ngIf"], ["style", "overflow-x:auto", 4, "ngIf"], [1, "fc-section-body"], [1, "fc-grid3"], [1, "fc-field"], [1, "fc-label"], ["type", "date", 1, "fc-input", 3, "ngModelChange", "ngModel"], [1, "fc-field", 2, "grid-column", "span 2"], ["type", "number", "min", "0", "step", "1000", 1, "fc-input", 3, "ngModelChange", "ngModel"], [2, "margin-top", "10px", "padding", "8px 10px", "background", "#f8fafc", "border", "1px solid #e2e8f0", "border-radius", "6px", "font-size", "12px"], [2, "color", "#5a6b8a", "font-size", "11px"], [2, "display", "flex", "gap", "24px", "margin-top", "4px"], [2, "overflow-x", "auto"], [1, "svc-table"], [4, "ngFor", "ngForOf"], [2, "width", "28px", "text-align", "center"], ["title", "Edit", 1, "eg-act-btn", 3, "click"], [2, "font-weight", "600", "font-size", "12px"], ["class", "riba-stage-pill", 4, "ngFor", "ngForOf"], ["style", "color:#94a3b8", 4, "ngIf"], [1, "eg-cell", "fc-select", 2, "min-width", "130px", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "eg-cell", "fc-select", 3, "ngModelChange", "ngModel"], [2, "text-align", "center"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "riba-stage-pill"], [2, "color", "#94a3b8"], [3, "value"], [1, "fc-grid2"], [1, "fc-select", 3, "ngModelChange", "ngModel"], [2, "font-size", "11px", "color", "#64748b", "margin-top", "3px"], ["type", "number", "step", "0.01", "min", "0", "max", "100", 1, "fc-input", 3, "ngModelChange", "ngModel"], ["class", "fc-field", 4, "ngIf"], [2, "display", "flex", "flex-direction", "column", "flex", "1"], [1, "grid-toolbar"], ["placeholder", "\u{1F50D} Search rows\u2026", 1, "grid-search", 3, "ngModelChange", "ngModel"], ["class", "total-pill", 4, "ngIf"], [1, "grid-wrap"], [1, "eg-grid", 2, "min-width", "1060px"], [1, "eg-rownum"], [2, "width", "80px", "text-align", "right"], [2, "width", "90px", "text-align", "right"], [2, "width", "100px", "text-align", "right"], [1, "eg-actions"], [3, "ce-row", 4, "ngFor", "ngForOf"], [1, "grid-footer"], [1, "add-row-btn", 3, "click"], [1, "row-count"], [1, "total-pill"], [1, "eg-cell", 3, "ngModelChange", "ngModel"], ["placeholder", "If non-core\u2026", 1, "eg-cell", 3, "ngModelChange", "ngModel"], [1, "eg-cell", 2, "min-width", "120px", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["placeholder", "Task details\u2026", 1, "eg-cell", 2, "min-width", "120px", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.25", 1, "eg-cell", 2, "text-align", "right", "width", "70px", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", 1, "eg-cell", 2, "text-align", "right", "width", "80px", 3, "ngModelChange", "ngModel", "placeholder"], [2, "text-align", "right", "font-weight", "700", "color", "#d97706", "padding-right", "8px"], ["title", "Copy", 1, "eg-act-btn", "eg-act-copy", 3, "click"], ["title", "Delete", 1, "eg-act-btn", 3, "click"], ["colspan", "11", 1, "empty-grid"], [2, "background", "#f8fafc"], ["colspan", "9", 2, "text-align", "right", "font-size", "11.5px", "font-weight", "700", "color", "#5a6b8a", "padding", "7px 8px"], [2, "text-align", "right", "font-weight", "800", "color", "#d97706", "font-size", "13px", "padding", "7px 8px"], [1, "eg-grid", 2, "min-width", "800px"], [2, "width", "110px", "text-align", "right"], [1, "eg-cell", 2, "min-width", "130px", 3, "ngModelChange", "ngModel"], ["placeholder", "Services description\u2026", 1, "eg-cell", 2, "min-width", "180px", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.01", 1, "eg-cell", 2, "text-align", "right", "width", "100px", 3, "ngModelChange", "ngModel"], ["colspan", "7", 1, "empty-grid"], ["colspan", "5", 2, "text-align", "right", "font-size", "11.5px", "font-weight", "700", "color", "#5a6b8a", "padding", "7px 8px"], [1, "eg-grid", 2, "min-width", "600px"], ["placeholder", "Disbursement details\u2026", 1, "eg-cell", 2, "min-width", "200px", 3, "ngModelChange", "ngModel"], ["colspan", "5", 1, "empty-grid"], ["colspan", "3", 2, "text-align", "right", "font-size", "11.5px", "font-weight", "700", "color", "#5a6b8a", "padding", "7px 8px"], [1, "fc-section-hdr"], [1, "riba-table"], [1, "fc-section", 2, "margin-top", "12px"], [2, "overflow-x", "auto", "padding", "12px"], [2, "text-align", "right"], ["style", "text-align:center", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "font-size", "12px"], ["class", "riba-check", 4, "ngIf"], ["style", "color:#e2e8f0", 4, "ngIf"], [1, "riba-check"], [2, "color", "#e2e8f0"], [2, "text-align", "right", "font-weight", "700", "color", "#d97706"], ["colspan", "4", 2, "text-align", "right", "font-weight", "700", "padding", "7px"], [2, "text-align", "right", "font-weight", "800", "color", "#d97706", "padding", "7px"], [2, "flex", "1", "display", "flex", "align-items", "center", "justify-content", "center", "color", "#94a3b8"], [2, "position", "fixed", "inset", "0", "background", "rgba(0,0,0,.5)", "z-index", "1000", "display", "flex", "align-items", "center", "justify-content", "center", 3, "click"], ["style", "background:#fff;border-radius:10px;padding:20px;min-width:420px;max-width:520px", 3, "click", 4, "ngIf"], [2, "background", "#fff", "border-radius", "10px", "padding", "20px", "min-width", "420px", "max-width", "520px", 3, "click"], [2, "font-size", "14px", "font-weight", "700", "color", "#1a2240", "margin-bottom", "14px"], [2, "margin-bottom", "12px"], [2, "font-size", "11px", "font-weight", "600", "color", "#5a6b8a", "display", "block", "margin-bottom", "5px"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "6px"], ["style", "display:flex;align-items:center;gap:4px;font-size:12px;padding:4px 8px;border-radius:5px;border:1px solid #dde2ee;cursor:pointer", 3, "background", "borderColor", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "display", "flex", "justify-content", "flex-end", "gap", "8px", "margin-top", "14px"], [2, "display", "flex", "align-items", "center", "gap", "4px", "font-size", "12px", "padding", "4px 8px", "border-radius", "5px", "border", "1px solid #dde2ee", "cursor", "pointer"], ["type", "checkbox", 2, "margin", "0", 3, "change", "checked"]], template: function FeeCalculatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, FeeCalculatorComponent_span_4_Template, 2, 1, "span", 3);
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
        \u0275\u0275text(9, "\u2713 Saved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "button", 7);
        \u0275\u0275listener("click", function FeeCalculatorComponent_Template_button_click_10_listener() {
          return ctx.save();
        });
        \u0275\u0275text(11, "\u{1F4BE} Save");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function FeeCalculatorComponent_Template_button_click_12_listener() {
          return ctx.undo();
        });
        \u0275\u0275text(13, "\u21A9 Undo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 7);
        \u0275\u0275listener("click", function FeeCalculatorComponent_Template_button_click_14_listener() {
          return ctx.print();
        });
        \u0275\u0275text(15, "\u{1F5A8} Print");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 9)(17, "div", 10);
        \u0275\u0275listener("click", function FeeCalculatorComponent_Template_div_click_17_listener() {
          return ctx.mainTab = "input";
        });
        \u0275\u0275text(18, "Fee Calculator Input");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 10);
        \u0275\u0275listener("click", function FeeCalculatorComponent_Template_div_click_19_listener() {
          return ctx.mainTab = "riba";
        });
        \u0275\u0275text(20, "RIBA Summary");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, FeeCalculatorComponent_div_21_Template, 8, 3, "div", 11)(22, FeeCalculatorComponent_div_22_Template, 2, 0, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, FeeCalculatorComponent_div_23_Template, 2, 1, "div", 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.opp);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.opp == null ? null : ctx.opp.name);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("show", ctx.saved);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", !ctx.canUndo);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", ctx.mainTab === "input");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.mainTab === "riba");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.fc);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fc);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.editingServiceIdx !== null);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, DecimalPipe], styles: ['\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-family: inherit;\n}\n.fc-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #f0f2f7;\n}\n.fc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 14px;\n  background: #fff;\n  border-bottom: 1px solid #dde2ee;\n  flex-shrink: 0;\n  position: relative;\n}\n.fc-toolbar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #00aeef,\n      #f5a800);\n}\n.fc-top-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f5f7fb;\n  border-bottom: 2px solid #dde2ee;\n  flex-shrink: 0;\n}\n.fc-top-tab[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all .15s;\n}\n.fc-top-tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n}\n.fc-top-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #1a2240;\n}\n.fc-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.fc-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  flex-shrink: 0;\n  background: #fff;\n  border-right: 1px solid #dde2ee;\n  display: flex;\n  flex-direction: column;\n}\n.fc-sidebar-hdr[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #1e3a5f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.fc-sidebar-inner[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.fc-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 5px 14px;\n  font-size: 11.5px;\n  border-bottom: 1px solid #f5f7fb;\n}\n.fc-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.fc-row-label[_ngcontent-%COMP%] {\n  color: #5a6b8a;\n  flex: 1;\n  padding-right: 8px;\n  line-height: 1.3;\n}\n.fc-row-val[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a2240;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n.fc-row-val.highlight[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 800;\n  font-size: 13px;\n}\n.fc-row-val.ce-approved[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.fc-row-val.ce-open[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.fc-row-val.ce-rejected[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.fc-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0;\n}\n.fc-right[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.fc-sub-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  background: #f8fafc;\n  border-bottom: 2px solid #dde2ee;\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.fc-sub-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 9px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  white-space: nowrap;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  transition: all .15s;\n}\n.fc-sub-tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.fc-sub-tab[_ngcontent-%COMP%]:hover:not(.active) {\n  color: #1a2240;\n}\n.fc-sub-count[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #5a6b8a;\n  border-radius: 10px;\n  padding: 1px 7px;\n  font-size: 10px;\n  font-weight: 700;\n}\n.fc-sub-tab.active[_ngcontent-%COMP%]   .fc-sub-count[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.fc-sub-total[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: #d97706;\n  font-weight: 600;\n}\n.fc-panel[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n}\n.fc-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 7px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.fc-section-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  cursor: pointer;\n}\n.fc-section-hdr[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.fc-section-body[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n}\n.fc-grid2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.fc-grid3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}\n.fc-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.fc-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #5a6b8a;\n}\n.fc-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 6px 9px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n}\n.fc-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, .1);\n}\n.fc-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 6px 9px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.fc-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.grid-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  max-height: 360px;\n  overflow-y: auto;\n}\n.eg-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.eg-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 7px 8px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.eg-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  border-bottom: 1px solid #f5f7fb;\n  vertical-align: middle;\n}\n.eg-grid[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.eg-cell[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 4px 6px;\n  font-size: 12px;\n  font-family: inherit;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  min-width: 60px;\n}\n.eg-cell[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.eg-cell[type=number][_ngcontent-%COMP%] {\n  text-align: right;\n}\n.eg-cell-ro[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #64748b;\n  cursor: default;\n}\n.eg-rownum[_ngcontent-%COMP%] {\n  width: 28px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 11px;\n  padding: 0 4px;\n}\n.eg-actions[_ngcontent-%COMP%] {\n  width: 52px;\n  white-space: nowrap;\n}\n.eg-act-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 13px;\n  padding: 2px 4px;\n  border-radius: 3px;\n}\n.eg-act-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.eg-act-copy[_ngcontent-%COMP%]:hover {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.grid-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.grid-search[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 5px;\n  padding: 4px 8px;\n  font-size: 12px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  flex: 1;\n  max-width: 220px;\n}\n.grid-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n}\n.add-row-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px dashed #93c5fd;\n  border-radius: 5px;\n  padding: 4px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #2563eb;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all .12s;\n}\n.add-row-btn[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.row-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-left: auto;\n}\n.total-pill[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1d4ed8;\n  font-size: 11.5px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.ce-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: rgba(245, 168, 0, .07) !important;\n}\n.riba-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.riba-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #1e3a5f;\n  color: #fff;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  text-align: center;\n  position: sticky;\n  top: 0;\n}\n.riba-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.riba-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-bottom: 1px solid #f0f2f7;\n  text-align: center;\n}\n.riba-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n  font-weight: 600;\n  font-size: 12px;\n}\n.riba-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.riba-check[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 14px;\n}\n.svc-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.svc-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 7px 8px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n}\n.svc-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f5f7fb;\n  vertical-align: middle;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.save-dot[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #16a34a;\n  opacity: 0;\n  transition: opacity .3s;\n}\n.save-dot.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.empty-grid[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #94a3b8;\n  font-size: 12px;\n}\n.riba-stage-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: #eff6ff;\n  color: #2563eb;\n  font-size: 10px;\n  font-weight: 700;\n  margin: 1px;\n}\n/*# sourceMappingURL=fee-calculator.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeeCalculatorComponent, [{
    type: Component,
    args: [{ selector: "app-fee-calculator", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, FormsModule], template: `
  <div class="fc-shell">

    <!-- Toolbar -->
    <div class="fc-toolbar">
      <a routerLink="/opportunities" style="font-size:12px;color:#64748b;text-decoration:none">\u2190 Back</a>
      <span class="chip" *ngIf="opp">{{ opp?.commNum }}</span>
      <span style="font-size:13px;font-weight:600;color:#1a2240">{{ opp?.name }}</span>
      <div style="margin-left:auto;display:flex;gap:6px;align-items:center">
        <span class="save-dot" [class.show]="saved">\u2713 Saved</span>
        <button class="btn btn-ghost btn-sm" (click)="save()">\u{1F4BE} Save</button>
        <button class="btn btn-ghost btn-sm" (click)="undo()" [disabled]="!canUndo">\u21A9 Undo</button>
        <button class="btn btn-ghost btn-sm" (click)="print()">\u{1F5A8} Print</button>
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
          <div class="fc-row"><span class="fc-row-label">Charges for Prime Core Services (RIBA 2\u20137) \xA3</span><span class="fc-row-val">{{ fmt(0) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Charges for Core Services (RIBA 2\u20137) \xA3</span><span class="fc-row-val">{{ fmt(0) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Time Charges (excl. CEs) \xA3</span><span class="fc-row-val">{{ fmt(t.tcExclCE) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">Sub Total: Core Services + Time Charges \xA3</span><span class="fc-row-val highlight">{{ fmt(t.subTotal) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">External Consultancy (excl. CEs) \xA3</span><span class="fc-row-val">{{ fmt(t.nsfExclCE) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total of Charges \xA3</span><span class="fc-row-val">{{ fmt(t.totalCharges) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">PSC / PSSC Fee Percentage %</span><span class="fc-row-val">{{ t.pscPct | number:'1.2-2' }}</span></div>
          <div class="fc-row"><span class="fc-row-label" *ngIf="fc.overridePSCPct>0" style="color:#d97706">Override PSC / PSSC Fee %</span><span class="fc-row-val" *ngIf="fc.overridePSCPct>0" style="color:#d97706">{{ fc.overridePSCPct | number:'1.2-2' }}</span></div>
          <div class="fc-row"><span class="fc-row-label">PSC / PSSC Fee \xA3</span><span class="fc-row-val">{{ fmt(t.pscFee) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total Commission Value \xA3</span><span class="fc-row-val highlight">{{ fmt(t.totalCommission) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">Disbursements (excl. CEs) \xA3</span><span class="fc-row-val">{{ fmt(t.disbExclCE) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total Approved CEs \xA3</span><span class="fc-row-val ce-approved">{{ fmt(t.totalApproved) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total Open CEs \xA3</span><span class="fc-row-val ce-open">{{ fmt(t.totalOpen) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total Rejected CEs \xA3</span><span class="fc-row-val ce-rejected">{{ fmt(t.totalRejected) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">Overall Commission Value \xA3</span><span class="fc-row-val highlight" style="font-size:14px">{{ fmt(t.overall) }}</span></div>
          <div class="fc-divider"></div>
          <div class="fc-row"><span class="fc-row-label">Total Disbursements (inc. CEs) \xA3</span><span class="fc-row-val">{{ fmt(t.disbInclCE) }}</span></div>
          <div class="fc-row"><span class="fc-row-label">Total PSC / PSSC Fee (inc. CEs) \xA3</span><span class="fc-row-val">{{ fmt(t.pscFee) }}</span></div>
        </div>
      </div>

      <!-- Right panel -->
      <div class="fc-right">

        <!-- INPUT VIEW -->
        <ng-container *ngIf="mainTab==='input'">
          <!-- Sub-tabs -->
          <div class="fc-sub-tabs">
            <div class="fc-sub-tab" [class.active]="subTab==='config'" (click)="subTab='config'">\u2699 Configuration</div>
            <div class="fc-sub-tab" [class.active]="subTab==='tc'" (click)="subTab='tc'">
              \u23F1 Time Charges
              <span class="fc-sub-count" *ngIf="fc.timeCharges.length">{{ fc.timeCharges.length }}</span>
              <span class="fc-sub-total" *ngIf="tcTotal>0">\xA3{{ fmt(tcTotal) }}</span>
            </div>
            <div class="fc-sub-tab" [class.active]="subTab==='ext'" (click)="subTab='ext'">
              \u{1F3E2} External Consultancy
              <span class="fc-sub-count" *ngIf="fc.nonSfr.length">{{ fc.nonSfr.length }}</span>
              <span class="fc-sub-total" *ngIf="extTotal>0">\xA3{{ fmt(extTotal) }}</span>
            </div>
            <div class="fc-sub-tab" [class.active]="subTab==='disb'" (click)="subTab='disb'">
              \u{1F4B3} Disbursements
              <span class="fc-sub-count" *ngIf="fc.disbursements.length">{{ fc.disbursements.length }}</span>
              <span class="fc-sub-total" *ngIf="disbTotal>0">\xA3{{ fmt(disbTotal) }}</span>
            </div>
          </div>

          <!-- CONFIG TAB -->
          <div class="fc-panel" *ngIf="subTab==='config'">

            <!-- 1. Input -->
            <div class="fc-section">
              <div class="fc-section-hdr" (click)="toggle('input')">
                <span>\u25BC 1. Input</span>
              </div>
              <div class="fc-section-body" *ngIf="!collapsed['input']">
                <div class="fc-grid3">
                  <div class="fc-field">
                    <label class="fc-label">Date</label>
                    <input class="fc-input" type="date" [(ngModel)]="fc.inputDate" (ngModelChange)="dirty()">
                  </div>
                  <div class="fc-field" style="grid-column:span 2">
                    <label class="fc-label">1. Estimated Construction Value (\xA3)</label>
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
                <span>\u25BC 3. Services</span>
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
                        <button class="eg-act-btn" (click)="editService(i)" title="Edit">\u270F</button>
                      </td>
                      <td style="font-weight:600;font-size:12px">{{ svc.name }}</td>
                      <td>
                        <span *ngFor="let rs of svc.ribaStages" class="riba-stage-pill">S{{ rs }}</span>
                        <span *ngIf="!svc.ribaStages.length" style="color:#94a3b8">\u2014</span>
                      </td>
                      <td>
                        <select class="eg-cell fc-select" [(ngModel)]="svc.supplier" (ngModelChange)="dirty()" style="min-width:130px">
                          <option value="">\u2014 Select \u2014</option>
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
                <span>\u25BC 4. Construction Procurement Route</span>
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
                <span>\u25BC 5. Escalator</span>
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
                <span>\u25BC 6. BIM / NEC Contract</span>
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
              <input class="grid-search" placeholder="\u{1F50D} Search rows\u2026" [(ngModel)]="tcSearch" (ngModelChange)="filterTC()">
              <span class="total-pill" *ngIf="tcTotal>0">Total: \xA3{{ fmt(tcTotal) }}</span>
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
                  <th style="width:90px;text-align:right">Rate \xA3/hr</th>
                  <th style="width:100px;text-align:right">Total \xA3</th>
                  <th class="eg-actions"></th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let r of filteredTC; let i=index" [class.ce-row]="r.ceId">
                    <td class="eg-rownum">{{ i+1 }}</td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.discipline" (ngModelChange)="onTCGradeOrHoursChange(r)">
                        <option value="">\u2014 Select \u2014</option>
                        <option *ngFor="let d of tcDisciplines" [value]="d">{{ d }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" [(ngModel)]="r.secondaryService" placeholder="If non-core\u2026" (ngModelChange)="dirty()"></td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.supplier" (ngModelChange)="dirty()" style="min-width:120px">
                        <option value="">\u2014 Select \u2014</option>
                        <option *ngFor="let s of suppliers" [value]="s">{{ s }}</option>
                      </select>
                    </td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.ribaStage" (ngModelChange)="dirty()">
                        <option [value]="null">\u2014</option>
                        <option *ngFor="let n of [0,1,2,3,4,5,6,7]; trackBy: trkIdx" [value]="n">Stage {{ n }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" [(ngModel)]="r.taskDetails" placeholder="Task details\u2026" style="min-width:120px" (ngModelChange)="dirty()"></td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.staffGrade" (ngModelChange)="onTCGradeChange(r)" style="min-width:120px">
                        <option value="">\u2014 Select \u2014</option>
                        <option *ngFor="let g of staffGrades" [value]="g.grade">{{ g.grade }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" type="number" [(ngModel)]="r.estHours" min="0" step="0.25" (ngModelChange)="onTCHoursChange(r)" style="text-align:right;width:70px"></td>
                    <td><input class="eg-cell" type="number" [(ngModel)]="r.overrideRate" min="0" step="0.01" (ngModelChange)="onTCRateChange(r)" style="text-align:right;width:80px" [placeholder]="r.hourlyRate||(0)|number:'1.2-2'"></td>
                    <td style="text-align:right;font-weight:700;color:#d97706;padding-right:8px">{{ fmt(tcRowTotal(r)) }}</td>
                    <td class="eg-actions">
                      <button class="eg-act-btn eg-act-copy" (click)="copyTC(i)" title="Copy">\u2398</button>
                      <button class="eg-act-btn" (click)="delTC(i)" title="Delete">\u2715</button>
                    </td>
                  </tr>
                  <tr *ngIf="!filteredTC.length">
                    <td colspan="11" class="empty-grid">No time charge rows. Click + Add Row below.</td>
                  </tr>
                </tbody>
                <tfoot *ngIf="fc.timeCharges.length>0">
                  <tr style="background:#f8fafc">
                    <td colspan="9" style="text-align:right;font-size:11.5px;font-weight:700;color:#5a6b8a;padding:7px 8px">Total</td>
                    <td style="text-align:right;font-weight:800;color:#d97706;font-size:13px;padding:7px 8px">\xA3{{ fmt(tcTotal) }}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="grid-footer">
              <button class="add-row-btn" (click)="addTC()">\uFF0B Add Row</button>
              <span class="total-pill" *ngIf="tcTotal>0">Total: \xA3{{ fmt(tcTotal) }}</span>
              <span class="row-count">{{ fc.timeCharges.length }} rows</span>
            </div>
          </div>

          <!-- EXTERNAL CONSULTANCY TAB -->
          <div *ngIf="subTab==='ext'" style="display:flex;flex-direction:column;flex:1">
            <div class="grid-toolbar">
              <input class="grid-search" placeholder="\u{1F50D} Search rows\u2026" [(ngModel)]="extSearch" (ngModelChange)="filterExt()">
              <span class="total-pill" *ngIf="extTotal>0">Total: \xA3{{ fmt(extTotal) }}</span>
            </div>
            <div class="grid-wrap">
              <table class="eg-grid" style="min-width:800px">
                <thead><tr>
                  <th class="eg-rownum">#</th>
                  <th>Supplier</th>
                  <th>Discipline</th>
                  <th>Proc. Route</th>
                  <th>Services Description</th>
                  <th style="width:110px;text-align:right">Net Fee \xA3</th>
                  <th class="eg-actions"></th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let r of filteredExt; let i=index" [class.ce-row]="r.ceId">
                    <td class="eg-rownum">{{ i+1 }}</td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.supplier" (ngModelChange)="dirty()" style="min-width:130px">
                        <option value="">\u2014 Select \u2014</option>
                        <option *ngFor="let s of suppliers" [value]="s">{{ s }}</option>
                      </select>
                    </td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.discipline" (ngModelChange)="dirty()">
                        <option value="">\u2014 Select \u2014</option>
                        <option *ngFor="let d of tcDisciplines" [value]="d">{{ d }}</option>
                      </select>
                    </td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.procRoute" (ngModelChange)="dirty()">
                        <option *ngFor="let p of procRoutes" [value]="p">{{ p }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" [(ngModel)]="r.services" placeholder="Services description\u2026" style="min-width:180px" (ngModelChange)="dirty()"></td>
                    <td><input class="eg-cell" type="number" [(ngModel)]="r.netFee" min="0" step="0.01" (ngModelChange)="dirty()" style="text-align:right;width:100px"></td>
                    <td class="eg-actions">
                      <button class="eg-act-btn eg-act-copy" (click)="copyExt(i)" title="Copy">\u2398</button>
                      <button class="eg-act-btn" (click)="delExt(i)" title="Delete">\u2715</button>
                    </td>
                  </tr>
                  <tr *ngIf="!filteredExt.length">
                    <td colspan="7" class="empty-grid">No external consultancy rows. Click + Add Row below.</td>
                  </tr>
                </tbody>
                <tfoot *ngIf="fc.nonSfr.length>0">
                  <tr style="background:#f8fafc">
                    <td colspan="5" style="text-align:right;font-size:11.5px;font-weight:700;color:#5a6b8a;padding:7px 8px">Total</td>
                    <td style="text-align:right;font-weight:800;color:#d97706;font-size:13px;padding:7px 8px">\xA3{{ fmt(extTotal) }}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="grid-footer">
              <button class="add-row-btn" (click)="addExt()">\uFF0B Add Row</button>
              <span class="total-pill" *ngIf="extTotal>0">Total: \xA3{{ fmt(extTotal) }}</span>
              <span class="row-count">{{ fc.nonSfr.length }} rows</span>
            </div>
          </div>

          <!-- DISBURSEMENTS TAB -->
          <div *ngIf="subTab==='disb'" style="display:flex;flex-direction:column;flex:1">
            <div class="grid-toolbar">
              <input class="grid-search" placeholder="\u{1F50D} Search rows\u2026" [(ngModel)]="disbSearch" (ngModelChange)="filterDisb()">
              <span class="total-pill" *ngIf="disbTotal>0">Total: \xA3{{ fmt(disbTotal) }}</span>
            </div>
            <div class="grid-wrap">
              <table class="eg-grid" style="min-width:600px">
                <thead><tr>
                  <th class="eg-rownum">#</th>
                  <th>Supplier</th>
                  <th>Disbursement Details</th>
                  <th style="width:110px;text-align:right">Net Fee \xA3</th>
                  <th class="eg-actions"></th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let r of filteredDisb; let i=index" [class.ce-row]="r.ceId">
                    <td class="eg-rownum">{{ i+1 }}</td>
                    <td>
                      <select class="eg-cell" [(ngModel)]="r.supplier" (ngModelChange)="dirty()" style="min-width:130px">
                        <option value="">\u2014 Select \u2014</option>
                        <option *ngFor="let s of suppliers" [value]="s">{{ s }}</option>
                      </select>
                    </td>
                    <td><input class="eg-cell" [(ngModel)]="r.details" placeholder="Disbursement details\u2026" style="min-width:200px" (ngModelChange)="dirty()"></td>
                    <td><input class="eg-cell" type="number" [(ngModel)]="r.netFee" min="0" step="0.01" (ngModelChange)="dirty()" style="text-align:right;width:100px"></td>
                    <td class="eg-actions">
                      <button class="eg-act-btn eg-act-copy" (click)="copyDisb(i)" title="Copy">\u2398</button>
                      <button class="eg-act-btn" (click)="delDisb(i)" title="Delete">\u2715</button>
                    </td>
                  </tr>
                  <tr *ngIf="!filteredDisb.length">
                    <td colspan="5" class="empty-grid">No disbursements. Click + Add Row below.</td>
                  </tr>
                </tbody>
                <tfoot *ngIf="fc.disbursements.length>0">
                  <tr style="background:#f8fafc">
                    <td colspan="3" style="text-align:right;font-size:11.5px;font-weight:700;color:#5a6b8a;padding:7px 8px">Total</td>
                    <td style="text-align:right;font-weight:800;color:#d97706;font-size:13px;padding:7px 8px">\xA3{{ fmt(disbTotal) }}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="grid-footer">
              <button class="add-row-btn" (click)="addDisb()">\uFF0B Add Row</button>
              <span class="total-pill" *ngIf="disbTotal>0">Total: \xA3{{ fmt(disbTotal) }}</span>
              <span class="row-count">{{ fc.disbursements.length }} rows</span>
            </div>
          </div>

        </ng-container>

        <!-- RIBA SUMMARY VIEW -->
        <div class="fc-panel" *ngIf="mainTab==='riba'">
          <div class="fc-section">
            <div class="fc-section-hdr"><span>RIBA Stage Summary \u2014 Services Matrix</span></div>
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
                      <span *ngIf="svc.ribaStages?.includes(n)" class="riba-check">\u2713</span>
                      <span *ngIf="!svc.ribaStages?.includes(n)" style="color:#e2e8f0">\xB7</span>
                    </td>
                    <td style="font-size:12px">{{ svc.supplier||'\u2014' }}</td>
                    <td style="font-size:12px">{{ svc.procRoute||'\u2014' }}</td>
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
                  <th style="text-align:right">Rate \xA3/hr</th>
                  <th style="text-align:right">Total \xA3</th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let r of fc.timeCharges">
                    <td>{{ r.discipline||'\u2014' }}</td>
                    <td>{{ r.staffGrade||'\u2014' }}</td>
                    <td style="text-align:right">{{ r.estHours | number:'1.2-2' }}</td>
                    <td style="text-align:right">{{ (r.overrideRate||r.hourlyRate||0) | number:'1.2-2' }}</td>
                    <td style="text-align:right;font-weight:700;color:#d97706">\xA3{{ fmt(tcRowTotal(r)) }}</td>
                  </tr>
                  <tr *ngIf="!fc.timeCharges.length">
                    <td colspan="5" class="empty-grid">No time charge rows.</td>
                  </tr>
                </tbody>
                <tfoot *ngIf="fc.timeCharges.length>0">
                  <tr style="background:#f8fafc">
                    <td colspan="4" style="text-align:right;font-weight:700;padding:7px">Total Time Charges</td>
                    <td style="text-align:right;font-weight:800;color:#d97706;padding:7px">\xA3{{ fmt(tcTotal) }}</td>
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
      Loading Fee Calculator\u2026
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
  `, styles: ['/* angular:styles/component:css;bbb30ecf6f0e7e6b4cdd61ffa04aa6670621a45b20a62e8a93bfc4ff0f282309;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/fee-calculator/fee-calculator.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-family: inherit;\n}\n.fc-shell {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #f0f2f7;\n}\n.fc-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 14px;\n  background: #fff;\n  border-bottom: 1px solid #dde2ee;\n  flex-shrink: 0;\n  position: relative;\n}\n.fc-toolbar::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #00aeef,\n      #f5a800);\n}\n.fc-top-tabs {\n  display: flex;\n  background: #f5f7fb;\n  border-bottom: 2px solid #dde2ee;\n  flex-shrink: 0;\n}\n.fc-top-tab {\n  padding: 9px 20px;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: all .15s;\n}\n.fc-top-tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n}\n.fc-top-tab:hover:not(.active) {\n  color: #1a2240;\n}\n.fc-body {\n  flex: 1;\n  display: flex;\n  overflow: hidden;\n}\n.fc-sidebar {\n  width: 280px;\n  flex-shrink: 0;\n  background: #fff;\n  border-right: 1px solid #dde2ee;\n  display: flex;\n  flex-direction: column;\n}\n.fc-sidebar-hdr {\n  padding: 10px 14px;\n  background: #1e3a5f;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.fc-sidebar-inner {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.fc-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 5px 14px;\n  font-size: 11.5px;\n  border-bottom: 1px solid #f5f7fb;\n}\n.fc-row:last-child {\n  border-bottom: none;\n}\n.fc-row-label {\n  color: #5a6b8a;\n  flex: 1;\n  padding-right: 8px;\n  line-height: 1.3;\n}\n.fc-row-val {\n  font-weight: 600;\n  color: #1a2240;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n.fc-row-val.highlight {\n  color: #2563eb;\n  font-weight: 800;\n  font-size: 13px;\n}\n.fc-row-val.ce-approved {\n  color: #16a34a;\n}\n.fc-row-val.ce-open {\n  color: #d97706;\n}\n.fc-row-val.ce-rejected {\n  color: #dc2626;\n}\n.fc-divider {\n  height: 1px;\n  background: #e2e8f0;\n  margin: 4px 0;\n}\n.fc-right {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n}\n.fc-sub-tabs {\n  display: flex;\n  background: #f8fafc;\n  border-bottom: 2px solid #dde2ee;\n  flex-shrink: 0;\n  overflow-x: auto;\n}\n.fc-sub-tab {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 9px 16px;\n  font-size: 12.5px;\n  color: #8a9bb8;\n  cursor: pointer;\n  white-space: nowrap;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  font-weight: 500;\n  transition: all .15s;\n}\n.fc-sub-tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.fc-sub-tab:hover:not(.active) {\n  color: #1a2240;\n}\n.fc-sub-count {\n  background: #e2e8f0;\n  color: #5a6b8a;\n  border-radius: 10px;\n  padding: 1px 7px;\n  font-size: 10px;\n  font-weight: 700;\n}\n.fc-sub-tab.active .fc-sub-count {\n  background: #2563eb;\n  color: #fff;\n}\n.fc-sub-total {\n  font-size: 10.5px;\n  color: #d97706;\n  font-weight: 600;\n}\n.fc-panel {\n  padding: 14px 16px;\n}\n.fc-section {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 7px;\n  margin-bottom: 10px;\n  overflow: hidden;\n}\n.fc-section-hdr {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 9px 14px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  cursor: pointer;\n}\n.fc-section-hdr span {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n}\n.fc-section-body {\n  padding: 12px 14px;\n}\n.fc-grid2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.fc-grid3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}\n.fc-field {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.fc-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #5a6b8a;\n}\n.fc-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 6px 9px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n}\n.fc-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, .1);\n}\n.fc-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 6px 9px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.fc-select:focus {\n  border-color: #2563eb;\n}\n.grid-wrap {\n  overflow-x: auto;\n  max-height: 360px;\n  overflow-y: auto;\n}\n.eg-grid {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.eg-grid th {\n  background: #f5f7fb;\n  padding: 7px 8px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  white-space: nowrap;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n.eg-grid td {\n  padding: 4px 6px;\n  border-bottom: 1px solid #f5f7fb;\n  vertical-align: middle;\n}\n.eg-grid tr:hover td {\n  background: #f8fafc;\n}\n.eg-cell {\n  border: 1px solid transparent;\n  border-radius: 4px;\n  padding: 4px 6px;\n  font-size: 12px;\n  font-family: inherit;\n  background: transparent;\n  outline: none;\n  width: 100%;\n  min-width: 60px;\n}\n.eg-cell:focus {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.eg-cell[type=number] {\n  text-align: right;\n}\n.eg-cell-ro {\n  background: #f8fafc;\n  color: #64748b;\n  cursor: default;\n}\n.eg-rownum {\n  width: 28px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 11px;\n  padding: 0 4px;\n}\n.eg-actions {\n  width: 52px;\n  white-space: nowrap;\n}\n.eg-act-btn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 13px;\n  padding: 2px 4px;\n  border-radius: 3px;\n}\n.eg-act-btn:hover {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.eg-act-copy:hover {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.grid-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n.grid-search {\n  border: 1px solid #dde2ee;\n  border-radius: 5px;\n  padding: 4px 8px;\n  font-size: 12px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  flex: 1;\n  max-width: 220px;\n}\n.grid-footer {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 10px;\n  background: #f8fafc;\n  border-top: 1px solid #e2e8f0;\n}\n.add-row-btn {\n  background: transparent;\n  border: 1px dashed #93c5fd;\n  border-radius: 5px;\n  padding: 4px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #2563eb;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all .12s;\n}\n.add-row-btn:hover {\n  background: #eff6ff;\n}\n.row-count {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-left: auto;\n}\n.total-pill {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1d4ed8;\n  font-size: 11.5px;\n  font-weight: 700;\n  padding: 2px 10px;\n  border-radius: 10px;\n}\n.ce-row td {\n  background: rgba(245, 168, 0, .07) !important;\n}\n.riba-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.riba-table th {\n  background: #1e3a5f;\n  color: #fff;\n  padding: 8px 10px;\n  font-size: 10.5px;\n  text-align: center;\n  position: sticky;\n  top: 0;\n}\n.riba-table th:first-child {\n  text-align: left;\n}\n.riba-table td {\n  padding: 7px 10px;\n  border-bottom: 1px solid #f0f2f7;\n  text-align: center;\n}\n.riba-table td:first-child {\n  text-align: left;\n  font-weight: 600;\n  font-size: 12px;\n}\n.riba-table tbody tr:hover td {\n  background: #f8fafc;\n}\n.riba-check {\n  color: #16a34a;\n  font-size: 14px;\n}\n.svc-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.svc-table th {\n  background: #f5f7fb;\n  padding: 7px 8px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n}\n.svc-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f5f7fb;\n  vertical-align: middle;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 6px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 12px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.save-dot {\n  font-size: 11px;\n  color: #16a34a;\n  opacity: 0;\n  transition: opacity .3s;\n}\n.save-dot.show {\n  opacity: 1;\n}\n.empty-grid {\n  text-align: center;\n  padding: 20px;\n  color: #94a3b8;\n  font-size: 12px;\n}\n.riba-stage-pill {\n  display: inline-block;\n  padding: 1px 6px;\n  border-radius: 8px;\n  background: #eff6ff;\n  color: #2563eb;\n  font-size: 10px;\n  font-weight: 700;\n  margin: 1px;\n}\n/*# sourceMappingURL=fee-calculator.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeeCalculatorComponent, { className: "FeeCalculatorComponent", filePath: "src/app/features/fee-calculator/fee-calculator.component.ts", lineNumber: 748 });
})();
export {
  FeeCalculatorComponent
};
//# sourceMappingURL=chunk-XY62H42D.js.map
