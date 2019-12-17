import { Component, OnInit } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';
import { take, switchMap, mergeMap, skip, mapTo } from 'rxjs/operators';

import { Memoize, DebounceAll } from 'lodash-decorators';
import { Joke, JokeService } from 'src/app/services/common/joke.service';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes$: Observable<Array<Joke>>;
  showNotification$: Observable<boolean>;
  update$ = new Subject<void>();
  forceReload$ = new Subject<void>();

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    const initialJokes$ = this.getDataOnce();

    const updates$ = merge(this.update$, this.forceReload$).pipe(
      mergeMap(() => this.getDataOnce())
    );

    this.jokes$ = merge(initialJokes$, updates$);

    const reload$ = this.forceReload$.pipe(switchMap(() => this.getNotifications()));
    const initialNotifications$ = this.getNotifications();
    const show$ = merge(initialNotifications$, reload$).pipe(mapTo(true));
    const hide$ = this.update$.pipe(mapTo(false));
    this.showNotification$ = merge(show$, hide$);
  }

  clearCache(){
    DebounceAll();
  }

  getDataOnce() {
    return this.jokeService.jokes.pipe(take(1));
  }

  getNotifications() {
    return this.jokeService.jokes.pipe(skip(1));
  }

  forceReload() {
    this.jokeService.forceReload();
    this.forceReload$.next();
  }

  @Memoize()
  getVotes(id: number) {
    console.log('Memoize getVotes : ' + id);
    return Math.floor(10 + Math.random() * (100 - 10));
  }

  getNumber(){
    const value = this.generateNewValue();
    console.log('Memoize getNumber' );
    console.log(value);
  }

  @Memoize()
  generateNewValue() {
    console.log('Memoize generateNewValue');
    return Math.random();
  }
}