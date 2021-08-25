import {ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NestedTwoComponent} from './nested-two.component';
import {NestedNestedTwoModule} from '../nested-nested-two/nested-nested-two.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NestedTwoComponent
  },
];

@NgModule({
  declarations: [
    NestedTwoComponent
  ],
  exports: [
    NestedTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    NestedNestedTwoModule,
  ],
})
export class NestedTwoModule {

}
