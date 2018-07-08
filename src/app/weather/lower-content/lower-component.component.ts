import { Component, OnInit } from '@angular/core';
import { WeatherInterface } from '../upper-content/interface/weather.interface';
import { WeatherService } from '../weather.service';

@Component({
    selector: 'lower-component',
    templateUrl: './lower-component.component.html',
    styleUrls: ['./lower-component.component.scss']
})
export class LowerComponent implements OnInit {
    geolocationPosition: any;
    weather: WeatherInterface
    constructor(private _wheatherService: WeatherService) { }

    ngOnInit(): void {
        this.returnCurrentPosition()
     }
     weekDate(i) {
        var d = new Date();
        var daysName = [
            "Sunday","Monday", "Tuesday" ,"Wednesday","Thursday" ,"Friday","Saturday"
          ];
      
 
          return daysName[d.getDay()+i];
     }
     fromFaranheihtToCelcius(faranheit) {
        var celcius = (faranheit - 32) * 5 / 9;
        return Math.round(celcius);
    }
     apparentTemperature(maxTemp,minTemp) {
         return (maxTemp+minTemp)/2
     }
    weatherInformation(lat, long) {
        // console.log("Sakam")
        this._wheatherService.getWheatherInfortation(lat, long).subscribe(response => {

            this.weather = response as WeatherInterface;

            console.log(this.weather)

        });
    }
    returnCurrentPosition() {
        if (window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                position => {
                    this.geolocationPosition = position,
                        console.log(this.geolocationPosition.coords.latitude)
                    this.weatherInformation(this.geolocationPosition.coords.latitude, this.geolocationPosition.coords.longitude)

                },
                error => {
                    switch (error.code) {
                        case 1:
                            console.log('Permission Denied');
                            break;
                        case 2:
                            console.log('Position Unavailable');
                            break;
                        case 3:
                            console.log('Timeout');
                            break;
                    }
                }
            );
        };
        console.log(this.weather)
    }
}
