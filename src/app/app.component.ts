import { Component, OnInit } from '@angular/core';
import { ApiCalls } from 'src/provider/api/apiCall';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private api: ApiCalls,
  ){
    
  }

  ngOnInit(): void {
    // this.api.fetchDatas();
  }
}
