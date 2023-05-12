
export type player = {
  username: string;
  credibility: number;
  newsProcessing: Array<{ new: string; score: number }>;
  // newsProcessingScore: number;
  newsProcessed: Array<{ new: string; credit: number }>;
};

export let playerRecord: Array<player> = [
  {
    "username": "Marc",
    "credibility": 25,
    "newsProcessing": [],
    // "newsProcessingScore": 0,
    "newsProcessed": []
  },
  {
    "username": "Mady",
    "credibility": 50,
    "newsProcessing": [],
    // "newsProcessingScore": 0,
    "newsProcessed": []
  },
  {
    "username": "Brandon",
    "credibility": 0,
    "newsProcessing": [],
    // "newsProcessingScore": 0,
    "newsProcessed": []
  },
  {
    "username": "Pascal",
    "credibility": 0,
    "newsProcessing": [],
    // "newsProcessingScore": 0,
    "newsProcessed": []
  },
  {
    "username": "Yohan",
    "credibility": 0,
    "newsProcessing": [],
    // "newsProcessingScore": 0,
    "newsProcessed": []
  },
  {
    "username": "Clément",
    "credibility": 0,
    "newsProcessing": [],
    // "newsProcessingScore": 0,
    "newsProcessed": []
  }
];

export let currentPlayerIndex: number = 0;

// Le pourquoi, le comment
// Presenter la cible des joueurs
// Partie Technique : Comment le code est organisé
// Prévoir des news en anglais
// Parler un peu du code sans entrer dans le details
// Finir par la démo (Une meilleure maitrise du temps)
// Conclusion et perspectives
