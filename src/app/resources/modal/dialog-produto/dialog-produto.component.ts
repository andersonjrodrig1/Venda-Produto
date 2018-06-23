import { Component, OnInit } from '@angular/core';
import { DialogInterfaceComponent } from './../dialog-interface/dialog-interface.component';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Produto } from '../../models/produto.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutoService } from '../../service/produto.service';

@Component({
  moduleId: module.id,
  selector: 'app-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.css'],
  providers: [ FormBuilder]
})
export class DialogProdutoComponent extends DialogComponent<DialogInterfaceComponent, boolean> implements DialogInterfaceComponent, OnInit {
  public frmProdutoModal: FormGroup;
  public produto: Produto = new Produto({});
  public nome_produto: string;
  public valor_produto: string;
  public fieldObj: any;

  title: string;

  constructor(
    dialogService: DialogService,
    private formBuilder: FormBuilder,
    private service: ProdutoService,
  ){
    super(dialogService);
  }

  ngOnInit() {
    this.initializeObj();
    this.initializeForm();
  }

  initializeObj() {
    this.fieldObj = {
      nome: '',
      valor: ''
    };
  }

  initializeForm() {
    this.frmProdutoModal = this.formBuilder.group({
      nmProduto: this.fieldObj.nome,
      vrProduto: this.fieldObj.valor
    });
  }

  cadastrarProduto() {
    const produto = { 
      nmProduto: this.produto.nmProduto, 
      vrProduto: this.produto.vrProduto 
    };
    
    this.service.postProduto(produto).subscribe(data => {
      this.close();
    },
    err => {
      this.close();
    });
  }

  limparCampos() {
    this.produto.nmProduto = undefined;
    this.produto.vrProduto = undefined;
  }

  label = {
    nmProduto: 'Nome do Produto',
    vrProduto: 'Valor do Produto'
  }
}