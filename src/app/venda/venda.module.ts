import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendaComponent } from './venda.component';
import { MenuComponent } from '../resources/menu/menu.compoent';
import { MenuModule } from '../resources/menu/menu.module';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../resources/service/produto.service';
import { VendedorService } from '../resources/service/vendedor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VendaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenuModule,
    RouterModule
  ],
  exports: [],
  providers: [
    ProdutoService,
    VendedorService
  ]
})
export class VendaModule {

}