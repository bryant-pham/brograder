import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
  constructor(private http: Http) {
  }

  post(uri: string, body: any): Observable {
    let bodyAsString = JSON.stringify(body);
    return this.http.post(uri, {body: bodyAsString})
      .map(response => response.json());
  }
}
