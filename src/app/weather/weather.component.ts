import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  WeatherData:any;
  data:any;
  constructor() {
    
   }

  ngOnInit(): void {
    this.WeatherData={
      main:{}
    }
    this.getweatherData()
  }
  
  getweatherData(){
    let data=JSON.parse('{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":288.28,"feels_like":287.44,"temp_min":286.9,"temp_max":290.2,"pressure":1008,"humidity":61},"visibility":10000,"wind":{"speed":4.63,"deg":0},"clouds":{"all":18},"dt":1650793591,"sys":{"type":2,"id":268730,"country":"GB","sunrise":1650775566,"sunset":1650827453},"timezone":3600,"id":2643743,"name":"London","cod":200}')
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Chennai&APPID=426ff5c2f9e00d5a1a5c25dac78f7c6e')
    .then(response=>response.json())
    .then(data=>this.setweatherData(data))
    this.setweatherData(data)
  }
  setweatherData(data: any){
    this.WeatherData=data;
    let sunsetT=new Date(this.WeatherData.sys.sunset*1000);
    let current=new Date();
    this.WeatherData.sunset_time = sunsetT.toLocaleTimeString();
    this.WeatherData.isDay = (current.getTime() < sunsetT.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
