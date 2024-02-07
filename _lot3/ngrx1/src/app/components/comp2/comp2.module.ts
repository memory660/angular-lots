import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp2Component } from './comp2.component';
//
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './reducers/product.reducer';
import { ProductComponent } from './product/product/product.component';


@NgModule({
  declarations: [
    Comp2Component,
    ProductComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    Comp2Component
  ],
})
export class Comp2Module { }
