import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class TempService {

    private _productUrl = 'assets/api/temp_data_high.json';

    constructor(private _http: Http){}

    getData(): Observable <Object> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <Object> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
