import { Component, Input, OnInit } from '@angular/core';

export enum TypeEnum {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR'
}
@Component({
  selector: 'app-alert-custom',
  templateUrl: './alert-custom.component.html',
  styleUrls: ['./alert-custom.component.sass']
})
export class AlertCustomComponent implements OnInit {

  typeEnum = TypeEnum;

  @Input() type: TypeEnum = TypeEnum.SUCCESS;

  constructor() { }

  ngOnInit(): void {
  }

}
