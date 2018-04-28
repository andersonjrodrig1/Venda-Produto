import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpService {
	constructor(
		private _http: Http
	){ }

	getHeader(): Headers {
		var header = new Headers();
		header.append('Content-Type', 'application/json');
		header.append('Cache-Control', 'no-cache');

		return header;
	}

	get(url: string, param?: any) {
		if (param) {
			url = `${url}/${param}`;
		}
		return this._http.get(url);
	}

	post(url: string, param?: any) {
		var headers = this.getHeader();
    var options = new RequestOptions({ headers: headers });
    
    if (param) {
      param = JSON.stringify(param);
    }

		return this._http.post(url, param, options);
	}
}