import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.sass']
})
export class NgswitchComponent implements OnInit {

  expressionSwitch = 'one';

  constructor() { }

  ngOnInit(): void {
    const expression: string = 'teste';
    switch (expression) {
      case 'value1':
        console.log('case 1');
        break;
      case 'value2':
        console.log('case 2');
        break;
      case 'valueN':
        console.log('case N');
        break;
      default:
        console.log('case default');
    }
  }

}
