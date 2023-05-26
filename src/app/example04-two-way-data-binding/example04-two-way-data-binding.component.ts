import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-example04-two-way-data-binding',
  templateUrl: './example04-two-way-data-binding.component.html',
  styleUrls: ['./example04-two-way-data-binding.component.sass']
})
export class Example04TwoWayDataBindingComponent implements OnInit {

  @Input() size = 0;
  @Output() sizeChange = new EventEmitter<number>();

  currentCustomer = 'teste';

  constructor() { }

  ngOnInit(): void {
    console.log('size => ', this.size);
  }

  increment() {
    this.size++;
    this.sizeChange.emit(this.size);
  }

  decrement() {
    this.size--;
    this.sizeChange.emit(this.size);
  }

}
