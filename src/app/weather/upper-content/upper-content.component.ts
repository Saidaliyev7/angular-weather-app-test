import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CustomResponse } from '../interface/custom-response.interface';
import { WeatherInterface } from './interface/weather.interface';

@Component({
    selector: 'upper-content-name',
    templateUrl: './upper-content.component.html',
    styleUrls: ['./upper-content.component.scss']
})
export class UpperContentComponent implements OnInit {
    geolocationPosition: any;
    weather: WeatherInterface;
    today:string;
    constructor(private _wheatherService: WeatherService) { }

    ngOnInit(): void {
        this.returnCurrentPosition()
        this.today= this.formatDate(new Date())
        
        
    }
     weekDate() {
        var d = new Date();
        var daysName = [
            "Sunday","Monday", "Tuesday" ,"Wednesday","Thursday" ,"Friday","Saturday"
          ];
      
 
          return daysName[d.getDay()];
     }

    formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }
    returnSlicedString(element, item) {
        var index = element.indexOf(item) + 1;
        return element.substring(index);

    }
    returnWindSpeed(element) {

        return Math.round(element);

    }
    hourlyMaxTemp(array) {
        var x = 0;

        for (var i = 0; i < array.data.length; i++) {
            //console.log(i)
            if (array.data[i].apparentTemperature > x) {

                x = array.data[i].apparentTemperature;
                // console.log(x)
            } else {

            }

        }
        return x;


    };

    hourlyMinTemp(array) {
        var x = array.data[0].apparentTemperature;

        for (var i = 0; i < array.data.length; i++) {
            //console.log(array.data[i].apparentTemperature)
            if (array.data[i].apparentTemperature < x) {
                
                x = array.data[i].apparentTemperature;
                // 
            } else {

            }

        }
        //console.log(x)
        return x;
    };
    // whatIconIs(weather) {
    //     if(weather=="wind") {
    //         re
    //     }
    // }
    fromFaranheihtToCelcius(faranheit) {
        var celcius = (faranheit - 32) * 5 / 9;
        return Math.round(celcius);
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
