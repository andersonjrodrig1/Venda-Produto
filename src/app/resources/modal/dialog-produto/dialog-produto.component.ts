import { Component, OnInit, Inject } from '@angular/core';
import { DialogInterfaceComponent } from './../dialog-interface/dialog-interface.component';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { Produto } from '../../models/produto.model';
import { FormBuilder, FormControl, FormGroup, NgForm, FormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';
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

  cadastrar() {
    debugger
    let produto = JSON.stringify(this.produto);
    this.service.postProduto(produto);
    this.close();
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