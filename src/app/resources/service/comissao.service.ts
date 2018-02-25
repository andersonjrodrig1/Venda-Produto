import { Injectable } from '@angular/core';
import { COMISSAO } from './../mock/comissao-mock';
import { Comissao } from '../entity/comissao';

@Injectable()
export class ComissaoService { 

  constructor(){ }

  getComissoesMock(): Comissao[] {
    return COMISSAO;
  }
}