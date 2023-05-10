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
  constructor(public dialog: MatDialog, public globals: Globals){}
  @Input() new : any ;
  si : boolean = true;
  openDialog(ne : string) {
    if (this.globals.complexNewsEnonce.includes(ne)){
      this.si = false;
    }
      const dialogRef = this.dialog.open(ActionModalComponent, {
        data: {
          simple: this.si,
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
