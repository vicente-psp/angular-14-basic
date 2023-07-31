import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertCustomModule } from '../alert-custom/alert-custom.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertCustomModule
  ],
  exports: [ AlertCustomModule ]
})
export class SharedModule { }
