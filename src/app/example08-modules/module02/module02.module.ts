import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component02Component } from './component02/component02.component';
import { Module03Module } from '../module03/module03.module';

@NgModule({
  declarations: [
    Component02Component
  ],
  exports: [
    Component02Component
  ],
  imports: [
    CommonModule,
    Module03Module
  ]
})
export class Module02Module { }
