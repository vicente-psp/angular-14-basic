import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertCustomComponent } from './alert-custom.component';

@NgModule({
  declarations: [
    AlertCustomComponent
  ],
  exports: [
    AlertCustomComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlertCustomModule { }
