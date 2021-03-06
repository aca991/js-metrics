import { Component, Input } from '@angular/core';
import * as highcharts from 'highcharts';

import { TemperatureChartData } from '../shared/model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input()
  set chartData(data: TemperatureChartData) {

    this.options.series = data.series.map((s) => {
      let hs: highcharts.IndividualSeriesOptions = {
        name: s.name,
        data: s.data.map(d => d.temperature),
      };
      return hs;
    });

    let categories: Array<string> = [];
    data.series.map((s) => {
      s.data.map(d => {
        if (categories.indexOf(d.date) === -1) {
          categories.push(d.date);
        }
      });
    });

    this.options.xAxis = { categories: categories };

    this.options = Object.assign({}, this.options);
  }

  options: highcharts.Options = {
    title: 'Temperature data',
  };

}
