import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Module } from './components/comp1/comp1.module';
import { Comp2Module } from './components/comp2/comp2.module';
// REDUCERS
import { addProductReducer} from './components/comp2/reducers/product.reducer';
import { counterReducer} from './components/comp1/state/counter.reducer';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { CustomerModule } from './components/comp3/customer/customer.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    Comp1Module,
    Comp2Module,
    //
    StoreModule.forRoot({
      counter: counterReducer,        // comp1
      product: addProductReducer      // comp2

    }),
    //
    CustomerModule,                   // comp3
    //
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: { pause: false, lock: true, persist: true }
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
