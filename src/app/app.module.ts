import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { ChartModule } from 'angular2-highcharts';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartOptionsComponent } from './chart-options/chart-options.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ChartOptionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
