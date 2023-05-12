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
  
  publishHandle(){
    console.log("PUBLISH");
    Globals.nextPlayer();
  }
  finishHandle(){
    console.log("FINISH");
    Globals.nextPlayer();
    console.log(Globals.currentPlayer)
  }
}
