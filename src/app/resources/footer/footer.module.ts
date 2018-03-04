import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    FooterComponent
  ],
  providers: []
})
export class FooterModule { }