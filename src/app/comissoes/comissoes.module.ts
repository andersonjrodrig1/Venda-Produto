import { NgModule } from '@angular/core';
import { ComissoesComponent } from './comissoes.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    ComissoesComponent
  ],
  imports: [
    RouterModule,
    MenuModule
  ],
  exports: [],
  providers: []
})
export class ComissoesModule { }