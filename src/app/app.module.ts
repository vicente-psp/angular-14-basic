import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Example01InterpolationComponent } from './example01-interpolation/example01-interpolation.component';
import { Example02PropertyBindingComponent } from './example02-property-binding/example02-property-binding.component';
import { Example03EventBindingComponent } from './example03-event-binding/example03-event-binding.component';
import { Example04TwoWayDataBindingComponent } from './example04-two-way-data-binding/example04-two-way-data-binding.component';
import { Example05PessoasComponent } from './example05-pessoas/example05-pessoas.component';
import { NgifComponent } from './example06-directives/structural-directives/ngif/ngif.component';
import { NgforComponent } from './example06-directives/structural-directives/ngfor/ngfor.component';
import { NgswitchComponent } from './example06-directives/structural-directives/ngswitch/ngswitch.component';
import { AttributeDirectivesComponent } from './example06-directives/attribute-directives/attribute-directives.component';
import { ReviewComponent } from './example06-directives/review/review.component';
import { Module01Module } from './example08-modules/module01/module01.module';
import { Example07ComponentsModule } from './example07-components/example07-components.module';
import { AlertCustomModule } from './example09-components/alert-custom/alert-custom.module';

@NgModule({
  declarations: [
    AppComponent,
    Example01InterpolationComponent,
    Example02PropertyBindingComponent,
    Example03EventBindingComponent,
    Example04TwoWayDataBindingComponent,
    Example05PessoasComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    AttributeDirectivesComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Module01Module,
    Example07ComponentsModule,
    AlertCustomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
