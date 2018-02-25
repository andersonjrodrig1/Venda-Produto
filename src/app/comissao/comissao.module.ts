import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComissaoComponent } from './comissao.component';
import { ComissaoService } from '../resources/service/comissao.service';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    ComissaoComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule
  ],
  exports: [],
  providers: [
    ComissaoService
  ]
})
export class ComissaoModule { }