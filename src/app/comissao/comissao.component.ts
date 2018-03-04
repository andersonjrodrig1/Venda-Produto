import { Component, OnInit } from '@angular/core';
import { Comissao } from '../resources/models/comissao.model';
import { ComissaoService } from '../resources/service/comissao.service';
import { VendaRealizada } from '../resources/models/venda_realizada.model';

@Component({
  moduleId: module.id,
  selector: 'comissao',
  templateUrl: 'comissao.component.html'
})
export class ComissaoComponent implements OnInit {  
  public comissoes: Comissao[] = [];
  public vendasRealizadas: VendaRealizada[] = [];

  constructor(
    private _service: ComissaoService
  ) { }
  
  ngOnInit(): void {
    this.buscarComissoes();
    this.buscarVendasRealizadas();
  }

  buscarComissoes(): void {
    this.comissoes = this._service.getComissoesMock();
  }

  buscarVendasRealizadas(): void {
    this.vendasRealizadas = this._service.getVendaRealizadaMock();
  }
}