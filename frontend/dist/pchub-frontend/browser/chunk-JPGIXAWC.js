import {
  FilterBarComponent,
  PaginatorComponent,
  StageBadgeComponent,
  VersionHistoryComponent
} from "./chunk-U4P3JNUZ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VJ5BUTS4.js";
import {
  ActivatedRoute,
  ApiService,
  AuthService,
  AuthTokenService,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  Directive,
  NgForOf,
  NgIf,
  OpportunitiesService,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  __spreadProps,
  __spreadValues,
  computed,
  debounceTime,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YNIEOD7T.js";

// src/app/features/all-feature-components.ts
var _c0 = (a0) => ["/opportunities", a0];
var _c1 = () => [];
function OpportunitiesListComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const l_r1 = ctx.$implicit;
    \u0275\u0275property("value", l_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(l_r1);
  }
}
function OpportunitiesListComponent_option_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", s_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(s_r2));
  }
}
function OpportunitiesListComponent_ng_container_48_div_2_a_15_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4);
  }
}
function OpportunitiesListComponent_ng_container_48_div_2_a_15_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", ((o_r5.services == null ? null : o_r5.services.length) || 0) - 2);
  }
}
function OpportunitiesListComponent_ng_container_48_div_2_a_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275template(1, OpportunitiesListComponent_ng_container_48_div_2_a_15_div_8_span_1_Template, 2, 1, "span", 51)(2, OpportunitiesListComponent_ng_container_48_div_2_a_15_div_8_span_2_Template, 2, 1, "span", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", (o_r5.services || \u0275\u0275pureFunction0(2, _c1)).slice(0, 2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((o_r5.services == null ? null : o_r5.services.length) || 0) > 2);
  }
}
function OpportunitiesListComponent_ng_container_48_div_2_a_15_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", o_r5.lead.avatarColor || "#3d7eff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r5.lead.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.lead.name);
  }
}
function OpportunitiesListComponent_ng_container_48_div_2_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39)(1, "div", 40)(2, "div", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, OpportunitiesListComponent_ng_container_48_div_2_a_15_div_8_Template, 3, 3, "div", 44);
    \u0275\u0275elementStart(9, "div", 45);
    \u0275\u0275element(10, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 47);
    \u0275\u0275template(12, OpportunitiesListComponent_ng_container_48_div_2_a_15_div_12_Template, 5, 4, "div", 48);
    \u0275\u0275elementStart(13, "span", 49);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const col_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, o_r5.id));
    \u0275\u0275attribute("aria-label", o_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.clientName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", o_r5.services == null ? null : o_r5.services.length);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", o_r5.stagePercent + "%")("background", col_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", o_r5.lead);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.fmtK(+o_r5.value));
  }
}
function OpportunitiesListComponent_ng_container_48_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1, "No commissions");
    \u0275\u0275elementEnd();
  }
}
function OpportunitiesListComponent_ng_container_48_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29);
    \u0275\u0275element(3, "div", 30);
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 34);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "span", 35);
    \u0275\u0275text(13, "pipeline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 36);
    \u0275\u0275template(15, OpportunitiesListComponent_ng_container_48_div_2_a_15_Template, 15, 14, "a", 37)(16, OpportunitiesListComponent_ng_container_48_div_2_div_16_Template, 2, 0, "div", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-label", col_r6.label);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", col_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(col_r6.label);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", col_r6.color)("background", col_r6.bgLight);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", col_r6.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.colItems(col_r6.status).length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.fmtK(ctx_r2.colTotal(col_r6.status)));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.colItems(col_r6.status))("ngForTrackBy", ctx_r2.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.colItems(col_r6.status).length);
  }
}
function OpportunitiesListComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 25);
    \u0275\u0275template(2, OpportunitiesListComponent_ng_container_48_div_2_Template, 17, 14, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.visibleCols());
  }
}
function OpportunitiesListComponent_ng_container_49_tr_22_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", o_r9.lead.avatarColor || "#3d7eff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r9.lead.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r9.lead.name);
  }
}
function OpportunitiesListComponent_ng_container_49_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 64);
    \u0275\u0275listener("keydown.enter", function OpportunitiesListComponent_ng_container_49_tr_22_Template_tr_keydown_enter_0_listener() {
      const o_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goto(o_r9.id));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 65);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275template(9, OpportunitiesListComponent_ng_container_49_tr_22_div_9_Template, 5, 4, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "app-stage-badge", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 70);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "div", 71)(17, "div", 72);
    \u0275\u0275element(18, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 74);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "td")(22, "a", 75);
    \u0275\u0275listener("click", function OpportunitiesListComponent_ng_container_49_tr_22_Template_a_click_22_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275text(23, "Open \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r9 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, o_r9.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r9.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r9.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", o_r9.lead);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", o_r9.status)("stagePercent", o_r9.stagePercent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 12, o_r9.value, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", o_r9.stagePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", o_r9.stagePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, o_r9.id));
  }
}
function OpportunitiesListComponent_ng_container_49_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading() ? "Loading\u2026" : "No commissions match the current filters.");
  }
}
function OpportunitiesListComponent_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58)(2, "div", 59)(3, "table")(4, "thead")(5, "tr")(6, "th", 60);
    \u0275\u0275listener("click", function OpportunitiesListComponent_ng_container_49_Template_th_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("commNum"));
    });
    \u0275\u0275text(7, "Comm #");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 60);
    \u0275\u0275listener("click", function OpportunitiesListComponent_ng_container_49_Template_th_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("name"));
    });
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 60);
    \u0275\u0275listener("click", function OpportunitiesListComponent_ng_container_49_Template_th_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("clientName"));
    });
    \u0275\u0275text(11, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 60);
    \u0275\u0275listener("click", function OpportunitiesListComponent_ng_container_49_Template_th_click_14_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("status"));
    });
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 61);
    \u0275\u0275listener("click", function OpportunitiesListComponent_ng_container_49_Template_th_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sortBy("value"));
    });
    \u0275\u0275text(17, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, OpportunitiesListComponent_ng_container_49_tr_22_Template, 24, 21, "tr", 62)(23, OpportunitiesListComponent_ng_container_49_tr_23_Template, 3, 1, "tr", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "app-paginator", 63);
    \u0275\u0275listener("pageChange", function OpportunitiesListComponent_ng_container_49_Template_app_paginator_pageChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPage($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r2.pagedRows())("ngForTrackBy", ctx_r2.trackById);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.filteredRows().length);
    \u0275\u0275advance();
    \u0275\u0275property("total", ctx_r2.filteredRows().length)("page", ctx_r2.page())("pageSize", ctx_r2.pageSize());
  }
}
var _c2 = (a0) => ["/opportunities", a0, "srp"];
var _c3 = (a0) => ["/opportunities", a0, "fee-calculator"];
var _forTrack0 = ($index, $item) => $item.key;
function OpportunityDetailComponent_div_0_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function OpportunityDetailComponent_div_0_For_20_Template_button_click_0_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeTab.set(t_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab() === t_r2.key);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab() === t_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.label);
  }
}
function OpportunityDetailComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "span", 20);
    \u0275\u0275text(8, "Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 19)(12, "span", 20);
    \u0275\u0275text(13, "Sector");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 21);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 19)(17, "span", 20);
    \u0275\u0275text(18, "Region");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 21);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 19)(22, "span", 20);
    \u0275\u0275text(23, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 24);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 19)(28, "span", 20);
    \u0275\u0275text(29, "SRP Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 21)(31, "span", 25);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 19)(34, "span", 20);
    \u0275\u0275text(35, "Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 21);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_10_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.opp().clientName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r2.opp().lead) == null ? null : tmp_4_0.name) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.opp().sector || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.opp().region || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(26, 9, ctx_r2.opp().value, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275classMap("badge-" + ctx_r2.srpBadge(ctx_r2.opp().srpStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.opp().srpStatus);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_10_0 = ctx_r2.opp().services) == null ? null : tmp_10_0.join(", "));
  }
}
function OpportunityDetailComponent_div_0_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "Loading SRP data\u2026");
    \u0275\u0275elementEnd();
  }
}
function OpportunityDetailComponent_div_0_div_22_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 20);
    \u0275\u0275text(2, "Approved By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.srp().approvedBy);
  }
}
function OpportunityDetailComponent_div_0_div_22_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function OpportunityDetailComponent_div_0_div_22_div_2_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.sendSrpForApproval());
    });
    \u0275\u0275text(2, "Send for Approval");
    \u0275\u0275elementEnd()();
  }
}
function OpportunityDetailComponent_div_0_div_22_div_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function OpportunityDetailComponent_div_0_div_22_div_2_div_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.approveSrp());
    });
    \u0275\u0275text(2, "Approve SRP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 34);
    \u0275\u0275listener("click", function OpportunityDetailComponent_div_0_div_22_div_2_div_24_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.rejectSrp());
    });
    \u0275\u0275text(4, "Reject");
    \u0275\u0275elementEnd()();
  }
}
function OpportunityDetailComponent_div_0_div_22_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21)(5, "span", 25);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 19)(8, "span", 20);
    \u0275\u0275text(9, "Client Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 19)(13, "span", 20);
    \u0275\u0275text(14, "Commission Lead");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 21);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19)(18, "span", 20);
    \u0275\u0275text(19, "Contract Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 29);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, OpportunityDetailComponent_div_0_div_22_div_2_div_22_Template, 5, 1, "div", 30)(23, OpportunityDetailComponent_div_0_div_22_div_2_div_23_Template, 3, 0, "div", 31)(24, OpportunityDetailComponent_div_0_div_22_div_2_div_24_Template, 5, 0, "div", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275classMap("badge-" + ctx_r2.srpBadge(ctx_r2.srp().status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.srp().status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.srp().clientContactName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.srp().commissionLead || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.srp().mainContractType || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.srp().approvedBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.srp().status === "Draft");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.srp().status === "SentForApproval");
  }
}
function OpportunityDetailComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, OpportunityDetailComponent_div_0_div_22_div_1_Template, 2, 0, "div", 26)(2, OpportunityDetailComponent_div_0_div_22_div_2_Template, 25, 9, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.srp());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.srp());
  }
}
function OpportunityDetailComponent_div_0_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "Loading Fee Calculator\u2026");
    \u0275\u0275elementEnd();
  }
}
function OpportunityDetailComponent_div_0_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3, "Construction Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19)(8, "span", 20);
    \u0275\u0275text(9, "Procurement Route");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 19)(13, "span", 20);
    \u0275\u0275text(14, "BIM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 21);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 19)(18, "span", 20);
    \u0275\u0275text(19, "Total Time Charges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 21);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 19)(24, "span", 20);
    \u0275\u0275text(25, "External Consultancy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 21);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 19)(30, "span", 20);
    \u0275\u0275text(31, "PSC Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 21);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 19)(36, "span", 20);
    \u0275\u0275text(37, "Grand Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 35);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "currency");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(6, 7, ctx_r2.fc().constructionValue, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.fc().procRoute);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.fc().bim);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(22, 12, ctx_r2.fc().totalTimeCharges, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(28, 17, ctx_r2.fc().totalExtConsultancy, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(34, 22, ctx_r2.fc().pscFee, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(40, 27, ctx_r2.fc().grandTotal, "GBP", "symbol", "1.0-0"));
  }
}
function OpportunityDetailComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, OpportunityDetailComponent_div_0_div_23_div_1_Template, 2, 0, "div", 26)(2, OpportunityDetailComponent_div_0_div_23_div_2_Template, 41, 32, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.fc());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.fc());
  }
}
function OpportunityDetailComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("CE Events \u2014 ", ((tmp_3_0 = ctx_r2.opp()._count) == null ? null : tmp_3_0.ceEvents) || 0, " events. Navigate to CE module for full management.");
  }
}
function OpportunityDetailComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "app-version-history", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("versions", ctx_r2.versions())("loading", ctx_r2.versionsLoading());
  }
}
function OpportunityDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "a", 5);
    \u0275\u0275text(4, "\u2190 Back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 8);
    \u0275\u0275element(11, "app-stage-badge", 9);
    \u0275\u0275elementStart(12, "a", 10);
    \u0275\u0275text(13, "\u{1F4CB} SRP");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 10);
    \u0275\u0275text(15, "\u229F Fee Calculator");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "div", 13);
    \u0275\u0275repeaterCreate(19, OpportunityDetailComponent_div_0_For_20_Template, 2, 4, "button", 14, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, OpportunityDetailComponent_div_0_div_21_Template, 38, 14, "div", 15)(22, OpportunityDetailComponent_div_0_div_22_Template, 3, 2, "div", 15)(23, OpportunityDetailComponent_div_0_div_23_Template, 3, 2, "div", 15)(24, OpportunityDetailComponent_div_0_div_24_Template, 3, 1, "div", 15)(25, OpportunityDetailComponent_div_0_div_25_Template, 2, 2, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 16)(27, "div", 17)(28, "div", 18);
    \u0275\u0275text(29, "Commission Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 19)(31, "span", 20);
    \u0275\u0275text(32, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 21);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 19)(36, "span", 20);
    \u0275\u0275text(37, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 21);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 19)(41, "span", 20);
    \u0275\u0275text(42, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 21);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 19)(47, "span", 20);
    \u0275\u0275text(48, "CEs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 21);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 19)(52, "span", 20);
    \u0275\u0275text(53, "Surveys");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 21);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.opp().commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.opp().name);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r2.opp().status)("stagePercent", ctx_r2.opp().stagePercent);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c2, ctx_r2.opp().id));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c3, ctx_r2.opp().id));
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "overview");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "srp");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "fee");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "ce");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "versions");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.opp().status);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.opp().stagePercent, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 16, ctx_r2.opp().createdAt, "dd MMM yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(((tmp_17_0 = ctx_r2.opp()._count) == null ? null : tmp_17_0.ceEvents) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(((tmp_18_0 = ctx_r2.opp()._count) == null ? null : tmp_18_0.surveys) || 0);
  }
}
function OpportunityDetailComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1, "Loading commission\u2026");
    \u0275\u0275elementEnd();
  }
}
function ClientInvoicesComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 18);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 19);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 18);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 20);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const inv_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r1.invoiceRef);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(inv_r1.schedule == null ? null : inv_r1.schedule.opportunity == null ? null : inv_r1.schedule.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r1.schedule == null ? null : inv_r1.schedule.opportunity == null ? null : inv_r1.schedule.opportunity.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(inv_r1.schedule == null ? null : inv_r1.schedule.milestone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(13, 10, inv_r1.netAmount, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(16, 15, inv_r1.totalAmount, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 20, inv_r1.issuedAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + ctx_r1.invBadge(inv_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inv_r1.status);
  }
}
function ClientInvoicesComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No invoices found.");
  }
}
function SupplierInvoicesComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td", 20);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 21);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "span", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const si_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(si_r1.invoiceRef);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(si_r1.supplierName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(si_r1.schedule == null ? null : si_r1.schedule.opportunity == null ? null : si_r1.schedule.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 9, si_r1.netAmount, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(14, 14, si_r1.totalAmount, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 19, si_r1.receivedAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + ctx_r1.invBadge(si_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(si_r1.status);
  }
}
function SupplierInvoicesComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No supplier invoices found.");
  }
}
var _c4 = "\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stat-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.stat-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=all-feature-components.css.map */";
function CeListComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 22);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 19);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ce_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ce_r1.ceRef);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ce_r1.opportunity == null ? null : ce_r1.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ce_r1.opportunity == null ? null : ce_r1.opportunity.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ce_r1.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + ctx_r1.ceBadge(ce_r1.stage));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ce_r1.stage);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(16, 9, ce_r1.value, "GBP", "symbol", "1.0-0"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 14, ce_r1.raisedAt, "dd MMM yyyy"));
  }
}
function CeListComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No compensation events found.");
  }
}
function ProjectPiListComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 18);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pi_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pi_r1.opportunity == null ? null : pi_r1.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pi_r1.opportunity == null ? null : pi_r1.opportunity.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pi_r1.opportunity == null ? null : pi_r1.opportunity.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pi_r1.opportunity == null ? null : pi_r1.opportunity.lead == null ? null : pi_r1.opportunity.lead.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + ctx_r1.piBadge(pi_r1.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pi_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("v", pi_r1.version);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pi_r1.approver || "\u2014");
  }
}
function ProjectPiListComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No PIs found.");
  }
}
function SurveysListComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 20);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 20);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 18);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 21);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sv_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(sv_r1.type === "client" ? "badge-blue" : "badge-purple");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sv_r1.type);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sv_r1.opportunity == null ? null : sv_r1.opportunity.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sv_r1.opportunity == null ? null : sv_r1.opportunity.clientName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 12, sv_r1.sentAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 15, sv_r1.deadline, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(sv_r1.submittedAt ? "badge-green" : "badge-amber");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sv_r1.submittedAt ? "Yes" : "Pending");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sv_r1.satisfaction ? sv_r1.satisfaction + "/5" : "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sv_r1.nps ?? "\u2014");
  }
}
function SurveysListComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No surveys found.");
  }
}
function SupplierListComponent_tr_47_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r1);
  }
}
function SupplierListComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 18)(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 21);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 22);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275template(21, SupplierListComponent_tr_47_span_21_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r2.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r2.contact);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + ctx_r2.suppBadge(s_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r2.status);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", s_r2.status === "Expired" ? "#dc2626" : "inherit");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 12, s_r2.certExpiry, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", s_r2.tags);
  }
}
function SupplierListComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading() ? "Loading\u2026" : "No suppliers found.");
  }
}
function AuditLogComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 16)(6, "span", 17);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "td")(11, "span", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 9, e_r1.createdAt, "dd MMM HH:mm"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((e_r1.user == null ? null : e_r1.user.initials) || "SY");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((e_r1.user == null ? null : e_r1.user.name) || "System");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(e_r1.action.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r1.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.entityType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.opportunityId ? "\u2713" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.description);
  }
}
function AuditLogComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No audit records found.");
  }
}
function UsersListComponent_tr_50_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ur_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ur_r2.role.name);
  }
}
function UsersListComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, UsersListComponent_tr_50_span_11_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 22);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 22);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 24);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 22);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "button", 5);
    \u0275\u0275listener("click", function UsersListComponent_tr_50_Template_button_click_23_listener() {
      const u_r3 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleStatus(u_r3));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", u_r3.avatarColor || "#3d7eff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r3.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", u_r3.roles);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.businessUnit);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r3.userBadge(u_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 13, u_r3.lastLoginAt, "dd MMM HH:mm"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r3.status === "Active" ? "Disable" : "Enable");
  }
}
function UsersListComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.loading() ? "Loading\u2026" : "No users found.");
  }
}
function RolesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function RolesComponent_div_10_Template_div_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedRole.set(r_r2));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", r_r2.color || "#2563eb");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.icon || r_r2.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (r_r2._count == null ? null : r_r2._count.users) || 0, " users");
    \u0275\u0275advance();
    \u0275\u0275classMap(r_r2.isSystem ? "badge-blue" : r_r2.isActive ? "badge-green" : "badge-gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.isSystem ? "System" : r_r2.isActive ? "Active" : "Disabled");
  }
}
function RolesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.loading() ? "Loading\u2026" : "No roles found.");
  }
}
function DelegationComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div")(3, "label", 20);
    \u0275\u0275text(4, "From User ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 20);
    \u0275\u0275text(8, "To User ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 20);
    \u0275\u0275text(12, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "select", 23)(14, "option");
    \u0275\u0275text(15, "Workflow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option");
    \u0275\u0275text(17, "ApprovalOnly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option");
    \u0275\u0275text(19, "Full");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option");
    \u0275\u0275text(21, "ReadOnly");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "button", 24);
    \u0275\u0275listener("click", function DelegationComponent_div_23_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitCreate());
    });
    \u0275\u0275text(23, "Create");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 25)(25, "div")(26, "label", 20);
    \u0275\u0275text(27, "Scope / Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div")(30, "label", 20);
    \u0275\u0275text(31, "Start Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "label", 20);
    \u0275\u0275text(35, "End Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.createForm);
    \u0275\u0275advance(23);
    \u0275\u0275property("formGroup", ctx_r1.createForm);
  }
}
function DelegationComponent_tr_44_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function DelegationComponent_tr_44_button_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.revoke(d_r4));
    });
    \u0275\u0275text(1, "Revoke");
    \u0275\u0275elementEnd();
  }
}
function DelegationComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 29)(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "td")(14, "span", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 35);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 36);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 36);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td")(25, "span", 34);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275template(28, DelegationComponent_tr_44_button_28_Template, 2, 0, "button", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", (d_r4.fromUser == null ? null : d_r4.fromUser.avatarColor) || "#2563eb");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4.fromUser == null ? null : d_r4.fromUser.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.fromUser == null ? null : d_r4.fromUser.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r4.toUser == null ? null : d_r4.toUser.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.toUser == null ? null : d_r4.toUser.name);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(d_r4.type.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.scope);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 16, d_r4.startDate, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 19, d_r4.endDate, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(d_r4.status.toLowerCase() + "-dlg");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r4.status === "Active");
  }
}
function DelegationComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading\u2026" : "No delegations found.");
  }
}
function MasterLookupComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function MasterLookupComponent_For_11_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switchTab(tab_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === tab_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2.label);
  }
}
function MasterLookupComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1, "Rate (\xA3/hr)");
    \u0275\u0275elementEnd();
  }
}
function MasterLookupComponent_tr_24_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "input", 16);
    \u0275\u0275listener("change", function MasterLookupComponent_tr_24_td_3_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateRate(i_r5, +$event.target.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    const item_r8 = ctx_r6.$implicit;
    const i_r5 = ctx_r6.index;
    \u0275\u0275advance();
    \u0275\u0275property("value", item_r8.rate);
    \u0275\u0275attribute("aria-label", "Rate for row " + (i_r5 + 1));
  }
}
function MasterLookupComponent_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "input", 13);
    \u0275\u0275listener("change", function MasterLookupComponent_tr_24_Template_input_change_2_listener($event) {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateLabel(i_r5, $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, MasterLookupComponent_tr_24_td_3_Template, 2, 2, "td", 10);
    \u0275\u0275elementStart(4, "td")(5, "span", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "button", 15);
    \u0275\u0275listener("click", function MasterLookupComponent_tr_24_Template_button_click_8_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteRow(i_r5));
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", item_r8.label || item_r8.grade);
    \u0275\u0275attribute("aria-label", "Label for row " + (i_r5 + 1));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab() === "staff-grades");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(item_r8.isActive !== false ? "badge-green" : "badge-gray");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8.isActive !== false ? "Active" : "Inactive");
  }
}
function MasterLookupComponent_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2, "No records in this category.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u26A0 ", ctx_r0.loadErr());
  }
}
function DashboardComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "a", 34);
    \u0275\u0275text(3, "Review Supplier Portal \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r2 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u26A0 ", d_r2.alerts.expiredSuppliers, " supplier certificate(s) have expired. ");
  }
}
function DashboardComponent_ng_container_8_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 35)(2, "div", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 37);
    \u0275\u0275element(5, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const d_r2 = \u0275\u0275nextContext().ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(p_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.barPct(p_r3.value, d_r2.kpis.totalPipeline) + "%")("background", ctx_r0.barColor(p_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtK(p_r3.value));
  }
}
function DashboardComponent_ng_container_8_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "td")(10, "div", 43)(11, "div", 44);
    \u0275\u0275element(12, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "td", 47);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.commNum);
    \u0275\u0275advance();
    \u0275\u0275property("title", c_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r0.stageBg(c_r4.status))("color", ctx_r0.stageFg(c_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.statusLabel(c_r4.status));
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", c_r4.stagePercent + "%")("background", ctx_r0.barColor(c_r4.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r4.stagePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtK(c_r4.value));
  }
}
function DashboardComponent_ng_container_8_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, "No commissions found.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_ng_container_8_tr_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 50);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.milestone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r5.commNum);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.fmtK(m_r5.amount));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.msBadge(m_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5.status);
  }
}
function DashboardComponent_ng_container_8_tr_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, "No upcoming milestones.");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DashboardComponent_ng_container_8_div_1_Template, 4, 1, "div", 9);
    \u0275\u0275elementStart(2, "div", 10)(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5, "Total Pipeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 11)(11, "div", 12);
    \u0275\u0275text(12, "Invoiced (Paid)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275text(16, "collected to date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 11)(18, "div", 12);
    \u0275\u0275text(19, "Outstanding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 11)(25, "div", 12);
    \u0275\u0275text(26, "Active CEs / Alerts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 17);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 14);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 18)(32, "div", 19)(33, "div", 20);
    \u0275\u0275text(34, "Pipeline by Status ");
    \u0275\u0275elementStart(35, "span", 21);
    \u0275\u0275text(36, "Value distribution");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(37, DashboardComponent_ng_container_8_div_37_Template, 8, 6, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 19)(39, "div", 20);
    \u0275\u0275text(40, "Workflow Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 23)(42, "div", 24)(43, "div", 25);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 26);
    \u0275\u0275text(46, "Opportunities");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 24)(48, "div", 27);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 26);
    \u0275\u0275text(51, "Active CEs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 24)(53, "div", 27);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 26);
    \u0275\u0275text(56, "Pending Invoices");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 24)(58, "div", 28);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 26);
    \u0275\u0275text(61, "Approved PIs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 24)(63, "div", 28);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 26);
    \u0275\u0275text(66, "Final Ready");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 24)(68, "div", 29);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 26);
    \u0275\u0275text(71, "Surveys Pending");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(72, "div", 30)(73, "div", 19)(74, "div", 20);
    \u0275\u0275text(75, " Recent Commissions ");
    \u0275\u0275elementStart(76, "a", 31);
    \u0275\u0275text(77, "View All \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "table", 32)(79, "thead")(80, "tr")(81, "th");
    \u0275\u0275text(82, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th");
    \u0275\u0275text(84, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th");
    \u0275\u0275text(86, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "th");
    \u0275\u0275text(88, "Value");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "tbody");
    \u0275\u0275template(90, DashboardComponent_ng_container_8_tr_90_Template, 17, 14, "tr", 22)(91, DashboardComponent_ng_container_8_tr_91_Template, 3, 0, "tr", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(92, "div", 19)(93, "div", 20);
    \u0275\u0275text(94, "Upcoming Milestones");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "table", 32)(96, "thead")(97, "tr")(98, "th");
    \u0275\u0275text(99, "Milestone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th");
    \u0275\u0275text(101, "Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "th");
    \u0275\u0275text(103, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "th");
    \u0275\u0275text(105, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(106, "tbody");
    \u0275\u0275template(107, DashboardComponent_ng_container_8_tr_107_Template, 11, 6, "tr", 22)(108, DashboardComponent_ng_container_8_tr_108_Template, 3, 0, "tr", 6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r2.alerts.expiredSuppliers > 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.fmtK(d_r2.kpis.totalPipeline));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r2.kpis.totalPipelineCount, " commissions");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.fmtK(d_r2.kpis.invoicedPaid));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.fmtK(d_r2.kpis.outstandingAmount));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r2.kpis.outstandingCount, " pending invoices");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.workflowStatus.activeCEs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", d_r2.workflowStatus.activeCEs, " open CEs \xB7 ", d_r2.alerts.expiredSuppliers, " expired supplier");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", d_r2.pipelineByStatus);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r2.workflowStatus.opportunities);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.workflowStatus.activeCEs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.workflowStatus.pendingInvoices);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.workflowStatus.approvedPIs);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.workflowStatus.finalReady);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r2.workflowStatus.surveysPending);
    \u0275\u0275advance(21);
    \u0275\u0275property("ngForOf", d_r2.recentCommissions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !d_r2.recentCommissions.length);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", d_r2.upcomingMilestones);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !d_r2.upcomingMilestones.length);
  }
}
function DashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, "Loading dashboard\u2026");
    \u0275\u0275elementEnd();
  }
}
var BOARD_COLS = [
  { status: "Lead", label: "Lead", pct: 20, color: "#8a9bb8", bgLight: "rgba(138,155,184,.12)" },
  { status: "Probable", label: "Probable", pct: 50, color: "#2563eb", bgLight: "rgba(37,99,235,.1)" },
  { status: "StrongProbable", label: "Strong Probable", pct: 75, color: "#7c3aed", bgLight: "rgba(124,58,237,.1)" },
  { status: "Contracted", label: "Contracted", pct: 100, color: "#16a34a", bgLight: "rgba(22,163,74,.1)" },
  { status: "WorkStarted", label: "Work Started", pct: 100, color: "#0f766e", bgLight: "rgba(15,118,110,.1)" },
  { status: "Completed", label: "Completed", pct: 100, color: "#0369a1", bgLight: "rgba(3,105,161,.1)" }
];
var OpportunitiesListComponent = class _OpportunitiesListComponent {
  constructor() {
    this.svc = inject(OpportunitiesService);
    this.fb = inject(FormBuilder);
    this.router = inject(Router);
    this.destroy$ = new Subject();
    this.searchCtrl = this.fb.control("");
    this.statusCtrl = this.fb.control("");
    this.leadCtrl = this.fb.control("");
    this._search = signal("", ...ngDevMode ? [{ debugName: "_search" }] : (
      /* istanbul ignore next */
      []
    ));
    this._status = signal("", ...ngDevMode ? [{ debugName: "_status" }] : (
      /* istanbul ignore next */
      []
    ));
    this._lead = signal("", ...ngDevMode ? [{ debugName: "_lead" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = signal("board", ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
    this.page = signal(1, ...ngDevMode ? [{ debugName: "page" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageSize = signal(20, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this._sortField = signal("createdAt", ...ngDevMode ? [{ debugName: "_sortField" }] : (
      /* istanbul ignore next */
      []
    ));
    this._sortDir = signal("desc", ...ngDevMode ? [{ debugName: "_sortDir" }] : (
      /* istanbul ignore next */
      []
    ));
    this.rows = this.svc.rows;
    this.loading = this.svc.loading;
    this.statuses = ["Lead", "Probable", "StrongProbable", "Contracted", "WorkStarted", "Completed"];
    this.totalPipeline = computed(() => this.rows().reduce((s, o) => s + (+o.value || 0), 0), ...ngDevMode ? [{ debugName: "totalPipeline" }] : (
      /* istanbul ignore next */
      []
    ));
    this.contractedCount = computed(() => this.rows().filter((o) => o.status === "Contracted" || o.status === "WorkStarted").length, ...ngDevMode ? [{ debugName: "contractedCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.completedCount = computed(() => this.rows().filter((o) => o.status === "Completed").length, ...ngDevMode ? [{ debugName: "completedCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.uniqueLeads = computed(() => {
      const names = this.rows().map((o) => o.lead?.name).filter(Boolean);
      return [...new Set(names)].sort();
    }, ...ngDevMode ? [{ debugName: "uniqueLeads" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filteredRows = computed(() => {
      const q = this._search().toLowerCase().trim();
      const lead = this._lead();
      const status = this._status();
      return this.rows().filter((o) => {
        if (q && !`${o.name} ${o.clientName} ${o.commNum}`.toLowerCase().includes(q))
          return false;
        if (lead && o.lead?.name !== lead)
          return false;
        if (status && o.status !== status)
          return false;
        return true;
      });
    }, ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pagedRows = computed(() => {
      const start = (this.page() - 1) * this.pageSize();
      return this.filteredRows().slice(start, start + this.pageSize());
    }, ...ngDevMode ? [{ debugName: "pagedRows" }] : (
      /* istanbul ignore next */
      []
    ));
    this.visibleCols = computed(() => {
      const s = this._status();
      return s ? BOARD_COLS.filter((c) => c.status === s) : BOARD_COLS;
    }, ...ngDevMode ? [{ debugName: "visibleCols" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.svc.findAll({ pageSize: 500, sortBy: "createdAt", sortDir: "desc" }).pipe(takeUntil(this.destroy$)).subscribe();
    this.searchCtrl.valueChanges.pipe(debounceTime(200), takeUntil(this.destroy$)).subscribe((v) => {
      this._search.set(v || "");
      this.page.set(1);
    });
    this.statusCtrl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      this._status.set(v || "");
      this.page.set(1);
    });
    this.leadCtrl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((v) => {
      this._lead.set(v || "");
      this.page.set(1);
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onPage(e) {
    this.page.set(e.page);
    this.pageSize.set(e.pageSize);
  }
  sortBy(col) {
    this._sortDir.set(this._sortField() === col && this._sortDir() === "asc" ? "desc" : "asc");
    this._sortField.set(col);
    this.page.set(1);
  }
  goto(id) {
    this.router.navigate(["/opportunities", id]);
  }
  trackById(_, o) {
    return o.id;
  }
  colItems(status) {
    return this.filteredRows().filter((o) => o.status === status);
  }
  colTotal(status) {
    return this.colItems(status).reduce((s, o) => s + (+o.value || 0), 0);
  }
  statusLabel(s) {
    return { Lead: "Lead", Probable: "Probable", StrongProbable: "Strong Probable", Contracted: "Contracted", WorkStarted: "Work Started", Completed: "Completed" }[s] ?? s;
  }
  fmtK(val) {
    if (!val)
      return "\xA30";
    if (val >= 1e6)
      return "\xA3" + (val / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    if (val >= 1e3)
      return "\xA3" + Math.round(val / 1e3) + "K";
    return "\xA3" + Math.round(val);
  }
  srpBadge(s) {
    return { Approved: "green", SentForApproval: "amber", Draft: "blue", Rejected: "red" }[s] || "gray";
  }
  static {
    this.\u0275fac = function OpportunitiesListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OpportunitiesListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpportunitiesListComponent, selectors: [["app-opportunities-list"]], decls: 50, vars: 15, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-ghost", "btn-sm"], [1, "btn", "btn-primary", "btn-sm"], [1, "opp-stats"], [1, "opp-stat"], [1, "opp-stat-lbl"], [1, "opp-stat-val", 2, "color", "#2563eb"], [1, "opp-stat-val", 2, "color", "#1a2240"], [1, "opp-stat-val", 2, "color", "#16a34a"], [1, "opp-stat-val", 2, "color", "#0369a1"], [1, "filter-row"], [1, "search-wrap"], [1, "search-icon"], ["type", "text", "placeholder", "Search commissions...", "autocomplete", "off", "aria-label", "Search", 1, "search-inp", 3, "formControl"], ["aria-label", "Filter by lead", 1, "f-select", 3, "formControl"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Filter by status", 1, "f-select", 3, "formControl"], ["role", "group", "aria-label", "View mode", 1, "view-toggle"], [1, "vt-btn", 3, "click"], [4, "ngIf"], [3, "value"], ["role", "region", "aria-label", "Opportunity board", 1, "board-grid"], ["class", "board-col", 4, "ngFor", "ngForOf"], [1, "board-col"], [1, "board-head"], [1, "bh-top"], [1, "bdot"], [1, "blbl"], [1, "bpct"], [1, "bcnt"], [1, "board-pipeline"], [1, "bpipe-sub"], [1, "board-body"], ["class", "bcard", "tabindex", "0", "role", "button", 3, "routerLink", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "board-empty", 4, "ngIf"], ["tabindex", "0", "role", "button", 1, "bcard", 3, "routerLink"], [1, "bcard-top"], [1, "bcard-name"], [1, "bcard-num"], [1, "bcard-client"], ["class", "bcard-chips", 4, "ngIf"], [1, "bcard-prog"], [1, "bcard-prog-fill"], [1, "bcard-foot"], ["class", "bcard-lead", 4, "ngIf"], [1, "bcard-val"], [1, "bcard-chips"], ["class", "bc-chip", 4, "ngFor", "ngForOf"], ["class", "bc-chip bc-more", 4, "ngIf"], [1, "bc-chip"], [1, "bc-chip", "bc-more"], [1, "bcard-lead"], [1, "bc-av"], [1, "board-empty"], [1, "tbl-card"], [1, "tbl-scroll"], [3, "click"], [2, "text-align", "right", 3, "click"], ["tabindex", "0", 3, "routerLink", "keydown.enter", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "pageChange", "total", "page", "pageSize"], ["tabindex", "0", 3, "keydown.enter", "routerLink"], [1, "chip"], [2, "font-weight", "600", "max-width", "200px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap"], [1, "text-muted"], ["style", "display:flex;align-items:center;gap:5px", 4, "ngIf"], [3, "status", "stagePercent"], [2, "font-weight", "700", "color", "#d97706", "text-align", "right"], [1, "progress-wrap"], [1, "progress-track"], [1, "progress-fill", 2, "background", "#2563eb"], [2, "font-size", "10px", "color", "#64748b"], [1, "btn", "btn-ghost", "btn-sm", 3, "click", "routerLink"], [2, "display", "flex", "align-items", "center", "gap", "5px"], [1, "avatar", 2, "width", "22px", "height", "22px", "font-size", "8px"], [2, "font-size", "12px"], ["colspan", "8", 1, "empty"]], template: function OpportunitiesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Opportunities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6, "Export");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275text(8, "+ New Opportunity");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8);
        \u0275\u0275text(12, "Total Pipeline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "div", 8);
        \u0275\u0275text(17, "All Commissions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "div", 8);
        \u0275\u0275text(22, "Contracted / Work Started");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "div", 8);
        \u0275\u0275text(27, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 12);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "span", 15);
        \u0275\u0275text(33, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "select", 17)(36, "option", 18);
        \u0275\u0275text(37, "All Leads");
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, OpportunitiesListComponent_option_38_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "select", 20)(40, "option", 18);
        \u0275\u0275text(41, "All Statuses");
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, OpportunitiesListComponent_option_42_Template, 2, 2, "option", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 21)(44, "button", 22);
        \u0275\u0275listener("click", function OpportunitiesListComponent_Template_button_click_44_listener() {
          return ctx.view.set("board");
        });
        \u0275\u0275text(45, "\u229E Board");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 22);
        \u0275\u0275listener("click", function OpportunitiesListComponent_Template_button_click_46_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275text(47, "\u2630 List");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(48, OpportunitiesListComponent_ng_container_48_Template, 3, 1, "ng-container", 23)(49, OpportunitiesListComponent_ng_container_49_Template, 25, 6, "ng-container", 23);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(ctx.fmtK(ctx.totalPipeline()));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.rows().length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.contractedCount());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.completedCount());
        \u0275\u0275advance(5);
        \u0275\u0275property("formControl", ctx.searchCtrl);
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.leadCtrl);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.uniqueLeads());
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.statusCtrl);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.statuses);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.view() === "board");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.view() === "list");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.view() === "board");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.view() === "list");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, FormControlDirective, StageBadgeComponent, PaginatorComponent, CurrencyPipe], styles: [`
[_nghost-%COMP%] {
  display: block;
}
.page-shell[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 100%;
}
.toolbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}
.page-title[_ngcontent-%COMP%] {
  font-size: 18px;
  font-weight: 700;
  color: #1a2240;
  margin: 0;
}
.toolbar-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 6px;
  align-items: center;
}
.stat-strip[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 10px;
  margin-bottom: 14px;
}
.stat[_ngcontent-%COMP%] {
  background: #fff;
  border: 1px solid #dde2ee;
  border-radius: 8px;
  padding: 12px 14px;
}
.stat-val[_ngcontent-%COMP%] {
  font-size: 22px;
  font-weight: 800;
  color: #2563eb;
}
.stat-val.green[_ngcontent-%COMP%] {
  color: #16a34a;
}
.stat-val.amber[_ngcontent-%COMP%] {
  color: #d97706;
}
.stat-val.red[_ngcontent-%COMP%] {
  color: #dc2626;
}
.stat-label[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #8a9bb8;
  margin-top: 2px;
  font-weight: 500;
}
.tbl-card[_ngcontent-%COMP%] {
  background: #fff;
  border: 1px solid #dde2ee;
  border-radius: 8px;
  overflow: hidden;
}
.tbl-scroll[_ngcontent-%COMP%] {
  overflow-x: auto;
}
table[_ngcontent-%COMP%] {
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
}
thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {
  background: #f5f7fb;
  padding: 9px 12px;
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .4px;
  color: #5a6b8a;
  border-bottom: 2px solid #dde2ee;
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {
  background: #eef1f8;
  color: #2563eb;
}
tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {
  border-bottom: 1px solid #f0f2f7;
  transition: background .08s;
  cursor: pointer;
}
tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {
  background: #f5f7fb;
}
tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {
  padding: 9px 12px;
  vertical-align: middle;
}
.empty[_ngcontent-%COMP%] {
  text-align: center;
  padding: 40px;
  color: #94a3b8;
  font-size: 13px;
}
.badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 2px 9px;
  border-radius: 10px;
  font-size: 10.5px;
  font-weight: 700;
}
.badge-green[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #166534;
}
.badge-amber[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #92400e;
}
.badge-blue[_ngcontent-%COMP%] {
  background: #dbeafe;
  color: #1d4ed8;
}
.badge-red[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #991b1b;
}
.badge-gray[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #475569;
}
.badge-purple[_ngcontent-%COMP%] {
  background: #ede9fe;
  color: #5b21b6;
}
.chip[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  background: rgba(37, 99, 235, .08);
  color: #1d4ed8;
  font-size: 10.5px;
  font-weight: 600;
}
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border-radius: 7px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 12.5px;
  font-weight: 600;
  font-family: inherit;
  transition: all .12s;
}
.btn-primary[_ngcontent-%COMP%] {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background: #1d4ed8;
}
.btn-outline[_ngcontent-%COMP%] {
  background: #fff;
  color: #2563eb;
  border-color: #2563eb;
}
.btn-outline[_ngcontent-%COMP%]:hover {
  background: #eff6ff;
}
.btn-ghost[_ngcontent-%COMP%] {
  background: transparent;
  color: #5a6b8a;
  border-color: #dde2ee;
}
.btn-ghost[_ngcontent-%COMP%]:hover {
  background: #f5f7fb;
}
.btn-sm[_ngcontent-%COMP%] {
  padding: 4px 10px;
  font-size: 11.5px;
}
.btn-danger[_ngcontent-%COMP%] {
  background: #dc2626;
  color: #fff;
  border-color: #dc2626;
}
.value[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #d97706;
}
.text-muted[_ngcontent-%COMP%] {
  color: #64748b;
  font-size: 12px;
}
.avatar[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  flex-shrink: 0;
}
.progress-wrap[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 80px;
}
.progress-track[_ngcontent-%COMP%] {
  flex: 1;
  height: 5px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background: #2563eb;
  border-radius: 3px;
}
.form-input[_ngcontent-%COMP%] {
  border: 1px solid #dde2ee;
  border-radius: 6px;
  padding: 7px 10px;
  font-size: 12.5px;
  font-family: inherit;
  background: #fff;
  outline: none;
  width: 100%;
}
.form-input[_ngcontent-%COMP%]:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);
}
.form-select[_ngcontent-%COMP%] {
  border: 1px solid #dde2ee;
  border-radius: 6px;
  padding: 7px 10px;
  font-size: 12.5px;
  font-family: inherit;
  background: #fff;
  cursor: pointer;
  outline: none;
}
.form-select[_ngcontent-%COMP%]:focus {
  border-color: #2563eb;
}
.opp-stats[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 12px;
}
.opp-stat[_ngcontent-%COMP%] {
  background: #fff;
  border: 1px solid #dde2ee;
  border-radius: 10px;
  padding: 14px 18px;
}
.opp-stat-lbl[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5px;
  color: #8a9bb8;
  margin-bottom: 6px;
}
.opp-stat-val[_ngcontent-%COMP%] {
  font-size: 26px;
  font-weight: 800;
  line-height: 1;
}
.filter-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.search-wrap[_ngcontent-%COMP%] {
  position: relative;
  flex: 1;
  min-width: 180px;
}
.search-icon[_ngcontent-%COMP%] {
  position: absolute;
  left: 9px;
  top: 50%;
  transform: translateY(-50%);
  color: #8a9bb8;
  font-size: 12px;
  pointer-events: none;
}
.search-inp[_ngcontent-%COMP%] {
  padding: 7px 10px 7px 28px;
  border: 1px solid #dde2ee;
  border-radius: 7px;
  font-size: 12.5px;
  font-family: inherit;
  background: #fff;
  outline: none;
  width: 100%;
}
.search-inp[_ngcontent-%COMP%]:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, .1);
}
.f-select[_ngcontent-%COMP%] {
  padding: 7px 28px 7px 10px;
  border: 1px solid #dde2ee;
  border-radius: 7px;
  font-size: 12.5px;
  font-family: inherit;
  background: #fff;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238a9bb8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 9px center;
}
.f-select[_ngcontent-%COMP%]:focus {
  border-color: #2563eb;
}
.view-toggle[_ngcontent-%COMP%] {
  display: flex;
  gap: 0;
  background: #f1f5f9;
  border-radius: 7px;
  padding: 3px;
  margin-left: auto;
}
.vt-btn[_ngcontent-%COMP%] {
  background: transparent;
  border: none;
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  transition: all .12s;
  display: flex;
  align-items: center;
  gap: 4px;
}
.vt-btn.active[_ngcontent-%COMP%] {
  background: #fff;
  color: #1a2240;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
}
.board-grid[_ngcontent-%COMP%] {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 12px;
}
.board-col[_ngcontent-%COMP%] {
  width: 235px;
  min-width: 235px;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid #dde2ee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.board-head[_ngcontent-%COMP%] {
  padding: 10px 12px 0;
}
.bh-top[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
}
.bdot[_ngcontent-%COMP%] {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}
.blbl[_ngcontent-%COMP%] {
  flex: 1;
  font-size: 12.5px;
  font-weight: 700;
  color: #1a2240;
}
.bpct[_ngcontent-%COMP%] {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 5px;
}
.bcnt[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #5a6b8a;
  font-size: 10.5px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
}
.board-pipeline[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 700;
  color: #1a2240;
  padding: 4px 12px 8px;
  border-bottom: 1px solid #f0f2f7;
}
.bpipe-sub[_ngcontent-%COMP%] {
  font-size: 10px;
  color: #8a9bb8;
  font-weight: 400;
  margin-left: 2px;
}
.board-body[_ngcontent-%COMP%] {
  flex: 1;
  overflow-y: auto;
  max-height: 520px;
  padding: 8px 7px 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.bcard[_ngcontent-%COMP%] {
  border: 1px solid #e8edf5;
  border-radius: 8px;
  padding: 10px 11px;
  cursor: pointer;
  background: #fff;
  transition: all .12s;
  display: block;
  text-decoration: none;
  color: inherit;
}
.bcard[_ngcontent-%COMP%]:hover {
  border-color: #93c5fd;
  box-shadow: 0 2px 10px rgba(37, 99, 235, .1);
  transform: translateY(-1px);
}
.bcard-top[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 2px;
}
.bcard-name[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  color: #1a2240;
  line-height: 1.35;
  flex: 1;
}
.bcard-num[_ngcontent-%COMP%] {
  font-size: 9.5px;
  font-weight: 700;
  background: #dbeafe;
  color: #1d4ed8;
  padding: 2px 7px;
  border-radius: 5px;
  white-space: nowrap;
  flex-shrink: 0;
}
.bcard-client[_ngcontent-%COMP%] {
  font-size: 11px;
  color: #64748b;
  margin-bottom: 6px;
}
.bcard-chips[_ngcontent-%COMP%] {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 7px;
}
.bc-chip[_ngcontent-%COMP%] {
  font-size: 9.5px;
  font-weight: 600;
  background: #f1f5f9;
  color: #475569;
  padding: 2px 7px;
  border-radius: 5px;
}
.bc-more[_ngcontent-%COMP%] {
  background: #e2e8f0;
  color: #64748b;
}
.bcard-prog[_ngcontent-%COMP%] {
  height: 3px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 8px;
}
.bcard-prog-fill[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 2px;
}
.bcard-foot[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bcard-lead[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #64748b;
}
.bc-av[_ngcontent-%COMP%] {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7px;
  font-weight: 700;
  flex-shrink: 0;
}
.bcard-val[_ngcontent-%COMP%] {
  font-size: 11.5px;
  font-weight: 700;
  color: #d97706;
}
.board-empty[_ngcontent-%COMP%] {
  text-align: center;
  color: #94a3b8;
  font-size: 11.5px;
  padding: 20px 8px;
}
@media (max-width: 900px) {
  .opp-stats[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
/*# sourceMappingURL=all-feature-components.css.map */`], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpportunitiesListComponent, [{
    type: Component,
    args: [{ selector: "app-opportunities-list", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, ReactiveFormsModule, StageBadgeComponent, PaginatorComponent], template: `
<div class="page-shell">
  <!-- Toolbar -->
  <div class="toolbar">
    <h1 class="page-title">Opportunities</h1>
    <div class="toolbar-actions">
      <button class="btn btn-ghost btn-sm">Export</button>
      <button class="btn btn-primary btn-sm">+ New Opportunity</button>
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
      <span class="search-icon">\u{1F50D}</span>
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
      <button class="vt-btn" [class.active]="view()==='board'" (click)="view.set('board')">\u229E Board</button>
      <button class="vt-btn" [class.active]="view()==='list'" (click)="view.set('list')">\u2630 List</button>
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
              <td><a class="btn btn-ghost btn-sm" [routerLink]="['/opportunities',o.id]" (click)="$event.stopPropagation()">Open \u2192</a></td>
            </tr>
            <tr *ngIf="!filteredRows().length">
              <td colspan="8" class="empty">{{loading() ? 'Loading\u2026' : 'No commissions match the current filters.'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="filteredRows().length" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </ng-container>
</div>
  `, styles: [`/* angular:styles/component:css;e36f5959ed04f56b87b453ef6670a63a6d49a8a36f7c8d5585dc2fbd91275c75;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */
:host {
  display: block;
}
.page-shell {
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 100%;
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}
.page-title {
  font-size: 18px;
  font-weight: 700;
  color: #1a2240;
  margin: 0;
}
.toolbar-actions {
  display: flex;
  gap: 6px;
  align-items: center;
}
.stat-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 10px;
  margin-bottom: 14px;
}
.stat {
  background: #fff;
  border: 1px solid #dde2ee;
  border-radius: 8px;
  padding: 12px 14px;
}
.stat-val {
  font-size: 22px;
  font-weight: 800;
  color: #2563eb;
}
.stat-val.green {
  color: #16a34a;
}
.stat-val.amber {
  color: #d97706;
}
.stat-val.red {
  color: #dc2626;
}
.stat-label {
  font-size: 11px;
  color: #8a9bb8;
  margin-top: 2px;
  font-weight: 500;
}
.tbl-card {
  background: #fff;
  border: 1px solid #dde2ee;
  border-radius: 8px;
  overflow: hidden;
}
.tbl-scroll {
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
}
thead th {
  background: #f5f7fb;
  padding: 9px 12px;
  font-size: 10.5px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .4px;
  color: #5a6b8a;
  border-bottom: 2px solid #dde2ee;
  white-space: nowrap;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
thead th:hover {
  background: #eef1f8;
  color: #2563eb;
}
tbody tr {
  border-bottom: 1px solid #f0f2f7;
  transition: background .08s;
  cursor: pointer;
}
tbody tr:hover {
  background: #f5f7fb;
}
tbody td {
  padding: 9px 12px;
  vertical-align: middle;
}
.empty {
  text-align: center;
  padding: 40px;
  color: #94a3b8;
  font-size: 13px;
}
.badge {
  display: inline-block;
  padding: 2px 9px;
  border-radius: 10px;
  font-size: 10.5px;
  font-weight: 700;
}
.badge-green {
  background: #dcfce7;
  color: #166534;
}
.badge-amber {
  background: #fef3c7;
  color: #92400e;
}
.badge-blue {
  background: #dbeafe;
  color: #1d4ed8;
}
.badge-red {
  background: #fee2e2;
  color: #991b1b;
}
.badge-gray {
  background: #f1f5f9;
  color: #475569;
}
.badge-purple {
  background: #ede9fe;
  color: #5b21b6;
}
.chip {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 10px;
  background: rgba(37, 99, 235, .08);
  color: #1d4ed8;
  font-size: 10.5px;
  font-weight: 600;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border-radius: 7px;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 12.5px;
  font-weight: 600;
  font-family: inherit;
  transition: all .12s;
}
.btn-primary {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}
.btn-primary:hover {
  background: #1d4ed8;
}
.btn-outline {
  background: #fff;
  color: #2563eb;
  border-color: #2563eb;
}
.btn-outline:hover {
  background: #eff6ff;
}
.btn-ghost {
  background: transparent;
  color: #5a6b8a;
  border-color: #dde2ee;
}
.btn-ghost:hover {
  background: #f5f7fb;
}
.btn-sm {
  padding: 4px 10px;
  font-size: 11.5px;
}
.btn-danger {
  background: #dc2626;
  color: #fff;
  border-color: #dc2626;
}
.value {
  font-weight: 700;
  color: #d97706;
}
.text-muted {
  color: #64748b;
  font-size: 12px;
}
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  flex-shrink: 0;
}
.progress-wrap {
  display: flex;
  align-items: center;
  gap: 5px;
  min-width: 80px;
}
.progress-track {
  flex: 1;
  height: 5px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #2563eb;
  border-radius: 3px;
}
.form-input {
  border: 1px solid #dde2ee;
  border-radius: 6px;
  padding: 7px 10px;
  font-size: 12.5px;
  font-family: inherit;
  background: #fff;
  outline: none;
  width: 100%;
}
.form-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);
}
.form-select {
  border: 1px solid #dde2ee;
  border-radius: 6px;
  padding: 7px 10px;
  font-size: 12.5px;
  font-family: inherit;
  background: #fff;
  cursor: pointer;
  outline: none;
}
.form-select:focus {
  border-color: #2563eb;
}
.opp-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 12px;
}
.opp-stat {
  background: #fff;
  border: 1px solid #dde2ee;
  border-radius: 10px;
  padding: 14px 18px;
}
.opp-stat-lbl {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5px;
  color: #8a9bb8;
  margin-bottom: 6px;
}
.opp-stat-val {
  font-size: 26px;
  font-weight: 800;
  line-height: 1;
}
.filter-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.search-wrap {
  position: relative;
  flex: 1;
  min-width: 180px;
}
.search-icon {
  position: absolute;
  left: 9px;
  top: 50%;
  transform: translateY(-50%);
  color: #8a9bb8;
  font-size: 12px;
  pointer-events: none;
}
.search-inp {
  padding: 7px 10px 7px 28px;
  border: 1px solid #dde2ee;
  border-radius: 7px;
  font-size: 12.5px;
  font-family: inherit;
  background: #fff;
  outline: none;
  width: 100%;
}
.search-inp:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, .1);
}
.f-select {
  padding: 7px 28px 7px 10px;
  border: 1px solid #dde2ee;
  border-radius: 7px;
  font-size: 12.5px;
  font-family: inherit;
  background: #fff;
  cursor: pointer;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238a9bb8'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 9px center;
}
.f-select:focus {
  border-color: #2563eb;
}
.view-toggle {
  display: flex;
  gap: 0;
  background: #f1f5f9;
  border-radius: 7px;
  padding: 3px;
  margin-left: auto;
}
.vt-btn {
  background: transparent;
  border: none;
  padding: 5px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: #64748b;
  transition: all .12s;
  display: flex;
  align-items: center;
  gap: 4px;
}
.vt-btn.active {
  background: #fff;
  color: #1a2240;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
}
.board-grid {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 12px;
}
.board-col {
  width: 235px;
  min-width: 235px;
  flex-shrink: 0;
  background: #fff;
  border: 1px solid #dde2ee;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.board-head {
  padding: 10px 12px 0;
}
.bh-top {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
}
.bdot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}
.blbl {
  flex: 1;
  font-size: 12.5px;
  font-weight: 700;
  color: #1a2240;
}
.bpct {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 5px;
}
.bcnt {
  background: #f1f5f9;
  color: #5a6b8a;
  font-size: 10.5px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
}
.board-pipeline {
  font-size: 11.5px;
  font-weight: 700;
  color: #1a2240;
  padding: 4px 12px 8px;
  border-bottom: 1px solid #f0f2f7;
}
.bpipe-sub {
  font-size: 10px;
  color: #8a9bb8;
  font-weight: 400;
  margin-left: 2px;
}
.board-body {
  flex: 1;
  overflow-y: auto;
  max-height: 520px;
  padding: 8px 7px 6px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.bcard {
  border: 1px solid #e8edf5;
  border-radius: 8px;
  padding: 10px 11px;
  cursor: pointer;
  background: #fff;
  transition: all .12s;
  display: block;
  text-decoration: none;
  color: inherit;
}
.bcard:hover {
  border-color: #93c5fd;
  box-shadow: 0 2px 10px rgba(37, 99, 235, .1);
  transform: translateY(-1px);
}
.bcard-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 2px;
}
.bcard-name {
  font-size: 12px;
  font-weight: 700;
  color: #1a2240;
  line-height: 1.35;
  flex: 1;
}
.bcard-num {
  font-size: 9.5px;
  font-weight: 700;
  background: #dbeafe;
  color: #1d4ed8;
  padding: 2px 7px;
  border-radius: 5px;
  white-space: nowrap;
  flex-shrink: 0;
}
.bcard-client {
  font-size: 11px;
  color: #64748b;
  margin-bottom: 6px;
}
.bcard-chips {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 7px;
}
.bc-chip {
  font-size: 9.5px;
  font-weight: 600;
  background: #f1f5f9;
  color: #475569;
  padding: 2px 7px;
  border-radius: 5px;
}
.bc-more {
  background: #e2e8f0;
  color: #64748b;
}
.bcard-prog {
  height: 3px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 8px;
}
.bcard-prog-fill {
  height: 100%;
  border-radius: 2px;
}
.bcard-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bcard-lead {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #64748b;
}
.bc-av {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7px;
  font-weight: 700;
  flex-shrink: 0;
}
.bcard-val {
  font-size: 11.5px;
  font-weight: 700;
  color: #d97706;
}
.board-empty {
  text-align: center;
  color: #94a3b8;
  font-size: 11.5px;
  padding: 20px 8px;
}
@media (max-width: 900px) {
  .opp-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
/*# sourceMappingURL=all-feature-components.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpportunitiesListComponent, { className: "OpportunitiesListComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 272 });
})();
var OpportunityDetailComponent = class _OpportunityDetailComponent {
  constructor() {
    this.api = inject(ApiService);
    this.route = inject(ActivatedRoute);
    this.opp = signal(null, ...ngDevMode ? [{ debugName: "opp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.srp = signal(null, ...ngDevMode ? [{ debugName: "srp" }] : (
      /* istanbul ignore next */
      []
    ));
    this.fc = signal(null, ...ngDevMode ? [{ debugName: "fc" }] : (
      /* istanbul ignore next */
      []
    ));
    this.versions = signal([], ...ngDevMode ? [{ debugName: "versions" }] : (
      /* istanbul ignore next */
      []
    ));
    this.versionsLoading = signal(false, ...ngDevMode ? [{ debugName: "versionsLoading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.activeTab = signal("overview", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tabs = [
      { key: "overview", label: "Overview" },
      { key: "srp", label: "SRP" },
      { key: "fee", label: "Fee Calculator" },
      { key: "ce", label: "Comp. Events" },
      { key: "versions", label: "Version History" }
    ];
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.api.get(`/v1/opportunities/${id}`).subscribe((o) => {
      this.opp.set(o);
      this.api.get(`/v1/srp/${id}`).subscribe((s) => this.srp.set(s), () => {
      });
      this.api.get(`/v1/fee-calculator/${id}`).subscribe((f) => this.fc.set(f), () => {
      });
    });
    this.versionsLoading.set(true);
    this.api.get(`/v1/opportunities/${id}/versions`).subscribe((v) => {
      this.versions.set(v);
      this.versionsLoading.set(false);
    }, () => this.versionsLoading.set(false));
  }
  srpBadge(s) {
    return { Approved: "green", SentForApproval: "amber", Draft: "blue", Rejected: "red" }[s] || "gray";
  }
  sendSrpForApproval() {
    const id = this.route.snapshot.paramMap.get("id");
    this.api.post(`/v1/srp/${id}/send-approval`, {}).subscribe(() => this.srp.update((s) => __spreadProps(__spreadValues({}, s), { status: "SentForApproval" })));
  }
  approveSrp() {
    const id = this.route.snapshot.paramMap.get("id");
    this.api.post(`/v1/srp/${id}/approve`, { comments: "Approved via dashboard" }).subscribe(() => this.srp.update((s) => __spreadProps(__spreadValues({}, s), { status: "Approved" })));
  }
  rejectSrp() {
    const id = this.route.snapshot.paramMap.get("id");
    this.api.post(`/v1/srp/${id}/reject`, { comments: "Rejected via dashboard" }).subscribe(() => this.srp.update((s) => __spreadProps(__spreadValues({}, s), { status: "Rejected" })));
  }
  static {
    this.\u0275fac = function OpportunityDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OpportunityDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OpportunityDetailComponent, selectors: [["app-opportunity-detail"]], decls: 3, vars: 2, consts: [["loading", ""], ["class", "page-shell", 4, "ngIf", "ngIfElse"], [1, "page-shell"], [1, "toolbar"], [2, "display", "flex", "align-items", "center", "gap", "10px"], ["routerLink", "/opportunities", 1, "btn", "btn-ghost", "btn-sm"], [1, "chip"], [2, "font-size", "18px", "font-weight", "700", "color", "#1a2240", "margin-left", "8px"], [1, "toolbar-actions"], [3, "status", "stagePercent"], [1, "btn", "btn-outline", "btn-sm", 3, "routerLink"], [1, "detail-shell"], [1, "detail-main"], ["role", "tablist", 1, "tabs"], ["role", "tab", 1, "tab", 3, "active"], ["class", "tab-panel", "role", "tabpanel", 4, "ngIf"], [1, "detail-sidebar"], [1, "detail-card"], [1, "detail-card-title"], [1, "detail-row"], [1, "detail-key"], [1, "detail-val"], ["role", "tab", 1, "tab", 3, "click"], ["role", "tabpanel", 1, "tab-panel"], [1, "detail-val", "value"], [1, "badge"], ["class", "empty", 4, "ngIf"], [4, "ngIf"], [1, "empty"], [1, "detail-val", "text-muted"], ["class", "detail-row", 4, "ngIf"], ["style", "margin-top:12px;display:flex;gap:6px", 4, "ngIf"], [2, "margin-top", "12px", "display", "flex", "gap", "6px"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "detail-val", "value", 2, "font-size", "15px"], [3, "versions", "loading"]], template: function OpportunityDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, OpportunityDetailComponent_div_0_Template, 56, 23, "div", 1)(1, OpportunityDetailComponent_ng_template_1_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const loading_r6 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.opp())("ngIfElse", loading_r6);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink, StageBadgeComponent, VersionHistoryComponent, CurrencyPipe, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stat-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.stat-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.detail-shell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.detail-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.detail-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  flex-shrink: 0;\n}\n.detail-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.detail-card-title[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #8a9bb8;\n  margin-bottom: 10px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 6px 0;\n  border-bottom: 1px solid #f0f2f7;\n  font-size: 12.5px;\n}\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.detail-key[_ngcontent-%COMP%] {\n  color: #8a9bb8;\n  font-weight: 500;\n}\n.detail-val[_ngcontent-%COMP%] {\n  color: #1a2240;\n  font-weight: 600;\n  text-align: right;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  font-weight: 500;\n  transition: all .12s;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n}\n.tab[_ngcontent-%COMP%]:hover {\n  color: #1a2240;\n}\n.tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.tab-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 16px;\n}\n/*# sourceMappingURL=all-feature-components.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OpportunityDetailComponent, [{
    type: Component,
    args: [{ selector: "app-opportunity-detail", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, StageBadgeComponent, VersionHistoryComponent], template: `
  <div class="page-shell" *ngIf="opp(); else loading">
    <div class="toolbar">
      <div style="display:flex;align-items:center;gap:10px">
        <a routerLink="/opportunities" class="btn btn-ghost btn-sm">\u2190 Back</a>
        <div>
          <span class="chip">{{ opp()!.commNum }}</span>
          <span style="font-size:18px;font-weight:700;color:#1a2240;margin-left:8px">{{ opp()!.name }}</span>
        </div>
      </div>
      <div class="toolbar-actions">
        <app-stage-badge [status]="opp()!.status" [stagePercent]="opp()!.stagePercent"></app-stage-badge>
        <a class="btn btn-outline btn-sm" [routerLink]="['/opportunities', opp()!.id, 'srp']">\u{1F4CB} SRP</a>
        <a class="btn btn-outline btn-sm" [routerLink]="['/opportunities', opp()!.id, 'fee-calculator']">\u229F Fee Calculator</a>
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
          <div class="detail-row"><span class="detail-key">Lead</span><span class="detail-val">{{ opp()!.lead?.name || '\u2014' }}</span></div>
          <div class="detail-row"><span class="detail-key">Sector</span><span class="detail-val">{{ opp()!.sector || '\u2014' }}</span></div>
          <div class="detail-row"><span class="detail-key">Region</span><span class="detail-val">{{ opp()!.region || '\u2014' }}</span></div>
          <div class="detail-row"><span class="detail-key">Value</span><span class="detail-val value">{{ opp()!.value | currency:'GBP':'symbol':'1.0-0' }}</span></div>
          <div class="detail-row"><span class="detail-key">SRP Status</span><span class="detail-val"><span class="badge" [class]="'badge-'+srpBadge(opp()!.srpStatus)">{{ opp()!.srpStatus }}</span></span></div>
          <div class="detail-row"><span class="detail-key">Services</span><span class="detail-val">{{ opp()!.services?.join(', ') }}</span></div>
        </div>

        <!-- SRP tab -->
        <div class="tab-panel" *ngIf="activeTab()==='srp'" role="tabpanel">
          <div class="empty" *ngIf="!srp()">Loading SRP data\u2026</div>
          <div *ngIf="srp()">
            <div class="detail-row"><span class="detail-key">Status</span><span class="detail-val"><span class="badge" [class]="'badge-'+srpBadge(srp()!.status)">{{ srp()!.status }}</span></span></div>
            <div class="detail-row"><span class="detail-key">Client Contact</span><span class="detail-val">{{ srp()!.clientContactName || '\u2014' }}</span></div>
            <div class="detail-row"><span class="detail-key">Commission Lead</span><span class="detail-val">{{ srp()!.commissionLead || '\u2014' }}</span></div>
            <div class="detail-row"><span class="detail-key">Contract Type</span><span class="detail-val text-muted">{{ srp()!.mainContractType || '\u2014' }}</span></div>
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
          <div class="empty" *ngIf="!fc()">Loading Fee Calculator\u2026</div>
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
          <div class="empty">CE Events \u2014 {{ opp()!._count?.ceEvents || 0 }} events. Navigate to CE module for full management.</div>
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
  <ng-template #loading><div class="empty">Loading commission\u2026</div></ng-template>
  `, styles: ["/* angular:styles/component:css;e0dc704a8af70167fb8755190104d44417b17e623dde5d46416f2c915b074148;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n.detail-shell {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.detail-main {\n  flex: 1;\n  min-width: 0;\n}\n.detail-sidebar {\n  width: 260px;\n  flex-shrink: 0;\n}\n.detail-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 16px;\n  margin-bottom: 12px;\n}\n.detail-card-title {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #8a9bb8;\n  margin-bottom: 10px;\n}\n.detail-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 6px 0;\n  border-bottom: 1px solid #f0f2f7;\n  font-size: 12.5px;\n}\n.detail-row:last-child {\n  border-bottom: none;\n}\n.detail-key {\n  color: #8a9bb8;\n  font-weight: 500;\n}\n.detail-val {\n  color: #1a2240;\n  font-weight: 600;\n  text-align: right;\n}\n.tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.tab {\n  padding: 8px 16px;\n  font-size: 12px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  font-weight: 500;\n  transition: all .12s;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n}\n.tab:hover {\n  color: #1a2240;\n}\n.tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.tab-panel {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 16px;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OpportunityDetailComponent, { className: "OpportunityDetailComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 495 });
})();
var BaseListComponent = class _BaseListComponent {
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
    this.pageSize = signal(20, ...ngDevMode ? [{ debugName: "pageSize" }] : (
      /* istanbul ignore next */
      []
    ));
    this.search = signal("", ...ngDevMode ? [{ debugName: "search" }] : (
      /* istanbul ignore next */
      []
    ));
    this.chips = signal([], ...ngDevMode ? [{ debugName: "chips" }] : (
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
    const params = __spreadValues({ page: this.page(), pageSize: this.pageSize(), q: this.search() || void 0 }, this.extraParams());
    this.api.getList(this.apiPath, params).pipe(takeUntil(this.destroy$)).subscribe({ next: (r) => {
      this.rows.set(r.data);
      this.total.set(r.meta.total);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  onSearch(q) {
    this.search.set(q);
    this.page.set(1);
    this.load();
  }
  onPage(e) {
    this.page.set(e.page);
    this.pageSize.set(e.pageSize);
    this.load();
  }
  static {
    this.\u0275fac = function BaseListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseListComponent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BaseListComponent });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseListComponent, [{
    type: Directive
  }], null, null);
})();
var ClientInvoicesComponent = class _ClientInvoicesComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/invoices/client";
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  get totalPaid() {
    return this.rows().filter((r) => r.status === "Paid").reduce((a, r) => a + (+r.netAmount || 0), 0);
  }
  get totalPending() {
    return this.rows().filter((r) => r.status === "Pending").reduce((a, r) => a + (+r.netAmount || 0), 0);
  }
  invBadge(s) {
    return { Paid: "green", Pending: "amber", Overdue: "red", Cancelled: "gray", Draft: "blue" }[s] || "gray";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ClientInvoicesComponent_BaseFactory;
      return function ClientInvoicesComponent_Factory(__ngFactoryType__) {
        return (\u0275ClientInvoicesComponent_BaseFactory || (\u0275ClientInvoicesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ClientInvoicesComponent)))(__ngFactoryType__ || _ClientInvoicesComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ClientInvoicesComponent, selectors: [["app-client-invoices"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 51, vars: 20, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-ghost", "btn-sm"], [1, "stat-strip"], [1, "stat"], [1, "stat-val", "green"], [1, "stat-label"], [1, "stat-val", "amber"], [1, "stat-val"], ["placeholder", "Search invoice ref, commission, client\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [1, "chip"], [1, "text-muted"], [1, "value"], [1, "badge"], ["colspan", "8", 1, "empty"]], template: function ClientInvoicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Client Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6, "Export");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275text(13, "Total Paid");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "div", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275text(19, "Outstanding");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 6)(21, "div", 10);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 8);
        \u0275\u0275text(24, "Total Invoices");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "app-filter-bar", 11);
        \u0275\u0275listener("searchChange", function ClientInvoicesComponent_Template_app_filter_bar_searchChange_25_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 12)(27, "div", 13)(28, "table")(29, "thead")(30, "tr")(31, "th");
        \u0275\u0275text(32, "Invoice Ref");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Commission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Milestone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Net Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Total inc. VAT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Due Date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(47, "tbody");
        \u0275\u0275template(48, ClientInvoicesComponent_tr_48_Template, 23, 23, "tr", 14)(49, ClientInvoicesComponent_tr_49_Template, 3, 1, "tr", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "app-paginator", 16);
        \u0275\u0275listener("pageChange", function ClientInvoicesComponent_Template_app_paginator_pageChange_50_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 10, ctx.totalPaid, "GBP", "symbol", "1.0-0"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 15, ctx.totalPending, "GBP", "symbol", "1.0-0"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance(3);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent, CurrencyPipe, DatePipe], styles: [_c4], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClientInvoicesComponent, [{
    type: Component,
    args: [{ selector: "app-client-invoices", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Client Invoices</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val green">{{ totalPaid | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Total Paid</div></div>
      <div class="stat"><div class="stat-val amber">{{ totalPending | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Outstanding</div></div>
      <div class="stat"><div class="stat-val">{{ total() }}</div><div class="stat-label">Total Invoices</div></div>
    </div>
    <app-filter-bar placeholder="Search invoice ref, commission, client\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
            <tr *ngIf="!rows().length"><td colspan="8" class="empty">{{ loading() ? 'Loading\u2026' : 'No invoices found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;708448a38e1b9c93b797b8c850bac9affb487e3edca09ad81e5a51ef86c4a83b;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ClientInvoicesComponent, { className: "ClientInvoicesComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 617 });
})();
var SupplierInvoicesComponent = class _SupplierInvoicesComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/invoices/supplier";
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  get totalSupplierValue() {
    return this.rows().reduce((a, r) => a + (+r.netAmount || 0), 0);
  }
  get totalPaid() {
    return this.rows().filter((r) => r.status === "Paid").reduce((a, r) => a + (+r.netAmount || 0), 0);
  }
  get pendingCount() {
    return this.rows().filter((r) => r.status === "Pending").length;
  }
  get awaitingCount() {
    return this.rows().filter((r) => r.status === "AwaitingReceipt" || r.status === "Awaiting Receipt").length;
  }
  invBadge(s) {
    return { Paid: "green", Pending: "amber", Overdue: "red", Cancelled: "gray" }[s] || "gray";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SupplierInvoicesComponent_BaseFactory;
      return function SupplierInvoicesComponent_Factory(__ngFactoryType__) {
        return (\u0275SupplierInvoicesComponent_BaseFactory || (\u0275SupplierInvoicesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SupplierInvoicesComponent)))(__ngFactoryType__ || _SupplierInvoicesComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierInvoicesComponent, selectors: [["app-supplier-invoices"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 54, vars: 21, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-ghost", "btn-sm"], [1, "stat-strip"], [1, "stat"], [1, "stat-val", 2, "color", "#2563eb"], [1, "stat-label"], [1, "stat-val", "green"], [1, "stat-val", "amber"], [1, "stat-val", 2, "color", "#0369a1"], ["placeholder", "Search supplier, ref, commission\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [1, "chip"], [2, "font-weight", "600"], [1, "value"], [1, "text-muted"], [1, "badge"], ["colspan", "7", 1, "empty"]], template: function SupplierInvoicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Supplier Invoices");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6, "Export");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275text(13, "Total Supplier");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "div", 9);
        \u0275\u0275text(16);
        \u0275\u0275pipe(17, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275text(19, "Paid");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 6)(21, "div", 10);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 8);
        \u0275\u0275text(24, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 6)(26, "div", 11);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 8);
        \u0275\u0275text(29, "Awaiting Receipt");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "app-filter-bar", 12);
        \u0275\u0275listener("searchChange", function SupplierInvoicesComponent_Template_app_filter_bar_searchChange_30_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 13)(32, "div", 14)(33, "table")(34, "thead")(35, "tr")(36, "th");
        \u0275\u0275text(37, "Invoice Ref");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Supplier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Commission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Net Amount");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Received");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "Status");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "tbody");
        \u0275\u0275template(51, SupplierInvoicesComponent_tr_51_Template, 21, 22, "tr", 15)(52, SupplierInvoicesComponent_tr_52_Template, 3, 1, "tr", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "app-paginator", 17);
        \u0275\u0275listener("pageChange", function SupplierInvoicesComponent_Template_app_paginator_pageChange_53_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 11, ctx.totalSupplierValue, "GBP", "symbol", "1.0-0"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(17, 16, ctx.totalPaid, "GBP", "symbol", "1.0-0"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.pendingCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.awaitingCount);
        \u0275\u0275advance(3);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent, CurrencyPipe, DatePipe], styles: [_c4], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierInvoicesComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-invoices", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Supplier Invoices</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ totalSupplierValue | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Total Supplier</div></div>
      <div class="stat"><div class="stat-val green">{{ totalPaid | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Paid</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingCount }}</div><div class="stat-label">Pending</div></div>
      <div class="stat"><div class="stat-val" style="color:#0369a1">{{ awaitingCount }}</div><div class="stat-label">Awaiting Receipt</div></div>
    </div>
    <app-filter-bar placeholder="Search supplier, ref, commission\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading\u2026' : 'No supplier invoices found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;708448a38e1b9c93b797b8c850bac9affb487e3edca09ad81e5a51ef86c4a83b;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierInvoicesComponent, { className: "SupplierInvoicesComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 668 });
})();
var CeListComponent = class _CeListComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/ce";
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  ceBadge(s) {
    return { Approved: "green", Rejected: "red", Assessment: "amber", Submitted: "blue", Reviewed: "purple" }[s] || "gray";
  }
  get openCount() {
    return this.rows().filter((r) => r.stage !== "Approved" && r.stage !== "Rejected").length;
  }
  get approvedCount() {
    return this.rows().filter((r) => r.stage === "Approved").length;
  }
  get totalValue() {
    return this.rows().reduce((a, r) => a + (+r.value || 0), 0);
  }
  newCe() {
    alert("Select a commission first to raise a CE");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CeListComponent_BaseFactory;
      return function CeListComponent_Factory(__ngFactoryType__) {
        return (\u0275CeListComponent_BaseFactory || (\u0275CeListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CeListComponent)))(__ngFactoryType__ || _CeListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CeListComponent, selectors: [["app-ce-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 53, vars: 16, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "stat-strip"], [1, "stat"], [1, "stat-val"], [1, "stat-label"], [1, "stat-val", "red"], [1, "stat-val", "green"], [1, "stat-val", "amber"], ["placeholder", "Search CE ref, commission, description\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [1, "chip"], [1, "text-muted"], [2, "max-width", "200px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap"], [1, "badge"], [1, "value"], ["colspan", "7", 1, "empty"]], template: function CeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Compensation Events");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function CeListComponent_Template_button_click_5_listener() {
          return ctx.newCe();
        });
        \u0275\u0275text(6, "+ New CE");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12, "Total CEs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275text(17, "Open");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "div", 10);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8);
        \u0275\u0275text(22, "Approved");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 6)(24, "div", 11);
        \u0275\u0275text(25);
        \u0275\u0275pipe(26, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 8);
        \u0275\u0275text(28, "Total Value");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "app-filter-bar", 12);
        \u0275\u0275listener("searchChange", function CeListComponent_Template_app_filter_bar_searchChange_29_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "table")(33, "thead")(34, "tr")(35, "th");
        \u0275\u0275text(36, "CE Ref");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Commission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Description");
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
        \u0275\u0275template(50, CeListComponent_tr_50_Template, 20, 17, "tr", 15)(51, CeListComponent_tr_51_Template, 3, 1, "tr", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "app-paginator", 17);
        \u0275\u0275listener("pageChange", function CeListComponent_Template_app_paginator_pageChange_52_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.openCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.approvedCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(26, 11, ctx.totalValue, "GBP", "symbol", "1.0-0"));
        \u0275\u0275advance(4);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent, CurrencyPipe, DatePipe], styles: [_c4], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CeListComponent, [{
    type: Component,
    args: [{ selector: "app-ce-list", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Compensation Events</h1><div class="toolbar-actions"><button class="btn btn-primary btn-sm" (click)="newCe()">+ New CE</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val">{{ total() }}</div><div class="stat-label">Total CEs</div></div>
      <div class="stat"><div class="stat-val red">{{ openCount }}</div><div class="stat-label">Open</div></div>
      <div class="stat"><div class="stat-val green">{{ approvedCount }}</div><div class="stat-label">Approved</div></div>
      <div class="stat"><div class="stat-val amber">{{ totalValue | currency:'GBP':'symbol':'1.0-0' }}</div><div class="stat-label">Total Value</div></div>
    </div>
    <app-filter-bar placeholder="Search CE ref, commission, description\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading\u2026' : 'No compensation events found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;708448a38e1b9c93b797b8c850bac9affb487e3edca09ad81e5a51ef86c4a83b;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CeListComponent, { className: "CeListComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 721 });
})();
var ProjectPiListComponent = class _ProjectPiListComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/project-pi";
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  get approvedPiCount() {
    return this.rows().filter((r) => r.status === "Approved").length;
  }
  get pendingPiCount() {
    return this.rows().filter((r) => r.status === "Pending Approval").length;
  }
  get notStartedCount() {
    return this.rows().filter((r) => r.status === "Not Started").length;
  }
  piBadge(s) {
    return { Approved: "green", "Pending Approval": "amber", "Not Started": "gray" }[s] || "gray";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ProjectPiListComponent_BaseFactory;
      return function ProjectPiListComponent_Factory(__ngFactoryType__) {
        return (\u0275ProjectPiListComponent_BaseFactory || (\u0275ProjectPiListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ProjectPiListComponent)))(__ngFactoryType__ || _ProjectPiListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectPiListComponent, selectors: [["app-project-pi-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 49, vars: 11, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "stat-strip"], [1, "stat"], [1, "stat-val", 2, "color", "#2563eb"], [1, "stat-label"], [1, "stat-val", "green"], [1, "stat-val", "amber"], [1, "stat-val"], ["placeholder", "Search commission, client, lead\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [1, "chip"], [2, "font-weight", "600", "max-width", "180px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap"], [1, "text-muted"], [1, "badge"], ["colspan", "7", 1, "empty"]], template: function ProjectPiListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Project PI Register");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "div", 4)(6, "div", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275text(9, "Total PIs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 4)(11, "div", 7);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 6);
        \u0275\u0275text(14, "Approved");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 4)(16, "div", 8);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 6);
        \u0275\u0275text(19, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 4)(21, "div", 9);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 6);
        \u0275\u0275text(24, "Not Started");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "app-filter-bar", 10);
        \u0275\u0275listener("searchChange", function ProjectPiListComponent_Template_app_filter_bar_searchChange_25_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 11)(27, "div", 12)(28, "table")(29, "thead")(30, "tr")(31, "th");
        \u0275\u0275text(32, "Commission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Lead");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "PI Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "th");
        \u0275\u0275text(42, "Version");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "th");
        \u0275\u0275text(44, "Approver");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "tbody");
        \u0275\u0275template(46, ProjectPiListComponent_tr_46_Template, 17, 9, "tr", 13)(47, ProjectPiListComponent_tr_47_Template, 3, 1, "tr", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "app-paginator", 15);
        \u0275\u0275listener("pageChange", function ProjectPiListComponent_Template_app_paginator_pageChange_48_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.approvedPiCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.pendingPiCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.notStartedCount);
        \u0275\u0275advance(3);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent], styles: [_c4], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectPiListComponent, [{
    type: Component,
    args: [{ selector: "app-project-pi-list", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Project PI Register</h1></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ total() }}</div><div class="stat-label">Total PIs</div></div>
      <div class="stat"><div class="stat-val green">{{ approvedPiCount }}</div><div class="stat-label">Approved</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingPiCount }}</div><div class="stat-label">Pending</div></div>
      <div class="stat"><div class="stat-val">{{ notStartedCount }}</div><div class="stat-label">Not Started</div></div>
    </div>
    <app-filter-bar placeholder="Search commission, client, lead\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
              <td class="text-muted">{{ pi.approver || '\u2014' }}</td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading\u2026' : 'No PIs found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;708448a38e1b9c93b797b8c850bac9affb487e3edca09ad81e5a51ef86c4a83b;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectPiListComponent, { className: "ProjectPiListComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 774 });
})();
var SurveysListComponent = class _SurveysListComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/surveys";
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  get submittedCount() {
    return this.rows().filter((r) => r.submittedAt).length;
  }
  get pendingSurveyCount() {
    return this.rows().filter((r) => !r.submittedAt).length;
  }
  get avgSatisfaction() {
    const s = this.rows().filter((r) => r.satisfaction);
    return s.length ? +(s.reduce((a, r) => a + r.satisfaction, 0) / s.length).toFixed(1) : 0;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SurveysListComponent_BaseFactory;
      return function SurveysListComponent_Factory(__ngFactoryType__) {
        return (\u0275SurveysListComponent_BaseFactory || (\u0275SurveysListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SurveysListComponent)))(__ngFactoryType__ || _SurveysListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SurveysListComponent, selectors: [["app-surveys-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 54, vars: 11, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-ghost", "btn-sm"], [1, "stat-strip"], [1, "stat"], [1, "stat-val", 2, "color", "#2563eb"], [1, "stat-label"], [1, "stat-val", "green"], [1, "stat-val", "amber"], [1, "stat-val", 2, "color", "#0369a1"], ["placeholder", "Search commission, client, type\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [1, "badge"], [1, "chip"], [1, "text-muted"], [2, "font-weight", "600", "color", "#2563eb"], ["colspan", "8", 1, "empty"]], template: function SurveysListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Survey Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6, "Export All");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12, "Total Surveys");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275text(17, "Submitted");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "div", 10);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8);
        \u0275\u0275text(22, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 6)(24, "div", 11);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8);
        \u0275\u0275text(27, "Avg Satisfaction");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "app-filter-bar", 12);
        \u0275\u0275listener("searchChange", function SurveysListComponent_Template_app_filter_bar_searchChange_28_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 13)(30, "div", 14)(31, "table")(32, "thead")(33, "tr")(34, "th");
        \u0275\u0275text(35, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Commission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Client");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Sent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Deadline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Submitted");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Satisfaction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "th");
        \u0275\u0275text(49, "NPS");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "tbody");
        \u0275\u0275template(51, SurveysListComponent_tr_51_Template, 22, 18, "tr", 15)(52, SurveysListComponent_tr_52_Template, 3, 1, "tr", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "app-paginator", 17);
        \u0275\u0275listener("pageChange", function SurveysListComponent_Template_app_paginator_pageChange_53_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.submittedCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.pendingSurveyCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.avgSatisfaction);
        \u0275\u0275advance(3);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent, DatePipe], styles: [_c4], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SurveysListComponent, [{
    type: Component,
    args: [{ selector: "app-surveys-list", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Survey Management</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export All</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ total() }}</div><div class="stat-label">Total Surveys</div></div>
      <div class="stat"><div class="stat-val green">{{ submittedCount }}</div><div class="stat-label">Submitted</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingSurveyCount }}</div><div class="stat-label">Pending</div></div>
      <div class="stat"><div class="stat-val" style="color:#0369a1">{{ avgSatisfaction }}</div><div class="stat-label">Avg Satisfaction</div></div>
    </div>
    <app-filter-bar placeholder="Search commission, client, type\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
              <td>{{ sv.satisfaction ? sv.satisfaction+'/5' : '\u2014' }}</td>
              <td style="font-weight:600;color:#2563eb">{{ sv.nps ?? '\u2014' }}</td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="8" class="empty">{{ loading() ? 'Loading\u2026' : 'No surveys found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;708448a38e1b9c93b797b8c850bac9affb487e3edca09ad81e5a51ef86c4a83b;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SurveysListComponent, { className: "SurveysListComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 827 });
})();
var SupplierListComponent = class _SupplierListComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/suppliers";
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  get approvedSuppCount() {
    return this.rows().filter((r) => r.status === "Approved").length;
  }
  get expiredSuppCount() {
    return this.rows().filter((r) => r.status === "Expired").length;
  }
  get underReviewCount() {
    return this.rows().filter((r) => r.status === "UnderReview").length;
  }
  suppBadge(s) {
    return { Approved: "green", Expired: "red", UnderReview: "amber", Suspended: "red" }[s] || "gray";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275SupplierListComponent_BaseFactory;
      return function SupplierListComponent_Factory(__ngFactoryType__) {
        return (\u0275SupplierListComponent_BaseFactory || (\u0275SupplierListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_SupplierListComponent)))(__ngFactoryType__ || _SupplierListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SupplierListComponent, selectors: [["app-supplier-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 50, vars: 11, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-primary", "btn-sm"], [1, "stat-strip"], [1, "stat"], [1, "stat-val", 2, "color", "#2563eb"], [1, "stat-label"], [1, "stat-val", "green"], [1, "stat-val", "red"], [1, "stat-val", "amber"], ["placeholder", "Search supplier, type, status\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "avatar", 2, "width", "28px", "height", "28px", "background", "#2563eb", "color", "#fff", "font-size", "11px", "font-weight", "700"], [2, "font-weight", "600"], [1, "text-muted"], [1, "badge"], ["class", "badge badge-gray", "style", "margin-right:3px;font-size:10px", 4, "ngFor", "ngForOf"], [1, "badge", "badge-gray", 2, "margin-right", "3px", "font-size", "10px"], ["colspan", "6", 1, "empty"]], template: function SupplierListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Supplier Portal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6, "+ Add Supplier");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12, "Total Suppliers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275text(17, "Approved");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "div", 10);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8);
        \u0275\u0275text(22, "Expired");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 6)(24, "div", 11);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 8);
        \u0275\u0275text(27, "Under Review");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "app-filter-bar", 12);
        \u0275\u0275listener("searchChange", function SupplierListComponent_Template_app_filter_bar_searchChange_28_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 13)(30, "div", 14)(31, "table")(32, "thead")(33, "tr")(34, "th");
        \u0275\u0275text(35, "Supplier");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Contact");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Certificate Expiry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Tags");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "tbody");
        \u0275\u0275template(47, SupplierListComponent_tr_47_Template, 22, 15, "tr", 15)(48, SupplierListComponent_tr_48_Template, 3, 1, "tr", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "app-paginator", 17);
        \u0275\u0275listener("pageChange", function SupplierListComponent_Template_app_paginator_pageChange_49_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.approvedSuppCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.expiredSuppCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.underReviewCount);
        \u0275\u0275advance(3);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(19);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent, DatePipe], styles: [_c4], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierListComponent, [{
    type: Component,
    args: [{ selector: "app-supplier-list", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Supplier Portal</h1><div class="toolbar-actions"><button class="btn btn-primary btn-sm">+ Add Supplier</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ total() }}</div><div class="stat-label">Total Suppliers</div></div>
      <div class="stat"><div class="stat-val green">{{ approvedSuppCount }}</div><div class="stat-label">Approved</div></div>
      <div class="stat"><div class="stat-val red">{{ expiredSuppCount }}</div><div class="stat-label">Expired</div></div>
      <div class="stat"><div class="stat-val amber">{{ underReviewCount }}</div><div class="stat-label">Under Review</div></div>
    </div>
    <app-filter-bar placeholder="Search supplier, type, status\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
            <tr *ngIf="!rows().length"><td colspan="6" class="empty">{{ loading() ? 'Loading\u2026' : 'No suppliers found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;708448a38e1b9c93b797b8c850bac9affb487e3edca09ad81e5a51ef86c4a83b;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SupplierListComponent, { className: "SupplierListComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 882 });
})();
var AuditLogComponent = class _AuditLogComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/audit";
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AuditLogComponent_BaseFactory;
      return function AuditLogComponent_Factory(__ngFactoryType__) {
        return (\u0275AuditLogComponent_BaseFactory || (\u0275AuditLogComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AuditLogComponent)))(__ngFactoryType__ || _AuditLogComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogComponent, selectors: [["app-audit-log"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 35, vars: 8, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-ghost", "btn-sm"], [1, "stat-strip"], [1, "stat"], [1, "stat-val"], [1, "stat-label"], ["placeholder", "Search user, module, description\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [1, "text-muted", 2, "white-space", "nowrap"], [2, "display", "flex", "align-items", "center", "gap", "6px"], [1, "avatar", 2, "width", "20px", "height", "20px", "font-size", "8px", "background", "#2563eb"], [2, "font-size", "12px"], [1, "action-badge"], [1, "text-muted"], [2, "font-size", "12px", "max-width", "220px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap"], ["colspan", "6", 1, "empty"]], template: function AuditLogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Audit Log");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6, "Export");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12, "Total Entries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "app-filter-bar", 9);
        \u0275\u0275listener("searchChange", function AuditLogComponent_Template_app_filter_bar_searchChange_13_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "div", 11)(16, "table")(17, "thead")(18, "tr")(19, "th");
        \u0275\u0275text(20, "Timestamp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "th");
        \u0275\u0275text(22, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "th");
        \u0275\u0275text(24, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "th");
        \u0275\u0275text(26, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "th");
        \u0275\u0275text(28, "Commission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "th");
        \u0275\u0275text(30, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "tbody");
        \u0275\u0275template(32, AuditLogComponent_tr_32_Template, 19, 12, "tr", 12)(33, AuditLogComponent_tr_33_Template, 3, 1, "tr", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "app-paginator", 14);
        \u0275\u0275listener("pageChange", function AuditLogComponent_Template_app_paginator_pageChange_34_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance(3);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(19);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stat-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.stat-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.action-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.create[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.update[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.approve[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.delete[_ngcontent-%COMP%], \n.reject[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.login[_ngcontent-%COMP%], \n.logout[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #6d28d9;\n}\n.export[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.system[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n/*# sourceMappingURL=all-feature-components.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogComponent, [{
    type: Component,
    args: [{ selector: "app-audit-log", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Audit Log</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val">{{ total() }}</div><div class="stat-label">Total Entries</div></div>
    </div>
    <app-filter-bar placeholder="Search user, module, description\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
              <td>{{ e.opportunityId ? '\u2713' : '' }}</td>
              <td style="font-size:12px;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{ e.description }}</td>
            </tr>
            <tr *ngIf="!rows().length"><td colspan="6" class="empty">{{ loading() ? 'Loading\u2026' : 'No audit records found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;ffda174b4561e5758efccd8592be2feeddf8b2a1b9e4e397a91140855a2ba8dd;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n.action-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.create {\n  background: #dcfce7;\n  color: #166534;\n}\n.update {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.approve {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.delete,\n.reject {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.login,\n.logout {\n  background: #f3e8ff;\n  color: #6d28d9;\n}\n.export {\n  background: #fef3c7;\n  color: #92400e;\n}\n.system {\n  background: #f1f5f9;\n  color: #64748b;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogComponent, { className: "AuditLogComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 935 });
})();
var UsersListComponent = class _UsersListComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/users";
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  get activeCount() {
    return this.rows().filter((r) => r.status === "Active").length;
  }
  get pendingCount() {
    return this.rows().filter((r) => r.status === "Pending").length;
  }
  get inactiveCount() {
    return this.rows().filter((r) => r.status === "Inactive").length;
  }
  userBadge(s) {
    return { Active: "badge-green", Inactive: "badge-gray", Pending: "badge-amber" }[s] || "badge-gray";
  }
  syncUsers() {
    this.api.post("/v1/users/sync", {}).subscribe(() => this.load());
  }
  toggleStatus(u) {
    const newStatus = u.status === "Active" ? "Inactive" : "Active";
    this.api.patch(`/v1/users/${u.id}/status`, { status: newStatus }).subscribe(() => {
      u.status = newStatus;
      this.rows.set([...this.rows()]);
    });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UsersListComponent_BaseFactory;
      return function UsersListComponent_Factory(__ngFactoryType__) {
        return (\u0275UsersListComponent_BaseFactory || (\u0275UsersListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UsersListComponent)))(__ngFactoryType__ || _UsersListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersListComponent, selectors: [["app-users-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 53, vars: 11, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-ghost", "btn-sm"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "stat-strip"], [1, "stat"], [1, "stat-val", "green"], [1, "stat-label"], [1, "stat-val", "amber"], [1, "stat-val"], [1, "stat-val", 2, "color", "#2563eb"], ["placeholder", "Search name, email, role, region\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "avatar", 2, "width", "28px", "height", "28px", "font-size", "10px"], [2, "font-weight", "600", "font-size", "12.5px"], [1, "text-muted"], ["class", "badge badge-blue", "style", "margin-right:3px;font-size:10px", 4, "ngFor", "ngForOf"], [1, "badge"], [1, "badge", "badge-blue", 2, "margin-right", "3px", "font-size", "10px"], ["colspan", "7", 1, "empty"]], template: function UsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "User Management");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6, "Export");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function UsersListComponent_Template_button_click_7_listener() {
          return ctx.syncUsers();
        });
        \u0275\u0275text(8, "\u27F3 Sync Users");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "div", 8);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275text(14, "Active Users");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 7)(16, "div", 10);
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 9);
        \u0275\u0275text(19, "Pending Activation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 7)(21, "div", 11);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 9);
        \u0275\u0275text(24, "Inactive");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 7)(26, "div", 12);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 9);
        \u0275\u0275text(29, "Total Users");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "app-filter-bar", 13);
        \u0275\u0275listener("searchChange", function UsersListComponent_Template_app_filter_bar_searchChange_30_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 14)(32, "div", 15)(33, "table")(34, "thead")(35, "tr")(36, "th");
        \u0275\u0275text(37, "User");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "Role(s)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Region");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Business Unit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Last Login");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "th");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "tbody");
        \u0275\u0275template(50, UsersListComponent_tr_50_Template, 25, 16, "tr", 16)(51, UsersListComponent_tr_51_Template, 3, 1, "tr", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "app-paginator", 18);
        \u0275\u0275listener("pageChange", function UsersListComponent_Template_app_paginator_pageChange_52_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate(ctx.activeCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.pendingCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.inactiveCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.total());
        \u0275\u0275advance(3);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(20);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent, DatePipe], styles: [_c4], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersListComponent, [{
    type: Component,
    args: [{ selector: "app-users-list", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">User Management</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">Export</button><button class="btn btn-ghost btn-sm" (click)="syncUsers()">\u27F3 Sync Users</button></div></div>
    <div class="stat-strip">
      <div class="stat"><div class="stat-val green">{{ activeCount }}</div><div class="stat-label">Active Users</div></div>
      <div class="stat"><div class="stat-val amber">{{ pendingCount }}</div><div class="stat-label">Pending Activation</div></div>
      <div class="stat"><div class="stat-val">{{ inactiveCount }}</div><div class="stat-label">Inactive</div></div>
      <div class="stat"><div class="stat-val" style="color:#2563eb">{{ total() }}</div><div class="stat-label">Total Users</div></div>
    </div>
    <app-filter-bar placeholder="Search name, email, role, region\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
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
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading\u2026' : 'No users found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;708448a38e1b9c93b797b8c850bac9affb487e3edca09ad81e5a51ef86c4a83b;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersListComponent, { className: "UsersListComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 990 });
})();
var RolesComponent = class _RolesComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/roles";
    this.selectedRole = signal(null, ...ngDevMode ? [{ debugName: "selectedRole" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  createRole() {
    this.api.post("/v1/roles", { name: "New Role", description: "", permissions: {} }).subscribe(() => this.load());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275RolesComponent_BaseFactory;
      return function RolesComponent_Factory(__ngFactoryType__) {
        return (\u0275RolesComponent_BaseFactory || (\u0275RolesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RolesComponent)))(__ngFactoryType__ || _RolesComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesComponent, selectors: [["app-roles"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 4, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-ghost", "btn-sm"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["placeholder", "Search roles\u2026", 3, "searchChange", "count"], ["class", "role-card", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "empty", 4, "ngIf"], [1, "role-card", 3, "click"], [1, "role-icon"], [2, "flex", "1"], [2, "font-size", "13px", "font-weight", "700", "color", "#1a2240"], [1, "text-muted"], [1, "badge"], [1, "empty"]], template: function RolesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Roles & Permissions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275text(6, "\u2398 Clone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275listener("click", function RolesComponent_Template_button_click_7_listener() {
          return ctx.createRole();
        });
        \u0275\u0275text(8, "+ Create Role");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "app-filter-bar", 6);
        \u0275\u0275listener("searchChange", function RolesComponent_Template_app_filter_bar_searchChange_9_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, RolesComponent_div_10_Template, 12, 9, "div", 7)(11, RolesComponent_div_11_Template, 2, 1, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stat-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.stat-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.role-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: border-color .12s;\n}\n.role-card[_ngcontent-%COMP%]:hover {\n  border-color: #93c5fd;\n}\n.role-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=all-feature-components.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesComponent, [{
    type: Component,
    args: [{ selector: "app-roles", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent], template: `
  <div class="page-shell">
    <div class="toolbar"><h1 class="page-title">Roles & Permissions</h1><div class="toolbar-actions"><button class="btn btn-ghost btn-sm">\u2398 Clone</button><button class="btn btn-primary btn-sm" (click)="createRole()">+ Create Role</button></div></div>
    <app-filter-bar placeholder="Search roles\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div *ngFor="let r of rows(); trackBy: trackById" class="role-card" (click)="selectedRole.set(r)">
      <div class="role-icon" [style.background]="r.color||'#2563eb'">{{ r.icon || r.name.charAt(0) }}</div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:700;color:#1a2240">{{ r.name }}</div>
        <div class="text-muted">{{ r.description }}</div>
      </div>
      <div class="text-muted">{{ r._count?.users || 0 }} users</div>
      <span class="badge" [class]="r.isSystem?'badge-blue':r.isActive?'badge-green':'badge-gray'">{{ r.isSystem?'System':r.isActive?'Active':'Disabled' }}</span>
    </div>
    <div *ngIf="!rows().length" class="empty">{{ loading() ? 'Loading\u2026' : 'No roles found.' }}</div>
  </div>
  `, styles: ["/* angular:styles/component:css;93e572d09e2f4b3df3ddec42123b556e2b877c1992e608770ff2689afaac81ce;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n.role-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  transition: border-color .12s;\n}\n.role-card:hover {\n  border-color: #93c5fd;\n}\n.role-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #fff;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesComponent, { className: "RolesComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 1031 });
})();
var DelegationComponent = class _DelegationComponent extends BaseListComponent {
  constructor() {
    super(...arguments);
    this.apiPath = "/v1/delegations";
    this.fb = inject(FormBuilder);
    this.showCreate = signal(false, ...ngDevMode ? [{ debugName: "showCreate" }] : (
      /* istanbul ignore next */
      []
    ));
    this.createForm = this.fb.group({
      fromUserId: ["", Validators.required],
      toUserId: ["", Validators.required],
      type: ["Workflow"],
      scope: ["", Validators.required],
      startDate: [(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)],
      endDate: [new Date(Date.now() + 14 * 864e5).toISOString().slice(0, 10)]
    });
  }
  get activeCount() {
    return this.rows().filter((r) => r.status === "Active").length;
  }
  get pendingCount() {
    return this.rows().filter((r) => r.status === "Pending").length;
  }
  get expiredCount() {
    return this.rows().filter((r) => r.status === "Expired").length;
  }
  extraParams() {
    return {};
  }
  trackById(_, r) {
    return r.id;
  }
  submitCreate() {
    if (this.createForm.invalid)
      return;
    this.api.post("/v1/delegations", this.createForm.value).subscribe(() => {
      this.showCreate.set(false);
      this.createForm.reset();
      this.load();
    });
  }
  revoke(d) {
    this.api.patch(`/v1/delegations/${d.id}/revoke`, {}).subscribe(() => this.load());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275DelegationComponent_BaseFactory;
      return function DelegationComponent_Factory(__ngFactoryType__) {
        return (\u0275DelegationComponent_BaseFactory || (\u0275DelegationComponent_BaseFactory = \u0275\u0275getInheritedFactory(_DelegationComponent)))(__ngFactoryType__ || _DelegationComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DelegationComponent, selectors: [["app-delegation"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 47, vars: 12, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "stat-strip"], [1, "stat"], [1, "stat-val", "green"], [1, "stat-label"], [1, "stat-val", "amber"], [1, "stat-val"], ["class", "tbl-card", "style", "padding:16px;margin-bottom:14px", 4, "ngIf"], ["placeholder", "Search name, scope, type\u2026", 3, "searchChange", "count"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "pageChange", "total", "page", "pageSize"], [1, "tbl-card", 2, "padding", "16px", "margin-bottom", "14px"], [2, "display", "grid", "grid-template-columns", "repeat(3,1fr) auto", "gap", "10px", "align-items", "end", 3, "formGroup"], [2, "font-size", "11px", "font-weight", "600", "color", "#5a6b8a", "display", "block", "margin-bottom", "4px"], ["formControlName", "fromUserId", "placeholder", "User UUID\u2026", 1, "form-input"], ["formControlName", "toUserId", "placeholder", "User UUID\u2026", 1, "form-input"], ["formControlName", "type", 1, "form-select", 2, "width", "100%"], [1, "btn", "btn-primary", 3, "click"], [2, "display", "grid", "grid-template-columns", "1fr 1fr auto", "gap", "10px", "margin-top", "10px", "align-items", "end", 3, "formGroup"], ["formControlName", "scope", "placeholder", "e.g. CE Actions only", 1, "form-input"], ["type", "date", "formControlName", "startDate", 1, "form-input"], ["type", "date", "formControlName", "endDate", 1, "form-input"], [2, "display", "flex", "align-items", "center", "gap", "5px", "flex-wrap", "wrap"], [1, "avatar", 2, "width", "22px", "height", "22px", "font-size", "8px"], [2, "font-size", "12px", "font-weight", "600"], [2, "color", "#94a3b8"], [1, "avatar", 2, "width", "22px", "height", "22px", "font-size", "8px", "background", "#16a34a"], [1, "dlg-badge"], [1, "text-muted", 2, "max-width", "160px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap"], [1, "text-muted"], ["class", "btn btn-ghost btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["colspan", "7", 1, "empty"]], template: function DelegationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Delegations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function DelegationComponent_Template_button_click_5_listener() {
          return ctx.showCreate.set(!ctx.showCreate());
        });
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275text(12, "Active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 6)(14, "div", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275text(17, "Pending");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "div", 10);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 8);
        \u0275\u0275text(22, "Expired");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(23, DelegationComponent_div_23_Template, 37, 2, "div", 11);
        \u0275\u0275elementStart(24, "app-filter-bar", 12);
        \u0275\u0275listener("searchChange", function DelegationComponent_Template_app_filter_bar_searchChange_24_listener($event) {
          return ctx.onSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 13)(26, "div", 14)(27, "table")(28, "thead")(29, "tr")(30, "th");
        \u0275\u0275text(31, "From \u2192 To");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "th");
        \u0275\u0275text(33, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "th");
        \u0275\u0275text(35, "Scope");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "th");
        \u0275\u0275text(37, "Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "th");
        \u0275\u0275text(39, "End");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Status");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "th");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "tbody");
        \u0275\u0275template(44, DelegationComponent_tr_44_Template, 29, 22, "tr", 15)(45, DelegationComponent_tr_45_Template, 3, 1, "tr", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "app-paginator", 17);
        \u0275\u0275listener("pageChange", function DelegationComponent_Template_app_paginator_pageChange_46_listener($event) {
          return ctx.onPage($event);
        });
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.showCreate() ? "Cancel" : "+ New Delegation");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.activeCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.pendingCount);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.expiredCount);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.showCreate());
        \u0275\u0275advance();
        \u0275\u0275property("count", ctx.total());
        \u0275\u0275advance(20);
        \u0275\u0275property("ngForOf", ctx.rows())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.rows().length);
        \u0275\u0275advance();
        \u0275\u0275property("total", ctx.total())("page", ctx.page())("pageSize", ctx.pageSize());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FilterBarComponent, PaginatorComponent, ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stat-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.stat-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.dlg-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.full[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.workflow[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.approvalonly[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.readonly[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.active-dlg[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.pending-dlg[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.expired-dlg[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.revoked-dlg[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n/*# sourceMappingURL=all-feature-components.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DelegationComponent, [{
    type: Component,
    args: [{ selector: "app-delegation", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, FilterBarComponent, PaginatorComponent, ReactiveFormsModule], template: `
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
        <div><label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:4px">From User ID</label><input class="form-input" formControlName="fromUserId" placeholder="User UUID\u2026"></div>
        <div><label style="font-size:11px;font-weight:600;color:#5a6b8a;display:block;margin-bottom:4px">To User ID</label><input class="form-input" formControlName="toUserId" placeholder="User UUID\u2026"></div>
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

    <app-filter-bar placeholder="Search name, scope, type\u2026" [count]="total()" (searchChange)="onSearch($event)"></app-filter-bar>
    <div class="tbl-card">
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>From \u2192 To</th><th>Type</th><th>Scope</th><th>Start</th><th>End</th><th>Status</th><th></th></tr></thead>
          <tbody>
            <tr *ngFor="let d of rows(); trackBy: trackById">
              <td>
                <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap">
                  <span class="avatar" [style.background]="d.fromUser?.avatarColor||'#2563eb'" style="width:22px;height:22px;font-size:8px">{{ d.fromUser?.initials }}</span>
                  <span style="font-size:12px;font-weight:600">{{ d.fromUser?.name }}</span>
                  <span style="color:#94a3b8">\u2192</span>
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
            <tr *ngIf="!rows().length"><td colspan="7" class="empty">{{ loading() ? 'Loading\u2026' : 'No delegations found.' }}</td></tr>
          </tbody>
        </table>
      </div>
      <app-paginator [total]="total()" [page]="page()" [pageSize]="pageSize()" (pageChange)="onPage($event)"></app-paginator>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;dceba01406a59cb80e2b11578f11374cd85f9a22cec1edec4e913ae7e7295e53;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n.dlg-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.full {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.workflow {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.approvalonly {\n  background: #dcfce7;\n  color: #166534;\n}\n.readonly {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.active-dlg {\n  background: #dcfce7;\n  color: #166534;\n}\n.pending-dlg {\n  background: #fef3c7;\n  color: #92400e;\n}\n.expired-dlg {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.revoked-dlg {\n  background: #fee2e2;\n  color: #991b1b;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DelegationComponent, { className: "DelegationComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 1108 });
})();
var MasterLookupComponent = class _MasterLookupComponent {
  constructor() {
    this.api = inject(ApiService);
    this.activeTab = signal("services", ...ngDevMode ? [{ debugName: "activeTab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.items = signal([], ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    ));
    this.tabs = [
      { key: "services", label: "Services" },
      { key: "bim_levels", label: "BIM Levels" },
      { key: "nec_types", label: "NEC Types" },
      { key: "lot_sectors", label: "Lot Sectors" },
      { key: "regions", label: "Regions" },
      { key: "partners", label: "Partners" },
      { key: "proc_routes", label: "Proc. Routes" },
      { key: "vat_rates", label: "VAT Rates" },
      { key: "staff-grades", label: "Staff Grades" },
      { key: "people-band-rates", label: "Band Rates" }
    ];
  }
  ngOnInit() {
    this.switchTab("services");
  }
  switchTab(key) {
    this.activeTab.set(key);
    const path = key === "staff-grades" ? "/v1/master-lookup/staff-grades" : key === "people-band-rates" ? "/v1/master-lookup/people-band-rates" : `/v1/master-lookup/category/${key}`;
    this.api.get(path).subscribe((data) => this.items.set(data));
  }
  trackById(_, r) {
    return r.id;
  }
  updateLabel(i, value) {
    const item = this.items()[i];
    if (this.activeTab() === "staff-grades") {
      this.api.put(`/v1/master-lookup/staff-grades/${item.id}`, { grade: value }).subscribe();
    } else {
      this.api.put(`/v1/master-lookup/upsert`, { category: this.activeTab(), code: item.code, label: value }).subscribe();
    }
    const updated = [...this.items()];
    updated[i] = __spreadProps(__spreadValues({}, item), { label: value, grade: value });
    this.items.set(updated);
  }
  updateRate(i, rate) {
    const item = this.items()[i];
    this.api.put(`/v1/master-lookup/staff-grades/${item.id}`, { rate }).subscribe();
    const updated = [...this.items()];
    updated[i] = __spreadProps(__spreadValues({}, item), { rate });
    this.items.set(updated);
  }
  addRow() {
    const newItem = this.activeTab() === "staff-grades" ? { grade: "New Grade", rate: 0, isActive: true } : { label: "New Item", category: this.activeTab(), isActive: true };
    this.items.update((items) => [...items, newItem]);
  }
  deleteRow(i) {
    const item = this.items()[i];
    if (item.id)
      this.api.delete(`/v1/master-lookup/${item.id}`).subscribe(() => this.switchTab(this.activeTab()));
    else
      this.items.update((items) => items.filter((_, idx) => idx !== i));
  }
  static {
    this.\u0275fac = function MasterLookupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MasterLookupComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasterLookupComponent, selectors: [["app-master-lookup"]], decls: 26, vars: 4, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-ghost", "btn-sm"], [1, "ml-tabs"], [1, "ml-tab", 3, "active"], [1, "tbl-card"], [1, "tbl-scroll"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ml-tab", 3, "click"], [1, "ml-cell", 3, "change", "value"], [1, "badge"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["type", "number", 1, "ml-cell", 3, "change", "value"], ["colspan", "4", 1, "empty"]], template: function MasterLookupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Master Lookup");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function MasterLookupComponent_Template_button_click_5_listener() {
          return ctx.addRow();
        });
        \u0275\u0275text(6, "+ Add Row");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "button", 5);
        \u0275\u0275text(8, "Export");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275repeaterCreate(10, MasterLookupComponent_For_11_Template, 2, 3, "button", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "table")(15, "thead")(16, "tr")(17, "th");
        \u0275\u0275text(18, "Label");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, MasterLookupComponent_th_19_Template, 2, 0, "th", 10);
        \u0275\u0275elementStart(20, "th");
        \u0275\u0275text(21, "Active");
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "th");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "tbody");
        \u0275\u0275template(24, MasterLookupComponent_tr_24_Template, 10, 6, "tr", 11)(25, MasterLookupComponent_tr_25_Template, 3, 0, "tr", 10);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.activeTab() === "staff-grades");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.items())("ngForTrackBy", ctx.trackById);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.items().length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stat-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.stat-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.ml-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.ml-tab[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.ml-tab.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.ml-cell[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  background: transparent;\n  padding: 5px 8px;\n  font-family: inherit;\n  font-size: 12.5px;\n  width: 100%;\n  border-radius: 4px;\n}\n.ml-cell[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  background: #f0f7ff;\n  outline: none;\n}\n/*# sourceMappingURL=all-feature-components.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MasterLookupComponent, [{
    type: Component,
    args: [{ selector: "app-master-lookup", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, ReactiveFormsModule], template: `
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
          <thead><tr><th>Label</th><th *ngIf="activeTab()==='staff-grades'">Rate (\xA3/hr)</th><th>Active</th><th></th></tr></thead>
          <tbody>
            <tr *ngFor="let item of items(); let i=index; trackBy: trackById">
              <td><input class="ml-cell" [value]="item.label||item.grade" (change)="updateLabel(i,$any($event.target).value)" [attr.aria-label]="'Label for row '+(i+1)"></td>
              <td *ngIf="activeTab()==='staff-grades'"><input class="ml-cell" type="number" [value]="item.rate" (change)="updateRate(i,+$any($event.target).value)" [attr.aria-label]="'Rate for row '+(i+1)"></td>
              <td><span class="badge" [class]="item.isActive!==false?'badge-green':'badge-gray'">{{ item.isActive!==false?'Active':'Inactive' }}</span></td>
              <td><button class="btn btn-ghost btn-sm" (click)="deleteRow(i)">\u2715</button></td>
            </tr>
            <tr *ngIf="!items().length"><td colspan="4" class="empty">No records in this category.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `, styles: ["/* angular:styles/component:css;cf82e7b422856f65e8b35f3e308d6c39fa1aa5a18242458cf1cf017a25830c1d;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n.ml-tabs {\n  display: flex;\n  gap: 0;\n  border-bottom: 1px solid #dde2ee;\n  margin-bottom: 14px;\n}\n.ml-tab {\n  padding: 8px 16px;\n  font-size: 12px;\n  color: #8a9bb8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -1px;\n  font-weight: 500;\n  background: none;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  font-family: inherit;\n  transition: all .12s;\n}\n.ml-tab.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n  font-weight: 700;\n}\n.ml-cell {\n  border: 1px solid transparent;\n  background: transparent;\n  padding: 5px 8px;\n  font-family: inherit;\n  font-size: 12.5px;\n  width: 100%;\n  border-radius: 4px;\n}\n.ml-cell:focus {\n  border-color: #2563eb;\n  background: #f0f7ff;\n  outline: none;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasterLookupComponent, { className: "MasterLookupComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 1169 });
})();
var LoginComponent = class _LoginComponent {
  constructor() {
    this.api = inject(ApiService);
    this.tokens = inject(AuthTokenService);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.fb = inject(FormBuilder);
    this.form = this.fb.group({ userId: [""] });
  }
  submit() {
    const userId = this.form.value.userId;
    if (!userId)
      return;
    this.api.post(`/v1/auth/dev-token/${userId}`, {}).subscribe({
      next: ({ token }) => {
        this.tokens.setToken(token, false);
        this.auth.loadMe().subscribe(() => this.router.navigate(["/opportunities"]));
      },
      error: () => alert("Dev token unavailable. Configure JWT_SECRET in .env and ensure API is running.")
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 32, vars: 2, consts: [[1, "login-shell"], [1, "login-card"], [1, "login-logo"], ["width", "56", "height", "56", "viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M85,50 A35,35 0 1,0 85,52", "fill", "none", "stroke", "#00aeef", "stroke-width", "11", "stroke-linecap", "round"], ["d", "M36,68 A20,20 0 0,0 64,68", "fill", "none", "stroke", "#f5a800", "stroke-width", "9", "stroke-linecap", "round"], ["cx", "27", "cy", "50", "r", "7", "fill", "#00aeef"], [1, "login-brand"], [1, "login-sub"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "login-field"], ["for", "dev-user", 1, "login-label"], ["id", "dev-user", "formControlName", "userId", 1, "login-input"], ["value", ""], ["value", "11111111-1111-1111-1111-111111111111"], ["value", "22222222-2222-2222-2222-222222222222"], ["value", "33333333-3333-3333-3333-333333333333"], ["value", "44444444-4444-4444-4444-444444444444"], ["value", "55555555-5555-5555-5555-555555555555"], ["type", "submit", 1, "login-btn", 3, "disabled"], [1, "login-note"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 3);
        \u0275\u0275element(4, "path", 4)(5, "path", 5)(6, "circle", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275text(8, "PERFECT CIRCLE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275text(10, "PC HUB 2.0 \u2014 Enterprise Suite");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "form", 9);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(12, "div", 10)(13, "label", 11);
        \u0275\u0275text(14, "Dev User (select to auto-login)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "select", 12)(16, "option", 13);
        \u0275\u0275text(17, "Select user\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "option", 14);
        \u0275\u0275text(19, "James Dawson (Commission Lead)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "option", 15);
        \u0275\u0275text(21, "Sarah Mitchell (Commercial Manager)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "option", 16);
        \u0275\u0275text(23, "Priya Patel (Commission Lead)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "option", 17);
        \u0275\u0275text(25, "Tom Hargreaves (Lead Partner)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "option", 18);
        \u0275\u0275text(27, "Lucy Chen (Commission Lead)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "button", 19);
        \u0275\u0275text(29, "Sign In (Dev Mode)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 20);
        \u0275\u0275text(31, "Production: configure JWT from your enterprise identity provider (Azure AD, Okta, etc.)");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(17);
        \u0275\u0275property("disabled", !ctx.form.value.userId);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n.login-shell[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f7ff 0%,\n      #f5f7fb 100%);\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 12px;\n  padding: 40px 36px;\n  width: 380px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, .1);\n}\n.login-logo[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.login-brand[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -.5px;\n  margin-top: 8px;\n}\n.login-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 3px;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.login-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.login-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #5a6b8a;\n}\n.login-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 13px;\n  font-family: inherit;\n  outline: none;\n}\n.login-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.login-btn[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  padding: 11px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background .12s;\n}\n.login-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.login-btn[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.login-note[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  text-align: center;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=all-feature-components.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `
  <div class="login-shell">
    <div class="login-card">
      <div class="login-logo">
        <svg width="56" height="56" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M85,50 A35,35 0 1,0 85,52" fill="none" stroke="#00aeef" stroke-width="11" stroke-linecap="round"/>
          <path d="M36,68 A20,20 0 0,0 64,68" fill="none" stroke="#f5a800" stroke-width="9" stroke-linecap="round"/>
          <circle cx="27" cy="50" r="7" fill="#00aeef"/>
        </svg>
        <div class="login-brand">PERFECT CIRCLE</div>
        <div class="login-sub">PC HUB 2.0 \u2014 Enterprise Suite</div>
      </div>
      <form [formGroup]="form" (ngSubmit)="submit()" class="login-form">
        <div class="login-field">
          <label class="login-label" for="dev-user">Dev User (select to auto-login)</label>
          <select id="dev-user" class="login-input" formControlName="userId">
            <option value="">Select user\u2026</option>
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
  `, styles: ["/* angular:styles/component:css;7710e5ffb7b6f23a331280f7d4b30a2f00cb1b12f942f373a2d575c51b0285f9;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n.login-shell {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f7ff 0%,\n      #f5f7fb 100%);\n}\n.login-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 12px;\n  padding: 40px 36px;\n  width: 380px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, .1);\n}\n.login-logo {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.login-brand {\n  font-size: 18px;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -.5px;\n  margin-top: 8px;\n}\n.login-sub {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 3px;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.login-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.login-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #5a6b8a;\n}\n.login-input {\n  border: 1px solid #dde2ee;\n  border-radius: 7px;\n  padding: 9px 12px;\n  font-size: 13px;\n  font-family: inherit;\n  outline: none;\n}\n.login-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.login-btn {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  padding: 11px;\n  font-size: 13.5px;\n  font-weight: 700;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background .12s;\n}\n.login-btn:hover:not(:disabled) {\n  background: #1d4ed8;\n}\n.login-btn:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.login-note {\n  font-size: 11px;\n  color: #94a3b8;\n  text-align: center;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 1273 });
})();
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.api = inject(ApiService);
    this.destroy$ = new Subject();
    this.data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : (
      /* istanbul ignore next */
      []
    ));
    this.loadErr = signal("", ...ngDevMode ? [{ debugName: "loadErr" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.fetchData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  reload() {
    this.data.set(null);
    this.loadErr.set("");
    this.fetchData();
  }
  fetchData() {
    this.api.get("/v1/dashboard").pipe(takeUntil(this.destroy$)).subscribe({
      next: (d) => this.data.set(d),
      error: () => this.loadErr.set("Failed to load dashboard data. Ensure the API is running.")
    });
  }
  fmtK(val) {
    if (!val || val === 0)
      return "\xA30";
    if (val >= 1e6)
      return "\xA3" + (val / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    if (val >= 1e3)
      return "\xA3" + Math.round(val / 1e3) + "K";
    return "\xA3" + Math.round(val);
  }
  statusLabel(s) {
    const map = { Lead: "Lead", Probable: "Probable", StrongProbable: "Strong Probable", Contracted: "Contracted", WorkStarted: "Work Started", Completed: "Completed" };
    return map[s] ?? s;
  }
  barPct(val, total) {
    return total > 0 ? Math.min(100, Math.round(val / total * 100)) : 0;
  }
  barColor(s) {
    const m = { Lead: "#94a3b8", Probable: "#2563eb", StrongProbable: "#7c3aed", Contracted: "#16a34a", WorkStarted: "#0f766e", Completed: "#0369a1" };
    return m[s] ?? "#2563eb";
  }
  stageBg(s) {
    const m = { Lead: "#f1f5f9", Probable: "#dbeafe", StrongProbable: "#ede9fe", Contracted: "#dcfce7", WorkStarted: "#ccfbf1", Completed: "#e0f2fe" };
    return m[s] ?? "#f1f5f9";
  }
  stageFg(s) {
    const m = { Lead: "#475569", Probable: "#1d4ed8", StrongProbable: "#5b21b6", Contracted: "#166534", WorkStarted: "#0f766e", Completed: "#0369a1" };
    return m[s] ?? "#475569";
  }
  msBadge(s) {
    const m = { Pending: "badge-amber", Paid: "badge-green", Overdue: "badge-red", Upcoming: "badge-blue", Draft: "badge-gray" };
    return m[s] ?? "badge-gray";
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 10, vars: 3, consts: [[1, "page-shell"], [1, "toolbar"], [1, "page-title"], [1, "toolbar-actions"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], ["class", "alert-bar", "style", "background:#fee2e2;border-color:#fca5a5;color:#7f1d1d;", 4, "ngIf"], [4, "ngIf"], ["style", "padding:60px;text-align:center;color:#8a9bb8", 4, "ngIf"], [1, "alert-bar", 2, "background", "#fee2e2", "border-color", "#fca5a5", "color", "#7f1d1d"], ["class", "alert-bar", 4, "ngIf"], [1, "dash-kpi-grid"], [1, "kpi-card"], [1, "kpi-label"], [1, "kpi-value", "blue"], [1, "kpi-sub"], [1, "kpi-value", "green"], [1, "kpi-value", "amber"], [1, "kpi-value", "gray"], [1, "dash-mid-grid"], [1, "section-card"], [1, "section-title"], [2, "font-size", "11px", "color", "#8a9bb8", "font-weight", "400"], [4, "ngFor", "ngForOf"], [1, "wf-grid"], [1, "wf-cell"], [1, "wf-num", "blue"], [1, "wf-lbl"], [1, "wf-num", "amber"], [1, "wf-num", "green"], [1, "wf-num", "purple"], [1, "dash-bot-grid"], ["routerLink", "/opportunities", 1, "section-link"], [1, "mini-tbl"], [1, "alert-bar"], ["routerLink", "/suppliers", 1, "alert-lnk"], [1, "pipe-row"], [1, "pipe-lbl"], [1, "pipe-bar-wrap"], [1, "pipe-bar"], [1, "pipe-val"], [1, "comm-num"], [1, "comm-name", 3, "title"], [1, "chip"], [1, "prog-wrap"], [1, "prog-track"], [1, "prog-fill"], [2, "font-size", "10.5px", "color", "#8a9bb8", "width", "28px", "text-align", "right"], [2, "font-weight", "700", "color", "#d97706", "white-space", "nowrap"], ["colspan", "4", 1, "empty"], [2, "font-weight", "600", "font-size", "12px"], [2, "font-weight", "700", "color", "#16a34a", "white-space", "nowrap"], [1, "badge"], [2, "padding", "60px", "text-align", "center", "color", "#8a9bb8"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function DashboardComponent_Template_button_click_5_listener() {
          return ctx.reload();
        });
        \u0275\u0275text(6, "\u21BB Refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(7, DashboardComponent_div_7_Template, 2, 1, "div", 5)(8, DashboardComponent_ng_container_8_Template, 109, 20, "ng-container", 6)(9, DashboardComponent_div_9_Template, 2, 0, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loadErr());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.data());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.data() && !ctx.loadErr());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.stat-val.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.stat-val.red[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\ntbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f5f7fb;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select[_ngcontent-%COMP%] {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.dash-kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 10px;\n  padding: 18px 20px;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  color: #8a9bb8;\n  margin-bottom: 8px;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n}\n.kpi-value.blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.kpi-value.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.kpi-value.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.kpi-value.gray[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.kpi-sub[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #8a9bb8;\n  margin-top: 5px;\n}\n.dash-mid-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.dash-bot-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 10px;\n  padding: 18px 20px;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.section-link[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n}\n.pipe-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.pipe-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  width: 96px;\n  flex-shrink: 0;\n}\n.pipe-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #f0f2f7;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.pipe-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .3s;\n}\n.pipe-val[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 80px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.wf-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.wf-cell[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.wf-num[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.wf-num.blue[_ngcontent-%COMP%] {\n  color: #2563eb;\n}\n.wf-num.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.wf-num.amber[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.wf-num.purple[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.wf-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n}\n.mini-tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.mini-tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #8a9bb8;\n  padding: 6px 8px;\n  border-bottom: 2px solid #f0f2f7;\n  text-align: left;\n}\n.mini-tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 9px 8px;\n  border-bottom: 1px solid #f5f7fb;\n  vertical-align: middle;\n}\n.mini-tbl[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.comm-num[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #2563eb;\n}\n.comm-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #64748b;\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.prog-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.prog-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.prog-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 2px;\n}\n.alert-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 12.5px;\n  color: #92400e;\n  margin-bottom: 10px;\n}\n.alert-lnk[_ngcontent-%COMP%] {\n  color: #b45309;\n  font-weight: 600;\n  text-decoration: none;\n  margin-left: 4px;\n}\n@media (max-width: 900px) {\n  .dash-kpi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .dash-mid-grid[_ngcontent-%COMP%], \n   .dash-bot-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=all-feature-components.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule], template: `
<div class="page-shell">
  <div class="toolbar">
    <h1 class="page-title">Dashboard</h1>
    <div class="toolbar-actions">
      <button class="btn btn-ghost btn-sm" (click)="reload()">\u21BB Refresh</button>
    </div>
  </div>

  <div *ngIf="loadErr()" class="alert-bar" style="background:#fee2e2;border-color:#fca5a5;color:#7f1d1d;">\u26A0 {{loadErr()}}</div>

  <ng-container *ngIf="data() as d">
    <!-- Alert banner -->
    <div class="alert-bar" *ngIf="d.alerts.expiredSuppliers > 0">
      \u26A0 {{d.alerts.expiredSuppliers}} supplier certificate(s) have expired.
      <a class="alert-lnk" routerLink="/suppliers">Review Supplier Portal \u2192</a>
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
        <div class="kpi-sub">{{d.workflowStatus.activeCEs}} open CEs \xB7 {{d.alerts.expiredSuppliers}} expired supplier</div>
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
          <a class="section-link" routerLink="/opportunities">View All \u2192</a>
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

  <div *ngIf="!data() && !loadErr()" style="padding:60px;text-align:center;color:#8a9bb8">Loading dashboard\u2026</div>
</div>
  `, styles: ["/* angular:styles/component:css;9f5916eff8c6dafc87c2f4199c4422f5c6ab7d96a75f191a3da1417508db3011;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/features/all-feature-components.ts */\n:host {\n  display: block;\n}\n.page-shell {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 100%;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2240;\n  margin: 0;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.stat-strip {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.stat {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.stat-val {\n  font-size: 22px;\n  font-weight: 800;\n  color: #2563eb;\n}\n.stat-val.green {\n  color: #16a34a;\n}\n.stat-val.amber {\n  color: #d97706;\n}\n.stat-val.red {\n  color: #dc2626;\n}\n.stat-label {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 2px;\n  font-weight: 500;\n}\n.tbl-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.tbl-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\nthead th {\n  background: #f5f7fb;\n  padding: 9px 12px;\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #5a6b8a;\n  border-bottom: 2px solid #dde2ee;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nthead th:hover {\n  background: #eef1f8;\n  color: #2563eb;\n}\ntbody tr {\n  border-bottom: 1px solid #f0f2f7;\n  transition: background .08s;\n  cursor: pointer;\n}\ntbody tr:hover {\n  background: #f5f7fb;\n}\ntbody td {\n  padding: 9px 12px;\n  vertical-align: middle;\n}\n.empty {\n  text-align: center;\n  padding: 40px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n.badge {\n  display: inline-block;\n  padding: 2px 9px;\n  border-radius: 10px;\n  font-size: 10.5px;\n  font-weight: 700;\n}\n.badge-green {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-amber {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-blue {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge-red {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-gray {\n  background: #f1f5f9;\n  color: #475569;\n}\n.badge-purple {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  background: rgba(37, 99, 235, .08);\n  color: #1d4ed8;\n  font-size: 10.5px;\n  font-weight: 600;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  border-radius: 7px;\n  border: 1px solid transparent;\n  cursor: pointer;\n  font-size: 12.5px;\n  font-weight: 600;\n  font-family: inherit;\n  transition: all .12s;\n}\n.btn-primary {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-outline {\n  background: #fff;\n  color: #2563eb;\n  border-color: #2563eb;\n}\n.btn-outline:hover {\n  background: #eff6ff;\n}\n.btn-ghost {\n  background: transparent;\n  color: #5a6b8a;\n  border-color: #dde2ee;\n}\n.btn-ghost:hover {\n  background: #f5f7fb;\n}\n.btn-sm {\n  padding: 4px 10px;\n  font-size: 11.5px;\n}\n.btn-danger {\n  background: #dc2626;\n  color: #fff;\n  border-color: #dc2626;\n}\n.value {\n  font-weight: 700;\n  color: #d97706;\n}\n.text-muted {\n  color: #64748b;\n  font-size: 12px;\n}\n.avatar {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: #fff;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.progress-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  min-width: 80px;\n}\n.progress-track {\n  flex: 1;\n  height: 5px;\n  background: #e2e8f0;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill {\n  height: 100%;\n  background: #2563eb;\n  border-radius: 3px;\n}\n.form-input {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  outline: none;\n  width: 100%;\n}\n.form-input:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, .1);\n}\n.form-select {\n  border: 1px solid #dde2ee;\n  border-radius: 6px;\n  padding: 7px 10px;\n  font-size: 12.5px;\n  font-family: inherit;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.form-select:focus {\n  border-color: #2563eb;\n}\n.dash-kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.kpi-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 10px;\n  padding: 18px 20px;\n}\n.kpi-label {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  color: #8a9bb8;\n  margin-bottom: 8px;\n}\n.kpi-value {\n  font-size: 26px;\n  font-weight: 800;\n  line-height: 1;\n}\n.kpi-value.blue {\n  color: #2563eb;\n}\n.kpi-value.green {\n  color: #16a34a;\n}\n.kpi-value.amber {\n  color: #d97706;\n}\n.kpi-value.gray {\n  color: #64748b;\n}\n.kpi-sub {\n  font-size: 11.5px;\n  color: #8a9bb8;\n  margin-top: 5px;\n}\n.dash-mid-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.dash-bot-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.section-card {\n  background: #fff;\n  border: 1px solid #dde2ee;\n  border-radius: 10px;\n  padding: 18px 20px;\n}\n.section-title {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2240;\n  margin-bottom: 14px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.section-link {\n  font-size: 11.5px;\n  color: #2563eb;\n  text-decoration: none;\n  font-weight: 600;\n}\n.pipe-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.pipe-lbl {\n  font-size: 11px;\n  color: #8a9bb8;\n  width: 96px;\n  flex-shrink: 0;\n}\n.pipe-bar-wrap {\n  flex: 1;\n  height: 8px;\n  background: #f0f2f7;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.pipe-bar {\n  height: 100%;\n  border-radius: 4px;\n  transition: width .3s;\n}\n.pipe-val {\n  font-size: 11.5px;\n  font-weight: 700;\n  color: #1a2240;\n  width: 80px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.wf-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n.wf-cell {\n  background: #f5f7fb;\n  border-radius: 8px;\n  padding: 12px 14px;\n}\n.wf-num {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.wf-num.blue {\n  color: #2563eb;\n}\n.wf-num.green {\n  color: #16a34a;\n}\n.wf-num.amber {\n  color: #d97706;\n}\n.wf-num.purple {\n  color: #7c3aed;\n}\n.wf-lbl {\n  font-size: 11px;\n  color: #8a9bb8;\n  margin-top: 3px;\n}\n.mini-tbl {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.mini-tbl th {\n  font-size: 10.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .4px;\n  color: #8a9bb8;\n  padding: 6px 8px;\n  border-bottom: 2px solid #f0f2f7;\n  text-align: left;\n}\n.mini-tbl td {\n  padding: 9px 8px;\n  border-bottom: 1px solid #f5f7fb;\n  vertical-align: middle;\n}\n.mini-tbl tr:last-child td {\n  border-bottom: none;\n}\n.comm-num {\n  font-size: 11px;\n  font-weight: 700;\n  color: #2563eb;\n}\n.comm-name {\n  font-size: 11px;\n  color: #64748b;\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.prog-wrap {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.prog-track {\n  flex: 1;\n  height: 4px;\n  background: #e2e8f0;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.prog-fill {\n  height: 100%;\n  border-radius: 2px;\n}\n.alert-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fef3c7;\n  border: 1px solid #fcd34d;\n  border-radius: 8px;\n  padding: 10px 16px;\n  font-size: 12.5px;\n  color: #92400e;\n  margin-bottom: 10px;\n}\n.alert-lnk {\n  color: #b45309;\n  font-weight: 600;\n  text-decoration: none;\n  margin-left: 4px;\n}\n@media (max-width: 900px) {\n  .dash-kpi-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .dash-mid-grid,\n  .dash-bot-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=all-feature-components.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/all-feature-components.ts", lineNumber: 1461 });
})();

export {
  OpportunitiesListComponent,
  OpportunityDetailComponent,
  ClientInvoicesComponent,
  SupplierInvoicesComponent,
  CeListComponent,
  ProjectPiListComponent,
  SurveysListComponent,
  SupplierListComponent,
  AuditLogComponent,
  UsersListComponent,
  RolesComponent,
  DelegationComponent,
  MasterLookupComponent,
  LoginComponent,
  DashboardComponent
};
//# sourceMappingURL=chunk-JPGIXAWC.js.map
