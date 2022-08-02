import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModules } from 'src/modules/components.module';
import { ApiCalls } from 'src/provider/api/apiCall';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiCalls],
  bootstrap: [AppComponent]
})
export class AppModule { }
