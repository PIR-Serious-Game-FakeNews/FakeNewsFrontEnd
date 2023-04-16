import { Component } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent {
  european_country_flag: string[] = [
  "https://flagsapi.com/FR/flat/64.png",
  "https://flagsapi.com/AL/flat/64.png",
  "https://flagsapi.com/AD/flat/64.png",
  "https://flagsapi.com/AM/flat/64.png",
  "https://flagsapi.com/AT/flat/64.png",
  "https://flagsapi.com/AZ/flat/64.png",
  "https://flagsapi.com/BY/flat/64.png",
  "https://flagsapi.com/BE/flat/64.png",
  "https://flagsapi.com/BA/flat/64.png",
  "https://flagsapi.com/BG/flat/64.png",
  "https://flagsapi.com/HR/flat/64.png",
  "https://flagsapi.com/CY/flat/64.png",
  "https://flagsapi.com/CZ/flat/64.png",
  "https://flagsapi.com/DK/flat/64.png",
  "https://flagsapi.com/EE/flat/64.png",
  "https://flagsapi.com/FI/flat/64.png",
  "https://flagsapi.com/GE/flat/64.png",
  "https://flagsapi.com/DE/flat/64.png",
  "https://flagsapi.com/GR/flat/64.png",
  "https://flagsapi.com/HU/flat/64.png",
  "https://flagsapi.com/IS/flat/64.png",
  "https://flagsapi.com/IE/flat/64.png",
  "https://flagsapi.com/IT/flat/64.png",
  "https://flagsapi.com/KZ/flat/64.png",
  "https://flagsapi.com/XK/flat/64.png",
  "https://flagsapi.com/LV/flat/64.png",
  "https://flagsapi.com/LI/flat/64.png",
  "https://flagsapi.com/LT/flat/64.png",
  "https://flagsapi.com/LU/flat/64.png",
  "https://flagsapi.com/MK/flat/64.png",
  "https://flagsapi.com/MT/flat/64.png",
  "https://flagsapi.com/MD/flat/64.png",
  "https://flagsapi.com/MC/flat/64.png",
  "https://flagsapi.com/ME/flat/64.png",
  "https://flagsapi.com/NL/flat/64.png",
  "https://flagsapi.com/NO/flat/64.png",
  "https://flagsapi.com/PL/flat/64.png",
  "https://flagsapi.com/PT/flat/64.png",
  "https://flagsapi.com/RO/flat/64.png",
  "https://flagsapi.com/RU/flat/64.png",
  "https://flagsapi.com/SM/flat/64.png",
  "https://flagsapi.com/RS/flat/64.png",
  "https://flagsapi.com/SK/flat/64.png",
  "https://flagsapi.com/SI/flat/64.png",
  "https://flagsapi.com/ES/flat/64.png",
  "https://flagsapi.com/SE/flat/64.png",
  "https://flagsapi.com/CH/flat/64.png",
  "https://flagsapi.com/TR/flat/64.png",
  "https://flagsapi.com/UA/flat/64.png",
  "https://flagsapi.com/GB/flat/64.png",
  "https://flagsapi.com/VG/flat/64.png"
    
  ];

  european_country_name: string[] = [
    "France",
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and He...",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kazakhstan",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City"
  ];
  selectedFlag: string = this.european_country_flag[0];

  selectFlag(flag: string) {
    this.selectedFlag = flag;
  }

  dblSelectFlag(flag_index: number) {
    alert("dbclick on country " + this.european_country_name[flag_index]);
  }

}
