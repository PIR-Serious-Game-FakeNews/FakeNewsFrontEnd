import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ActionModalComponent } from '../action-modal/action-modal.component';
import { Globals } from 'src/data/sharedData';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css'],
  providers: [Globals]
})
export class NewsItemComponent {
  constructor(public dialog: MatDialog){}
  @Input() new : any ;
  openDialog(ne : string) {
      const dialogRef = this.dialog.open(ActionModalComponent, {
        data: {
          simple: !Globals.complexNewsEnonce.includes(ne),
          news: ne
        },
        width: "750px",
        height: "500px"
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    
    
  }

}
