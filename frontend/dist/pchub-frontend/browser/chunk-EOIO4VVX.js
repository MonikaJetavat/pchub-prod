import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
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
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  Subject,
  __spreadProps,
  __spreadValues,
  debounceTime,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YNIEOD7T.js";

// src/app/features/srp/srp-form.component.ts
function SrpFormComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.opp == null ? null : ctx_r0.opp.commNum);
  }
}
function SrpFormComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function SrpFormComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.sendForApproval());
    });
    \u0275\u0275text(1, " Send for Approval ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r0.mandatoryComplete);
  }
}
function SrpFormComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function SrpFormComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.approve());
    });
    \u0275\u0275text(1, "\u2713 Approve");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function SrpFormComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reject());
    });
    \u0275\u0275text(1, "\u2715 Reject");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 26);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("filled", ctx_r0.progressPct > 0);
  }
}
function SrpFormComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function SrpFormComponent_div_23_Template_div_click_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeStep = i_r6);
    })("keydown.enter", function SrpFormComponent_div_23_Template_div_keydown_enter_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activeStep = i_r6);
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.activeStep === i_r6)("complete", ctx_r0.isStepComplete(i_r6));
    \u0275\u0275attribute("aria-label", step_r7.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r7.label);
  }
}
function SrpFormComponent_div_25_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014 Awaiting approval from commercial lead");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_div_25_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\u2014 Approved by ", ctx_r0.srp.approvedBy, " on ", \u0275\u0275pipeBind2(2, 2, ctx_r0.srp.approvedAt, "dd MMM yyyy"));
  }
}
function SrpFormComponent_div_25_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", ctx_r0.srp.approvalComments);
  }
}
function SrpFormComponent_div_25_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u26A0 Complete mandatory fields to send for approval");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SrpFormComponent_div_25_span_5_Template, 2, 0, "span", 20)(6, SrpFormComponent_div_25_span_6_Template, 3, 5, "span", 20)(7, SrpFormComponent_div_25_span_7_Template, 2, 1, "span", 20)(8, SrpFormComponent_div_25_span_8_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.statusBannerClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusIcon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.srp.status || "Draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status === "SentForApproval");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status === "Approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status === "Rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.mandatoryComplete && ctx_r0.srp.status === "Draft");
  }
}
function SrpFormComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1, "Loading SRP data\u2026");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_ng_container_27_div_1_div_7_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r10 = ctx.$implicit;
    \u0275\u0275property("value", l_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r10);
  }
}
function SrpFormComponent_ng_container_27_div_1_div_7_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("value", c_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r11);
  }
}
function SrpFormComponent_ng_container_27_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 37)(2, "div", 38)(3, "label", 39);
    \u0275\u0275text(4, "Client Contact Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.clientContactName, $event) || (ctx_r0.srp.clientContactName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "label", 39);
    \u0275\u0275text(8, "Commission Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.commissionLead, $event) || (ctx_r0.srp.commissionLead = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_select_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementStart(10, "option", 42);
    \u0275\u0275text(11, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SrpFormComponent_ng_container_27_div_1_div_7_option_12_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 38)(14, "label", 44);
    \u0275\u0275text(15, "Client Contact Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.clientContactEmail, $event) || (ctx_r0.srp.clientContactEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 38)(18, "label", 44);
    \u0275\u0275text(19, "Commission Lead Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.commissionLeadEmail, $event) || (ctx_r0.srp.commissionLeadEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 38)(22, "label", 44);
    \u0275\u0275text(23, "Client Contact Tel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.clientContactTel, $event) || (ctx_r0.srp.clientContactTel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_24_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 38)(26, "label", 44);
    \u0275\u0275text(27, "Commission Lead Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.commissionLeadMobile, $event) || (ctx_r0.srp.commissionLeadMobile = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 38)(30, "label", 44);
    \u0275\u0275text(31, "Client Contact Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.clientContactPosition, $event) || (ctx_r0.srp.clientContactPosition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_32_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 38)(34, "label", 39);
    \u0275\u0275text(35, "Service Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.serviceManager, $event) || (ctx_r0.srp.serviceManager = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_36_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 49)(38, "label", 39);
    \u0275\u0275text(39, "Commission Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "textarea", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_textarea_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.commissionDesc, $event) || (ctx_r0.srp.commissionDesc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_textarea_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 38)(42, "label", 44);
    \u0275\u0275text(43, "Commission Post Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.commissionPostCode, $event) || (ctx_r0.srp.commissionPostCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_44_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 38)(46, "label", 39);
    \u0275\u0275text(47, "Main Contract Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.mainContractType, $event) || (ctx_r0.srp.mainContractType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_select_ngModelChange_48_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementStart(49, "option", 42);
    \u0275\u0275text(50, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, SrpFormComponent_ng_container_27_div_1_div_7_option_51_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 38)(53, "label", 44);
    \u0275\u0275text(54, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.startDate, $event) || (ctx_r0.srp.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_55_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 38)(57, "label", 44);
    \u0275\u0275text(58, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.endDate, $event) || (ctx_r0.srp.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_7_Template_input_ngModelChange_59_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 38)(61, "label", 44);
    \u0275\u0275text(62, "Confidentiality Flag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 52)(64, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_7_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.confidentialityFlag = "Yes";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(65, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_7_Template_button_click_66_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.confidentialityFlag = "No";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(67, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 38)(69, "label", 44);
    \u0275\u0275text(70, "Has Programme?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 52)(72, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_7_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.hasProgramme = "Yes";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(73, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_7_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.hasProgramme = "No";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(75, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 38)(77, "label", 44);
    \u0275\u0275text(78, "Has Project Brief?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 52)(80, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_7_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.hasProjectBrief = "Yes";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(81, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_7_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.hasProjectBrief = "No";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(83, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 38)(85, "label", 44);
    \u0275\u0275text(86, "Has Scheme Layout?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 52)(88, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_7_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.hasSchemeLayout = "Yes";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(89, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_7_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.hasSchemeLayout = "No";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(91, "No");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.clientContactName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.commissionLead);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.leads);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.clientContactEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.commissionLeadEmail);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.clientContactTel);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.commissionLeadMobile);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.clientContactPosition);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.serviceManager);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.commissionDesc);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.commissionPostCode);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.mainContractType);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.contractTypes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.endDate);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("yn-active-yes", ctx_r0.srp.confidentialityFlag === "Yes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("yn-active-no", ctx_r0.srp.confidentialityFlag === "No");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("yn-active-yes", ctx_r0.srp.hasProgramme === "Yes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("yn-active-no", ctx_r0.srp.hasProgramme === "No");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("yn-active-yes", ctx_r0.srp.hasProjectBrief === "Yes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("yn-active-no", ctx_r0.srp.hasProjectBrief === "No");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("yn-active-yes", ctx_r0.srp.hasSchemeLayout === "Yes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("yn-active-no", ctx_r0.srp.hasSchemeLayout === "No");
  }
}
function SrpFormComponent_ng_container_27_div_1_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "p", 59);
    \u0275\u0275text(2, "Specify pre-engagement requirements the client must satisfy before commission commences:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 60);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_14_div_9_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s61, $event) || (ctx_r0.srp.s61 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_1_div_14_div_9_Template_textarea_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s61);
  }
}
function SrpFormComponent_ng_container_27_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 55)(2, "label", 44);
    \u0275\u0275text(3, "Pre-Engagement Required?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.preEngagementRequired = "Yes";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(6, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_div_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.preEngagementRequired = "No";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(8, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SrpFormComponent_ng_container_27_div_1_div_14_div_9_Template, 4, 1, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("yn-active-yes", ctx_r0.srp.preEngagementRequired === "Yes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("yn-active-no", ctx_r0.srp.preEngagementRequired === "No");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.srp.preEngagementRequired === "Yes");
  }
}
function SrpFormComponent_ng_container_27_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 33)(2, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("contacts"));
    });
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "1.0 \u2014 Commission & Contact Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SrpFormComponent_ng_container_27_div_1_div_7_Template, 92, 31, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_1_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("preeng"));
    });
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11, "2.0 \u2014 Pre-Engagement Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SrpFormComponent_ng_container_27_div_1_div_14_Template, 10, 5, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["contacts"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["contacts"]);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["preeng"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["preeng"]);
  }
}
function SrpFormComponent_ng_container_27_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 55)(2, "label", 39);
    \u0275\u0275text(3, "Project Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 61);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_7_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.projectOverview, $event) || (ctx_r0.srp.projectOverview = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_7_Template_textarea_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 55)(6, "label", 44);
    \u0275\u0275text(7, "Objectives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_7_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.objectives, $event) || (ctx_r0.srp.objectives = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_7_Template_textarea_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 38)(10, "label", 44);
    \u0275\u0275text(11, "Health & Safety");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_7_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.healthSafety, $event) || (ctx_r0.srp.healthSafety = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_7_Template_textarea_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.projectOverview);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.objectives);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.healthSafety);
  }
}
function SrpFormComponent_ng_container_27_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 55)(2, "label", 44);
    \u0275\u0275text(3, "VfM Statement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.vfmStatement, $event) || (ctx_r0.srp.vfmStatement = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_textarea_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 63)(6, "div", 38)(7, "label", 44);
    \u0275\u0275text(8, "VfM Driver 1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.vfmDriver1, $event) || (ctx_r0.srp.vfmDriver1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_input_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 38)(11, "label", 44);
    \u0275\u0275text(12, "VfM Driver 2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.vfmDriver2, $event) || (ctx_r0.srp.vfmDriver2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 38)(15, "label", 44);
    \u0275\u0275text(16, "VfM Driver 3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.vfmDriver3, $event) || (ctx_r0.srp.vfmDriver3 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_input_ngModelChange_17_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 38)(19, "label", 39);
    \u0275\u0275text(20, "Project Success Criteria");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 64);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.projectSuccessCriteria, $event) || (ctx_r0.srp.projectSuccessCriteria = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_14_Template_textarea_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.vfmStatement);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.vfmDriver1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.vfmDriver2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.vfmDriver3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.projectSuccessCriteria);
  }
}
function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r19.ref);
  }
}
function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_select_3_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r21 = ctx.$implicit;
    \u0275\u0275property("value", o_r21);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r21);
  }
}
function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_select_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 80);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_select_3_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const row_r19 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r19.ref, $event) || (row_r19.ref = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_select_3_Template_select_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementStart(1, "option", 81);
    \u0275\u0275text(2, "Please Select");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SrpFormComponent_ng_container_27_div_2_div_21_tr_21_select_3_option_3_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", row_r19.ref);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.tomsOptions);
  }
}
function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, SrpFormComponent_ng_container_27_div_2_div_21_tr_21_span_2_Template, 2, 1, "span", 74)(3, SrpFormComponent_ng_container_27_div_2_div_21_tr_21_select_3_Template, 4, 2, "select", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "textarea", 76);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_Template_textarea_ngModelChange_5_listener($event) {
      const row_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(row_r19.comments, $event) || (row_r19.comments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_Template_textarea_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_Template_input_ngModelChange_12_listener($event) {
      const row_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(row_r19.target, $event) || (row_r19.target = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_21_tr_21_Template_input_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 78);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const i_r22 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r22 < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r22 >= 3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r19.comments);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r19.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 7, row_r19.svProxy, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", row_r19.target);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 10, row_r19.target * row_r19.svProxy, "1.2-2"));
  }
}
function SrpFormComponent_ng_container_27_div_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 55)(2, "label", 44);
    \u0275\u0275text(3, "Social Value Narrative");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_21_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.socialValue, $event) || (ctx_r0.srp.socialValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_2_div_21_Template_textarea_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "table", 66)(6, "thead")(7, "tr")(8, "th", 67);
    \u0275\u0275text(9, "TOMS Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 68);
    \u0275\u0275text(13, "Unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 69);
    \u0275\u0275text(15, "SV Proxy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 69);
    \u0275\u0275text(17, "Target");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 69);
    \u0275\u0275text(19, "SV Add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "tbody");
    \u0275\u0275template(21, SrpFormComponent_ng_container_27_div_2_div_21_tr_21_Template, 16, 13, "tr", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "tfoot")(23, "tr", 71)(24, "td", 72);
    \u0275\u0275text(25, "Total Social Value Added:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 73);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.socialValue);
    \u0275\u0275advance(17);
    \u0275\u0275property("ngForOf", ctx_r0.srp.tomsRows);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 3, ctx_r0.tomsTotal, "1.2-2"));
  }
}
function SrpFormComponent_ng_container_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 33)(2, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_2_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("overview"));
    });
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "3.0 \u2014 Project Overview & Objectives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SrpFormComponent_ng_container_27_div_2_div_7_Template, 13, 3, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_2_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("vfm"));
    });
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11, "4.0 \u2014 Value for Money & Key Performance Indicators");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SrpFormComponent_ng_container_27_div_2_div_14_Template, 22, 5, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 33)(16, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_2_Template_div_click_16_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("social"));
    });
    \u0275\u0275elementStart(17, "h3");
    \u0275\u0275text(18, "5.0 \u2014 Social Value (TOMS)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, SrpFormComponent_ng_container_27_div_2_div_21_Template, 29, 6, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["overview"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["overview"]);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["vfm"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["vfm"]);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["social"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["social"]);
  }
}
function SrpFormComponent_ng_container_27_div_3_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 82)(2, "label", 44);
    \u0275\u0275text(3, "6.1 \u2014 Professional Services Schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s61, $event) || (ctx_r0.srp.s61 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 82)(6, "label", 44);
    \u0275\u0275text(7, "6.2 \u2014 Scope Addendum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s62, $event) || (ctx_r0.srp.s62 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 82)(10, "label", 44);
    \u0275\u0275text(11, "6.3 \u2014 Additional Scope Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s63, $event) || (ctx_r0.srp.s63 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 82)(14, "label", 44);
    \u0275\u0275text(15, "6.5 \u2014 Health & Safety (CDM)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s65, $event) || (ctx_r0.srp.s65 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_16_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 82)(18, "label", 44);
    \u0275\u0275text(19, "6.6 \u2014 Principal Designer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s66, $event) || (ctx_r0.srp.s66 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_20_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 38)(22, "label", 44);
    \u0275\u0275text(23, "7.0 \u2014 Key Staff CVs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s70, $event) || (ctx_r0.srp.s70 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_7_Template_textarea_ngModelChange_24_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s61);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s62);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s63);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s65);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s66);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s70);
  }
}
function SrpFormComponent_ng_container_27_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 83)(2, "div", 38)(3, "label", 44);
    \u0275\u0275text(4, "9.0 \u2014 Insurance Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s90, $event) || (ctx_r0.srp.s90 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "label", 44);
    \u0275\u0275text(8, "10.0 \u2014 Payment Terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s100, $event) || (ctx_r0.srp.s100 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_9_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 38)(11, "label", 44);
    \u0275\u0275text(12, "11.0 \u2014 Quality Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s110, $event) || (ctx_r0.srp.s110 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 38)(15, "label", 44);
    \u0275\u0275text(16, "12.0 \u2014 Sustainability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s120, $event) || (ctx_r0.srp.s120 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_17_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 38)(19, "label", 44);
    \u0275\u0275text(20, "13.0 \u2014 BIM Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s130, $event) || (ctx_r0.srp.s130 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_21_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 38)(23, "label", 44);
    \u0275\u0275text(24, "14.0 \u2014 Reporting Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s140, $event) || (ctx_r0.srp.s140 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_25_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 49)(27, "label", 44);
    \u0275\u0275text(28, "15.0 \u2014 Additional Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.s150, $event) || (ctx_r0.srp.s150 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_3_div_14_Template_textarea_ngModelChange_29_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s90);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s100);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s110);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s120);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s130);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s140);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.s150);
  }
}
function SrpFormComponent_ng_container_27_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 33)(2, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_3_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("scope6"));
    });
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "6.0 \u2014 Scope of Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SrpFormComponent_ng_container_27_div_3_div_7_Template, 25, 6, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_3_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("scope9"));
    });
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11, "9.0 \u2013 15.0 \u2014 Extended Scope Sections");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, SrpFormComponent_ng_container_27_div_3_div_14_Template, 30, 7, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["scope6"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["scope6"]);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["scope9"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["scope9"]);
  }
}
function SrpFormComponent_ng_container_27_div_4_div_7_div_9_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_4_div_7_div_9_tr_15_Template_input_ngModelChange_4_listener($event) {
      const row_r29 = \u0275\u0275restoreView(_r28).$implicit;
      \u0275\u0275twoWayBindingSet(row_r29.activity, $event) || (row_r29.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_4_div_7_div_9_tr_15_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_4_div_7_div_9_tr_15_Template_input_ngModelChange_6_listener($event) {
      const row_r29 = \u0275\u0275restoreView(_r28).$implicit;
      \u0275\u0275twoWayBindingSet(row_r29.startDate, $event) || (row_r29.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_4_div_7_div_9_tr_15_Template_input_ngModelChange_6_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_4_div_7_div_9_tr_15_Template_input_ngModelChange_8_listener($event) {
      const row_r29 = \u0275\u0275restoreView(_r28).$implicit;
      \u0275\u0275twoWayBindingSet(row_r29.endDate, $event) || (row_r29.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_4_div_7_div_9_tr_15_Template_input_ngModelChange_8_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r29 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r29.stage);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r29.activity);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r29.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r29.endDate);
  }
}
function SrpFormComponent_ng_container_27_div_4_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 85);
    \u0275\u0275text(2, "Define the delivery programme for each RIBA stage:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 86)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "RIBA Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 87);
    \u0275\u0275text(11, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 87);
    \u0275\u0275text(13, "End Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, SrpFormComponent_ng_container_27_div_4_div_7_div_9_tr_15_Template, 9, 4, "tr", 70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r0.srp.deliveryRows);
  }
}
function SrpFormComponent_ng_container_27_div_4_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1, " Programme upload functionality \u2014 attach programme document via document management system ");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_ng_container_27_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 55)(2, "label", 44);
    \u0275\u0275text(3, "Upload Own Programme?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 56)(5, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_4_div_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.uploadOwnProgramme = "Yes";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(6, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 53);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_4_div_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.srp.uploadOwnProgramme = "No";
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275text(8, "No");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SrpFormComponent_ng_container_27_div_4_div_7_div_9_Template, 16, 1, "div", 20)(10, SrpFormComponent_ng_container_27_div_4_div_7_div_10_Template, 2, 0, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("yn-active-yes", ctx_r0.srp.uploadOwnProgramme === "Yes");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("yn-active-no", ctx_r0.srp.uploadOwnProgramme === "No");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.srp.uploadOwnProgramme === "No");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.uploadOwnProgramme === "Yes");
  }
}
function SrpFormComponent_ng_container_27_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 33)(2, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_4_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("prog"));
    });
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "8.0 \u2014 Programme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SrpFormComponent_ng_container_27_div_4_div_7_Template, 11, 6, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["prog"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["prog"]);
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r32 = ctx.$implicit;
    \u0275\u0275property("value", d_r32);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r32);
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r33 = ctx.$implicit;
    \u0275\u0275property("value", l_r33);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r33);
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "label", 44);
    \u0275\u0275text(2, "Approval Comments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 62);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_5_div_7_div_16_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.approvalComments, $event) || (ctx_r0.srp.approvalComments = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_5_div_7_div_16_Template_textarea_ngModelChange_3_listener() {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.approvalComments);
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.sendForApproval());
    });
    \u0275\u0275text(1, " Send for Approval ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275property("disabled", !ctx_r0.mandatoryComplete);
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.approve());
    });
    \u0275\u0275text(1, "\u2713 Approve SRP");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.reject());
    });
    \u0275\u0275text(1, "\u2715 Reject");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275template(1, SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_1_Template, 2, 1, "button", 95)(2, SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_2_Template, 2, 0, "button", 96)(3, SrpFormComponent_ng_container_27_div_5_div_7_div_17_button_3_Template, 2, 0, "button", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status === "Draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status === "SentForApproval");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status === "SentForApproval");
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "p", 102);
    \u0275\u0275text(2, "\u2713 SRP Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 103);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Approved by ", ctx_r0.srp.approvedBy, " on ", \u0275\u0275pipeBind2(5, 2, ctx_r0.srp.approvedAt, "dd MMM yyyy HH:mm"));
  }
}
function SrpFormComponent_ng_container_27_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 90)(2, "div", 38)(3, "label", 39);
    \u0275\u0275text(4, "SRP Delivery Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_5_div_7_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.srpDeliveryMethod, $event) || (ctx_r0.srp.srpDeliveryMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_5_div_7_Template_select_ngModelChange_5_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementStart(6, "option", 42);
    \u0275\u0275text(7, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SrpFormComponent_ng_container_27_div_5_div_7_option_8_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 38)(10, "label", 39);
    \u0275\u0275text(11, "Commercial Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function SrpFormComponent_ng_container_27_div_5_div_7_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.srp.commercialLead, $event) || (ctx_r0.srp.commercialLead = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function SrpFormComponent_ng_container_27_div_5_div_7_Template_select_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.autoSave());
    });
    \u0275\u0275elementStart(13, "option", 42);
    \u0275\u0275text(14, "\u2014 Select \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SrpFormComponent_ng_container_27_div_5_div_7_option_15_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, SrpFormComponent_ng_container_27_div_5_div_7_div_16_Template, 4, 1, "div", 91)(17, SrpFormComponent_ng_container_27_div_5_div_7_div_17_Template, 4, 3, "div", 92)(18, SrpFormComponent_ng_container_27_div_5_div_7_div_18_Template, 6, 5, "div", 93);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.srpDeliveryMethod);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.deliveryMethods);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.srp.commercialLead);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.leads);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status === "SentForApproval" || ctx_r0.srp.status === "Rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status !== "Approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.srp.status === "Approved");
  }
}
function SrpFormComponent_ng_container_27_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 33)(2, "div", 34);
    \u0275\u0275listener("click", function SrpFormComponent_ng_container_27_div_5_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggle("approval"));
    });
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Approval & Sign-off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, SrpFormComponent_ng_container_27_div_5_div_7_Template, 19, 7, "div", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.collapsed["approval"] ? "\u25B6" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.collapsed["approval"]);
  }
}
function SrpFormComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SrpFormComponent_ng_container_27_div_1_Template, 15, 4, "div", 20)(2, SrpFormComponent_ng_container_27_div_2_Template, 22, 6, "div", 20)(3, SrpFormComponent_ng_container_27_div_3_Template, 15, 4, "div", 20)(4, SrpFormComponent_ng_container_27_div_4_Template, 8, 2, "div", 20)(5, SrpFormComponent_ng_container_27_div_5_Template, 8, 2, "div", 20);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeStep === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeStep === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeStep === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeStep === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeStep === 4);
  }
}
function SrpFormComponent_div_28_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function SrpFormComponent_div_28_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextStep());
    });
    \u0275\u0275text(1, "Next \u2192");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_div_28_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function SrpFormComponent_div_28_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveDraft());
    });
    \u0275\u0275text(1, "\u2713 Save");
    \u0275\u0275elementEnd();
  }
}
function SrpFormComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "button", 105);
    \u0275\u0275listener("click", function SrpFormComponent_div_28_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.prevStep());
    });
    \u0275\u0275text(2, "\u2190 Previous");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SrpFormComponent_div_28_button_3_Template, 2, 0, "button", 106)(4, SrpFormComponent_div_28_button_4_Template, 2, 0, "button", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.activeStep === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.activeStep < ctx_r0.steps.length - 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.activeStep === ctx_r0.steps.length - 1);
  }
}
var CONTRACT_TYPES = [
  "Option A NEC4 PSC (Service DA) Priced Contract",
  "Option C NEC4 PSC (Service DA) Target Contract",
  "Option E NEC4 PSC (Service DA) Cost Reimbursable",
  "NEC3 PSC",
  "PSSC Short Form"
];
var DELIVERY_METHODS = ["Service Delivery Agreement", "Email", "Hard Copy", "Portal Upload"];
var LEADS = ["James Dawson", "Sarah Mitchell", "Priya Patel", "Tom Hargreaves", "Lucy Chen"];
var TOMS_OPTIONS = [
  "NT18 - Total amount (\xA3) spent in LOCAL supply chain",
  "NT19 - Total amount (\xA3) spent through contract with LOCAL MSMEs",
  "NT61 - Fair Payment Percentage",
  "NT17 - Jobs created or safeguarded",
  "NT62 - Apprenticeships"
];
var SrpFormComponent = class _SrpFormComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.cdr = inject(ChangeDetectorRef);
    this.destroy$ = new Subject();
    this.save$ = new Subject();
    this.opp = null;
    this.srp = null;
    this.activeStep = 0;
    this.saved = false;
    this.collapsed = {};
    this.contractTypes = CONTRACT_TYPES;
    this.deliveryMethods = DELIVERY_METHODS;
    this.leads = LEADS;
    this.tomsOptions = TOMS_OPTIONS;
    this.steps = [
      { label: "Part A \u2014 Details" },
      { label: "Part C \u2014 Overview & VfM" },
      { label: "Scope of Services" },
      { label: "Programme" },
      { label: "Approval" }
    ];
  }
  get mandatoryComplete() {
    if (!this.srp)
      return false;
    return !!(this.srp.clientContactName && this.srp.commissionLead && this.srp.serviceManager && this.srp.commissionDesc && this.srp.mainContractType && this.srp.projectOverview && this.srp.projectSuccessCriteria && this.srp.srpDeliveryMethod && this.srp.commercialLead);
  }
  get progressPct() {
    if (!this.srp)
      return 0;
    const fields = [
      this.srp.clientContactName,
      this.srp.commissionLead,
      this.srp.serviceManager,
      this.srp.commissionDesc,
      this.srp.mainContractType,
      this.srp.projectOverview,
      this.srp.projectSuccessCriteria,
      this.srp.srpDeliveryMethod,
      this.srp.commercialLead
    ];
    return Math.round(fields.filter(Boolean).length / fields.length * 100);
  }
  get tomsTotal() {
    return (this.srp?.tomsRows || []).reduce((a, r) => a + r.target * r.svProxy, 0);
  }
  get statusBadge() {
    return { Draft: "badge-blue", SentForApproval: "badge-amber", Approved: "badge-green", Rejected: "badge-red" }[this.srp?.status] || "badge-blue";
  }
  get statusBannerClass() {
    return { Draft: "draft", SentForApproval: "approval", Approved: "approved", Rejected: "rejected" }[this.srp?.status] || "draft";
  }
  get statusIcon() {
    return { Draft: "\u{1F4DD}", SentForApproval: "\u23F3", Approved: "\u2705", Rejected: "\u274C" }[this.srp?.status] || "\u{1F4DD}";
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.api.get(`/v1/opportunities/${id}`).subscribe((o) => {
      this.opp = o;
      this.api.get(`/v1/srp/${id}`).subscribe((s) => {
        if (!s.tomsRows || !s.tomsRows.length) {
          s.tomsRows = [
            { ref: "NT18 - Total amount (\xA3) spent in LOCAL supply chain through the contract", comments: "", unit: "\xA3", svProxy: 0.91, target: 0, svAdd: 0 },
            { ref: "NT19 - Total amount (\xA3) spent through contract with LOCAL MSMEs", comments: "", unit: "\xA3", svProxy: 0.91, target: 0, svAdd: 0 },
            { ref: "NT61 - Fair Payment - Percentage of invoices on the contract paid within 30 days", comments: "", unit: "%", svProxy: 0, target: 100, svAdd: 0 },
            { ref: "Please Select", comments: "", unit: "\xA3", svProxy: 0, target: 0, svAdd: 0 },
            { ref: "Please Select", comments: "", unit: "\xA3", svProxy: 0, target: 0, svAdd: 0 },
            { ref: "Please Select", comments: "", unit: "\xA3", svProxy: 0, target: 0, svAdd: 0 },
            { ref: "Please Select", comments: "", unit: "\xA3", svProxy: 0, target: 0, svAdd: 0 },
            { ref: "Please Select", comments: "", unit: "\xA3", svProxy: 0, target: 0, svAdd: 0 }
          ];
        }
        if (!s.deliveryRows || !s.deliveryRows.length) {
          s.deliveryRows = [
            { stage: "Stage 2", activity: "Concept Design", startDate: "", endDate: "" },
            { stage: "Stage 3", activity: "Spatial Coordination", startDate: "", endDate: "" },
            { stage: "Stage 4", activity: "Technical Design", startDate: "", endDate: "" },
            { stage: "Stage 5", activity: "Construction", startDate: "", endDate: "" }
          ];
        }
        this.srp = s;
        this.cdr.markForCheck();
      });
    });
    this.save$.pipe(debounceTime(1500), takeUntil(this.destroy$)).subscribe(() => this.doSave());
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  toggle(key) {
    this.collapsed[key] = !this.collapsed[key];
  }
  isStepComplete(i) {
    return i === 0 && !!(this.srp?.clientContactName && this.srp?.commissionLead);
  }
  prevStep() {
    if (this.activeStep > 0) {
      this.activeStep--;
      this.scrollTop();
    }
  }
  nextStep() {
    if (this.activeStep < this.steps.length - 1) {
      this.activeStep++;
      this.scrollTop();
    }
  }
  scrollTop() {
    document.getElementById("srp-scroll-area")?.scrollTo(0, 0);
  }
  autoSave() {
    this.save$.next();
  }
  saveDraft() {
    this.doSave();
  }
  doSave() {
    if (!this.srp || !this.opp)
      return;
    this.api.put(`/v1/srp/${this.opp.id}`, this.srp).subscribe(() => {
      this.saved = true;
      this.cdr.markForCheck();
      setTimeout(() => {
        this.saved = false;
        this.cdr.markForCheck();
      }, 2500);
    });
  }
  sendForApproval() {
    if (!this.opp)
      return;
    this.doSave();
    this.api.post(`/v1/srp/${this.opp.id}/send-approval`, {}).subscribe(() => {
      this.srp = __spreadProps(__spreadValues({}, this.srp), { status: "SentForApproval" });
      this.cdr.markForCheck();
    });
  }
  approve() {
    if (!this.opp)
      return;
    const comments = this.srp.approvalComments || "Approved";
    this.api.post(`/v1/srp/${this.opp.id}/approve`, { comments }).subscribe(() => {
      this.srp = __spreadProps(__spreadValues({}, this.srp), { status: "Approved", approvedAt: (/* @__PURE__ */ new Date()).toISOString() });
      this.cdr.markForCheck();
    });
  }
  reject() {
    if (!this.opp)
      return;
    const comments = this.srp.approvalComments || "Rejected";
    this.api.post(`/v1/srp/${this.opp.id}/reject`, { comments }).subscribe(() => {
      this.srp = __spreadProps(__spreadValues({}, this.srp), { status: "Rejected" });
      this.cdr.markForCheck();
    });
  }
  printSRP() {
    window.print();
  }
  trkIdx(i) {
    return i;
  }
  static {
    this.\u0275fac = function SrpFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SrpFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SrpFormComponent, selectors: [["app-srp-form"]], decls: 29, vars: 16, consts: [[1, "srp-shell"], [1, "srp-toolbar", 2, "position", "relative"], ["routerLink", "/opportunities", 2, "font-size", "12px", "color", "#64748b", "text-decoration", "none"], ["class", "chip", 4, "ngIf"], [2, "font-size", "13px", "font-weight", "700", "color", "#1a2240"], [1, "badge"], [2, "margin-left", "auto", "display", "flex", "gap", "6px", "align-items", "center"], [1, "save-indicator"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["class", "btn btn-primary btn-sm", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-success btn-sm", 3, "click", 4, "ngIf"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "srp-body"], ["aria-label", "SRP sections", 1, "srp-stepper"], [1, "srp-progress"], ["class", "srp-progress-seg", 3, "filled", 4, "ngFor", "ngForOf"], ["class", "step-item", "role", "button", "tabindex", "0", 3, "active", "complete", "click", "keydown.enter", 4, "ngFor", "ngForOf"], ["id", "srp-scroll-area", 1, "srp-content"], ["class", "status-banner", 3, "class", 4, "ngIf"], ["style", "text-align:center;padding:40px;color:#94a3b8", 4, "ngIf"], [4, "ngIf"], ["style", "display:flex;justify-content:space-between;margin-top:16px", 4, "ngIf"], [1, "chip"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "srp-progress-seg"], ["role", "button", "tabindex", "0", 1, "step-item", 3, "click", "keydown.enter"], [1, "step-num"], [1, "status-banner"], ["style", "margin-left:auto;font-size:11px;color:#dc2626", 4, "ngIf"], [2, "margin-left", "auto", "font-size", "11px", "color", "#dc2626"], [2, "text-align", "center", "padding", "40px", "color", "#94a3b8"], [1, "srp-section"], [1, "srp-sec-hdr", 3, "click"], ["class", "srp-sec-body", 4, "ngIf"], [1, "srp-sec-body"], [1, "srp-grid"], [1, "srp-field"], [1, "srp-label", "srp-required"], ["placeholder", "Full name", 1, "srp-input", 3, "ngModelChange", "ngModel"], [1, "srp-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "srp-label"], ["type", "email", 1, "srp-input", 3, "ngModelChange", "ngModel"], ["maxlength", "50", 1, "srp-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Role / position", 1, "srp-input", 3, "ngModelChange", "ngModel"], [1, "srp-input", 3, "ngModelChange", "ngModel"], [1, "srp-field", "srp-full"], ["placeholder", "Brief description of the commission\u2026", "rows", "3", 1, "srp-textarea", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "srp-input", 3, "ngModelChange", "ngModel"], [1, "yn-wrap"], [1, "yn-btn", 3, "click"], [3, "value"], [1, "srp-field", 2, "margin-bottom", "12px"], [1, "yn-wrap", 2, "max-width", "200px"], ["style", "background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:12px", 4, "ngIf"], [2, "background", "#eff6ff", "border", "1px solid #bfdbfe", "border-radius", "7px", "padding", "12px"], [2, "font-size", "12px", "color", "#1d4ed8", "margin-bottom", "8px"], ["placeholder", "Detail pre-engagement activities\u2026", "rows", "4", 1, "srp-textarea", 3, "ngModelChange", "ngModel"], ["rows", "6", "placeholder", "This project is to deliver [project description] at [project location]\u2026", 1, "srp-textarea", 3, "ngModelChange", "ngModel"], ["rows", "4", 1, "srp-textarea", 3, "ngModelChange", "ngModel"], [1, "srp-grid-3", 2, "margin-bottom", "12px"], ["rows", "6", 1, "srp-textarea", 3, "ngModelChange", "ngModel"], ["rows", "3", 1, "srp-textarea", 3, "ngModelChange", "ngModel"], [1, "toms-table"], [2, "width", "35%"], [2, "width", "60px"], [2, "width", "80px"], [4, "ngFor", "ngForOf"], [2, "background", "#f8fafc"], ["colspan", "5", 2, "text-align", "right", "font-weight", "700", "font-size", "12px", "padding", "8px"], [2, "text-align", "right", "font-weight", "800", "font-size", "13px", "color", "#16a34a", "padding", "8px"], ["style", "font-size:11px;color:#64748b", 4, "ngIf"], ["class", "toms-input", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["rows", "2", 1, "toms-input", 3, "ngModelChange", "ngModel"], ["type", "number", "step", "0.01", "min", "0", 1, "toms-input", 2, "text-align", "right", 3, "ngModelChange", "ngModel"], [2, "text-align", "right", "font-weight", "700", "color", "#2563eb"], [2, "font-size", "11px", "color", "#64748b"], [1, "toms-input", 3, "ngModelChange", "ngModel"], ["value", "Please Select"], [1, "srp-field", 2, "margin-bottom", "14px"], [1, "srp-grid", 2, "gap", "14px"], ["style", "padding:16px;background:#f8fafc;border:1px dashed #dde2ee;border-radius:7px;text-align:center;color:#94a3b8", 4, "ngIf"], [2, "font-size", "12px", "color", "#5a6b8a", "margin-bottom", "10px"], [1, "del-table"], [2, "width", "130px"], [2, "font-weight", "600", "color", "#1a2240"], [2, "padding", "16px", "background", "#f8fafc", "border", "1px dashed #dde2ee", "border-radius", "7px", "text-align", "center", "color", "#94a3b8"], [1, "srp-grid", 2, "margin-bottom", "14px"], ["class", "srp-field", 4, "ngIf"], ["style", "display:flex;gap:8px;margin-top:14px;padding-top:14px;border-top:1px solid #e2e8f0", 4, "ngIf"], ["style", "background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:14px", 4, "ngIf"], [2, "display", "flex", "gap", "8px", "margin-top", "14px", "padding-top", "14px", "border-top", "1px solid #e2e8f0"], ["class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [2, "background", "#f0fdf4", "border", "1px solid #bbf7d0", "border-radius", "7px", "padding", "14px"], [2, "font-size", "13px", "font-weight", "700", "color", "#15803d"], [1, "text-muted", 2, "margin-top", "4px"], [2, "display", "flex", "justify-content", "space-between", "margin-top", "16px"], [1, "btn", "btn-ghost", 3, "click", "disabled"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"]], template: function SrpFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275text(3, "\u2190 Back");
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, SrpFormComponent_span_4_Template, 2, 1, "span", 3);
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "span", 7);
        \u0275\u0275text(11, "\u2713 Saved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function SrpFormComponent_Template_button_click_12_listener() {
          return ctx.saveDraft();
        });
        \u0275\u0275text(13, "\u{1F4BE} Save Draft");
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, SrpFormComponent_button_14_Template, 2, 1, "button", 9)(15, SrpFormComponent_button_15_Template, 2, 0, "button", 10)(16, SrpFormComponent_button_16_Template, 2, 0, "button", 11);
        \u0275\u0275elementStart(17, "button", 8);
        \u0275\u0275listener("click", function SrpFormComponent_Template_button_click_17_listener() {
          return ctx.printSRP();
        });
        \u0275\u0275text(18, "\u{1F5A8} Print");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 12)(20, "nav", 13)(21, "div", 14);
        \u0275\u0275template(22, SrpFormComponent_div_22_Template, 1, 2, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, SrpFormComponent_div_23_Template, 5, 7, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 17);
        \u0275\u0275template(25, SrpFormComponent_div_25_Template, 9, 8, "div", 18)(26, SrpFormComponent_div_26_Template, 2, 0, "div", 19)(27, SrpFormComponent_ng_container_27_Template, 6, 5, "ng-container", 20)(28, SrpFormComponent_div_28_Template, 5, 3, "div", 21);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.opp);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.opp == null ? null : ctx.opp.name);
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.statusBadge);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate((ctx.srp == null ? null : ctx.srp.status) || "Draft");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("show", ctx.saved);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", (ctx.srp == null ? null : ctx.srp.status) === "Draft");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.srp == null ? null : ctx.srp.status) === "SentForApproval");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", (ctx.srp == null ? null : ctx.srp.status) === "SentForApproval");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.steps);
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.steps);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.srp);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.srp);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.srp);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.srp);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, NgModel, DecimalPipe, DatePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  font-family: inherit;\n}\n.srp-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #f0f2f7;\n}\n.srp-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: #fff;\n  border-bottom: 1px solid #dde2ee;\n  flex-shrink: 0;\n}\n.srp-toolbar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #00aeef,\n      #f5a800);\n}\n.srp-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  gap: 0;\n}\n.srp-stepper[_ngcontent-%COMP%] {\n  width: 200px;\n  flex-shrink: 0;\n  background: #fff;\n  border-right: 1px solid #dde2ee;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #5a6b8a;\n  transition: all .12s;\n  border-left: 3px solid transparent;\n}\n.step-item[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n  color: #1a2240;\n}\n.step-item.active[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, .07);\n  color: #2563eb;\n  font-weight: 700;\n  border-left-color: #2563eb;\n}\n.step-item.complete[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #64748b;\n  font-size: 10px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.srp-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.srp-section[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.srp-sec-hdr[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.srp-sec-hdr[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n  flex: 1;\n}\n.srp-sec-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.srp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.srp-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.srp-full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.srp-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.srp-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #5a6b8a;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n}\n.srp-required[_ngcontent-%COMP%]::after {\n  content: " *";\n  color: #dc2626;\n}\n.srp-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  transition: border-color .12s;\n}\n.srp-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.srp-textarea[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 8px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\n.srp-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.srp-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.srp-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.yn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.yn-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  background: #fff;\n  color: #64748b;\n  transition: all .12s;\n  font-family: inherit;\n}\n.yn-btn.yn-active-yes[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.yn-btn.yn-active-no[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 7px;\n  margin-bottom: 14px;\n  font-size: 12.5px;\n}\n.status-banner.draft[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1d4ed8;\n}\n.status-banner.approval[_ngcontent-%COMP%] {\n  background: #fefce8;\n  border: 1px solid #fde68a;\n  color: #92400e;\n}\n.status-banner.approved[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #15803d;\n}\n.status-banner.rejected[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #b91c1c;\n}\n.toms-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.toms-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 7px 8px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  text-align: left;\n}\n.toms-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f0f2f7;\n  vertical-align: middle;\n}\n.toms-table[_ngcontent-%COMP%]   .toms-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 4px;\n  padding: 4px 6px;\n  font-size: 12px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.toms-table[_ngcontent-%COMP%]   .toms-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.del-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\n.del-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 7px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n}\n.del-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: #fff;\n  border-color: #16a34a;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #15803d;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 5px 12px;\n  font-size: 12px;\n}\n.save-indicator[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #16a34a;\n  opacity: 0;\n  transition: opacity .3s;\n}\n.save-indicator.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.srp-progress[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.srp-progress-seg[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  border-radius: 2px;\n  background: #e2e8f0;\n  transition: background .3s;\n}\n.srp-progress-seg.filled[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n/*# sourceMappingURL=srp-form.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SrpFormComponent, [{
    type: Component,
    args: [{ selector: "app-srp-form", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, FormsModule], template: `
  <div class="srp-shell">
    <!-- Toolbar -->
    <div class="srp-toolbar" style="position:relative">
      <a routerLink="/opportunities" style="font-size:12px;color:#64748b;text-decoration:none">\u2190 Back</a>
      <span class="chip" *ngIf="opp">{{ opp?.commNum }}</span>
      <span style="font-size:13px;font-weight:700;color:#1a2240">{{ opp?.name }}</span>
      <span class="badge" [class]="statusBadge">{{ srp?.status || 'Draft' }}</span>
      <div style="margin-left:auto;display:flex;gap:6px;align-items:center">
        <span class="save-indicator" [class.show]="saved">\u2713 Saved</span>
        <button class="btn btn-ghost btn-sm" (click)="saveDraft()">\u{1F4BE} Save Draft</button>
        <button class="btn btn-primary btn-sm" *ngIf="srp?.status==='Draft'" (click)="sendForApproval()" [disabled]="!mandatoryComplete">
          Send for Approval
        </button>
        <button class="btn btn-success btn-sm" *ngIf="srp?.status==='SentForApproval'" (click)="approve()">\u2713 Approve</button>
        <button class="btn btn-danger btn-sm" *ngIf="srp?.status==='SentForApproval'" (click)="reject()">\u2715 Reject</button>
        <button class="btn btn-ghost btn-sm" (click)="printSRP()">\u{1F5A8} Print</button>
      </div>
    </div>

    <div class="srp-body">
      <!-- Stepper nav -->
      <nav class="srp-stepper" aria-label="SRP sections">
        <div class="srp-progress">
          <div class="srp-progress-seg" *ngFor="let _ of steps" [class.filled]="progressPct > 0"></div>
        </div>
        <div *ngFor="let step of steps; let i=index"
          class="step-item"
          [class.active]="activeStep===i"
          [class.complete]="isStepComplete(i)"
          (click)="activeStep=i"
          [attr.aria-label]="step.label"
          role="button" tabindex="0"
          (keydown.enter)="activeStep=i">
          <span class="step-num">{{ i+1 }}</span>
          <span>{{ step.label }}</span>
        </div>
      </nav>

      <!-- Main content -->
      <div class="srp-content" id="srp-scroll-area">

        <!-- Status banner -->
        <div class="status-banner" [class]="statusBannerClass" *ngIf="srp">
          <span>{{ statusIcon }}</span>
          <strong>{{ srp.status || 'Draft' }}</strong>
          <span *ngIf="srp.status==='SentForApproval'">\u2014 Awaiting approval from commercial lead</span>
          <span *ngIf="srp.status==='Approved'">\u2014 Approved by {{ srp.approvedBy }} on {{ srp.approvedAt | date:'dd MMM yyyy' }}</span>
          <span *ngIf="srp.status==='Rejected'">\u2014 {{ srp.approvalComments }}</span>
          <span *ngIf="!mandatoryComplete && srp.status==='Draft'" style="margin-left:auto;font-size:11px;color:#dc2626">\u26A0 Complete mandatory fields to send for approval</span>
        </div>

        <div *ngIf="!srp" style="text-align:center;padding:40px;color:#94a3b8">Loading SRP data\u2026</div>

        <ng-container *ngIf="srp">

        <!-- \u2500\u2500 PART A: Outline Service Requirements \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div *ngIf="activeStep===0">
          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('contacts')">
              <h3>1.0 \u2014 Commission & Contact Details</h3>
              <span>{{ collapsed['contacts'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['contacts']">
              <div class="srp-grid">
                <div class="srp-field">
                  <label class="srp-label srp-required">Client Contact Name</label>
                  <input class="srp-input" [(ngModel)]="srp.clientContactName" placeholder="Full name" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label srp-required">Commission Lead</label>
                  <select class="srp-select" [(ngModel)]="srp.commissionLead" (ngModelChange)="autoSave()">
                    <option value="">\u2014 Select \u2014</option>
                    <option *ngFor="let l of leads" [value]="l">{{ l }}</option>
                  </select>
                </div>
                <div class="srp-field">
                  <label class="srp-label">Client Contact Email</label>
                  <input class="srp-input" type="email" [(ngModel)]="srp.clientContactEmail" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label">Commission Lead Email</label>
                  <input class="srp-input" type="email" [(ngModel)]="srp.commissionLeadEmail" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label">Client Contact Tel</label>
                  <input class="srp-input" [(ngModel)]="srp.clientContactTel" maxlength="50" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label">Commission Lead Mobile</label>
                  <input class="srp-input" [(ngModel)]="srp.commissionLeadMobile" maxlength="50" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label">Client Contact Position</label>
                  <input class="srp-input" [(ngModel)]="srp.clientContactPosition" placeholder="Role / position" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label srp-required">Service Manager</label>
                  <input class="srp-input" [(ngModel)]="srp.serviceManager" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field srp-full">
                  <label class="srp-label srp-required">Commission Description</label>
                  <textarea class="srp-textarea" [(ngModel)]="srp.commissionDesc" placeholder="Brief description of the commission\u2026" rows="3" (ngModelChange)="autoSave()"></textarea>
                </div>
                <div class="srp-field">
                  <label class="srp-label">Commission Post Code</label>
                  <input class="srp-input" [(ngModel)]="srp.commissionPostCode" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label srp-required">Main Contract Type</label>
                  <select class="srp-select" [(ngModel)]="srp.mainContractType" (ngModelChange)="autoSave()">
                    <option value="">\u2014 Select \u2014</option>
                    <option *ngFor="let c of contractTypes" [value]="c">{{ c }}</option>
                  </select>
                </div>
                <div class="srp-field">
                  <label class="srp-label">Start Date</label>
                  <input class="srp-input" type="date" [(ngModel)]="srp.startDate" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label">End Date</label>
                  <input class="srp-input" type="date" [(ngModel)]="srp.endDate" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label">Confidentiality Flag</label>
                  <div class="yn-wrap">
                    <button class="yn-btn" [class.yn-active-yes]="srp.confidentialityFlag==='Yes'" (click)="srp.confidentialityFlag='Yes';autoSave()">Yes</button>
                    <button class="yn-btn" [class.yn-active-no]="srp.confidentialityFlag==='No'" (click)="srp.confidentialityFlag='No';autoSave()">No</button>
                  </div>
                </div>
                <div class="srp-field">
                  <label class="srp-label">Has Programme?</label>
                  <div class="yn-wrap">
                    <button class="yn-btn" [class.yn-active-yes]="srp.hasProgramme==='Yes'" (click)="srp.hasProgramme='Yes';autoSave()">Yes</button>
                    <button class="yn-btn" [class.yn-active-no]="srp.hasProgramme==='No'" (click)="srp.hasProgramme='No';autoSave()">No</button>
                  </div>
                </div>
                <div class="srp-field">
                  <label class="srp-label">Has Project Brief?</label>
                  <div class="yn-wrap">
                    <button class="yn-btn" [class.yn-active-yes]="srp.hasProjectBrief==='Yes'" (click)="srp.hasProjectBrief='Yes';autoSave()">Yes</button>
                    <button class="yn-btn" [class.yn-active-no]="srp.hasProjectBrief==='No'" (click)="srp.hasProjectBrief='No';autoSave()">No</button>
                  </div>
                </div>
                <div class="srp-field">
                  <label class="srp-label">Has Scheme Layout?</label>
                  <div class="yn-wrap">
                    <button class="yn-btn" [class.yn-active-yes]="srp.hasSchemeLayout==='Yes'" (click)="srp.hasSchemeLayout='Yes';autoSave()">Yes</button>
                    <button class="yn-btn" [class.yn-active-no]="srp.hasSchemeLayout==='No'" (click)="srp.hasSchemeLayout='No';autoSave()">No</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Part B: Pre-Engagement -->
          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('preeng')">
              <h3>2.0 \u2014 Pre-Engagement Requirements</h3>
              <span>{{ collapsed['preeng'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['preeng']">
              <div class="srp-field" style="margin-bottom:12px">
                <label class="srp-label">Pre-Engagement Required?</label>
                <div class="yn-wrap" style="max-width:200px">
                  <button class="yn-btn" [class.yn-active-yes]="srp.preEngagementRequired==='Yes'" (click)="srp.preEngagementRequired='Yes';autoSave()">Yes</button>
                  <button class="yn-btn" [class.yn-active-no]="srp.preEngagementRequired==='No'" (click)="srp.preEngagementRequired='No';autoSave()">No</button>
                </div>
              </div>
              <div *ngIf="srp.preEngagementRequired==='Yes'" style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:7px;padding:12px">
                <p style="font-size:12px;color:#1d4ed8;margin-bottom:8px">Specify pre-engagement requirements the client must satisfy before commission commences:</p>
                <textarea class="srp-textarea" [(ngModel)]="srp.s61" placeholder="Detail pre-engagement activities\u2026" rows="4" (ngModelChange)="autoSave()"></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- \u2500\u2500 PART C: Project Overview & VfM \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div *ngIf="activeStep===1">
          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('overview')">
              <h3>3.0 \u2014 Project Overview & Objectives</h3>
              <span>{{ collapsed['overview'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['overview']">
              <div class="srp-field" style="margin-bottom:12px">
                <label class="srp-label srp-required">Project Overview</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.projectOverview" rows="6" (ngModelChange)="autoSave()"
                  placeholder="This project is to deliver [project description] at [project location]\u2026"></textarea>
              </div>
              <div class="srp-field" style="margin-bottom:12px">
                <label class="srp-label">Objectives</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.objectives" rows="4" (ngModelChange)="autoSave()"></textarea>
              </div>
              <div class="srp-field">
                <label class="srp-label">Health & Safety</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.healthSafety" rows="4" (ngModelChange)="autoSave()"></textarea>
              </div>
            </div>
          </div>

          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('vfm')">
              <h3>4.0 \u2014 Value for Money & Key Performance Indicators</h3>
              <span>{{ collapsed['vfm'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['vfm']">
              <div class="srp-field" style="margin-bottom:12px">
                <label class="srp-label">VfM Statement</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.vfmStatement" rows="4" (ngModelChange)="autoSave()"></textarea>
              </div>
              <div class="srp-grid-3" style="margin-bottom:12px">
                <div class="srp-field">
                  <label class="srp-label">VfM Driver 1</label>
                  <input class="srp-input" [(ngModel)]="srp.vfmDriver1" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label">VfM Driver 2</label>
                  <input class="srp-input" [(ngModel)]="srp.vfmDriver2" (ngModelChange)="autoSave()">
                </div>
                <div class="srp-field">
                  <label class="srp-label">VfM Driver 3</label>
                  <input class="srp-input" [(ngModel)]="srp.vfmDriver3" (ngModelChange)="autoSave()">
                </div>
              </div>
              <div class="srp-field">
                <label class="srp-label srp-required">Project Success Criteria</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.projectSuccessCriteria" rows="6" (ngModelChange)="autoSave()"></textarea>
              </div>
            </div>
          </div>

          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('social')">
              <h3>5.0 \u2014 Social Value (TOMS)</h3>
              <span>{{ collapsed['social'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['social']">
              <div class="srp-field" style="margin-bottom:12px">
                <label class="srp-label">Social Value Narrative</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.socialValue" rows="3" (ngModelChange)="autoSave()"></textarea>
              </div>
              <table class="toms-table">
                <thead><tr>
                  <th style="width:35%">TOMS Reference</th>
                  <th>Comments</th>
                  <th style="width:60px">Unit</th>
                  <th style="width:80px">SV Proxy</th>
                  <th style="width:80px">Target</th>
                  <th style="width:80px">SV Add</th>
                </tr></thead>
                <tbody>
                  <tr *ngFor="let row of srp.tomsRows; let i=index">
                    <td>
                      <span *ngIf="i<3" style="font-size:11px;color:#64748b">{{ row.ref }}</span>
                      <select *ngIf="i>=3" class="toms-input" [(ngModel)]="row.ref" (ngModelChange)="autoSave()">
                        <option value="Please Select">Please Select</option>
                        <option *ngFor="let o of tomsOptions" [value]="o">{{ o }}</option>
                      </select>
                    </td>
                    <td><textarea class="toms-input" [(ngModel)]="row.comments" rows="2" (ngModelChange)="autoSave()"></textarea></td>
                    <td>{{ row.unit }}</td>
                    <td>{{ row.svProxy | number:'1.2-2' }}</td>
                    <td><input class="toms-input" type="number" [(ngModel)]="row.target" step="0.01" min="0" (ngModelChange)="autoSave()" style="text-align:right"></td>
                    <td style="text-align:right;font-weight:700;color:#2563eb">{{ (row.target * row.svProxy) | number:'1.2-2' }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr style="background:#f8fafc">
                    <td colspan="5" style="text-align:right;font-weight:700;font-size:12px;padding:8px">Total Social Value Added:</td>
                    <td style="text-align:right;font-weight:800;font-size:13px;color:#16a34a;padding:8px">{{ tomsTotal | number:'1.2-2' }}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <!-- \u2500\u2500 Scope of Services \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div *ngIf="activeStep===2">
          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('scope6')">
              <h3>6.0 \u2014 Scope of Services</h3>
              <span>{{ collapsed['scope6'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['scope6']">
              <div class="srp-field" style="margin-bottom:14px">
                <label class="srp-label">6.1 \u2014 Professional Services Schedule</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.s61" rows="4" (ngModelChange)="autoSave()"></textarea>
              </div>
              <div class="srp-field" style="margin-bottom:14px">
                <label class="srp-label">6.2 \u2014 Scope Addendum</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.s62" rows="4" (ngModelChange)="autoSave()"></textarea>
              </div>
              <div class="srp-field" style="margin-bottom:14px">
                <label class="srp-label">6.3 \u2014 Additional Scope Notes</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.s63" rows="3" (ngModelChange)="autoSave()"></textarea>
              </div>
              <div class="srp-field" style="margin-bottom:14px">
                <label class="srp-label">6.5 \u2014 Health & Safety (CDM)</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.s65" rows="3" (ngModelChange)="autoSave()"></textarea>
              </div>
              <div class="srp-field" style="margin-bottom:14px">
                <label class="srp-label">6.6 \u2014 Principal Designer</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.s66" rows="4" (ngModelChange)="autoSave()"></textarea>
              </div>
              <div class="srp-field">
                <label class="srp-label">7.0 \u2014 Key Staff CVs</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.s70" rows="3" (ngModelChange)="autoSave()"></textarea>
              </div>
            </div>
          </div>

          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('scope9')">
              <h3>9.0 \u2013 15.0 \u2014 Extended Scope Sections</h3>
              <span>{{ collapsed['scope9'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['scope9']">
              <div class="srp-grid" style="gap:14px">
                <div class="srp-field">
                  <label class="srp-label">9.0 \u2014 Insurance Requirements</label>
                  <textarea class="srp-textarea" [(ngModel)]="srp.s90" rows="3" (ngModelChange)="autoSave()"></textarea>
                </div>
                <div class="srp-field">
                  <label class="srp-label">10.0 \u2014 Payment Terms</label>
                  <textarea class="srp-textarea" [(ngModel)]="srp.s100" rows="3" (ngModelChange)="autoSave()"></textarea>
                </div>
                <div class="srp-field">
                  <label class="srp-label">11.0 \u2014 Quality Management</label>
                  <textarea class="srp-textarea" [(ngModel)]="srp.s110" rows="3" (ngModelChange)="autoSave()"></textarea>
                </div>
                <div class="srp-field">
                  <label class="srp-label">12.0 \u2014 Sustainability</label>
                  <textarea class="srp-textarea" [(ngModel)]="srp.s120" rows="3" (ngModelChange)="autoSave()"></textarea>
                </div>
                <div class="srp-field">
                  <label class="srp-label">13.0 \u2014 BIM Requirements</label>
                  <textarea class="srp-textarea" [(ngModel)]="srp.s130" rows="3" (ngModelChange)="autoSave()"></textarea>
                </div>
                <div class="srp-field">
                  <label class="srp-label">14.0 \u2014 Reporting Requirements</label>
                  <textarea class="srp-textarea" [(ngModel)]="srp.s140" rows="3" (ngModelChange)="autoSave()"></textarea>
                </div>
                <div class="srp-field srp-full">
                  <label class="srp-label">15.0 \u2014 Additional Requirements</label>
                  <textarea class="srp-textarea" [(ngModel)]="srp.s150" rows="3" (ngModelChange)="autoSave()"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- \u2500\u2500 Programme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div *ngIf="activeStep===3">
          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('prog')">
              <h3>8.0 \u2014 Programme</h3>
              <span>{{ collapsed['prog'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['prog']">
              <div class="srp-field" style="margin-bottom:12px">
                <label class="srp-label">Upload Own Programme?</label>
                <div class="yn-wrap" style="max-width:200px">
                  <button class="yn-btn" [class.yn-active-yes]="srp.uploadOwnProgramme==='Yes'" (click)="srp.uploadOwnProgramme='Yes';autoSave()">Yes</button>
                  <button class="yn-btn" [class.yn-active-no]="srp.uploadOwnProgramme==='No'" (click)="srp.uploadOwnProgramme='No';autoSave()">No</button>
                </div>
              </div>
              <div *ngIf="srp.uploadOwnProgramme==='No'">
                <p style="font-size:12px;color:#5a6b8a;margin-bottom:10px">Define the delivery programme for each RIBA stage:</p>
                <table class="del-table">
                  <thead><tr>
                    <th>RIBA Stage</th><th>Activity</th>
                    <th style="width:130px">Start Date</th><th style="width:130px">End Date</th>
                  </tr></thead>
                  <tbody>
                    <tr *ngFor="let row of srp.deliveryRows">
                      <td style="font-weight:600;color:#1a2240">{{ row.stage }}</td>
                      <td><input class="srp-input" [(ngModel)]="row.activity" (ngModelChange)="autoSave()"></td>
                      <td><input class="srp-input" type="date" [(ngModel)]="row.startDate" (ngModelChange)="autoSave()"></td>
                      <td><input class="srp-input" type="date" [(ngModel)]="row.endDate" (ngModelChange)="autoSave()"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div *ngIf="srp.uploadOwnProgramme==='Yes'" style="padding:16px;background:#f8fafc;border:1px dashed #dde2ee;border-radius:7px;text-align:center;color:#94a3b8">
                Programme upload functionality \u2014 attach programme document via document management system
              </div>
            </div>
          </div>
        </div>

        <!-- \u2500\u2500 Approval \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
        <div *ngIf="activeStep===4">
          <div class="srp-section">
            <div class="srp-sec-hdr" (click)="toggle('approval')">
              <h3>Approval & Sign-off</h3>
              <span>{{ collapsed['approval'] ? '\u25B6' : '\u25BC' }}</span>
            </div>
            <div class="srp-sec-body" *ngIf="!collapsed['approval']">
              <div class="srp-grid" style="margin-bottom:14px">
                <div class="srp-field">
                  <label class="srp-label srp-required">SRP Delivery Method</label>
                  <select class="srp-select" [(ngModel)]="srp.srpDeliveryMethod" (ngModelChange)="autoSave()">
                    <option value="">\u2014 Select \u2014</option>
                    <option *ngFor="let d of deliveryMethods" [value]="d">{{ d }}</option>
                  </select>
                </div>
                <div class="srp-field">
                  <label class="srp-label srp-required">Commercial Lead</label>
                  <select class="srp-select" [(ngModel)]="srp.commercialLead" (ngModelChange)="autoSave()">
                    <option value="">\u2014 Select \u2014</option>
                    <option *ngFor="let l of leads" [value]="l">{{ l }}</option>
                  </select>
                </div>
              </div>
              <div class="srp-field" *ngIf="srp.status==='SentForApproval' || srp.status==='Rejected'">
                <label class="srp-label">Approval Comments</label>
                <textarea class="srp-textarea" [(ngModel)]="srp.approvalComments" rows="4" (ngModelChange)="autoSave()"></textarea>
              </div>

              <!-- Approval actions -->
              <div style="display:flex;gap:8px;margin-top:14px;padding-top:14px;border-top:1px solid #e2e8f0" *ngIf="srp.status!=='Approved'">
                <button class="btn btn-primary" *ngIf="srp.status==='Draft'" (click)="sendForApproval()" [disabled]="!mandatoryComplete">
                  Send for Approval
                </button>
                <button class="btn btn-success" *ngIf="srp.status==='SentForApproval'" (click)="approve()">\u2713 Approve SRP</button>
                <button class="btn btn-danger" *ngIf="srp.status==='SentForApproval'" (click)="reject()">\u2715 Reject</button>
              </div>
              <div *ngIf="srp.status==='Approved'" style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px;padding:14px">
                <p style="font-size:13px;font-weight:700;color:#15803d">\u2713 SRP Approved</p>
                <p class="text-muted" style="margin-top:4px">Approved by {{ srp.approvedBy }} on {{ srp.approvedAt | date:'dd MMM yyyy HH:mm' }}</p>
              </div>
            </div>
          </div>
        </div>

        </ng-container>

        <!-- Navigation buttons -->
        <div style="display:flex;justify-content:space-between;margin-top:16px" *ngIf="srp">
          <button class="btn btn-ghost" (click)="prevStep()" [disabled]="activeStep===0">\u2190 Previous</button>
          <button class="btn btn-primary" (click)="nextStep()" *ngIf="activeStep < steps.length-1">Next \u2192</button>
          <button class="btn btn-success" (click)="saveDraft()" *ngIf="activeStep===steps.length-1">\u2713 Save</button>
        </div>
      </div>
    </div>
  </div>
  `, styles: ['/* angular:styles/component:css;c8dbd71d56a2b32c7d3c833bb1c2392cdd9a1effac81d98558ab25d44dcbb027;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/srp/srp-form.component.ts */\n:host {\n  display: block;\n  font-family: inherit;\n}\n.srp-shell {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: #f0f2f7;\n}\n.srp-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: #fff;\n  border-bottom: 1px solid #dde2ee;\n  flex-shrink: 0;\n}\n.srp-toolbar::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #00aeef,\n      #f5a800);\n}\n.srp-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  gap: 0;\n}\n.srp-stepper {\n  width: 200px;\n  flex-shrink: 0;\n  background: #fff;\n  border-right: 1px solid #dde2ee;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.step-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 14px;\n  cursor: pointer;\n  font-size: 12px;\n  color: #5a6b8a;\n  transition: all .12s;\n  border-left: 3px solid transparent;\n}\n.step-item:hover {\n  background: #f5f7fb;\n  color: #1a2240;\n}\n.step-item.active {\n  background: rgba(37, 99, 235, .07);\n  color: #2563eb;\n  font-weight: 700;\n  border-left-color: #2563eb;\n}\n.step-item.complete .step-num {\n  background: #16a34a;\n  color: #fff;\n}\n.step-num {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #64748b;\n  font-size: 10px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.srp-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n.srp-section {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  margin-bottom: 14px;\n  overflow: hidden;\n}\n.srp-sec-hdr {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.srp-sec-hdr h3 {\n  font-size: 12.5px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n  flex: 1;\n}\n.srp-sec-body {\n  padding: 16px;\n}\n.srp-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.srp-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.srp-full {\n  grid-column: 1/-1;\n}\n.srp-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.srp-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #5a6b8a;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n}\n.srp-required::after {\n  content: " *";\n  color: #dc2626;\n}\n.srp-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  transition: border-color .12s;\n}\n.srp-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.srp-textarea {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 8px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\n.srp-textarea:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.srp-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.srp-select:focus {\n  border-color: #2563eb;\n}\n.yn-wrap {\n  display: flex;\n  gap: 0;\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.yn-btn {\n  flex: 1;\n  padding: 6px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  background: #fff;\n  color: #64748b;\n  transition: all .12s;\n  font-family: inherit;\n}\n.yn-btn.yn-active-yes {\n  background: #dcfce7;\n  color: #166534;\n}\n.yn-btn.yn-active-no {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-radius: 7px;\n  margin-bottom: 14px;\n  font-size: 12.5px;\n}\n.status-banner.draft {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1d4ed8;\n}\n.status-banner.approval {\n  background: #fefce8;\n  border: 1px solid #fde68a;\n  color: #92400e;\n}\n.status-banner.approved {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #15803d;\n}\n.status-banner.rejected {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #b91c1c;\n}\n.toms-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.toms-table th {\n  background: #f5f7fb;\n  padding: 7px 8px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .3px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n  text-align: left;\n}\n.toms-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f0f2f7;\n  vertical-align: middle;\n}\n.toms-table .toms-input {\n  border: 1px solid #dde2ee;\n  border-radius: 4px;\n  padding: 4px 6px;\n  font-size: 12px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.toms-table .toms-input:focus {\n  border-color: #2563eb;\n}\n.del-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\n.del-table th {\n  background: #f5f7fb;\n  padding: 7px 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #5a6b8a;\n  border-bottom: 2px solid #e2e8f0;\n}\n.del-table td {\n  padding: 6px 8px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 16px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-success {\n  background: #16a34a;\n  color: #fff;\n  border-color: #16a34a;\n}\n.btn-success:hover {\n  background: #15803d;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.btn-ghost {\n  background: #fff;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 5px 12px;\n  font-size: 12px;\n}\n.save-indicator {\n  font-size: 11px;\n  color: #16a34a;\n  opacity: 0;\n  transition: opacity .3s;\n}\n.save-indicator.show {\n  opacity: 1;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.srp-progress {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.srp-progress-seg {\n  flex: 1;\n  height: 4px;\n  border-radius: 2px;\n  background: #e2e8f0;\n  transition: background .3s;\n}\n.srp-progress-seg.filled {\n  background: #2563eb;\n}\n/*# sourceMappingURL=srp-form.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SrpFormComponent, { className: "SrpFormComponent", filePath: "src/app/features/srp/srp-form.component.ts", lineNumber: 559 });
})();
export {
  SrpFormComponent
};
//# sourceMappingURL=chunk-EOIO4VVX.js.map
