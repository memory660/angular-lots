import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Unsubscriber1Service implements OnDestroy {
  private subscriptions: Subscription[] = [];

  addSubscription(subscription: Subscription | Subscription[]) {
    if (Array.isArray(subscription)) {
      this.subscriptions.push(...subscription);
    } else {
      this.subscriptions.push(subscription);
    }
  }

  unsubscribe() {
    this.subscriptions
      .filter(subscription => subscription)
      .forEach(subscription => {
        subscription.unsubscribe();
      });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
