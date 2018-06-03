import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';
import { ProdutoService } from '../resources/service/produto.service';
import { Produto } from '../resources/models/produto.model';
import { DialogProdutoComponent } from './../resources/modal/dialog-produto/dialog-produto.component';
import { element } from 'protractor';

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
    this.service.getProdutos().subscribe(data => {
        let elements = data;
        this.produtos = elements.json();
      });
  }

  deleteProduto(id: any) {
    this.service.deleteProduto(id).subscribe(data => 
      this.getProdutos()
    );
  }

  showDialogProduto() {
    const params = { title: 'Cadastrar Produto' };
    const dialog = this.dialogService.addDialog(DialogProdutoComponent, params);
    dialog.subscribe(resp => this.getProdutos());
  }
}