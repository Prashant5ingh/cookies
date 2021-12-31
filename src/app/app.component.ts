import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cookies';
  constructor(private cookie: CookieService){

  }
  login(){
    console.log("Login Method is Called..")
// once the response is recieved we are going to save those info in our cookie
this.cookie.set("UserId","1237");
this.cookie.set("Usertype","Admin");

//Getting a cookie
alert("User with id ("+ this.cookie.get("UserId")+ ") successfully logged in.")
}
}
