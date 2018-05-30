import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../resources/service/vendedor.service';
import { Vendedor } from '../resources/models/vendedor.model';
import { Produto } from '../resources/models/produto.model';
import { ProdutoService } from '../resources/service/produto.service';
import { VendaRealizada } from '../resources/models/venda_realizada.model';
import { VendaService } from '../resources/service/venda.service';

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
    private vendedorService: VendedorService,
    private produtoService: ProdutoService,
    private vendaService: VendaService
  ) { }

  ngOnInit(): void {
    this.getVendedores();
    this.getProdutos();
  }

  getVendedores(): void {
    this.vendedorService.getVendedores().subscribe(
      data => {}
    );
  }

  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(
      data => {}
    );
  }

  efetivarVenda(obj: any): void {
    debugger
    if (obj) {
      this.vendaService.setVenda(obj).subscribe(
        data => {
          this.getProdutos();
          this.removerReserva(obj);
        },
        err => {
          console.log('Error:', err);
        });
    }
  }

  efetivarVendas(obj: any): void {

  }

  resevarVenda(): void {
    this.venda = new VendaRealizada();
    this.venda.produto = new Produto({});
    this.venda.vendedor = new Vendedor();
    this.venda.qtdProduto = this.quantidade;
    this.venda.dtVenda = this.dataVenda;    
    this.venda.produto = this.produtoSelecionado;
    this.venda.vendedor = this.vendedorSelecionado;
    this.venda.ttlVenda = this.venda.produto.vrProduto * this.venda.qtdProduto;

    this.vendas.push(this.venda);
    this.resetFields();
  }

  removerReserva(obj: any): void {
    this.vendas = this.vendas.filter(v => v != obj);
  }

  private resetFields(): void {
    this.produtoSelecionado = undefined;
    this.vendedorSelecionado = undefined;
    this.dataVenda = undefined;
    this.quantidade = undefined;
  }

  private keyup(e): void {
    var regex = /[^0-9.]/;
    regex.lastIndex = 0;
    var campo = e;

    if (regex.test(campo.value)) {
      campo.value = campo.value.substring(0, campo.value.length -1);
    }
  }
}