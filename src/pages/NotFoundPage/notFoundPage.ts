import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfoundpage',
  templateUrl: './notFoundPage.html',
  styleUrls: ['./notFoundPage.css']
})
export class NotFoundPageComponent {

    constructor(
        private router:Router
    ){}

    public goHome(){
        this.router.navigateByUrl('/');
    }
}
