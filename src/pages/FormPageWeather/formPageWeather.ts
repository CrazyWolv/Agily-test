import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formpage-weather',
  templateUrl: './formPageWeather.html',
  styleUrls: ['./formPageWeather.css']
})
export class FormPageWeatherComponent {

  constructor(
    private router:Router,
  ){}

  public weatherDatas:any[] = [
    {day:"Monday", weather:"sunny", temp:"13°C"},
    {day:"Thursday", weather:"rain", temp:"9°C"},
    {day:"Wednesday", weather:"sunny", temp:"25°C"},
    {day:"Tuesday", weather:"foggy", temp:"16°C"},
  ]

  public goBackToSearch(){
    this.router.navigateByUrl('search');
  }
}
