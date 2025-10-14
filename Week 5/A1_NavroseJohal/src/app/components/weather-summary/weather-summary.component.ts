import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

interface WeatherOverview {
  lat: number;
  lon: number;
  tz: string;
  date: string;
  units: string;
  weather_overview: string;
}

@Component({
  selector: 'app-weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.scss'],
  imports: [CommonModule],
})


export class WeatherSummaryComponent  implements OnInit {
weather$: Observable<any> = new Observable();
  constructor(private http:HttpClient) { }

  getStations() {
    this.weather$ = this.http.get<WeatherOverview>('https://api.openweathermap.org/data/3.0/onecall/overview?lat=51.253775&lon=-85.323214&appid=286d47ada85fa43c8e2da32e9a0cae44'
    );
  }

  ngOnInit() {}

}
// prof given api endpoint: https://api.openweathermap.org/data/3.0/onecall/overview?lat=51.253775&lon=-85.323214&appid=286d47ada85fa43c8e2da32e9a0cae44
