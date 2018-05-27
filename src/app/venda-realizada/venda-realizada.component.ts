import { Component, OnInit } from '@angular/core';
import { VendaRealizada } from '../resources/models/venda_realizada.model';
import { VendaService } from '../resources/service/venda.service';

@Component({
  moduleId: module.id,
  selector: 'venda-realizada',
  templateUrl: 'venda-realizada.component.html'
})
export class VendaRealizadaComponent implements OnInit {
  public vendas: VendaRealizada[] = [];

  constructor(
    private _vendaRealizadaService: VendaService
  ) { }

  ngOnInit() {
    this.getVendasRealizadas();
  }

  getVendasRealizadas() {
    this._vendaRealizadaService.getVendasRealizadas()
      .subscribe(data => {
        data => {}
      });
  }
}