import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Example01InterpolationComponent } from './example01-interpolation/example01-interpolation.component';
import { Example02PropertyBindingComponent } from './example02-property-binding/example02-property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01InterpolationComponent,
    Example02PropertyBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
