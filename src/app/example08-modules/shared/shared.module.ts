import { NgModule } from '@angular/core';

import { Module02Module } from '../module02/module02.module';
import { Module03Module } from '../module03/module03.module';
import { Module04Module } from '../module04/module04.module';

@NgModule({
  imports: [
    Module02Module,
    Module03Module,
    Module04Module
  ],
  exports: [
    Module02Module,
    Module03Module,
    Module04Module
  ],
})
export class SharedModule { }
