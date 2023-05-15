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
    console.log("PUBLISH");
    Globals.currentPlayer.newsProcessing.forEach(element => {
      Globals.currentPlayer.newsProcessed.push({new: element.new, credit: element.score})
      const creditToAdd = Globals.calculateCredibility(Globals.getType(element.new), element.score,  Globals.getComplexVeracity(element.new));
      Globals.currentPlayer.credibility += (Globals.allNewsProcessed.includes(element.new) ? creditToAdd / 2 : creditToAdd)
      Globals.allNewsProcessed.push(element.new)
      console.log(creditToAdd)
    });
    Globals.currentPlayer.credibility = (Globals.currentPlayer.credibility < 0) ? 0 : Globals.currentPlayer.credibility;
    Globals.currentPlayer.newsProcessing = [];
    Globals.nextPlayer();
  }
  finishHandle(){
    console.log("FINISH");
    Globals.nextPlayer();
    console.log(Globals.currentPlayer)
  }
}
