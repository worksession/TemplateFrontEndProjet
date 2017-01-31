import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {GlobalModule} from './modules/global/global.module'
import {FormationModule} from './modules/formation/formation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GlobalModule,
    FormationModule
  ],
  providers: [],
 
  exports : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
