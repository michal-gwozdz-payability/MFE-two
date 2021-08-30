import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {PybMpStatusComponent} from './pyb-mp-status.component';
import {createCustomElement} from '@angular/elements';
import {CommonModule} from '@angular/common';
import {environment} from '../environments/environment';
import {BrowserModule} from '@angular/platform-browser';
import {PybMpIntegrationModule} from '../integration/pyb-mp-integration.module';

@NgModule({
  declarations: [
    PybMpStatusComponent
  ],
  exports: [
    PybMpStatusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PybMpIntegrationModule
  ],
  bootstrap: [environment.production ? [] : PybMpStatusComponent]
})
export class PybMpStatusModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const statusComponent = createCustomElement(PybMpStatusComponent, {injector: this.injector});
    customElements.define('pyb-mp-status', statusComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
