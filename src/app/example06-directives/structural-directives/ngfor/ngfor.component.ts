import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.sass']
})
export class NgforComponent implements OnInit {

  lista = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  styles(isLast: boolean, isEven: boolean): any {
    return {
      'border-bottom': !isLast ? '1px solid black' : null,
      'color': isEven ? 'blue' : 'green'
    }
  }

}
