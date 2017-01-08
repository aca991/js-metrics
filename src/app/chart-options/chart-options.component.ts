import {
  Component,
  Output,
  OnInit, OnDestroy,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { TemperatureOptions } from '../shared/model/temperature-options';

@Component({
  selector: 'app-chart-options',
  templateUrl: './chart-options.component.html',
  styleUrls: ['./chart-options.component.css']
})
export class ChartOptionsComponent implements OnInit, OnDestroy {
  options: TemperatureOptions;

  @ViewChild('optionsForm') form: NgForm;
  formChangeSubscription: Subscription;

  @Output() optionsChange = new EventEmitter<TemperatureOptions>();
  @Output() autoFitClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    let beginDate = new Date();
    let endDate = new Date();
    let beginDateStr, endDateStr;

    beginDate.setDate(beginDate.getDate() - 7);
    let beginMonth = (beginDate.getMonth() + 1 < 10) ? '0' + (beginDate.getMonth() + 1) : (beginDate.getMonth() + 1);
    let beginDay = (beginDate.getDate() < 10) ? '0' + beginDate.getDate() : beginDate.getDate();
    beginDateStr = beginDate.getFullYear() + '-' + beginMonth + '-' + beginDay;

    let endMonth = (endDate.getMonth() + 1 < 10) ? '0' + (endDate.getMonth() + 1) : (endDate.getMonth() + 1);
    let endDay = (endDate.getDate() < 10) ? '0' + endDate.getDate() : endDate.getDate();
    endDateStr = endDate.getFullYear() + '-' + endMonth + '-' + endDay;

    this.options = {
      beginDate: beginDateStr,
      endDate: endDateStr,
      highTemps: true,
      lowTemps: true,
    };
  }

  autoFit(): void {
    this.autoFitClicked.emit();
  }

  ngOnInit(): void {
    this.formChangeSubscription =
      this.form.control.valueChanges.subscribe(() => {
        this.optionsChange.emit(this.options);
        // TODO save previous options and compare them to current object.assign (nikako =)
      });
  }

  ngOnDestroy(): void {
    this.formChangeSubscription.unsubscribe();
  }
  // TODO rename component to temperature options component

}
