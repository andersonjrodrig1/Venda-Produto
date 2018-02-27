import { Injectable } from '@angular/core';
import { COMISSAO } from './../mock/comissao-mock';
import { Comissao } from './../models/comissao.model';

@Injectable()
export class ComissaoService { 

  constructor(){ }

  getComissoesMock(): Comissao[] {
    return COMISSAO;
  }
}