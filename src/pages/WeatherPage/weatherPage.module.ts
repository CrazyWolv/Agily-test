import { NgModule } from '@angular/core';
import { ComponentsModules } from 'src/modules/components.module';

import { WeatherPageComponent } from './weatherPage';

@NgModule({
  declarations: [
    WeatherPageComponent,
  ],
  imports: [
    ComponentsModules
  ],
  providers: [],
  bootstrap: [WeatherPageComponent]
})
export class WeatherPageModule { }
