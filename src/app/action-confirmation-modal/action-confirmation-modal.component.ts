import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-action-confirmation-modal',
  templateUrl: './action-confirmation-modal.component.html',
  styleUrls: ['./action-confirmation-modal.component.css']
})
export class ActionConfirmationModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { action: string; gainPerte: number }
  ) {}
  texte = this.data.action
  gainPerte = this.data.gainPerte
}
