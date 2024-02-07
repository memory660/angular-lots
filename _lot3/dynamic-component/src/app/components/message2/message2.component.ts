import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message2',
  templateUrl: './message2.component.html',
  styleUrls: ['./message2.component.scss']
})
export class Message2Component implements OnInit {
  @Input() message2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
