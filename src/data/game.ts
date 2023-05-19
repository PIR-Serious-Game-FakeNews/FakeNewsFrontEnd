
export type player = {
  username: string;
  credibility: number;
  newsProcessing: Array<{ new: string; score: number, actions: string[], sens: number }>;
  newsProcessed: Array<{ new: string; credit: number, veracity: boolean }>;
};

export let playerRecord: Array<player> = [
  {
    "username": "Marc",
    "credibility": 17,
    "newsProcessing": [{
      "new": "<b>[Nantes]</b> Le Gouvernement pense que le réchauffement climatique et un complot visant à réduire la productivité.",
      "score": 75,
      "actions":[],
      "sens": 1
    }],
    "newsProcessed": [
      {
        "new": "<b>[Rennes] </b>Les autorités ont découvert un réseau de trafiquants d’animaux exotiques dans la région.",
        "credit": 83,
        "veracity": true
      }
    ]
  },
  {
    "username": "Mady",
    "credibility": 15,
    "newsProcessing": [],
    "newsProcessed": [
      {
        "new": "<b>[Nantes]</b> Le Gouvernement pense que le réchauffement climatique et un complot visant à réduire la productivité.",
        "credit": 75,
        "veracity": true
      }
    ]
  },
  {
    "username": "Pascal",
    "credibility": 6.5,
    "newsProcessing": [],
    "newsProcessed": [
      {
        "new": "<b>[Rennes] </b>Les autorités ont découvert un réseau de trafiquants d’animaux exotiques dans la région.",
        "credit": 65,
        "veracity": true
      }
    ]
  },
  {
    "username": "Yohan",
    "credibility": 5.5,
    "newsProcessing": [],
    "newsProcessed": [
      {
        "new": "<b>[Rennes] </b>Les autorités ont découvert un réseau de trafiquants d’animaux exotiques dans la région.",
        "credit": 55,
        "veracity": true
      }
    ]
  }
]

export let currentPlayerIndex: number = 0;
export let currentPlayer: player = playerRecord[currentPlayerIndex];

export let unlockLevel: { [country: string]: number } = {
  France: 0,
  Angleterre: 40,
  Espagne: 40,
  Allemagne: 40,
  Pologne: 40,
  Italie: 40,
  Portugal: 40,
  "Pays-Bas": 40,
  Suède: 40,
  Finlande: 40,
  Norvège: 40,
  Danemark: 40,
  Ukraine: 40,
  Lettonie: 40,
  Roumanie: 40,
  Croatie: 40,
  Grèce: 40,
  Suisse: 40,
  Slovaquie: 40,
  Serbie: 40,
  Islande: 40,
  Groenland: 40,
  Turquie: 100,
  Russie: 100,
  Kazakhstan: 100,
  Mongolie: 100,
  Japon: 100,
  Inde: 100,
  Thaïlande: 100,
  Philippines: 100,
  Indonésie: 100,
  Afghanistan: 100,
  Chine: 100,
  "Hong Kong": 100,
  Israël: 100,
  "Emirats Arabes Unis": 100,
  Maroc: 170,
  Algérie: 170,
  Egypte: 170,
  Sénégal: 170,
  Mali: 170,
  "Côte d'Ivoire": 170,
  Cameroun: 170,
  Niger: 170,
  Soudan: 170,
  Ethiopie: 170,
  Kenya: 170,
  "République du Congo": 170,
  Angola: 170,
  "Afrique du Sud": 170,
  Madagascar: 170,
  Tanzanie: 170,
  Zambie: 170,
  Tunisie: 170,
  Canada: 220,
  "Etats-Unis": 220,
  Alaska: 220,
  Mexique: 220,
  Venezuela: 220,
  Honduras: 220,
  Colombie: 220,
  Pérou: 220,
  Brésil: 220,
  "Guyane Française": 220,
  Bolivie: 220,
  Argentine: 220,
  Australie: 275,
  "Nouvelle-Zélande": 275,
  Fidji: 275,
};


// Le pourquoi, le comment
// Presenter la cible des joueurs
// Partie Technique : Comment le code est organisé
// Prévoir des news en anglais
// Parler un peu du code sans entrer dans le details
// Finir par la démo (Une meilleure maitrise du temps)
// Conclusion et perspectives
