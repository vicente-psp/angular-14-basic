import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.sass']
})
export class NgifComponent implements OnInit {

  isShow = true;

  constructor() { }

  ngOnInit(): void {
    console.log('vai verificar se o isShow é true');
    if (this.isShow) {
      console.log('isShow é true');
    } else {
      console.log('isShow é false');
    }
  }

}
