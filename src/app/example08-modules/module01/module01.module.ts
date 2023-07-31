import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { BaseCardComponent } from './base-card/base-card.component';
import { SharedModule } from '../shared/shared.module';
import { Example07ComponentsModule } from '../../example07-components/example07-components.module';

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
    SharedModule,
    Example07ComponentsModule
  ]
})
export class Module01Module { }
