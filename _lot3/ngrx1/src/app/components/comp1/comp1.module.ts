import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';
//
import { StoreModule } from '@ngrx/store';
import { counterReducer} from './state/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    Comp1Component,
    MyCounterComponent
  ],
  imports: [
    CommonModule,
  // forRoot : enregistre les fournisseurs globaux nécessaires pour accéder au magasin dans l'ensemble de votre application.
  ],
  exports: [
    Comp1Component,
  ]
})
export class Comp1Module { }
