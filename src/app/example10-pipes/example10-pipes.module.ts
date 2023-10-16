import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Example10PipesComponent } from './example10-pipes.component';
import { Example10PipesPipe } from './example10-pipes.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Example10PipesComponent,
    Example10PipesPipe
  ],
  exports: [
    Example10PipesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Example10PipesModule { }
