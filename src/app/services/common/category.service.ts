import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, timer } from 'rxjs';
import { switchMap, shareReplay, map, takeUntil } from 'rxjs/operators';

export interface Category {
  categoryId: number;
  categoryName: string;
  description: string;
}


const API_ENDPOINT = 'http://apitester.ir/api/Categories';
const REFRESH_INTERVAL = 30000;
const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private cache$: Observable<Array<Category>>;
  private reload$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get categories() {
    if (!this.cache$) {
      const timer$ = timer(0, REFRESH_INTERVAL);
          
      this.cache$ = timer$.pipe(
        switchMap(() => this.requestCategories()),
        takeUntil(this.reload$),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  forceReload() {
    this.reload$.next();
    this.cache$ = null;
  }

  private requestCategories() {
    return this.http.get<Category[]>(API_ENDPOINT).pipe(
      map(response => response)
    );
  }
}