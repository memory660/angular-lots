import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, Input, OnInit } from '@angular/core';
import { Message1Component } from '../message1/message1.component';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  @Input() message: string;
  //
  @ViewChild('message1container', { read: ViewContainerRef }) entry: ViewContainerRef;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }


  ngOnInit(): void {
  }

  createComponent(message) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(Message1Component);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.message1 = message;
  }

  destroyComponent() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  ngOnDestroy () {
      this.destroyComponent();
  }
}
