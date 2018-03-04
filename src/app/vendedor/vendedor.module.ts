import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedorComponent } from './vendedor.component';
import { MenuComponent } from '../resources/menu/menu.compoent';
import { MenuModule } from '../resources/menu/menu.module';

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