export type CountryData = {
  id: number;
  veracity: boolean;
  point: number;
  text: string;
  used: boolean;
};

export type CountryMap = {
  [country: string]: CountryData[];
};

export let fakeNews : CountryMap = {
  USA: [
    {
      id: 1,
      veracity: true,
      point: 100,
      text: 'US Economy shows positive signs of growth in Q2 2022.',
      used: false
    },
    {
      id: 2,
      veracity: false,
      point: -50,
      text: 'Biden administration announces plan to ban all gasoline cars by 2030.',
      used: false
    },
    {
      id: 3,
      veracity: false,
      point: -20,
      text: 'Mass shooting at a school in California leaves 5 dead and 10 injured.',
      used: false
    },
    {
      id: 4,
      veracity: true,
      point: 75,
      text: 'Major breakthrough in cancer research by US-based scientists.',
      used: false
    },
    {
      id: 5,
      veracity: true,
      point: 50,
      text: "New York City announces plans to build the world's largest Ferris wheel.",
      used: false
    },
  ],
  France: [
    {
      id: 6,
      veracity: true,
      point: 80,
      text: 'French researchers discover new renewable energy source.',
      used: false
    },
    {
      id: 7,
      veracity: false,
      point: -40,
      text: 'France announces plan to leave the EU by 2025.',
      used: false
    },
    {
      id: 8,
      veracity: true,
      point: 90,
      text: 'Paris to host the 2024 Summer Olympics.',
      used: false
    },
    {
      id: 9,
      veracity: false,
      point: -30,
      text: "France's healthcare system on the brink of collapse due to COVID-19.",
      used: false
    },
    {
      id: 10,
      veracity: true,
      point: 70,
      text: 'French cuisine named best in the world for the fifth consecutive year.',
      used: false
    },
  ],
  China: [
    {
      id: 11,
      veracity: false,
      point: -60,
      text: "China's population declines for the first time in decades.",
      used: false
    },
    {
      id: 12,
      veracity: true,
      point: 120,
      text: 'China launches new satellite to study climate change.',
      used: false
    },
    {
      id: 13,
      veracity: false,
      point: -40,
      text: 'Massive factory fire in China causes toxic smoke to spread for miles.',
      used: false
    },
    {
      id: 14,
      veracity: true,
      point: 80,
      text: "Shanghai's skyline named most beautiful in the world.",
      used: false
    },
    {
      id: 15,
      veracity: true,
      point: 90,
      text: 'China develops new vaccine for malaria.',
      used: false
    },
  ],
  Russia: [
    {
      id: 16,
      veracity: true,
      point: 100,
      text: 'Russian cosmonauts set new record for longest spacewalk.',
      used: false
    },
    {
      id: 17,
      veracity: false,
      point: -30,
      text: 'Russia announces plans to annex Belarus.',
      used: false
    },
    {
      id: 18,
      veracity: true,
      point: 80,
      text: "Moscow named world's most livable city.",
      used: false
    },
    {
      id: 19,
      veracity: false,
      point: -50,
      text: 'Russia accused of election interference in multiple countries.',
      used: false
    },
    {
      id: 20,
      veracity: true,
      point: 70,
      text: 'Russian scientists discover new species of Arctic whale.',
      used: false
    },
  ],
  Brazil: [
    {
      id: 21,
      veracity: true,
      point: 80,
      text: 'Brazilian soccer team wins the World Cup.',
      used: false
    },
    {
      id: 22,
      veracity: false,
      point: -40,
      text: 'Amazon rainforest on the verge of collapse due to deforestation.',
      used: false
    },
    {
      id: 23,
      veracity: true,
      point: 90,
      text: "Rio de Janeiro named world's most beautiful city.",
      used: false
    },
    {
      id: 24,
      veracity: false,
      point: -20,
      text: 'Brazilian president impeached for corruption.',
      used: false
    },
    {
      id: 25,
      veracity: true,
      point: 70,
      text: 'Brazilian scientists discover new species of butterfly.',
      used: false
    },
  ],
  Australia: [
    {
      id: 26,
      veracity: false,
      point: -30,
      text: "Australia's Great Barrier Reef on the brink of extinction.",
      used: false
    },
    {
      id: 27,
      veracity: true,
      point: 100,
      text: 'Australian scientists discover cure for a rare disease.',
      used: false
    },
    {
      id: 28,
      veracity: false,
      point: -50,
      text: 'Massive bushfires in Australia kill hundreds of animals.',
      used: false
    },
    {
      id: 29,
      veracity: true,
      point: 90,
      text: 'Sydney Opera House named one of the seven wonders of the modern world.',
      used: false
    },
    {
      id: 30,
      veracity: true,
      point: 80,
      text: 'Australian surfer wins world championship for the third year in a row.',
      used: false
    },
  ],
  India: [
    {
      id: 31,
      veracity: true,
      point: 90,
      text: 'Indian scientists develop new technology to combat air pollution.',
      used: false
    },
    {
      id: 32,
      veracity: false,
      point: -40,
      text: 'India announces plan to privatize all public hospitals.',
      used: false
    },
    {
      id: 33,
      veracity: true,
      point: 80,
      text: 'Mumbai named one of the best cities in the world for startups.',
      used: false
    },
    {
      id: 34,
      veracity: false,
      point: -30,
      text: 'India accused of human rights violations in Kashmir.',
      used: false
    },
    {
      id: 35,
      veracity: true,
      point: 70,
      text: 'Indian chefs win prestigious culinary award.',
      used: false
    },
  ],
  Canada: [
    {
      id: 36,
      veracity: true,
      point: 80,
      text: 'Canadian hockey team wins gold at the Olympics.',
      used: false
    },
    {
      id: 37,
      veracity: false,
      point: -40,
      text: 'Oil spill in British Columbia threatens wildlife and fishing industry.',
      used: false
    },
    {
      id: 38,
      veracity: true,
      point: 90,
      text: 'Toronto named one of the most livable cities in the world.',
      used: false
    },
    {
      id: 39,
      veracity: false,
      point: -20,
      text: 'Canadian prime minister accused of corruption scandal.',
      used: false
    },
    {
      id: 40,
      veracity: true,
      point: 70,
      text: 'Canadian scientists discover new species of fish.',
      used: false
    },
  ],
  Togo: [
    {
      id: 41,
      veracity: false,
      point: -90,
      text: 'Togo launches new satellite to study climate change.',
      used: false
    },
    {
      id: 42,
      veracity: false,
      point: -50,
      text: 'Togo accused of human rights violations against ethnic minorities in Xinjiang.',
      used: false
    },
    {
      id: 43,
      veracity: false,
      point: -80,
      text: "Lomé named one of the world's top financial centers.",
      used: false
    },
    {
      id: 44,
      veracity: false,
      point: -30,
      text: 'Togo blamed for causing environmental problems in the South China Sea.',
      used: false
    },
    {
      id: 45,
      veracity: false,
      point: -70,
      text: 'Togolese scientists develop new technology to desalinate seawater.',
      used: false
    },
  ],
  Mexico: [
    {
      id: 46,
      veracity: true,
      point: 80,
      text: 'Mexican artist wins international art competition.',
      used: false
    },
    {
      id: 47,
      veracity: false,
      point: -40,
      text: 'Drug cartel violence continues to escalate in Mexico.',
      used: false
    },
    {
      id: 48,
      veracity: true,
      point: 90,
      text: "Mexico City named one of the world's top food destinations.",
      used: false
    },
    {
      id: 49,
      veracity: false,
      point: -20,
      text: 'Mexican president accused of embezzlement.',
      used: false
    },
    {
      id: 50,
      veracity: true,
      point: 70,
      text: 'Mexican scientists discover new species of bird.',
      used: false
    },
  ],
};