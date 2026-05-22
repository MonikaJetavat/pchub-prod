import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable, throwError, timer, Subject } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { environment } from '../../../environments/environment';

// ── API Service ───────────────────────────────────────────────────
export interface ApiResponse<T> { success:boolean; data:T; timestamp:string; }
export interface PageMeta { total:number; page:number; pageSize:number; pages:number; unreadCount?:number; }
export interface PagedResult<T> { data:T[]; meta:PageMeta; }

@Injectable({ providedIn:'root' })
export class ApiService {
  private readonly base = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}

  get<T>(path: string, params?: Record<string,any>): Observable<T> {
    return this.http.get<ApiResponse<T>>(`${this.base}${path}`, { params:this.p(params) }).pipe(
      map(r => r.data), retry({ count:1, delay:(_,n) => timer(n*500) }), catchError(this.err));
  }
  getList<T>(path: string, q?: Record<string,any>): Observable<PagedResult<T>> {
    return this.http.get<ApiResponse<PagedResult<T>>>(`${this.base}${path}`, { params:this.p(q) }).pipe(
      map(r => r.data), catchError(this.err));
  }
  post<T>(path: string, body: any): Observable<T> {
    return this.http.post<ApiResponse<T>>(`${this.base}${path}`, body).pipe(map(r => r.data), catchError(this.err));
  }
  put<T>(path: string, body: any): Observable<T> {
    return this.http.put<ApiResponse<T>>(`${this.base}${path}`, body).pipe(map(r => r.data), catchError(this.err));
  }
  patch<T>(path: string, body: any): Observable<T> {
    return this.http.patch<ApiResponse<T>>(`${this.base}${path}`, body).pipe(map(r => r.data), catchError(this.err));
  }
  delete(path: string): Observable<void> {
    return this.http.delete<void>(`${this.base}${path}`).pipe(catchError(this.err));
  }
  private p(obj?: Record<string,any>): HttpParams {
    if (!obj) return new HttpParams();
    return Object.entries(obj).filter(([,v]) => v !== null && v !== undefined && v !== '')
      .reduce((p,[k,v]) => p.set(k, String(v)), new HttpParams());
  }
  private err(e: any): Observable<never> {
    return throwError(() => new Error(e?.error?.error?.message || e?.message || 'Request failed'));
  }
}

// ── Auth Token Service ────────────────────────────────────────────
@Injectable({ providedIn:'root' })
export class AuthTokenService {
  private readonly KEY = 'pchub_token';
  private _proxy = signal<string|null>(null);
  readonly proxyUserId = this._proxy.asReadonly();

  getToken(): string|null { return sessionStorage.getItem(this.KEY)||localStorage.getItem(this.KEY); }
  setToken(t: string, persist=false) { (persist?localStorage:sessionStorage).setItem(this.KEY, t); }
  clearToken() { sessionStorage.removeItem(this.KEY); localStorage.removeItem(this.KEY); this._proxy.set(null); }
  setProxy(id: string) { this._proxy.set(id); }
  clearProxy() { this._proxy.set(null); }
}

// ── Auth Service ──────────────────────────────────────────────────
@Injectable({ providedIn:'root' })
export class AuthService {
  private _user = signal<any>(null);
  readonly currentUser = this._user.asReadonly();
  readonly isLoggedIn = computed(() => !!this._user());
  readonly isProxy = computed(() => this._user()?.isProxy === true);

  private readonly api = inject(ApiService);
  private readonly tokens = inject(AuthTokenService);

  loadMe(): Observable<any> {
    return this.api.get<any>('/v1/auth/me').pipe(
      tap(u => this._user.set(u)),
    );
  }
  logout() { this.tokens.clearToken(); this._user.set(null); }
  hasPermission(permission: string): boolean {
    const u = this._user();
    if (!u?.permissions) return false;
    if (u.permissions.all) return true;
    const [mod, action] = permission.split(':');
    return u.permissions[mod]?.includes(action) ?? false;
  }
  activateProxy(userId: string, userName: string) {
    this.tokens.setProxy(userId);
    this._user.update(u => ({...u, isProxy:true, proxyForUserId:userId, proxyForName:userName}));
  }
  exitProxy() {
    this.tokens.clearProxy();
    this._user.update(u => ({...u, isProxy:false, proxyForUserId:null, proxyForName:null}));
  }
}

// ── Auth Guard ────────────────────────────────────────────────────
export const authGuard: CanActivateFn = () => {
  const tokens = inject(AuthTokenService);
  const router = inject(Router);
  if (tokens.getToken()) return true;
  router.navigate(['/auth']);
  return false;
};

// ── Auth Interceptor ──────────────────────────────────────────────
export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const tokens = inject(AuthTokenService);
  const token = tokens.getToken();
  const proxyId = tokens.proxyUserId();
  if (!token) return next(req);
  let headers = req.headers.set('Authorization', `Bearer ${token}`);
  if (proxyId) headers = headers.set('X-Proxy-User-Id', proxyId);
  return next(req.clone({ headers }));
};

// ── Opportunities Service ─────────────────────────────────────────
@Injectable({ providedIn:'root' })
export class OpportunitiesService {
  private _rows = signal<any[]>([]);
  private _total = signal(0);
  private _loading = signal(false);
  readonly rows = this._rows.asReadonly();
  readonly total = this._total.asReadonly();
  readonly loading = this._loading.asReadonly();
  private readonly _refresh$ = new Subject<void>();
  readonly refresh$ = this._refresh$.asObservable();

  private readonly api = inject(ApiService);

  findAll(q: Record<string,any>): Observable<PagedResult<any>> {
    this._loading.set(true);
    return this.api.getList<any>('/v1/opportunities', q).pipe(
      tap(r => { this._rows.set(r.data); this._total.set(r.meta.total); this._loading.set(false); }),
      catchError(e => { this._loading.set(false); return throwError(() => e); }),
    );
  }
  findOne(id: string) { return this.api.get<any>(`/v1/opportunities/${id}`); }
  create(dto: any) { return this.api.post<any>('/v1/opportunities', dto).pipe(tap(() => this._refresh$.next())); }
  update(id: string, dto: any) { return this.api.put<any>(`/v1/opportunities/${id}`, dto).pipe(tap(() => this._refresh$.next())); }
  remove(id: string) { return this.api.delete(`/v1/opportunities/${id}`).pipe(tap(() => this._refresh$.next())); }
  getVersions(id: string) { return this.api.get<any[]>(`/v1/opportunities/${id}/versions`); }
  exportCsv() { return this.api.get<string>('/v1/opportunities/export/csv'); }
}

// ── Notifications Client Service ──────────────────────────────────
@Injectable({ providedIn:'root' })
export class NotificationsClientService {
  private _unread = signal(0);
  readonly unread = this._unread.asReadonly();
  private readonly api = inject(ApiService);

  findMine(q: any) { return this.api.getList<any>('/v1/notifications', q); }
  loadUnread() { return this.api.get<number>('/v1/notifications/unread-count').pipe(tap(n => this._unread.set(+n))); }
  markRead(id: string) { return this.api.patch(`/v1/notifications/${id}/read`, {}).pipe(tap(() => this._unread.update(n => Math.max(0,n-1)))); }
  markAllRead() { return this.api.patch('/v1/notifications/read-all', {}).pipe(tap(() => this._unread.set(0))); }
}

// ── Models ────────────────────────────────────────────────────────
export type OppStatus = 'Lead'|'Probable'|'StrongProbable'|'Contracted'|'WorkStarted'|'Completed';
export type SrpStatus = 'Draft'|'SentForApproval'|'Approved'|'Rejected';
export type InvoiceStatus = 'Draft'|'Pending'|'Paid'|'Overdue'|'Cancelled';

export interface Opportunity {
  id:string; commNum:string; name:string; clientName:string;
  leadId?:string; lead?:{ id:string; name:string; initials:string; avatarColor:string };
  sector?:string; region?:string; status:OppStatus; stagePercent:number;
  value:number; services:string[]; srpStatus:SrpStatus;
  createdAt:string; updatedAt:string;
  _count?:{ ceEvents:number; invoiceSchedules:number; surveys:number };
}
export interface Srp {
  id:string; opportunityId:string; status:SrpStatus;
  clientContactName?:string; clientContactEmail?:string; clientContactTel?:string;
  clientContactPosition?:string; commissionLead?:string; commissionLeadEmail?:string;
  commissionLeadMobile?:string; serviceManager?:string; commissionDesc?:string;
  commissionPostCode?:string; mainContractType?:string;
  startDate?:string; endDate?:string; confidentialityFlag:string;
  hasProgramme:string; hasProjectBrief:string; hasSchemeLayout:string;
  preEngagementRequired:string; projectOverview?:string; tomsRows:any[];
  uploadOwnProgramme:string; deliveryRows:any[];
  srpDeliveryMethod?:string; commercialLead?:string;
  approvedAt?:string; approvedBy?:string;
}
export interface FeeCalculator {
  id:string; opportunityId:string; constructionValue:number; procRoute:string;
  overridePscPct:number; bim:string; necContractForm?:string;
  selectedServices:any[]; timeCharges:any[]; nonSfr:any[]; disbursements:any[]; ceList:any[];
  totalTimeCharges:number; totalExtConsultancy:number; totalDisbursements:number;
  pscFee:number; grandTotal:number;
}
export interface User {
  id:string; name:string; email:string; initials:string; avatarColor?:string;
  status:string; region?:string; businessUnit?:string;
  roles?:{ role:{ id:string; name:string; color?:string } }[];
  permissions?:Record<string,string[]>; isProxy?:boolean; proxyForUserId?:string;
}
export interface Notification {
  id:string; userId:string; type:string; priority:string;
  title:string; body?:string; isRead:boolean; createdAt:string;
}
export interface Delegation {
  id:string; fromUserId:string; toUserId:string; type:string;
  scope:string; status:string; approvalLimit?:number;
  startDate:string; endDate:string;
  fromUser?:{ name:string; initials:string; avatarColor?:string };
  toUser?:{ name:string; initials:string; avatarColor?:string };
}
