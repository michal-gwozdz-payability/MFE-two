import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {PybMpIntegration, PybMpStatusConfig, PybMpStatusState} from './pyb-mp-status.model';
import {PybMpStatusService} from './pyb-mp-status.service';

@Component({
  selector: 'pyb-mp-status-inner',
  templateUrl: './pyb-mp-status.component.html',
  styleUrls: ['./pyb-mp-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PybMpStatusComponent {
  private _status: PybMpStatusState = PybMpStatusState.Init;
  private _statusLoading: boolean = false;
  private _statusBgColor: string = '';
  private _statusFontColor: string = '';
  private _statusConfig: PybMpStatusConfig = {
    logo: '',
    label: '',
    mpKey: '',
    login: '',
  };

  @Output()
  readonly statusChanged: EventEmitter<PybMpStatusState> = new EventEmitter();

  @Output()
  readonly loading: EventEmitter<boolean> = new EventEmitter();

  constructor(private readonly cd: ChangeDetectorRef,
              private readonly service: PybMpStatusService) {
    console.log('PybMpStatus created');
  }

  @Input()
  set integrate(integration: PybMpIntegration) {
    if (integration) {
      this.updateLoading(true);
      this.startIntegration(integration);
    }
  }

  @Input()
  set configuration(config: PybMpStatusConfig) {
    if (config) {
      this._statusConfig = config;
      this.updateLoading(true);
      this.getStatus(config);
    }
  }

  private startIntegration(integration: PybMpIntegration): void {
    this.service.integrate(integration).subscribe((result: { status: PybMpStatusState }) => {
      this.updateLoading(false);
      this.updateStatus(result);
      this.cd.detectChanges();
    });
  }

  private getStatus(config: PybMpStatusConfig): void {
    this.service.checkStatus(config.mpKey, config.login).subscribe((result: { status: PybMpStatusState }) => {
      this.updateLoading(false);
      this.updateStatus(result);
      this.cd.detectChanges();
    });
  }

  private updateLoading(loading: boolean): void {
    this._statusLoading = loading;
    this.loading.emit(loading);
  }

  private updateStatus(result: { status: PybMpStatusState }): void {
    this._status = result.status;
    switch (this.status) {
      case PybMpStatusState.Active:
        this._statusBgColor = 'bg-green-400';
        this._statusFontColor = 'text-green-400';
        break;
      case PybMpStatusState.SetUpRequired:
        this._statusBgColor = 'bg-yellow-400';
        this._statusFontColor = 'text-yellow-400';
        break;
    }
    this.statusChanged.emit(this.status);
  }

  get status(): PybMpStatusState {
    return this._status;
  }

  get statusLoading(): boolean {
    return this._statusLoading;
  }

  get statusBgColor(): string {
    return this._statusBgColor;
  }

  get statusFontColor(): string {
    return this._statusFontColor;
  }

  get logo(): string {
    return this._statusConfig?.logo;
  }

  get label(): string {
    return this._statusConfig?.label;
  }

  get isSetupRequired(): boolean {
    return this._status === PybMpStatusState.SetUpRequired;
  }
}
