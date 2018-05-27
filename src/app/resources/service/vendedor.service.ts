import { Injectable } from '@angular/core';
import { VENDEDORES } from './../mock/vendedor-mock';
import { Vendedor } from './../models/vendedor.model';
import { HttpClientService } from '../http/httpClient.service';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class VendedorService {

  constructor(
    private http: HttpClientService
  ) { }

  getVendedores() {
    let api = '/vendedor';
    let url = environment.api + api;

    return this.http.get(url);
  }

  getVendedoresMock(): Vendedor[] {
    return VENDEDORES;
  }
}