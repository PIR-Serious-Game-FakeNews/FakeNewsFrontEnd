import { Component, Inject } from '@angular/core';

import { Globals } from 'src/data/sharedData';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.css'],
  providers: [Globals]
})
export class ActionModalComponent {
  constructor( public globals: Globals) {}
  actions = this.globals.simpleActions;
}

