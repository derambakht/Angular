import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { take, switchMap, mergeMap, skip, mapTo } from 'rxjs/operators';
import { Category, CategoryService } from 'src/app/services/common/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("myText", {static:false}) paragraph: ElementRef;

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

    const reload$ = this.forceReload$.pipe(switchMap(() => this.getNotifications()));
    const initialNotifications$ = this.getNotifications();
    const show$ = merge(initialNotifications$, reload$).pipe(mapTo(true));
    const hide$ = this.update$.pipe(mapTo(false));
    this.showNotification$ = merge(show$, hide$);
  }

  getNotifications() {
    return this.categoryService.categories.pipe(skip(1));
  }

  getDataOnce() {
    return this.categoryService.categories.pipe(take(1));
  }

  changeElementText(){
    this.paragraph.nativeElement.innerHTML = new Date();
  }

}
