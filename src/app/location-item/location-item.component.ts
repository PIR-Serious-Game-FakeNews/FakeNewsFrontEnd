import { Component, Input } from '@angular/core';
import { Globals } from 'src/data/sharedData';


@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css'],
  providers: [Globals]
})
export class LocationItemComponent {
  @Input() location: { countryName: string; flagUrl: string; } = {countryName : "", flagUrl : ""};

  get numberOfFakeNews(){
    return Globals.simpleFakeNews[this.location.countryName].length + Globals.complexFakeNews[this.location.countryName].length
  }

}
