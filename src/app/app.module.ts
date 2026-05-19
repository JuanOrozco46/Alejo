import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuadroColorComponent } from './cuadro-color/cuadro-color.component';
import { SelectorColoresComponent } from './selector-colores/selector-colores.component';

@NgModule({
  declarations: [
    AppComponent,
    CuadroColorComponent,
    SelectorColoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
