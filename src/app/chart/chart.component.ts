import { Component, Input } from '@angular/core';
import * as highcharts from 'highcharts';

import { TemperatureChartData } from '../shared/model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
//TODO rename component to temperature chart component
export class ChartComponent {
  @Input()
  set chartData(data: TemperatureChartData) {
    console.log('data', data);
    this.options.series = data.series.map((s) => {
      let hs: highcharts.IndividualSeriesOptions = {
        name: s.name,
        data: s.data.map(d => d.temperature),
      };
      return hs;
    });

    this.options = Object.assign({}, this.options);
  }

  options: highcharts.Options = {
    title: 'Temperature data',
  };

}
