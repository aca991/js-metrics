import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  beginDate: Object;
  endDate: Object;

  @Output() dateClicked: EventEmitter<Object> =
        new EventEmitter<Object>();


  ngOnInit() {
  }

  onClick(): void {
    let dateRange = {begin: this.beginDate, end: this.endDate};
    console.log(dateRange);
    this.dateClicked.emit(dateRange);
  }

}
