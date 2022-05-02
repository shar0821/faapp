import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { allAppRoutes } from './routes';
//import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    //RouterModule.forRoot(allAppRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
