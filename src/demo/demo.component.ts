import { Component } from '@angular/core';
import {PybMpIntegration, PybMpStatusConfig} from '../status/pyb-mp-status.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  loading: boolean = false;
  // @ts-ignore
  integration: PybMpIntegration = null;

  configuration: PybMpStatusConfig = {
    logo: 'test',
    label: 'test',
    mpKey: 'test',
    login: 'test'
  }

  setIntegration(): void {
    this.integration = {
      authId: 'test',
      password: 'test',
      login: 'test'
    }
  }

  setLoading($event: boolean): void {
    this.loading = $event;
  }
}
