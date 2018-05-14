import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { MenuComponent } from '../resources/menu/menu.compoent';
import { MenuModule } from '../resources/menu/menu.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoService } from '../resources/service/produto.service';

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    CommonModule,
    MenuModule,
    RouterModule
  ],
  exports: [],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }