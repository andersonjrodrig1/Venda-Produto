import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ProdutoService } from '../resources/service/produto.service';
import { Produto } from '../resources/models/produto.model';
import { DialogProdutoComponent } from './../resources/modal/dialog-produto/dialog-produto.component';

@Component({
  selector: 'app-produto',
  templateUrl: 'produto.component.html'
})
export class ProdutoComponent implements OnInit {
  public produtos: Produto[] = [];

  constructor(
    private service: ProdutoService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos() {
    this.service.getProdutos().subscribe(
      data => this.produtos = data.json()
    );
  }

  showDialogProduto() {
    const params = {
      title: 'Cadastrar Produto'
    };

    const dialogo = this.dialogService.addDialog(DialogProdutoComponent, params).subscribe(
      dialog => this.getProdutos()
    );
  }
}