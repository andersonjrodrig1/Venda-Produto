import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedorComponent } from './vendedor.component';
import { MenuComponent } from '../menu/menu.compoent';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    VendedorComponent
  ],
  imports: [
    RouterModule,
    MenuModule
  ],
  exports: [],
  providers: []
})
export class VendedorModule {

}