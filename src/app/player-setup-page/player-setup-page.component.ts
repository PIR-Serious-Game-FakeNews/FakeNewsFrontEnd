import { Component } from '@angular/core';
import { allUsers } from '../../data/pageSetup';
import { player} from 'src/data/game';
import { Router } from '@angular/router';
import { Globals } from 'src/data/sharedData';
import { generateSimpleNews, simpleNewsList } from 'src/data/simpleFakeNews';

@Component({
  selector: 'app-player-setup-page',
  templateUrl: './player-setup-page.component.html',
  styleUrls: ['./player-setup-page.component.css'],
  providers: [Globals]
})
export class PlayerSetupPageComponent {
  constructor(private router: Router) { }
  allUsers = allUsers;

  handleAddUser(formData: any) {
    this.allUsers.push(formData);
    console.log(this.allUsers);
  }

  handleDeleteUser(user: { username: string; image: string }) {
    const index = this.allUsers.findIndex(
      (u) => u.username === user.username && u.image === user.image
    );
    if (index !== -1) {
      this.allUsers.splice(index, 1);
    }
  }

  start(){
    
    for ( let i = 0 ; i < allUsers.length ; i++){
      let gamePlayer : player = {
        username : allUsers[i].username,
        credibility : 0 ,
        newsProcessing : [] ,
        // newsProcessingScore : 0 ,
        newsProcessed : []
      }
      if(i == 0) Globals.currentPlayer = gamePlayer;

      Globals.playerRecord.push(gamePlayer);
    }

    for(let i = 0 ; i < 5 ; i++){
      generateSimpleNews("France");
    }
    for(let i = 0 ; i < simpleNewsList["France"].length ; i++){
      console.log(simpleNewsList["France"][i]);
    }
    
    this.router.navigate(['/main-page'])
  }
}
