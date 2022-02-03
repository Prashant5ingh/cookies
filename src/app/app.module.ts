import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleService } from './example.service';
import { MainComponent } from './IOT/main/main.component';
// import { LazyAppComponent } from './lazy-app/lazy-app.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
