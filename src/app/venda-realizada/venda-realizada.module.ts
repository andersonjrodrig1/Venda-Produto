import { NgModule } from '@angular/core';
import { VendaRealizadaComponent } from './venda-realizada.component';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuModule } from '../resources/menu/menu.module';
import { RouterModule } from '@angular/router';
import { VendaService } from '../resources/service/venda.service';
import { HttpService } from '../resources/http/http.service';

@NgModule({
    declarations: [
      VendaRealizadaComponent
    ],
    imports: [
      HttpModule,
      CommonModule,
      FormsModule,
      MenuModule,
      RouterModule
    ],
    exports: [],
    providers: [
        VendaService,
        HttpService
    ]
})
export class VendaRealizadaModule { }