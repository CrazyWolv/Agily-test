import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/interfaces';

@Component({
  selector: 'app-weatherpage-results',
  templateUrl: './weatherPageResults.html',
  styleUrls: ['./weatherPageResults.css']
})
export class WeatherPageResultsComponent implements OnInit {

  public cityName:string | undefined;
  public clicked:boolean = false;

  public Days = [
    {temp:"25°", day:"Monday", clicked:false},
    {temp:"29°", day:"Thursday", clicked:false},
    {temp:"45°", day:"Tuesday", clicked:false},
    {temp:"15°", day:"Sunday", clicked:false},
    {temp:"11°", day:"Saturday", clicked:false},
    {temp:"9°", day:"Wednesday", clicked:false},
  ];

  public day1:Card = {
    day:"Monday 16th",
    pressure:"1029",
    temp:"25°",
    humidity:"25",
    cityName:"Paris",
    wind:"29",
    clicked:false,
  };

  constructor(private router:Router){
    // console.log(this.router.getCurrentNavigation()?.extras?.state?.['cityName']);

    this.cityName = this.router.getCurrentNavigation()?.extras?.state?.['cityName'];
  }
  
  ngOnInit(): void {

  }

  public goBackToSearch(){
    this.router.navigateByUrl('weather');
  }
}
