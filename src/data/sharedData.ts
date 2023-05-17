// globals.ts
import { Injectable } from "@angular/core";
import { fakeNews } from "./fakeNews";
import { allUsers } from "./pageSetup";
import { simpleActions } from "./simpleActions";
import { player, playerRecord, unlockLevel } from "./game";
import { SimpleNewsOnProcess, generateAllSimpleNews, simpleNewsList } from "./simpleFakeNews";
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
  static simpleNewsOnProcess : SimpleNewsOnProcess = {};
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

  static calculateCredibility(type: number, percentage: number, news: string, veracity?:boolean): [number, boolean, boolean] {
    let result : [number, boolean, boolean];
    if (type == 1) {
      let trueOrFalse : boolean;
      if(Globals.allNewsProcessed.includes(news)){
        trueOrFalse = Globals.simpleNewsOnProcess[news].finded;
      }else{ 
        trueOrFalse = (Math.random()*100) < percentage;
      }
      if(trueOrFalse) result =  [10, true, true]
      else result = [-15, false, false]
    } else {
      if(veracity) result = [50, true, true]
      else result = [-60, false, false]
    }
    return result
  }

  static calculateCredibilityFalse(type: number, percentage: number, news: string, veracity?:boolean): [number, boolean, boolean] {
    let result : [number, boolean, boolean];
    if (type == 1) {
      let trueOrFalse : boolean;
      if(Globals.allNewsProcessed.includes(news)){
        trueOrFalse = Globals.simpleNewsOnProcess[news].finded;
      }else{ 
        trueOrFalse = (Math.random()*100) < percentage;
      }
      if(trueOrFalse) result =  [-15, false, true]
      else result = [10, true, false]
    } else {
      if(veracity) result = [-60, false, true]
      else result = [50, true, false]
    }
    return result
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