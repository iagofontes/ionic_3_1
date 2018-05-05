import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Carro } from '../../models/carro';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarroServiceProvider {

  constructor(public _http:HttpClient){}

  lista(){
    return this
      ._http
      .get<Carro[]>('http://localhost:8080/api/carro/listaTodos');
  }


}
