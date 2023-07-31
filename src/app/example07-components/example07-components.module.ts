import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ButtonComponent } from './button/button.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    ResultComponent,
    ButtonComponent,
    DescriptionComponent
  ],
  exports: [ ResultComponent ],
  imports: [
    CommonModule
  ]
})
export class Example07ComponentsModule { }
