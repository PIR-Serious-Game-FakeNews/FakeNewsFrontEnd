
export type player = {
  username: string;
  credibility: number;
  newsProcessing: String;
  newsProcessingScore: number;
  newsProcessed: Array<{ new: string; credit: number }>;
};

export let playerRecord: Array<player> = [];

export let currentPlayerIndex: number = 0;

// export let currentPlayer: player = playerRecord[currentPlayerIndex];

// export function nextPlayer() {
//   if (currentPlayerIndex == playerRecord.length - 1) {
//     currentPlayerIndex = 0;
//   } else {
//     currentPlayerIndex++;
//   }
//   currentPlayer = playerRecord[currentPlayerIndex];
// }

// Le pourquoi, le comment
// Presenter la cible des joueurs
// Partie Technique : Comment le code est organisé
// Prévoir des news en anglais
// Parler un peu du code sans entrer dans le details
// Finir par la démo (Une meilleure maitrise du temps)
// Conclusion et perspectives
