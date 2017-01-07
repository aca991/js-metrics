import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { ApiResponse, HighTemperatureData, LowTemperatureData, SiteWeatherData, TemperatureOptions } from './model';

@Injectable()
export class TemperatureService {


    constructor(private _http: Http){}

    getSiteWeatherData(): Observable <Object> {
      //TODO return Observable<SiteWeatherData>
        return this._http.get(environment.api.temperature.high)
            .map((response: Response) => response.json() as ApiResponse<SiteWeatherData<HighTemperatureData>>)
            .do(data => console.log('All: ' + JSON.stringify(data.result.weather)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
