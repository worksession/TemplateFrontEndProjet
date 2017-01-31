import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ScrollMenuComponent} from './formation/scroll.menu/scroll.menu.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [ 
  HeaderComponent,FooterComponent,ScrollMenuComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  exports : [HeaderComponent,FooterComponent,ScrollMenuComponent],
  providers: []
})
export class GlobalModule { }
