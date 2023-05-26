import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Example01InterpolationComponent } from './example01-interpolation/example01-interpolation.component';
import { Example04TwoWayDataBindingComponent } from './example04-two-way-data-binding/example04-two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01InterpolationComponent,
    Example04TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
