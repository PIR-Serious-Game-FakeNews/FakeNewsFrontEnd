// globals.ts
import { Injectable } from "@angular/core";
import { fakeNews } from "./fakeNews";
import { allUsers } from "./pageSetup";
import { simpleActions } from "./simpleActions";
import { player, playerRecord, unlockLevel } from "./game";
import { generateAllSimpleNews, simpleNewsList } from "./simpleFakeNews";
import { complexNewsList, complexNewsEnonce, complexNews, generateAllComplexNews } from "./complexFakeNews";
import { Router } from "@angular/router";


@Injectable()
export class Globals {
  static selectedActualPlayer : any;
  static fakeNews = fakeNews;
  static allUsers = allUsers;
  static currentPlayerIndex = 0;
  static playerRecord : player[] = [] // = playerRecord;
  static currentPlayer : player // = Globals.playerRecord[0];
  static simpleActions = simpleActions;
  static simpleFakeNews = simpleNewsList;
  static complexFakeNews = complexNewsList;
  static complexNewsEnonce = complexNewsEnonce;
  static allNewsProcessed : string[] = [];
  static nbTour : number;
  static router: Router;
  static unlockLevel = unlockLevel;

  static nextPlay(){
    Globals.currentPlayerIndex = 0;
    Globals.nbTour--;
    generateAllSimpleNews();
    generateAllComplexNews();
  }
  
  static nextPlayer() {
    if (Globals.currentPlayerIndex == Globals.playerRecord.length - 1) {
      Globals.nextPlay();
      if (this.nbTour == -1) {
        this.router.navigate(["final-page"]) //.then(() => window.location.reload());
      }
    } else {
      Globals.currentPlayerIndex++;
    }
    Globals.currentPlayer = Globals.playerRecord[Globals.currentPlayerIndex];
  }

  static calculateCredibility(type: number, percentage: number, veracity?:boolean) {
    if (type == 1) {
      let trueOrFalse : boolean = (Math.random()*100) < percentage;
      if(trueOrFalse) return Math.round(percentage/5)
      else return -Math.round(percentage/10)
    } else {
      if(veracity) return Math.round(percentage/5)
      else return -Math.round(percentage/10)
    }
  }

  static calculateCredibilityFalse(type: number, percentage: number, veracity?:boolean) {
    if (type == 1) {
      let trueOrFalse : boolean = (Math.random()*100) < percentage;
      if(trueOrFalse) return -Math.round(percentage/5)
      else return Math.round((100 - percentage)/10)
    } else {
      if(veracity) return -Math.round(percentage/5)
      else return Math.round((100 - percentage)/10)
    }
  }

  static getType(news: string) {
    if (complexNewsEnonce.includes(news)) {
      return 0
    } else {
      return 1
    }
  }

  static getComplexVeracity(news: string){
    let tab = complexNews[news];
    if(tab){
      return tab.reduce((acc, currentValue) => acc + currentValue.pourcentage, 0) > 0
    }
    return false;
  }
  

}