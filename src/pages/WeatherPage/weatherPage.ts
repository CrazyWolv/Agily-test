import { ApiCalls } from 'src/provider/api/apiCall';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/interfaces';

@Component({
  selector: 'app-weatherpage',
  templateUrl: './weatherPage.html',
  styleUrls: ['./weatherPage.css']
})
export class WeatherPageComponent{

  public search: string = '';
  public message: string = '';
  public data:Array<any> = []

  public day1:Card = {
    day:"Monday 16th",
    temp:"25°",
    humidity:"25",
    cityName:"Paris",
    wind:"29",
    pressure:"1029",
    clicked:false,
  };

  public day2:Card = {
    day:"Monday 16th",
    temp:"29°",
    humidity:"12",
    cityName:"Jarny",
    wind:"38",
    pressure:"1029",
    clicked:false,
  }

  public Days={

  }

  constructor(
    private router:Router,
    private api:ApiCalls,
  ){
    console.log(this.day1);
  }

  public async searchCityWeather(search:string):Promise<void>{
    if(this.search.length > 3){
      this.router.navigate(['weather/', search], { state: { cityName: this.search }})
    }else{
      this.message = "Veuillez renseigner le nom d'une ville d'au moins 3 caractères."
    }
  }
}
