import { Injectable } from '@angular/core';
import { COMISSAO } from './../mock/comissao-mock';
import { VENDA_REALIZADA } from './../mock/venda_realizada-mock';
import { VendaRealizada } from './../models/venda_realizada.model';
import { Comissao } from './../models/comissao.model';

@Injectable()
export class ComissaoService { 

  constructor(){ }

  getComissoesMock(): Comissao[] {
    return COMISSAO;
  }

  getVendaRealizadaMock(): VendaRealizada[] {
    return VENDA_REALIZADA;
  }
}