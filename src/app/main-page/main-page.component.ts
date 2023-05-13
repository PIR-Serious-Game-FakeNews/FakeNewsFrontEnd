import { Component, HostListener } from '@angular/core';
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

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: Event) {
    // Annuler l'événement par défaut
    event.preventDefault();
    // Définir le message de confirmation à afficher
    (event as any).returnValue = 'Voulez-vous vraiment recharger la page? Les données du jeu en cours seront définitivement perdues.'; // Pour éviter d'afficher le message par défaut du navigateur

    // Afficher votre message personnalisé
    // window.alert('Voulez-vous vraiment recharger la page? Les données du jeu en cours seront définitivement perdues.');
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
