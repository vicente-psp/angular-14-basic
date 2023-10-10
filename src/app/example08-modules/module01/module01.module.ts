import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { BaseCardComponent } from './base-card/base-card.component';
import { SharedModule } from '../shared/shared.module';
import { Example07ComponentsModule } from '../../example07-components/example07-components.module';
import { AlertCustomModule } from '../../example09-components/alert-custom/alert-custom.module';

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
    Example07ComponentsModule,
    AlertCustomModule
  ]
})
export class Module01Module { }
