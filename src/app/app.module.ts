import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Example01InterpolationComponent } from './example01-interpolation/example01-interpolation.component';
import { Example02PropertyBindingComponent } from './example02-property-binding/example02-property-binding.component';
import { Example03EventBindingComponent } from './example03-event-binding/example03-event-binding.component';
import { Example04TwoWayDataBindingComponent } from './example04-two-way-data-binding/example04-two-way-data-binding.component';
import { Example05PessoasComponent } from './example05-pessoas/example05-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01InterpolationComponent,
    Example02PropertyBindingComponent,
    Example03EventBindingComponent,
    Example04TwoWayDataBindingComponent,
    Example05PessoasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
