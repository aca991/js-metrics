import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  options: Object;

  constructor() {
    this.options = {
      title: { text: 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }

onDateClicked(dateRange: Object): void {
  console.log('emitovano', dateRange);
}

  ngOnInit() {
  }

}