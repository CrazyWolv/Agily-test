import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from 'src/pages/FormPage/formPage';
import { FormPageWeatherComponent } from 'src/pages/FormPageWeather/formPageWeather';
import { WeatherPageComponent } from './../pages/WeatherPage/weatherPage';
import { WeatherPageResultsComponent } from './../pages/WeatherPageResults/weatherPageResults';
import { NotFoundPageComponent } from './../pages/NotFoundPage/notFoundPage';


export const routes: Routes = [
  {path:'search',  
  loadChildren: () => import('./../pages/FormPage/formPage.module').then(m => m.FormPageModule), 
  component:FormPageComponent},

  {path:'search/:cityName', 
  loadChildren: () => import('./../pages/FormPageWeather/formPageWeather.module').then(m => m.FormPageWeatherModule), 
  component:FormPageWeatherComponent},

  {path:'weather', 
  loadChildren: () => import('./../pages/WeatherPage/weatherPage.module').then(m => m.WeatherPageModule), 
  component:WeatherPageComponent},

  {path:'weather/:cityName', 
  loadChildren: () => import('./../pages/WeatherPageResults/weatherPageResults.module').then(m => m.WeatherPageResultsModule), 
  component:WeatherPageResultsComponent},

  {path:'', redirectTo:'search', pathMatch:'full'},
  {path:'**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
