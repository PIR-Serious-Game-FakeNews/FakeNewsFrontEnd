import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { player } from 'src/data/game';
import { Globals } from 'src/data/sharedData';


@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css'],
  providers: [Globals]
})
export class FinalPageComponent {
  constructor(private router: Router){}

  podium: { username: string; image: string; }[] = []; 
  score: number[] = []; 
  restart(){
    this.router.navigate([""]).then(() => window.location.reload());
  }
  ngOnInit(): void {

    Globals.playerRecord.sort((a, b) => b.credibility - a.credibility);
    let i = 0;
    let p : any;
    for (let joueur of Globals.playerRecord){
        p = Globals.allUsers.find(a => a.username == joueur.username);
        if(p!=undefined){
          this.podium.push(p);
          this.score.push(joueur.credibility);
        }
      }

      console.log(Globals.playerRecord)
    }
}
