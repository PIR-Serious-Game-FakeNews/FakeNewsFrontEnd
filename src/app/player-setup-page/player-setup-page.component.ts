import { Component } from '@angular/core';
import { allUsers } from '../../data/pageSetup';
import { Router } from '@angular/router';
import { Globals } from 'src/data/sharedData';

@Component({
  selector: 'app-player-setup-page',
  templateUrl: './player-setup-page.component.html',
  styleUrls: ['./player-setup-page.component.css'],
  providers: [Globals]
})
export class PlayerSetupPageComponent {
  constructor(private router: Router, public globals: Globals) { }
  allUsers = allUsers;

  handleAddUser(formData: any) {
    this.allUsers.push(formData);
    console.log(this.allUsers);
  }

  handleDeleteUser(user: { username: string; image: string }) {
    const index = this.allUsers.findIndex(
      (u) => u.username === user.username && u.image === user.image
    );
    if (index !== -1) {
      this.allUsers.splice(index, 1);
    }
  }

  start(){
    this.router.navigate(['/main-page'])
  }
}
