import { Injectable } from '@angular/core';
import { Produto } from './../models/produto.model';
import { PRODUTOS } from './../mock/produto-mock';
import { environment } from '../../../environments/environment.prod';
import { HttpClientService } from '../http/httpClient.service';

@Injectable()
export class ProdutoService {

	constructor(
    private http: HttpClientService
  ) { }

	getProdutos(param?: any){
    var url = environment.api + '/produto';
    if (param) {
      url += '/' + param;
    }
    return this.http.get(url);
	}

	getProdutosMock(): Produto[] {
		return PRODUTOS;
  }
  
  postProduto(params: any) {
    var url = environment.api + '/produto';
    return this.http.post(url, params);
  }

  deleteProduto(id: any) {
    var url = environment.api + '/produto/' + id;
    return this.http.delete(url);
  }
}