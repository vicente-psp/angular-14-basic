import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ButtonComponent } from './button/button.component';
import { DescriptionComponent } from './description/description.component';
import { SharedModule } from '../example09-components/shared/shared.module';

@NgModule({
  declarations: [
    ResultComponent,
    ButtonComponent,
    DescriptionComponent
  ],
  exports: [ ResultComponent ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class Example07ComponentsModule { }
