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
    });
    Globals.currentPlayer.newsProcessing = [];
    Globals.nextPlayer();
  }
  finishHandle(){
    console.log("FINISH");
    Globals.nextPlayer();
    console.log(Globals.currentPlayer)
  }
}
