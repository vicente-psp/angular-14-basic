import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example01-interpolation',
  templateUrl: './example01-interpolation.component.html',
  styleUrls: ['./example01-interpolation.component.sass']
})
export class Example01InterpolationComponent implements OnInit {

  currentCustomer = 'Maria';
  numero1 = 5;
  numero2 = 10;

  constructor() { }

  ngOnInit(): void {
  }

  fnTeste(): string {
    return 'Essa é uma função';
  }

}
