import { Component } from '@angular/core';
import { europeanCountryFlags, continents } from '../../data/pageSetup';
import { MatDialog } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { NewsModalComponent } from '../news-modal/news-modal.component';
import { Globals } from 'src/data/sharedData';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
  providers: [Globals]
})
export class LocationListComponent {
  constructor(public dialog: MatDialog){}

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

  openDialog(location : string) {
    const dialogRef = this.dialog.open(NewsModalComponent, {
      data: {
        name: location
      },
      width: "750px",
      height: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
