import { Component } from '@angular/core';

let ID = 0;

@Component({
  selector: 'app-component03',
  templateUrl: './component03.component.html',
  styleUrls: ['./component03.component.sass']
})
export class Component03Component {

  valueId = ID++;

}
