import {Injectable, OnDestroy} from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class NestedService implements OnDestroy {
  private readonly listener = ($event: any) => this.onEventEmitted(($event as CustomEvent).detail);

  constructor() {
    console.log('Nested Service created');
    window.addEventListener('rail', this.listener)
  }

  onEventEmitted($event: string): void {
    console.log('Nested Service value received', $event);
  }

  emitEvent(value: string): void {
    console.log('Nested Service value emitted', value);
    window.dispatchEvent(new CustomEvent('rail', {detail: value}))
  }

  ngOnDestroy() {
    console.log('Nested Service destroyed');
    window.removeEventListener('rail', this.listener);
  }
}
