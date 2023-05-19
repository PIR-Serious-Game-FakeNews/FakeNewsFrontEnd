import { Component } from '@angular/core';
import { Globals } from 'src/data/sharedData';


@Component({
  selector: 'app-publish-modal',
  templateUrl: './publish-modal.component.html',
  styleUrls: ['./publish-modal.component.css'],
  providers: [Globals]
})
export class PublishModalComponent {

  constructor() {}

  get news(){
    return Globals.currentPlayer.newsProcessing
  }
  
  publishHandle(){
    Globals.currentPlayer.newsProcessing.forEach(element => {
      let credit = 0;
      const toAdd: [number, boolean, boolean] = Globals.calculateCredibility(
        Globals.getType(element.new),
        element.score,
        element.new,
        Globals.getComplexVeracity(element.new)
      );
      if (Globals.allNewsProcessed.includes(element.new)) {
        if (toAdd[1]) {
          credit = toAdd[0] / 2;
          Globals.currentPlayer.credibility += toAdd[0] / 2;
        } else {
          credit = toAdd[0];
          Globals.currentPlayer.credibility += toAdd[0];
        }
      } else {
        credit = toAdd[0];
        Globals.currentPlayer.credibility += toAdd[0];
        Globals.allNewsProcessed.push(element.new);
        Globals.simpleNewsOnProcess[element.new] = {
          sens: toAdd[2] ? 1 : -1,
          finded: toAdd[2],
        };
      }
      Globals.currentPlayer.newsProcessed.push({
        new: element.new,
        credit: credit,
        veracity: toAdd[2]
      });
    });
    Globals.currentPlayer.credibility = (Globals.currentPlayer.credibility < 0) ? 0 : Globals.currentPlayer.credibility;
    Globals.currentPlayer.newsProcessing = [];
    Globals.nextPlayer();
  }

  invaliderHandle(){
    Globals.currentPlayer.newsProcessing.forEach(element => {
      let credit = 0;
      const toAdd: [number, boolean, boolean] = Globals.calculateCredibilityFalse(
        Globals.getType(element.new),
        element.score,
        element.new,
        Globals.getComplexVeracity(element.new)
      );
      if (Globals.allNewsProcessed.includes(element.new)) {
        if (toAdd[1]) {
          credit = toAdd[0] / 2;
          Globals.currentPlayer.credibility += toAdd[0] / 2;
        } else {
          credit = toAdd[0];
          Globals.currentPlayer.credibility += toAdd[0];
        }
      } else {
        credit = toAdd[0];
        Globals.currentPlayer.credibility += toAdd[0];
        Globals.allNewsProcessed.push(element.new);
        Globals.simpleNewsOnProcess[element.new] = {
          sens: toAdd[2] ? 1 : -1,
          finded: toAdd[2],
        };
      }
      Globals.currentPlayer.newsProcessed.push({
        new: element.new,
        credit: credit,
        veracity: toAdd[2]
      });
    });
    Globals.currentPlayer.credibility = (Globals.currentPlayer.credibility < 0) ? 0 : Globals.currentPlayer.credibility;
    Globals.currentPlayer.newsProcessing = [];
    Globals.nextPlayer();
  }

  finishHandle(){
    Globals.nextPlayer();
    console.log(Globals.currentPlayer)
  }
}
