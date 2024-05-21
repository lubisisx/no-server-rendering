import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
})
export class ConfirmationDialogComponent {
  public onClose: Subject<boolean> = new Subject<boolean>();
  public displayText: string = 'Are you sure you want to perform this action?';

  constructor(public bsModalRef: BsModalRef) {}

  onConfirm(): void {
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  onCancel(): void {
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}
