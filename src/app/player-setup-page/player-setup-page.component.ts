import { Component } from '@angular/core';
import { allUsers } from '../../data/pageSetup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-setup-page',
  templateUrl: './player-setup-page.component.html',
  styleUrls: ['./player-setup-page.component.css'],
})
export class PlayerSetupPageComponent {
  constructor(private router: Router) { }
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
