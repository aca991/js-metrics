import {
  Component,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-chart-options',
  templateUrl: './chart-options.component.html',
  styleUrls: ['./chart-options.component.css']
})
export class ChartOptionsComponent {

  @Output() beginDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() endDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() highTempsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() lowTempsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() autoFitChange: EventEmitter<void> = new EventEmitter<void>();

  set beginDate(date: Date) {
    this.beginDateChange.emit(date);
  }

  set endDate(date: Date) {
    this.endDateChange.emit(date);
  }

}
