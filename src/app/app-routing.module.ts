import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComissaoComponent } from './comissao/comissao.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VendaComponent } from './venda/venda.component';
import { VendaRealizadaComponent } from './venda-realizada/venda-realizada.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/comissoes',
    pathMatch: 'full'
  },
  {
    path: 'comissoes',
    component: ComissaoComponent
  },
  {
    path: 'produto',
    component: ProdutoComponent
  },
  {
    path: 'vendedor',
    component: VendedorComponent
  },
  {
    path: 'venda',
    component: VendaComponent
  },
  {
    path: 'venda-realizada',
    component: VendaRealizadaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }