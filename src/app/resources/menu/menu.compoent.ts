import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: 'menu.component.html',
  providers: [ FormBuilder]
})
export class MenuComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  public frmMenu: FormGroup;
  public busca: any;

  constructor(
    private formControl: FormBuilder
  ) { }

  ngOnInit() { }

  initializerForm() {
    this.frmMenu = this.formControl.group({
      busca: this.busca
    });
  }

  emitirEvento() {
    if (this.busca !== null && this.busca !== undefined && this.busca !== '') {
      this.valueChange.emit(this.busca);
    }
  }
} 