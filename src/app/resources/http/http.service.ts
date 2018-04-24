import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

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
		if (param){
			url = `${url}/${param}`;
		}
		return this._http.get(url);
	}
}