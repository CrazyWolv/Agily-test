import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NotFoundPageComponent } from './notFoundPage';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule, CommonModule,
  ],
  providers: [],
  bootstrap: [NotFoundPageComponent]
})
export class NotFoundPageModule { }
