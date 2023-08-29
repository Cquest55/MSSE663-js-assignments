import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {PizzaAppComponent} from "./pizza-app/pizza-app.component";
import {HomeComponent} from "./home/home.component";
import {SizePipe} from "./shared/pipes/size.pipes";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    [AppComponent, HomeComponent, PizzaAppComponent],
    SizePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
