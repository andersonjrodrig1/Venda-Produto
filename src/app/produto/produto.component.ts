import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ProdutoService } from '../resources/service/produto.service';
import { Produto } from '../resources/models/produto.model';
import { DialogProdutoComponent } from './../resources/modal/dialog-produto/dialog-produto.component';

@Component({
  moduleId: module.id,
  selector: 'app-produto',
  templateUrl: 'produto.component.html'
})
export class ProdutoComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(
    private _service: ProdutoService,
    private _dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this._service.getProdutos().subscribe(
      data => this.produtos = data.json()
    );
  }

  showDialogProduto() {
    const params = {
      title: 'Cadastrar Produto',
      name: 'Nome do Produto'
    };

    const dialogo = this._dialogService.addDialog(DialogProdutoComponent, params).subscribe(
      response => { }
    );
  }
}