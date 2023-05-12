import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Globals } from 'src/data/sharedData';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.css'],
  providers: [Globals]
})
export class ActionModalComponent {
  actions: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { simple: boolean , news : string}
  ) {
    if (this.data.simple) {
      this.actions = Globals.simpleActions;
    } else {
      let c = Globals.complexFakeNews[this.data.news]
      for (let i = 0 ; i < c.length ; i++){
        this.actions.push(c[i].actor);
      }
    }
  }
  
}

