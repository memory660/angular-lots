import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components2/page2/page2.component';
import { Page3Component } from './components3/page3/page3.component';
import { Page4Component } from './components4/page4/page4.component';
import { Page5Component } from './components5/page5/page5.component';
import { Page6Component } from './components6/page6/page6.component';
import { Page7Component } from './components7/page7/page7.component';
import { Page8Component } from './components8/page8/page8.component';

const routes: Routes = [
  { path: 'comp1', component: Page1Component },
  { path: 'comp2', component: Page2Component },
  { path: 'comp3', component: Page3Component },
  { path: 'comp4', component: Page4Component },
  { path: 'page5', component: Page5Component },
  { path: 'page6', component: Page6Component },
  { path: 'page7', component: Page7Component },
  { path: 'page8', component: Page8Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
