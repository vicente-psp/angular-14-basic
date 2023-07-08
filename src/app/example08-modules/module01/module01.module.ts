import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component01Component } from './component01/component01.component';
import { Module02Module } from '../module02/module02.module';
import { Module03Module } from '../module03/module03.module';

@NgModule({
  declarations: [
    Component01Component,
  ],
  exports: [
    Component01Component
  ],
  imports: [
    CommonModule,
    Module02Module,
    Module03Module
  ]
})
export class Module01Module { }
