import { CountryData, CountryMap, fakeNews } from './fakeNews';

export let allUsers: Array<{ username: string; image: string }> = [
  {
    username: 'Marc',
    image: 'https://api.dicebear.com/5.x/open-peeps/svg?seed=Mimi',
  },
  {
    username: 'Mady',
    image: 'https://api.dicebear.com/5.x/open-peeps/svg?seed=Baby',
  },
  {
    username: 'Brandon',
    image: 'https://api.dicebear.com/5.x/open-peeps/svg?seed=Bandit',
  },
  {
    username: 'Pascal',
    image: 'https://api.dicebear.com/5.x/open-peeps/svg?seed=Jack',
  },
  {
    username: 'Yohan',
    image: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Annie',
  },
  {
    username: 'Clément',
    image: 'https://api.dicebear.com/5.x/adventurer/svg?seed=Mittens',
  },
];

export let europeanCountryFlags: Array<{
  countryName: string;
  flagUrl: string;
}> = [
  { countryName: 'France', flagUrl: 'https://flagsapi.com/FR/flat/64.png'},
  { countryName: 'Albania', flagUrl: 'https://flagsapi.com/AL/flat/64.png'},
  { countryName: 'Andorra', flagUrl: 'https://flagsapi.com/AD/flat/64.png' },
  { countryName: 'Armenia', flagUrl: 'https://flagsapi.com/AM/flat/64.png'},
  { countryName: 'Austria', flagUrl: 'https://flagsapi.com/AT/flat/64.png'},
  { countryName: 'Azerbaijan', flagUrl: 'https://flagsapi.com/AZ/flat/64.png'},
  { countryName: 'Belarus', flagUrl: 'https://flagsapi.com/BY/flat/64.png' },
  { countryName: 'Belgium', flagUrl: 'https://flagsapi.com/BE/flat/64.png' },
  {countryName: 'Bosnia Herzegovina',flagUrl: 'https://flagsapi.com/BA/flat/64.png',},
  { countryName: 'Bulgaria', flagUrl: 'https://flagsapi.com/BG/flat/64.png' },
  { countryName: 'Croatia', flagUrl: 'https://flagsapi.com/HR/flat/64.png' },
  { countryName: 'Cyprus', flagUrl: 'https://flagsapi.com/CY/flat/64.png' },
  { countryName: 'Czech Republic', flagUrl: 'https://flagsapi.com/CZ/flat/64.png', },
  { countryName: 'Denmark', flagUrl: 'https://flagsapi.com/DK/flat/64.png' },
  { countryName: 'Estonia', flagUrl: 'https://flagsapi.com/EE/flat/64.png' },
  { countryName: 'Finland', flagUrl: 'https://flagsapi.com/FI/flat/64.png' },
  { countryName: 'Georgia', flagUrl: 'https://flagsapi.com/GE/flat/64.png' },
  { countryName: 'Germany', flagUrl: 'https://flagsapi.com/DE/flat/64.png' },
  { countryName: 'Greece', flagUrl: 'https://flagsapi.com/GR/flat/64.png' },
  { countryName: 'Hungary', flagUrl: 'https://flagsapi.com/HU/flat/64.png' },
  { countryName: 'Iceland', flagUrl: 'https://flagsapi.com/IS/flat/64.png' },
  { countryName: 'Ireland', flagUrl: 'https://flagsapi.com/IE/flat/64.png' },
  { countryName: 'Italy', flagUrl: 'https://flagsapi.com/IT/flat/64.png' },
  { countryName: 'Kazakhstan', flagUrl: 'https://flagsapi.com/KZ/flat/64.png' },
  { countryName: 'Kosovo', flagUrl: 'https://flagsapi.com/XK/flat/64.png' },
  { countryName: 'Latvia', flagUrl: 'https://flagsapi.com/LV/flat/64.png' },
  {
    countryName: 'Liechtenstein',
    flagUrl: 'https://flagsapi.com/LI/flat/64.png',
  },
  { countryName: 'Lithuania', flagUrl: 'https://flagsapi.com/LT/flat/64.png' },
  { countryName: 'Luxembourg', flagUrl: 'https://flagsapi.com/LU/flat/64.png' },
  { countryName: 'Malta', flagUrl: 'https://flagsapi.com/MT/flat/64.png' },
  { countryName: 'Moldova', flagUrl: 'https://flagsapi.com/MD/flat/64.png' },
  { countryName: 'Monaco', flagUrl: 'https://flagsapi.com/MC/flat/64.png' },
  { countryName: 'Montenegro', flagUrl: 'https://flagsapi.com/ME/flat/64.png' },
  {
    countryName: 'Netherlands',
    flagUrl: 'https://flagsapi.com/NL/flat/64.png',
  },
  {
    countryName: 'North Macedonia',
    flagUrl: 'https://flagsapi.com/MK/flat/64.png',
  },
  { countryName: 'Norway', flagUrl: 'https://flagsapi.com/NO/flat/64.png' },
  { countryName: 'Poland', flagUrl: 'https://flagsapi.com/PL/flat/64.png' },
  { countryName: 'Portugal', flagUrl: 'https://flagsapi.com/PT/flat/64.png' },
  { countryName: 'Romania', flagUrl: 'https://flagsapi.com/RO/flat/64.png' },
  { countryName: 'Russia', flagUrl: 'https://flagsapi.com/RU/flat/64.png' },
  { countryName: 'San Marino', flagUrl: 'https://flagsapi.com/SM/flat/64.png' },
  { countryName: 'Serbia', flagUrl: 'https://flagsapi.com/RS/flat/64.png' },
  { countryName: 'Slovakia', flagUrl: 'https://flagsapi.com/SK/flat/64.png' },
  { countryName: 'Slovenia', flagUrl: 'https://flagsapi.com/SI/flat/64.png' },
  { countryName: 'Spain', flagUrl: 'https://flagsapi.com/ES/flat/64.png' },
  { countryName: 'Sweden', flagUrl: 'https://flagsapi.com/SE/flat/64.png' },
  {
    countryName: 'Switzerland',
    flagUrl: 'https://flagsapi.com/CH/flat/64.png',
  },
  { countryName: 'Turkey', flagUrl: 'https://flagsapi.com/TR/flat/64.png' },
  { countryName: 'Ukraine', flagUrl: 'https://flagsapi.com/UA/flat/64.png' },
  {
    countryName: 'United Kingdom',
    flagUrl: 'https://flagsapi.com/GB/flat/64.png',
  },
  {
    countryName: 'Vatican City',
    flagUrl: 'https://flagsapi.com/VA/flat/64.png',
  },
];

export let asianCountryFlags: Array<{ countryName: string; flagUrl: string }> =
  [
    {
      countryName: 'Afghanistan',
      flagUrl: 'https://flagsapi.com/AF/flat/64.png',
    },
    { countryName: 'Armenia', flagUrl: 'https://flagsapi.com/AM/flat/64.png' },
    {
      countryName: 'Azerbaijan',
      flagUrl: 'https://flagsapi.com/AZ/flat/64.png',
    },
    { countryName: 'Bahrain', flagUrl: 'https://flagsapi.com/BH/flat/64.png' },
    {
      countryName: 'Bangladesh',
      flagUrl: 'https://flagsapi.com/BD/flat/64.png',
    },
    { countryName: 'Bhutan', flagUrl: 'https://flagsapi.com/BT/flat/64.png' },
    { countryName: 'Brunei', flagUrl: 'https://flagsapi.com/BN/flat/64.png' },
    { countryName: 'Cambodia', flagUrl: 'https://flagsapi.com/KH/flat/64.png' },
    { countryName: 'China', flagUrl: 'https://flagsapi.com/CN/flat/64.png' },
    { countryName: 'Cyprus', flagUrl: 'https://flagsapi.com/CY/flat/64.png' },
    {
      countryName: 'East Timor',
      flagUrl: 'https://flagsapi.com/TL/flat/64.png',
    },
    { countryName: 'Georgia', flagUrl: 'https://flagsapi.com/GE/flat/64.png' },
    { countryName: 'India', flagUrl: 'https://flagsapi.com/IN/flat/64.png' },
    {
      countryName: 'Indonesia',
      flagUrl: 'https://flagsapi.com/ID/flat/64.png',
    },
    { countryName: 'Iran', flagUrl: 'https://flagsapi.com/IR/flat/64.png' },
    { countryName: 'Iraq', flagUrl: 'https://flagsapi.com/IQ/flat/64.png' },
    { countryName: 'Israel', flagUrl: 'https://flagsapi.com/IL/flat/64.png' },
    { countryName: 'Japan', flagUrl: 'https://flagsapi.com/JP/flat/64.png' },
    { countryName: 'Jordan', flagUrl: 'https://flagsapi.com/JO/flat/64.png' },
    {
      countryName: 'Kazakhstan',
      flagUrl: 'https://flagsapi.com/KZ/flat/64.png',
    },
    { countryName: 'Kuwait', flagUrl: 'https://flagsapi.com/KW/flat/64.png' },
    {
      countryName: 'Kyrgyzstan',
      flagUrl: 'https://flagsapi.com/KG/flat/64.png',
    },
    { countryName: 'Laos', flagUrl: 'https://flagsapi.com/LA/flat/64.png' },
    { countryName: 'Lebanon', flagUrl: 'https://flagsapi.com/LB/flat/64.png' },
    { countryName: 'Malaysia', flagUrl: 'https://flagsapi.com/MY/flat/64.png' },
    { countryName: 'Maldives', flagUrl: 'https://flagsapi.com/MV/flat/64.png' },
    { countryName: 'Mongolia', flagUrl: 'https://flagsapi.com/MN/flat/64.png' },
    { countryName: 'Myanmar', flagUrl: 'https://flagsapi.com/MM/flat/64.png' },
    { countryName: 'Nepal', flagUrl: 'https://flagsapi.com/NP/flat/64.png' },
    {
      countryName: 'North Korea',
      flagUrl: 'https://flagsapi.com/KP/flat/64.png',
    },
    { countryName: 'Oman', flagUrl: 'https://flagsapi.com/OM/flat/64.png' },
    { countryName: 'Pakistan', flagUrl: 'https://flagsapi.com/PK/flat/64.png' },
    {
      countryName: 'Palestine',
      flagUrl: 'https://flagsapi.com/PS/flat/64.png',
    },
    {
      countryName: 'Philippines',
      flagUrl: 'https://flagsapi.com/PH/flat/64.png',
    },
    { countryName: 'Qatar', flagUrl: 'https://flagsapi.com/QA/flat/64.png' },
    { countryName: 'Russia', flagUrl: 'https://flagsapi.com/RU/flat/64.png' },
    {
      countryName: 'Saudi Arabia',
      flagUrl: 'https://flagsapi.com/SA/flat/64.png',
    },
    {
      countryName: 'Singapore',
      flagUrl: 'https://flagsapi.com/SG/flat/64.png',
    },
    {
      countryName: 'South Korea',
      flagUrl: 'https://flagsapi.com/KR/flat/64.png',
    },
    {
      countryName: 'Sri Lanka',
      flagUrl: 'https://flagsapi.com/LK/flat/64.png',
    },
    { countryName: 'Syria', flagUrl: 'https://flagsapi.com/SY/flat/64.png' },
    { countryName: 'Taiwan', flagUrl: 'https://flagsapi.com/TW/flat/64.png' },
    {
      countryName: 'Tajikistan',
      flagUrl: 'https://flagsapi.com/TJ/flat/64.png',
    },
    { countryName: 'Thailand', flagUrl: 'https://flagsapi.com/TH/flat/64.png' },
    { countryName: 'Turkey', flagUrl: 'https://flagsapi.com/TR/flat/64.png' },
    {
      countryName: 'Turkmenistan',
      flagUrl: 'https://flagsapi.com/TM/flat/64.png',
    },
    {
      countryName: 'United Arab Emirates',
      flagUrl: 'https://flagsapi.com/AE/flat/64.png',
    },
    {
      countryName: 'Uzbekistan',
      flagUrl: 'https://flagsapi.com/UZ/flat/64.png',
    },
    { countryName: 'Vietnam', flagUrl: 'https://flagsapi.com/VN/flat/64.png' },
    { countryName: 'Yemen', flagUrl: 'https://flagsapi.com/YE/flat/64.png' },
  ];

export let northAmericanCountryFlags: Array<{
  countryName: string;
  flagUrl: string;
}> = [
  {
    countryName: 'Antigua and Barbuda',
    flagUrl: 'https://flagsapi.com/AG/flat/64.png',
  },
  { countryName: 'Bahamas', flagUrl: 'https://flagsapi.com/BS/flat/64.png' },
  { countryName: 'Barbados', flagUrl: 'https://flagsapi.com/BB/flat/64.png' },
  { countryName: 'Belize', flagUrl: 'https://flagsapi.com/BZ/flat/64.png' },
  { countryName: 'Canada', flagUrl: 'https://flagsapi.com/CA/flat/64.png' },
  { countryName: 'Costa Rica', flagUrl: 'https://flagsapi.com/CR/flat/64.png' },
  { countryName: 'Cuba', flagUrl: 'https://flagsapi.com/CU/flat/64.png' },
  { countryName: 'Dominica', flagUrl: 'https://flagsapi.com/DM/flat/64.png' },
  {
    countryName: 'Dominican Republic',
    flagUrl: 'https://flagsapi.com/DO/flat/64.png',
  },
  {
    countryName: 'El Salvador',
    flagUrl: 'https://flagsapi.com/SV/flat/64.png',
  },
  { countryName: 'Grenada', flagUrl: 'https://flagsapi.com/GD/flat/64.png' },
  { countryName: 'Guatemala', flagUrl: 'https://flagsapi.com/GT/flat/64.png' },
  { countryName: 'Haiti', flagUrl: 'https://flagsapi.com/HT/flat/64.png' },
  { countryName: 'Honduras', flagUrl: 'https://flagsapi.com/HN/flat/64.png' },
  { countryName: 'Jamaica', flagUrl: 'https://flagsapi.com/JM/flat/64.png' },
  { countryName: 'Mexico', flagUrl: 'https://flagsapi.com/MX/flat/64.png' },
  { countryName: 'Nicaragua', flagUrl: 'https://flagsapi.com/NI/flat/64.png' },
  { countryName: 'Panama', flagUrl: 'https://flagsapi.com/PA/flat/64.png' },
  {
    countryName: 'Saint Kitts and Nevis',
    flagUrl: 'https://flagsapi.com/KN/flat/64.png',
  },
  {
    countryName: 'Saint Lucia',
    flagUrl: 'https://flagsapi.com/LC/flat/64.png',
  },
  {
    countryName: 'Saint Vincent and the Grenadines',
    flagUrl: 'https://flagsapi.com/VC/flat/64.png',
  },
  {
    countryName: 'Trinidad and Tobago',
    flagUrl: 'https://flagsapi.com/TT/flat/64.png',
  },
  {
    countryName: 'United States',
    flagUrl: 'https://flagsapi.com/US/flat/64.png',
  },
];

export let southAmericanCountryFlags: Array<{
  countryName: string;
  flagUrl: string;
}> = [
  { countryName: 'Argentina', flagUrl: 'https://flagsapi.com/AR/flat/64.png' },
  { countryName: 'Bolivia', flagUrl: 'https://flagsapi.com/BO/flat/64.png' },
  { countryName: 'Brazil', flagUrl: 'https://flagsapi.com/BR/flat/64.png' },
  { countryName: 'Chile', flagUrl: 'https://flagsapi.com/CL/flat/64.png' },
  { countryName: 'Colombia', flagUrl: 'https://flagsapi.com/CO/flat/64.png' },
  { countryName: 'Ecuador', flagUrl: 'https://flagsapi.com/EC/flat/64.png' },
  { countryName: 'Guyana', flagUrl: 'https://flagsapi.com/GY/flat/64.png' },
  { countryName: 'Paraguay', flagUrl: 'https://flagsapi.com/PY/flat/64.png' },
  { countryName: 'Peru', flagUrl: 'https://flagsapi.com/PE/flat/64.png' },
  { countryName: 'Suriname', flagUrl: 'https://flagsapi.com/SR/flat/64.png' },
  { countryName: 'Uruguay', flagUrl: 'https://flagsapi.com/UY/flat/64.png' },
  { countryName: 'Venezuela', flagUrl: 'https://flagsapi.com/VE/flat/64.png' },
];

export let africanCountryFlags: Array<{
  countryName: string;
  flagUrl: string;
}> = [
  { countryName: 'Algeria', flagUrl: 'https://flagsapi.com/DZ/flat/64.png' },
  { countryName: 'Angola', flagUrl: 'https://flagsapi.com/AO/flat/64.png' },
  { countryName: 'Benin', flagUrl: 'https://flagsapi.com/BJ/flat/64.png' },
  { countryName: 'Botswana', flagUrl: 'https://flagsapi.com/BW/flat/64.png' },
  {
    countryName: 'Burkina Faso',
    flagUrl: 'https://flagsapi.com/BF/flat/64.png',
  },
  { countryName: 'Burundi', flagUrl: 'https://flagsapi.com/BI/flat/64.png' },
  { countryName: 'Cabo Verde', flagUrl: 'https://flagsapi.com/CV/flat/64.png' },
  { countryName: 'Cameroon', flagUrl: 'https://flagsapi.com/CM/flat/64.png' },
  {
    countryName: 'Central African Republic',
    flagUrl: 'https://flagsapi.com/CF/flat/64.png',
  },
  { countryName: 'Chad', flagUrl: 'https://flagsapi.com/TD/flat/64.png' },
  { countryName: 'Comoros', flagUrl: 'https://flagsapi.com/KM/flat/64.png' },
  {
    countryName: 'Democratic Republic of the Congo',
    flagUrl: 'https://flagsapi.com/CD/flat/64.png',
  },
  {
    countryName: 'Republic of the Congo',
    flagUrl: 'https://flagsapi.com/CG/flat/64.png',
  },
  { countryName: 'Djibouti', flagUrl: 'https://flagsapi.com/DJ/flat/64.png' },
  { countryName: 'Egypt', flagUrl: 'https://flagsapi.com/EG/flat/64.png' },
  {
    countryName: 'Equatorial Guinea',
    flagUrl: 'https://flagsapi.com/GQ/flat/64.png',
  },
  { countryName: 'Eritrea', flagUrl: 'https://flagsapi.com/ER/flat/64.png' },
  { countryName: 'Eswatini', flagUrl: 'https://flagsapi.com/SZ/flat/64.png' },
  { countryName: 'Ethiopia', flagUrl: 'https://flagsapi.com/ET/flat/64.png' },
  { countryName: 'Gabon', flagUrl: 'https://flagsapi.com/GA/flat/64.png' },
  { countryName: 'Gambia', flagUrl: 'https://flagsapi.com/GM/flat/64.png' },
  { countryName: 'Ghana', flagUrl: 'https://flagsapi.com/GH/flat/64.png' },
  { countryName: 'Guinea', flagUrl: 'https://flagsapi.com/GN/flat/64.png' },
  {
    countryName: 'Guinea-Bissau',
    flagUrl: 'https://flagsapi.com/GW/flat/64.png',
  },
  {
    countryName: 'Ivory Coast',
    flagUrl: 'https://flagsapi.com/CI/flat/64.png',
  },
  { countryName: 'Kenya', flagUrl: 'https://flagsapi.com//KE/flat/64.png' },
  { countryName: 'Lesotho', flagUrl: 'https://flagsapi.com/LS/flat/64.png' },
  { countryName: 'Liberia', flagUrl: 'https://flagsapi.com/LR/flat/64.png' },
  { countryName: 'Libya', flagUrl: 'https://flagsapi.com/LY/flat/64.png' },
  { countryName: 'Madagascar', flagUrl: 'https://flagsapi.com/MG/flat/64.png' },
  { countryName: 'Malawi', flagUrl: 'https://flagsapi.com/MW/flat/64.png' },
  { countryName: 'Mali', flagUrl: 'https://flagsapi.com/ML/flat/64.png' },
  { countryName: 'Mauritania', flagUrl: 'https://flagsapi.com/MR/flat/64.png' },
  { countryName: 'Mauritius', flagUrl: 'https://flagsapi.com/MU/flat/64.png' },
  { countryName: 'Morocco', flagUrl: 'https://flagsapi.com/MA/flat/64.png' },
  { countryName: 'Mozambique', flagUrl: 'https://flagsapi.com/MZ/flat/64.png' },
  { countryName: 'Namibia', flagUrl: 'https://flagsapi.com/NA/flat/64.png' },
  { countryName: 'Niger', flagUrl: 'https://flagsapi.com/NE/flat/64.png' },
  { countryName: 'Nigeria', flagUrl: 'https://flagsapi.com/NG/flat/64.png' },
  { countryName: 'Rwanda', flagUrl: 'https://flagsapi.com/RW/flat/64.png' },
  {
    countryName: 'São Tomé and Príncipe',
    flagUrl: 'https://flagsapi.com/ST/flat/64.png',
  },
  { countryName: 'Senegal', flagUrl: 'https://flagsapi.com/SN/flat/64.png' },
  { countryName: 'Seychelles', flagUrl: 'https://flagsapi.com/SC/flat/64.png' },
  {
    countryName: 'Sierra Leone',
    flagUrl: 'https://flagsapi.com/SL/flat/64.png',
  },
  { countryName: 'Somalia', flagUrl: 'https://flagsapi.com/SO/flat/64.png' },
  {
    countryName: 'South Africa',
    flagUrl: 'https://flagsapi.com/ZA/flat/64.png',
  },
  {
    countryName: 'South Sudan',
    flagUrl: 'https://flagsapi.com/SS/flat/64.png',
  },
  { countryName: 'Sudan', flagUrl: 'https://flagsapi.com/SD/flat/64.png' },
  { countryName: 'Tanzania', flagUrl: 'https://flagsapi.com/TZ/flat/64.png' },
  { countryName: 'Togo', flagUrl: 'https://flagsapi.com/TG/flat/64.png' },
  { countryName: 'Tunisia', flagUrl: 'https://flagsapi.com/TN/flat/64.png' },
  { countryName: 'Uganda', flagUrl: 'https://flagsapi.com/UG/flat/64.png' },
  { countryName: 'Zambia', flagUrl: 'https://flagsapi.com/ZM/flat/64.png' },
  { countryName: 'Zimbabwe', flagUrl: 'https://flagsapi.com/ZW/flat/64.png' },
];

export let oceaniaCountryFlags: Array<{
  countryName: string;
  flagUrl: string;
}> = [
  { countryName: "Australia", flagUrl: "https://flagsapi.com/AU/flat/64.png" },
  { countryName: "Fiji", flagUrl: "https://flagsapi.com/FJ/flat/64.png" },
  { countryName: "Kiribati", flagUrl: "https://flagsapi.com/KI/flat/64.png" },
  { countryName: "Marshall Islands", flagUrl: "https://flagsapi.com/MH/flat/64.png" },
  { countryName: "Micronesia", flagUrl: "https://flagsapi.com/FM/flat/64.png" },
  { countryName: "Nauru", flagUrl: "https://flagsapi.com/NR/flat/64.png" },
  { countryName: "New Zealand", flagUrl: "https://flagsapi.com/NZ/flat/64.png" },
  { countryName: "Palau", flagUrl: "https://flagsapi.com/PW/flat/64.png" },
  { countryName: "Papua New Guinea", flagUrl: "https://flagsapi.com/PG/flat/64.png" },
  { countryName: "Samoa", flagUrl: "https://flagsapi.com/WS/flat/64.png" },
  { countryName: "Solomon Islands", flagUrl: "https://flagsapi.com/SB/flat/64.png" },
  { countryName: "Tonga", flagUrl: "https://flagsapi.com/TO/flat/64.png" },
  { countryName: "Tuvalu", flagUrl: "https://flagsapi.com/TV/flat/64.png" },
  { countryName: "Vanuatu", flagUrl: "https://flagsapi.com/VU/flat/64.png" }
];


export let continents: Array<{
  continentName: string;
  continentCountries: Array<{ countryName: string; flagUrl: string }>;
}> = [
  { continentName: 'Europe', continentCountries: europeanCountryFlags },
  { continentName: 'Asia', continentCountries: asianCountryFlags },
  { continentName: 'Africa', continentCountries: africanCountryFlags },
  //{continentName : "Antarctica"},
  {continentName: 'North America',continentCountries: northAmericanCountryFlags },
  {continentName: 'South America',continentCountries: southAmericanCountryFlags },
  {continentName: 'Oceania',continentCountries: oceaniaCountryFlags },
];