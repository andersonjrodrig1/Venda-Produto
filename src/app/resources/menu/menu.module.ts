import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.compoent';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule,
    FormsModule
  ],
  exports: [
    MenuComponent
  ],
  providers: []
})
export class MenuModule { }