import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pyb-mp-status',
  template: `
    <div>
      <div>PybMpStatus</div>
      <ng-content></ng-content>
    </div>`,
})
export class PybMpStatusComponent {

  constructor() {
    console.log('PybMpStatus created');
  }

  @Output()
  readonly onCredLoaded = new EventEmitter();

  @Output()
  readonly loading = new EventEmitter();

  @Input()
  set credentials(credentials: { authId: string, supplierKey: string }) {
    if (credentials) {
      this.loading.emit(true);
      this.loadData(credentials);
    }
  }

  private loadData(credentials: { authId: string, supplierKey: string }): void {
    setTimeout(() => {
      this.onCredLoaded.emit({ credentials, authorized: true, status: 'Connected' });
      this.loading.emit(false);
    }, 800);
  }
}
