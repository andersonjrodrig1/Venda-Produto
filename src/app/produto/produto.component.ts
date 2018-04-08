import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../resources/service/produto.service';
import { Produto } from '../resources/models/produto.model';

@Component({
  moduleId: module.id,
  selector: 'produto',
  templateUrl: 'produto.component.html'
})
export class ProdutoComponent implements OnInit {
  public produtos: Produto[] = []

  constructor(
    private _service: ProdutoService
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.produtos = this._service.getProdutosMock();
  }
}