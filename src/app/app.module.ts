import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectnumericoComponent } from './selectnumerico/selectnumerico.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SelectnumericoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
