import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComissoesComponent } from './comissoes/comissoes.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/comissoes',
        pathMatch: 'full'
    },
    {
        path: 'comissoes',
        component: ComissoesComponent
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