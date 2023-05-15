import { Component, Input } from '@angular/core';
import { continents } from 'src/data/pageSetup';
import { Globals } from 'src/data/sharedData';

@Component({
  selector: 'app-continent-item',
  templateUrl: './continent-item.component.html',
  styleUrls: ['./continent-item.component.css'],
  providers: [Globals]
})
export class ContinentItemComponent {
  @Input() continent: any;

  get numberOfAvailableCountries(){
    let countries = continents.find((value, index) => value.continentName == this.continent.continentName);
    let nombre = 0;
    countries?.continentCountries.forEach((value, index) => {if(Globals.unlockLevel[value.countryName] <= Globals.currentPlayer.credibility) nombre++});
    return nombre;
  }
}
