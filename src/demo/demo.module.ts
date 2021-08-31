import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from './demo.component';
import {PybMpStatusModule} from '../status/pyb-mp-status.module';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    PybMpStatusModule
  ],
  bootstrap: [environment.production ? [] : DemoComponent]
})
export class DemoModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
