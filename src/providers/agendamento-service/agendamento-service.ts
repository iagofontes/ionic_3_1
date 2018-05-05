import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AgendamentoServiceProvider {

  private _url = 'http://localhost:8080/api';
  constructor(private _http: HttpClient) {}

  agendar(agendamento){
    return this
      ._http
      .post(this._url+'/agendamento/agenda', agendamento);
  }


}
