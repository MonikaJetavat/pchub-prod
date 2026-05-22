import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-VJ5BUTS4.js";
import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  Input,
  NgForOf,
  NgIf,
  Output,
  Subject,
  debounceTime,
  distinctUntilChanged,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-YNIEOD7T.js";

// src/app/shared/components/shared-components.ts
function StageBadgeComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.stagePercent, "%");
  }
}
var _c0 = () => [10, 20, 50, 100];
function PaginatorComponent_div_0_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function PaginatorComponent_div_0_ng_container_6_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PaginatorComponent_div_0_ng_container_6_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const p_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.go(+p_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", p_r4 === ctx_r1.page);
    \u0275\u0275attribute("aria-label", "Page " + p_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4);
  }
}
function PaginatorComponent_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, PaginatorComponent_div_0_ng_container_6_span_1_Template, 2, 0, "span", 8)(2, PaginatorComponent_div_0_ng_container_6_button_2_Template, 2, 4, "button", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4 === "\u2026");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r4 !== "\u2026");
  }
}
function PaginatorComponent_div_0_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r5 = ctx.$implicit;
    \u0275\u0275property("value", n_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", n_r5, " / page");
  }
}
function PaginatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 3);
    \u0275\u0275listener("click", function PaginatorComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.page - 1));
    });
    \u0275\u0275text(5, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PaginatorComponent_div_0_ng_container_6_Template, 3, 2, "ng-container", 4);
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function PaginatorComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.go(ctx_r1.page + 1));
    });
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 6);
    \u0275\u0275listener("change", function PaginatorComponent_div_0_Template_select_change_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSz($event));
    });
    \u0275\u0275template(10, PaginatorComponent_div_0_option_10_Template, 2, 2, "option", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.from, "\u2013", ctx_r1.to, " of ", \u0275\u0275pipeBind1(3, 9, ctx_r1.total));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.page <= 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page >= ctx_r1.totalPages);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(11, _c0))("ngForTrackBy", ctx_r1.trkIdx);
  }
}
var _c1 = ["*"];
function FilterBarComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function FilterBarComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.ctrl.reset(""));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function FilterBarComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function FilterBarComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAll.emit());
    });
    \u0275\u0275text(1, "\u2715 Clear");
    \u0275\u0275elementEnd();
  }
}
function FilterBarComponent_div_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 13);
    \u0275\u0275listener("click", function FilterBarComponent_div_11_span_1_Template_button_click_2_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeChip.emit(i_r5));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r6.label);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Remove " + c_r6.label);
  }
}
function FilterBarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, FilterBarComponent_div_11_span_1_Template, 4, 2, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.chips);
  }
}
function VersionHistoryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "Loading version history\u2026");
    \u0275\u0275elementEnd();
  }
}
function VersionHistoryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1, "No version history found.");
    \u0275\u0275elementEnd();
  }
}
function VersionHistoryComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 12);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("v", v_r1.version);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r1.changedBy || "System");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 4, v_r1.createdAt, "dd MMM yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(v_r1.changeSummary || "Record updated");
  }
}
function VersionHistoryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, VersionHistoryComponent_div_3_div_1_Template, 13, 7, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.versions);
  }
}
var StageBadgeComponent = class _StageBadgeComponent {
  constructor() {
    this.status = "";
  }
  get label() {
    return this.status?.replace("StrongProbable", "Strong Probable");
  }
  get cls() {
    return {
      "stg-badge": true,
      "stg-lead": this.status === "Lead",
      "stg-probable": this.status === "Probable",
      "stg-strong": this.status === "StrongProbable",
      "stg-contracted": this.status === "Contracted",
      "stg-started": this.status === "WorkStarted",
      "stg-completed": this.status === "Completed"
    };
  }
  static {
    this.\u0275fac = function StageBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StageBadgeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StageBadgeComponent, selectors: [["app-stage-badge"]], inputs: { status: "status", stagePercent: "stagePercent" }, decls: 3, vars: 5, consts: [[1, "stg-badge"], ["class", "stg-pct", 4, "ngIf"], [1, "stg-pct"]], template: function StageBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275text(1);
        \u0275\u0275template(2, StageBadgeComponent_span_2_Template, 2, 1, "span", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cls);
        \u0275\u0275attribute("aria-label", ctx.status);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.label);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.stagePercent);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n.stg-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.stg-lead[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.stg-probable[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.stg-strong[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.stg-contracted[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.stg-started[_ngcontent-%COMP%] {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.stg-completed[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #075985;\n}\n.stg-pct[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: .8;\n}\n/*# sourceMappingURL=shared-components.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StageBadgeComponent, [{
    type: Component,
    args: [{ selector: "app-stage-badge", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule], template: `<span class="stg-badge" [class]="cls" [attr.aria-label]="status">
    {{ label }}<span *ngIf="stagePercent" class="stg-pct"> \xB7 {{ stagePercent }}%</span>
  </span>`, styles: ["/* angular:styles/component:css;81465d0a5dc7434078515dd608eea32cd5b62a93fca655a0da9f14329c7dd648;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/shared/components/shared-components.ts */\n.stg-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.stg-lead {\n  background: #f1f5f9;\n  color: #475569;\n}\n.stg-probable {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.stg-strong {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.stg-contracted {\n  background: #dcfce7;\n  color: #166534;\n}\n.stg-started {\n  background: #ccfbf1;\n  color: #0f766e;\n}\n.stg-completed {\n  background: #e0f2fe;\n  color: #075985;\n}\n.stg-pct {\n  font-size: 10px;\n  opacity: .8;\n}\n/*# sourceMappingURL=shared-components.css.map */\n"] }]
  }], null, { status: [{
    type: Input
  }], stagePercent: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StageBadgeComponent, { className: "StageBadgeComponent", filePath: "src/app/shared/components/shared-components.ts", lineNumber: 25 });
})();
var PaginatorComponent = class _PaginatorComponent {
  constructor() {
    this.total = 0;
    this.page = 1;
    this.pageSize = 20;
    this.pageChange = new EventEmitter();
  }
  get totalPages() {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }
  get from() {
    return this.total === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
  }
  get to() {
    return Math.min(this.page * this.pageSize, this.total);
  }
  get pages() {
    const tp = this.totalPages, cur = this.page, r = [];
    for (let i = 1; i <= tp; i++) {
      if (i === 1 || i === tp || Math.abs(i - cur) <= 2)
        r.push(i);
      else if (r[r.length - 1] !== "\u2026")
        r.push("\u2026");
    }
    return r;
  }
  go(p) {
    if (p >= 1 && p <= this.totalPages)
      this.pageChange.emit({ page: p, pageSize: this.pageSize });
  }
  onSz(e) {
    this.pageChange.emit({ page: 1, pageSize: +e.target.value });
  }
  static {
    this.\u0275fac = function PaginatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaginatorComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginatorComponent, selectors: [["app-paginator"]], inputs: { total: "total", page: "page", pageSize: "pageSize" }, outputs: { pageChange: "pageChange" }, decls: 1, vars: 1, consts: [["class", "pag-bar", "role", "navigation", "aria-label", "Pagination", 4, "ngIf"], ["role", "navigation", "aria-label", "Pagination", 1, "pag-bar"], [1, "pag-info"], ["aria-label", "Previous", 1, "pag-btn", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], ["aria-label", "Next", 1, "pag-btn", 3, "click", "disabled"], ["aria-label", "Rows per page", 1, "pag-size", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pag-btn", "style", "cursor:default", 4, "ngIf"], ["class", "pag-btn", 3, "active", "click", 4, "ngIf"], [1, "pag-btn", 2, "cursor", "default"], [1, "pag-btn", 3, "click"], [3, "value"]], template: function PaginatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaginatorComponent_div_0_Template, 11, 12, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.total > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe], styles: ["\n.pag-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 12px;\n  flex-wrap: wrap;\n  border-top: 1px solid #e2e8f0;\n}\n.pag-info[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-right: 6px;\n}\n.pag-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid #dde2ee;\n  background: #fff;\n  cursor: pointer;\n  font-size: 12px;\n  color: #5a6b8a;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 6px;\n  transition: all .12s;\n}\n.pag-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f5f7fb;\n}\n.pag-btn.active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n  font-weight: 700;\n}\n.pag-btn[_ngcontent-%COMP%]:disabled {\n  opacity: .4;\n  cursor: not-allowed;\n}\n.pag-size[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 5px;\n  border: 1px solid #dde2ee;\n  font-size: 11.5px;\n  margin-left: 6px;\n  background: #fff;\n  cursor: pointer;\n}\n/*# sourceMappingURL=shared-components.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorComponent, [{
    type: Component,
    args: [{ selector: "app-paginator", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule], template: `
  <div class="pag-bar" *ngIf="total > 0" role="navigation" aria-label="Pagination">
    <span class="pag-info">{{ from }}\u2013{{ to }} of {{ total | number }}</span>
    <button class="pag-btn" [disabled]="page<=1" (click)="go(page-1)" aria-label="Previous">\u2039</button>
    <ng-container *ngFor="let p of pages">
      <span *ngIf="p==='\u2026'" class="pag-btn" style="cursor:default">\u2026</span>
      <button *ngIf="p!=='\u2026'" class="pag-btn" [class.active]="p===page" (click)="go(+p)" [attr.aria-label]="'Page '+p">{{ p }}</button>
    </ng-container>
    <button class="pag-btn" [disabled]="page>=totalPages" (click)="go(page+1)" aria-label="Next">\u203A</button>
    <select class="pag-size" (change)="onSz($event)" [value]="pageSize" aria-label="Rows per page">
      <option *ngFor="let n of [10,20,50,100]; trackBy: trkIdx" [value]="n">{{ n }} / page</option>
    </select>
  </div>`, styles: ["/* angular:styles/component:css;a975f5d841affb588f8b46e6a3ed3a0edc20643f1d7744fd292ab864dc61e3e1;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/shared/components/shared-components.ts */\n.pag-bar {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 12px;\n  flex-wrap: wrap;\n  border-top: 1px solid #e2e8f0;\n}\n.pag-info {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-right: 6px;\n}\n.pag-btn {\n  min-width: 32px;\n  height: 30px;\n  border-radius: 6px;\n  border: 1px solid #dde2ee;\n  background: #fff;\n  cursor: pointer;\n  font-size: 12px;\n  color: #5a6b8a;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 6px;\n  transition: all .12s;\n}\n.pag-btn:hover:not(:disabled) {\n  background: #f5f7fb;\n}\n.pag-btn.active {\n  background: #2563eb;\n  color: #fff;\n  border-color: #2563eb;\n  font-weight: 700;\n}\n.pag-btn:disabled {\n  opacity: .4;\n  cursor: not-allowed;\n}\n.pag-size {\n  padding: 4px 8px;\n  border-radius: 5px;\n  border: 1px solid #dde2ee;\n  font-size: 11.5px;\n  margin-left: 6px;\n  background: #fff;\n  cursor: pointer;\n}\n/*# sourceMappingURL=shared-components.css.map */\n"] }]
  }], null, { total: [{
    type: Input
  }], page: [{
    type: Input
  }], pageSize: [{
    type: Input
  }], pageChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginatorComponent, { className: "PaginatorComponent", filePath: "src/app/shared/components/shared-components.ts", lineNumber: 64 });
})();
var FilterBarComponent = class _FilterBarComponent {
  constructor() {
    this.placeholder = "Search\u2026";
    this.ariaLabel = "";
    this.count = 0;
    this.chips = [];
    this.hasFilters = false;
    this.searchChange = new EventEmitter();
    this.removeChip = new EventEmitter();
    this.clearAll = new EventEmitter();
    this.ctrl = new FormControl("");
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.ctrl.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((v) => this.searchChange.emit(v || ""));
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  reset() {
    this.ctrl.reset("");
  }
  static {
    this.\u0275fac = function FilterBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FilterBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterBarComponent, selectors: [["app-filter-bar"]], inputs: { placeholder: "placeholder", ariaLabel: "ariaLabel", count: "count", chips: "chips", hasFilters: "hasFilters" }, outputs: { searchChange: "searchChange", removeChip: "removeChip", clearAll: "clearAll" }, ngContentSelectors: _c1, decls: 12, vars: 9, consts: [["role", "search", 1, "filter-bar"], [1, "search-wrap"], ["aria-hidden", "true", 1, "search-icon"], ["type", "search", "autocomplete", "off", 1, "search-input", 3, "formControl", "placeholder"], ["class", "clear-x", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["class", "clear-all", "aria-label", "Clear all", 3, "click", 4, "ngIf"], ["aria-live", "polite", 1, "rec-count"], ["class", "chip-bar", 4, "ngIf"], ["aria-label", "Clear", 1, "clear-x", 3, "click"], ["aria-label", "Clear all", 1, "clear-all", 3, "click"], [1, "chip-bar"], ["class", "chip-item", 4, "ngFor", "ngForOf"], [1, "chip-item"], [3, "click"]], template: function FilterBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "\u{1F50D}");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "input", 3);
        \u0275\u0275template(5, FilterBarComponent_button_5_Template, 2, 0, "button", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(6);
        \u0275\u0275template(7, FilterBarComponent_button_7_Template, 2, 0, "button", 5);
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, FilterBarComponent_div_11_Template, 2, 1, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || "Filter");
        \u0275\u0275advance(4);
        \u0275\u0275property("formControl", ctx.ctrl)("placeholder", ctx.placeholder);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ctrl.value);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.hasFilters);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 7, ctx.count), " records");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.chips == null ? null : ctx.chips.length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, DecimalPipe], styles: ["\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 10px 0 4px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 6px;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 1px solid #dde1ea;\n  border-radius: 7px;\n  padding: 0 10px;\n  flex: 1;\n  min-width: 200px;\n  max-width: 340px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.search-input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 12.5px;\n  color: #1a2240;\n  padding: 7px 0;\n  flex: 1;\n  font-family: inherit;\n}\n.clear-x[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 14px;\n  padding: 0;\n}\n.clear-all[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #dc2626;\n  font-size: 12px;\n  font-family: inherit;\n  padding: 4px 6px;\n}\n.rec-count[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-left: auto;\n  white-space: nowrap;\n}\n.chip-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-bottom: 8px;\n}\n.chip-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  font-size: 11.5px;\n  font-weight: 600;\n}\n.chip-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #1d4ed8;\n  font-size: 13px;\n  padding: 0;\n  line-height: 1;\n}\n/*# sourceMappingURL=shared-components.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterBarComponent, [{
    type: Component,
    args: [{ selector: "app-filter-bar", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `
  <div class="filter-bar" role="search" [attr.aria-label]="ariaLabel||'Filter'">
    <div class="search-wrap">
      <span class="search-icon" aria-hidden="true">\u{1F50D}</span>
      <input [formControl]="ctrl" type="search" [placeholder]="placeholder" class="search-input" autocomplete="off">
      <button *ngIf="ctrl.value" class="clear-x" (click)="ctrl.reset('')" aria-label="Clear">\u2715</button>
    </div>
    <ng-content></ng-content>
    <button *ngIf="hasFilters" class="clear-all" (click)="clearAll.emit()" aria-label="Clear all">\u2715 Clear</button>
    <span class="rec-count" aria-live="polite">{{ count | number }} records</span>
  </div>
  <div class="chip-bar" *ngIf="chips?.length">
    <span class="chip-item" *ngFor="let c of chips; let i=index">
      {{ c.label }}<button (click)="removeChip.emit(i)" [attr.aria-label]="'Remove '+c.label">\u2715</button>
    </span>
  </div>`, styles: ["/* angular:styles/component:css;efcd65e43914a49b53372b600a3af456bea20933d8985545221a393c0d26dd3a;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/shared/components/shared-components.ts */\n.filter-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  padding: 10px 0 4px;\n  border-bottom: 1px solid #e2e8f0;\n  margin-bottom: 6px;\n}\n.search-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 1px solid #dde1ea;\n  border-radius: 7px;\n  padding: 0 10px;\n  flex: 1;\n  min-width: 200px;\n  max-width: 340px;\n}\n.search-icon {\n  color: #94a3b8;\n  font-size: 13px;\n}\n.search-input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 12.5px;\n  color: #1a2240;\n  padding: 7px 0;\n  flex: 1;\n  font-family: inherit;\n}\n.clear-x {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #94a3b8;\n  font-size: 14px;\n  padding: 0;\n}\n.clear-all {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #dc2626;\n  font-size: 12px;\n  font-family: inherit;\n  padding: 4px 6px;\n}\n.rec-count {\n  font-size: 11.5px;\n  color: #64748b;\n  margin-left: auto;\n  white-space: nowrap;\n}\n.chip-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  margin-bottom: 8px;\n}\n.chip-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #dbeafe;\n  color: #1d4ed8;\n  font-size: 11.5px;\n  font-weight: 600;\n}\n.chip-item button {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: #1d4ed8;\n  font-size: 13px;\n  padding: 0;\n  line-height: 1;\n}\n/*# sourceMappingURL=shared-components.css.map */\n"] }]
  }], null, { placeholder: [{
    type: Input
  }], ariaLabel: [{
    type: Input
  }], count: [{
    type: Input
  }], chips: [{
    type: Input
  }], hasFilters: [{
    type: Input
  }], searchChange: [{
    type: Output
  }], removeChip: [{
    type: Output
  }], clearAll: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterBarComponent, { className: "FilterBarComponent", filePath: "src/app/shared/components/shared-components.ts", lineNumber: 120 });
})();
var VersionHistoryComponent = class _VersionHistoryComponent {
  constructor() {
    this.versions = [];
    this.loading = false;
  }
  static {
    this.\u0275fac = function VersionHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VersionHistoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VersionHistoryComponent, selectors: [["app-version-history"]], inputs: { versions: "versions", loading: "loading" }, decls: 4, vars: 3, consts: [[1, "ver-shell"], ["class", "ver-empty", 4, "ngIf"], ["class", "ver-timeline", "role", "list", 4, "ngIf"], [1, "ver-empty"], ["role", "list", 1, "ver-timeline"], ["class", "ver-entry", "role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem", 1, "ver-entry"], ["aria-hidden", "true", 1, "ver-dot"], [1, "ver-card"], [1, "ver-head"], [1, "ver-num"], [1, "ver-who"], [1, "ver-when"], [1, "ver-sum"]], template: function VersionHistoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, VersionHistoryComponent_div_1_Template, 2, 0, "div", 1)(2, VersionHistoryComponent_div_2_Template, 2, 0, "div", 1)(3, VersionHistoryComponent_div_3_Template, 2, 1, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading && !(ctx.versions == null ? null : ctx.versions.length));
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.versions == null ? null : ctx.versions.length);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe], styles: ['\n.ver-shell[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.ver-empty[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.ver-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 22px;\n}\n.ver-timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 7px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e2e8f0;\n}\n.ver-entry[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n  position: relative;\n}\n.ver-dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #2563eb;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 2px #e2e8f0;\n  position: absolute;\n  left: -19px;\n  top: 4px;\n  flex-shrink: 0;\n}\n.ver-card[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 8px 12px;\n}\n.ver-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 3px;\n}\n.ver-num[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  background: #e2e8f0;\n  color: #475569;\n  padding: 1px 7px;\n  border-radius: 10px;\n}\n.ver-who[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a2240;\n}\n.ver-when[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-left: auto;\n}\n.ver-sum[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n}\n/*# sourceMappingURL=shared-components.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VersionHistoryComponent, [{
    type: Component,
    args: [{ selector: "app-version-history", standalone: true, imports: [CommonModule], template: `
  <div class="ver-shell">
    <div *ngIf="loading" class="ver-empty">Loading version history\u2026</div>
    <div *ngIf="!loading&&!versions?.length" class="ver-empty">No version history found.</div>
    <div class="ver-timeline" *ngIf="versions?.length" role="list">
      <div class="ver-entry" *ngFor="let v of versions" role="listitem">
        <div class="ver-dot" aria-hidden="true"></div>
        <div class="ver-card">
          <div class="ver-head">
            <span class="ver-num">v{{ v.version }}</span>
            <span class="ver-who">{{ v.changedBy||'System' }}</span>
            <span class="ver-when">{{ v.createdAt | date:'dd MMM yyyy HH:mm' }}</span>
          </div>
          <div class="ver-sum">{{ v.changeSummary||'Record updated' }}</div>
        </div>
      </div>
    </div>
  </div>`, styles: ['/* angular:styles/component:css;7bd53b297630fb2d392cefb127d214c45af636d3eda7b0f4341b359f7c18fafb;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/shared/components/shared-components.ts */\n.ver-shell {\n  padding: 4px 0;\n}\n.ver-empty {\n  padding: 20px;\n  text-align: center;\n  color: #94a3b8;\n  font-size: 12.5px;\n}\n.ver-timeline {\n  position: relative;\n  padding-left: 22px;\n}\n.ver-timeline::before {\n  content: "";\n  position: absolute;\n  left: 7px;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #e2e8f0;\n}\n.ver-entry {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n  position: relative;\n}\n.ver-dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #2563eb;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 2px #e2e8f0;\n  position: absolute;\n  left: -19px;\n  top: 4px;\n  flex-shrink: 0;\n}\n.ver-card {\n  flex: 1;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 7px;\n  padding: 8px 12px;\n}\n.ver-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 3px;\n}\n.ver-num {\n  font-size: 10px;\n  font-weight: 700;\n  background: #e2e8f0;\n  color: #475569;\n  padding: 1px 7px;\n  border-radius: 10px;\n}\n.ver-who {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1a2240;\n}\n.ver-when {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-left: auto;\n}\n.ver-sum {\n  font-size: 12px;\n  color: #64748b;\n}\n/*# sourceMappingURL=shared-components.css.map */\n'] }]
  }], null, { versions: [{
    type: Input
  }], loading: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VersionHistoryComponent, { className: "VersionHistoryComponent", filePath: "src/app/shared/components/shared-components.ts", lineNumber: 178 });
})();

export {
  StageBadgeComponent,
  PaginatorComponent,
  FilterBarComponent,
  VersionHistoryComponent
};
//# sourceMappingURL=chunk-U4P3JNUZ.js.map
