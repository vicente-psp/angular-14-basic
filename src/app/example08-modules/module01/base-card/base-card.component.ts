import { Component, OnInit } from '@angular/core';

import { TypeEnum } from '../../../example09-components/alert-custom/alert-custom.component';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.sass']
})
export class BaseCardComponent implements OnInit {

  typeEnum = TypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
