import { Injectable } from '@angular/core';
import { VENDA_REALIZADA } from './../mock/venda_realizada-mock';
import { VendaRealizada } from './../models/venda_realizada.model';
import { HttpService } from '../http/http.service';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class VendaService {

  constructor(
    private _httpService: HttpService
  ) { }

  getVendasRealizadas() {
    let rota = 'venda_realizada'
    let urlApi = `${environment.api}/${rota}`;

    return this._httpService.get(urlApi);
  }

  getVendasRealizadasMock() {
    return VENDA_REALIZADA;
  }

  setVenda(param?: any) {
    let rota = '/venda_realizada';
    let url = `${environment.api}${rota}`;

    return this._httpService.post(url, param);
  }
}