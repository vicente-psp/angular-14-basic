import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  @Output() buttonEvent = new EventEmitter();

  buttonClick(): void {
    this.buttonEvent.emit();
  }

}
