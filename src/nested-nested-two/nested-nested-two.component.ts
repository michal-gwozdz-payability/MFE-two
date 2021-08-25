import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NestedService} from '../nested-service/nested.service';

@Component({
  selector: 'nested-nested-two',
  templateUrl: './nested-nested-two.component.html',
})
export class NestedNestedTwoComponent implements OnInit, OnDestroy {
  value: string = '';
  changed: boolean = false;

  constructor(private readonly nestedService: NestedService) {
  }

  @Output()
  readonly nestedOutput = new EventEmitter();

  ngOnInit(): void {
    console.log('Nested nested component initialized');
  }

  ngOnDestroy(): void {
    console.log('Nested nested component destroyed');
  }

  emitEvent(): void {
    this.nestedService.emitEvent(this.value);
  }

  @Input()
  set nestedInput(value: string) {
    this.value = value;
    this.changed = true;
    console.log('Nested nested component received value', value);

    setTimeout(() => {
      const newValue = value.split('').reverse().join('');
      this.changed = false;
      this.value = newValue;
      this.nestedOutput.next(newValue);
      console.log('Nested nested component emitted value', newValue);
    }, 1000);
  }
}
