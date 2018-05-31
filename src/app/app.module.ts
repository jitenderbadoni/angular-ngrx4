import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {reducer } from "../app/store/app.reducer";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({user: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
