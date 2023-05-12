// globals.ts
import { Injectable } from "@angular/core";
import { fakeNews } from "./fakeNews";
import { allUsers } from "./pageSetup";
import { simpleActions } from "./simpleActions";
import { playerRecord , currentPlayerIndex, player} from "./game";
import { simpleNewsList } from "./simpleFakeNews";
import { complexNewsList, complexNewsEnonce } from "./complexFakeNews";
import { Subject } from "rxjs";

@Injectable()
export class Globals {
  static selectedActualPlayer : any;
  static fakeNews = fakeNews;
  static allUsers = allUsers;
  static currentPlayerIndex = currentPlayerIndex;
  static currentPlayer : player;
  static playerRecord = playerRecord;
  static simpleActions = simpleActions;
  static simpleFakeNews = simpleNewsList;
  static complexFakeNews = complexNewsList;
  static complexNewsEnonce = complexNewsEnonce;
  static nbTour = 10;
  static nbTourSubject = new Subject<number>();
  static nextPlayer() {
    if (Globals.currentPlayerIndex == Globals.playerRecord.length - 1) {
      Globals.currentPlayerIndex = 0;
      Globals.nbTour--;
      if (this.nbTour == 0) {
        console.log("Fin de jeu");
      }
    } else {
      Globals.currentPlayerIndex++;
      
    }
    Globals.currentPlayer = Globals.playerRecord[Globals.currentPlayerIndex];
  }
 

}