import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.sass']
})
export class ResultComponent {

  currentValue = 0;

  incrementClick(): void {
    this.currentValue++;
  }

  decrementClick(): void {
    if (this.currentValue <= 0) {
      return;
    }
    this.currentValue--;
  }

}
