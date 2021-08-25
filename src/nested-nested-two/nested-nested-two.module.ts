import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NestedNestedTwoComponent} from './nested-nested-two.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    NestedNestedTwoComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    NestedNestedTwoComponent
  ]
})
export class NestedNestedTwoModule {
  constructor(private injector: Injector) {
    const nestedNestedTwo = createCustomElement(NestedNestedTwoComponent, {injector: this.injector});
    customElements.define('child-nested-nested', nestedNestedTwo);
  }
}
