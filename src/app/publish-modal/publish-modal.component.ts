import { Component } from '@angular/core';
import { nextPlayer } from 'src/data/game';


@Component({
  selector: 'app-publish-modal',
  templateUrl: './publish-modal.component.html',
  styleUrls: ['./publish-modal.component.css']
})
export class PublishModalComponent {
  
  publishHandle(){
    console.log("PUBLISH");
    nextPlayer();
  }
  finishHandle(){
    console.log("FINISH");
    nextPlayer();
  }
}
