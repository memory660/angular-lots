import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.scss']
})
export class Page8Component implements OnInit {

  totalEstimate = 10;
  ctx = {estimate: this.totalEstimate};
  // -------------------------------------------------
  lessons;

  constructor() { }

  ngOnInit(): void {
    const source = timer(3000);
    const subscribe = source.subscribe(val => this.lessons = ['a', 'b']);
  }

}
