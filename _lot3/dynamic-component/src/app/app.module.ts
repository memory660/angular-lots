import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { MessageComponent } from './components/message/message.component';
import { MessageContainerComponent } from './components/message-container/message-container.component';
import { Message2Component } from './components/message2/message2.component';
import { Message3Component } from './components/message3/message3.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components2/page2/page2.component';
import { Message1Component } from './components2/message1/message1.component';
import { Comp2Component } from './components2/comp2/comp2.component';
import { Page3Component } from './components3/page3/page3.component';
import { ModalComponent } from './components3/modal/modal.component';
import { ModalContentComponent } from './components3/modal-content/modal-content.component';
import { ModalService } from './components3/services/modal.service';
import { Page4Component } from './components4/page4/page4.component';
import { ButtonComponent } from './components4/button/button.component';
import { AlertComponent } from './components4/alert/alert.component';
import { DynamicComponentCreationComponent } from './components4/dynamic-component-creation/dynamic-component-creation/dynamic-component-creation.component';
import { CreateRequestComponent } from './components4/create-request/create-request/create-request.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Page5Component } from './components5/page5/page5.component';
import { AComponent } from './components5/a/a.component';
import { BComponent } from './components5/b/b.component';
import { Page6Component } from './components6/page6/page6.component';
import { Page7Component } from './components7/page7/page7.component';
import { CdkTreeComponent } from './components7/cdk-tree/cdk-tree.component';
import { Page8Component } from './components8/page8/page8.component';
import { CdkTree8Component } from './components8/cdk-tree8/cdk-tree8.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    MessageComponent,
    MessageContainerComponent,
    Message2Component,
    Message3Component,
    Page1Component,
    Page2Component,
    Message1Component,
    Comp2Component,
    Page3Component,
    ModalComponent,
    ModalContentComponent,
    Page4Component,
    ButtonComponent,
    AlertComponent,
    DynamicComponentCreationComponent,
    CreateRequestComponent,
    Page5Component,
    AComponent,
    BComponent,
    Page6Component,
    Page7Component,
    CdkTreeComponent,
    Page8Component,
    CdkTree8Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
