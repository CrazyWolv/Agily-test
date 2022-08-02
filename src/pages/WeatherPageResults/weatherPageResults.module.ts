import { NgModule } from '@angular/core';

import { WeatherPageResultsComponent } from './weatherPageResults';
import { ComponentsModules } from 'src/modules/components.module';

@NgModule({
  declarations: [
    WeatherPageResultsComponent
  ],
  imports: [
    ComponentsModules
  ],
  providers: [],
  // bootstrap: [WeatherPageResultsComponent]
})

export class WeatherPageResultsModule { }
