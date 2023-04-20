import { Component, EventEmitter, Output } from '@angular/core';
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
  constructor(public globals: Globals, private dialog: MatDialog) {}
  players  = allUsers;
  selectedPlayer = this.players[0];

  @Output() selected = new EventEmitter<any>();

  selectPlayer(player:any) {
    this.selectedPlayer = player;
        console.log(this.globals.selectedActualPlayer);
    this.globals.selectedActualPlayer = player;
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserInfoDetailsComponent, {
      data: {
        name: "France"
      },
      width: "750px",
      height: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
