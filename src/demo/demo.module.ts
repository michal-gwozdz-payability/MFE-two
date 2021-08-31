import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoComponent} from './demo.component';
import {PybMpStatusModule} from '../status/pyb-mp-status.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    PybMpStatusModule
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule {
}
