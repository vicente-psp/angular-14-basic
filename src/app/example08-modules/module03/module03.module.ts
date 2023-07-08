import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component03Component } from './component03/component03.component';

@NgModule({
  declarations: [
    Component03Component
  ],
  exports: [
    Component03Component
  ],
  imports: [
    CommonModule
  ]
})
export class Module03Module { }
