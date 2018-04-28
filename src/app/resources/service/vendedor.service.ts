import { Injectable } from '@angular/core';
import { VENDEDORES } from './../mock/vendedor-mock';
import { Vendedor } from './../models/vendedor.model';
import { HttpService } from '../http/http.service';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class VendedorService {

  constructor(
    private _http: HttpService
  ) { }

  getVendedores() {
    let api = '/vendedor';
    let url = environment.api + api;

    return this._http.get(url);
  }

  getVendedoresMock(): Vendedor[] {
    return VENDEDORES;
  }
}