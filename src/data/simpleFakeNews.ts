let subject: Array<string> = [
  'Le Président',
  'Le Gouvernement',
  "Le directeur d'une ONG",
  "Le PDG d'une multinationale",
  'Le Premier Ministre',
  "Le chef de l'État",
  'Le maire de la capitale',
  'Le secrétaire général des Nations Unies',
  "Le chef d'un partie politique majeur",
  'Le célèbre philantrope',
  "Le directeur d'un syndicat ouvrier majeur",
  'Le chercheur de renommée mondiale',
  "L'activiste",
];

let verb: Array<string> = [
  'dévoile des idées visant à réduire les inégalités économiques et sociales',
  'a été accusé de détournement de fond',
  "a été mis en examen pour abus d'influence",
  'a participé à un évenement caritatif',
  "a fait un don de 1.000.000 $ à la ligue des droits de l'homme",
  "est décédé hier dans la nuit, à la suite d'un accident de la route",
  'annonce des réformes politiques majeures',
  "lance des initiatives pour promouvoir l'innovation et stimuler l'économie",
  "présente un plan d'action visant à améliorer l'accès à l'éducation",
  "établit des partenariats stratégiques avec d'autres organisations dans le but d'endiguer les conséquences du réchauffement climatique",
  'promeut la paix, la diplomatie dans un contexte de crise sociale',
  'engage des mesures répressives pour restreindre les libertés civiles et politiques',
  'propose des réformes fiscales qui favorisent les riches et accentues les inégalités',
  'ignore et minimise les problèmes environnementaux',
  'pense que le réchauffement climatique et un complot visant à réduire la productivité',
  "s'attaque à la liberté de la presse en censurant toutes les news qui lui donne une mauvaise image",
  'abuse de sa position pour intimider et harceler ses collegues de travail',
  'a accepté des pots de vin',
  "a détourné des fonds pour s'acheter des biens personnels",
  'a été accusé de meutre avec préméditation sur sa famille',
  "a été retrouvé mort à son domicile, des suite d'une overdose",
  'a été vu entrain de maltraiter son chien dans la rue',
  "défend les droits de l'homme en protégeant les libertés civiles et en luttant contre les discriminations",
  'investit dans la recherche scientifique pour réduire la dépendance aux énergies fossiles',
  'soutient les initiatives culturelles et artistiques pour préserver le patrimoine culturel',
];

export type NewsMap = {
  [country: string]: string[];
};

export let simpleNewsList: NewsMap = {
  France: [],
  Angleterre: [],
  Espagne: [],
  Allemagne: [],
  Pologne: [],
  Italie: [],
  Portugal: [],
  'Pays-Bas': [],
  Suède: [],
  Finlande: [],
  Norvège: [],
  Danemark: [],
  Ukraine: [],
  Lettonie: [],
  Roumanie: [],
  Croatie: [],
  Grèce: [],
  Suisse: [],
  Slovaquie: [],
  Serbie: [],
  Islande: [],
  Groenland: [],
  Turquie: [],
  Russie: [],
  Kazakhstan: [],
  Mongolie: [],
  Japon: [],
  Inde: [],
  Thaïlande: [],
  Philippines: [],
  Indonésie: [],
  Afghanistan: [],
  Chine: [],
  'Hong Kong': [],
  Israël: [],
  'Emirats Arabes Unis': [],
  Maroc: [],
  Algérie: [],
  Egypte: [],
  Sénégal: [],
  Mali: [],
  "Côte d'Ivoire": [],
  Cameroun: [],
  Niger: [],
  Soudan: [],
  Ethiopie: [],
  Kenya: [],
  'République du Congo': [],
  Angola: [],
  'Afrique du Sud': [],
  Madagascar: [],
  Tanzanie: [],
  Zambie: [],
  Tunisie: [],
  Canada: [],
  'Etats-Unis': [],
  Alaska: [],
  Mexique: [],
  Venezuela: [],
  Honduras: [],
  Colombie: [],
  Pérou: [],
  Brésil: [],
  'Guyane Française': [],
  Bolivie: [],
  Argentine: [],
  Australie: [],
  'Nouvelle-Zélande': [],
  Fidji: [],
};

function selectRandomElement(arr: any[]): any {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function generateSimpleNews(location: string) {
  let sn: string;
  do {
    let s = selectRandomElement(subject);
    let v = selectRandomElement(verb);
    sn = s + ' ' + v + '.';
  } while (simpleNewsList[location].includes(sn));
  simpleNewsList[location].push(sn);
}

export function generateAllSimpleNews() {
  const locations = Object.keys(simpleNewsList);
  for (let i = 0; i < 3; i++) {
    for (const location of locations) {
      // if(Math.random() > 0.3){
        let sn: string;
        do {
          const s = selectRandomElement(subject);
          const v = selectRandomElement(verb);
          sn = s + ' ' + v + '.';
        } while (simpleNewsList[location].includes(sn));
        simpleNewsList[location].push(sn);
      // }
    }
  }
}
