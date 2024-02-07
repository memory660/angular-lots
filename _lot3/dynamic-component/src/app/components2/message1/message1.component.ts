import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message1',
  templateUrl: './message1.component.html',
  styleUrls: ['./message1.component.scss']
})
export class Message1Component implements OnInit {
  @Input() message1: string;

  constructor() { }

  ngOnInit(): void {
  }

}
