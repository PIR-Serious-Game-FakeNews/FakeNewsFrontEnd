
export type player = {
  username: string;
  credibility: number;
  newsProcessing: Array<{ new: string; score: number, actions: string[], sens: number }>;
  newsProcessed: Array<{ new: string; credit: number }>;
};

export let playerRecord: Array<player> = [
  {
    "username": "Marc",
    "credibility": 0,
    "newsProcessing": [],
    "newsProcessed": []
  },
  {
    "username": "Mady",
    "credibility": 0,
    "newsProcessing": [],
    "newsProcessed": []
  },
  {
    "username": "Brandon",
    "credibility": 0,
    "newsProcessing": [],
    "newsProcessed": []
  },
  {
    "username": "Pascal",
    "credibility": 0,
    "newsProcessing": [],
    "newsProcessed": []
  },
  {
    "username": "Yohan",
    "credibility": 0,
    "newsProcessing": [],
    "newsProcessed": []
  },
  {
    "username": "Clément",
    "credibility": 0,
    "newsProcessing": [],
    "newsProcessed": []
  }
];

export let currentPlayerIndex: number = 0;
export let currentPlayer: player = playerRecord[currentPlayerIndex];

export let unlockLevel: { [country: string]: number } = {
  France: 0,
  Angleterre: 63,
  Espagne: 32,
  Allemagne: 48,
  Pologne: 78,
  Italie: 21,
  Portugal: 56,
  "Pays-Bas": 89,
  Suède: 42,
  Finlande: 71,
  Norvège: 37,
  Danemark: 68,
  Ukraine: 14,
  Lettonie: 93,
  Roumanie: 26,
  Croatie: 53,
  Grèce: 79,
  Suisse: 17,
  Slovaquie: 91,
  Serbie: 39,
  Islande: 58,
  Groenland: 84,
  Turquie: 29,
  Russie: 76,
  Kazakhstan: 23,
  Mongolie: 62,
  Japon: 34,
  Inde: 55,
  Thaïlande: 81,
  Philippines: 18,
  Indonésie: 47,
  Afghanistan: 73,
  Chine: 64,
  "Hong Kong": 95,
  Israël: 12,
  "Emirats Arabes Unis": 83,
  Maroc: 51,
  Algérie: 36,
  Egypte: 69,
  Sénégal: 16,
  Mali: 88,
  "Côte d'Ivoire": 27,
  Cameroun: 54,
  Niger: 80,
  Soudan: 25,
  Ethiopie: 60,
  Kenya: 41,
  "République du Congo": 74,
  Angola: 30,
  "Afrique du Sud": 66,
  Madagascar: 87,
  Tanzanie: 22,
  Zambie: 57,
  Tunisie: 33,
  Canada: 72,
  "Etats-Unis": 19,
  Alaska: 86,
  Mexique: 13,
  Venezuela: 61,
  Honduras: 40,
  Colombie: 75,
  Pérou: 31,
  Brésil: 44,
  "Guyane Française": 77,
  Bolivie: 35,
  Argentine: 28,
  Australie: 37,
  "Nouvelle-Zélande": 63,
  Fidji: 70,
};


// Le pourquoi, le comment
// Presenter la cible des joueurs
// Partie Technique : Comment le code est organisé
// Prévoir des news en anglais
// Parler un peu du code sans entrer dans le details
// Finir par la démo (Une meilleure maitrise du temps)
// Conclusion et perspectives
