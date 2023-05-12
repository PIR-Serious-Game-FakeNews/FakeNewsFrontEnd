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
  get newsDone() {
    return Globals.currentPlayer.newsProcessed;
  }
  get newsDoing() {
    return Globals.currentPlayer.newsProcessing;
  }

  traiter(news: { new: string; score: number }) {
    const dialogRef = this.dialog.open(ActionModalComponent, {
      data: {
        simple: !Globals.complexNewsEnonce.includes(news.new),
        news: news.new,
      },
      width: '750px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  publier(news: { new: string; score: number }) {
    Globals.currentPlayer.newsProcessed.push({new: news.new, credit: news.score})
    Globals.currentPlayer.newsProcessing = Globals.currentPlayer.newsProcessing.filter((value, index) => value.new != news.new);
  }

  terminer(news: { new: string; score: number }) {
    Globals.currentPlayer.newsProcessing = Globals.currentPlayer.newsProcessing.filter((value, index) => value.new != news.new);
  }
}
