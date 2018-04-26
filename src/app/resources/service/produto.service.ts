import { Injectable } from '@angular/core';
import { Produto } from './../models/produto.model';
import { PRODUTOS } from './../mock/produto-mock';
import { environment } from '../../../environments/environment.prod';
import { HttpService } from '../http/http.service';

@Injectable()
export class ProdutoService {

	constructor(
    private _http: HttpService
  ) { }

	getProdutos() {
    var api = '/produto';
    var url = environment.api + api;
    
    return this._http.get(url);
	}

	getProdutosMock(): Produto[] {
		return PRODUTOS;
	}
}