import {ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NestedTwoComponent} from './nested-two.component';
import {createCustomElement} from '@angular/elements';
import {NestedNestedTwoModule} from '../nested-nested-two/nested-nested-two.module';

const local = false;

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    NestedTwoComponent
  ],
  imports: [
    BrowserModule,
    NestedNestedTwoModule,
  ],
  bootstrap: [local ? NestedTwoComponent : []]
})
export class NestedTwoModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const nestedTwo = createCustomElement(NestedTwoComponent, {injector: this.injector});
    customElements.define('child-nested', nestedTwo);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
