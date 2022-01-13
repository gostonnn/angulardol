/*
* File: tomtestin
* Author: Vásárhelyi Ágoston
* Copyright: 2022.01.13., Vásárhelyi Ágoston
* Group: Szoft2/n
* Date: 2022-01-13
* Github: https://github.com/gostonnn/
* Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


