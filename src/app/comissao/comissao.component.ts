import { Component, OnInit } from '@angular/core';
import { Comissao } from '../resources/model/comissao.model';
import { ComissaoService } from '../resources/service/comissao.service';

@Component({
  moduleId: module.id,
  selector: 'comissao',
  templateUrl: 'comissao.component.html'
})
export class ComissaoComponent implements OnInit {  
  public comissoes: Comissao[] = [];

  constructor(
    private _service: ComissaoService
  ) { }
  
  ngOnInit(): void {
    this.buscarComissoes();
  }

  buscarComissoes(): void {
    this.comissoes = this._service.getComissoesMock();
  }

}