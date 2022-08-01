import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormPageComponent } from './formPage';

@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule,
  ],
  providers: [],
  bootstrap: [FormPageComponent]
})
export class FormPageModule { }
