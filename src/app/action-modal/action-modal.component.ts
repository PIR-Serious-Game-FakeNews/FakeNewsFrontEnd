import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { Globals } from 'src/data/sharedData';
import { ActionConfirmationModalComponent } from '../action-confirmation-modal/action-confirmation-modal.component';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.css'],
  providers: [Globals],
})
export class ActionModalComponent {
  actions: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { simple: boolean; news: string },
    public dialog: MatDialog
  ) {
    if (
      Globals.currentPlayer.newsProcessing.find(
        (value, index) => value.new === this.data.news
      ) == undefined
    ) {
      Globals.currentPlayer.newsProcessing.push({
        new: this.data.news,
        score: 50,
      });
    }
    if (this.data.simple) {
      this.actions = Globals.simpleActions;
    } else {
      let c = Globals.complexFakeNews[this.data.news];
      for (let i = 0; i < c.length; i++) {
        this.actions.push(c[i]);
      }
    }
  }

  faireAction(simpleActions: {
    actor: string;
    pourcentage: number;
    cout: number;
  }) {
    Globals.currentPlayer.newsProcessing =
      Globals.currentPlayer.newsProcessing.map((value, index) => {
        if (value.new == this.data.news)
          return {
            new: value.new,
            score: simpleActions.pourcentage + value.score,
          };
        else return value;
      });

    const dialogRef = this.dialog.open(ActionConfirmationModalComponent, {
      data: {
        action: simpleActions.actor,
        gainPerte: simpleActions.pourcentage,
      },
      width: '750px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  faireInterrogation(complexActions: {
    actor: string;
    description: string;
    pourcentage: number;
    cout: number;
  }) {
    Globals.currentPlayer.newsProcessing =
      Globals.currentPlayer.newsProcessing.map((value, index) => {
        if (value.new == this.data.news)
          return {
            new: value.new,
            score: complexActions.pourcentage + value.score,
          };
        else return value;
      });
    const dialogRef = this.dialog.open(ActionConfirmationModalComponent, {
      data: {
        action: complexActions.description,
        gainPerte: complexActions.pourcentage,
      },
      width: '750px',
      height: 'max-content',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
