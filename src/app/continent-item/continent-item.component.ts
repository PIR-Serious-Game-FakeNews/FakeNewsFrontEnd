import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-continent-item',
  templateUrl: './continent-item.component.html',
  styleUrls: ['./continent-item.component.css']
})
export class ContinentItemComponent {
  @Input() continent: any;


}
