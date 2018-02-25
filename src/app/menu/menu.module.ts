import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.compoent';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    MenuComponent
  ],
  providers: []
})
export class MenuModule { }