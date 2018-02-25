import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'menu-navbar',
  templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {
  public produto: any;
  public vendedor: any;
  public venda: any;
  public comissoes: any;

  constructor() { }

  ngOnInit(): void {
    this.produto = '/produto';
    this.vendedor = '/vendedor';
    this.venda = '/venda';
    this.comissoes = '';
  }
}