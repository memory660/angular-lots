import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store'

import { AppState } from '../state/app.state';
import * as counterActions from '../state/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  counter: number;


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    console.log("ngOnInit", this.store.select('counter'));

    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
      console.log("into subscribe", this.counter);
    });

  }

  increment(){
    this.store.dispatch(counterActions.increment());
  }

  decrement(){
    this.store.dispatch(counterActions.decrement());
  }

  multiply() {
    this.store.dispatch(counterActions.multiply({ n: 2 }));
  }

  divide() {
    this.store.dispatch(counterActions.divide({ n: 2 }));
  }

  reset() {
    this.store.dispatch(counterActions.reset());
  }

}
