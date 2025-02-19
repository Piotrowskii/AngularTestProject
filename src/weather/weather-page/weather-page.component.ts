import { Component,OnInit } from '@angular/core';
import { TitleCardComponent } from '../title-card/title-card.component';
import { InfoCardComponent } from '../info-card/info-card.component';
import { CardModule } from 'primeng/card';
import { WeatherApiService } from '../../services/weather-api.service';
import { CurrentWeatherData } from '../../models/current-weather-data';
import { ApexchartCardComponent } from '../apexchart-card/apexchart-card.component';

@Component({
  selector: 'app-weather-page',
  imports: [TitleCardComponent,InfoCardComponent,CardModule,ApexchartCardComponent],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css'
})
export class WeatherPageComponent implements OnInit{


  constructor(private api: WeatherApiService) {}

  hourLabels: string[] = [];
  temperatureValues: number[] = [];



  currentTemperature: number = 0;
  currentPressure: number = 0;
  currentHumidity: number = 0;
  currentCloudCoverage: number = 0;
  currentWindSpeed: number = 0;


  async ngOnInit() {

    await this.api.updateWeather()

    var currentWeather: CurrentWeatherData = this.api.getCurrentWeather();
    
    this.currentTemperature = currentWeather.current.temperature_2m;
    this.currentPressure = currentWeather.current.pressure_msl;
    this.currentWindSpeed = currentWeather.current.wind_speed_10m;
    this.currentHumidity = currentWeather.current.relative_humidity_2m;
    this.currentCloudCoverage = currentWeather.current.cloud_cover;

    this.hourLabels = this.api.get24hlabels();
    this.temperatureValues = this.api.get24htemperature();

  }
  
}
