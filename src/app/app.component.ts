import { Component } from '@angular/core';

import { TemperatureService } from './shared/temperature.service';
import { TemperatureOptions } from './shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options: Highcharts.Options = {
    title : { text : 'JS Metrics' },
    series: [{

    }]
  };
  data: Object;

  constructor(
    private _tempService: TemperatureService,
  ) {
  }

  private updateChartOptions(): void {
    this.options = {
      title : { text : 'JS Metrics' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }

  autoFitClicked() {
    console.log('emitovano autofit');
  }

  onOptionsChange(options: TemperatureOptions): void {
    console.log('emitovano options', options);
    this._tempService.getSiteWeatherData().subscribe();
  }

}
