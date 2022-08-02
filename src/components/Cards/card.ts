import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { Card } from 'src/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: 'card.html',
  styleUrls: ['card.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CardsComponent implements OnInit {
  @Input() card: null | Card = null;

  public temp: string | number = '';
  public day:string = '';
  public cityName: string = '';
  public pressure:string | number = '';
  public humidity:string | number = '';
  public wind:string | number = '';
  public clicked:boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.card);
  }
  
 //TODO: function when a card is flipped
    // public flipCardOnClick(){
        
    // }

}