import {Component} from '@angular/core';

@Component({
  selector: 'lib-pyb-mp-integration',
  template: `
    <div>
      <div>PybMpIntegration</div>
      <ng-content></ng-content>
    </div>`
})
export class PybMpIntegrationComponent {

  constructor() {
    console.log('PybMpIntegration created');
  }
}
