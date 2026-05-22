import {
  AuthService,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  NavigationEnd,
  NgIf,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Subject,
  filter,
  inject,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YNIEOD7T.js";

// src/app/layout/shell.component.ts
var _c0 = () => ({ exact: false });
var _forTrack0 = ($index, $item) => $item.heading;
var _forTrack1 = ($index, $item) => $item.path;
function ShellComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2, "PERFECT CIRCLE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25);
    \u0275\u0275text(4, "PC HUB 2.0");
    \u0275\u0275elementEnd()();
  }
}
function ShellComponent_For_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r1.heading);
  }
}
function ShellComponent_For_11_For_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
function ShellComponent_For_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27);
    \u0275\u0275element(1, "span", 29);
    \u0275\u0275template(2, ShellComponent_For_11_For_2_span_2_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", item_r2.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275attribute("aria-label", item_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", item_r2.icon, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.sidebarCollapsed());
  }
}
function ShellComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ShellComponent_For_11_div_0_Template, 2, 1, "div", 26);
    \u0275\u0275repeaterCreate(1, ShellComponent_For_11_For_2_Template, 3, 6, "a", 27, _forTrack1);
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.sidebarCollapsed());
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r1.items);
  }
}
function ShellComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 34)(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 37);
    \u0275\u0275listener("click", function ShellComponent_div_12_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275text(9, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ((tmp_1_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_1_0.avatarColor) || "#3d7eff");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_2_0.initials, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_3_0.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_4_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_4_0.roles == null ? null : tmp_4_0.roles[0] == null ? null : tmp_4_0.roles[0].role == null ? null : tmp_4_0.roles[0].role.name) || "");
  }
}
function ShellComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2, "\u21C4");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Acting on behalf of ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " \xA0\xB7\xA0 All actions will be attributed accordingly ");
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275listener("click", function ShellComponent_div_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.auth.exitProxy());
    });
    \u0275\u0275text(8, "Exit Proxy Mode");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx_r2.auth.currentUser()) == null ? null : tmp_1_0.proxyForName);
  }
}
function ShellComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.unreadCount(), " ");
  }
}
function ShellComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span");
    \u0275\u0275text(3, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 44);
    \u0275\u0275listener("click", function ShellComponent_div_26_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markAllRead());
    });
    \u0275\u0275text(5, "Mark all read");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 45);
    \u0275\u0275text(7, "Open Activity Center for full notification history");
    \u0275\u0275elementEnd()();
  }
}
var ShellComponent = class _ShellComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.sidebarCollapsed = signal(false, ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : (
      /* istanbul ignore next */
      []
    ));
    this.pageTitle = signal("PC HUB 2.0", ...ngDevMode ? [{ debugName: "pageTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.notifOpen = signal(false, ...ngDevMode ? [{ debugName: "notifOpen" }] : (
      /* istanbul ignore next */
      []
    ));
    this.unreadCount = signal(0, ...ngDevMode ? [{ debugName: "unreadCount" }] : (
      /* istanbul ignore next */
      []
    ));
    this.destroy$ = new Subject();
    this.navGroups = [
      { heading: "Overview", items: [
        { label: "Dashboard", icon: "\u25A0", path: "dashboard" },
        { label: "Opportunities", icon: "\u25C9", path: "opportunities" }
      ] },
      { heading: "Finance", items: [
        { label: "Client Invoice", icon: "\u{1F9FE}", path: "invoices/client" },
        { label: "Supplier Invoice", icon: "\u{1F4C4}", path: "invoices/supplier" }
      ] },
      { heading: "Projects", items: [
        { label: "Comp. Events", icon: "\u25C6", path: "ce" },
        { label: "Project PI", icon: "\u25C7", path: "project-pi" },
        { label: "Surveys", icon: "\u2605", path: "surveys" }
      ] },
      { heading: "Operations", items: [
        { label: "Activity Center", icon: "\u26A1", path: "operations/activity" },
        { label: "Pending Actions", icon: "\u2691", path: "operations/pending" },
        { label: "Calendar", icon: "\u{1F4C5}", path: "operations/calendar" }
      ] },
      { heading: "Reporting", items: [
        { label: "Reports Hub", icon: "\u{1F4CA}", path: "reporting" },
        { label: "AI Insights", icon: "\u{1F916}", path: "reporting/ai-insights" },
        { label: "Scheduled", icon: "\u23F1", path: "reporting/scheduled" }
      ] },
      { heading: "Portal", items: [
        { label: "Supplier Portal", icon: "\u25A3", path: "suppliers" }
      ] },
      { heading: "Admin", items: [
        { label: "Master Lookup", icon: "\u229B", path: "master-lookup" },
        { label: "Audit Log", icon: "\u25A4", path: "audit" }
      ] },
      { heading: "Administration", items: [
        { label: "Users", icon: "\u25CE", path: "users" },
        { label: "Roles & Permissions", icon: "\u25D1", path: "roles" },
        { label: "Delegations", icon: "\u21C4", path: "delegations" }
      ] }
    ];
  }
  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => {
      const url = this.router.url;
      const titles = {
        "/dashboard": "Dashboard",
        "/opportunities": "Opportunities",
        "/invoices/client": "Client Invoices",
        "/invoices/supplier": "Supplier Invoices",
        "/ce": "Compensation Events",
        "/project-pi": "Project PI Register",
        "/surveys": "Survey Management",
        "/suppliers": "Supplier Portal",
        "/master-lookup": "Master Lookup",
        "/audit": "Audit Log",
        "/users": "User Management",
        "/roles": "Roles & Permissions",
        "/delegations": "Delegations"
      };
      const key = Object.keys(titles).find((k) => url.startsWith(k));
      this.pageTitle.set(key ? titles[key] : "PC HUB 2.0");
    });
    this.auth.loadMe().pipe(takeUntil(this.destroy$)).subscribe({ error: () => this.router.navigate(["/auth"]) });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  logout() {
    this.auth.logout();
    this.router.navigate(["/auth"]);
  }
  markAllRead() {
    this.unreadCount.set(0);
    this.notifOpen.set(false);
  }
  static {
    this.\u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], decls: 29, vars: 11, consts: [[1, "app-shell"], ["role", "navigation", "aria-label", "Main navigation", 1, "sidebar"], ["aria-label", "Perfect Circle PC HUB 2.0", 1, "sidebar-logo"], ["aria-hidden", "true", 1, "pc-logo"], ["width", "36", "height", "36", "viewBox", "0 0 100 100", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M85,50 A35,35 0 1,0 85,52", "fill", "none", "stroke", "#00aeef", "stroke-width", "11", "stroke-linecap", "round"], ["d", "M36,68 A20,20 0 0,0 64,68", "fill", "none", "stroke", "#f5a800", "stroke-width", "9", "stroke-linecap", "round"], ["cx", "27", "cy", "50", "r", "7", "fill", "#00aeef"], ["class", "logo-text", 4, "ngIf"], ["role", "menubar", 1, "sidebar-nav"], ["class", "sidebar-user", 4, "ngIf"], [1, "main-area"], ["class", "proxy-banner", "role", "alert", "aria-live", "polite", 4, "ngIf"], ["role", "banner", 1, "topbar"], [1, "topbar-left"], [1, "collapse-btn", 3, "click"], [1, "page-title"], [1, "topbar-right"], [1, "notif-wrap", 2, "position", "relative"], ["aria-label", "Notifications", 1, "icon-btn", "notif-bell", 3, "click"], ["class", "notif-badge", "aria-live", "polite", 4, "ngIf"], ["class", "notif-dropdown", "role", "dialog", "aria-label", "Notifications", 4, "ngIf"], ["id", "main-content", "tabindex", "-1", 1, "main-content"], [1, "logo-text"], [1, "logo-name"], [1, "logo-sub"], ["class", "nav-group-label", 4, "ngIf"], ["routerLinkActive", "active", "role", "menuitem", 1, "nav-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-group-label"], ["aria-hidden", "true", 1, "nav-icon", 3, "innerHTML"], ["class", "nav-label", 4, "ngIf"], [1, "nav-label"], [1, "sidebar-user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["aria-label", "Sign out", "title", "Sign out", 1, "signout-btn", 3, "click"], ["role", "alert", "aria-live", "polite", 1, "proxy-banner"], ["aria-hidden", "true", 1, "proxy-icon"], ["aria-label", "Exit proxy mode", 1, "proxy-exit", 3, "click"], ["aria-live", "polite", 1, "notif-badge"], ["role", "dialog", "aria-label", "Notifications", 1, "notif-dropdown"], [1, "notif-head"], [1, "mark-all", 3, "click"], [1, "notif-empty"]], template: function ShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 4);
        \u0275\u0275element(5, "path", 5)(6, "path", 6)(7, "circle", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, ShellComponent_div_8_Template, 5, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(9, "nav", 9);
        \u0275\u0275repeaterCreate(10, ShellComponent_For_11_Template, 3, 1, null, null, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, ShellComponent_div_12_Template, 10, 5, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11);
        \u0275\u0275template(14, ShellComponent_div_14_Template, 9, 1, "div", 12);
        \u0275\u0275elementStart(15, "header", 13)(16, "div", 14)(17, "button", 15);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_17_listener() {
          return ctx.sidebarCollapsed.set(!ctx.sidebarCollapsed());
        });
        \u0275\u0275text(18, " \u2630 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "h1", 16);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 17)(22, "div", 18)(23, "button", 19);
        \u0275\u0275listener("click", function ShellComponent_Template_button_click_23_listener() {
          return ctx.notifOpen.set(!ctx.notifOpen());
        });
        \u0275\u0275text(24, " \u{1F514} ");
        \u0275\u0275template(25, ShellComponent_span_25_Template, 2, 1, "span", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(26, ShellComponent_div_26_Template, 8, 0, "div", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "main", 22);
        \u0275\u0275element(28, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classProp("collapsed", ctx.sidebarCollapsed());
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", !ctx.sidebarCollapsed());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.navGroups);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.auth.currentUser() && !ctx.sidebarCollapsed());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.auth.isProxy());
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-label", ctx.sidebarCollapsed() ? "Expand sidebar" : "Collapse sidebar")("aria-expanded", !ctx.sidebarCollapsed());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.pageTitle());
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-expanded", ctx.notifOpen());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.unreadCount() || 0) > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.notifOpen());
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ['\n[_ngcontent-%COMP%]:root {\n  --pc-blue:#00aeef;\n  --pc-gold:#f5a800;\n  --bg:#f0f2f7;\n  --bg2:#fff;\n  --bg3:#f5f7fb;\n  --border:#dde2ee;\n  --text:#1a2240;\n  --text2:#5a6b8a;\n  --text3:#8a9bb8;\n  --accent:#2563eb;\n  --green2:#16a34a;\n  --amber2:#d97706;\n  --red2:#dc2626;\n  --sidebar-w:220px;\n  --topbar-h:52px;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n  background: var(--bg);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  flex-shrink: 0;\n  background: var(--bg2);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  transition: width .2s;\n  overflow: hidden;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 52px;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px 8px;\n  border-bottom: 1px solid var(--border);\n  background:\n    linear-gradient(\n      135deg,\n      #f0f7ff,\n      #fff);\n  flex-shrink: 0;\n}\n.pc-logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.logo-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -.2px;\n  line-height: 1.2;\n}\n.logo-sub[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #64748b;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px 0;\n}\n.nav-group-label[_ngcontent-%COMP%] {\n  font-size: 9.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .6px;\n  color: var(--text3);\n  padding: 10px 14px 4px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 14px;\n  color: var(--text2);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  border-radius: 0;\n  transition: all .12s;\n  border-left: 3px solid transparent;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg3);\n  color: var(--text);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(37, 99, 235, .07);\n  color: var(--accent);\n  font-weight: 700;\n  border-left-color: var(--accent);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  flex-shrink: 0;\n  width: 18px;\n  text-align: center;\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-top: 1px solid var(--border);\n  background: var(--bg3);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text);\n}\n.user-role[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  color: var(--text3);\n}\n.signout-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--text3);\n  font-size: 14px;\n  padding: 3px;\n}\n.signout-btn[_ngcontent-%COMP%]:hover {\n  color: var(--red2);\n}\n.collapse-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  color: var(--text2);\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n.collapse-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg3);\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  background: var(--bg2);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  position: relative;\n}\n.topbar[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--pc-blue),\n      var(--pc-gold));\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: 20px;\n}\n.proxy-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 20px;\n  background: #fef3c7;\n  border-bottom: 2px solid #f59e0b;\n  font-size: 12px;\n  color: #78350f;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.proxy-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.proxy-exit[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 3px 10px;\n  border-radius: 5px;\n  border: 1px solid #f59e0b;\n  background: #fff;\n  color: #92400e;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.proxy-exit[_ngcontent-%COMP%]:hover {\n  background: #fef3c7;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  padding: 5px 9px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text2);\n  position: relative;\n  transition: all .12s;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg3);\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  min-width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  background: var(--red2);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2px;\n  border: 2px solid var(--bg2);\n}\n.notif-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 300px;\n  background: var(--bg2);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .12);\n  z-index: 200;\n}\n.notif-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text);\n}\n.mark-all[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--accent);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  padding: 20px 14px;\n  font-size: 12px;\n  color: var(--text3);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 52px;\n  }\n  .logo-text[_ngcontent-%COMP%], \n   .nav-label[_ngcontent-%COMP%], \n   .sidebar-user[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */'], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellComponent, [{
    type: Component,
    args: [{ selector: "app-shell", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive], template: `
  <div class="app-shell">

    <!-- Sidebar -->
    <aside class="sidebar" [class.collapsed]="sidebarCollapsed()" role="navigation" aria-label="Main navigation">
      <div class="sidebar-logo" aria-label="Perfect Circle PC HUB 2.0">
        <div class="pc-logo" aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M85,50 A35,35 0 1,0 85,52" fill="none" stroke="#00aeef" stroke-width="11" stroke-linecap="round"/>
            <path d="M36,68 A20,20 0 0,0 64,68" fill="none" stroke="#f5a800" stroke-width="9" stroke-linecap="round"/>
            <circle cx="27" cy="50" r="7" fill="#00aeef"/>
          </svg>
        </div>
        <div class="logo-text" *ngIf="!sidebarCollapsed()">
          <div class="logo-name">PERFECT CIRCLE</div>
          <div class="logo-sub">PC HUB 2.0</div>
        </div>
      </div>

      <nav class="sidebar-nav" role="menubar">
        @for (group of navGroups; track group.heading) {
          <div class="nav-group-label" *ngIf="!sidebarCollapsed()">{{ group.heading }}</div>
          @for (item of group.items; track item.path) {
            <a class="nav-item" [routerLink]="item.path" routerLinkActive="active"
              [routerLinkActiveOptions]="{exact:false}"
              [attr.aria-label]="item.label" role="menuitem">
              <span class="nav-icon" [innerHTML]="item.icon" aria-hidden="true"></span>
              <span class="nav-label" *ngIf="!sidebarCollapsed()">{{ item.label }}</span>
            </a>
          }
        }
      </nav>

      <!-- User card -->
      <div class="sidebar-user" *ngIf="auth.currentUser() && !sidebarCollapsed()">
        <div class="user-avatar" [style.background]="auth.currentUser()?.avatarColor||'#3d7eff'">
          {{ auth.currentUser()?.initials }}
        </div>
        <div class="user-info">
          <div class="user-name">{{ auth.currentUser()?.name }}</div>
          <div class="user-role">{{ auth.currentUser()?.roles?.[0]?.role?.name || '' }}</div>
        </div>
        <button class="signout-btn" (click)="logout()" aria-label="Sign out" title="Sign out">\u2192</button>
      </div>
    </aside>

    <!-- Main -->
    <div class="main-area">

      <!-- Proxy banner -->
      <div class="proxy-banner" *ngIf="auth.isProxy()" role="alert" aria-live="polite">
        <span class="proxy-icon" aria-hidden="true">\u21C4</span>
        Acting on behalf of <strong>{{ auth.currentUser()?.proxyForName }}</strong>
        &nbsp;\xB7&nbsp; All actions will be attributed accordingly
        <button class="proxy-exit" (click)="auth.exitProxy()" aria-label="Exit proxy mode">Exit Proxy Mode</button>
      </div>

      <!-- Topbar -->
      <header class="topbar" role="banner">
        <div class="topbar-left">
          <button class="collapse-btn" (click)="sidebarCollapsed.set(!sidebarCollapsed())"
            [attr.aria-label]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
            [attr.aria-expanded]="!sidebarCollapsed()">
            \u2630
          </button>
          <h1 class="page-title">{{ pageTitle() }}</h1>
        </div>
        <div class="topbar-right">
          <!-- Notification bell -->
          <div class="notif-wrap" style="position:relative">
            <button class="icon-btn notif-bell" (click)="notifOpen.set(!notifOpen())"
              aria-label="Notifications" [attr.aria-expanded]="notifOpen()">
              \u{1F514}
              <span class="notif-badge" *ngIf="(unreadCount() || 0) > 0" aria-live="polite">
                {{ unreadCount() }}
              </span>
            </button>
            <!-- Notification dropdown (simplified) -->
            <div class="notif-dropdown" *ngIf="notifOpen()" role="dialog" aria-label="Notifications">
              <div class="notif-head">
                <span>Notifications</span>
                <button class="mark-all" (click)="markAllRead()">Mark all read</button>
              </div>
              <div class="notif-empty">Open Activity Center for full notification history</div>
            </div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <main class="main-content" id="main-content" tabindex="-1">
        <router-outlet/>
      </main>
    </div>
  </div>
  `, styles: ['/* angular:styles/component:css;1404d08f8c9406ecfb55739ef1cb38c760659fc76652fc646101f3446141cd17;C:\Users\mchauhan\Desktop\Perfect Circle 2.0\Perfect_Circle_2o\pchub-prod/frontend/src/app/layout/shell.component.ts */\n:root {\n  --pc-blue:#00aeef;\n  --pc-gold:#f5a800;\n  --bg:#f0f2f7;\n  --bg2:#fff;\n  --bg3:#f5f7fb;\n  --border:#dde2ee;\n  --text:#1a2240;\n  --text2:#5a6b8a;\n  --text3:#8a9bb8;\n  --accent:#2563eb;\n  --green2:#16a34a;\n  --amber2:#d97706;\n  --red2:#dc2626;\n  --sidebar-w:220px;\n  --topbar-h:52px;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.app-shell {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n  background: var(--bg);\n}\n.sidebar {\n  width: var(--sidebar-w);\n  flex-shrink: 0;\n  background: var(--bg2);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  transition: width .2s;\n  overflow: hidden;\n}\n.sidebar.collapsed {\n  width: 52px;\n}\n.sidebar-logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px 8px;\n  border-bottom: 1px solid var(--border);\n  background:\n    linear-gradient(\n      135deg,\n      #f0f7ff,\n      #fff);\n  flex-shrink: 0;\n}\n.pc-logo {\n  flex-shrink: 0;\n}\n.logo-name {\n  font-size: 11px;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -.2px;\n  line-height: 1.2;\n}\n.logo-sub {\n  font-size: 9px;\n  color: #64748b;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n.sidebar-nav {\n  flex: 1;\n  overflow-y: auto;\n  padding: 6px 0;\n}\n.nav-group-label {\n  font-size: 9.5px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .6px;\n  color: var(--text3);\n  padding: 10px 14px 4px;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 14px;\n  color: var(--text2);\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  border-radius: 0;\n  transition: all .12s;\n  border-left: 3px solid transparent;\n}\n.nav-item:hover {\n  background: var(--bg3);\n  color: var(--text);\n}\n.nav-item.active {\n  background: rgba(37, 99, 235, .07);\n  color: var(--accent);\n  font-weight: 700;\n  border-left-color: var(--accent);\n}\n.nav-icon {\n  font-size: 15px;\n  flex-shrink: 0;\n  width: 18px;\n  text-align: center;\n}\n.sidebar-user {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  border-top: 1px solid var(--border);\n  background: var(--bg3);\n}\n.user-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--text);\n}\n.user-role {\n  font-size: 10.5px;\n  color: var(--text3);\n}\n.signout-btn {\n  margin-left: auto;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--text3);\n  font-size: 14px;\n  padding: 3px;\n}\n.signout-btn:hover {\n  color: var(--red2);\n}\n.collapse-btn {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  color: var(--text2);\n  padding: 4px 8px;\n  border-radius: 5px;\n}\n.collapse-btn:hover {\n  background: var(--bg3);\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.topbar {\n  height: var(--topbar-h);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  background: var(--bg2);\n  border-bottom: 1px solid var(--border);\n  flex-shrink: 0;\n  position: relative;\n}\n.topbar::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--pc-blue),\n      var(--pc-gold));\n}\n.topbar-left {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.page-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--text);\n}\n.main-content {\n  flex: 1;\n  overflow: auto;\n  padding: 20px;\n}\n.proxy-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 20px;\n  background: #fef3c7;\n  border-bottom: 2px solid #f59e0b;\n  font-size: 12px;\n  color: #78350f;\n  font-weight: 600;\n  flex-shrink: 0;\n}\n.proxy-icon {\n  font-size: 14px;\n}\n.proxy-exit {\n  margin-left: auto;\n  padding: 3px 10px;\n  border-radius: 5px;\n  border: 1px solid #f59e0b;\n  background: #fff;\n  color: #92400e;\n  font-size: 11px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.proxy-exit:hover {\n  background: #fef3c7;\n}\n.icon-btn {\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 7px;\n  padding: 5px 9px;\n  cursor: pointer;\n  font-size: 14px;\n  color: var(--text2);\n  position: relative;\n  transition: all .12s;\n}\n.icon-btn:hover {\n  background: var(--bg3);\n}\n.notif-badge {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  min-width: 16px;\n  height: 16px;\n  border-radius: 8px;\n  background: var(--red2);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 2px;\n  border: 2px solid var(--bg2);\n}\n.notif-dropdown {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  width: 300px;\n  background: var(--bg2);\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, .12);\n  z-index: 200;\n}\n.notif-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--border);\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--text);\n}\n.mark-all {\n  font-size: 11px;\n  color: var(--accent);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  font-weight: 600;\n}\n.notif-empty {\n  padding: 20px 14px;\n  font-size: 12px;\n  color: var(--text3);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    width: 52px;\n  }\n  .logo-text,\n  .nav-label,\n  .sidebar-user .user-info {\n    display: none;\n  }\n}\n/*# sourceMappingURL=shell.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/layout/shell.component.ts", lineNumber: 173 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=chunk-IODQLU3G.js.map
