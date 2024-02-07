import { Component, OnInit, ViewChild, TemplateRef, ViewChildren, QueryList, ElementRef, ContentChild, Input, ChangeDetectorRef } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { Message2Component } from '../message2/message2.component';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  @Input() message: string;

  // (1)
  @ViewChild('temp', { static: false }) someTemplate: TemplateRef<HTMLElement>;
  // (2)
  thanksTo = ['my cats', 'my wife'];
  @ViewChildren('thankYouItem') thankYouItems: QueryList<ElementRef>;
  // (3)
  @ViewChild(MessageComponent) messageViewChild: MessageComponent;
  // (4)
  messages = [ 'Hello India', 'Which team is winning Super Bowl? ', 'Have you checked Ignite UI ?', ];
  @ViewChildren(Message2Component) message2ViewChildren: QueryList<Message2Component>;
  // (5)

  // (6)


  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // (1)
    console.log('page 1 - (1) someTemplate', this.someTemplate);
    // (2)
    console.log('page 1 - (2) thankYouItems', this.thankYouItems);
    // (3)
    console.log("page 1 - (3) messageViewChild", this.messageViewChild);
    this.messageViewChild.message = 'Passed as View Child (3)';
    this.cd.detectChanges();
    console.log("page 1 - (3) messageViewChild", this.messageViewChild);
    // (4)
    console.log("page 1 - (4) message2ViewChildren", this.message2ViewChildren);
    this.message2ViewChildren.forEach((item) => { item.message2 = 'Passed as  message2ViewChildren (4)'; });
    this.cd.detectChanges();
    // (5)

    // (6)

  }

  ngAfterContentInit() {
    // (4)
    console.log("page 1 - (4) message2ViewChildren (ngAfterContentInit)", this.message2ViewChildren); // undefined

  }
}
