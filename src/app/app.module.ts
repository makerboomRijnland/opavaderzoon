import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpaComponent } from './opa/opa.component';
import { VaderComponent } from './vader/vader.component';
import { ZoonComponent } from './zoon/zoon.component';

@NgModule({
  declarations: [
    AppComponent,
    OpaComponent,
    VaderComponent,
    ZoonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
