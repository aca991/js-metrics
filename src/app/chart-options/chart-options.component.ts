import {
  Component,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';

import { IChartOptions } from 'app/shared/temp-options';

@Component({
  selector: 'app-chart-options',
  templateUrl: './chart-options.component.html',
  styleUrls: ['./chart-options.component.css']
})
export class ChartOptionsComponent implements OnInit {
  options: IChartOptions[];

  @Output() beginDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() endDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() highTempsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() lowTempsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() autoFitClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  set beginDate(date: Date) {
    this.beginDateChange.emit(date);
  }

  set endDate(date: Date) {
    this.endDateChange.emit(date);
  }

  set highTemps(isChecked: boolean) {
    this.highTempsChange.emit(isChecked);
  }

  set lowTemps(isChecked: boolean) {
    this.lowTempsChange.emit(isChecked);
  }

  autoFit(): void {
    this.autoFitClicked.emit();
  }

  ngOnInit(): void {
  }

}
