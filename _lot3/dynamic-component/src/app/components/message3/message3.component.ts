import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message3',
  templateUrl: './message3.component.html',
  styleUrls: ['./message3.component.scss']
})
export class Message3Component implements OnInit {
  @Input() message3: string;

  constructor() { }

  ngOnInit(): void {
  }

}
