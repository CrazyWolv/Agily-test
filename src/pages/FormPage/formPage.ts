import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formpage',
  templateUrl: './formPage.html',
  styleUrls: ['./formPage.css']
})
export class FormPageComponent {

  public search!: string;
  public message!: string;

  constructor(
    private router:Router,
){}

  public searchCityWeather(search:string){
    if(this.search.length > 3){
      this.router.navigateByUrl('weather', { state: { cityName: this.search }})
    }else{
      this.message = "Veuillez renseigner le nom d'une ville d'au moins 3 caractères."
    }
  }
}
