import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublishModalComponent } from '../publish-modal/publish-modal.component';
import { Globals } from 'src/data/sharedData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers : [Globals]
})
export class MainPageComponent {
  
  constructor(public dialog: MatDialog, private router: Router){}
  global = Globals;

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    event.preventDefault();
    localStorage.setItem("players", JSON.stringify(Globals.playerRecord))
  }
  
  @HostListener('window:unload', ['$event'])
  onUnload(event: Event) {
    Globals.playerRecord = JSON.parse(localStorage.getItem("players")!);
    Globals.currentPlayer = Globals.playerRecord[0];
  }

  openDialog() {
    const dialogRef = this.dialog.open(PublishModalComponent, {
      data: {
        name: "France"
      },
      width: "400px",
      height: "max-content"
    });
  }

}
