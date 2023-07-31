import { Component, Input, OnInit } from '@angular/core';

import { Example08ModulesService } from '../../example08-modules.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {

  @Input() message = '';

  constructor(public service: Example08ModulesService) { }

  ngOnInit(): void {
  }

}
