import { Component } from '@angular/core';

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
    this.updateChartOptions();
  }

  onBeginDateChange(beginDate: Date): void {
    console.log('emitovano', beginDate);
    this.updateChartOptions();
  }


}
