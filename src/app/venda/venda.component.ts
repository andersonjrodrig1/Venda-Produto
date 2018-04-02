import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../resources/service/vendedor.service';
import { Vendedor } from '../resources/models/vendedor.model';
import { Produto } from '../resources/models/produto.model';
import { ProdutoService } from '../resources/service/produto.service';
import { VendaRealizada } from '../resources/models/venda_realizada.model';

@Component({
  moduleId: module.id,
  selector: 'venda',
  templateUrl: 'venda.component.html'
})
export class VendaComponent implements OnInit {

  public vendas: VendaRealizada[] = [];
  public vendedores: Vendedor[] = [];
  public produtos: Produto[] = [];
  public venda: VendaRealizada;
  public produtoSelecionado: any;
  public vendedorSelecionado: any;
  public quantidade: any;
  public dataVenda: any;

  constructor(
    private _vendedorService: VendedorService,
    private _produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.getVendedores();
    this.getProdutos();
  }

  getVendedores(): void {
    this.vendedores = this._vendedorService.getVendedoresMock();
  }

  getProdutos(): void {
    this.produtos = this._produtoService.getProdutosMock();
  }

  resevarVenda() {
    this.venda = new VendaRealizada();
    this.venda.produto = new Produto();
    this.venda.vendedor = new Vendedor();
    this.venda.qtdProduto = this.quantidade;
    this.venda.dtVenda = this.dataVenda;    
    this.venda.produto = this.produtoSelecionado;
    this.venda.vendedor = this.vendedorSelecionado;
    this.venda.ttlVenda = this.venda.produto.vrProduto * this.venda.qtdProduto;

    this.vendas.push(this.venda);
    this.resetFields();
  }

  resetFields() {
    this.produtoSelecionado = undefined;
    this.vendedorSelecionado = undefined;
    this.dataVenda = undefined;
    this.quantidade = undefined;
  }

  keyup($event) {
    var regex = /[^0-9.]/;
    regex.lastIndex = 0;
    var campo = $event;

    if (regex.test(campo.value)) {
      campo.value = campo.value.substring(0, campo.value.length -1);
    }
  }
}