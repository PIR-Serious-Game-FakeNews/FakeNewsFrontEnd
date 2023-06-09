import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { allUsers } from 'src/data/pageSetup';
import { Globals } from 'src/data/sharedData';
import { MatDialog } from "@angular/material/dialog";
import { UserInfoDetailsComponent } from '../user-info-details/user-info-details.component';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
    providers: [Globals]

})
export class PlayerListComponent {
  constructor(private dialog: MatDialog) {}
  get players(){
    allUsers.sort((userA, userB) => {
      const playerA = Globals.playerRecord.find(player => player.username === userA.username);
      const playerB = Globals.playerRecord.find(player => player.username === userB.username);
      if (playerA && playerB) {
        return playerB.credibility - playerA.credibility; // Descending order
      }
      return 0;
    });
    return allUsers;
  };
  
  get selectedPlayer() {
    return Globals.currentPlayer;
  }
  
  @Output() selected = new EventEmitter<any>();

  // selectPlayer(player:any) {
  //   this.selectedPlayer = player;
  //       console.log(Globals.selectedActualPlayer);
  //   Globals.selectedActualPlayer = player;
  // }

  openDialog() {
    const dialogRef = this.dialog.open(UserInfoDetailsComponent, {
      data: {
      },
      width: "750px",
      height: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
