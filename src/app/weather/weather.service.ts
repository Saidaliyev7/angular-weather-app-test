import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class WeatherService {
    constructor(private httpClient: HttpClient) {

    }
    key="7a9ec65f0a47b7bd7fb81e65bdff6d1d"

    getWheatherInfortation(lat:number,long:number){
        let url =`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/`+this.key+`/`+lat+`,`+long+`?lang=az`

        return this.httpClient.get(url)
    }
}