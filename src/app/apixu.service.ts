import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
  apiKey: String = "af06bbaff704156f154efb352b12f455"
  constructor(private http: HttpClient) {}

  getWeather(location:any):Observable<any>{
    return this.http.get(this.serviceUrl +'?q=' + location + '&APPID=' + this.apiKey
  );
  }
  
}
