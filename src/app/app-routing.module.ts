import { WeatherPageComponent } from './../pages/WeatherPage/weatherPage';
import { NotFoundPageComponent } from './../pages/NotFoundPage/notFoundPage';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from 'src/pages/FormPage/formPage';

const routes: Routes = [
  {path:'', component:FormPageComponent},
  {path:'weather', component:WeatherPageComponent},
  {path:'**', component:NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
