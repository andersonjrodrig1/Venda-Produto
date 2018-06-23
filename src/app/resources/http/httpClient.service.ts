import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClientService {

  constructor(
    private http: Http
  ){ }

  getHeader() {
    var header = new Headers();
    header.append('Content-Type', 'application/json');

    return header;
  }

  get(url: string, param?: any) {
    if (param) {
      url = url + '/' + param;
    }
    return this.http.get(url);
  }

  post(url: string, body: any) {
    var headers = { headers: this.getHeader() };
    return this.http.post(
      url,
      body,
      headers);
  }
  
  put() {

  }

  patch() {

  }

  delete(url: string) {
    var headers = { headers: this.getHeader() };
    return this.http.delete(
      url,
      headers);
  }
}