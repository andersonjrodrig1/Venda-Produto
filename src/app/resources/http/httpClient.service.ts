import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Jsonp, Http } from '@angular/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class HttpClientService {

  private source = '=?UTF-8?B?RDpcRGVzZW52b2x2aW1lbnRvXFZpc3VhbCBTdHVkaW9cVGVzdGVQcmF0aWNvXFRlc3RlUHJhdGljb1xhcGlccHJvZHV0bw==?=';
  
  constructor(
    private http: Http
  ){ }

  getHeader() {
    var header = new Headers();
    header.append('Content-Type', 'application/json');

    return header;
  }

  getHeaderPost() {
    var header = new Headers();
    header.append('Content-Type', 'application/json; charset=utf-8');
    header.append('Cache-Control','no-cache');
    header.append('Access-Control-Allow-Origin', '*');
    header.append('X-SourceFiles', this.source);

    return header;
  }

  get(url: string, param?: any) {
    if (param) {
      url = url + '/' + param;
    }
    return this.http.get(url);
  }

  post(url: string, body: any) {
    var headers = new RequestOptions({ headers: this.getHeaderPost() });
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