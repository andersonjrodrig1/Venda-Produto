import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Jsonp, Http } from '@angular/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class HttpClientService {
  
  constructor(
    private http: Http
  ){ }

  getHeader(): Headers {
    var header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Cache-Control','no-cache');
    header.append('Pragma', 'no-cache');
    header.append('Access-Control-Allow-Origin', '*');

    return header;
  }

  get(url: string, param?: any) {
    if (param) {
      url = url + '/' + param;
    }
    return this.http.get(url);
  }

  post(url: string, body: any) {
    var headers = new RequestOptions({ headers: this.getHeader() });
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
    var headers = new RequestOptions({ headers: this.getHeader() });
    return this.http.delete(
      url, 
      headers);
  }
}