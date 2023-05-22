import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example02-property-binding',
  templateUrl: './example02-property-binding.component.html',
  styleUrls: ['./example02-property-binding.component.sass']
})
export class Example02PropertyBindingComponent implements OnInit {

  currentCustomer = 'Maria';
  numero1 = 5;
  numero2 = 10;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.currentCustomer = 'Pedro';
    }, 3000);
  }

}
