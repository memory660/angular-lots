import { Component, OnInit } from '@angular/core';
import { Unsubscriber1Service } from '../../core/unsubscriber1.service';
import { SomeUnsubscribe1Service } from './services/some-unsubscribe1.service';

@Component({
  selector: 'app-comp-unsubscribe1',
  standalone: true,
  imports: [],
  templateUrl: './comp-unsubscribe1.component.html',
  styleUrl: './comp-unsubscribe1.component.scss'
})
export class CompUnsubscribe1Component extends Unsubscriber1Service implements OnInit {

  constructor(
    private someService: SomeUnsubscribe1Service
  ) {
    // This is importand step to instantiate
    super();
  }

  ngOnInit(): void {
    // You can add an array of subscription or even a single subscription
    this.addSubscription(
      this.someService.getData().subscribe(() => {
        // do your things
      })
    );
  }
}
