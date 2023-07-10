import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    DateComponent
  ],
  exports: [
    DateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Module04Module { }
