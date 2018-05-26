import { Injectable } from '@angular/core';
import { Produto } from './../models/produto.model';
import { PRODUTOS } from './../mock/produto-mock';
import { environment } from '../../../environments/environment.prod';
import { HttpService } from '../http/http.service';

@Injectable()
export class ProdutoService {

	constructor(
    private http: HttpService
  ) { }

	getProdutos() {
    var url = environment.api + '/produto';    
    return this.http.get(url);
	}

	getProdutosMock(): Produto[] {
		return PRODUTOS;
  }
  
  postProduto(params: any) {
    var url = environment.api + '/produto';
    return this.http.post(url, params);
  }
}