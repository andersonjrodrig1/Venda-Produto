import { Injectable } from '@angular/core';
import { VENDEDORES } from './../mock/vendedor-mock';
import { Vendedor } from './../models/vendedor.model';

@Injectable()
export class VendedorService {

  constructor() { }

  getVendedoresMock(): Vendedor[] {
    return VENDEDORES;
  }
}