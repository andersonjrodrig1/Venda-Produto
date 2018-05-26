import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Jsonp } from '@angular/http';

@Injectable()
export class HttpService {
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
		var headers = new RequestOptions({ headers: header });
		return this.http.post(
			url,
			body,
			headers
		);
	}
}