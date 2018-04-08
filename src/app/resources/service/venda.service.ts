import { Injectable } from '@angular/core';
import { VENDA_REALIZADA } from './../mock/venda_realizada-mock';
import { VendaRealizada } from './../models/venda_realizada.model';

@Injectable()
export class VendaService {

  constructor() { }

  getVendasRealizadasMock() {
    return VENDA_REALIZADA;
  }
}