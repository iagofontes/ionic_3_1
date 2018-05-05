import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {

    // protected _http: HttpClient;
    constructor(protected _http: HttpClient) {
//   constructor(public _http: Http) {
        // this._http = new HttpClient();
    }

}
