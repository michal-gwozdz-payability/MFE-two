import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NestedService} from '../nested-service/nested.service';

@Component({
  selector: 'nested-two',
  templateUrl: './nested-two.component.html',
})
export class NestedTwoComponent implements OnInit, OnDestroy {
  value: string = '';
  nestedValue: string = '';
  changed: boolean = false;

  constructor(private readonly nestedService: NestedService) {
  }

  @Output()
  readonly nestedOutput = new EventEmitter();

  @Input()
  set nestedInput(value: string) {
    this.changed = true;
    this.value = value;
    console.log('Nested component received value', value);

    setTimeout(() => {
      this.changed = false;
      this.nestedValue = this.value;
    }, 1000);
  }

  ngOnInit(): void {
    console.log('Nested component initialized');
  }

  ngOnDestroy(): void {
    console.log('Nested component destroyed');
  }

  emitEvent(): void {
    this.nestedService.emitEvent(this.value);
  }

  onNestedOutput($event: any): void {
    this.changed = true;
    this.value = $event;

    setTimeout(() => {
      this.changed = false;
      this.nestedOutput.next($event);
      console.log('Nested component emitted value', $event);
    }, 1000);
  }
}
