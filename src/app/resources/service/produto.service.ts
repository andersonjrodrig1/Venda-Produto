import { Injectable } from '@angular/core';
import { Produto } from './../models/produto.model';
import { PRODUTOS } from './../mock/produto-mock';

@Injectable()
export class ProdutoService {

    constructor() { }

    getProdutosMock(): Produto[] {
        return PRODUTOS;
    }
}