import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weatherpage',
  templateUrl: './weatherPage.html',
  styleUrls: ['./weatherPage.css']
})
export class WeatherPageComponent implements OnInit {

  public cityName:string | undefined;

  constructor(private router:Router){
    // console.log(this.router.getCurrentNavigation()?.extras?.state?.['cityName']);

    this.cityName = this.router.getCurrentNavigation()?.extras?.state?.['cityName'];
  }
  
  ngOnInit(): void {

  }



}
