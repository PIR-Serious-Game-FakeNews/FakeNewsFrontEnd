import { Component } from '@angular/core';
import { player } from 'src/data/game';
import { Router } from '@angular/router';
import { Globals } from 'src/data/sharedData';
import { generateSimpleNews, simpleNewsList } from 'src/data/simpleFakeNews';
import { generateComplexNews } from 'src/data/complexFakeNews';
import { MatDialog } from '@angular/material/dialog';
import { NotificationModalComponent } from '../notification-modal/notification-modal.component';

@Component({
  selector: 'app-player-setup-page',
  templateUrl: './player-setup-page.component.html',
  styleUrls: ['./player-setup-page.component.css'],
  providers: [Globals],
})
export class PlayerSetupPageComponent {
  constructor(private router: Router, public dialog: MatDialog) {}
  allUsers = Globals.allUsers;
  tour: number = 15;

  handleAddUser(formData: any) {
    if (!formData.username.trim() || !formData.image) {
      const dialogRef = this.dialog.open(NotificationModalComponent, {
        data: {
          message:
            'Vérifiez que le nom est valide et choisissez une image.',
        },
        width: '750px',
        height: 'max-content',
      });

      dialogRef.afterClosed().subscribe((result) => {
        // console.log(`Dialog result: ${result}`);
      });
    } else if(Globals.allUsers.some((value, index) => value.username == formData.username.trim())){
      const dialogRef = this.dialog.open(NotificationModalComponent, {
        data: {
          message:
            'Le nom entré est déjà utilisé.',
        },
        width: '750px',
        height: 'max-content',
      });

      dialogRef.afterClosed().subscribe((result) => {
        // console.log(`Dialog result: ${result}`);
      });
    } else{
      Globals.allUsers.push(formData);
      console.log(Globals.allUsers);
    }
  }

  handleDeleteUser(user: { username: string; image: string }) {
    const index = Globals.allUsers.findIndex(
      (u) => u.username === user.username && u.image === user.image
    );
    if (index !== -1) {
      Globals.allUsers.splice(index, 1);
    }
  }

  start() {
    if (Globals.allUsers.length < 1) {
      const dialogRef = this.dialog.open(NotificationModalComponent, {
        data: {
          message: 'Un minimum de 1 joueur est nécessaire au lancement du jeu.',
        },
        width: '750px',
        height: 'max-content',
      });

      dialogRef.afterClosed().subscribe((result) => {
        // console.log(`Dialog result: ${result}`);
      });
    } else {
      for (let i = 0; i < Globals.allUsers.length; i++) {
        let gamePlayer: player = {
          username: Globals.allUsers[i].username,
          credibility: 0,
          newsProcessing: [],
          // newsProcessingScore : 0 ,
          newsProcessed: [],
        };
        if (i == 0) Globals.currentPlayer = gamePlayer;

        Globals.playerRecord.push(gamePlayer);
      }

      for (let i = 0; i < Globals.allUsers.length; i++) {
        generateSimpleNews('France');
      }
      if (Math.random() > 0.7) generateComplexNews('France');
      Globals.router = this.router;
      Globals.nbTour = this.tour - 1;
      this.router.navigate(['/main-page']);
    }
  }
}
