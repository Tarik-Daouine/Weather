import { Weather } from './models/weather';
import { ApixuService } from './../apixu.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  Weather: Weather = new Weather()
  

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
    ) { }

  public WeatherSearchForm!: FormGroup;
  public weatherData: any;
  ngOnInit(): void {
    
    console.log( this.apixuService.getWeather('paris').subscribe( data => console.log(data)))

    this.WeatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPIXU(formValues:any) {
    this.apixuService.getWeather(formValues.location).subscribe(
    data => {this.Weather.city = data['name'],
    this.Weather.conditions = data['weather'][0]['main']
    this.Weather.temperature = Math.round((data['main']['temp'] - 273.15)*1.8 + 32)}
   
   
    )}

}
