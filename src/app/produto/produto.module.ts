import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { MenuModule } from '../resources/menu/menu.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoService } from '../resources/service/produto.service';
import { DialogProdutoComponent } from './../resources/modal/dialog-produto/dialog-produto.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from 'ng2-translate';

@NgModule({
  declarations: [
    ProdutoComponent,
    DialogProdutoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MenuModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    TranslateModule
  ],
  exports: [],
  entryComponents: [
    DialogProdutoComponent
  ],
  providers: [
    ProdutoService
  ]
})
export class ProdutoModule { }