import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsModalComponent } from '../news-modal/news-modal.component';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent {
  constructor(public dialog: MatDialog){}
  @Input() location: any;

  openDialog(){
    this.dialog.open(NewsModalComponent,{
      width:'500px',
      height: '700px'
    })
  }
}
