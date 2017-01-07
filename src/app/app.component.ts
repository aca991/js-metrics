import { Component } from '@angular/core';

import { ChartOptionsService } from './chart-options/chart-options.service';

@Component({
  selector: 'app-root',
  providers: [ChartOptionsService],
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

  constructor(private _chartOptionsService: ChartOptionsService) {
  }

  private updateChartOptions(): void {
    this.options = {
      title : { text : 'JS Metrics' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }

  onEndDateChange(endDate: Date): void {
    console.log('emitovano', endDate);
    this._chartOptionsService.getData().subscribe(
      data => this.data = data
    );
    this.updateChartOptions();
  }

  onBeginDateChange(beginDate: Date): void {
    console.log('emitovano', beginDate);
    this.updateChartOptions();
  }

  onHighTempsChange(isChecked: boolean) {
    console.log('emitovano high');
    this.updateChartOptions();
  }

  onLowTempsChange(isChecked: boolean) {
    console.log('emitovano low');
      this.updateChartOptions();
  }

  autoFitClicked() {
    console.log('emitovano autofit');
  }

}
