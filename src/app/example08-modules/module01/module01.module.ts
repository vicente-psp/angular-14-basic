import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { BaseCardComponent } from './base-card/base-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AlertComponent,
    BaseCardComponent
  ],
  exports: [
    BaseCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class Module01Module { }
