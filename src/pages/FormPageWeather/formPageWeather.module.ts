import { NgModule } from '@angular/core';

import { FormPageWeatherComponent } from './formPageWeather';
import { ComponentsModules } from 'src/modules/components.module';

@NgModule({
  declarations: [
    FormPageWeatherComponent
  ],
  imports: [
    ComponentsModules
  ],
  providers: [],
  bootstrap: [FormPageWeatherComponent]
})
export class FormPageWeatherModule { }
