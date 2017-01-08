import { Component } from '@angular/core';

import { TemperatureService } from './shared/temperature.service';
import { TemperatureOptions, TemperatureChartData } from './shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chartData: TemperatureChartData = {
    series: [],
  };

  constructor(
    private _tempService: TemperatureService,
  ) {
  }

  autoFitClicked() {
    console.log('emitovano autofit');
  }

  onOptionsChange(options: TemperatureOptions): void {
    console.log('emitovano options', options);
    this._tempService.getSiteWeatherData(options)
      .subscribe(data => this.chartData = data);
  }

}
