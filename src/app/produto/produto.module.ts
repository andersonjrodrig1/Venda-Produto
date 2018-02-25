import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { MenuComponent } from '../menu/menu.compoent';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    RouterModule,
    MenuModule
  ],
  exports: [],
  providers: []
})
export class ProdutoModule { }