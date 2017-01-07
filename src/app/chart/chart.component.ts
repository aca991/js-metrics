import { Component, Input } from '@angular/core';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
//TODO rename component to temperature chart component
export class ChartComponent {
  @Input() options: highcharts.Options;
}
