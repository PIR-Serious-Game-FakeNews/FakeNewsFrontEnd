import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { Globals } from 'src/data/sharedData';
import { ActionConfirmationModalComponent } from '../action-confirmation-modal/action-confirmation-modal.component';
import { complexNews } from 'src/data/complexFakeNews';

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
        actions: [],
        sens: Math.random() > 0.5 ? 1 : -1,
      });
    }
    if (this.data.simple) {
      this.actions = Globals.simpleActions;
    } else {
      let c = complexNews[this.data.news];
      for (let i = 0; i < c.length; i++) {
        this.actions.push(c[i]);
      }
    }
  }

  isActionDone(action: any): boolean {
    return Globals.currentPlayer.newsProcessing.some((value, index) =>
      (value.actions.includes(action.actor) && value.new == this.data.news)
    );
  }

  faireAction(simpleActions: {
    actor: string;
    pourcentage: number;
    cout: number;
  }) {
    let sens = 0;
    Globals.currentPlayer.newsProcessing =
      Globals.currentPlayer.newsProcessing.map((value, index) => {
        if (value.new == this.data.news) {
          if(Globals.allNewsProcessed.includes(value.new)){
            sens = Globals.simpleNewsOnProcess[value.new].sens;
          }else{
            sens = value.sens;
          }
          return {
            new: value.new,
            score: simpleActions.pourcentage * sens + value.score,
            actions: [...value.actions, simpleActions.actor],
            sens: sens,
          };
        } else return value;
      });

    const dialogRef = this.dialog.open(ActionConfirmationModalComponent, {
      data: {
        action: simpleActions.actor,
        gainPerte: simpleActions.pourcentage * sens,
      },
      width: '750px',
      height: 'max-content',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
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
        if (value.new == this.data.news) {
          return {
            new: value.new,
            score: complexActions.pourcentage + value.score,
            actions: [...value.actions, complexActions.actor],
            sens: value.sens,
          };
        } else return value;
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
      // console.log(`Dialog result: ${result}`);
    });
  }
}
