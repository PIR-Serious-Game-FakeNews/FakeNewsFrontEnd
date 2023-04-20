import { Component } from '@angular/core';
import { europeanCountryFlags, continents } from '../../data/pageSetup';


@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {


  europeanCountryFlags = europeanCountryFlags;
  continents = continents;

  
  
  selectedLocation: {countryName : string , flagUrl : string}= europeanCountryFlags[0];
  selectedContinent : {continentName : string, continentCountries : Array<{ countryName: string; flagUrl: string }>} = continents[0]; 

  selectLocation(location: any) {
    this.selectedLocation = location;
  }


  selectContinent(continent: any) {
    this.selectedContinent = continent;
  }

  dblSelectContinent(flag_index: number) {
    alert("dbclick on country " + continents[flag_index].continentName);
  }

  
}
