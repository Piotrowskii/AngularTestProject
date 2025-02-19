import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentWeatherData } from '../models/current-weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private apiUrl:string = "https://api.open-meteo.com/v1/forecast?latitude=52.4069&longitude=16.9299&current=temperature_2m,relative_humidity_2m,cloud_cover,pressure_msl,wind_speed_10m&hourly=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1";
  private currentWeather: CurrentWeatherData = new CurrentWeatherData();

  private hours: string[] = [];
  private temperature24h: number[] = [];

  constructor(private httpClient: HttpClient) {}

  async updateWeather(): Promise<void>{
    
    try{

      var response = await fetch(this.apiUrl);

      if(!response.ok){
        console.log("Błąd przy pobieraniu danych");
        return;
      }

      var jsonData = await response.json();
      this.currentWeather = new CurrentWeatherData(jsonData);
      this.hours = jsonData.hourly.time;

      //zostawianie tylko godzin
      for (let i = 0; i < this.hours.length; i++) {
        this.hours[i] = this.hours[i].split('T')[1];
      }

      this.temperature24h = jsonData.hourly.temperature_2m;

      console.log("Pomyślnie pobrano dane pogodowe");

    }
    catch(error){

      console.log("Błąd przy pobieraniu danych");
    }
    
  }


  get24htemperature(): number[]{
    return this.temperature24h;
  }

  get24hlabels(): string[]{
    return this.hours;
  }

  getCurrentWeather(): CurrentWeatherData{
    return this.currentWeather;
  }

  showCurrentWeahterData(){
    console.log("current data: ",this.currentWeather);
  }

}
