// globals.ts
import { Injectable } from "@angular/core";
import { fakeNews } from "./fakeNews";
import { allUsers } from "./pageSetup";
import { simpleActions } from "./simpleActions";
import { player, playerRecord, unlockLevel } from "./game";
import { generateAllSimpleNews, generateSimpleNews, simpleNewsList } from "./simpleFakeNews";
import { complexNewsList, complexNewsEnonce } from "./complexFakeNews";


@Injectable()
export class Globals {
  static selectedActualPlayer : any;
  static fakeNews = fakeNews;
  static allUsers = allUsers;
  static currentPlayerIndex = 0;
  static currentPlayer : player;
  static playerRecord : player[] = [];
  static simpleActions = simpleActions;
  static simpleFakeNews = simpleNewsList;
  static complexFakeNews = complexNewsList;
  static complexNewsEnonce = complexNewsEnonce;
  static nbTour = 10;
  static unlockLevel = unlockLevel;

  static nextPlay(){
    Globals.currentPlayerIndex = 0;
    Globals.nbTour--;
    generateAllSimpleNews();
  }
  
  static nextPlayer() {
    if (Globals.currentPlayerIndex == Globals.playerRecord.length - 1) {
      Globals.nextPlay();
      if (this.nbTour == 0) {
        
      }
    } else {
      Globals.currentPlayerIndex++;
    }
    Globals.currentPlayer = Globals.playerRecord[Globals.currentPlayerIndex];
  }

  static calculateCredibility(type: number, percentage: number, veracity?:boolean) {
    if (type == 1) {
      let trueOrFalse : boolean = Math.random() < percentage;
      if(trueOrFalse) return Math.round(percentage/10)
      else return -Math.round(percentage/5)
    } else {
      if(veracity) return Math.round(percentage/10)
      else return -Math.round(percentage/10)
    }
  }

  static getType(news: string) {
    if (complexNewsEnonce.includes(news)) {
      return 0
    } else {
      return 1
    }
  }
  

}