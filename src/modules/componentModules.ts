import { NgModule } from '@angular/core';

import { FormPageModule } from './../pages/FormPage/formPage.module';
import { WeatherPageModule } from './../pages/WeatherPage/weatherPage.module';
import { NotFoundPageModule } from './../pages/NotFoundPage/notFoundPage.module';

@NgModule({
	declarations: [],
  	imports: [
        FormPageModule, WeatherPageModule, NotFoundPageModule,
	],
	exports: []
})
export class ComponentsModules { }
