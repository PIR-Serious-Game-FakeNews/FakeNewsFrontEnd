import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Globals } from 'src/data/sharedData';

@Component({
  selector: 'app-user-info-details',
  templateUrl: './user-info-details.component.html',
  styleUrls: ['./user-info-details.component.css'],
  providers: [Globals]
})
export class UserInfoDetailsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name : string}, public globals: Globals) {}
  news = this.globals.fakeNews[this.data.name];  
}
