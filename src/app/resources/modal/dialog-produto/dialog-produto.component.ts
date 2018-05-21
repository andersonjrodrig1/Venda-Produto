import { Component, OnInit } from '@angular/core';
import { DialogInterfaceComponent } from './../dialog-interface/dialog-interface.component';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Produto } from '../../models/produto.model';

@Component({
  moduleId: module.id,
  selector: 'app-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.css']
})
export class DialogProdutoComponent extends DialogComponent<DialogInterfaceComponent, boolean> implements DialogInterfaceComponent, OnInit {
  public produto: Produto = new Produto();
  public valor: string;

  title: string;
  message: string;
  name: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  ngOnInit() {
    this.valor = 'Valor do Produto: ';
  }

  cadastrarProduto() {

  }

  limparCampos() {
    this.produto.nmProduto = undefined;
    this.produto.vrProduto = undefined;
  }
}