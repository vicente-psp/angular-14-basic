import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent {

  @Input() currentValue = 0;
  @Output() currentValueChange: EventEmitter<number> = new EventEmitter();

  incrementClick(): void {
    this.currentValue++;
    this.currentValueChange.emit(this.currentValue);
  }

  decrementClick(): void {
    if (this.currentValue <= 0) {
      return;
    }
    this.currentValue--;
    this.currentValueChange.emit(this.currentValue);
  }

}
