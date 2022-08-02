import { Component, Input, OnInit } from '@angular/core';
import { miniCard } from 'src/interfaces';

@Component({
  selector: 'app-miniCard',
  templateUrl: './miniCard.html',
  styleUrls: ['./miniCard.css']
})
export class MiniCardComponent implements OnInit {
  @Input() miniCard: null | miniCard = null;

  public temp: string | number = '';
  public day:string = '';
  public clicked:boolean = false;

  constructor() {
  }
  
  ngOnInit(): void {
    // console.log(this.miniCard);
    this.miniCard!.day = this.miniCard!.day.slice(0,3);
  }

  public clickOnCard(){
    this.clicked = !this.clicked;
  }
}
