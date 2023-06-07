import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Example01InterpolationComponent } from './example01-interpolation/example01-interpolation.component';
import { NgifComponent } from './example06-directives/ngif/ngif.component';
import { NgforComponent } from './example06-directives/ngfor/ngfor.component';
import { NgswitchComponent } from './example06-directives/ngswitch/ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01InterpolationComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
