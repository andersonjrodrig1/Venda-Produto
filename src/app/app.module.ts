import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ComissoesModule } from './comissoes/comissoes.module';
import { ProdutoModule } from './produto/produto.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { VendaModule } from './venda/venda.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComissoesModule,
    ProdutoModule,
    VendedorModule,
    VendaModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { 

}
