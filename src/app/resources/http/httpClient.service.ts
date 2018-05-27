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

		return header;
	}

	get(url: string, param?: any) {
		if (param) {
			url = `${url}/${param}`;
		}
		return this.http.get(url);
	}

	post(url: string, body: any) {
		var header = this.getHeader();
		var headers = new RequestOptions({ 
				headers: header
			});
		return this.http.post(
      url,
      body,
      headers);
	}
}