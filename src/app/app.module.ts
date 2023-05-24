import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Example01InterpolationComponent } from './example01-interpolation/example01-interpolation.component';
import { Example02PropertyBindingComponent } from './example02-property-binding/example02-property-binding.component';
import { Example03EventBindingComponent } from './example03-event-binding/example03-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01InterpolationComponent,
    Example02PropertyBindingComponent,
    Example03EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
