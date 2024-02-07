import {AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.scss']
})
export class Page6Component {

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild('t1', {read: TemplateRef}) t1: TemplateRef<null>;
  @ViewChild('t2', {read: TemplateRef}) t2: TemplateRef<null>;
  view1: ViewRef;
  view2: ViewRef;

  ngAfterViewInit() {
    this.view1 = this.t1.createEmbeddedView(null);
    this.view2 = this.t2.createEmbeddedView(null);
  }

  show(type) {
    const view = type === '1' ? this.view1 : this.view2;
    this.vc.detach();
    this.vc.insert(view);
  }

}
