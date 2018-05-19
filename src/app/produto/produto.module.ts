import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { MenuComponent } from '../resources/menu/menu.compoent';
import { MenuModule } from '../resources/menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoService } from '../resources/service/produto.service';
import { DialogProdutoComponent } from './../resources/modal/dialog-produto/dialog-produto.component';

@NgModule({
  declarations: [
    ProdutoComponent,
    DialogProdutoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MenuModule,
    RouterModule
  ],
  exports: [],
  entryComponents: [
    DialogProdutoComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }