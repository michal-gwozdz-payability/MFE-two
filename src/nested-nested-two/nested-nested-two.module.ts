import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NestedNestedTwoComponent} from './nested-nested-two.component';
import {createCustomElement} from '@angular/elements';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    NestedNestedTwoComponent
  ],
  exports: [
    NestedNestedTwoComponent
  ],
  imports: [
    BrowserModule,
  ],
})
export class NestedNestedTwoModule {
}
