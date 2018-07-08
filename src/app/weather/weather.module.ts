import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { UpperContentModule } from './upper-content/upper-content.module';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http'; 
import { LowerContentModule } from './lower-content/lower-content.module';

@NgModule({
    declarations: [WeatherComponent],
    imports: [ CommonModule ,UpperContentModule ,HttpClientModule,LowerContentModule],
    exports: [WeatherComponent],
    providers: [WeatherService],
})
export class WeatherModule {}