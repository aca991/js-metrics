import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/combineLatest';
import { Subject } from 'rxjs/Subject';

import { environment } from '../../environments/environment';
import {
  ApiResponse, HighTemperatureData, LowTemperatureData, SiteWeatherData, TemperatureOptions,
  TemperatureChartData, Series, Data
} from './model';

@Injectable()
export class TemperatureService {

  constructor(private _http: Http) { }

  getSiteWeatherData(options: TemperatureOptions): Observable<TemperatureChartData> {
    let res = new Subject<TemperatureChartData>();

    let highTemperatureData = this._http.get(environment.api.temperature.high)
      .map((response: Response) => response.json() as ApiResponse<SiteWeatherData<HighTemperatureData>>)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(e => this.handleError<SiteWeatherData<HighTemperatureData>>(e));

    let lowTemperatureData = this._http.get(environment.api.temperature.low)
      .map((response: Response) => response.json() as ApiResponse<SiteWeatherData<LowTemperatureData>>)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(e => this.handleError<SiteWeatherData<LowTemperatureData>>(e));

    Observable.combineLatest(
      highTemperatureData,
      lowTemperatureData
    ).subscribe(([htd, ltd]) => {
      let data: TemperatureChartData = {
        series: [],
      };
      let highSeries: Series = {
        name: 'High',
        data: [],
      };

      highSeries.data = htd.result.site.weather.map((resultData) => {
        let seriesData: Data = {
          date: resultData.date,
          temperature: resultData.high_temp,
        };
        return seriesData;
      });

      data.series.push(highSeries);

      let lowSeries: Series = {
        name: 'Low',
        data: [],
      };

      lowSeries.data = ltd.result.site.weather.map((resultData) => {
        let seriesData: Data = {
          date: resultData.date,
          temperature: resultData.low_temp,
        };
        return seriesData;
      });

      data.series.push(lowSeries);

      res.next(data);
      res.complete();
    });

    return res.asObservable();
  }

  private handleError<T>(error: ApiResponse<T>): Observable<ApiResponse<T>> {
    console.error(error);
    let apiResponse: ApiResponse<T> = { result: null };
    return Observable.of(apiResponse);
  }
}
