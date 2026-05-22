import { Component, OnInit, OnDestroy, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService, AuthTokenService } from '../core/services/api.service';

interface NavItem { label:string; icon:string; path:string; perm?:string; badge?:string; }
interface NavGroup { heading:string; items:NavItem[]; }

@Component({
  selector: 'app-shell',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  template: `
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
        <button class="signout-btn" (click)="logout()" aria-label="Sign out" title="Sign out">→</button>
      </div>
    </aside>

    <!-- Main -->
    <div class="main-area">

      <!-- Proxy banner -->
      <div class="proxy-banner" *ngIf="auth.isProxy()" role="alert" aria-live="polite">
        <span class="proxy-icon" aria-hidden="true">⇄</span>
        Acting on behalf of <strong>{{ auth.currentUser()?.proxyForName }}</strong>
        &nbsp;·&nbsp; All actions will be attributed accordingly
        <button class="proxy-exit" (click)="auth.exitProxy()" aria-label="Exit proxy mode">Exit Proxy Mode</button>
      </div>

      <!-- Topbar -->
      <header class="topbar" role="banner">
        <div class="topbar-left">
          <button class="collapse-btn" (click)="sidebarCollapsed.set(!sidebarCollapsed())"
            [attr.aria-label]="sidebarCollapsed() ? 'Expand sidebar' : 'Collapse sidebar'"
            [attr.aria-expanded]="!sidebarCollapsed()">
            ☰
          </button>
          <h1 class="page-title">{{ pageTitle() }}</h1>
        </div>
        <div class="topbar-right">
          <!-- Notification bell -->
          <div class="notif-wrap" style="position:relative">
            <button class="icon-btn notif-bell" (click)="notifOpen.set(!notifOpen())"
              aria-label="Notifications" [attr.aria-expanded]="notifOpen()">
              🔔
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
  `,
  styles: [`
    :root {
      --pc-blue:#00aeef; --pc-gold:#f5a800;
      --bg:#f0f2f7; --bg2:#fff; --bg3:#f5f7fb;
      --border:#dde2ee; --text:#1a2240; --text2:#5a6b8a; --text3:#8a9bb8;
      --accent:#2563eb; --green2:#16a34a; --amber2:#d97706; --red2:#dc2626;
      --sidebar-w:220px; --topbar-h:52px;
    }
    *{box-sizing:border-box;margin:0;padding:0;}
    .app-shell{display:flex;height:100vh;overflow:hidden;font-family:'Inter',system-ui,sans-serif;background:var(--bg);}

    /* Sidebar */
    .sidebar{width:var(--sidebar-w);flex-shrink:0;background:var(--bg2);border-right:1px solid var(--border);display:flex;flex-direction:column;transition:width .2s;overflow:hidden;}
    .sidebar.collapsed{width:52px;}
    .sidebar-logo{display:flex;align-items:center;gap:10px;padding:10px 12px 8px;border-bottom:1px solid var(--border);background:linear-gradient(135deg,#f0f7ff,#fff);flex-shrink:0;}
    .pc-logo{flex-shrink:0;}
    .logo-name{font-size:11px;font-weight:800;color:#0f172a;letter-spacing:-.2px;line-height:1.2;}
    .logo-sub{font-size:9px;color:#64748b;font-weight:600;text-transform:uppercase;letter-spacing:.5px;}
    .sidebar-nav{flex:1;overflow-y:auto;padding:6px 0;}
    .nav-group-label{font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--text3);padding:10px 14px 4px;}
    .nav-item{display:flex;align-items:center;gap:9px;padding:8px 14px;color:var(--text2);text-decoration:none;font-size:13px;font-weight:500;border-radius:0;transition:all .12s;border-left:3px solid transparent;}
    .nav-item:hover{background:var(--bg3);color:var(--text);}
    .nav-item.active{background:rgba(37,99,235,.07);color:var(--accent);font-weight:700;border-left-color:var(--accent);}
    .nav-icon{font-size:15px;flex-shrink:0;width:18px;text-align:center;}
    .sidebar-user{display:flex;align-items:center;gap:8px;padding:10px 12px;border-top:1px solid var(--border);background:var(--bg3);}
    .user-avatar{width:28px;height:28px;border-radius:50%;color:#fff;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;}
    .user-name{font-size:12px;font-weight:600;color:var(--text);}
    .user-role{font-size:10.5px;color:var(--text3);}
    .signout-btn{margin-left:auto;background:transparent;border:none;cursor:pointer;color:var(--text3);font-size:14px;padding:3px;}
    .signout-btn:hover{color:var(--red2);}
    .collapse-btn{background:transparent;border:none;cursor:pointer;font-size:16px;color:var(--text2);padding:4px 8px;border-radius:5px;}
    .collapse-btn:hover{background:var(--bg3);}

    /* Topbar */
    .main-area{flex:1;display:flex;flex-direction:column;overflow:hidden;}
    .topbar{height:var(--topbar-h);display:flex;align-items:center;justify-content:space-between;padding:0 20px;background:var(--bg2);border-bottom:1px solid var(--border);flex-shrink:0;position:relative;}
    .topbar::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--pc-blue),var(--pc-gold));}
    .topbar-left{display:flex;align-items:center;gap:10px;}
    .topbar-right{display:flex;align-items:center;gap:8px;}
    .page-title{font-size:15px;font-weight:700;color:var(--text);}
    .main-content{flex:1;overflow:auto;padding:20px;}

    /* Proxy banner */
    .proxy-banner{display:flex;align-items:center;gap:8px;padding:8px 20px;background:#fef3c7;border-bottom:2px solid #f59e0b;font-size:12px;color:#78350f;font-weight:600;flex-shrink:0;}
    .proxy-icon{font-size:14px;}
    .proxy-exit{margin-left:auto;padding:3px 10px;border-radius:5px;border:1px solid #f59e0b;background:#fff;color:#92400e;font-size:11px;font-weight:700;cursor:pointer;}
    .proxy-exit:hover{background:#fef3c7;}

    /* Notification */
    .icon-btn{background:transparent;border:1px solid var(--border);border-radius:7px;padding:5px 9px;cursor:pointer;font-size:14px;color:var(--text2);position:relative;transition:all .12s;}
    .icon-btn:hover{background:var(--bg3);}
    .notif-badge{position:absolute;top:-5px;right:-5px;min-width:16px;height:16px;border-radius:8px;background:var(--red2);color:#fff;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 2px;border:2px solid var(--bg2);}
    .notif-dropdown{position:absolute;top:calc(100% + 8px);right:0;width:300px;background:var(--bg2);border:1px solid var(--border);border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);z-index:200;}
    .notif-head{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;border-bottom:1px solid var(--border);font-size:13px;font-weight:700;color:var(--text);}
    .mark-all{font-size:11px;color:var(--accent);background:transparent;border:none;cursor:pointer;font-weight:600;}
    .notif-empty{padding:20px 14px;font-size:12px;color:var(--text3);text-align:center;}

    @media (max-width:768px){.sidebar{width:52px;}.logo-text,.nav-label,.sidebar-user .user-info{display:none;}}
  `],
})
export class ShellComponent implements OnInit, OnDestroy {
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly sidebarCollapsed = signal(false);
  readonly pageTitle = signal('PC HUB 2.0');
  readonly notifOpen = signal(false);
  readonly unreadCount = signal(0);
  private readonly destroy$ = new Subject<void>();

  readonly navGroups: NavGroup[] = [
    { heading:'Overview', items:[
      { label:'Dashboard', icon:'■', path:'dashboard' },
      { label:'Opportunities', icon:'◉', path:'opportunities' },
    ]},
    { heading:'Finance', items:[
      { label:'Client Invoice', icon:'🧾', path:'invoices/client' },
      { label:'Supplier Invoice', icon:'📄', path:'invoices/supplier' },
    ]},
    { heading:'Projects', items:[
      { label:'Comp. Events', icon:'◆', path:'ce' },
      { label:'Project PI', icon:'◇', path:'project-pi' },
      { label:'Surveys', icon:'★', path:'surveys' },
    ]},
    { heading:'Operations', items:[
      { label:'Activity Center', icon:'⚡', path:'operations/activity' },
      { label:'Pending Actions', icon:'⚑', path:'operations/pending' },
      { label:'Calendar', icon:'📅', path:'operations/calendar' },
    ]},
    { heading:'Reporting', items:[
      { label:'Reports Hub', icon:'📊', path:'reporting' },
      { label:'AI Insights', icon:'🤖', path:'reporting/ai-insights' },
      { label:'Scheduled', icon:'⏱', path:'reporting/scheduled' },
    ]},
    { heading:'Portal', items:[
      { label:'Supplier Portal', icon:'▣', path:'suppliers' },
    ]},
    { heading:'Admin', items:[
      { label:'Master Lookup', icon:'⊛', path:'master-lookup' },
      { label:'Audit Log', icon:'▤', path:'audit' },
    ]},
    { heading:'Administration', items:[
      { label:'Users', icon:'◎', path:'users' },
      { label:'Roles & Permissions', icon:'◑', path:'roles' },
      { label:'Delegations', icon:'⇄', path:'delegations' },
    ]},
  ];

  ngOnInit() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe(() => {
      // Derive page title from current route
      const url = this.router.url;
      const titles: Record<string,string> = {
        '/dashboard':'Dashboard', '/opportunities':'Opportunities', '/invoices/client':'Client Invoices',
        '/invoices/supplier':'Supplier Invoices', '/ce':'Compensation Events',
        '/project-pi':'Project PI Register', '/surveys':'Survey Management',
        '/suppliers':'Supplier Portal', '/master-lookup':'Master Lookup',
        '/audit':'Audit Log', '/users':'User Management',
        '/roles':'Roles & Permissions', '/delegations':'Delegations',
      };
      const key = Object.keys(titles).find(k => url.startsWith(k));
      this.pageTitle.set(key ? titles[key] : 'PC HUB 2.0');
    });

    // Load current user
    this.auth.loadMe().pipe(takeUntil(this.destroy$)).subscribe({ error: () => this.router.navigate(['/auth']) });
  }

  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth']);
  }

  markAllRead() {
    this.unreadCount.set(0);
    this.notifOpen.set(false);
  }
}
