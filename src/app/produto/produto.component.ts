import { Component, OnInit, Input } from '@angular/core';
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
  public pesquisa: any;

  constructor(
    private service: ProdutoService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  onSearch($event: any) {
    if ($event) {
      this.pesquisa = $event;
      this.getProdutos(this.pesquisa);
    }
  }

  getProdutos(param?: any) {
    this.service.getProdutos(param).subscribe(data => {
      const response = data.json();
      if (response !== undefined && response != null) {
        this.produtos = [];
        response.forEach(element => {
          this.produtos.push(new Produto(element));
        });
      }
    });
  }

  deleteProduto(id: any) {
    this.service.deleteProduto(id).subscribe(() => 
      this.getProdutos()
    );
  }

  showDialogProduto() {
    const params = { title: 'Cadastrar Produto' };
    const dialog = this.dialogService.addDialog(DialogProdutoComponent, params);
    dialog.subscribe(() => this.getProdutos());
  }
}