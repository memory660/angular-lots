import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component {

  @ViewChild(TemplateRef) tpl: TemplateRef<any>;

  constructor(private modal: ModalService) { }

  openModalText() {
    this.modal.open("[ texte à afficher ]");
  }

  openModalComponent() {
    this.modal.open(ModalContentComponent);
  }

  openModalTemplate() {
    this.modal.open(this.tpl);
  }

  click() {}

}
