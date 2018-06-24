import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { ComissaoModule } from './comissao/comissao.module';
import { ProdutoModule } from './produto/produto.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { VendaModule } from './venda/venda.module';
import { VendaRealizadaModule } from './venda-realizada/venda-realizada.module';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ComissaoModule,
    HttpModule,
    ProdutoModule,
    VendedorModule,
    VendaModule,
    VendaRealizadaModule,
    RouterModule,
    BootstrapModalModule.forRoot({ container:document.body }),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
