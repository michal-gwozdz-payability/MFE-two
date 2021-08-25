import {Injectable, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class AppWorkerService implements OnDestroy {
  private readonly worker: Worker;

  constructor() {
    console.log('Child Worker Service created');

    this.worker = (window as any).worker;
    this.worker.addEventListener('rail', this.onEventEmitted);
  }

  onEventEmitted({ detail }: any): void {
    console.log('Child Worker Service value received', detail);
  }

  emitEvent(value: string): void {
    console.log('Child Worker Service value emitted', value);
    this.worker.dispatchEvent(new CustomEvent('rail', { detail: value }));
 }

  ngOnDestroy() {
    console.log('Child Worker Service destroyed');
    this.worker.removeEventListener('rail', this.onEventEmitted);
  }
}
