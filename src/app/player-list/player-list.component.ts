import { Component, EventEmitter, Output } from '@angular/core';
import { allUsers } from 'src/data/pageSetup';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
  
  players  = allUsers;
  selectedPlayer = this.players[0];

  @Output() selected = new EventEmitter<any>();

  selectPlayer(player:any) {
    this.selectedPlayer = player;
    this.selected.emit(player);
  }
}
