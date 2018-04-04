import { NgModule } from '@angular/core';
import { VendaRealizadaComponent } from './venda-realizada.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../resources/menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      VendaRealizadaComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      MenuModule,
      RouterModule
    ],
    exports: [],
    providers: [
        
    ]
})
export class VendaRealizadaModule { }