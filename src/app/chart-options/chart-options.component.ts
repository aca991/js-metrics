import {
  Component,
  Output,
  OnInit, OnDestroy,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { TemperatureOptions } from 'app/shared/temperature-options';

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
    // let beginDate = new Date();
    // beginDate.setDate(beginDate.getDate() - 7);
    this.options = {
      beginDate: '2017-01-01',
      endDate: '2017-02-01',
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
        //TODO save previous options and compare them to current object.assign (nikako =)
      });
  }

  ngOnDestroy(): void {
    this.formChangeSubscription.unsubscribe();
  }
  //TODO rename component to temperature options component

}
