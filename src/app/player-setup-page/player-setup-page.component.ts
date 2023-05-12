import { Component } from '@angular/core';
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
  allUsers = Globals.allUsers;

  handleAddUser(formData: any) {
    Globals.allUsers.push(formData);
    console.log(Globals.allUsers);
  }

  handleDeleteUser(user: { username: string; image: string }) {
    const index = Globals.allUsers.findIndex(
      (u) => u.username === user.username && u.image === user.image
    );
    if (index !== -1) {
      Globals.allUsers.splice(index, 1);
    }
  }

  start(){
    
    for ( let i = 0 ; i < Globals.allUsers.length ; i++){
      let gamePlayer : player = {
        username : Globals.allUsers[i].username,
        credibility : 0 ,
        newsProcessing : [] ,
        // newsProcessingScore : 0 ,
        newsProcessed : []
      }
      if(i == 0) Globals.currentPlayer = gamePlayer;

      Globals.playerRecord.push(gamePlayer);
    }

    for(let i = 0 ; i < Globals.allUsers.length-2 ; i++){
      generateSimpleNews("France");
    }
    this.router.navigate(['/main-page'])
  }
}
