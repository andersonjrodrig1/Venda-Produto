import { Component, OnInit } from '@angular/core';
import { Vendedor } from './../resources/models/vendedor.model'
import { VendedorService } from '../resources/service/vendedor.service';

@Component({
  moduleId: module.id,
  selector: 'vendedor',
  templateUrl: 'vendedor.component.html'
})
export class VendedorComponent implements OnInit {
  public vendedores: Vendedor[] = [];

  constructor(
    private _service: VendedorService
  ) { }

  ngOnInit() {
    this.getVendedores();
  }

  getVendedores(): void {
    this._service.getVendedores().subscribe(
      data => {}
    );
  }
}