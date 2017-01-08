import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineLatest';

import { environment } from '../../environments/environment';
import { ApiResponse, HighTemperatureData, LowTemperatureData, SiteWeatherData, TemperatureOptions, TemperatureChartData } from './model';

@Injectable()
export class TemperatureService {

    constructor(private _http: Http) { }

    getSiteWeatherData(): Observable<any> {
        // TODO return Observable<SiteWeatherData>
        let res: Observable<any>;

        let highTemperatureData = this._http.get(environment.api.temperature.high)
            .map((response: Response) => response.json() as ApiResponse<SiteWeatherData<HighTemperatureData>>)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

        let lowTemperatureData = this._http.get(environment.api.temperature.low)
            .map((response: Response) => response.json() as ApiResponse<SiteWeatherData<LowTemperatureData>>)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);

        console.log(highTemperatureData);
        console.log(lowTemperatureData);

        res.combineLatest(
            highTemperatureData,
            lowTemperatureData
        );

        return res;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
