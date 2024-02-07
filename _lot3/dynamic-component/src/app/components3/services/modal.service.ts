import { Injectable, ComponentFactoryResolver, Injector, Inject, TemplateRef, Type } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Injectable()
export class ModalService {

  constructor(private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document            //  Document : Dans un navigateur, c'est le document DOM.
  ) {
    //
    // pour info :
    console.log("document sur le composant : app-modal-content", this.document.querySelectorAll('app-modal-content'));
    this.document.body.style.background = 'yellow';
  }

  open<T>(content: Content<T>) {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const ngContent = this.resolveNgContent(content);
    // const componentRef = factory.create(this.injector, [ [] ]);
    const componentRef = factory.create(this.injector, ngContent);    // componentRef : expose une référence à l'élément DOM natif
                                                                      // à la création du : ModalComponent
                                                                      // le contenu de : ngContent sera injecté dans la balise : <ng-content></ng-content> de : ModalComponent
    componentRef.hostView.detectChanges();

    const { nativeElement } = componentRef.location;
    this.document.body.appendChild(nativeElement);
  }

  resolveNgContent<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }

    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      console.log(viewRef)
      // In earlier versions, you may need to add this line
      // this.appRef.attachView(viewRef);
      return [viewRef.rootNodes];   //  expose : rootNodes, qui est un tableau de nœuds DOM extraits du template
    }

    const factory = this.resolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement], [this.document.createTextNode('Second ng-content')]];

    /*
    pour info :

    avec plusieurs ng-content :
          <ng-content></ng-content>
          <footer class="modal-footer">
            <ng-content></ng-content>
          </footer>
          ...
          ...
      const projectableNodes = [
      [this.document.createTextNode('First ng-content')],
      [this.document.createTextNode('Second ng-content')]
      ]
    */
  }

}
