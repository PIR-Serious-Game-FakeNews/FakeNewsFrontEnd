import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Globals } from 'src/data/sharedData';



@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.css'],
  providers: [Globals]
})
export class NewsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name : string}) {}
  simpleNews = Globals.simpleFakeNews[this.data.name];  
  complexNews = Globals.complexFakeNews[this.data.name];
}
