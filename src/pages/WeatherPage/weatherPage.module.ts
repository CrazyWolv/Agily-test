import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { WeatherPageComponent } from './weatherPage';

@NgModule({
  declarations: [
    WeatherPageComponent
  ],
  imports: [
    BrowserModule, CommonModule,
  ],
  providers: [],
  bootstrap: [WeatherPageComponent]
})
export class WeatherPageModule { }
