import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendaComponent } from './venda.component';
import { MenuComponent } from '../resources/menu/menu.compoent';
import { MenuModule } from '../resources/menu/menu.module';

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