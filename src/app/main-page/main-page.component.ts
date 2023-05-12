import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PublishModalComponent } from '../publish-modal/publish-modal.component';
import { Globals } from 'src/data/sharedData';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers : [Globals]
})
export class MainPageComponent {
  
  constructor(public dialog: MatDialog){}
  global = Globals;

  openDialog() {
    const dialogRef = this.dialog.open(PublishModalComponent, {
      data: {
        name: "France"
      },
      width: "400px",
      height: "190px"
    });
  }

}
