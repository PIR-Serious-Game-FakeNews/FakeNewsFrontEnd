import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Globals } from 'src/data/sharedData';
import { ActionModalComponent } from '../action-modal/action-modal.component';

@Component({
  selector: 'app-user-info-details',
  templateUrl: './user-info-details.component.html',
  styleUrls: ['./user-info-details.component.css'],
  providers: [Globals],
})
export class UserInfoDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {},
    public dialog: MatDialog
  ) {}

  get user() {
    return Globals.currentPlayer;
  }

  traiter(news: { new: string; score: number; sens: number }) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {
        simple: !Globals.complexNewsEnonce.includes(news.new),
        news: news.new,
      },
      width: '750px',
      height: 'max-content',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  publier(news: { new: string; score: number; sens: number }) {
    Globals.currentPlayer.newsProcessed.push({
      new: news.new,
      credit: news.score,
    });
    const toAdd: [number, boolean, boolean] = Globals.calculateCredibility(
      Globals.getType(news.new),
      news.score,
      news.new,
      Globals.getComplexVeracity(news.new)
    );
    if (Globals.allNewsProcessed.includes(news.new)) {
      if (toAdd[1]) {
        Globals.currentPlayer.credibility += toAdd[0] / 2;
      } else {
        Globals.currentPlayer.credibility += toAdd[0];
      }
    } else {
      Globals.currentPlayer.credibility += toAdd[0];
      Globals.allNewsProcessed.push(news.new);
      Globals.simpleNewsOnProcess[news.new] = {
        sens: toAdd[2] ? 1 : -1,
        finded: toAdd[2],
      };
    }
    Globals.currentPlayer.credibility =
      Globals.currentPlayer.credibility < 0
        ? 0
        : Globals.currentPlayer.credibility;
    Globals.currentPlayer.newsProcessing =
      Globals.currentPlayer.newsProcessing.filter(
        (value, index) => value.new != news.new
      );
  }

  terminer(news: { new: string; score: number; sens: number }) {
    Globals.currentPlayer.newsProcessed.push({
      new: news.new,
      credit: news.score,
    });
    const toAdd: [number, boolean, boolean] = Globals.calculateCredibilityFalse(
      Globals.getType(news.new),
      news.score,
      news.new,
      Globals.getComplexVeracity(news.new)
    );
    if (Globals.allNewsProcessed.includes(news.new)) {
      if (toAdd[1]) {
        Globals.currentPlayer.credibility += toAdd[0] / 2;
      } else {
        Globals.currentPlayer.credibility += toAdd[0];
      }
    } else {
      Globals.currentPlayer.credibility += toAdd[0];
      Globals.allNewsProcessed.push(news.new);
      Globals.simpleNewsOnProcess[news.new] = {
        sens: toAdd[2] ? 1 : -1,
        finded: toAdd[2],
      };
    }
    Globals.currentPlayer.credibility =
      Globals.currentPlayer.credibility < 0
        ? 0
        : Globals.currentPlayer.credibility;
    Globals.currentPlayer.newsProcessing =
      Globals.currentPlayer.newsProcessing.filter(
        (value, index) => value.new != news.new
      );
  }
}
