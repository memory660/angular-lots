import { Component, OnInit, ContentChild } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { Message2Component } from '../message2/message2.component';
import { Message3Component } from '../message3/message3.component';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent  {
  greetMessage = 'Message Container!';
  @ContentChild(Message2Component) message2ComponentContentChild: Message2Component;
  @ContentChild(Message3Component) message3ComponentContentChild: Message3Component;

  ngAfterContentInit() {
      // (5)
      console.log("page 1 - (5) message2ComponentContentChild", this.message2ComponentContentChild);
      console.log("page 1 - (5) message3ComponentContentChild", this.message3ComponentContentChild);
  }

}
