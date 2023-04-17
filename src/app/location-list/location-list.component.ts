import { Component } from '@angular/core';
import { europeanCountryFlags } from '../../data/pageSetup';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {
  europeanCountryFlags = europeanCountryFlags;
  
  selectedLocation: {countryName : string , flagUrl : string}= europeanCountryFlags[0];

  selectLocation(location: any) {
    this.selectedLocation = location;
  }

  dblSelectLocation(flag_index: number) {
    alert("dbclick on country " + europeanCountryFlags[flag_index].countryName);
  }

}
