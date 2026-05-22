import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, 
  signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

// ================================================================
// StageBadgeComponent
// ================================================================
@Component({
  selector: 'app-stage-badge',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `<span class="stg-badge" [class]="cls" [attr.aria-label]="status">
    {{ label }}<span *ngIf="stagePercent" class="stg-pct"> · {{ stagePercent }}%</span>
  </span>`,
  styles: [`.stg-badge{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;white-space:nowrap;}
    .stg-lead{background:#f1f5f9;color:#475569;}.stg-probable{background:#dbeafe;color:#1d4ed8;}
    .stg-strong{background:#ede9fe;color:#5b21b6;}.stg-contracted{background:#dcfce7;color:#166534;}
    .stg-started{background:#ccfbf1;color:#0f766e;}.stg-completed{background:#e0f2fe;color:#075985;}
    .stg-pct{font-size:10px;opacity:.8;}`],
})
export class StageBadgeComponent {
  @Input() status = '';
  @Input() stagePercent?: number;
  get label() { return this.status?.replace('StrongProbable','Strong Probable'); }
  get cls() {
    return { 'stg-badge':true,'stg-lead':this.status==='Lead','stg-probable':this.status==='Probable',
      'stg-strong':this.status==='StrongProbable','stg-contracted':this.status==='Contracted',
      'stg-started':this.status==='WorkStarted','stg-completed':this.status==='Completed' };
  }
}

// ================================================================
// PaginatorComponent
// ================================================================
@Component({
  selector: 'app-paginator',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
  <div class="pag-bar" *ngIf="total > 0" role="navigation" aria-label="Pagination">
    <span class="pag-info">{{ from }}–{{ to }} of {{ total | number }}</span>
    <button class="pag-btn" [disabled]="page<=1" (click)="go(page-1)" aria-label="Previous">‹</button>
    <ng-container *ngFor="let p of pages">
      <span *ngIf="p==='…'" class="pag-btn" style="cursor:default">…</span>
      <button *ngIf="p!=='…'" class="pag-btn" [class.active]="p===page" (click)="go(+p)" [attr.aria-label]="'Page '+p">{{ p }}</button>
    </ng-container>
    <button class="pag-btn" [disabled]="page>=totalPages" (click)="go(page+1)" aria-label="Next">›</button>
    <select class="pag-size" (change)="onSz($event)" [value]="pageSize" aria-label="Rows per page">
      <option *ngFor="let n of [10,20,50,100]; trackBy: trkIdx" [value]="n">{{ n }} / page</option>
    </select>
  </div>`,
  styles: [`.pag-bar{display:flex;align-items:center;gap:4px;padding:10px 12px;flex-wrap:wrap;border-top:1px solid #e2e8f0;}
    .pag-info{font-size:11.5px;color:#64748b;margin-right:6px;}
    .pag-btn{min-width:32px;height:30px;border-radius:6px;border:1px solid #dde2ee;background:#fff;cursor:pointer;font-size:12px;color:#5a6b8a;display:inline-flex;align-items:center;justify-content:center;padding:0 6px;transition:all .12s;}
    .pag-btn:hover:not(:disabled){background:#f5f7fb;}.pag-btn.active{background:#2563eb;color:#fff;border-color:#2563eb;font-weight:700;}
    .pag-btn:disabled{opacity:.4;cursor:not-allowed;}
    .pag-size{padding:4px 8px;border-radius:5px;border:1px solid #dde2ee;font-size:11.5px;margin-left:6px;background:#fff;cursor:pointer;}`],
})
export class PaginatorComponent {
  @Input() total = 0;
  @Input() page = 1;
  @Input() pageSize = 20;
  @Output() pageChange = new EventEmitter<{page:number;pageSize:number}>();

  get totalPages() { return Math.max(1, Math.ceil(this.total/this.pageSize)); }
  get from() { return this.total===0?0:(this.page-1)*this.pageSize+1; }
  get to()   { return Math.min(this.page*this.pageSize, this.total); }
  get pages(): (number|string)[] {
    const tp=this.totalPages, cur=this.page, r:(number|string)[]=[];
    for(let i=1;i<=tp;i++){
      if(i===1||i===tp||Math.abs(i-cur)<=2) r.push(i);
      else if(r[r.length-1]!=='…') r.push('…');
    }
    return r;
  }
  go(p:number) { if(p>=1&&p<=this.totalPages) this.pageChange.emit({page:p,pageSize:this.pageSize}); }
  onSz(e:Event) { this.pageChange.emit({page:1,pageSize:+((e.target as HTMLSelectElement).value)}); }
}

// ================================================================
// FilterBarComponent
// ================================================================
export interface FilterChip { field:string; value:string; label:string; }

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <div class="filter-bar" role="search" [attr.aria-label]="ariaLabel||'Filter'">
    <div class="search-wrap">
      <span class="search-icon" aria-hidden="true">🔍</span>
      <input [formControl]="ctrl" type="search" [placeholder]="placeholder" class="search-input" autocomplete="off">
      <button *ngIf="ctrl.value" class="clear-x" (click)="ctrl.reset('')" aria-label="Clear">✕</button>
    </div>
    <ng-content></ng-content>
    <button *ngIf="hasFilters" class="clear-all" (click)="clearAll.emit()" aria-label="Clear all">✕ Clear</button>
    <span class="rec-count" aria-live="polite">{{ count | number }} records</span>
  </div>
  <div class="chip-bar" *ngIf="chips?.length">
    <span class="chip-item" *ngFor="let c of chips; let i=index">
      {{ c.label }}<button (click)="removeChip.emit(i)" [attr.aria-label]="'Remove '+c.label">✕</button>
    </span>
  </div>`,
  styles: [`.filter-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:10px 0 4px;border-bottom:1px solid #e2e8f0;margin-bottom:6px;}
    .search-wrap{display:flex;align-items:center;gap:6px;background:#fff;border:1px solid #dde1ea;border-radius:7px;padding:0 10px;flex:1;min-width:200px;max-width:340px;}
    .search-icon{color:#94a3b8;font-size:13px;}.search-input{border:none;outline:none;background:transparent;font-size:12.5px;color:#1a2240;padding:7px 0;flex:1;font-family:inherit;}
    .clear-x{background:transparent;border:none;cursor:pointer;color:#94a3b8;font-size:14px;padding:0;}
    .clear-all{background:transparent;border:none;cursor:pointer;color:#dc2626;font-size:12px;font-family:inherit;padding:4px 6px;}
    .rec-count{font-size:11.5px;color:#64748b;margin-left:auto;white-space:nowrap;}
    .chip-bar{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px;}
    .chip-item{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:12px;background:#dbeafe;color:#1d4ed8;font-size:11.5px;font-weight:600;}
    .chip-item button{background:transparent;border:none;cursor:pointer;color:#1d4ed8;font-size:13px;padding:0;line-height:1;}`],
})
export class FilterBarComponent implements OnInit, OnDestroy {
  @Input() placeholder = 'Search…';
  @Input() ariaLabel = '';
  @Input() count = 0;
  @Input() chips: FilterChip[] = [];
  @Input() hasFilters = false;
  @Output() searchChange = new EventEmitter<string>();
  @Output() removeChip = new EventEmitter<number>();
  @Output() clearAll = new EventEmitter<void>();

  readonly ctrl = new FormControl('');
  private readonly destroy$ = new Subject<void>();

  ngOnInit() {
    this.ctrl.valueChanges.pipe(
      debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$),
    ).subscribe(v => this.searchChange.emit(v||''));
  }
  ngOnDestroy() { this.destroy$.next(); this.destroy$.complete(); }
  reset() { this.ctrl.reset(''); }
}

// ================================================================
// VersionHistoryComponent
// ================================================================
@Component({
  selector: 'app-version-history',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="ver-shell">
    <div *ngIf="loading" class="ver-empty">Loading version history…</div>
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
  </div>`,
  styles: [`.ver-shell{padding:4px 0;}.ver-empty{padding:20px;text-align:center;color:#94a3b8;font-size:12.5px;}
    .ver-timeline{position:relative;padding-left:22px;}
    .ver-timeline::before{content:'';position:absolute;left:7px;top:0;bottom:0;width:2px;background:#e2e8f0;}
    .ver-entry{display:flex;gap:10px;margin-bottom:10px;position:relative;}
    .ver-dot{width:12px;height:12px;border-radius:50%;background:#2563eb;border:2px solid #fff;box-shadow:0 0 0 2px #e2e8f0;position:absolute;left:-19px;top:4px;flex-shrink:0;}
    .ver-card{flex:1;background:#f8fafc;border:1px solid #e2e8f0;border-radius:7px;padding:8px 12px;}
    .ver-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:3px;}
    .ver-num{font-size:10px;font-weight:700;background:#e2e8f0;color:#475569;padding:1px 7px;border-radius:10px;}
    .ver-who{font-size:12px;font-weight:600;color:#1a2240;}.ver-when{font-size:11px;color:#94a3b8;margin-left:auto;}
    .ver-sum{font-size:12px;color:#64748b;}`],
})
export class VersionHistoryComponent {
  @Input() versions: any[] = [];
  @Input() loading = false;
}
