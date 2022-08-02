import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormPageModule } from '../pages/FormPage/formPage.module';
import { FormPageWeatherModule } from '../pages/FormPageWeather/formPageWeather.module';
import { WeatherPageModule } from '../pages/WeatherPage/weatherPage.module';
import { WeatherPageResultsModule } from '../pages/WeatherPageResults/weatherPageResults.module';
import { NotFoundPageModule } from '../pages/NotFoundPage/notFoundPage.module';
import { CardsComponent } from 'src/components/Cards/card';
import { MiniCardComponent } from 'src/components/MiniCards/miniCard';

@NgModule({
	declarations: [
		CardsComponent, 
		MiniCardComponent
	],
  	imports: [
		CommonModule, FormsModule,
        // FormPageModule, FormPageWeatherModule, 
		// WeatherPageModule, WeatherPageResultsModule,
		// NotFoundPageModule,
	],
	exports: [
		CardsComponent,
		MiniCardComponent,
		FormsModule, CommonModule
	]
})
export class ComponentsModules { }
