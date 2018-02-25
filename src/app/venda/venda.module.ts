import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendaComponent } from './venda.component';
import { MenuComponent } from '../menu/menu.compoent';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    VendaComponent
  ],
  imports: [
    RouterModule,
    MenuModule
  ],
  exports: [],
  providers: []
})
export class VendaModule {

}