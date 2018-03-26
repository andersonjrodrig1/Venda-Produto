import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedorComponent } from './vendedor.component';
import { MenuComponent } from '../resources/menu/menu.compoent';
import { MenuModule } from '../resources/menu/menu.module';
import { VendedorService } from '../resources/service/vendedor.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    VendedorComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule
  ],
  exports: [],
  providers: [
    VendedorService
  ]
})
export class VendedorModule {

}