import { Component, ComponentFactoryResolver, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AComponent } from '../a/a.component';
import { BComponent } from '../b/b.component';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  aComponentRef: ComponentRef<AComponent>;
  bComponentRef: ComponentRef<BComponent>;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
  }

  ngOnInit() {
    const aComponentFactory = this.resolver.resolveComponentFactory(AComponent);
    const bComponentFactory = this.resolver.resolveComponentFactory(BComponent);
    this.aComponentRef = aComponentFactory.create(this.injector);
    this.bComponentRef = bComponentFactory.create(this.injector);
  }

  show(type) {
    const view = type === 'a' ? this.aComponentRef.hostView : this.bComponentRef.hostView;
    this.vc.detach();           // comme on alterne composant a / composant b
    this.vc.insert(view);       // on detach et on insert au lieu de : remove et create
  }

}
