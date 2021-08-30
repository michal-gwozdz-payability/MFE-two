import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

export enum PybMpStatusState {
  Active = 'Active',
  Rejected = 'Rejected',
  Pending = 'Pending'
}

export interface PybMpStatusConfig {
  logo: string;
  label: string;
  authId: string;
  supplierKey: string;
}

interface PybMpStatusConfigInternal extends PybMpStatusConfig {
  status?: PybMpStatusState;
}

@Component({
  selector: 'pyb-mp-status-inner',
  templateUrl: './pyb-mp-status.component.html',
  styleUrls: ['./pyb-mp-status.component.scss']
})
export class PybMpStatusComponent {
  statusLoading: boolean = false;
  statusConfig: PybMpStatusConfigInternal = {
    logo: '',
    label: '',
    supplierKey: '',
    authId: ''
  };
  statusBgColor: string = '';
  statusFontColor: string = '';

  constructor(private readonly cd: ChangeDetectorRef) {
    console.log('PybMpStatus created');
  }

  @Output()
  readonly onCredLoaded = new EventEmitter();

  @Output()
  readonly loading = new EventEmitter();

  @Input()
  set configuration(config: PybMpStatusConfig) {
    if (config) {
      this.statusLoading = true;
      this.loading.emit(true);
      this.loadData(config);
    }
  }

  private loadData(config: PybMpStatusConfig): void {
    setTimeout(() => {
      const status = PybMpStatusState.Active;
      this.statusConfig = {...this.statusConfig, ...config, status};
      this.onCredLoaded.emit({ ...this.statusConfig, authorized: true });
      this.updateStatus(status);
      this.statusLoading = false;
      this.loading.emit(false);
      this.cd.detectChanges();
    }, 800);
  }

  private updateStatus(status: PybMpStatusState): void {
    switch (status) {
      case PybMpStatusState.Active:
        this.statusBgColor = 'bg-green-400';
        this.statusFontColor = 'text-green-400';
        break;
      case PybMpStatusState.Rejected:
        this.statusBgColor = 'bg-red-600';
        this.statusFontColor = 'text-red-600';
        break;
      case PybMpStatusState.Pending:
        this.statusBgColor = 'bg-green-400';
        this.statusFontColor = 'text-green-400';
        break;
    }
  }
}
