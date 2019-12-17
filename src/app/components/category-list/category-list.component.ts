import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { take, switchMap, mergeMap, skip, mapTo } from 'rxjs/operators';
import { Category, CategoryService } from 'src/app/services/common/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories$: Observable<Array<Category>>;
  showNotification$: Observable<boolean>;
  update$ = new Subject<void>();
  forceReload$ = new Subject<void>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    const initialCategories$ = this.getDataOnce();

    const updates$ = merge(this.update$, this.forceReload$).pipe(
      mergeMap(() => this.getDataOnce())
    );

    this.categories$ = merge(initialCategories$, updates$);

    // const reload$ = this.forceReload$.pipe(switchMap(() => this.getNotifications()));
    // const initialNotifications$ = this.getNotifications();
    // const show$ = merge(initialNotifications$, reload$).pipe(mapTo(true));
    // const hide$ = this.update$.pipe(mapTo(false));
    // this.showNotification$ = merge(show$, hide$);
  }

  getDataOnce() {
    return this.categoryService.categories.pipe(take(1));
  }

}
