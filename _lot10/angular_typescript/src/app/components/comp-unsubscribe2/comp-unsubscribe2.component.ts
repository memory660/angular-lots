import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-comp-unsubscribe2',
  standalone: true,
  imports: [],
  templateUrl: './comp-unsubscribe2.component.html',
  styleUrl: './comp-unsubscribe2.component.scss'
})
export class CompUnsubscribe2Component implements OnInit, OnDestroy {

  notifier = new Subject<void>()

  ngOnInit() {
    const observable$ = of([]);
    observable$
      .pipe(takeUntil(this.notifier))
      .subscribe(x => console.log(x));
  }

  ngOnDestroy() {
    this.notifier.next()
    this.notifier.complete()
  }
}
