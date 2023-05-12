import { Component, Input } from '@angular/core';
import { Globals } from 'src/data/sharedData';
@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css'],
  providers: [Globals]
})
export class PlayerItemComponent {
  @Input() player !: { username: string; image: string };

  get playerInfo() {
    return Globals.playerRecord.find((value, index) => value.username == this.player.username )!
  }
} 
