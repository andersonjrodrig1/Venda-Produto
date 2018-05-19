import { Component } from '@angular/core';
import { DialogInterfaceComponent } from './../dialog-interface/dialog-interface.component';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

@Component({
  moduleId: module.id,
  selector: 'app-dialog-produto',
  templateUrl: './dialog-produto.component.html',
  styleUrls: ['./dialog-produto.component.css']
})
export class DialogProdutoComponent extends DialogComponent<DialogInterfaceComponent, boolean> implements DialogInterfaceComponent {
  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }
}