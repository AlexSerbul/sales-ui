import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LotComponent} from  './Lot/lot.component';
import {HeaderComponent} from './Header/header.component';
import  {BannerComponent} from "./Footer/Footer.component";
import {MainComponent} from "./Main/Main.component";

@NgModule({
  declarations: [
    AppComponent,
    LotComponent,
    HeaderComponent,
    BannerComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
