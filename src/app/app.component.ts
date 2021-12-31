import { Component } from '@angular/core';

import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
  
})
export class AppComponent {
  title: string;
  constructor(private _exampleService: ExampleService){  // In arguments dependency injection ocuurs
   
  }
  ngOnInit(){
    this.title=this._exampleService.somemethod(); 
  }
    // indicates that angular is done creating the components in browser and start executing imediately
}
