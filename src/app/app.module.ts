import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { ComissaoModule } from './comissao/comissao.module';
import { ProdutoModule } from './produto/produto.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { VendaModule } from './venda/venda.module';
import { VendaRealizadaModule } from './venda-realizada/venda-realizada.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComissaoModule,
    ProdutoModule,
    VendedorModule,
    VendaModule,
    VendaRealizadaModule,
    RouterModule,
    BootstrapModalModule.forRoot({container:document.body})
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
