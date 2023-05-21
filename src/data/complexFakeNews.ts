type News = {
  enonce: string;
  actions: Action[];
};

type Action = {
  actor: string;
  description: string;
  pourcentage: number;
};

function selectRandomElement(arr: any[]): any {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export function generateComplexNews(location: string) {
  if (location == 'France') {
    let sn: string;
    let i = 0;
    do {
      sn = selectRandomElement(complexNewsListInitial[location]);
      i++;
    } while (complexNewsList[location].includes(sn) && i < 5);
    if (sn && !complexNewsList[location].includes(sn))
      complexNewsList[location].push(sn);
  } else {
    let sn: string;
    let i = 0;
    do {
      sn = selectRandomElement(complexNewsListInitial[location]);
      i++;
    } while (complexNewsList[location].includes(sn) && i < 5);
    if (sn && !complexNewsList[location].includes(sn))
      complexNewsList[location].push(sn);
  }
}

export function generateAllComplexNews() {
  const locations = Object.keys(complexNewsList);
  for (let i = 0; i < 1; i++) {
    for (const location of locations) {
      if (location == 'France') {
        for (let index = 0; index < 3; index++) {
          if (Math.random() > 0.7) {
            let sn: string;
            let i = 0;
            do {
              sn = selectRandomElement(complexNewsListInitial[location]);
              i++;
            } while (complexNewsList[location].includes(sn) && i < 5);
            if (sn && !complexNewsList[location].includes(sn))
              complexNewsList[location].push(sn);
          }
        }
      } else {
        if (Math.random() > 0.7) {
          let sn: string;
          let i = 0;
          do {
            sn = selectRandomElement(complexNewsListInitial[location]);
            i++;
          } while (complexNewsList[location].includes(sn) && i < 5);
          if (sn && !complexNewsList[location].includes(sn))
            complexNewsList[location].push(sn);
        }
      }
    }
  }
}
export type NewsMap = {
  [country: string]: string[];
};

export let complexNewsList: NewsMap = {
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

export let complexNewsListInitial: NewsMap = {
  France: [
    '<b>[Paris] </b>Une équipe de scientifiques affirme avoir découvert un nouveau traitement contre le cancer qui guérit 100% des patients.',
    '<b>[Rennes] </b>Les autorités ont découvert un réseau de trafiquants d’animaux exotiques dans la région.',
    '<b>[Toulouse] </b>Selon un rapport récent, la consommation de vin rouge français réduit le risque de maladies cardiaques.',
    "<b>[Lille] </b>Une entreprise locale affirme avoir inventé un moteur qui fonctionne à l'eau et qui réduit de moitié la consommation d'énergie.",
    "<b>[Amiens] </b>Un artiste local expose des œuvres d'art qui ont été achetées par des collectionneurs internationaux pour des sommes astronomiques.",
    '<b>[Rouen] </b>Un groupe de chercheurs annonce avoir découvert une nouvelle espèce animale qui pourrait aider à lutter contre le changement climatique.',
    "<b>[Caen] </b>Des habitants signalent des bruits étranges la nuit provenant d'un parc local, les autorités enquêtent sur la cause.",
    '<b>[Reims] </b>Une association locale organise un événement pour récolter des fonds pour les sans-abris, de nombreux artistes locaux y participent.',
    "<b>[Strasbourg] </b>Des témoins signalent des apparitions d'ovnis dans le ciel de la ville, l'armée de l'air française n'a pas commenté l'affaire.",
    "<b>[Brest] </b>Un groupe d'écologistes organise une manifestation pour dénoncer la pollution marine dans la région.",
    "<b>[Orléans] </b>Un incendie s'est déclaré dans une usine locale, les pompiers sont sur place pour maîtriser les flammes.",
    "<b>[Dijon] </b>Des archéologues découvrent des vestiges datant de l'époque romaine dans un parc local.",
    '<b>[Nantes] </b>Une équipe de chercheurs annonce avoir découvert une nouvelle espèce de plante qui pourrait être utilisée pour produire des médicaments.',
    '<b>[Limoges] </b>Des habitants signalent des apparitions de fantômes dans un ancien cimetière, une entreprise locale propose des visites guidées pour Halloween.',
    '<b>[Clermont-Ferrand] </b>Des témoins signalent des phénomènes étranges dans le ciel de la ville, les scientifiques locaux enquêtent sur le phénomène.',
    '<b>[Lyon] </b>Une entreprise locale annonce avoir créé une nouvelle application mobile pour faciliter la vie des habitants de la ville.',
    "<b>[Bordeaux] </b>Des habitants signalent des odeurs étranges provenant d'une usine locale, les autorités enquêtent sur la cause.",
    '<b>[Bayonne] </b>Un groupe de surfeurs locaux organise une compétition pour promouvoir la pratique du surf dans la région.',
    '<b>[Montpellier] </b>Une équipe de chercheurs annonce avoir découvert un traitement efficace contre une maladie rare.',
    "<b>[Marseille] </b>Des habitants signalent des nuisances sonores provenant d'un bar local, les autorités ont reçu de nombreuses plaintes.",
    "<b>[Nice] </b>Un groupe d'artistes locaux organise une exposition pour promouvoir la culture provençale.",
    "<b>[Le Mans] </b>Le Mans est devenu la première ville en France à établir une colonie sur Mars, marquant ainsi une avancée significative dans l'exploration spatiale.",
  ],
  Angleterre: [
    "Selon une étude récente, l'Angleterre connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur technologique.",
  ],
  Espagne: [
    "Selon un rapport récent, l'Espagne enregistre une augmentation du nombre de touristes étrangers.",
  ],
  Allemagne: [
    "Selon une étude récente, l'Allemagne connaît une augmentation significative du nombre de véhicules électriques sur ses routes.",
  ],
  Pologne: [
    'Selon une étude récente, la Pologne connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la technologie.',
  ],
  Italie: [
    "Selon une étude récente, l'Italie connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la gastronomie.",
  ],
  Portugal: [
    'Selon un rapport récent, le Portugal connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur du tourisme durable.',
  ],
  'Pays-Bas': [
    "Selon une étude récente, les Pays-Bas connaissent une augmentation du nombre de jeunes entrepreneurs dans le secteur de l'énergie renouvelable.",
  ],
  Suède: [
    'Selon une étude récente, la Suède connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la mobilité durable.',
  ],
  Finlande: [
    "Selon une étude récente, la Finlande est en tête des pays les plus avancés en matière de technologie de l'information et de la communication (TIC).",
  ],
  Norvège: [
    "Selon une étude récente, la Norvège est considérée comme l'un des pays les plus avancés dans la transition vers une économie verte.",
  ],
  Danemark: [
    "Selon une étude récente, le Danemark est considéré comme l'un des pays les plus avancés dans l'adoption des énergies renouvelables.",
  ],
  Ukraine: [
    "Selon une étude récente, l'Ukraine est en train de devenir une destination touristique de plus en plus prisée en Europe.",
  ],
  Lettonie: [
    "Selon une étude récente, la Lettonie est considérée comme l'un des pays les plus avancés dans le domaine de l'innovation technologique.",
  ],
  Roumanie: [
    "Selon une étude récente, la Roumanie est en train de devenir un pôle majeur de l'industrie du jeu vidéo en Europe.",
  ],
  Croatie: [
    'Selon une étude récente, la Croatie est devenue une destination de choix pour les amateurs de tourisme durable.',
  ],
  Grèce: [
    "Selon une étude récente, la Grèce est en train de devenir un leader mondial dans le domaine de l'énergie solaire.",
  ],
  Suisse: [
    "Selon une étude récente, la Suisse est en train de devenir un centre majeur de l'innovation technologique en Europe.",
  ],
  Slovaquie: [
    'Selon une étude récente, la Slovaquie connaît une croissance significative dans le secteur des énergies renouvelables.',
  ],
  Serbie: [
    "Selon une étude récente, la Serbie est en train de devenir un pôle d'attraction pour les investissements étrangers.",
  ],
  Islande: [
    "Selon une étude récente, l'Islande est en train de devenir un leader mondial de la géothermie.",
  ],
  Groenland: [
    'Selon une étude récente, le Groenland connaît une fonte des glaces plus rapide que prévu.',
  ],
  Turquie: [
    "Selon une étude récente, la Turquie connaît une augmentation significative de sa production d'énergie éolienne.",
  ],
  Russie: [
    'Des manifestations massives éclatent à Moscou, dénonçant la corruption et réclamant des réformes politiques.',
    'Iakoutsk, en Russie, connaît une vague de chaleur sans précédent, avec des températures atteignant 38 degrés Celsius, provoquant la fonte accélérée du pergélisol.',
  ],
  Kazakhstan: [
    "Selon une étude récente, le Kazakhstan connaît une augmentation significative de sa production d'énergie solaire.",
  ],
  Mongolie: [
    "Selon une étude récente, la Mongolie connaît une augmentation significative de sa production d'énergie éolienne.",
  ],
  Japon: [
    "Selon une étude récente, le Japon connaît une augmentation significative de sa production d'énergie géothermique.",
  ],
  Inde: [
    "Selon une étude récente, l'Inde connaît une augmentation significative du nombre de startups technologiques.",
  ],
  Thaïlande: [
    "Une découverte archéologique révèle l'existence d'une ancienne cité engloutie au large des côtes de la Thaïlande.",
  ],
  Philippines: [
    "Des chercheurs philippins annoncent la découverte d'une nouvelle espèce de fleur qui ne fleurit qu'une fois par siècle.",
  ],
  Indonésie: [
    "Une équipe de scientifiques indonésiens découvre une nouvelle espèce de singe capable de peindre des œuvres d'art.",
  ],
  Afghanistan: [
    "Des archéologues découvrent une cité perdue datant de l'Empire Kushan au nord de l'Afghanistan.",
  ],
  Chine: [
    "Des manifestations pro-indépendance éclatent au Tibet, réclamant l'autonomie et dénonçant la répression chinoise.",
    "Des mesures strictes de contrôle des médias sont mises en place à Pékin, restreignant la liberté d'expression et la diffusion d'informations critiques envers le gouvernement.",
  ],
  'Hong Kong': [
    'Des milliers de manifestants pro-démocratie se rassemblent à Hong Kong pour réclamer des réformes politiques.',
  ],
  Israël: [
    'Israël annonce la construction de nouveaux logements dans les colonies en Cisjordanie.',
  ],
  'Emirats Arabes Unis': [
    "Les Émirats arabes unis annoncent un ambitieux plan de développement pour devenir le premier pays neutre en carbone d'ici 2050.",
  ],
  Maroc: [
    'Des manifestations éclatent au Maroc, réclamant des réformes politiques et une plus grande participation citoyenne.',
  ],
  Algérie: [
    'Des élections présidentielles sont prévues en Algérie, suscitant un vif débat sur la légitimité du processus électoral et la participation des différentes factions politiques.',
  ],
  Egypte: [
    "Des manifestations massives éclatent en Égypte, réclamant des réformes politiques et une plus grande liberté d'expression.",
  ],
  Sénégal: [
    "Une nouvelle loi sur la protection de l'environnement est adoptée au Sénégal, suscitant des débats sur son efficacité et son application.",
  ],
  Mali: [
    'Des affrontements violents éclatent dans le nord du Mali, mettant en péril les efforts de stabilité et de paix dans la région.',
  ],
  "Côte d'Ivoire": [
    "Des manifestations éclatent en Côte d'Ivoire suite à des tensions politiques, mettant en péril la stabilité du pays.",
  ],
  Cameroun: [
    "Des tensions politiques s'intensifient au Cameroun, suscitant des préoccupations quant à la stabilité du pays.",
  ],
  Niger: [
    'Des attaques terroristes frappent le Niger, mettant en péril la sécurité et la stabilité du pays.',
  ],
  Soudan: [
    'Des manifestations éclatent au Soudan, réclamant des réformes politiques et économiques.',
  ],
  Ethiopie: [
    "Une nouvelle découverte archéologique en Éthiopie révèle des vestiges anciens d'une civilisation perdue depuis des siècles.",
  ],
  Kenya: [
    'Le Kenya accueille une conférence internationale sur le développement durable et les énergies renouvelables.',
  ],
  'République du Congo': [
    'La République du Congo lance un projet de reforestation massive pour lutter contre la déforestation et préserver la biodiversité.',
  ],
  Angola: [
    "L'Angola lance un vaste programme d'investissement dans les énergies renouvelables pour réduire sa dépendance aux combustibles fossiles.",
  ],
  'Afrique du Sud': [
    "L'Afrique du Sud remporte le titre de meilleure destination touristique de l'année, attirant des visiteurs du monde entier avec sa diversité culturelle, ses paysages magnifiques et sa faune emblématique.",
  ],
  Madagascar: [
    "Une nouvelle espèce de lémurien découverte à Madagascar, suscitant l'enthousiasme des chercheurs et renforçant l'importance de la conservation de la biodiversité sur l'île.",
  ],
  Tanzanie: [
    "La Tanzanie annonce la découverte d'une cité perdue datant de l'ère des pharaons égyptiens, révélant des liens historiques inattendus entre les deux régions.",
  ],
  Zambie: [
    "La Zambie annonce une nouvelle politique économique qui stimulera la croissance et réduira le taux de chômage de moitié d'ici deux ans.",
  ],
  Tunisie: [
    "La Tunisie annonce une réforme du système éducatif pour améliorer la qualité de l'enseignement et réduire le taux d'analphabétisme.",
  ],
  Canada: [
    "Le gouvernement canadien annonce la création d'un nouveau programme de subventions pour les start-ups technologiques à Ottawa.",
    "Une équipe de chercheurs de l'Université de Vancouver affirme avoir découvert un moyen révolutionnaire de produire de l'énergie propre à partir de déchets organiques.",
  ],
  'Etats-Unis': [
    'Une entreprise basée à Los Angeles prétend avoir développé une voiture électrique révolutionnaire capable de parcourir 1000 kilomètres avec une seule charge.',
    'Une équipe de scientifiques basée à Miami affirme avoir découvert un traitement révolutionnaire pour inverser le processus de vieillissement chez les humains.',
    'Une équipe de chercheurs basée en Alaska prétend avoir découvert une nouvelle espèce de mammifère marin vivant dans les eaux glaciales de la région.',
  ],
  Mexique: [
    'Une équipe de chercheurs mexicains prétend avoir découvert une cité antique cachée dans la jungle de la péninsule du Yucatán.',
  ],
  Venezuela: [
    'Des manifestations massives ont éclaté dans la capitale du Venezuela, Caracas, en raison de la crise économique et politique que traverse le pays.',
  ],
  Honduras: [
    "Des inondations dévastatrices ont frappé plusieurs régions du Honduras, causant d'importants dégâts matériels et des pertes humaines.",
  ],
  Colombie: [
    'Des manifestations massives ont éclaté dans plusieurs villes de Colombie, avec des revendications concernant les réformes économiques et sociales du gouvernement.',
  ],
  Pérou: [
    'Une élection présidentielle historique se déroule au Pérou, avec deux candidats en lice pour le poste de président.',
  ],
  Brésil: [
    "Les incendies en cours dans la forêt amazonienne au Brésil menacent gravement l'écosystème et suscitent des préoccupations internationales.",
    "Une épidémie de dengue sévit actuellement à Rio de Janeiro, causant de nombreux cas de maladie et suscitant des mesures d'urgence de la part des autorités sanitaires.",
    "Une nouvelle vague de criminalité frappe la ville de Salvador, au Brésil, suscitant l'inquiétude des habitants et des autorités locales.",
  ],
  'Guyane Française': [
    "Des manifestations ont éclaté en Guyane française, avec des revendications concernant l'amélioration des infrastructures et des services publics.",
  ],
  Bolivie: [
    "Une découverte archéologique majeure a été faite en Bolivie, révélant des vestiges anciens d'une civilisation perdue.",
  ],
  Argentine: [
    'Une grève générale paralyse actuellement la ville de Buenos Aires, en Argentine, entraînant des perturbations dans les transports et les services publics.',
    "Des scientifiques argentins découvrent une nouvelle espèce d'oiseau rare dans la région d'Ushuaïa, attirant l'attention des ornithologues du monde entier.",
  ],
  Australie: [
    'Une vague de chaleur record frappe la ville de Sydney en Australie, entraînant des températures extrêmes et des préoccupations croissantes concernant les incendies de brousse.',
    "Une équipe de scientifiques australiens découvre une nouvelle espèce de kangourou unique dans la région de Perth, suscitant l'enthousiasme des biologistes du monde entier.",
    "Des chercheurs de l'Université de Darwin annoncent la découverte d'une nouvelle espèce de reptile venimeux dans la région, suscitant des préoccupations quant à la sécurité des habitants et des touristes.",
  ],
  'Nouvelle-Zélande': [
    "Des chercheurs néo-zélandais annoncent la découverte d'une nouvelle espèce d'oiseau endémique dans les forêts de Nouvelle-Zélande, suscitant l'excitation parmi les ornithologues du monde entier.",
  ],
  Fidji: [
    "Une équipe de chercheurs des Fidji affirme avoir découvert une nouvelle espèce de corail dans les récifs de l'archipel, suscitant l'intérêt des scientifiques du monde entier pour sa rareté et sa beauté.",
  ],
};

export const complexNewsEnonce: Array<string> = [
  '<b>[Paris] </b>Une équipe de scientifiques affirme avoir découvert un nouveau traitement contre le cancer qui guérit 100% des patients.',
  '<b>[Rennes] </b>Les autorités ont découvert un réseau de trafiquants d’animaux exotiques dans la région.',
  '<b>[Toulouse] </b>Selon un rapport récent, la consommation de vin rouge français réduit le risque de maladies cardiaques.',
  "<b>[Lille] </b>Une entreprise locale affirme avoir inventé un moteur qui fonctionne à l'eau et qui réduit de moitié la consommation d'énergie.",
  "<b>[Amiens] </b>Un artiste local expose des œuvres d'art qui ont été achetées par des collectionneurs internationaux pour des sommes astronomiques.",
  '<b>[Rouen] </b>Un groupe de chercheurs annonce avoir découvert une nouvelle espèce animale qui pourrait aider à lutter contre le changement climatique.',
  "<b>[Caen] </b>Des habitants signalent des bruits étranges la nuit provenant d'un parc local, les autorités enquêtent sur la cause.",
  '<b>[Reims] </b>Une association locale organise un événement pour récolter des fonds pour les sans-abris, de nombreux artistes locaux y participent.',
  "<b>[Strasbourg] </b>Des témoins signalent des apparitions d'ovnis dans le ciel de la ville, l'armée de l'air française n'a pas commenté l'affaire.",
  "<b>[Brest] </b>Un groupe d'écologistes organise une manifestation pour dénoncer la pollution marine dans la région.",
  "<b>[Orléans] </b>Un incendie s'est déclaré dans une usine locale, les pompiers sont sur place pour maîtriser les flammes.",
  "<b>[Dijon] </b>Des archéologues découvrent des vestiges datant de l'époque romaine dans un parc local.",
  '<b>[Nantes] </b>Une équipe de chercheurs annonce avoir découvert une nouvelle espèce de plante qui pourrait être utilisée pour produire des médicaments.',
  '<b>[Limoges] </b>Des habitants signalent des apparitions de fantômes dans un ancien cimetière, une entreprise locale propose des visites guidées pour Halloween.',
  '<b>[Clermont-Ferrand] </b>Des témoins signalent des phénomènes étranges dans le ciel de la ville, les scientifiques locaux enquêtent sur le phénomène.',
  '<b>[Lyon] </b>Une entreprise locale annonce avoir créé une nouvelle application mobile pour faciliter la vie des habitants de la ville.',
  "<b>[Bordeaux] </b>Des habitants signalent des odeurs étranges provenant d'une usine locale, les autorités enquêtent sur la cause.",
  '<b>[Bayonne] </b>Un groupe de surfeurs locaux organise une compétition pour promouvoir la pratique du surf dans la région.',
  '<b>[Montpellier] </b>Une équipe de chercheurs annonce avoir découvert un traitement efficace contre une maladie rare.',
  "<b>[Marseille] </b>Des habitants signalent des nuisances sonores provenant d'un bar local, les autorités ont reçu de nombreuses plaintes.",
  "<b>[Nice] </b>Un groupe d'artistes locaux organise une exposition pour promouvoir la culture provençale.",
  "<b>[Le Mans] </b>Le Mans est devenu la première ville en France à établir une colonie sur Mars, marquant ainsi une avancée significative dans l'exploration spatiale.",
  "Selon une étude récente, l'Allemagne connaît une augmentation significative du nombre de véhicules électriques sur ses routes.",
  "Selon une étude récente, l'Angleterre connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur technologique.",
  "Selon un rapport récent, l'Espagne enregistre une augmentation du nombre de touristes étrangers.",
  "Selon une étude récente, l'Italie connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la gastronomie.",
  'Selon un rapport récent, le Portugal connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur du tourisme durable.',
  'Selon une étude récente, la Pologne connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la technologie.',
  "Selon une étude récente, les Pays-Bas connaissent une augmentation du nombre de jeunes entrepreneurs dans le secteur de l'énergie renouvelable.",
  'Selon une étude récente, la Suède connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la mobilité durable.',
  "Selon une étude récente, la Finlande est en tête des pays les plus avancés en matière de technologie de l'information et de la communication (TIC).",
  "Selon une étude récente, la Norvège est considérée comme l'un des pays les plus avancés dans la transition vers une économie verte.",
  "Selon une étude récente, le Danemark est considéré comme l'un des pays les plus avancés dans l'adoption des énergies renouvelables.",
  "Selon une étude récente, l'Ukraine est en train de devenir une destination touristique de plus en plus prisée en Europe.",
  "Selon une étude récente, la Lettonie est considérée comme l'un des pays les plus avancés dans le domaine de l'innovation technologique.",
  "Selon une étude récente, la Roumanie est en train de devenir un pôle majeur de l'industrie du jeu vidéo en Europe.",
  'Selon une étude récente, la Croatie est devenue une destination de choix pour les amateurs de tourisme durable.',
  "Selon une étude récente, la Grèce est en train de devenir un leader mondial dans le domaine de l'énergie solaire.",
  "Selon une étude récente, la Suisse est en train de devenir un centre majeur de l'innovation technologique en Europe.",
  'Selon une étude récente, la Slovaquie connaît une croissance significative dans le secteur des énergies renouvelables.',
  "Selon une étude récente, la Serbie est en train de devenir un pôle d'attraction pour les investissements étrangers.",
  "Selon une étude récente, l'Islande est en train de devenir un leader mondial de la géothermie.",
  'Selon une étude récente, le Groenland connaît une fonte des glaces plus rapide que prévu.',
  "Selon une étude récente, la Turquie connaît une augmentation significative de sa production d'énergie éolienne.",
  "Selon une étude récente, le Kazakhstan connaît une augmentation significative de sa production d'énergie solaire.",
  "Selon une étude récente, la Mongolie connaît une augmentation significative de sa production d'énergie éolienne.",
  "Selon une étude récente, le Japon connaît une augmentation significative de sa production d'énergie géothermique.",
  "Selon une étude récente, l'Inde connaît une augmentation significative du nombre de startups technologiques.",
  "Une découverte archéologique révèle l'existence d'une ancienne cité engloutie au large des côtes de la Thaïlande.",
  "Des chercheurs philippins annoncent la découverte d'une nouvelle espèce de fleur qui ne fleurit qu'une fois par siècle.",
  "Une équipe de scientifiques indonésiens découvre une nouvelle espèce de singe capable de peindre des œuvres d'art.",
  "Des archéologues découvrent une cité perdue datant de l'Empire Kushan au nord de l'Afghanistan.",
  'Des milliers de manifestants pro-démocratie se rassemblent à Hong Kong pour réclamer des réformes politiques.',
  'Israël annonce la construction de nouveaux logements dans les colonies en Cisjordanie.',
  "Les Émirats arabes unis annoncent un ambitieux plan de développement pour devenir le premier pays neutre en carbone d'ici 2050.",
  'Des manifestations massives éclatent à Moscou, dénonçant la corruption et réclamant des réformes politiques.',
  'Iakoutsk, en Russie, connaît une vague de chaleur sans précédent, avec des températures atteignant 38 degrés Celsius, provoquant la fonte accélérée du pergélisol.',
  "Des manifestations pro-indépendance éclatent au Tibet, réclamant l'autonomie et dénonçant la répression chinoise.",
  "Des mesures strictes de contrôle des médias sont mises en place à Pékin, restreignant la liberté d'expression et la diffusion d'informations critiques envers le gouvernement.",
  'Des manifestations éclatent au Maroc, réclamant des réformes politiques et une plus grande participation citoyenne.',
  'Des élections présidentielles sont prévues en Algérie, suscitant un vif débat sur la légitimité du processus électoral et la participation des différentes factions politiques.',
  "Des manifestations massives éclatent en Égypte, réclamant des réformes politiques et une plus grande liberté d'expression.",
  "Une nouvelle loi sur la protection de l'environnement est adoptée au Sénégal, suscitant des débats sur son efficacité et son application.",
  'Des affrontements violents éclatent dans le nord du Mali, mettant en péril les efforts de stabilité et de paix dans la région.',
  "Des manifestations éclatent en Côte d'Ivoire suite à des tensions politiques, mettant en péril la stabilité du pays.",
  "Des tensions politiques s'intensifient au Cameroun, suscitant des préoccupations quant à la stabilité du pays.",
  'Des attaques terroristes frappent le Niger, mettant en péril la sécurité et la stabilité du pays.',
  'Des manifestations éclatent au Soudan, réclamant des réformes politiques et économiques.',
  "Une nouvelle découverte archéologique en Éthiopie révèle des vestiges anciens d'une civilisation perdue depuis des siècles.",
  'Le Kenya accueille une conférence internationale sur le développement durable et les énergies renouvelables.',
  'La République du Congo lance un projet de reforestation massive pour lutter contre la déforestation et préserver la biodiversité.',
  "L'Angola lance un vaste programme d'investissement dans les énergies renouvelables pour réduire sa dépendance aux combustibles fossiles.",
  "L'Afrique du Sud remporte le titre de meilleure destination touristique de l'année, attirant des visiteurs du monde entier avec sa diversité culturelle, ses paysages magnifiques et sa faune emblématique.",
  "Une nouvelle espèce de lémurien découverte à Madagascar, suscitant l'enthousiasme des chercheurs et renforçant l'importance de la conservation de la biodiversité sur l'île.",
  "La Tanzanie annonce la découverte d'une cité perdue datant de l'ère des pharaons égyptiens, révélant des liens historiques inattendus entre les deux régions.",
  "La Zambie annonce une nouvelle politique économique qui stimulera la croissance et réduira le taux de chômage de moitié d'ici deux ans.",
  "La Tunisie annonce une réforme du système éducatif pour améliorer la qualité de l'enseignement et réduire le taux d'analphabétisme.",
  "Le gouvernement canadien annonce la création d'un nouveau programme de subventions pour les start-ups technologiques à Ottawa.",
  "Une équipe de chercheurs de l'Université de Vancouver affirme avoir découvert un moyen révolutionnaire de produire de l'énergie propre à partir de déchets organiques.",
  'Une entreprise basée à Los Angeles prétend avoir développé une voiture électrique révolutionnaire capable de parcourir 1000 kilomètres avec une seule charge.',
  'Une équipe de scientifiques basée à Miami affirme avoir découvert un traitement révolutionnaire pour inverser le processus de vieillissement chez les humains.',
  'Une équipe de chercheurs basée en Alaska prétend avoir découvert une nouvelle espèce de mammifère marin vivant dans les eaux glaciales de la région.',
  'Une équipe de chercheurs mexicains prétend avoir découvert une cité antique cachée dans la jungle de la péninsule du Yucatán.',
  'Des manifestations massives ont éclaté dans la capitale du Venezuela, Caracas, en raison de la crise économique et politique que traverse le pays.',
  "Des inondations dévastatrices ont frappé plusieurs régions du Honduras, causant d'importants dégâts matériels et des pertes humaines.",
  'Des manifestations massives ont éclaté dans plusieurs villes de Colombie, avec des revendications concernant les réformes économiques et sociales du gouvernement.',
  'Une élection présidentielle historique se déroule au Pérou, avec deux candidats en lice pour le poste de président.',
  "Des manifestations ont éclaté en Guyane française, avec des revendications concernant l'amélioration des infrastructures et des services publics.",
  "Une découverte archéologique majeure a été faite en Bolivie, révélant des vestiges anciens d'une civilisation perdue.",
  "Les incendies en cours dans la forêt amazonienne au Brésil menacent gravement l'écosystème et suscitent des préoccupations internationales.",
  "Une épidémie de dengue sévit actuellement à Rio de Janeiro, causant de nombreux cas de maladie et suscitant des mesures d'urgence de la part des autorités sanitaires.",
  "Une nouvelle vague de criminalité frappe la ville de Salvador, au Brésil, suscitant l'inquiétude des habitants et des autorités locales.",
  'Une grève générale paralyse actuellement la ville de Buenos Aires, en Argentine, entraînant des perturbations dans les transports et les services publics.',
  "Des scientifiques argentins découvrent une nouvelle espèce d'oiseau rare dans la région d'Ushuaïa, attirant l'attention des ornithologues du monde entier.",
  'Une vague de chaleur record frappe la ville de Sydney en Australie, entraînant des températures extrêmes et des préoccupations croissantes concernant les incendies de brousse.',
  "Une équipe de scientifiques australiens découvre une nouvelle espèce de kangourou unique dans la région de Perth, suscitant l'enthousiasme des biologistes du monde entier.",
  "Des chercheurs de l'Université de Darwin annoncent la découverte d'une nouvelle espèce de reptile venimeux dans la région, suscitant des préoccupations quant à la sécurité des habitants et des touristes.",
  "Des chercheurs néo-zélandais annoncent la découverte d'une nouvelle espèce d'oiseau endémique dans les forêts de Nouvelle-Zélande, suscitant l'excitation parmi les ornithologues du monde entier.",
  "Une équipe de chercheurs des Fidji affirme avoir découvert une nouvelle espèce de corail dans les récifs de l'archipel, suscitant l'intérêt des scientifiques du monde entier pour sa rareté et sa beauté.",
];

export const complexNews: {
  [enonce: string]: {
    actor: string;
    description: string;
    pourcentage: number;
    cout: number;
  }[];
} = {
  '<b>[Paris] </b>Une équipe de scientifiques affirme avoir découvert un nouveau traitement contre le cancer qui guérit 100% des patients.':
    [
      {
        actor: 'Dr. Thomas, oncologue',
        description:
          'Je suis au courant de cette étude, mais les résultats ne sont pas aussi prometteurs qu’ils le prétendent. Il y a encore beaucoup de tests à faire avant de valider ces résultats.',
        pourcentage: -7,
        cout: 2,
      },
      {
        actor: 'Mme Dupont, une patiente atteinte d’un cancer du sein',
        description:
          'J’ai participé à l’étude, mais le traitement n’a pas fonctionné pour moi. Il y a encore des progrès à faire',
        pourcentage: -5,
        cout: 3,
      },
      {
        actor: 'Le Pr. Martin, spécialiste en immunothérapie',
        description:
          ' Il y a effectivement de nouvelles pistes intéressantes dans la recherche contre le cancer, mais il faut rester prudent quant à l’efficacité de ce traitement.',
        pourcentage: -10,
        cout: 1,
      },
      {
        actor: 'Le Dr. Smith, pharmacologue',
        description:
          'Je ne suis pas sûr que ce traitement soit viable sur le long terme. Il pourrait y avoir des effets secondaires graves. ',
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'Mr. Dubois, un patient atteint d’un cancer du foie',
        description:
          'J’ai participé à l’étude et je suis d’ores et déjà guéri. Ce traitement va révolutionner la médecine ! ',
        pourcentage: +5,
        cout: 2,
      },
    ],
  '<b>[Rennes] </b>Les autorités ont découvert un réseau de trafiquants d’animaux exotiques dans la région.':
    [
      {
        actor: 'Un garde forestier',
        description:
          'J’ai vu plusieurs camions suspects se garer près de la zone protégée ces dernières semaines.',
        pourcentage: +15,
        cout: 6,
      },
      {
        actor: 'Un vétérinaire',
        description:
          'J’ai été contacté par des personnes cherchant à faire soigner des animaux exotiques ces derniers temps ',
        pourcentage: +10,
        cout: 1,
      },
      {
        actor: 'Un agent immobilier',
        description:
          'Je n’ai pas remarqué de ventes de biens immobiliers suspectes ces derniers temps.',
        pourcentage: -7,
        cout: 2,
      },
      {
        actor: 'Un habitant local',
        description:
          'Je n’ai pas l’impression que quelque chose ait changé dans le quartier, je n’ai rien entendu à ce propos ',
        pourcentage: -10,
        cout: 3,
      },
      {
        actor:
          'Un responsable gouvernemental en charge de la protection de la faune',
        description:
          'Nous avons effectivement découvert un réseau de trafiquants d’animaux exotiques dans la région et nous sommes en train d’enquêter. ',
        pourcentage: +25,
        cout: 5,
      },
    ],
  '<b>[Toulouse] </b>Selon un rapport récent, la consommation de vin rouge français réduit le risque de maladies cardiaques.':
    [
      {
        actor: 'Dr. Martin, cardiologue',
        description:
          "Des études ont montré une corrélation entre la consommation modérée de vin rouge et la diminution du risque de maladies cardiaques. Cependant, il est important de noter que d'autres facteurs, tels que l'alimentation globale et l'activité physique, jouent également un rôle important.",
        pourcentage: +8,
        cout: 3,
      },
      {
        actor: 'Mme. Dupont, chercheuse en nutrition',
        description:
          'Il y a effectivement des composés bénéfiques dans le vin rouge qui pourraient avoir des effets positifs sur la santé cardiovasculaire. Cependant, il est crucial de consommer avec modération et de tenir compte des autres facteurs de risque.',
        pourcentage: +7,
        cout: 2,
      },
      {
        actor: 'Pr. Durand, spécialiste des maladies cardiaques',
        description:
          'Les résultats des études sont intéressants, mais il faut rester prudent quant à la conclusion selon laquelle la consommation de vin rouge réduit directement le risque de maladies cardiaques. Il est préférable de consulter un professionnel de la santé pour des conseils personnalisés.',
        pourcentage: +5,
        cout: 1,
      },
      {
        actor: 'Dr. Smith, toxicologue',
        description:
          "La consommation excessive d'alcool, même sous forme de vin rouge, peut entraîner des problèmes de santé, y compris des maladies cardiaques. Il est essentiel de rappeler que la modération est la clé pour maintenir une bonne santé.",
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'M. Dubois, vigneron',
        description:
          'En tant que vigneron, je suis fier de la qualité de nos vins rouges français. Cependant, il est important de rappeler que la consommation de vin doit être appréciée avec modération pour profiter pleinement de ses arômes et éviter les effets néfastes sur la santé.',
        pourcentage: +4,
        cout: 1,
      },
      {
        actor: 'Mme. Leclerc, médecin généraliste',
        description:
          'Je recommande toujours à mes patients de se concentrer sur une alimentation équilibrée, riche en fruits, légumes et grains entiers, plutôt que de compter sur la consommation de vin rouge pour réduire le risque de maladies cardiaques.',
        pourcentage: -8,
        cout: 3,
      },
    ],
  "<b>[Lille] </b>Une entreprise locale affirme avoir inventé un moteur qui fonctionne à l'eau et qui réduit de moitié la consommation d'énergie.":
    [
      {
        actor: 'M. Dupont, ingénieur automobile',
        description:
          "Je suis au courant de cette invention, mais les tests réalisés jusqu'à présent ne montrent pas une réduction aussi significative de la consommation d'énergie. Il y a encore des défis techniques à relever.",
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Mme Martin, conductrice',
        description:
          "J'ai eu l'occasion de tester un véhicule équipé de ce moteur. Bien qu'il y ait une légère réduction de la consommation d'énergie, la performance globale du moteur reste inférieure à celle des moteurs traditionnels.",
        pourcentage: -5,
        cout: 2,
      },
      {
        actor: 'Le Pr. Dubois, spécialiste en énergie',
        description:
          "C'est une avancée intéressante dans le domaine des moteurs écologiques, mais il est important de réaliser davantage d'études pour valider les résultats annoncés.",
        pourcentage: -3,
        cout: 1,
      },
      {
        actor: "M. Garcia, représentant de l'entreprise",
        description:
          "Nous sommes fiers de notre innovation qui contribue à la préservation de l'environnement. Les premiers tests ont montré des résultats prometteurs, et nous continuons à travailler pour améliorer encore plus les performances.",
        pourcentage: +7,
        cout: 2,
      },
    ],
  "<b>[Amiens] </b>Un artiste local expose des œuvres d'art qui ont été achetées par des collectionneurs internationaux pour des sommes astronomiques.":
    [
      {
        actor: "Mme Lambert, critique d'art",
        description:
          "Cet artiste a un talent exceptionnel et ses œuvres méritent vraiment d'être reconnues à l'échelle internationale. Les collectionneurs ont bien fait de les acheter.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: "M. Dubois, collectionneur d'art",
        description:
          "J'ai eu la chance d'acquérir l'une des œuvres de cet artiste. Son travail est unique et captivant. Je suis convaincu que sa cote sur le marché de l'art continuera de grimper.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'M. Martin, galeriste',
        description:
          "L'exposition de cet artiste a suscité un vif intérêt parmi les collectionneurs internationaux. Ses œuvres se distinguent par leur originalité et leur grande valeur artistique.",
        pourcentage: +6,
        cout: 1,
      },
      {
        actor: "Mme Dupont, visiteuse de l'exposition",
        description:
          "Les œuvres de cet artiste sont vraiment uniques, mais les sommes astronomiques payées par les collectionneurs internationaux peuvent sembler exagérées. Il est important de prendre du recul et d'évaluer la valeur artistique réelle de ces œuvres.",
        pourcentage: -3,
        cout: 1,
      },
    ],
  '<b>[Rouen] </b>Un groupe de chercheurs annonce avoir découvert une nouvelle espèce animale qui pourrait aider à lutter contre le changement climatique.':
    [
      {
        actor: 'Le Pr. Durand, biologiste',
        description:
          "La découverte de cette nouvelle espèce animale est une avancée scientifique majeure. Ses caractéristiques uniques pourraient en effet contribuer à la préservation de l'environnement et à la lutte contre le changement climatique.",
        pourcentage: +12,
        cout: 1,
      },
      {
        actor: 'M. Martin, écologiste',
        description:
          "C'est une nouvelle encourageante dans la lutte contre le changement climatique. Il faudra cependant réaliser des études approfondies pour comprendre comment cette nouvelle espèce animale peut réellement aider.",
        pourcentage: +5,
        cout: 1,
      },
      {
        actor: 'Mme Dupont, militante environnementale',
        description:
          "Cette découverte ouvre de nouvelles perspectives passionnantes pour la préservation de la biodiversité et la lutte contre le changement climatique. Il est essentiel de préserver l'habitat de cette espèce pour maximiser son impact positif.",
        pourcentage: +8,
        cout: 2,
      },
      {
        actor: 'Le Dr. Smith, zoologiste',
        description:
          "La découverte d'une nouvelle espèce animale est toujours fascinante, mais il est important de mener des recherches approfondies pour comprendre pleinement son rôle dans l'écosystème et son potentiel pour lutter contre le changement climatique.",
        pourcentage: +3,
        cout: 1,
      },
    ],
  "<b>[Caen] </b>Des habitants signalent des bruits étranges la nuit provenant d'un parc local, les autorités enquêtent sur la cause.":
    [
      {
        actor: 'Mme Dubois, habitante du quartier',
        description:
          "J'ai moi-même entendu ces bruits étranges la nuit. Cela crée une certaine anxiété parmi les habitants du quartier. J'espère que les autorités trouveront rapidement la cause de ces bruits.",
        pourcentage: -2,
        cout: 1,
      },
      {
        actor: 'M. Martin, expert en phénomènes paranormaux',
        description:
          'Les bruits étranges signalés pourraient être liés à des phénomènes paranormaux. Il serait intéressant de mener des investigations approfondies pour comprendre ce qui se passe réellement.',
        pourcentage: +3,
        cout: 2,
      },
      {
        actor: 'Mme Dupont, représentante des autorités locales',
        description:
          'Nous prenons ces signalements au sérieux et avons lancé une enquête approfondie pour déterminer la cause des bruits étranges. Nous travaillons en collaboration avec des experts pour résoudre ce mystère.',
        pourcentage: +5,
        cout: 3,
      },
      {
        actor: 'M. Garcia, responsable du parc local',
        description:
          "Nous avons vérifié toutes les installations du parc et n'avons trouvé aucune explication rationnelle aux bruits signalés. Nous continuons à enquêter et explorer toutes les possibilités.",
        pourcentage: +2,
        cout: 1,
      },
    ],
  '<b>[Reims] </b>Une association locale organise un événement pour récolter des fonds pour les sans-abris, de nombreux artistes locaux y participent.':
    [
      {
        actor: "Mme Dupont, bénévole de l'association",
        description:
          "Cet événement est d'une grande importance pour aider les sans-abris de notre région. La participation des artistes locaux ajoute une dimension artistique unique à cette cause.",
        pourcentage: +12,
        cout: 1,
      },
      {
        actor: 'M. Martin, artiste participant',
        description:
          "En tant qu'artiste local, je suis ravi de pouvoir contribuer à cette noble cause. C'est une excellente initiative qui permet de sensibiliser le public tout en soutenant les personnes dans le besoin.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: "M. Dubois, sans-abri soutenu par l'association",
        description:
          "L'initiative de cette association a un impact réel sur la vie des sans-abris. Grâce aux fonds récoltés, j'ai pu bénéficier d'un soutien et d'une assistance qui m'ont permis de me reconstruire.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: "M. Garcia, représentant de l'association",
        description:
          'Nous sommes reconnaissants envers les artistes locaux qui ont généreusement offert leur temps et leur talent pour cet événement. Leur participation contribue grandement à la réussite de notre collecte de fonds.',
        pourcentage: +10,
        cout: 1,
      },
    ],
  "<b>[Strasbourg] </b>Des témoins signalent des apparitions d'ovnis dans le ciel de la ville, l'armée de l'air française n'a pas commenté l'affaire.":
    [
      {
        actor: 'M. Dubois, ufologue',
        description:
          "Ces apparitions d'ovnis sont très intrigantes et nécessitent une investigation approfondie. Il est important de recueillir davantage de témoignages et de preuves pour comprendre la nature de ces phénomènes.",
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'M. Martin, astronome',
        description:
          'Il est possible que ces observations soient liées à des phénomènes astronomiques méconnus. Une étude scientifique approfondie est nécessaire pour évaluer la véracité de ces témoignages.',
        pourcentage: -5,
        cout: 1,
      },
      {
        actor: 'Mme Dupont, témoin des apparitions',
        description:
          "J'ai personnellement observé ces ovnis dans le ciel de Strasbourg. Je suis convaincue qu'il s'agit de visiteurs extraterrestres. J'espère que les autorités prendront cette affaire au sérieux.",
        pourcentage: +15,
        cout: 1,
      },
      {
        actor: 'Le Pr. Garcia, spécialiste en phénomènes paranormaux',
        description:
          "Ces apparitions d'ovnis soulèvent des questions fascinantes sur la possibilité de vie extraterrestre. Une étude scientifique rigoureuse doit être menée pour démêler le vrai du faux.",
        pourcentage: +8,
        cout: 2,
      },
    ],
  "<b>[Brest] </b>Un groupe d'écologistes organise une manifestation pour dénoncer la pollution marine dans la région.":
    [
      {
        actor: 'M. Dupont, pêcheur local',
        description:
          'Cette manifestation est importante pour sensibiliser à la pollution marine qui menace notre écosystème. Il est crucial que des mesures concrètes soient prises pour préserver nos océans.',
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'Mme Martin, touriste',
        description:
          "J'ai été choquée par l'état de la plage et de la mer dans cette région. La manifestation est un moyen de faire entendre notre voix et de demander des actions immédiates pour lutter contre la pollution.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: 'Le Pr. Dubois, spécialiste en environnement marin',
        description:
          'La pollution marine est un problème urgent qui nécessite une attention immédiate. Cette manifestation contribue à mettre en lumière cette préoccupation et à encourager les décideurs à prendre des mesures pour préserver notre écosystème marin.',
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: "M. Garcia, membre de l'association écologiste",
        description:
          "Nous sommes déterminés à faire entendre notre voix et à sensibiliser la population à l'importance de la préservation de nos océans. Cette manifestation est une étape importante dans notre combat contre la pollution marine.",
        pourcentage: +5,
        cout: 1,
      },
    ],
  "<b>[Orléans] </b>Un incendie s'est déclaré dans une usine locale, les pompiers sont sur place pour maîtriser les flammes.":
    [
      {
        actor: "Mme Dupont, employée de l'usine",
        description:
          "C'était une situation effrayante. Heureusement, les pompiers sont rapidement intervenus pour éteindre l'incendie. Nous espérons que l'usine pourra reprendre ses activités bientôt.",
        pourcentage: -3,
        cout: 2,
      },
      {
        actor: 'M. Martin, représentant syndical',
        description:
          "Cet incendie souligne l'importance de la sécurité dans les usines. Il est nécessaire de renforcer les mesures de prévention et de réagir rapidement en cas d'incident.",
        pourcentage: -2,
        cout: 1,
      },
      {
        actor: "Le Maire d'Orléans",
        description:
          "Nous sommes reconnaissants envers les pompiers pour leur travail acharné afin de protéger notre communauté. Nous ferons tout notre possible pour soutenir l'usine et ses employés pendant cette période difficile.",
        pourcentage: +5,
        cout: 2,
      },
      {
        actor: 'M. Dubois, habitant du quartier',
        description:
          "Cet incendie a provoqué une importante fumée noire qui a généré une certaine inquiétude parmi les résidents. J'espère que des mesures seront prises pour éviter de tels incidents à l'avenir.",
        pourcentage: -4,
        cout: 1,
      },
    ],
  "<b>[Dijon] </b>Des archéologues découvrent des vestiges datant de l'époque romaine dans un parc local.":
    [
      {
        actor: 'M. Durand, archéologue en chef',
        description:
          "Cette découverte est d'une importance majeure pour comprendre l'histoire de la région. Les vestiges romains trouvés dans ce parc offrent de nouvelles perspectives sur l'occupation romaine à Dijon.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'Mme Leclerc, historienne',
        description:
          "Les vestiges romains découverts dans ce parc témoignent de l'influence de l'Empire romain dans la région. Cela confirme les informations historiques existantes sur la présence romaine à Dijon.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: 'M. Martin, conservateur de musée',
        description:
          "Nous envisageons d'exposer ces vestiges dans notre musée local pour permettre au public de les découvrir et d'en apprendre davantage sur l'histoire de la région à l'époque romaine.",
        pourcentage: +6,
        cout: 1,
      },
      {
        actor: 'M. Dubois, riverain du parc',
        description:
          "C'est une surprise de savoir que notre parc abrite des vestiges romains. J'espère que ces découvertes seront bien préservées et pourront être accessibles au public.",
        pourcentage: +4,
        cout: 1,
      },
    ],
  '<b>[Nantes] </b>Une équipe de chercheurs annonce avoir découvert une nouvelle espèce de plante qui pourrait être utilisée pour produire des médicaments.':
    [
      {
        actor: 'Dr. Dubois, botaniste',
        description:
          "Cette découverte est d'une importance capitale pour la recherche pharmaceutique. Les propriétés médicinales de cette nouvelle plante pourraient révolutionner le développement de nouveaux médicaments.",
        pourcentage: +12,
        cout: 1,
      },
      {
        actor: 'Mme Martin, pharmacienne',
        description:
          'Nous sommes enthousiasmés par cette découverte. Si les études cliniques confirment les propriétés thérapeutiques de cette plante, elle pourrait devenir une ressource précieuse dans la production de médicaments.',
        pourcentage: +9,
        cout: 2,
      },
      {
        actor: 'Le Pr. Dupont, spécialiste en phytochimie',
        description:
          'Il est encourageant de trouver de nouvelles espèces de plantes avec un potentiel médicinal. Cependant, il reste encore beaucoup de recherches à faire pour identifier les composés actifs et évaluer leur efficacité.',
        pourcentage: +5,
        cout: 3,
      },
      {
        actor: "M. Garcia, chercheur de l'équipe",
        description:
          'Notre équipe est fière de cette découverte prometteuse. Nous continuons à étudier les propriétés de cette plante et à explorer ses applications potentielles dans le domaine médical.',
        pourcentage: +7,
        cout: 1,
      },
    ],
  '<b>[Limoges] </b>Des habitants signalent des apparitions de fantômes dans un ancien cimetière, une entreprise locale propose des visites guidées pour Halloween.':
    [
      {
        actor: 'Mme Dupont, habitante de Limoges',
        description:
          "J'ai personnellement vécu une expérience étrange dans ce cimetière. Les visites guidées pour Halloween sont une excellente idée pour découvrir l'histoire mystérieuse de notre ville.",
        pourcentage: +6,
        cout: 2,
      },
      {
        actor: 'M. Martin, historien local',
        description:
          "Il y a des légendes urbaines qui circulent sur ce cimetière depuis longtemps. Les apparitions de fantômes peuvent être le fruit de l'imagination des habitants ou de phénomènes naturels.",
        pourcentage: -3,
        cout: 1,
      },
      {
        actor: "Mme Garcia, représentante de l'entreprise de visites guidées",
        description:
          'Nos visites guidées pour Halloween offrent une expérience unique et divertissante pour les amateurs de sensations fortes. Les apparitions de fantômes ajoutent une touche de mystère à cette activité.',
        pourcentage: +5,
        cout: 2,
      },
      {
        actor: 'M. Dubois, sceptique',
        description:
          "Les apparitions de fantômes dans ce cimetière sont probablement le résultat d'une combinaison de facteurs psychologiques et environnementaux. Il est peu probable qu'il y ait une véritable présence surnaturelle.",
        pourcentage: -2,
        cout: 1,
      },
    ],
  '<b>[Clermont-Ferrand] </b>Des témoins signalent des phénomènes étranges dans le ciel de la ville, les scientifiques locaux enquêtent sur le phénomène.':
    [
      {
        actor: 'M. Dubois, témoin oculaire',
        description:
          "J'ai observé ces phénomènes étranges dans le ciel de la ville. Ils étaient vraiment fascinants, mais je suis curieux de connaître leur origine.",
        pourcentage: +5,
        cout: 1,
      },
      {
        actor: 'M. Martin, scientifique',
        description:
          "Nous enquêtons sur ces phénomènes et tentons de les expliquer scientifiquement. Pour l'instant, nous n'avons pas de conclusion définitive, mais nous continuons à étudier les données recueillies.",
        pourcentage: -3,
        cout: 2,
      },
      {
        actor: 'Mme Dupont, résidente',
        description:
          "Les phénomènes étranges dans le ciel ont créé une certaine agitation parmi les habitants de la ville. J'espère que les scientifiques pourront nous apporter des réponses rassurantes.",
        pourcentage: -2,
        cout: 1,
      },
      {
        actor: 'M. Garcia, ufologue',
        description:
          "Ces phénomènes pourraient être liés à des activités extraterrestres. Nous devons garder l'esprit ouvert et explorer toutes les possibilités.",
        pourcentage: +4,
        cout: 1,
      },
    ],
  '<b>[Lyon] </b>Une entreprise locale annonce avoir créé une nouvelle application mobile pour faciliter la vie des habitants de la ville.':
    [
      {
        actor: "Mme Durand, utilisatrice de l'application",
        description:
          "Cette nouvelle application est vraiment pratique et simplifie de nombreuses tâches du quotidien. Je l'utilise régulièrement et je ne peux plus m'en passer.",
        pourcentage: +12,
        cout: 1,
      },
      {
        actor: "M. Dupuis, développeur d'applications",
        description:
          "En tant que professionnel du développement d'applications, je suis impressionné par les fonctionnalités offertes par cette nouvelle application. C'est un grand pas en avant pour la technologie mobile.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: 'Le Pr. Martin, spécialiste en informatique',
        description:
          'Cette application apporte certainement des avantages aux habitants de la ville, mais il est important de garantir la sécurité des données personnelles des utilisateurs.',
        pourcentage: -4,
        cout: 1,
      },
      {
        actor: "M. Garcia, fondateur de l'entreprise",
        description:
          'Notre objectif était de simplifier la vie des habitants de Lyon grâce à la technologie. Cette nouvelle application est le fruit de nombreuses heures de travail et nous sommes ravis de voir les retours positifs des utilisateurs.',
        pourcentage: +10,
        cout: 2,
      },
    ],
  "<b>[Bordeaux] </b>Des habitants signalent des odeurs étranges provenant d'une usine locale, les autorités enquêtent sur la cause.":
    [
      {
        actor: 'Mme Dupont, résidente locale',
        description:
          "Les odeurs provenant de l'usine sont de plus en plus préoccupantes. Elles ont un impact sur notre qualité de vie et doivent être résolues rapidement.",
        pourcentage: -8,
        cout: 2,
      },
      {
        actor: "M. Martin, représentant de l'usine",
        description:
          'Nous sommes conscients des préoccupations des habitants et nous travaillons en étroite collaboration avec les autorités pour identifier la source des odeurs et les résoudre. La sécurité et le bien-être de la communauté sont notre priorité.',
        pourcentage: -3,
        cout: 1,
      },
      {
        actor: 'Mme Lambert, experte en environnement',
        description:
          "Les odeurs étranges provenant de l'usine pourraient être le signe d'une émission de substances nocives. Il est essentiel de mener une enquête approfondie pour évaluer les impacts sur la santé et l'environnement.",
        pourcentage: -6,
        cout: 2,
      },
      {
        actor: 'M. Dubois, maire de Bordeaux',
        description:
          'Nous prenons cette situation au sérieux et avons mobilisé toutes les ressources nécessaires pour enquêter sur les odeurs. La transparence et la communication avec les habitants sont primordiales dans ce processus.',
        pourcentage: -2,
        cout: 1,
      },
      {
        actor: 'M. Garcia, représentant des autorités sanitaires',
        description:
          "Nous effectuons des analyses de l'air et des émissions de l'usine pour déterminer la nature des odeurs et leur impact sur la santé publique. Les résultats guideront les mesures nécessaires pour garantir la sécurité de la population.",
        pourcentage: -4,
        cout: 1,
      },
    ],
  '<b>[Bayonne] </b>Un groupe de surfeurs locaux organise une compétition pour promouvoir la pratique du surf dans la région.':
    [
      {
        actor: 'M. Leblanc, champion de surf',
        description:
          "Cette compétition est une excellente initiative pour encourager les surfeurs locaux et promouvoir notre magnifique région. J'espère que de nombreux passionnés de surf participeront et montreront leurs meilleures performances.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'M. Dupuis, surfeur débutant',
        description:
          "Je suis ravi de cette compétition qui me donne l'opportunité de rencontrer d'autres passionnés de surf. Même si je ne suis pas encore très expérimenté, je vais profiter de cette occasion pour m'améliorer et prendre du plaisir dans les vagues.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: 'Mme Martin, habitante de Bayonne',
        description:
          "Le surf est un élément essentiel de notre culture ici à Bayonne, et cette compétition ne fait que renforcer notre attachement à ce sport. J'espère que cela attirera l'attention sur notre magnifique littoral et encouragera encore plus de personnes à se mettre au surf.",
        pourcentage: +12,
        cout: 1,
      },
      {
        actor: 'M. Dubois, restaurateur',
        description:
          'Cette compétition de surf va certainement attirer de nombreux visiteurs dans la région, et cela signifie également plus de clients pour les restaurants locaux comme le mien. Je suis prêt à offrir des repas spéciaux et des réductions pour les participants et les spectateurs.',
        pourcentage: +5,
        cout: 2,
      },
      {
        actor: 'Mme Lambert, surfeuse retraitée',
        description:
          'Je suis ravie de voir une compétition de surf organisée dans notre belle région. Même si je ne participe plus activement, je serai là pour soutenir les surfeurs et partager mes expériences passées avec les passionnés.',
        pourcentage: +6,
        cout: 1,
      },
    ],
  '<b>[Montpellier] </b>Une équipe de chercheurs annonce avoir découvert un traitement efficace contre une maladie rare.':
    [
      {
        actor: 'Dr. Thompson, médecin spécialiste',
        description:
          'Je suis impressionné par les résultats de cette équipe de chercheurs. Leur découverte représente un véritable espoir pour les patients atteints de cette maladie rare.',
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Mme Dubois, patiente guérie',
        description:
          "Ce traitement a été une véritable révolution dans ma vie. J'étais désespérée, mais grâce à cette découverte, je suis maintenant en rémission. Je ne pourrai jamais assez remercier les chercheurs.",
        pourcentage: +20,
        cout: 1,
      },
      {
        actor: 'Le Pr. Lefevre, spécialiste en maladies rares',
        description:
          "C'est une avancée majeure dans la lutte contre cette maladie rare. Les résultats sont très prometteurs et ouvrent de nouvelles perspectives pour les patients.",
        pourcentage: +12,
        cout: 1,
      },
      {
        actor: 'Dr. Garcia, critique médical',
        description:
          "Bien que cette découverte soit encourageante, il est important de rappeler qu'il faudra encore du temps avant qu'elle ne soit largement accessible aux patients. Des essais supplémentaires sont nécessaires.",
        pourcentage: +8,
        cout: 2,
      },
    ],
  "<b>[Marseille] </b>Des habitants signalent des nuisances sonores provenant d'un bar local, les autorités ont reçu de nombreuses plaintes.":
    [
      {
        actor: 'Mme Dubois, résidente du quartier',
        description:
          'Les nuisances sonores provenant de ce bar sont insupportables. Les autorités doivent prendre des mesures strictes pour mettre fin à ce problème qui perturbe la tranquillité du quartier.',
        pourcentage: -15,
        cout: 3,
      },
      {
        actor: 'M. Lefebvre, propriétaire du bar',
        description:
          'Nous sommes conscients des plaintes des habitants et nous prenons des mesures pour réduire les nuisances sonores. Nous avons engagé un expert pour trouver des solutions techniques afin de respecter les normes de bruit.',
        pourcentage: -5,
        cout: 2,
      },
      {
        actor: 'M. Garcia, amateur de musique',
        description:
          "Ce bar est l'un des rares endroits où l'on peut profiter de concerts en direct. Les nuisances sonores sont un prix acceptable à payer pour l'ambiance unique qu'il offre.",
        pourcentage: +10,
        cout: 1,
      },
      {
        actor: 'Mme Martin, représentante des autorités',
        description:
          'Nous prenons les plaintes des habitants au sérieux et nous travaillons en collaboration avec le propriétaire du bar pour trouver des solutions qui permettent de concilier les intérêts des résidents et des amateurs de musique.',
        pourcentage: -2,
        cout: 1,
      },
    ],
  "<b>[Nice] </b>Un groupe d'artistes locaux organise une exposition pour promouvoir la culture provençale.":
    [
      {
        actor: "M. Leclerc, visiteur de l'exposition",
        description:
          "Cette exposition est une véritable célébration de la culture provençale. Les artistes ont réussi à capturer l'essence de la région dans leurs œuvres. C'est un événement à ne pas manquer !",
        pourcentage: +18,
        cout: 1,
      },
      {
        actor: "Mme Dubois, critique d'art",
        description:
          "Bien que l'intention soit louable, cette exposition manque de diversité artistique. Elle ne représente pas pleinement la richesse de la culture provençale. Il aurait été préférable d'inclure des artistes d'autres horizons.",
        pourcentage: -38,
        cout: 2,
      },
      {
        actor: "M. Martinet, organisateur de l'exposition",
        description:
          "Nous sommes ravis d'organiser cette exposition qui met en lumière les talents locaux et contribue à la préservation de notre patrimoine culturel. C'est un honneur de promouvoir la culture provençale à travers l'art.",
        pourcentage: +15,
        cout: 1,
      },
      {
        actor: 'Mme Rousseau, habitante de Nice',
        description:
          "Cette exposition est une véritable bouffée d'air frais pour la ville. Elle apporte une ambiance joyeuse et colorée qui reflète parfaitement l'esprit provençal. Bravo aux artistes pour leur talent !",
        pourcentage: +10,
        cout: 1,
      },
    ],
  "<b>[Le Mans] </b>Le Mans est devenu la première ville en France à établir une colonie sur Mars, marquant ainsi une avancée significative dans l'exploration spatiale.":
    [
      {
        actor: 'Sophie, habitante du Mans',
        description:
          "C'est incroyable ! Le Mans est vraiment en avance sur son temps en établissant une colonie sur Mars. C'est une fierté pour notre ville et une réalisation remarquable dans l'exploration spatiale.",
        pourcentage: +50,
        cout: 3,
      },
      {
        actor: 'Alexandre, expert en astronomie',
        description:
          "Malheureusement, cette information est purement fictive. À ce jour, aucune colonie humaine n'a été établie sur Mars. Les projets d'exploration martienne sont encore au stade de la planification et de la recherche.",
        pourcentage: -50,
        cout: 3,
      },
      {
        actor: 'Sophie, rêveuse',
        description:
          'Imaginer une colonie du Mans sur Mars est captivant. Cependant, il est important de distinguer la réalité de la fiction. Les voyages habités vers Mars sont des projets ambitieux qui nécessitent encore de nombreuses avancées technologiques.',
        pourcentage: -30,
        cout: 2,
      },
      {
        actor: 'Luc, fan de science-fiction',
        description:
          "Une colonie du Mans sur Mars serait une véritable aventure interplanétaire ! Pouvoir explorer et coloniser d'autres mondes est un rêve pour l'humanité, mais pour l'instant, il reste dans le domaine de la fiction.",
        pourcentage: +40,
        cout: 2,
      },
      {
        actor: 'Élodie, sceptique',
        description:
          "La création d'une colonie du Mans sur Mars semble trop fantastique pour être vraie. Il est important de ne pas confondre les réalisations scientifiques et les idées de science-fiction.",
        pourcentage: -20,
        cout: 1,
      },
      {
        actor: 'Pierre, réaliste',
        description:
          'Il est important de prendre cette information avec prudence. La colonisation de Mars est un projet complexe qui nécessite des ressources, une planification minutieuse et des avancées technologiques considérables.',
        pourcentage: -40,
        cout: 1,
      },
    ],
  "Selon une étude récente, l'Allemagne connaît une augmentation significative du nombre de véhicules électriques sur ses routes.":
    [
      {
        actor: 'M. Müller, ingénieur automobile',
        description:
          "L'Allemagne a fait d'importants progrès dans la promotion des véhicules électriques, notamment grâce à des incitations financières et à un réseau de bornes de recharge en expansion. Cependant, il reste encore du chemin à parcourir pour atteindre une adoption massive.",
        pourcentage: +12,
        cout: 3,
      },
      {
        actor: 'Mme. Schmidt, propriétaire de véhicule électrique',
        description:
          "En tant que conductrice d'une voiture électrique, je constate effectivement une augmentation du nombre de véhicules électriques sur les routes allemandes. Cela s'explique par une prise de conscience croissante de l'impact environnemental et des avantages économiques des véhicules électriques.",
        pourcentage: +9,
        cout: 2,
      },
      {
        actor: 'Pr. Wagner, spécialiste en mobilité durable',
        description:
          'Il est encourageant de constater une augmentation progressive du nombre de véhicules électriques en Allemagne. Cependant, il est important de noter que la transition complète vers une mobilité électrique nécessitera des investissements importants dans les infrastructures et des mesures incitatives supplémentaires.',
        pourcentage: +7,
        cout: 1,
      },
      {
        actor: 'M. Schneider, concessionnaire automobile',
        description:
          'Bien que la demande de véhicules électriques ait augmenté, les voitures conventionnelles dominent toujours le marché automobile en Allemagne. Les infrastructures de recharge et les coûts élevés des véhicules électriques sont des défis à surmonter pour une adoption plus large.',
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'M. Fischer, chauffeur de taxi',
        description:
          "Dans le secteur des taxis, nous constatons une augmentation du nombre de véhicules électriques utilisés. Les avantages en termes de coûts d'exploitation et d'impact environnemental sont devenus des incitations importantes pour les conducteurs de taxis.",
        pourcentage: +6,
        cout: 1,
      },
      {
        actor: 'Mme. Keller, responsable gouvernementale',
        description:
          "Le gouvernement allemand s'est engagé à promouvoir la mobilité électrique et a mis en place des politiques et des subventions pour stimuler l'adoption des véhicules électriques. Cependant, des efforts supplémentaires sont nécessaires pour atteindre les objectifs fixés.",
        pourcentage: +10,
        cout: 3,
      },
    ],
  "Selon une étude récente, l'Angleterre connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur technologique.":
    [
      {
        actor: 'M. Johnson, investisseur en capital-risque',
        description:
          "L'Angleterre est en effet témoin d'une vague d'entrepreneurs talentueux dans le secteur technologique, en particulier parmi les jeunes. Les startups technologiques britanniques sont de plus en plus innovantes et attirent des investissements considérables.",
        pourcentage: +14,
        cout: 3,
      },
      {
        actor: "Mme. Patel, fondatrice d'une startup technologique",
        description:
          "En tant qu'entrepreneure technologique, je peux confirmer l'émergence de nombreux jeunes talents dans le secteur en Angleterre. La disponibilité de ressources et de programmes de soutien pour les startups technologiques a favorisé cette tendance.",
        pourcentage: +11,
        cout: 2,
      },
      {
        actor: 'Dr. Wilson, économiste',
        description:
          'Il y a en effet une augmentation du nombre de jeunes entrepreneurs dans le secteur technologique en Angleterre. Cependant, il est important de noter que la concurrence est également féroce, et tous ne connaissent pas le même niveau de succès.',
        pourcentage: +6,
        cout: 1,
      },
      {
        actor:
          "M. Thompson, propriétaire d'une petite entreprise traditionnelle",
        description:
          "Bien que le secteur technologique connaisse une croissance, il ne faut pas négliger l'importance des petites entreprises traditionnelles qui continuent de jouer un rôle essentiel dans l'économie anglaise.",
        pourcentage: -12,
        cout: 2,
      },
      {
        actor: 'M. Collins, étudiant en informatique',
        description:
          "En tant qu'étudiant en informatique, je vois de plus en plus de mes camarades se lancer dans l'entrepreneuriat technologique en Angleterre. Les opportunités et les avantages offerts par l'industrie attirent de nombreux jeunes talents.",
        pourcentage: +9,
        cout: 1,
      },
      {
        actor: 'Mme. Green, représentante gouvernementale',
        description:
          "Le gouvernement britannique a mis en place des initiatives visant à encourager l'entrepreneuriat technologique chez les jeunes. Ces efforts portent leurs fruits, mais des mesures supplémentaires sont nécessaires pour soutenir davantage cette tendance.",
        pourcentage: +8,
        cout: 3,
      },
    ],
  "Selon un rapport récent, l'Espagne enregistre une augmentation du nombre de touristes étrangers.":
    [
      {
        actor: "M. Rodríguez, directeur d'un office de tourisme",
        description:
          "L'Espagne connaît effectivement une hausse du nombre de touristes étrangers, notamment grâce à ses attractions culturelles, ses plages et son climat favorable. Cependant, il est important de diversifier les offres touristiques pour attirer un public plus large.",
        pourcentage: +13,
        cout: 3,
      },
      {
        actor: "Mme. López, propriétaire d'un hôtel",
        description:
          "En tant qu'hôtelière, je constate une augmentation significative du nombre de touristes étrangers qui choisissent l'Espagne comme destination. Cela a un impact positif sur notre secteur, en créant des emplois et stimulant l'économie locale.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'Pr. García, spécialiste en études touristiques',
        description:
          "Les chiffres indiquent en effet une augmentation du tourisme étranger en Espagne. Cependant, il est important de surveiller attentivement les effets de cette croissance sur l'environnement, la gestion des déchets et les infrastructures touristiques.",
        pourcentage: +7,
        cout: 1,
      },
      {
        actor: 'M. Martínez, commerçant local',
        description:
          "Bien que le tourisme étranger puisse être bénéfique pour certaines régions, il peut également causer une hausse des prix et une dépendance excessive à l'égard du secteur touristique, ce qui peut être préjudiciable pour les commerces locaux.",
        pourcentage: -9,
        cout: 2,
      },
      {
        actor: 'M. Fernández, guide touristique',
        description:
          "En tant que guide touristique, je suis ravi de voir davantage de visiteurs étrangers découvrir les richesses culturelles de l'Espagne. Cela ouvre de nouvelles opportunités pour promouvoir notre patrimoine et partager notre histoire.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: 'Mme. Sánchez, responsable gouvernementale',
        description:
          "Le gouvernement espagnol a mis en place des mesures pour encourager le tourisme étranger, reconnaissant son importance pour l'économie. Cependant, nous devons également veiller à préserver nos ressources naturelles et culturelles pour un tourisme durable.",
        pourcentage: +11,
        cout: 3,
      },
    ],
  "Selon une étude récente, l'Italie connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la gastronomie.":
    [
      {
        actor: 'M. Rossi, chef étoilé',
        description:
          "L'Italie est en effet témoin d'une émergence de jeunes entrepreneurs talentueux dans le secteur de la gastronomie. Ils apportent de nouvelles idées et créent des concepts novateurs qui contribuent à la diversité culinaire du pays.",
        pourcentage: +15,
        cout: 3,
      },
      {
        actor: "Mme. Bianchi, propriétaire d'un restaurant",
        description:
          "En tant que restauratrice, je constate une augmentation notable du nombre de jeunes entrepreneurs qui se lancent dans le secteur de la gastronomie en Italie. Ils apportent de l'énergie et de la créativité, revitalisant la scène culinaire du pays.",
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'Pr. Ferrari, expert en cuisine italienne',
        description:
          "Il est indéniable que l'Italie connaît une montée en puissance de jeunes entrepreneurs dans le secteur de la gastronomie. Cependant, il est essentiel de promouvoir la formation et le soutien pour garantir la qualité et la durabilité de ces entreprises.",
        pourcentage: +9,
        cout: 1,
      },
      {
        actor: 'M. Esposito, producteur de produits alimentaires traditionnels',
        description:
          "Bien que l'émergence de jeunes entrepreneurs soit positive, il est important de ne pas négliger l'importance des produits alimentaires traditionnels et des artisans qui sont au cœur de la gastronomie italienne depuis des générations.",
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'M. Russo, critique gastronomique',
        description:
          "L'arrivée de jeunes entrepreneurs dans le secteur de la gastronomie apporte de nouvelles perspectives et dynamise la scène culinaire italienne. Leur passion et leur engagement sont des facteurs clés de leur succès.",
        pourcentage: +7,
        cout: 1,
      },
      {
        actor: 'Mme. Conti, responsable gouvernementale',
        description:
          "Le gouvernement italien soutient activement l'entrepreneuriat dans le secteur de la gastronomie, notamment chez les jeunes. Des programmes d'aide et des initiatives sont mis en place pour favoriser leur succès et promouvoir la cuisine italienne.",
        pourcentage: +11,
        cout: 3,
      },
    ],
  'Selon un rapport récent, le Portugal connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur du tourisme durable.':
    [
      {
        actor: "M. Silva, propriétaire d'une agence de voyages écologiques",
        description:
          "Le Portugal est en effet témoin d'une montée en puissance de jeunes entrepreneurs dans le secteur du tourisme durable. Ils s'engagent à promouvoir des pratiques respectueuses de l'environnement et à offrir des expériences authentiques aux visiteurs.",
        pourcentage: +16,
        cout: 3,
      },
      {
        actor: "Mme. Santos, gérante d'un éco-hôtel",
        description:
          "En tant que responsable d'un éco-hôtel, je constate une augmentation significative du nombre de jeunes entrepreneurs qui se lancent dans le tourisme durable au Portugal. Le pays offre de superbes opportunités pour développer des projets respectueux de l'environnement.",
        pourcentage: +13,
        cout: 2,
      },
      {
        actor: 'Pr. Fernandes, spécialiste en tourisme durable',
        description:
          "Il est indéniable que le Portugal attire de plus en plus de jeunes entrepreneurs dans le secteur du tourisme durable. Cependant, il est essentiel de mettre en place des réglementations claires pour garantir l'authenticité et la durabilité de ces initiatives.",
        pourcentage: +10,
        cout: 1,
      },
      {
        actor: "M. Gonçalves, propriétaire d'un restaurant bio",
        description:
          "Le tourisme durable connaît une croissance positive au Portugal, mais il est important de ne pas négliger l'importance de la gastronomie traditionnelle et des produits locaux dans l'expérience touristique globale.",
        pourcentage: -8,
        cout: 2,
      },
      {
        actor: "M. Sousa, guide touristique spécialisé dans l'écotourisme",
        description:
          "L'essor des jeunes entrepreneurs dans le tourisme durable offre de nouvelles opportunités pour promouvoir les richesses naturelles du Portugal. Les voyageurs sont de plus en plus intéressés par des expériences respectueuses de l'environnement.",
        pourcentage: +9,
        cout: 1,
      },
      {
        actor: 'Mme. Costa, responsable gouvernementale',
        description:
          "Le gouvernement portugais soutient activement les initiatives de tourisme durable et encourage les jeunes entrepreneurs à investir dans ce secteur. Des incitations financières et des programmes d'accompagnement sont disponibles pour soutenir leur développement.",
        pourcentage: +12,
        cout: 3,
      },
    ],
  'Selon une étude récente, la Pologne connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la technologie.':
    [
      {
        actor: "M. Kowalski, fondateur d'une start-up technologique",
        description:
          "La Pologne est témoin d'une montée en puissance de jeunes entrepreneurs dans le secteur de la technologie. Ils apportent de nouvelles idées innovantes et contribuent à la croissance de l'écosystème technologique du pays.",
        pourcentage: +14,
        cout: 3,
      },
      {
        actor: 'Mme. Nowak, investisseuse en capital-risque',
        description:
          "En tant qu'investisseuse, je constate une augmentation significative du nombre de jeunes entrepreneurs qui se lancent dans le secteur de la technologie en Pologne. Cela crée des opportunités d'investissement et stimule l'innovation dans le pays.",
        pourcentage: +11,
        cout: 2,
      },
      {
        actor: 'Pr. Wójcik, spécialiste en technologie et entrepreneuriat',
        description:
          "Il est indéniable que la Pologne attire de plus en plus de jeunes entrepreneurs talentueux dans le secteur de la technologie. Cependant, il est important de soutenir leur développement en leur offrant des ressources et un environnement propice à l'innovation.",
        pourcentage: +9,
        cout: 1,
      },
      {
        actor: 'M. Lewandowski, entrepreneur expérimenté',
        description:
          "Le secteur de la technologie en Pologne est en plein essor, mais il est essentiel de ne pas négliger d'autres secteurs d'activité qui contribuent également à l'économie et à la création d'emplois.",
        pourcentage: -8,
        cout: 2,
      },
      {
        actor: 'M. Jankowski, développeur de logiciels',
        description:
          "L'émergence de jeunes entrepreneurs dans le secteur de la technologie en Pologne stimule l'innovation et crée des opportunités d'emploi pour les professionnels de la tech. C'est une période passionnante pour l'industrie.",
        pourcentage: +7,
        cout: 1,
      },
      {
        actor: 'Mme. Wiśniewska, responsable gouvernementale',
        description:
          "Le gouvernement polonais soutient activement les jeunes entrepreneurs dans le secteur de la technologie, en mettant en place des programmes d'incubation, des subventions et des partenariats avec des entreprises technologiques établies.",
        pourcentage: +13,
        cout: 3,
      },
    ],
  "Selon une étude récente, les Pays-Bas connaissent une augmentation du nombre de jeunes entrepreneurs dans le secteur de l'énergie renouvelable.":
    [
      {
        actor: "M. Van der Berg, fondateur d'une entreprise solaire",
        description:
          "Les Pays-Bas sont effectivement témoins d'une montée en puissance de jeunes entrepreneurs dans le secteur de l'énergie renouvelable. Ils développent des projets novateurs pour promouvoir une transition énergétique durable.",
        pourcentage: +17,
        cout: 3,
      },
      {
        actor: 'Mme. De Vries, consultante en énergie durable',
        description:
          "En tant que consultante, je constate une augmentation significative du nombre de jeunes entrepreneurs qui se lancent dans le secteur de l'énergie renouvelable aux Pays-Bas. Ils contribuent à la réduction de notre empreinte carbone et à la promotion d'une énergie propre.",
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'Pr. Van Dijk, expert en énergies renouvelables',
        description:
          "Il est indéniable que les Pays-Bas attirent de plus en plus de jeunes entrepreneurs dans le secteur de l'énergie renouvelable. Cependant, il est essentiel de continuer à investir dans les infrastructures et les politiques favorables à cette transition énergétique.",
        pourcentage: +10,
        cout: 1,
      },
      {
        actor: 'M. Bakker, entrepreneur dans le secteur pétrolier',
        description:
          "L'énergie renouvelable connaît une croissance positive aux Pays-Bas, mais il est important de ne pas négliger le secteur pétrolier et gazier, qui continue de jouer un rôle essentiel dans notre économie.",
        pourcentage: -9,
        cout: 2,
      },
      {
        actor: 'Mme. Jansen, chercheuse en énergie verte',
        description:
          "L'émergence de jeunes entrepreneurs dans le secteur de l'énergie renouvelable aux Pays-Bas est encourageante. Leurs idées innovantes contribuent à accélérer notre transition vers une société plus durable.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: 'M. Van Beek, responsable gouvernemental',
        description:
          "Le gouvernement néerlandais soutient activement les initiatives d'énergie renouvelable et encourage les jeunes entrepreneurs à investir dans ce secteur. Des subventions et des programmes d'accompagnement sont disponibles pour favoriser leur succès.",
        pourcentage: +14,
        cout: 3,
      },
    ],
  'Selon une étude récente, la Suède connaît une augmentation du nombre de jeunes entrepreneurs dans le secteur de la mobilité durable.':
    [
      {
        actor: "M. Eriksson, fondateur d'une start-up de véhicules électriques",
        description:
          "La Suède est effectivement témoin d'une montée en puissance de jeunes entrepreneurs dans le secteur de la mobilité durable. Ils développent des solutions novatrices pour promouvoir une mobilité plus respectueuse de l'environnement.",
        pourcentage: +15,
        cout: 3,
      },
      {
        actor: 'Mme. Andersson, consultante en transport durable',
        description:
          'En tant que consultante, je constate une augmentation significative du nombre de jeunes entrepreneurs qui se lancent dans le secteur de la mobilité durable en Suède. Ils contribuent à réduire les émissions de carbone et à améliorer notre système de transport.',
        pourcentage: +11,
        cout: 2,
      },
      {
        actor: 'Pr. Lindgren, spécialiste en mobilité durable',
        description:
          'Il est indéniable que la Suède attire de plus en plus de jeunes entrepreneurs talentueux dans le secteur de la mobilité durable. Cependant, il est essentiel de maintenir des politiques et des investissements favorables pour soutenir leur croissance et leur impact positif.',
        pourcentage: +9,
        cout: 1,
      },
      {
        actor: 'M. Svensson, entrepreneur dans le secteur pétrolier',
        description:
          'La mobilité durable connaît une croissance positive en Suède, mais il est important de ne pas négliger le secteur pétrolier et gazier, qui joue toujours un rôle crucial dans notre économie et notre approvisionnement énergétique.',
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'Mme. Nilsson, chercheuse en transports écologiques',
        description:
          "L'émergence de jeunes entrepreneurs dans le secteur de la mobilité durable en Suède est encourageante. Leurs innovations technologiques et leur engagement contribuent à une transition vers des modes de transport plus propres et plus efficaces.",
        pourcentage: +8,
        cout: 1,
      },
      {
        actor: 'M. Andersson, responsable gouvernemental',
        description:
          'Le gouvernement suédois soutient activement les initiatives de mobilité durable et encourage les jeunes entrepreneurs à investir dans ce secteur. Des subventions, des partenariats et des mesures incitatives sont disponibles pour soutenir leur succès.',
        pourcentage: +12,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Finlande est en tête des pays les plus avancés en matière de technologie de l'information et de la communication (TIC).":
    [
      {
        actor: 'M. Virtanen, expert en TIC',
        description:
          "La Finlande est effectivement en pointe dans le domaine de la technologie de l'information et de la communication. Le pays bénéficie d'une infrastructure solide, d'une main-d'œuvre qualifiée et d'un écosystème dynamique pour l'innovation technologique.",
        pourcentage: +18,
        cout: 3,
      },
      {
        actor: 'Mme. Järvinen, entrepreneure technologique',
        description:
          "En tant qu'entrepreneure dans le domaine des TIC, je peux confirmer que la Finlande est à la pointe de l'innovation technologique. Les start-ups et les initiatives émergentes contribuent à l'évolution rapide de ce secteur dans le pays.",
        pourcentage: +14,
        cout: 2,
      },
      {
        actor: 'Pr. Lehtonen, spécialiste en TIC',
        description:
          "Il est indéniable que la Finlande est un leader mondial en matière de technologie de l'information et de la communication. Cependant, il est essentiel de continuer à investir dans la recherche, le développement et l'éducation pour maintenir cette position.",
        pourcentage: +12,
        cout: 1,
      },
      {
        actor: 'M. Niemi, entrepreneur dans un autre secteur',
        description:
          "Bien que la Finlande soit reconnue pour son avance dans les TIC, il est important de ne pas négliger les autres secteurs économiques qui contribuent également à la croissance et à l'innovation du pays.",
        pourcentage: -9,
        cout: 2,
      },
      {
        actor: 'Mme. Koskinen, chercheuse en technologies émergentes',
        description:
          "L'excellence de la Finlande en matière de TIC est indéniable. Les investissements dans la recherche, les compétences technologiques et la collaboration entre les entreprises et les universités font du pays un véritable pôle d'innovation technologique.",
        pourcentage: +15,
        cout: 1,
      },
      {
        actor: 'M. Mäkinen, responsable gouvernemental',
        description:
          "Le gouvernement finlandais soutient activement le secteur des TIC et encourage l'innovation technologique. Des programmes d'incitation, des financements et des partenariats sont mis en place pour soutenir les entreprises et les start-ups dans ce domaine.",
        pourcentage: +16,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Norvège est considérée comme l'un des pays les plus avancés dans la transition vers une économie verte.":
    [
      {
        actor: 'Mme. Olsen, experte en énergies renouvelables',
        description:
          'La Norvège est effectivement en avance dans la transition vers une économie verte. Le pays a adopté des politiques et des mesures incitatives qui favorisent les énergies renouvelables et la durabilité environnementale.',
        pourcentage: +20,
        cout: 3,
      },
      {
        actor:
          'M. Hansen, entrepreneur dans le secteur des technologies vertes',
        description:
          "En tant qu'entrepreneur dans les technologies vertes, je peux confirmer que la Norvège est à l'avant-garde de la transition vers une économie verte. Les initiatives innovantes et les investissements dans les énergies propres sont nombreux dans le pays.",
        pourcentage: +16,
        cout: 2,
      },
      {
        actor: 'Pr. Bergman, spécialiste en durabilité',
        description:
          "Il est indéniable que la Norvège est l'un des leaders mondiaux dans la transition vers une économie verte. Cependant, il est essentiel de continuer à investir dans la recherche, le développement et la sensibilisation pour maintenir cette position et relever les défis environnementaux.",
        pourcentage: +14,
        cout: 1,
      },
      {
        actor: 'M. Johansen, entrepreneur dans un autre secteur',
        description:
          'Bien que la Norvège soit en pointe dans la transition verte, il ne faut pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.',
        pourcentage: -12,
        cout: 2,
      },
      {
        actor: 'Mme. Larsen, chercheuse en énergies renouvelables',
        description:
          'La Norvège se démarque par ses avancées significatives dans les énergies renouvelables et la transition vers une économie verte. Les politiques favorables, les projets innovants et les partenariats internationaux font de la Norvège un modèle à suivre.',
        pourcentage: +18,
        cout: 1,
      },
      {
        actor: 'M. Andersen, responsable gouvernemental',
        description:
          'Le gouvernement norvégien est fortement engagé dans la transition vers une économie verte. Des mesures concrètes, des incitations fiscales et des investissements sont mis en place pour favoriser la durabilité environnementale et la croissance verte.',
        pourcentage: +19,
        cout: 3,
      },
    ],
  "Selon une étude récente, le Danemark est considéré comme l'un des pays les plus avancés dans l'adoption des énergies renouvelables.":
    [
      {
        actor: 'M. Jensen, expert en énergies renouvelables',
        description:
          "Le Danemark est effectivement en pointe dans l'adoption des énergies renouvelables. Le pays a mis en place des politiques énergétiques ambitieuses, des infrastructures adaptées et des initiatives favorables au développement des énergies propres.",
        pourcentage: +22,
        cout: 3,
      },
      {
        actor: 'Mme. Larsen, entrepreneure dans le secteur des énergies vertes',
        description:
          "En tant qu'entrepreneure dans le domaine des énergies renouvelables, je peux confirmer que le Danemark est un leader mondial dans ce domaine. Les projets novateurs et les collaborations entre les acteurs publics et privés contribuent à cette avancée.",
        pourcentage: +18,
        cout: 2,
      },
      {
        actor: 'Pr. Nielsen, spécialiste en énergies renouvelables',
        description:
          "Il est indéniable que le Danemark est à la pointe de l'adoption des énergies renouvelables. Cependant, il est essentiel de maintenir les investissements dans la recherche et le développement pour continuer à améliorer l'efficacité et la durabilité de ces technologies.",
        pourcentage: +16,
        cout: 1,
      },
      {
        actor: 'M. Petersen, entrepreneur dans un autre secteur',
        description:
          'Bien que le Danemark soit un leader dans les énergies renouvelables, il ne faut pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.',
        pourcentage: -14,
        cout: 2,
      },
      {
        actor: 'Mme. Mikkelsen, chercheuse en énergies durables',
        description:
          "Le Danemark est reconnu pour son engagement en faveur des énergies renouvelables. Les politiques incitatives, les projets pilotes et l'engagement des citoyens ont permis d'atteindre des résultats significatifs dans la transition énergétique.",
        pourcentage: +20,
        cout: 1,
      },
      {
        actor: 'M. Andersen, responsable gouvernemental',
        description:
          "Le gouvernement danois a adopté une vision claire en matière d'énergies renouvelables. Des objectifs ambitieux, des incitations financières et des partenariats internationaux sont mis en place pour accélérer la transition vers un système énergétique plus durable.",
        pourcentage: +21,
        cout: 3,
      },
    ],
  "Selon une étude récente, l'Ukraine est en train de devenir une destination touristique de plus en plus prisée en Europe.":
    [
      {
        actor: 'Mme. Petrova, experte en tourisme',
        description:
          "L'Ukraine est effectivement en train de gagner en popularité en tant que destination touristique. Le pays regorge de sites historiques, de richesses culturelles et d'une nature préservée qui attirent de plus en plus de voyageurs.",
        pourcentage: +16,
        cout: 3,
      },
      {
        actor: "M. Ivanov, propriétaire d'une agence de voyages",
        description:
          "En tant que professionnel du tourisme, je constate une augmentation significative du nombre de touristes visitant l'Ukraine. Les villes historiques, les festivals traditionnels et les paysages pittoresques contribuent à l'attrait de ce pays.",
        pourcentage: +14,
        cout: 2,
      },
      {
        actor: 'Pr. Kovalenko, spécialiste en patrimoine culturel',
        description:
          "Il est indéniable que l'Ukraine bénéficie d'un patrimoine culturel riche et diversifié qui attire les touristes. Cependant, il est important de veiller à une gestion durable du tourisme pour préserver les sites et assurer une expérience de qualité aux visiteurs.",
        pourcentage: +12,
        cout: 1,
      },
      {
        actor: 'M. Sokolov, entrepreneur dans un autre secteur',
        description:
          'Bien que le tourisme se développe en Ukraine, il est essentiel de ne pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.',
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'Mme. Dovgan, chercheuse en développement touristique',
        description:
          "L'Ukraine a mis en place des initiatives de promotion touristique, des infrastructures améliorées et des services de qualité pour attirer les visiteurs. Les efforts déployés portent leurs fruits, ce qui renforce le statut de l'Ukraine en tant que destination touristique émergente.",
        pourcentage: +15,
        cout: 1,
      },
      {
        actor: 'M. Volkov, responsable gouvernemental',
        description:
          "Le gouvernement ukrainien accorde une grande importance au développement du tourisme et met en œuvre des politiques favorables à l'attrait touristique du pays. Des investissements sont réalisés pour améliorer les infrastructures et promouvoir les attraits touristiques de l'Ukraine.",
        pourcentage: +13,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Lettonie est considérée comme l'un des pays les plus avancés dans le domaine de l'innovation technologique.":
    [
      {
        actor: 'M. Kalnins, expert en technologie',
        description:
          "La Lettonie est effectivement en pointe dans le domaine de l'innovation technologique. Le pays se distingue par son écosystème dynamique de startups, ses programmes de recherche et développement, ainsi que ses investissements dans les technologies émergentes.",
        pourcentage: +18,
        cout: 3,
      },
      {
        actor: 'Mme. Berzina, entrepreneure dans le secteur des technologies',
        description:
          "En tant qu'entrepreneure travaillant dans le domaine des technologies, je peux confirmer que la Lettonie est un hub d'innovation en pleine croissance. Les talents locaux, les initiatives gouvernementales et les collaborations internationales stimulent le développement technologique du pays.",
        pourcentage: +16,
        cout: 2,
      },
      {
        actor: 'Pr. Ozols, spécialiste en innovation',
        description:
          "Il est indéniable que la Lettonie se positionne comme un acteur majeur de l'innovation technologique. Cependant, il est important de maintenir les investissements dans la recherche, l'éducation et l'infrastructure pour continuer à soutenir cet élan d'innovation.",
        pourcentage: +14,
        cout: 1,
      },
      {
        actor: 'Mme. Petrova, entrepreneure dans un autre secteur',
        description:
          "Bien que la Lettonie excelle dans l'innovation technologique, il ne faut pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.",
        pourcentage: -12,
        cout: 2,
      },
      {
        actor: 'M. Jansons, chercheur en technologies avancées',
        description:
          "La Lettonie se distingue par ses progrès significatifs dans les technologies avancées telles que l'intelligence artificielle, la cybersécurité et l'Internet des objets. Les centres de recherche et les collaborations internationales renforcent la position de la Lettonie en tant qu'acteur innovant.",
        pourcentage: +17,
        cout: 1,
      },
      {
        actor: 'M. Petrov, responsable gouvernemental',
        description:
          "Le gouvernement letton s'engage activement dans le développement de l'innovation technologique. Des politiques favorables, des incitations financières et des programmes de soutien sont mis en place pour stimuler la croissance des entreprises technologiques en Lettonie.",
        pourcentage: +15,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Roumanie est en train de devenir un pôle majeur de l'industrie du jeu vidéo en Europe.":
    [
      {
        actor: 'M. Popescu, expert en jeu vidéo',
        description:
          "La Roumanie est effectivement en train de se positionner comme un acteur clé de l'industrie du jeu vidéo en Europe. Le pays compte de nombreux studios de développement talentueux et créatifs, attirant l'attention des joueurs du monde entier.",
        pourcentage: +20,
        cout: 3,
      },
      {
        actor: 'Mme. Ionescu, game designer',
        description:
          "En tant que game designer basée en Roumanie, je peux confirmer que le pays connaît une croissance significative dans l'industrie du jeu vidéo. Les talents locaux, les infrastructures adaptées et les collaborations internationales contribuent à cette ascension.",
        pourcentage: +18,
        cout: 2,
      },
      {
        actor: 'Pr. Dumitrescu, spécialiste en médias interactifs',
        description:
          "Il est indéniable que la Roumanie se démarque dans l'industrie du jeu vidéo. Cependant, il est important de continuer à investir dans la formation des talents et le soutien à l'innovation pour maintenir cette dynamique de croissance.",
        pourcentage: +16,
        cout: 1,
      },
      {
        actor: 'Mme. Stanescu, entrepreneure dans un autre secteur',
        description:
          "Bien que l'industrie du jeu vidéo connaisse une expansion en Roumanie, il ne faut pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.",
        pourcentage: -14,
        cout: 2,
      },
      {
        actor: 'M. Constantinescu, chercheur en médias interactifs',
        description:
          "La Roumanie est en train de devenir un acteur émergent de l'industrie du jeu vidéo. Les efforts déployés pour soutenir les jeunes talents, les événements dédiés et les investissements dans l'infrastructure contribuent à cette progression.",
        pourcentage: +17,
        cout: 1,
      },
      {
        actor: 'M. Radu, responsable gouvernemental',
        description:
          "Le gouvernement roumain reconnaît l'importance de l'industrie du jeu vidéo et soutient activement son développement. Des incitations fiscales, des programmes de formation et des partenariats sont mis en place pour encourager l'innovation et la croissance du secteur.",
        pourcentage: +19,
        cout: 3,
      },
    ],
  'Selon une étude récente, la Croatie est devenue une destination de choix pour les amateurs de tourisme durable.':
    [
      {
        actor: 'M. Kovac, expert en tourisme durable',
        description:
          "La Croatie est effectivement reconnue comme une destination prisée pour le tourisme durable. Le pays met en avant ses parcs nationaux, ses initiatives de préservation de l'environnement et son engagement envers le tourisme responsable.",
        pourcentage: +22,
        cout: 3,
      },
      {
        actor: "Mme. Horvat, propriétaire d'un hébergement éco-responsable",
        description:
          "En tant que propriétaire d'un hébergement éco-responsable en Croatie, je constate une demande croissante de voyageurs soucieux de l'environnement. Les plages propres, les activités respectueuses de la nature et les initiatives de sensibilisation contribuent à l'attrait du tourisme durable en Croatie.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'Pr. Petrovic, spécialiste en environnement',
        description:
          "La Croatie fait des progrès significatifs dans le développement du tourisme durable. Cependant, il est essentiel de continuer à investir dans la sensibilisation, l'éducation et les infrastructures pour garantir un tourisme respectueux de l'environnement à long terme.",
        pourcentage: +18,
        cout: 1,
      },
      {
        actor: 'M. Radic, entrepreneur dans un autre secteur',
        description:
          'Bien que le tourisme durable soit en plein essor en Croatie, il est important de ne pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.',
        pourcentage: -16,
        cout: 2,
      },
      {
        actor: 'Mme. Markovic, chercheuse en tourisme responsable',
        description:
          'La Croatie met en œuvre des politiques et des mesures concrètes pour promouvoir le tourisme durable. Les initiatives de préservation de la biodiversité, les certifications environnementales et les partenariats avec les acteurs locaux renforcent son positionnement en tant que destination de choix pour les voyageurs responsables.',
        pourcentage: +21,
        cout: 1,
      },
      {
        actor: 'M. Kovacevic, responsable gouvernemental',
        description:
          "Le gouvernement croate accorde une grande importance au tourisme durable et soutient activement son développement. Des réglementations, des incitations financières et des programmes de formation sont mis en place pour promouvoir une industrie touristique respectueuse de l'environnement en Croatie.",
        pourcentage: +19,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Grèce est en train de devenir un leader mondial dans le domaine de l'énergie solaire.":
    [
      {
        actor: 'M. Papadopoulos, expert en énergie renouvelable',
        description:
          "La Grèce est effectivement en train de se hisser au rang de leader mondial de l'énergie solaire. Le pays bénéficie d'un ensoleillement abondant et a investi massivement dans des projets solaires innovants, ce qui a contribué à sa position de premier plan dans le secteur.",
        pourcentage: +24,
        cout: 3,
      },
      {
        actor: 'Mme. Antoniou, ingénieure en énergie solaire',
        description:
          "En tant qu'ingénieure spécialisée en énergie solaire en Grèce, je peux confirmer que le pays connaît une croissance exponentielle dans ce domaine. Les parcs solaires, les installations résidentielles et les politiques gouvernementales favorables ont propulsé la Grèce au sommet de l'industrie solaire.",
        pourcentage: +22,
        cout: 2,
      },
      {
        actor: 'Pr. Dimitriou, spécialiste en énergies renouvelables',
        description:
          "Il est indéniable que la Grèce se démarque dans le domaine de l'énergie solaire. Cependant, il est important de continuer à investir dans la recherche, le développement de technologies et les politiques incitatives pour maintenir cette position de leader mondial.",
        pourcentage: +20,
        cout: 1,
      },
      {
        actor: 'Mme. Georgiou, entrepreneure dans un autre secteur',
        description:
          "Bien que la Grèce excelle dans l'énergie solaire, il ne faut pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.",
        pourcentage: -18,
        cout: 2,
      },
      {
        actor: 'M. Ioannidis, chercheur en énergies renouvelables',
        description:
          "La Grèce se distingue par son engagement fort en faveur de l'énergie solaire. Les projets de grande envergure, les investissements dans l'infrastructure et les partenariats internationaux consolident la position de la Grèce en tant que leader mondial dans ce secteur.",
        pourcentage: +23,
        cout: 1,
      },
      {
        actor: 'M. Karamanlis, responsable gouvernemental',
        description:
          "Le gouvernement grec a mis en place des politiques ambitieuses pour promouvoir l'énergie solaire et soutenir son expansion. Des incitations financières, des programmes de subventions et des objectifs nationaux ont permis à la Grèce de devenir un acteur de premier plan dans le domaine de l'énergie solaire.",
        pourcentage: +21,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Suisse est en train de devenir un centre majeur de l'innovation technologique en Europe.":
    [
      {
        actor: 'M. Müller, expert en innovation technologique',
        description:
          "La Suisse est effectivement en train de se positionner comme un centre majeur de l'innovation technologique en Europe. Le pays bénéficie d'un écosystème dynamique, de politiques favorables à l'innovation et d'un fort investissement dans la recherche et le développement.",
        pourcentage: +25,
        cout: 3,
      },
      {
        actor: 'Mme. Weber, entrepreneure dans le secteur technologique',
        description:
          "En tant qu'entrepreneure suisse dans le secteur technologique, je peux confirmer que la Suisse est un véritable vivier d'innovation. Les startups, les centres de recherche et les collaborations entre l'industrie et les universités alimentent la croissance de l'innovation technologique dans le pays.",
        pourcentage: +23,
        cout: 2,
      },
      {
        actor: 'Pr. Keller, spécialiste en innovation',
        description:
          "Il est indéniable que la Suisse se distingue par son leadership en matière d'innovation technologique. Cependant, il est important de continuer à investir dans l'éducation, la formation et l'écosystème d'innovation pour maintenir cette position privilégiée.",
        pourcentage: +21,
        cout: 1,
      },
      {
        actor: 'Mme. Schneider, entrepreneure dans un autre secteur',
        description:
          "Bien que la Suisse soit un acteur de premier plan dans l'innovation technologique, il ne faut pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.",
        pourcentage: -19,
        cout: 2,
      },
      {
        actor: 'M. Fischer, chercheur en innovation',
        description:
          "La Suisse est en train de consolider sa position en tant que centre d'innovation technologique. Les investissements dans la recherche fondamentale, les politiques d'encouragement à l'entrepreneuriat et les partenariats internationaux renforcent la réputation du pays en matière d'innovation.",
        pourcentage: +22,
        cout: 1,
      },
      {
        actor: 'M. Müller, responsable gouvernemental',
        description:
          "Le gouvernement suisse soutient activement l'innovation technologique et encourage la collaboration entre les entreprises, les universités et les instituts de recherche. Des incitations financières, des programmes d'accélération et une réglementation favorable favorisent la croissance de l'innovation en Suisse.",
        pourcentage: +24,
        cout: 3,
      },
    ],
  'Selon une étude récente, la Slovaquie connaît une croissance significative dans le secteur des énergies renouvelables.':
    [
      {
        actor: 'M. Novak, expert en énergies renouvelables',
        description:
          "La Slovaquie connaît effectivement une croissance notable dans le secteur des énergies renouvelables. Le pays a augmenté sa capacité de production d'énergie verte, investi dans des projets solaires et éoliens, et mis en place des politiques incitatives pour encourager la transition énergétique.",
        pourcentage: +28,
        cout: 3,
      },
      {
        actor:
          'Mme. Kovacova, ingénieure spécialisée en énergies renouvelables',
        description:
          "En tant qu'ingénieure travaillant dans le domaine des énergies renouvelables en Slovaquie, je constate une évolution positive. De plus en plus de parcs solaires et éoliens sont construits, et la population est de plus en plus consciente de l'importance des énergies propres.",
        pourcentage: +24,
        cout: 2,
      },
      {
        actor: 'Pr. Hruska, spécialiste en transition énergétique',
        description:
          "La Slovaquie fait des progrès significatifs dans le développement des énergies renouvelables. Cependant, il est important de continuer à investir dans la recherche, l'innovation et les infrastructures pour accélérer cette transition et atteindre les objectifs fixés.",
        pourcentage: +22,
        cout: 1,
      },
      {
        actor: 'M. Kovac, entrepreneur dans un autre secteur',
        description:
          'Bien que les énergies renouvelables connaissent une croissance en Slovaquie, il est important de ne pas négliger les autres secteurs économiques qui contribuent également à la croissance et au développement du pays.',
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'Mme. Jankovicova, chercheuse en énergies renouvelables',
        description:
          'La Slovaquie se démarque par ses efforts en faveur des énergies renouvelables. Les subventions, les initiatives de sensibilisation et les partenariats internationaux contribuent à cette croissance et renforcent le positionnement du pays dans le secteur des énergies propres.',
        pourcentage: +26,
        cout: 1,
      },
      {
        actor: 'M. Petrovic, responsable gouvernemental',
        description:
          'Le gouvernement slovaque accorde une grande importance aux énergies renouvelables et soutient activement leur développement. Des réglementations favorables, des incitations financières et des programmes de soutien ont été mis en place pour promouvoir les énergies propres en Slovaquie.',
        pourcentage: +25,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Serbie est en train de devenir un pôle d'attraction pour les investissements étrangers.":
    [
      {
        actor: 'M. Petrovic, expert en investissements étrangers',
        description:
          "La Serbie connaît effectivement une croissance significative en termes d'investissements étrangers. Le pays offre des avantages compétitifs tels que des incitations fiscales, une main-d'œuvre qualifiée et un marché en expansion, ce qui attire de plus en plus d'investisseurs étrangers.",
        pourcentage: +27,
        cout: 3,
      },
      {
        actor:
          "Mme. Jankovic, entrepreneure ayant bénéficié d'investissements étrangers",
        description:
          "En tant qu'entrepreneure en Serbie, je peux confirmer l'attrait croissant du pays pour les investissements étrangers. Les investisseurs étrangers ont joué un rôle clé dans le développement de mon entreprise et contribuent à la dynamique économique de la Serbie.",
        pourcentage: +25,
        cout: 2,
      },
      {
        actor: 'Pr. Ivanovic, économiste spécialisé dans les investissements',
        description:
          "Il est indéniable que la Serbie se positionne comme un pôle d'attraction pour les investissements étrangers. Cependant, il est important de continuer à améliorer l'environnement des affaires, la stabilité politique et les infrastructures pour maintenir cette tendance positive.",
        pourcentage: +23,
        cout: 1,
      },
      {
        actor: 'M. Popovic, entrepreneur dans un autre secteur',
        description:
          'Bien que la Serbie attire des investissements étrangers, il est essentiel de ne pas négliger les entreprises locales et les secteurs nationaux qui contribuent également à la croissance économique du pays.',
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'Mme. Petrovic, chercheuse en économie',
        description:
          'La Serbie se distingue par ses efforts pour attirer les investissements étrangers. Les réformes économiques, les zones économiques spéciales et les partenariats internationaux ont renforcé la position de la Serbie en tant que destination attrayante pour les investisseurs étrangers.',
        pourcentage: +26,
        cout: 1,
      },
      {
        actor: 'M. Djokovic, responsable gouvernemental',
        description:
          "Le gouvernement serbe met en place des politiques favorables aux investissements étrangers et cherche à attirer des entreprises internationales. Des réductions fiscales, des incitations financières et des programmes de soutien ont été mis en place pour stimuler l'investissement étranger en Serbie.",
        pourcentage: +24,
        cout: 3,
      },
    ],
  "Selon une étude récente, l'Islande est en train de devenir un leader mondial de la géothermie.":
    [
      {
        actor: 'M. Sigurdsson, expert en énergie géothermique',
        description:
          "L'Islande est effectivement en train de se positionner comme un leader mondial de la géothermie. Le pays utilise son potentiel géothermique unique pour produire de l'énergie renouvelable, chauffer les habitations et développer des applications innovantes dans divers secteurs.",
        pourcentage: +28,
        cout: 3,
      },
      {
        actor: 'Mme. Kristjansdottir, ingénieure spécialisée en géothermie',
        description:
          "En tant qu'ingénieure travaillant dans le domaine de la géothermie en Islande, je constate une avancée significative. L'utilisation de la chaleur géothermique pour l'électricité, le chauffage et même l'aquaculture est un exemple de l'expertise islandaise dans ce domaine.",
        pourcentage: +26,
        cout: 2,
      },
      {
        actor: 'Pr. Magnusson, spécialiste en énergie durable',
        description:
          "L'Islande est indéniablement en train de se positionner comme un leader de la géothermie. Cependant, il est important de continuer à investir dans la recherche, le développement de technologies et la coopération internationale pour maintenir cette position et en tirer pleinement parti.",
        pourcentage: +24,
        cout: 1,
      },
      {
        actor: 'M. Jonsson, entrepreneur dans un autre secteur',
        description:
          "Bien que l'Islande excelle dans la géothermie, il est essentiel de ne pas négliger les autres domaines d'activité qui contribuent également à l'économie islandaise.",
        pourcentage: -22,
        cout: 2,
      },
      {
        actor: 'Mme. Johannsdottir, chercheuse en énergies renouvelables',
        description:
          "L'Islande tire parti de son abondance de ressources géothermiques pour devenir un leader mondial de la géothermie. Les investissements dans la recherche, les partenariats internationaux et les initiatives de formation contribuent à renforcer l'expertise et l'innovation dans ce domaine.",
        pourcentage: +27,
        cout: 1,
      },
      {
        actor: 'M. Olafsson, responsable gouvernemental',
        description:
          "Le gouvernement islandais soutient activement le développement de la géothermie et encourage les investissements dans ce secteur. Des politiques favorables, des incitations financières et une réglementation claire ont été mises en place pour stimuler l'adoption de cette source d'énergie renouvelable en Islande.",
        pourcentage: +25,
        cout: 3,
      },
    ],
  'Selon une étude récente, le Groenland connaît une fonte des glaces plus rapide que prévu.':
    [
      {
        actor: 'Dr. Hansen, climatologue renommé',
        description:
          'Les données scientifiques confirment que le Groenland subit une fonte des glaces plus rapide que prévu. Les changements climatiques ont un impact majeur sur la calotte glaciaire du Groenland, ce qui entraîne une augmentation du niveau de la mer et des conséquences potentiellement graves pour les régions côtières.',
        pourcentage: +32,
        cout: 3,
      },
      {
        actor: 'M. Andersen, pêcheur local',
        description:
          'En tant que pêcheur au Groenland, je constate les effets de la fonte des glaces. Les glaciers reculent, les conditions de pêche changent et certaines espèces marines se déplacent vers des eaux plus froides. Cela a un impact sur notre mode de vie et notre économie.',
        pourcentage: +28,
        cout: 2,
      },
      {
        actor: 'Pr. Jorgensen, géologue spécialisé dans le Groenland',
        description:
          "Les observations et les études scientifiques démontrent que le Groenland subit une fonte des glaces accélérée. Cette situation soulève des préoccupations environnementales et pose des défis importants en termes d'adaptation et de gestion des ressources naturelles dans la région.",
        pourcentage: +26,
        cout: 1,
      },
      {
        actor: 'Mme. Poulsen, habitante du Groenland',
        description:
          "Bien que des changements soient observés dans la calotte glaciaire du Groenland, il est important de noter que la situation peut être complexe et varier d'une région à l'autre. Des études supplémentaires et une surveillance continue sont nécessaires pour obtenir une image complète de l'évolution de la fonte des glaces.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'M. Larsen, chercheur en climatologie',
        description:
          "Les modèles climatiques prévoient une accélération de la fonte des glaces au Groenland. Cette fonte contribue à l'élévation du niveau de la mer et peut avoir des répercussions à l'échelle mondiale. La communauté internationale doit prendre des mesures urgentes pour réduire les émissions de gaz à effet de serre et atténuer les effets du changement climatique.",
        pourcentage: +30,
        cout: 1,
      },
      {
        actor: 'M. Olsen, responsable gouvernemental',
        description:
          "Le gouvernement du Groenland reconnaît les défis posés par la fonte des glaces et met en œuvre des mesures pour s'adapter à ces changements. Des initiatives de préservation de l'environnement, de diversification économique et de renforcement des infrastructures sont en cours pour faire face à cette réalité.",
        pourcentage: +24,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Turquie connaît une augmentation significative de sa production d'énergie éolienne.":
    [
      {
        actor: 'M. Demir, expert en énergie renouvelable',
        description:
          "L'étude récente confirme que la Turquie connaît une croissance importante de sa production d'énergie éolienne. Le pays a mis en place des politiques favorables, des incitations financières et des investissements dans les infrastructures éoliennes, ce qui a permis d'exploiter efficacement le potentiel éolien du pays.",
        pourcentage: +35,
        cout: 3,
      },
      {
        actor: 'Mme. Yılmaz, ingénieure spécialisée en énergie éolienne',
        description:
          "En tant qu'ingénieure travaillant dans le domaine de l'énergie éolienne en Turquie, je constate une augmentation significative de l'utilisation de l'énergie éolienne dans le mix énergétique du pays. La Turquie dispose d'un excellent potentiel éolien et a réalisé d'importants progrès dans l'installation de parcs éoliens.",
        pourcentage: +32,
        cout: 2,
      },
      {
        actor: 'Pr. Aydın, spécialiste en énergies renouvelables',
        description:
          "La Turquie a fait des efforts considérables pour développer son secteur de l'énergie éolienne. L'augmentation de la production d'énergie éolienne témoigne des mesures prises pour diversifier le mix énergétique et réduire la dépendance aux combustibles fossiles.",
        pourcentage: +30,
        cout: 1,
      },
      {
        actor: 'M. Karaca, entrepreneur dans un autre secteur',
        description:
          "Bien que la Turquie ait réalisé des progrès dans l'énergie éolienne, il est essentiel de ne pas négliger d'autres sources d'énergie renouvelable et de continuer à investir dans des technologies innovantes pour diversifier davantage le mix énergétique du pays.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'Mme. Can, chercheuse en énergies renouvelables',
        description:
          "La Turquie a augmenté sa capacité de production d'énergie éolienne ces dernières années, grâce à des projets ambitieux et à une volonté de promouvoir les énergies renouvelables. Cela contribue à réduire les émissions de carbone et à renforcer la sécurité énergétique du pays.",
        pourcentage: +28,
        cout: 1,
      },
      {
        actor: 'M. Kaya, responsable gouvernemental',
        description:
          "Le gouvernement turc est fermement engagé dans la promotion de l'énergie éolienne et soutient activement le développement de parcs éoliens dans tout le pays. Des politiques claires, des incitations financières et des programmes de formation ont été mis en place pour stimuler la croissance de ce secteur.",
        pourcentage: +25,
        cout: 3,
      },
    ],
  "Selon une étude récente, le Kazakhstan connaît une augmentation significative de sa production d'énergie solaire.":
    [
      {
        actor: 'Dr. Nurmagambetov, expert en énergie renouvelable',
        description:
          "L'étude récente confirme que le Kazakhstan a connu une croissance remarquable de sa production d'énergie solaire. Le pays a investi massivement dans le développement de parcs solaires et a mis en place des politiques incitatives pour favoriser l'utilisation de l'énergie solaire dans son mix énergétique.",
        pourcentage: +38,
        cout: 3,
      },
      {
        actor: 'M. Ivanov, ingénieur spécialisé en énergie solaire',
        description:
          "En tant qu'ingénieur travaillant dans le domaine de l'énergie solaire au Kazakhstan, je constate une augmentation significative de l'utilisation de l'énergie solaire dans le pays. Le Kazakhstan dispose d'un excellent potentiel solaire et a réalisé d'importants progrès dans l'installation de centrales solaires.",
        pourcentage: +34,
        cout: 2,
      },
      {
        actor: 'Pr. Toktarov, spécialiste en énergies renouvelables',
        description:
          "Le Kazakhstan s'est engagé activement dans la transition vers les énergies renouvelables, notamment l'énergie solaire. L'augmentation de la production d'énergie solaire témoigne des efforts entrepris pour diversifier le mix énergétique et réduire les émissions de carbone.",
        pourcentage: +30,
        cout: 1,
      },
      {
        actor: 'Mme. Zhakypova, entrepreneure dans un autre secteur',
        description:
          "Bien que le Kazakhstan ait réalisé des progrès dans l'énergie solaire, il est important de veiller à ne pas négliger d'autres sources d'énergie renouvelable et de continuer à promouvoir une approche équilibrée dans le développement du secteur énergétique.",
        pourcentage: -18,
        cout: 2,
      },
      {
        actor: 'M. Abayev, chercheur en énergies renouvelables',
        description:
          "Le Kazakhstan a développé une solide industrie de l'énergie solaire, en tirant parti de son abondance de ressources solaires. Cela a permis de diversifier le mix énergétique et de réduire la dépendance aux combustibles fossiles, contribuant ainsi à la transition énergétique du pays.",
        pourcentage: +28,
        cout: 1,
      },
      {
        actor: 'M. Ospanov, responsable gouvernemental',
        description:
          "Le gouvernement kazakhstanais soutient fermement le développement de l'énergie solaire et a mis en place des politiques et des incitations pour encourager les investissements dans ce secteur. Le Kazakhstan vise à devenir un acteur majeur de l'énergie solaire en Asie centrale.",
        pourcentage: +32,
        cout: 3,
      },
    ],
  "Selon une étude récente, la Mongolie connaît une augmentation significative de sa production d'énergie éolienne.":
    [
      {
        actor: 'M. Batbayar, expert en énergie renouvelable',
        description:
          "L'étude récente confirme que la Mongolie a connu une croissance remarquable de sa production d'énergie éolienne. Le pays dispose de vastes étendues de terres propices à l'installation de parcs éoliens, et il a mis en place des politiques favorables et des incitations pour promouvoir l'énergie éolienne.",
        pourcentage: +40,
        cout: 3,
      },
      {
        actor: 'Mme. Enkhjargal, ingénieure spécialisée en énergie éolienne',
        description:
          "En tant qu'ingénieure travaillant dans le domaine de l'énergie éolienne en Mongolie, je constate une augmentation significative de l'utilisation de l'énergie éolienne dans le pays. Les parcs éoliens se multiplient et contribuent à la diversification du mix énergétique mongol.",
        pourcentage: +36,
        cout: 2,
      },
      {
        actor: 'Pr. Tumenbayar, spécialiste en énergies renouvelables',
        description:
          "La Mongolie s'est engagée dans la promotion de l'énergie éolienne comme source d'énergie propre et renouvelable. L'augmentation de la production d'énergie éolienne témoigne des efforts entrepris pour réduire la dépendance aux combustibles fossiles et préserver l'environnement.",
        pourcentage: +32,
        cout: 1,
      },
      {
        actor: 'M. Altansukh, entrepreneur dans un autre secteur',
        description:
          "Bien que la Mongolie ait réalisé des progrès dans l'énergie éolienne, il est essentiel de ne pas négliger d'autres sources d'énergie renouvelable et de promouvoir une approche équilibrée dans le développement du secteur énergétique.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'M. Ganbold, chercheur en énergies renouvelables',
        description:
          "La Mongolie exploite son potentiel éolien considérable pour développer l'énergie éolienne. Cela contribue à la réduction des émissions de carbone, à la création d'emplois locaux et au renforcement de l'indépendance énergétique du pays.",
        pourcentage: +30,
        cout: 1,
      },
      {
        actor: 'Mme. Davaasuren, responsable gouvernemental',
        description:
          "Le gouvernement mongol accorde une grande importance à l'énergie éolienne et soutient activement le développement de parcs éoliens dans tout le pays. Des politiques claires, des incitations financières et des partenariats internationaux ont été établis pour stimuler la croissance du secteur éolien.",
        pourcentage: +35,
        cout: 3,
      },
    ],
  "Selon une étude récente, le Japon connaît une augmentation significative de sa production d'énergie géothermique.":
    [
      {
        actor: 'M. Tanaka, expert en énergie renouvelable',
        description:
          "L'étude récente confirme que le Japon a connu une croissance remarquable de sa production d'énergie géothermique. Le pays exploite son potentiel géothermique considérable et a réalisé d'importants investissements dans le développement de centrales géothermiques.",
        pourcentage: +42,
        cout: 3,
      },
      {
        actor: 'Mme. Nakamura, ingénieure spécialisée en énergie géothermique',
        description:
          "En tant qu'ingénieure travaillant dans le domaine de l'énergie géothermique au Japon, je constate une augmentation significative de l'utilisation de l'énergie géothermique dans le pays. Les centrales géothermiques se multiplient et contribuent à la transition vers une énergie plus propre et renouvelable.",
        pourcentage: +38,
        cout: 2,
      },
      {
        actor: 'Pr. Yamamoto, spécialiste en énergies renouvelables',
        description:
          "Le Japon a intensifié ses efforts pour développer l'énergie géothermique et réduire sa dépendance aux combustibles fossiles. L'augmentation de la production d'énergie géothermique témoigne de l'engagement du pays envers la transition énergétique et la lutte contre le changement climatique.",
        pourcentage: +35,
        cout: 1,
      },
      {
        actor: 'M. Suzuki, entrepreneur dans un autre secteur',
        description:
          "Bien que le Japon ait réalisé des progrès dans l'énergie géothermique, il est important de continuer à diversifier les sources d'énergie renouvelable et de promouvoir une approche équilibrée dans le développement du secteur énergétique.",
        pourcentage: -18,
        cout: 2,
      },
      {
        actor: 'M. Watanabe, chercheur en énergies renouvelables',
        description:
          "Le Japon tire parti de ses ressources géothermiques abondantes pour produire de l'énergie propre et renouvelable. L'énergie géothermique offre une solution stable et fiable pour répondre aux besoins énergétiques du pays tout en réduisant les émissions de carbone.",
        pourcentage: +32,
        cout: 1,
      },
      {
        actor: 'Mme. Sato, responsable gouvernemental',
        description:
          "Le gouvernement japonais soutient activement le développement de l'énergie géothermique et a mis en place des politiques et des incitations pour encourager les investissements dans ce secteur. Le Japon aspire à devenir un leader mondial dans l'utilisation de l'énergie géothermique.",
        pourcentage: +40,
        cout: 3,
      },
    ],
  "Selon une étude récente, l'Inde connaît une augmentation significative du nombre de startups technologiques.":
    [
      {
        actor: 'M. Patel, entrepreneur technologique',
        description:
          "L'étude récente confirme que l'Inde connaît une croissance remarquable du nombre de startups technologiques. Le pays offre un écosystème favorable aux jeunes entrepreneurs et une solide infrastructure de soutien pour favoriser l'innovation technologique.",
        pourcentage: +45,
        cout: 3,
      },
      {
        actor: 'Mme. Sharma, investisseuse dans les startups',
        description:
          "En tant qu'investisseuse dans les startups en Inde, je constate une augmentation significative du nombre de jeunes entreprises technologiques prometteuses. Les investissements dans les secteurs de la technologie et de l'innovation sont en plein essor, ce qui stimule la croissance de l'écosystème startup indien.",
        pourcentage: +42,
        cout: 2,
      },
      {
        actor: 'Pr. Singh, expert en entrepreneuriat',
        description:
          "L'Inde est en train de devenir un hub mondial pour les startups technologiques. Le gouvernement indien a mis en place des politiques favorables, des incubateurs et des initiatives de soutien pour encourager l'entrepreneuriat et stimuler l'innovation dans le pays.",
        pourcentage: +38,
        cout: 1,
      },
      {
        actor: 'M. Kumar, entrepreneur dans un autre secteur',
        description:
          "Bien que le nombre de startups technologiques augmente en Inde, il est important de continuer à diversifier les secteurs d'activité et de promouvoir un équilibre entre les industries traditionnelles et les startups technologiques.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'M. Verma, chercheur en innovation',
        description:
          "L'essor des startups technologiques en Inde témoigne de la capacité du pays à créer des solutions innovantes pour les défis sociaux et économiques. Les jeunes entrepreneurs indiens apportent des idées novatrices et contribuent à la transformation numérique du pays.",
        pourcentage: +35,
        cout: 1,
      },
      {
        actor: 'Mme. Gupta, responsable gouvernemental',
        description:
          "Le gouvernement indien soutient activement l'écosystème des startups technologiques en mettant en place des programmes d'incubation, des mesures de facilitation et des initiatives de financement pour encourager l'entrepreneuriat et promouvoir l'innovation dans le pays.",
        pourcentage: +40,
        cout: 3,
      },
    ],
  "Une découverte archéologique révèle l'existence d'une ancienne cité engloutie au large des côtes de la Thaïlande.":
    [
      {
        actor: 'Dr. Supachai, archéologue marin',
        description:
          "Je suis au courant de cette découverte et nous avons trouvé des preuves solides de l'existence de cette ancienne cité engloutie. C'est une découverte exceptionnelle pour l'archéologie sous-marine.",
        pourcentage: 15,
        cout: 3,
      },
      {
        actor: 'M. Thawin, pêcheur local',
        description:
          "J'ai travaillé dans ces eaux depuis des années et je n'ai jamais rien entendu à propos d'une cité engloutie. Je suis sceptique quant à cette nouvelle.",
        pourcentage: -10,
        cout: 1,
      },
      {
        actor: 'Dr. Naree, historienne',
        description:
          "En tant qu'historienne spécialisée dans la région, je n'ai trouvé aucune mention d'une cité engloutie dans les archives. Cette découverte nécessite une vérification approfondie.",
        pourcentage: -12,
        cout: 2,
      },
      {
        actor: 'M. Chai, plongeur expérimenté',
        description:
          "J'ai exploré ces eaux de nombreuses fois et je n'ai jamais remarqué quoi que ce soit qui indiquerait une cité engloutie. Il est possible que ce soit une fausse nouvelle.",
        pourcentage: -8,
        cout: 1,
      },
      {
        actor: 'Dr. Pim, archéologue terrestre',
        description:
          "Bien que je n'aie pas participé directement à cette découverte sous-marine, les premiers rapports et les preuves présentées semblent solides. Cependant, une analyse plus approfondie est nécessaire pour confirmer l'existence de cette cité engloutie.",
        pourcentage: 8,
        cout: 2,
      },
      {
        actor: 'Mme Somsri, plongeuse amateur',
        description:
          "Lors de mes plongées, j'ai entendu parler de rumeurs concernant une cité engloutie, mais je n'ai jamais vu de preuves tangibles. Je reste sceptique jusqu'à ce que des preuves concrètes soient fournies.",
        pourcentage: -5,
        cout: 1,
      },
    ],
  "Des chercheurs philippins annoncent la découverte d'une nouvelle espèce de fleur qui ne fleurit qu'une fois par siècle.":
    [
      {
        actor: 'Dr. Hernandez, botaniste',
        description:
          "En tant que botaniste travaillant dans la région, je peux confirmer qu'aucune découverte de ce type n'a été rapportée. Cette information est fausse.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'M. Santos, agriculteur local',
        description:
          "Je cultive des fleurs depuis des décennies et je n'ai jamais entendu parler d'une fleur aussi rare. Cette nouvelle semble être une exagération.",
        pourcentage: -8,
        cout: 1,
      },
      {
        actor: 'Dr. Gomez, biologiste',
        description:
          "Je suis spécialisé dans l'étude de la flore aux Philippines, et jusqu'à présent, il n'y a aucune preuve scientifique ou observation de cette fleur. Cette nouvelle est infondée.",
        pourcentage: -12,
        cout: 2,
      },
      {
        actor: 'Mme Ramirez, horticultrice',
        description:
          "En tant qu'horticultrice expérimentée, je suis constamment à l'affût de nouvelles espèces de fleurs. Cette information ne correspond à aucune réalité dans le monde botanique.",
        pourcentage: -10,
        cout: 1,
      },
      {
        actor: 'Dr. Torres, chercheur en écologie',
        description:
          "Il est extrêmement improbable qu'une fleur ne fleurisse qu'une fois par siècle. Les cycles de floraison des plantes sont étroitement liés aux conditions environnementales. Cette nouvelle est hautement douteuse.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'M. Garcia, passionné de jardinage',
        description:
          "En tant que passionné de jardinage et de fleurs rares, je n'ai jamais entendu parler d'une telle fleur aux caractéristiques aussi exceptionnelles. Je reste sceptique quant à cette information.",
        pourcentage: -5,
        cout: 1,
      },
    ],
  "Une équipe de scientifiques indonésiens découvre une nouvelle espèce de singe capable de peindre des œuvres d'art.":
    [
      {
        actor: 'Dr. Susanto, primatologue',
        description:
          "En tant que primatologue, je suis très au fait des découvertes de nouvelles espèces de singes. À ma connaissance, il n'y a aucune preuve scientifique de l'existence d'une telle espèce capable de peindre des œuvres d'art.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'Mme Utami, guide touristique',
        description:
          "En travaillant comme guide touristique depuis des années, je n'ai jamais entendu parler d'un singe capable de peindre. Cette information semble être une invention ou une confusion.",
        pourcentage: -8,
        cout: 1,
      },
      {
        actor: 'Dr. Rahman, biologiste',
        description:
          "En tant que biologiste spécialisé dans la faune indonésienne, je n'ai jamais rencontré de singe ayant des compétences artistiques. Cette nouvelle est peu probable.",
        pourcentage: -12,
        cout: 2,
      },
      {
        actor: 'M. Wijaya, gardien de réserve naturelle',
        description:
          "J'ai passé des années à observer la faune dans les réserves naturelles indonésiennes, et je n'ai jamais remarqué de singe artiste. Cette information semble farfelue.",
        pourcentage: -10,
        cout: 1,
      },
      {
        actor: 'Dr. Surya, zoologue',
        description:
          "Les capacités artistiques complexes sont généralement propres aux êtres humains et à quelques rares animaux, mais il n'y a aucune preuve crédible d'un singe peintre en Indonésie. Je suis sceptique face à cette information.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'M. Setiawan, photographe animalier',
        description:
          "En tant que photographe animalier passionné, j'ai passé de nombreuses heures à observer les singes en Indonésie. Je n'ai jamais observé de telles compétences artistiques chez les primates. Je doute de la véracité de cette information.",
        pourcentage: -5,
        cout: 1,
      },
    ],
  "Des archéologues découvrent une cité perdue datant de l'Empire Kushan au nord de l'Afghanistan.":
    [
      {
        actor: 'Dr. Rahimi, archéologue',
        description:
          "En tant qu'archéologue impliqué dans cette découverte, je peux confirmer la véracité de cette information. Nous avons mis au jour des ruines et des artefacts qui témoignent de l'existence de cette cité perdue.",
        pourcentage: 25,
        cout: 3,
      },
      {
        actor: 'M. Ahmad, habitant local',
        description:
          "En tant qu'habitant de la région, j'ai toujours entendu parler de légendes relatives à une cité perdue. La découverte de cette cité confirme ces récits transmis depuis des générations.",
        pourcentage: 10,
        cout: 2,
      },
      {
        actor: 'Dr. Azizi, historien',
        description:
          "Les écrits historiques font mention de l'Empire Kushan et de ses cités perdues au nord de l'Afghanistan. Cette découverte archéologique est une confirmation précieuse de notre connaissance de cette période.",
        pourcentage: 18,
        cout: 2,
      },
      {
        actor: 'M. Khan, guide touristique',
        description:
          "En travaillant comme guide touristique dans la région, je suis ravi de cette découverte. Cela va certainement attirer davantage de visiteurs intéressés par l'histoire ancienne de l'Afghanistan.",
        pourcentage: 5,
        cout: 1,
      },
      {
        actor: 'Dr. Nouri, archéologue',
        description:
          "Bien que je ne sois pas directement impliqué dans cette découverte, les premiers rapports et les preuves présentées sont convaincants. Cela enrichit notre compréhension de l'Empire Kushan.",
        pourcentage: 12,
        cout: 2,
      },
      {
        actor: 'Mme Asad, étudiante en histoire',
        description:
          "En étudiant l'histoire de l'Afghanistan, j'ai toujours été fascinée par les civilisations anciennes de la région. La découverte de cette cité perdue est une nouvelle passionnante.",
        pourcentage: 8,
        cout: 1,
      },
    ],
  'Des milliers de manifestants pro-démocratie se rassemblent à Hong Kong pour réclamer des réformes politiques.':
    [
      {
        actor: 'M. Wong, militant pro-démocratie',
        description:
          'En tant que militant pro-démocratie, je peux vous confirmer que cette manifestation a bel et bien eu lieu. Nous étions des milliers à nous rassembler pacifiquement pour réclamer des réformes politiques.',
        pourcentage: 20,
        cout: 3,
      },
      {
        actor: 'Mme Chan, journaliste indépendante',
        description:
          "En tant que journaliste indépendante, j'ai couvert cet événement de près. Les images et les témoignages recueillis confirment la mobilisation massive des manifestants pro-démocratie.",
        pourcentage: 15,
        cout: 2,
      },
      {
        actor: 'Dr. Lee, politologue',
        description:
          'En analysant la situation politique à Hong Kong, il est cohérent de constater des manifestations pro-démocratie récurrentes. La demande de réformes politiques est une préoccupation majeure de nombreux habitants.',
        pourcentage: 18,
        cout: 2,
      },
      {
        actor: 'M. Kwok, résident de Hong Kong',
        description:
          "En tant que résident de Hong Kong, j'ai participé à cette manifestation pour exprimer mon soutien aux réformes politiques. Les rues étaient remplies de manifestants pacifiques.",
        pourcentage: 12,
        cout: 1,
      },
      {
        actor: 'Dr. Chen, chercheur en sciences politiques',
        description:
          'Les mouvements pro-démocratie sont bien documentés à Hong Kong. Cette manifestation est une continuation du mouvement de contestation visant à réclamer des changements politiques.',
        pourcentage: 15,
        cout: 2,
      },
      {
        actor: 'Mme Liu, résidente de Hong Kong',
        description:
          "En tant que résidente de Hong Kong, j'ai observé cette manifestation depuis ma fenêtre. Les manifestants étaient nombreux et leurs revendications étaient claires.",
        pourcentage: 10,
        cout: 1,
      },
    ],
  'Israël annonce la construction de nouveaux logements dans les colonies en Cisjordanie.':
    [
      {
        actor: 'M. Cohen, porte-parole du gouvernement israélien',
        description:
          "La construction de nouveaux logements dans les colonies en Cisjordanie est une décision prise par le gouvernement israélien pour répondre aux besoins de logement de la population. Il s'agit d'une politique légitime.",
        pourcentage: 25,
        cout: 3,
      },
      {
        actor: 'M. Abbas, représentant palestinien',
        description:
          "Cette annonce est une violation flagrante du droit international et des résolutions de l'ONU. La construction de colonies en Cisjordanie entrave les perspectives de paix et compromet la solution à deux États.",
        pourcentage: -20,
        cout: 3,
      },
      {
        actor: 'Dr. Levy, expert en droit international',
        description:
          "D'un point de vue juridique, la construction de colonies israéliennes en Cisjordanie est illégale selon le droit international. Cette annonce va à l'encontre des principes de l'occupation militaire.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: "Mme Cohen, résidente d'une colonie en Cisjordanie",
        description:
          "En tant que résidente d'une colonie en Cisjordanie, je suis ravie de cette annonce. La construction de nouveaux logements est nécessaire pour répondre à la croissance démographique de notre communauté.",
        pourcentage: 15,
        cout: 2,
      },
      {
        actor: 'Dr. Ibrahim, chercheur en relations internationales',
        description:
          "La construction de colonies israéliennes en Cisjordanie est un sujet controversé sur la scène internationale. Cette annonce risque d'exacerber les tensions et de compliquer les efforts de paix.",
        pourcentage: -10,
        cout: 1,
      },
      {
        actor: 'M. Cohen, entrepreneur de construction',
        description:
          "En tant qu'entrepreneur de construction, je suis enthousiaste à l'idée de nouveaux projets dans les colonies en Cisjordanie. Cela représente des opportunités d'affaires pour notre industrie.",
        pourcentage: 10,
        cout: 1,
      },
    ],
  "Les Émirats arabes unis annoncent un ambitieux plan de développement pour devenir le premier pays neutre en carbone d'ici 2050.":
    [
      {
        actor: 'Mme Ahmed, responsable gouvernementale',
        description:
          "En tant que responsable gouvernementale, je peux vous confirmer que les Émirats arabes unis ont effectivement annoncé ce plan ambitieux. Nous nous engageons à réduire nos émissions de carbone et à adopter des politiques durables pour atteindre la neutralité carbone d'ici 2050.",
        pourcentage: 30,
        cout: 3,
      },
      {
        actor: 'M. Khalid, expert en énergie renouvelable',
        description:
          "Ce plan des Émirats arabes unis est une étape importante vers la transition vers des sources d'énergie propres. Ils ont déjà réalisé des progrès significatifs dans le domaine des énergies renouvelables et ils continuent d'investir massivement dans ce secteur.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Dr. Ali, chercheur en développement durable',
        description:
          "Les Émirats arabes unis ont pris des engagements sérieux en matière de durabilité et de lutte contre le changement climatique. Leur plan pour devenir neutres en carbone d'ici 2050 reflète leur volonté de jouer un rôle de leader dans la transition vers une économie verte.",
        pourcentage: 20,
        cout: 2,
      },
      {
        actor: 'M. Rahman, activiste écologiste',
        description:
          "Je salue l'annonce des Émirats arabes unis, mais il est important de rester vigilant quant à la mise en œuvre effective de ces mesures. Il faudra suivre de près les actions concrètes entreprises pour atteindre cet objectif.",
        pourcentage: 10,
        cout: 1,
      },
      {
        actor: "Mme Al-Hassan, représentante d'une ONG environnementale",
        description:
          "Cette annonce des Émirats arabes unis est une avancée positive dans la lutte contre le changement climatique. Cependant, il faudra également tenir compte des impacts environnementaux de leur développement économique dans d'autres domaines.",
        pourcentage: 8,
        cout: 1,
      },
      {
        actor: 'M. Ibrahim, entrepreneur des énergies renouvelables',
        description:
          "En tant qu'entrepreneur des énergies renouvelables, je suis enthousiaste à l'idée des opportunités d'affaires que ce plan des Émirats arabes unis va générer. Il y aura une forte demande pour les technologies propres et les solutions durables.",
        pourcentage: 12,
        cout: 1,
      },
    ],
  'Des manifestations massives éclatent à Moscou, dénonçant la corruption et réclamant des réformes politiques.':
    [
      {
        actor: 'M. Ivanov, manifestant russe',
        description:
          'En tant que manifestant actif, je peux vous confirmer que ces manifestations ont effectivement eu lieu à Moscou. Nous nous élevons contre la corruption et demandons des réformes politiques pour un système plus juste.',
        pourcentage: 25,
        cout: 3,
      },
      {
        actor: 'Mme Petrova, journaliste local',
        description:
          "En tant que journaliste local, j'ai couvert ces manifestations massives à Moscou. Les citoyens expriment leur mécontentement face à la corruption et appellent à des changements politiques significatifs.",
        pourcentage: 20,
        cout: 2,
      },
      {
        actor: 'Dr. Mikhailov, analyste politique',
        description:
          'Les manifestations à Moscou reflètent une profonde insatisfaction de la population envers la corruption et les pratiques politiques actuelles. Les demandes de réformes sont légitimes et nécessitent une attention sérieuse.',
        pourcentage: 18,
        cout: 2,
      },
      {
        actor: 'M. Ivanovitch, représentant du gouvernement russe',
        description:
          "Cette information est fausse et propagandiste. Il n'y a pas de manifestations massives à Moscou. Le gouvernement travaille activement pour répondre aux besoins de la population et lutter contre la corruption.",
        pourcentage: -15,
        cout: 3,
      },
      {
        actor: 'Dr. Smirnov, expert en sciences politiques',
        description:
          'Les manifestations à Moscou sont un signe clair de la frustration croissante face à la corruption et aux problèmes politiques. Les citoyens veulent des réformes et une meilleure gouvernance.',
        pourcentage: 15,
        cout: 2,
      },
      {
        actor: 'Mme Volkova, résidente moscovite',
        description:
          'En tant que résidente de Moscou, je peux confirmer que les manifestations ont eu lieu et que la population exprime son mécontentement envers la corruption et les pratiques politiques actuelles.',
        pourcentage: 12,
        cout: 1,
      },
    ],
  'Iakoutsk, en Russie, connaît une vague de chaleur sans précédent, avec des températures atteignant 38 degrés Celsius, provoquant la fonte accélérée du pergélisol.':
    [
      {
        actor: 'Mme Petrova, résidente de Iakoutsk',
        description:
          'En tant que résidente de Iakoutsk, je peux vous confirmer que nous vivons une vague de chaleur intense. Les températures élevées ont des conséquences graves sur notre environnement, provoquant la fonte rapide du pergélisol.',
        pourcentage: 30,
        cout: 3,
      },
      {
        actor: 'M. Ivanov, chercheur en climatologie',
        description:
          "Les températures extrêmement élevées à Iakoutsk sont un signe alarmant du changement climatique en cours. La fonte accélérée du pergélisol a des implications majeures pour l'écosystème et l'infrastructure de la région.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Dr. Smirnov, géologue spécialiste du pergélisol',
        description:
          'La vague de chaleur à Iakoutsk provoque une fonte accélérée du pergélisol, ce qui peut entraîner des affaissements de terrain, des inondations et des dommages aux infrastructures. Cette situation est préoccupante et nécessite une attention immédiate.',
        pourcentage: 20,
        cout: 2,
      },
      {
        actor: 'Mme Kuznetsova, responsable gouvernementale',
        description:
          "Cette information est exagérée. Bien que nous ayons des températures élevées à Iakoutsk, la fonte du pergélisol n'est pas aussi rapide que suggéré. Le gouvernement prend des mesures pour surveiller la situation et atténuer les impacts éventuels.",
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'M. Volkov, météorologue local',
        description:
          "La vague de chaleur à Iakoutsk est exceptionnelle, avec des températures record. La fonte du pergélisol est un phénomène préoccupant qui peut avoir des répercussions à long terme sur l'environnement et les communautés locales.",
        pourcentage: 15,
        cout: 2,
      },
      {
        actor: 'Mme Sokolova, activiste environnementale',
        description:
          "La situation à Iakoutsk est alarmante. La fonte accélérée du pergélisol est un signal d'alarme pour le changement climatique. Nous devons prendre des mesures urgentes pour réduire nos émissions et protéger notre planète.",
        pourcentage: 12,
        cout: 1,
      },
    ],
  "Des manifestations pro-indépendance éclatent au Tibet, réclamant l'autonomie et dénonçant la répression chinoise.":
    [
      {
        actor: 'Tashi Wangdu, militant tibétain',
        description:
          "En tant que militant tibétain, je peux vous confirmer que les manifestations pro-indépendance ont effectivement lieu au Tibet. Nous réclamons l'autonomie et dénonçons la répression chinoise contre notre peuple.",
        pourcentage: 35,
        cout: 3,
      },
      {
        actor: 'Lhamo Tsomo, exilée tibétaine',
        description:
          "En tant qu'exilée tibétaine, je suis en contact avec des témoins locaux au Tibet. Les manifestations pro-indépendance sont une expression de notre désir d'autonomie et une protestation contre la répression chinoise.",
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Dr. Li Wei, expert en études asiatiques',
        description:
          "Les manifestations au Tibet reflètent la tension persistante entre les aspirations d'indépendance des Tibétains et la politique de la Chine. Cela soulève des questions complexes sur les droits de l'homme et la stabilité régionale.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'M. Zhang Wei, porte-parole du gouvernement chinois',
        description:
          "Cette information est fausse et trompeuse. Il n'y a pas de manifestations pro-indépendance au Tibet. Le gouvernement chinois travaille en étroite collaboration avec la population tibétaine pour assurer le développement et la stabilité de la région.",
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Mme Chen Mei, chercheuse en sciences politiques',
        description:
          "Les manifestations au Tibet témoignent des aspirations persistantes à l'autonomie de la population tibétaine et de la répression perçue. Cela soulève des défis complexes pour la Chine en termes de gouvernance et de relations ethniques.",
        pourcentage: 20,
        cout: 2,
      },
      {
        actor: 'M. Yang Jie, journaliste local',
        description:
          "En tant que journaliste local au Tibet, je peux confirmer qu'il y a eu des manifestations pro-indépendance récentes. Les Tibétains expriment leur mécontentement face à la situation politique actuelle et leur désir d'autonomie.",
        pourcentage: 15,
        cout: 1,
      },
    ],
  "Des mesures strictes de contrôle des médias sont mises en place à Pékin, restreignant la liberté d'expression et la diffusion d'informations critiques envers le gouvernement.":
    [
      {
        actor: 'Mme Li Wei, journaliste indépendante',
        description:
          "En tant que journaliste indépendante basée à Pékin, je peux confirmer que les mesures de contrôle des médias sont de plus en plus strictes. La liberté d'expression est de plus en plus restreinte, ce qui limite la diffusion d'informations critiques envers le gouvernement.",
        pourcentage: 35,
        cout: 3,
      },
      {
        actor: 'M. Zhang Xin, responsable gouvernemental',
        description:
          "Cette information est exagérée. Les mesures de contrôle des médias à Pékin visent à garantir la stabilité sociale et la sécurité nationale. Le gouvernement chinois respecte la liberté d'expression dans les limites de la loi.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'M. Wang Hong, expert en médias',
        description:
          "Les mesures de contrôle des médias à Pékin ont considérablement augmenté ces dernières années. Il existe des restrictions strictes sur la diffusion d'informations critiques envers le gouvernement et des pressions sur les journalistes indépendants.",
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Mme Yang Mei, blogueuse influente',
        description:
          "En tant que blogueuse, je suis confrontée à des difficultés croissantes pour exprimer des opinions critiques envers le gouvernement. Les mesures de contrôle des médias à Pékin ont un impact négatif sur la liberté d'expression en ligne.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'M. Liu Chen, porte-parole gouvernemental',
        description:
          "Il n'y a pas de mesures de contrôle des médias spécifiques à Pékin. Le gouvernement chinois promeut un environnement médiatique ouvert et diversifié tout en protégeant les intérêts nationaux et la sécurité publique.",
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: "Mme Wang Jing, chercheuse en droits de l'homme",
        description:
          "Les mesures de contrôle des médias à Pékin sont préoccupantes sur le plan des droits de l'homme. Elles limitent la liberté d'expression et réduisent la diversité des opinions et des informations accessibles au public.",
        pourcentage: 20,
        cout: 2,
      },
    ],
  'Des manifestations éclatent au Maroc, réclamant des réformes politiques et une plus grande participation citoyenne.':
    [
      {
        actor: 'Ahmed Benali, manifestant',
        description:
          'En tant que manifestant, je peux vous confirmer que des manifestations ont lieu au Maroc pour réclamer des réformes politiques et une plus grande participation citoyenne. Le peuple marocain souhaite une voix plus forte dans la prise de décision politique.',
        pourcentage: 35,
        cout: 3,
      },
      {
        actor: 'Layla Amrani, journaliste indépendante',
        description:
          'En tant que journaliste indépendante, je suis en contact avec des manifestants au Maroc. Les revendications pour des réformes politiques et une participation citoyenne sont réelles et sont au cœur des manifestations en cours.',
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Dr. Hassan Mansouri, expert en sciences politiques',
        description:
          'Les manifestations au Maroc reflètent les aspirations du peuple marocain à des réformes politiques et à une participation citoyenne accrue. Cela met en lumière les défis et les enjeux de la démocratie et de la gouvernance dans le pays.',
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Karim El Mansour, responsable gouvernemental',
        description:
          'Cette information est exagérée. Il y a eu des manifestations sporadiques, mais elles ne représentent pas une demande généralisée de réformes politiques. Le gouvernement marocain encourage déjà la participation citoyenne dans la prise de décision.',
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Fatima Khalid, chercheuse en études sociales',
        description:
          'Les manifestations au Maroc révèlent un désir croissant de la population pour des réformes politiques et une participation citoyenne significative. Les revendications portent sur la transparence, la lutte contre la corruption et une gouvernance plus inclusive.',
        pourcentage: 20,
        cout: 2,
      },
      {
        actor: 'Youssef Rahmane, résident marocain',
        description:
          "En tant que résident marocain, je confirme qu'il y a eu des manifestations au Maroc pour demander des réformes politiques et une plus grande participation citoyenne. Les gens veulent avoir une voix dans les décisions qui les concernent.",
        pourcentage: 15,
        cout: 1,
      },
    ],
  'Des élections présidentielles sont prévues en Algérie, suscitant un vif débat sur la légitimité du processus électoral et la participation des différentes factions politiques.':
    [
      {
        actor: "Karim Boussad, politicien d'opposition",
        description:
          'Les élections présidentielles en Algérie manquent de transparence et de légitimité. Le processus électoral est biaisé en faveur du gouvernement en place, ce qui limite la participation des factions politiques opposées.',
        pourcentage: 30,
        cout: 3,
      },
      {
        actor: 'Nadia Khaled, journaliste indépendante',
        description:
          "Le débat sur la légitimité des élections présidentielles en Algérie est intense. Certains soutiennent que le processus manque de crédibilité, tandis que d'autres soulignent l'importance de la participation pour le développement démocratique du pays.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Ahmed Rahim, membre du parti au pouvoir',
        description:
          'Les élections présidentielles en Algérie respectent les principes démocratiques et offrent une occasion pour le peuple de choisir ses dirigeants. Le gouvernement garantit la transparence et la participation de toutes les factions politiques.',
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Fatima Benyahia, experte en droit constitutionnel',
        description:
          "Les élections présidentielles en Algérie se déroulent conformément à la Constitution et aux lois électorales. Cependant, il existe des préoccupations légitimes concernant l'égalité des chances pour toutes les factions politiques et l'influence du pouvoir en place.",
        pourcentage: 20,
        cout: 2,
      },
      {
        actor: 'Youssef Hamidi, citoyen algérien',
        description:
          "Les élections présidentielles en Algérie suscitent un débat passionné dans le pays. Certains remettent en question la légitimité du processus, tandis que d'autres espèrent que cela ouvrira la voie à des réformes et à un nouveau leadership.",
        pourcentage: 15,
        cout: 1,
      },
      {
        actor: 'Lila Ahmed, universitaire spécialisée en sciences politiques',
        description:
          'Les élections présidentielles en Algérie sont un moment crucial pour la démocratie du pays. Le débat sur la légitimité du processus reflète les préoccupations et les aspirations du peuple algérien à une gouvernance transparente et inclusive.',
        pourcentage: 25,
        cout: 2,
      },
    ],
  "Des manifestations massives éclatent en Égypte, réclamant des réformes politiques et une plus grande liberté d'expression.":
    [
      {
        actor: 'Sarah Ahmed, manifestante',
        description:
          "Je suis moi-même une manifestante en Égypte et je peux vous confirmer que des manifestations massives ont lieu dans tout le pays pour réclamer des réformes politiques et une plus grande liberté d'expression. Le peuple égyptien souhaite une société plus ouverte et inclusive.",
        pourcentage: 40,
        cout: 3,
      },
      {
        actor: 'Hassan Mahmoud, journaliste indépendant',
        description:
          "En tant que journaliste indépendant, je suis témoin des manifestations en Égypte. Les revendications pour des réformes politiques et une plus grande liberté d'expression sont réelles et mobilisent de larges segments de la société égyptienne.",
        pourcentage: 35,
        cout: 2,
      },
      {
        actor: 'Dr. Ahmed Farouk, expert en sciences politiques',
        description:
          "Les manifestations en Égypte témoignent de la volonté du peuple égyptien de réclamer des réformes politiques et une plus grande liberté d'expression. Cela souligne les aspirations démocratiques et les défis auxquels le pays est confronté.",
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Mohamed Salah, membre du gouvernement égyptien',
        description:
          "Cette information est exagérée. Bien qu'il puisse y avoir des manifestations sporadiques, elles ne représentent pas une demande généralisée de réformes politiques. Le gouvernement égyptien encourage déjà la liberté d'expression dans les limites de la loi.",
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Fatima Abdelaziz, chercheuse en sciences sociales',
        description:
          "Les manifestations en Égypte reflètent une demande croissante de réformes politiques et de plus de liberté d'expression. Les revendications portent sur une plus grande ouverture démocratique et une participation citoyenne accrue.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Ahmed Hassan, citoyen égyptien',
        description:
          "En tant que citoyen égyptien, je confirme que des manifestations ont lieu en Égypte pour réclamer des réformes politiques et une plus grande liberté d'expression. Les gens aspirent à un environnement où ils peuvent exprimer librement leurs opinions.",
        pourcentage: 20,
        cout: 1,
      },
    ],
  "Une nouvelle loi sur la protection de l'environnement est adoptée au Sénégal, suscitant des débats sur son efficacité et son application.":
    [
      {
        actor: 'Aminata Diop, militante écologiste',
        description:
          "La nouvelle loi sur la protection de l'environnement au Sénégal est une avancée importante. Cependant, son efficacité dépendra de la volonté politique de l'appliquer et des ressources disponibles pour sa mise en œuvre.",
        pourcentage: 35,
        cout: 2,
      },
      {
        actor: "Moussa Fall, avocat spécialisé en droit de l'environnement",
        description:
          "La nouvelle loi sur la protection de l'environnement au Sénégal est un pas dans la bonne direction, mais elle comporte des lacunes qui pourraient entraver son application effective. Des mesures supplémentaires doivent être prises pour garantir son efficacité.",
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Fatou Sow, membre du gouvernement sénégalais',
        description:
          "La nouvelle loi sur la protection de l'environnement est une preuve de l'engagement du Sénégal envers la préservation de son écosystème. Des mesures strictes seront prises pour assurer son application et garantir la durabilité environnementale.",
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Abdoulaye Cissé, chercheur en sciences environnementales',
        description:
          "La nouvelle loi sur la protection de l'environnement est un pas positif, mais son efficacité dépendra de la sensibilisation, de l'éducation et de la participation active de la société civile. Il est important d'impliquer toutes les parties prenantes pour atteindre les objectifs fixés.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Khadim Diop, citoyen sénégalais',
        description:
          "La nouvelle loi sur la protection de l'environnement est une étape encourageante. J'espère qu'elle sera mise en œuvre de manière rigoureuse et qu'elle entraînera un réel changement en faveur de la préservation de notre environnement.",
        pourcentage: 20,
        cout: 1,
      },
      {
        actor: "Mamadou Ndiaye, entrepreneur engagé dans l'économie verte",
        description:
          "La nouvelle loi sur la protection de l'environnement offre des opportunités pour promouvoir l'économie verte au Sénégal. Son application efficace encouragera l'innovation et la durabilité dans nos activités économiques.",
        pourcentage: 25,
        cout: 2,
      },
    ],
  'Des affrontements violents éclatent dans le nord du Mali, mettant en péril les efforts de stabilité et de paix dans la région.':
    [
      {
        actor: 'Amadou Traoré, habitant du nord du Mali',
        description:
          "Les affrontements violents dans le nord du Mali sont une réalité inquiétante. Ils sapent les efforts de stabilité et de paix que nous avons entrepris dans la région. Il est essentiel de trouver des solutions durables pour prévenir de tels incidents à l'avenir.",
        pourcentage: 40,
        cout: 3,
      },
      {
        actor:
          'Fatoumata Diallo, chercheuse spécialisée dans les conflits au Mali',
        description:
          'Les affrontements violents dans le nord du Mali sont un rappel tragique des défis persistants auxquels la région est confrontée en matière de sécurité. Les efforts de stabilité et de paix doivent être renforcés pour prévenir de nouveaux épisodes de violence.',
        pourcentage: 35,
        cout: 2,
      },
      {
        actor: 'Moussa Keïta, membre du gouvernement malien',
        description:
          "Ces informations sont exagérées. Bien qu'il puisse y avoir des incidents sporadiques, ils ne remettent pas en cause les efforts globaux de stabilité et de paix que nous déployons dans le nord du Mali. Nous restons engagés à assurer la sécurité de la région.",
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Aïssatou Diarra, journaliste spécialisée sur le Mali',
        description:
          'Les affrontements violents dans le nord du Mali sont un rappel des tensions persistantes et des conflits armés dans la région. Il est crucial de rechercher des solutions politiques et de promouvoir le dialogue pour restaurer la stabilité et la paix.',
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Ibrahim Konaté, expert en résolution des conflits',
        description:
          "Les affrontements violents dans le nord du Mali soulignent l'importance de la consolidation de la paix et de la résolution des conflits. Les efforts doivent être redoublés pour promouvoir la réconciliation, l'inclusion et la gouvernance efficace dans la région.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Mariam Traoré, habitante du sud du Mali',
        description:
          'Les affrontements violents dans le nord du Mali sont préoccupants et ont un impact sur la stabilité générale du pays. Il est essentiel que les autorités prennent des mesures pour prévenir de tels incidents et assurer la sécurité de tous les Maliens.',
        pourcentage: 20,
        cout: 1,
      },
    ],
  "Des manifestations éclatent en Côte d'Ivoire suite à des tensions politiques, mettant en péril la stabilité du pays.":
    [
      {
        actor: "Aïssata Koné, habitante d'Abidjan",
        description:
          "Les manifestations en Côte d'Ivoire sont le résultat de tensions politiques profondes. La population exprime son mécontentement face à certains problèmes, mais il est important de trouver des solutions pacifiques pour préserver la stabilité du pays.",
        pourcentage: 40,
        cout: 3,
      },
      {
        actor: 'Bakary Touré, analyste politique',
        description:
          "Les manifestations en Côte d'Ivoire sont un signal alarmant de l'agitation politique actuelle. Il est crucial que toutes les parties prenantes s'engagent dans un dialogue constructif pour résoudre les tensions et préserver la stabilité du pays.",
        pourcentage: 35,
        cout: 2,
      },
      {
        actor: 'Koffi Kouassi, membre du gouvernement ivoirien',
        description:
          "Il convient de souligner que les informations sur les manifestations en Côte d'Ivoire sont exagérées. Bien qu'il puisse y avoir des rassemblements sporadiques, ils ne menacent pas la stabilité globale du pays. Nous travaillons à maintenir la paix et la sécurité.",
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Mariam Traoré, journaliste ivoirienne',
        description:
          "Les manifestations en Côte d'Ivoire reflètent les tensions politiques et les divergences d'opinions au sein du pays. Il est essentiel de promouvoir un dialogue inclusif et de trouver des solutions pacifiques pour éviter une escalade des tensions et maintenir la stabilité.",
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Aboubacar Diop, expert en résolution des conflits',
        description:
          "Les manifestations en Côte d'Ivoire soulignent la nécessité de traiter les problèmes politiques de manière pacifique et inclusive. Un engagement sincère au dialogue et à la réconciliation est essentiel pour préserver la stabilité et l'unité du pays.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Fanta Coulibaly, étudiante à Abidjan',
        description:
          "Les manifestations en Côte d'Ivoire montrent que la jeunesse est mobilisée et désireuse de participer au processus politique. Il est important d'écouter les préoccupations des jeunes générations et de créer des espaces de dialogue pour construire un avenir pacifique et prospère.",
        pourcentage: 20,
        cout: 1,
      },
    ],
  "Des tensions politiques s'intensifient au Cameroun, suscitant des préoccupations quant à la stabilité du pays.":
    [
      {
        actor: "Jean-Pierre Mbeki, militant des droits de l'homme",
        description:
          "Les tensions politiques au Cameroun sont alarmantes et doivent être résolues de manière pacifique. Il est crucial de garantir le respect des droits de l'homme, la liberté d'expression et de favoriser un dialogue inclusif pour préserver la stabilité du pays.",
        pourcentage: 40,
        cout: 3,
      },
      {
        actor: 'Julie Nkoudou, analyste politique',
        description:
          "Les tensions politiques au Cameroun sont un signal préoccupant pour la stabilité du pays. Il est impératif que toutes les parties prenantes s'engagent dans un dialogue constructif et respectueux pour résoudre les différends et éviter une escalade des tensions.",
        pourcentage: 35,
        cout: 2,
      },
      {
        actor: 'Pierre Ndiaye, membre du gouvernement camerounais',
        description:
          'Les informations sur les tensions politiques sont exagérées. Le Cameroun reste un pays stable et engagé envers la paix. Nous encourageons le dialogue et la résolution pacifique des différends pour continuer à avancer ensemble.',
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Alice Fofana, journaliste camerounaise',
        description:
          "Les tensions politiques au Cameroun soulèvent des inquiétudes quant à la démocratie et à la gouvernance. Il est crucial que les autorités écouter les préoccupations du peuple, promouvoir la transparence et l'inclusivité pour préserver la stabilité à long terme.",
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Samuel Kamga, expert en résolution des conflits',
        description:
          "Les tensions politiques au Cameroun nécessitent une attention immédiate. Il est essentiel de promouvoir la justice, l'équité et d'encourager un dialogue ouvert pour résoudre les différends et éviter l'escalade vers une crise plus profonde.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Sylvie Nkoum, citoyenne camerounaise',
        description:
          'Les tensions politiques au Cameroun sont préoccupantes et suscitent des craintes quant à la stabilité du pays. Il est essentiel que les dirigeants travaillent ensemble pour résoudre les différends et répondre aux aspirations du peuple camerounais.',
        pourcentage: 20,
        cout: 1,
      },
    ],
  'Des attaques terroristes frappent le Niger, mettant en péril la sécurité et la stabilité du pays.':
    [
      {
        actor: 'Ibrahim Sani, habitant de Niamey',
        description:
          'Les attaques terroristes au Niger sont une menace sérieuse pour la sécurité et la stabilité du pays. Il est essentiel de renforcer les mesures de sécurité et de coopérer avec la communauté internationale pour lutter efficacement contre le terrorisme.',
        pourcentage: 40,
        cout: 3,
      },
      {
        actor: 'Amina Issa, analyste en sécurité',
        description:
          'Les attaques terroristes récentes au Niger sont préoccupantes et soulignent les défis persistants auxquels le pays est confronté en matière de sécurité. Il est crucial de renforcer les capacités de lutte contre le terrorisme et de promouvoir la coopération régionale pour préserver la stabilité.',
        pourcentage: 35,
        cout: 2,
      },
      {
        actor: 'Mahamadou Tandja, membre du gouvernement nigérien',
        description:
          'Il est important de noter que les informations sur les attaques terroristes sont exagérées. Le Niger reste engagé dans la lutte contre le terrorisme et prend des mesures pour assurer la sécurité de la population. Nous travaillons avec nos partenaires pour préserver la stabilité.',
        pourcentage: -10,
        cout: 3,
      },
      {
        actor: 'Hassane Diallo, journaliste nigérien',
        description:
          'Les attaques terroristes au Niger sont une triste réalité qui met en danger la vie des populations et la stabilité du pays. Il est essentiel de renforcer les efforts de sécurité, de promouvoir la paix et de soutenir les communautés touchées par ces attaques.',
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Aïcha Salifou, experte en conflits et résolution',
        description:
          "Les attaques terroristes au Niger soulignent la nécessité d'une approche globale pour lutter contre le terrorisme. Il est crucial de combiner des mesures de sécurité efficaces avec des initiatives de développement et de renforcement de la résilience communautaire pour prévenir l'extrémisme violent.",
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Moussa Issoufou, citoyen nigérien',
        description:
          "Les attaques terroristes au Niger sont un rappel tragique de la réalité sécuritaire à laquelle le pays est confronté. Il est impératif de renforcer les efforts de sécurité, mais aussi de s'attaquer aux causes profondes du terrorisme pour garantir un avenir pacifique pour tous les Nigériens.",
        pourcentage: 20,
        cout: 1,
      },
    ],
  'Des manifestations éclatent au Soudan, réclamant des réformes politiques et économiques.':
    [
      {
        actor: 'Ali Ibrahim, manifestant soudanais',
        description:
          'Les manifestations au Soudan sont un cri du peuple pour des réformes politiques et économiques. Nous demandons plus de transparence, de démocratie et de mesures concrètes pour améliorer les conditions de vie de tous les Soudanais.',
        pourcentage: 40,
        cout: 3,
      },
      {
        actor: 'Fatima Ahmed, analyste politique soudanaise',
        description:
          'Les manifestations au Soudan reflètent les préoccupations profondes de la population envers la situation politique et économique du pays. Il est crucial que le gouvernement écoute les demandes du peuple et engage un dialogue inclusif pour répondre à ces préoccupations.',
        pourcentage: 35,
        cout: 2,
      },
      {
        actor: 'Mustafa Omar, porte-parole du gouvernement soudanais',
        description:
          "Nous reconnaissons les manifestations en cours au Soudan et sommes ouverts au dialogue. Le gouvernement s'engage à répondre aux préoccupations de la population et à mettre en œuvre des réformes politiques et économiques pour améliorer la situation du pays.",
        pourcentage: 20,
        cout: 2,
      },
      {
        actor: 'Hanan Mohamed, journaliste soudanaise',
        description:
          "Les manifestations au Soudan sont une expression de frustration face aux défis politiques et économiques persistants. Il est essentiel que toutes les parties prenantes s'engagent dans un dialogue constructif pour trouver des solutions durables et améliorer la situation du pays.",
        pourcentage: 30,
        cout: 2,
      },
      {
        actor: 'Abdelaziz Hassan, expert économique soudanais',
        description:
          'Les manifestations au Soudan mettent en évidence les difficultés économiques auxquelles le pays est confronté. Il est essentiel de mettre en œuvre des réformes économiques transparentes et équitables pour stimuler la croissance, créer des emplois et améliorer les conditions de vie.',
        pourcentage: 25,
        cout: 2,
      },
      {
        actor: 'Amina Ali, citoyenne soudanaise',
        description:
          "Les manifestations au Soudan sont le résultat de l'espoir d'un avenir meilleur pour notre pays. Nous demandons des réformes politiques et économiques pour assurer une gouvernance responsable, la justice sociale et des opportunités pour tous les Soudanais.",
        pourcentage: 20,
        cout: 1,
      },
    ],
  "Une nouvelle découverte archéologique en Éthiopie révèle des vestiges anciens d'une civilisation perdue depuis des siècles.":
    [
      {
        actor: 'Dr. Alemu Desta, archéologue éthiopien renommé',
        description:
          "La découverte archéologique récente est d'une importance majeure, elle indique l'existence d'une civilisation perdue depuis des siècles en Éthiopie. Les vestiges révèlent des aspects fascinants de leur culture, de leur architecture et de leur mode de vie.",
        pourcentage: 40,
        cout: 3,
      },
      {
        actor:
          "Abeba Tesfaye, guide touristique spécialisé dans l'histoire éthiopienne",
        description:
          "Cette découverte archéologique est une révélation pour l'Éthiopie et son histoire. Elle offre de nouvelles perspectives sur les civilisations antiques qui ont prospéré dans la région, attirant l'intérêt des passionnés d'histoire et des touristes du monde entier.",
        pourcentage: 35,
        cout: 2,
      },
      {
        actor: 'Dr. Ahmed Mohammed, historien éthiopien',
        description:
          "La découverte de vestiges anciens en Éthiopie est une preuve tangible de l'histoire riche et complexe de notre pays. Elle nous permet de mieux comprendre les civilisations qui ont précédé notre époque et de reconstruire notre passé avec de nouveaux éléments.",
        pourcentage: 45,
        cout: 2,
      },
      {
        actor: 'Hirut Bekele, résidente locale de la région de la découverte',
        description:
          "La découverte des vestiges anciens a suscité une grande excitation parmi les habitants de la région. Cela renforce notre fierté en tant que gardiens de l'histoire et stimule le tourisme, créant ainsi de nouvelles opportunités économiques pour notre communauté.",
        pourcentage: 25,
        cout: 1,
      },
      {
        actor: 'Dr. Tadesse Hailu, chercheur éthiopien en anthropologie',
        description:
          "La découverte de cette civilisation perdue en Éthiopie est une avancée majeure dans notre compréhension de l'histoire humaine. Les fouilles archéologiques continueront à nous révéler des détails précieux sur cette ancienne société et son héritage culturel.",
        pourcentage: 40,
        cout: 2,
      },
      {
        actor: 'Assefa Wondimu, étudiant en archéologie',
        description:
          "Pour nous, les jeunes étudiants en archéologie, cette découverte est une source d'inspiration et de motivation pour poursuivre nos recherches et percer les mystères de l'histoire de notre pays. Cela ouvre de nouvelles perspectives passionnantes dans le domaine de l'archéologie en Éthiopie ",
        pourcentage: 15,
        cout: 2,
      },
    ],
  'Le Kenya accueille une conférence internationale sur le développement durable et les énergies renouvelables.':
    [
      {
        actor: 'Dr. Jane Muthoni, experte en énergie renouvelable',
        description:
          "La conférence au Kenya est une opportunité majeure de promouvoir les énergies renouvelables et d'échanger les meilleures pratiques en matière de développement durable. Cela renforce notre engagement envers un avenir plus propre et durable.",
        pourcentage: 45,
        cout: 3,
      },
      {
        actor: 'John Kamau, représentant gouvernemental',
        description:
          'Le choix du Kenya pour accueillir cette conférence témoigne de notre engagement envers la transition énergétique et le développement durable. Cela renforce notre position en tant que leader régional dans le domaine des énergies renouvelables.',
        pourcentage: 40,
        cout: 2,
      },
      {
        actor: 'Dr. Amina Wambui, écologiste kényane',
        description:
          "La conférence au Kenya est une occasion de sensibiliser et de mobiliser la communauté internationale sur les défis environnementaux auxquels notre pays fait face. C'est une étape importante vers un avenir plus durable pour tous.",
        pourcentage: 35,
        cout: 2,
      },
      {
        actor:
          'Alice Kariuki, entrepreneure spécialisée dans les énergies renouvelables',
        description:
          "La conférence internationale au Kenya offre de nouvelles opportunités commerciales dans le secteur des énergies renouvelables. Cela stimule l'innovation, crée des emplois et favorise la croissance économique de notre pays.",
        pourcentage: 30,
        cout: 1,
      },
      {
        actor: 'Dr. Patrick Mwangi, chercheur en développement durable',
        description:
          "Cette conférence est une plateforme importante pour partager les connaissances et les expériences en matière de développement durable. Cela renforce la coopération internationale et favorise l'adoption de pratiques durables à travers le monde.",
        pourcentage: 40,
        cout: 2,
      },
      {
        actor: 'Mary Owino, étudiante en sciences environnementales',
        description:
          "La conférence au Kenya est une occasion unique pour les jeunes comme moi d'apprendre, de s'engager et de contribuer aux discussions sur le développement durable. Cela nous inspire à agir en faveur d'un avenir plus vert et plus équitable.",
        pourcentage: 35,
        cout: 1,
      },
    ],
  'La République du Congo lance un projet de reforestation massive pour lutter contre la déforestation et préserver la biodiversité.':
    [
      {
        actor: 'Dr. André Mbemba, expert en environnement',
        description:
          "Le projet de reforestation en République du Congo est une initiative essentielle pour restaurer les écosystèmes fragilisés, préserver la biodiversité et atténuer les effets du changement climatique. C'est une étape importante vers un avenir plus durable.",
        pourcentage: 50,
        cout: 3,
      },
      {
        actor: 'Jeanne Nzaba, représentante du gouvernement',
        description:
          "Le lancement du projet de reforestation montre l'engagement fort de la République du Congo envers la protection de notre environnement. Cela créera des emplois locaux, améliorera la qualité de l'air et renforcera la résilience de nos écosystèmes.",
        pourcentage: 45,
        cout: 2,
      },
      {
        actor: 'Dr. Marcel Mvouba, écologue congolais',
        description:
          "La reforestation massive en République du Congo contribuera à restaurer les habitats naturels, protéger les espèces en voie de disparition et maintenir l'équilibre des écosystèmes. C'est une mesure cruciale pour préserver notre riche biodiversité.",
        pourcentage: 55,
        cout: 3,
      },
      {
        actor: "Alice Bemba, membre d'une association environnementale",
        description:
          'Le projet de reforestation en République du Congo est une excellente nouvelle pour la préservation de nos forêts et de notre biodiversité. Il est important que la communauté internationale soutienne cette initiative pour maximiser son impact positif.',
        pourcentage: 40,
        cout: 2,
      },
      {
        actor: 'Dr. Emmanuel Samba, chercheur en écologie tropicale',
        description:
          'La reforestation massive permettra de régénérer les écosystèmes dégradés et de renforcer la résistance face aux défis environnementaux. Cela contribuera également à la séquestration du carbone, soutenant ainsi les efforts mondiaux de lutte contre le changement climatique.',
        pourcentage: 50,
        cout: 2,
      },
      {
        actor: "Sophie Nkosi, étudiante en sciences de l'environnement",
        description:
          "Le projet de reforestation en République du Congo est une opportunité pour les jeunes congolais comme moi de s'impliquer activement dans la conservation de notre patrimoine naturel. Cela nous donne de l'espoir pour un avenir plus vert et plus durable.",
        pourcentage: 35,
        cout: 1,
      },
    ],
  "L'Angola lance un vaste programme d'investissement dans les énergies renouvelables pour réduire sa dépendance aux combustibles fossiles.":
    [
      {
        actor: 'Dr. Sofia Santos, experte en énergies renouvelables',
        description:
          "Le programme d'investissement dans les énergies renouvelables en Angola est une initiative stratégique visant à diversifier notre mix énergétique, réduire les émissions de gaz à effet de serre et stimuler le développement économique durable.",
        pourcentage: 45,
        cout: 3,
      },
      {
        actor: 'Carlos Mendes, représentant du gouvernement',
        description:
          "Le lancement du programme d'investissement témoigne de l'engagement de l'Angola envers la transition énergétique. Cela créera de nouvelles opportunités d'emplois, renforcera notre sécurité énergétique et contribuera à la préservation de l'environnement.",
        pourcentage: 40,
        cout: 2,
      },
      {
        actor: 'Dr. Maria da Silva, spécialiste en développement durable',
        description:
          "Le programme d'investissement dans les énergies renouvelables en Angola est une étape majeure vers une économie plus verte et résiliente. Cela favorisera l'accès à une énergie propre, durable et abordable pour tous les Angolais.",
        pourcentage: 35,
        cout: 2,
      },
      {
        actor:
          'João Costa, entrepreneur dans le secteur des énergies renouvelables',
        description:
          "Le programme d'investissement offre d'importantes opportunités commerciales dans le secteur des énergies renouvelables en Angola. Cela stimulera l'innovation, créera des emplois locaux et contribuera à la croissance économique du pays.",
        pourcentage: 30,
        cout: 1,
      },
      {
        actor: 'Dr. Fernando Santos, chercheur en énergie',
        description:
          "L'Angola dispose d'un énorme potentiel pour les énergies renouvelables, notamment l'énergie solaire et éolienne. Le programme d'investissement favorisera le déploiement de projets durables et contribuera à l'autonomie énergétique du pays.",
        pourcentage: 40,
        cout: 2,
      },
      {
        actor: "Laura Mendonça, étudiante en sciences de l'environnement",
        description:
          "Le programme d'investissement dans les énergies renouvelables en Angola est une excellente nouvelle pour la jeunesse angolaise comme moi. Cela nous inspire à agir en faveur de la durabilité et nous donne confiance en un avenir plus propre et plus responsable.",
        pourcentage: 35,
        cout: 1,
      },
    ],
  "L'Afrique du Sud remporte le titre de meilleure destination touristique de l'année, attirant des visiteurs du monde entier avec sa diversité culturelle, ses paysages magnifiques et sa faune emblématique.":
    [
      {
        actor: 'Dr. Nomvula Mkhize, experte en tourisme',
        description:
          "L'Afrique du Sud mérite pleinement ce titre grâce à son offre touristique exceptionnelle. De la célèbre Route des Jardins aux safaris dans le parc Kruger, en passant par la richesse culturelle du township de Soweto, notre pays offre une expérience inoubliable à chaque visiteur.",
        pourcentage: 50,
        cout: 3,
      },
      {
        actor: 'Thabo Nkosi, guide touristique',
        description:
          "L'Afrique du Sud est une destination unique qui séduit les voyageurs du monde entier. Notre pays offre une diversité incroyable, des plages spectaculaires de Cape Town aux majestueuses montagnes du Drakensberg. Sans oublier les safaris où l'on peut observer les fameux Big Five.",
        pourcentage: 45,
        cout: 2,
      },
      {
        actor: 'Dr. Zanele Dlamini, chercheuse en tourisme durable',
        description:
          "Le titre de meilleure destination touristique témoigne des efforts de l'Afrique du Sud pour promouvoir un tourisme durable. Notre pays met en avant la préservation de la nature, le respect des communautés locales et la valorisation de la culture africaine.",
        pourcentage: 50,
        cout: 3,
      },
      {
        actor: "Mpho Sehume, propriétaire d'un lodge de safari",
        description:
          "L'Afrique du Sud est le joyau de l'Afrique en matière de tourisme. Les voyageurs affluent pour découvrir nos réserves naturelles, observer les animaux sauvages et profiter de l'hospitalité chaleureuse de notre peuple. C'est une reconnaissance bien méritée pour notre pays.",
        pourcentage: 40,
        cout: 2,
      },
      {
        actor: 'Dr. Sipho Nxumalo, anthropologue',
        description:
          "L'Afrique du Sud est une destination touristique exceptionnelle en raison de sa diversité culturelle. Des townships animés aux musées historiques, en passant par les festivals de danse traditionnelle, notre pays offre une immersion unique dans la richesse de notre patrimoine.",
        pourcentage: 45,
        cout: 2,
      },
      {
        actor: 'Nadia Patel, étudiante en tourisme',
        description:
          "Le titre de meilleure destination touristique est une fierté pour nous, les jeunes sud-africains. Cela montre que notre pays est apprécié pour sa offre touristique exceptionnelle et son potentiel à attirer des visiteurs du monde entier. C'est également une opportunité pour promouvoir le développement économique et créer des emplois dans le secteur du tourisme en Afrique du Sud.",
        pourcentage: -35,
        cout: 1,
      },
    ],
  "Une nouvelle espèce de lémurien découverte à Madagascar, suscitant l'enthousiasme des chercheurs et renforçant l'importance de la conservation de la biodiversité sur l'île.":
    [
      {
        actor: 'Dr. Jean-Pierre Ravelojaona, primatologue',
        description:
          "La découverte de cette nouvelle espèce de lémurien est une avancée majeure pour la science. Cela témoigne de la richesse incroyable de la biodiversité à Madagascar et souligne l'importance de préserver ces habitats uniques.",
        pourcentage: 50,
        cout: 3,
      },
      {
        actor: 'Dr. Sophie Dubois, spécialiste en conservation',
        description:
          "La découverte de cette nouvelle espèce de lémurien met en évidence l'urgence de protéger les écosystèmes malgaches. La déforestation et la perte d'habitat menacent gravement la faune et la flore uniques de Madagascar.",
        pourcentage: 50,
        cout: 3,
      },
      {
        actor: 'Andry Rakotondravony, guide naturaliste',
        description:
          "Les lémuriens sont les ambassadeurs emblématiques de Madagascar. Chaque nouvelle découverte renforce l'attrait de notre pays en tant que destination pour les amateurs de nature et d'écotourisme.",
        pourcentage: 40,
        cout: 2,
      },
      {
        actor: 'Dr. Marie-Louise Rasoanantenaina, chercheuse en primatologie',
        description:
          "La découverte de cette nouvelle espèce de lémurien montre l'importance des études de terrain et de la recherche scientifique à Madagascar. C'est une preuve supplémentaire de la nécessité de protéger nos ressources naturelles.",
        pourcentage: 45,
        cout: 2,
      },
      {
        actor: "Mireille Andriamalala, responsable d'une réserve naturelle",
        description:
          "Cette découverte renforce notre engagement en faveur de la conservation de la biodiversité à Madagascar. Nous devons redoubler d'efforts pour préserver les habitats des lémuriens et d'autres espèces uniques présentes sur l'île.",
        pourcentage: 50,
        cout: 2,
      },
      {
        actor: 'Tiana Randrianarisoa, étudiante en biologie',
        description:
          "La découverte de cette nouvelle espèce de lémurien est passionnante pour la communauté scientifique et pour nous, les jeunes malgaches. Cela nous rappelle l'incroyable diversité naturelle de notre pays et nous inspire à poursuivre des études dans le domaine de la conservation.",
        pourcentage: -35,
        cout: 1,
      },
    ],
  "La Tanzanie annonce la découverte d'une cité perdue datant de l'ère des pharaons égyptiens, révélant des liens historiques inattendus entre les deux régions.":
    [
      {
        actor: 'Dr. Ahmed Mohamed, archéologue tanzanien',
        description:
          "Cette annonce est totalement infondée. Aucune preuve crédible ne soutient l'existence d'une cité perdue datant de l'ère des pharaons égyptiens en Tanzanie. C'est une pure invention.",
        pourcentage: -30,
        cout: 2,
      },
      {
        actor: 'Dr. Fatima Hassan, égyptologue',
        description:
          "En tant qu'égyptologue spécialisée dans cette période historique, je peux confirmer qu'il n'y a aucun lien historique entre la Tanzanie et l'ère des pharaons égyptiens. Cette déclaration est complètement fausse.",
        pourcentage: -25,
        cout: 2,
      },
      {
        actor: 'John Magufuli, porte-parole du gouvernement tanzanien',
        description:
          "Cette information est un canular malveillant. Le gouvernement tanzanien n'a fait aucune annonce concernant la découverte d'une cité perdue liée à l'Égypte ancienne. Il est important de vérifier les sources avant de propager de telles rumeurs.",
        pourcentage: -30,
        cout: 1,
      },
      {
        actor: 'Jane Mwema, guide touristique tanzanienne',
        description:
          "En tant que guide touristique expérimentée, je peux vous assurer qu'il n'y a aucune cité perdue de l'ère des pharaons égyptiens en Tanzanie. Les principales attractions touristiques du pays sont ses parcs nationaux et sa faune sauvage.",
        pourcentage: -15,
        cout: 1,
      },
      {
        actor: 'Dr. Mohamed Ali, historien',
        description:
          "Je n'ai trouvé aucune trace d'une telle cité perdue dans mes recherches historiques. Cette information est une fabrication et ne correspond à aucune réalité historique connue.",
        pourcentage: -20,
        cout: 1,
      },
      {
        actor: 'Sarah Juma, archéologue amateur',
        description:
          "Je suis passionnée d'archéologie et je n'ai jamais entendu parler d'une telle découverte en Tanzanie. Il est important de vérifier les sources et de ne pas se laisser tromper par de fausses nouvelles sensationnalistes.",
        pourcentage: -10,
        cout: 1,
      },
    ],
  "La Zambie annonce une nouvelle politique économique qui stimulera la croissance et réduira le taux de chômage de moitié d'ici deux ans.":
    [
      {
        actor: 'Dr. Mwamba, économiste zambien',
        description:
          'Cette nouvelle politique économique est prometteuse et pourrait avoir un impact positif sur la croissance économique. Cependant, il faudra surveiller de près sa mise en œuvre pour évaluer son efficacité réelle.',
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: "Mr. Chanda, homme d'affaires zambien",
        description:
          "En tant qu'homme d'affaires, je suis optimiste quant à cette nouvelle politique économique. Elle offre de nouvelles opportunités pour les investissements et la création d'emplois, ce qui pourrait contribuer à réduire le taux de chômage.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'Mme Ngoma, travailleuse sociale',
        description:
          "Bien que cette nouvelle politique économique puisse potentiellement réduire le taux de chômage, il est important de veiller à ce qu'elle ne laisse pas de côté les populations les plus vulnérables. Des mesures doivent être prises pour garantir une répartition équitable des opportunités économiques.",
        pourcentage: +5,
        cout: 1,
      },
      {
        actor: 'Dr. Musonda, économiste indépendant',
        description:
          'Cette annonce politique suscite des doutes quant à sa faisabilité et à sa capacité à atteindre les objectifs fixés. Les politiques économiques ne sont pas des solutions miracles et leur succès dépend de nombreux facteurs.',
        pourcentage: -5,
        cout: 1,
      },
      {
        actor: 'Mme Banda, syndicaliste',
        description:
          "Il est important de rester vigilant face à de telles annonces politiques. Par le passé, certaines promesses similaires n'ont pas été tenues, et le chômage a continué d'augmenter. Nous devons nous assurer que des mesures concrètes sont mises en place pour soutenir les travailleurs.",
        pourcentage: -10,
        cout: 1,
      },
      {
        actor: 'M. Sichinga, agriculteur',
        description:
          "En tant qu'agriculteur, je suis préoccupé par l'impact de cette politique économique sur le secteur agricole, qui est crucial pour l'économie zambienne. J'espère que des mesures seront prises pour soutenir et renforcer ce secteur vital.",
        pourcentage: 0,
        cout: 1,
      },
    ],
  "La Tunisie annonce une réforme du système éducatif pour améliorer la qualité de l'enseignement et réduire le taux d'analphabétisme.":
    [
      {
        actor: 'Mme Ben Ali, enseignante',
        description:
          "Cette réforme est une étape importante pour notre système éducatif. Elle vise à moderniser les méthodes d'enseignement et à fournir aux étudiants les compétences nécessaires pour réussir dans le monde d'aujourd'hui.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: "M. Khaldi, parent d'élève",
        description:
          "En tant que parent, je suis ravi de cette réforme éducative. J'espère qu'elle permettra une meilleure préparation des étudiants à l'avenir et une réduction du taux d'analphabétisme.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Dr. Khaled, chercheur en éducation',
        description:
          "Il est encourageant de voir des efforts pour améliorer le système éducatif en Tunisie. Cependant, il sera essentiel de mettre en place des mécanismes de suivi et d'évaluation pour mesurer l'impact réel de cette réforme sur l'apprentissage des élèves.",
        pourcentage: +10,
        cout: 1,
      },
      {
        actor: 'Mme Mabrouk, syndicaliste enseignant',
        description:
          'Cette réforme est une occasion de renforcer le système éducatif, mais il est crucial de prendre en compte les besoins et les préoccupations des enseignants. Des mesures doivent être prises pour améliorer les conditions de travail et la formation des enseignants.',
        pourcentage: +5,
        cout: 1,
      },
      {
        actor: 'M. Bouazizi, étudiant',
        description:
          "Nous espérons que cette réforme apportera des changements concrets et améliorera la qualité de l'enseignement. Il est important que les étudiants soient impliqués dans le processus et que leurs voix soient entendues.",
        pourcentage: -5,
        cout: 1,
      },
      {
        actor: 'Mme Amara, ancienne enseignante',
        description:
          "J'ai des réserves quant à cette réforme. Par le passé, nous avons vu des réformes éducatives qui n'ont pas abouti aux résultats escomptés. Il faudra un suivi attentif pour évaluer l'efficacité de cette réforme.",
        pourcentage: -10,
        cout: 1,
      },
    ],
  "Le gouvernement canadien annonce la création d'un nouveau programme de subventions pour les start-ups technologiques à Ottawa.":
    [
      {
        actor: 'M. Johnson, entrepreneur',
        description:
          "En tant qu'entrepreneur dans le secteur des start-ups à Ottawa, je n'ai pas entendu parler d'un tel programme de subventions.",
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'Mme Chen, employée gouvernementale',
        description:
          "Aucune information n'a été communiquée au sein du gouvernement canadien concernant un programme de subventions pour les start-ups à Ottawa.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'M. Tremblay, investisseur',
        description:
          "J'ai récemment participé à une réunion d'investisseurs à Ottawa, et aucune mention n'a été faite d'un nouveau programme de subventions pour les start-ups technologiques.",
        pourcentage: -8,
        cout: 1,
      },
      {
        actor: 'Mme Dubois, entrepreneure',
        description:
          "Je suis au courant de ce nouveau programme de subventions et j'ai déjà soumis ma demande. Cela va vraiment aider les start-ups technologiques à Ottawa.",
        pourcentage: 8,
        cout: 3,
      },
      {
        actor: 'M. Roy, chercheur',
        description:
          "En tant que chercheur spécialisé dans l'innovation technologique, je n'ai pas été informé de l'existence d'un tel programme de subventions à Ottawa.",
        pourcentage: -12,
        cout: 1,
      },
      {
        actor: 'Mme Gagnon, journaliste',
        description:
          "J'ai mené des recherches approfondies sur le sujet et je confirme que le gouvernement canadien n'a annoncé aucun nouveau programme de subventions pour les start-ups technologiques à Ottawa.",
        pourcentage: -20,
        cout: 3,
      },
    ],
  "Une équipe de chercheurs de l'Université de Vancouver affirme avoir découvert un moyen révolutionnaire de produire de l'énergie propre à partir de déchets organiques.":
    [
      {
        actor: 'Dr. Lee, professeur en sciences environnementales',
        description:
          "En tant que chercheur dans le domaine de l'énergie propre, je peux confirmer que notre équipe a fait d'importants progrès dans la production d'énergie à partir de déchets organiques. Cependant, il reste encore des défis à relever avant une application à grande échelle.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'M. Johnson, ingénieur en énergie',
        description:
          "J'ai entendu parler des recherches en cours à l'Université de Vancouver, mais il est encore trop tôt pour affirmer qu'un moyen révolutionnaire de produire de l'énergie propre à partir de déchets organiques a été découvert.",
        pourcentage: -5,
        cout: 1,
      },
      {
        actor: 'Mme Chen, étudiante en sciences environnementales',
        description:
          "Je suis impliquée dans le projet de recherche et je peux confirmer que des avancées prometteuses ont été réalisées dans la production d'énergie à partir de déchets organiques.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'M. Tremblay, expert en énergies renouvelables',
        description:
          "Je suis sceptique quant aux affirmations de l'équipe de chercheurs de l'Université de Vancouver. Les technologies de production d'énergie à partir de déchets organiques existent déjà, mais elles ont leurs limites.",
        pourcentage: -8,
        cout: 1,
      },
      {
        actor: 'M. Roy, entrepreneur en énergie verte',
        description:
          "J'ai eu l'occasion de discuter avec certains membres de l'équipe de recherche et je suis convaincu que leur découverte pourrait révolutionner le domaine de l'énergie propre.",
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'Mme Gagnon, journaliste scientifique',
        description:
          "D'après mes investigations, il y a effectivement des recherches en cours à l'Université de Vancouver sur la production d'énergie propre à partir de déchets organiques, mais il est encore trop tôt pour parler de révolution.",
        pourcentage: +5,
        cout: 1,
      },
    ],
  'Une entreprise basée à Los Angeles prétend avoir développé une voiture électrique révolutionnaire capable de parcourir 1000 kilomètres avec une seule charge.':
    [
      {
        actor: 'Dr. Johnson, ingénieur automobile',
        description:
          "En tant qu'ingénieur automobile, je suis au courant des dernières avancées de l'entreprise de Los Angeles. Leur nouvelle voiture électrique est très prometteuse et pourrait révolutionner l'industrie.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: "Mme Smith, propriétaire d'une voiture électrique",
        description:
          "J'ai eu l'occasion de tester le prototype de cette voiture électrique et j'ai été impressionnée par son autonomie. Je peux confirmer qu'elle peut parcourir une distance considérable avec une seule charge.",
        pourcentage: +18,
        cout: 2,
      },
      {
        actor: 'M. Davis, journaliste automobile',
        description:
          "J'ai mené une enquête approfondie sur les affirmations de l'entreprise de Los Angeles. Bien qu'il y ait des progrès dans le domaine des voitures électriques, il est important d'attendre des tests indépendants pour confirmer ces chiffres.",
        pourcentage: +5,
        cout: 1,
      },
      {
        actor: "M. Johnson, concurrent dans l'industrie automobile",
        description:
          "Je suis sceptique quant aux prétentions de l'entreprise de Los Angeles. Une autonomie de 1000 kilomètres avec une seule charge semble trop ambitieuse et improbable à ce stade.",
        pourcentage: -12,
        cout: 1,
      },
      {
        actor: 'Mme Turner, experte en technologies de batteries',
        description:
          "En tant qu'experte en batteries, je trouve les affirmations de l'entreprise de Los Angeles intéressantes. Cependant, je suis curieuse de connaître les détails techniques de leur système de batterie pour évaluer leur faisabilité.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'M. Harris, conducteur de voiture électrique',
        description:
          "Je n'ai pas encore eu l'occasion de tester cette nouvelle voiture électrique, mais j'attends avec impatience les résultats des tests indépendants pour confirmer son autonomie annoncée.",
        pourcentage: +8,
        cout: 1,
      },
    ],
  'Une équipe de scientifiques basée à Miami affirme avoir découvert un traitement révolutionnaire pour inverser le processus de vieillissement chez les humains.':
    [
      {
        actor: 'Dr. Johnson, biologiste',
        description:
          "En tant que biologiste spécialisé dans le vieillissement, je suis au courant des recherches menées par l'équipe de Miami. Cependant, il est important de souligner que les affirmations de réversibilité du processus de vieillissement chez les humains sont encore très hypothétiques et nécessitent des essais approfondis.",
        pourcentage: +5,
        cout: 1,
      },
      {
        actor: "Mme Davis, patiente participant à l'étude",
        description:
          "J'ai été sélectionnée pour participer à l'étude et j'ai remarqué certains effets positifs sur ma peau et mon bien-être général. Cependant, il est encore trop tôt pour affirmer que le traitement peut inverser le processus de vieillissement chez les humains.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'M. Smith, expert en médecine régénérative',
        description:
          "En tant qu'expert en médecine régénérative, je suis sceptique quant aux affirmations de l'équipe de Miami. Bien qu'il y ait des avancées dans le domaine, la réversibilité complète du vieillissement reste un défi majeur.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'Mme Johnson, journaliste scientifique',
        description:
          "J'ai mené des recherches approfondies sur le sujet et je peux confirmer qu'il n'existe aucune preuve scientifique solide soutenant les affirmations de l'équipe de Miami concernant le traitement de réversion du vieillissement.",
        pourcentage: -20,
        cout: 3,
      },
      {
        actor: 'M. Thompson, chercheur en biotechnologie',
        description:
          "Je suis au courant des recherches en cours à Miami, mais je pense qu'il est encore trop tôt pour tirer des conclusions définitives. La réversion du vieillissement est un domaine complexe et nécessite des études approfondies pour évaluer son efficacité.",
        pourcentage: +2,
        cout: 1,
      },
      {
        actor: "Mme Roberts, représentante d'une association de patients",
        description:
          "En tant que représentante d'une association de patients, je suis prudente quant aux affirmations de l'équipe de Miami. Nous attendons des résultats cliniques solides avant de soutenir de telles prétentions.",
        pourcentage: -8,
        cout: 1,
      },
    ],
  'Une équipe de chercheurs basée en Alaska prétend avoir découvert une nouvelle espèce de mammifère marin vivant dans les eaux glaciales de la région.':
    [
      {
        actor: 'Dr. Johnson, biologiste marin',
        description:
          "En tant que biologiste marin travaillant en Alaska, je suis au courant de cette découverte. Les premières observations suggèrent effectivement l'existence d'une nouvelle espèce de mammifère marin dans les eaux glaciales de la région.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'M. Smith, pêcheur local',
        description:
          "En tant que pêcheur expérimenté en Alaska, je suis souvent en contact avec la faune marine de la région. Je n'ai jamais rien observé de tel, donc je suis sceptique quant à l'existence d'une nouvelle espèce de mammifère marin.",
        pourcentage: -10,
        cout: 1,
      },
      {
        actor: 'Mme Davis, océanographe',
        description:
          "En tant qu'océanographe spécialisée dans les régions polaires, je suis enthousiasmée par les prétentions de l'équipe de chercheurs en Alaska. Cette découverte pourrait apporter de nouvelles connaissances sur l'écosystème marin de la région.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'M. Thompson, chercheur en écologie marine',
        description:
          "J'ai eu l'occasion de collaborer avec les chercheurs en Alaska et les premières preuves indiquent effectivement la présence d'une nouvelle espèce de mammifère marin. Cependant, des études plus approfondies sont nécessaires pour confirmer son existence.",
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'Mme Johnson, guide touristique',
        description:
          "En tant que guide touristique travaillant en Alaska, j'ai échangé avec de nombreux experts de la faune marine. Pour le moment, il n'y a aucune preuve tangible de l'existence d'une nouvelle espèce de mammifère marin dans la région.",
        pourcentage: -8,
        cout: 1,
      },
      {
        actor: 'M. Roberts, photographe animalier',
        description:
          "En tant que photographe animalier passionné par la faune de l'Alaska, je suis attentif à toute découverte majeure. Malheureusement, je n'ai pas encore capturé d'images ou d'indices suggérant une nouvelle espèce de mammifère marin.",
        pourcentage: -5,
        cout: 1,
      },
    ],
  'Une équipe de chercheurs mexicains prétend avoir découvert une cité antique cachée dans la jungle de la péninsule du Yucatán.':
    [
      {
        actor: 'Dr. Hernandez, archéologue',
        description:
          "En tant qu'archéologue spécialisé dans la région du Yucatán, je suis au courant de cette découverte. Les premières explorations confirment l'existence d'une cité antique cachée dans la jungle.",
        pourcentage: +25,
        cout: 2,
      },
      {
        actor: 'M. Garcia, guide touristique',
        description:
          "En tant que guide touristique expérimenté dans la région du Yucatán, je n'ai jamais entendu parler d'une telle découverte. Je reste sceptique jusqu'à ce que des preuves plus solides soient présentées.",
        pourcentage: -10,
        cout: 1,
      },
      {
        actor: 'Mme Lopez, historienne',
        description:
          "En tant qu'historienne spécialisée dans les civilisations anciennes du Mexique, je trouve cette découverte passionnante. Cependant, nous devons attendre des fouilles plus approfondies pour confirmer l'existence de cette cité antique.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'M. Rodriguez, chercheur en anthropologie',
        description:
          'En tant que chercheur en anthropologie travaillant au Mexique, je soutiens cette découverte de cité antique. Les artefacts trouvés suggèrent une culture avancée et jusque-là inconnue dans la région du Yucatán.',
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'Mme Morales, résidente locale',
        description:
          "En tant que résidente locale, je n'ai pas encore entendu parler de cette découverte. J'attends des preuves concrètes avant de me prononcer sur l'existence de cette cité antique.",
        pourcentage: -5,
        cout: 1,
      },
      {
        actor: 'M. Gomez, archéologue sous-marin',
        description:
          "En tant qu'archéologue spécialisé dans les sites submergés, je suis excité par cette découverte. La péninsule du Yucatán est riche en vestiges anciens, et une cité antique cachée dans la jungle est plausible.",
        pourcentage: +18,
        cout: 2,
      },
    ],
  'Des manifestations massives ont éclaté dans la capitale du Venezuela, Caracas, en raison de la crise économique et politique que traverse le pays.':
    [
      {
        actor: 'M. Rodriguez, journaliste local',
        description:
          'En tant que journaliste basé à Caracas, je suis témoin de ces manifestations massives. Les citoyens se mobilisent en raison de la crise économique et politique qui sévit dans le pays.',
        pourcentage: +30,
        cout: 2,
      },
      {
        actor: 'Mme Martinez, résidente de Caracas',
        description:
          "En tant que résidente de Caracas, je peux confirmer qu'il y a des manifestations massives en cours. Les gens sont frustrés par la situation économique et politique du pays.",
        pourcentage: +25,
        cout: 2,
      },
      {
        actor: 'M. Gonzalez, politicien local',
        description:
          "En tant que politicien engagé dans la région de Caracas, je reconnais les manifestations massives en cours. Cependant, il est important de noter que différentes opinions politiques s'expriment lors de ces manifestations.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'Mme Ramirez, économiste',
        description:
          "En tant qu'économiste spécialisée sur la crise au Venezuela, je peux confirmer que la situation économique du pays a conduit à ces manifestations massives. Les gens sont confrontés à une inflation galopante et à des pénuries de produits de base.",
        pourcentage: +35,
        cout: 3,
      },
      {
        actor: 'M. Fernandez, témoin oculaire',
        description:
          'En tant que témoin oculaire des manifestations à Caracas, je peux confirmer que les gens descendent massivement dans les rues pour exprimer leur mécontentement face à la situation actuelle.',
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'Mme Chavez, experte en politique latino-américaine',
        description:
          "En tant qu'experte en politique latino-américaine, je suis au courant des manifestations massives à Caracas. La crise économique et politique du Venezuela a exacerbé les tensions et conduit à ces protestations.",
        pourcentage: +18,
        cout: 2,
      },
    ],
  "Des inondations dévastatrices ont frappé plusieurs régions du Honduras, causant d'importants dégâts matériels et des pertes humaines.":
    [
      {
        actor: 'M. Lopez, résident local',
        description:
          'En tant que résident vivant dans une des régions touchées, je peux confirmer les inondations dévastatrices. Les maisons ont été emportées, et les pertes humaines sont tragiques.',
        pourcentage: +40,
        cout: 3,
      },
      {
        actor: 'Mme Flores, travailleuse humanitaire',
        description:
          "En tant que travailleuse humanitaire sur le terrain, je suis témoin des conséquences des inondations au Honduras. Des efforts sont en cours pour fournir une aide d'urgence aux personnes touchées.",
        pourcentage: +35,
        cout: 3,
      },
      {
        actor: 'M. Ramirez, journaliste local',
        description:
          "En tant que journaliste basé au Honduras, je couvre les inondations dévastatrices qui ont causé d'importants dégâts matériels et des pertes humaines. Les autorités sont mobilisées pour gérer la situation.",
        pourcentage: +30,
        cout: 2,
      },
      {
        actor: 'Mme Martinez, experte en météorologie',
        description:
          "En tant qu'experte en météorologie, je peux confirmer que des inondations graves ont touché plusieurs régions du Honduras. Les fortes précipitations ont entraîné des crues soudaines et des dommages considérables.",
        pourcentage: +25,
        cout: 2,
      },
      {
        actor: 'M. Hernandez, responsable de la protection civile',
        description:
          "En tant que responsable de la protection civile, je coordonne les efforts d'intervention d'urgence suite aux inondations dévastatrices au Honduras. Les dégâts matériels sont considérables et des vies ont été perdues.",
        pourcentage: +35,
        cout: 3,
      },
      {
        actor: 'Mme Chavez, chercheuse en environnement',
        description:
          "En tant que chercheuse spécialisée dans l'environnement, je confirme que les inondations au Honduras sont liées aux changements climatiques. Les événements météorologiques extrêmes sont de plus en plus fréquents.",
        pourcentage: +20,
        cout: 2,
      },
    ],
  'Des manifestations massives ont éclaté dans plusieurs villes de Colombie, avec des revendications concernant les réformes économiques et sociales du gouvernement.':
    [
      {
        actor: 'M. Ramirez, journaliste local',
        description:
          'En tant que journaliste basé en Colombie, je suis témoin de ces manifestations massives. Les manifestants demandent des changements économiques et sociaux pour une meilleure qualité de vie.',
        pourcentage: +30,
        cout: 2,
      },
      {
        actor: 'Mme Martinez, résidente de Bogota',
        description:
          "En tant que résidente de Bogota, je peux confirmer qu'il y a des manifestations massives en cours. Les gens sont mécontents des réformes économiques et sociales proposées par le gouvernement.",
        pourcentage: +25,
        cout: 2,
      },
      {
        actor: 'M. Gonzalez, politicien local',
        description:
          "En tant que politicien engagé en Colombie, je reconnais les manifestations massives en cours. Les revendications portent sur les réformes économiques et sociales du gouvernement, et des discussions sont en cours pour trouver un terrain d'entente.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Mme Ramirez, économiste',
        description:
          "En tant qu'économiste spécialisée sur la Colombie, je peux confirmer que les manifestations sont liées aux réformes économiques proposées par le gouvernement. Les gens sont préoccupés par les conséquences de ces réformes sur leur vie quotidienne.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'M. Fernandez, témoin oculaire',
        description:
          "En tant que témoin oculaire des manifestations en Colombie, je peux confirmer l'ampleur des revendications et la mobilisation massive des citoyens pour exprimer leur mécontentement.",
        pourcentage: +18,
        cout: 2,
      },
      {
        actor: 'Mme Chavez, experte en sciences politiques',
        description:
          "En tant qu'experte en sciences politiques, je suis au courant des manifestations massives en Colombie. Les demandes de réformes économiques et sociales reflètent les préoccupations de la population face aux inégalités.",
        pourcentage: +12,
        cout: 2,
      },
    ],
  'Une élection présidentielle historique se déroule au Pérou, avec deux candidats en lice pour le poste de président.':
    [
      {
        actor: 'M. Ramirez, journaliste politique',
        description:
          "En tant que journaliste politique, je suis au cœur de l'élection présidentielle historique au Pérou. Deux candidats rivaux s'affrontent pour le poste de président, suscitant un fort intérêt public.",
        pourcentage: +35,
        cout: 3,
      },
      {
        actor: 'Mme Martinez, électrice péruvienne',
        description:
          "En tant qu'électrice péruvienne, je suis témoin de cette élection présidentielle historique. Les deux candidats en lice suscitent des débats passionnés et des discussions sur l'avenir du pays.",
        pourcentage: +30,
        cout: 2,
      },
      {
        actor: 'M. Gonzalez, politicien local',
        description:
          "En tant que politicien engagé au Pérou, je suis impliqué dans cette élection présidentielle historique. Les deux candidats ont des approches différentes, et l'issue de l'élection pourrait avoir un impact significatif sur le pays.",
        pourcentage: +25,
        cout: 2,
      },
      {
        actor: 'Mme Ramirez, analyste politique',
        description:
          "En tant qu'analyste politique, je suis attentivement l'élection présidentielle au Pérou. Les deux candidats ont des programmes politiques distincts, et l'issue de l'élection aura des répercussions sur l'avenir du pays.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'M. Fernandez, observateur électoral',
        description:
          "En tant qu'observateur électoral, je surveille de près le déroulement de l'élection présidentielle au Pérou. Les deux candidats en lice sont soutenus par des factions différentes, et le scrutin se déroule de manière transparente.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Mme Chavez, experte en sciences politiques',
        description:
          "En tant qu'experte en sciences politiques, je suis au courant de cette élection présidentielle historique au Pérou. Les candidats en lice proposent des visions différentes pour le pays, et le choix des électeurs sera déterminant.",
        pourcentage: +18,
        cout: 2,
      },
    ],
  "Des manifestations ont éclaté en Guyane française, avec des revendications concernant l'amélioration des infrastructures et des services publics.":
    [
      {
        actor: 'M. Dupont, journaliste local',
        description:
          'En tant que journaliste basé en Guyane française, je suis témoin de ces manifestations. Les manifestants réclament des améliorations urgentes des infrastructures et des services publics pour répondre aux besoins de la population.',
        pourcentage: +25,
        cout: 2,
      },
      {
        actor: 'Mme Martin, résidente de Cayenne',
        description:
          "En tant que résidente de Cayenne, je peux confirmer que des manifestations ont lieu. Les revendications portent sur l'amélioration des infrastructures et des services publics pour améliorer la qualité de vie dans la région.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'M. Dubois, représentant syndical',
        description:
          'En tant que représentant syndical, je soutiens les revendications des manifestants en Guyane française. Les infrastructures et les services publics nécessitent des investissements significatifs pour répondre aux besoins de la population.',
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Mme Rousseau, fonctionnaire local',
        description:
          'En tant que fonctionnaire travaillant en Guyane française, je comprends les revendications des manifestants. Des améliorations sont nécessaires pour renforcer les infrastructures et les services publics afin de mieux servir la population.',
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'M. Garcia, entrepreneur local',
        description:
          "En tant qu'entrepreneur implanté en Guyane française, je suis conscient des défis liés aux infrastructures et aux services publics. Des améliorations sont nécessaires pour favoriser le développement économique de la région.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'Mme Leclerc, experte en développement local',
        description:
          "En tant qu'experte en développement local, je reconnais les revendications des manifestants en Guyane française. Des investissements stratégiques dans les infrastructures et les services publics peuvent contribuer à la croissance et à la prospérité de la région.",
        pourcentage: +8,
        cout: 2,
      },
    ],
  "Une découverte archéologique majeure a été faite en Bolivie, révélant des vestiges anciens d'une civilisation perdue.":
    [
      {
        actor: 'Dr. Rodriguez, archéologue renommé',
        description:
          "En tant qu'archéologue renommé, je suis impliqué dans cette découverte majeure en Bolivie. Les vestiges archéologiques révèlent des informations précieuses sur une civilisation perdue depuis longtemps.",
        pourcentage: +25,
        cout: 3,
      },
      {
        actor: 'Mme Morales, guide touristique',
        description:
          'En tant que guide touristique en Bolivie, je suis au courant de cette découverte archéologique passionnante. Les vestiges anciens suscitent un grand intérêt parmi les visiteurs, et cette découverte pourrait avoir un impact significatif sur le tourisme dans la région.',
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'M. Gomez, historien local',
        description:
          "En tant qu'historien local, je suis fasciné par cette découverte en Bolivie. Les vestiges d'une civilisation perdue ouvrent de nouvelles perspectives sur l'histoire de la région et suscitent des débats parmi les chercheurs.",
        pourcentage: +18,
        cout: 2,
      },
      {
        actor: 'M. Castro, anthropologue spécialisé',
        description:
          "En tant qu'anthropologue spécialisé dans les civilisations anciennes, je suis enthousiasmé par cette découverte en Bolivie. Les vestiges fournissent des indices précieux sur la vie et la culture de la civilisation perdue.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Mme Ramirez, habitante locale',
        description:
          "En tant qu'habitante de la région, je suis fière de cette découverte en Bolivie. Les vestiges anciens témoignent de l'héritage riche et complexe de notre pays, et nous espérons en apprendre davantage sur nos ancêtres.",
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'M. Torres, étudiant en archéologie',
        description:
          "En tant qu'étudiant en archéologie, je suis ravi de cette découverte en Bolivie. Les vestiges d'une civilisation perdue offrent de nouvelles opportunités d'apprentissage et de recherche dans mon domaine.",
        pourcentage: +10,
        cout: 2,
      },
    ],
  "Les incendies en cours dans la forêt amazonienne au Brésil menacent gravement l'écosystème et suscitent des préoccupations internationales.":
    [
      {
        actor: 'Dr. Silva, scientifique environnemental',
        description:
          "En tant que scientifique spécialisé dans l'environnement, je confirme que les incendies en Amazonie sont une véritable catastrophe écologique. Les écosystèmes uniques de la forêt sont menacés, mettant en péril la biodiversité et les communautés qui en dépendent.",
        pourcentage: -30,
        cout: 3,
      },
      {
        actor: 'Mme Oliveira, habitante de la région',
        description:
          "En tant qu'habitante de la région amazonienne, je suis témoin des incendies qui ravagent notre précieuse forêt. Les conséquences sont désastreuses pour la faune, la flore et les populations indigènes qui vivent en harmonie avec la nature.",
        pourcentage: -25,
        cout: 2,
      },
      {
        actor: 'M. Santos, garde forestier',
        description:
          "En tant que garde forestier chargé de la protection de la forêt amazonienne, je suis profondément préoccupé par les incendies en cours. Ils sont souvent causés par des activités illégales telles que la déforestation et le brûlis, mettant en péril l'intégrité de notre écosystème.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'M. Costa, représentant du gouvernement',
        description:
          "En tant que représentant du gouvernement brésilien, je reconnais les incendies en Amazonie et les préoccupations internationales qu'ils suscitent. Des mesures sont prises pour lutter contre les incendies et préserver notre patrimoine naturel.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'M. Alves, propriétaire terrien',
        description:
          'En tant que propriétaire terrien en Amazonie, je comprends les inquiétudes liées aux incendies. Cependant, il est important de souligner que tous les incendies ne sont pas intentionnels, certains pouvant être causés par des conditions climatiques extrêmes.',
        pourcentage: +5,
        cout: 2,
      },
      {
        actor: 'Mme Santos, chercheuse en conservation',
        description:
          'En tant que chercheuse en conservation, je suis préoccupée par les incendies en Amazonie, mais il est essentiel de prendre en compte les efforts de préservation et de reboisement entrepris pour préserver cet écosystème unique.',
        pourcentage: +8,
        cout: 2,
      },
    ],
  "Une épidémie de dengue sévit actuellement à Rio de Janeiro, causant de nombreux cas de maladie et suscitant des mesures d'urgence de la part des autorités sanitaires.":
    [
      {
        actor: 'Dr. Santos, médecin épidémiologiste',
        description:
          "En tant que médecin épidémiologiste travaillant à Rio de Janeiro, je confirme l'épidémie de dengue dans la région. Les cas de maladie sont en augmentation et les autorités sanitaires mettent en œuvre des mesures pour contenir la propagation du virus.",
        pourcentage: -25,
        cout: 3,
      },
      {
        actor: 'Mme Oliveira, habitante de Rio de Janeiro',
        description:
          "En tant qu'habitante de Rio de Janeiro, je suis directement touchée par l'épidémie de dengue. Les cas de maladie se multiplient et il est important de prendre des mesures préventives pour se protéger.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'M. Costa, responsable de la santé publique',
        description:
          "En tant que responsable de la santé publique à Rio de Janeiro, je confirme l'épidémie de dengue et les actions mises en place pour faire face à cette situation. Des campagnes de sensibilisation et de lutte contre les moustiques sont en cours.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'M. Silva, représentant des autorités sanitaires',
        description:
          "En tant que représentant des autorités sanitaires, je reconnais l'épidémie de dengue à Rio de Janeiro. Des mesures d'urgence sont prises pour traiter les cas de maladie et prévenir la propagation du virus.",
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'M. Almeida, expert en santé environnementale',
        description:
          "En tant qu'expert en santé environnementale, je souligne l'importance de la prévention et du contrôle des moustiques vecteurs de la dengue à Rio de Janeiro. Des actions doivent être entreprises pour réduire les risques pour la population.",
        pourcentage: +8,
        cout: 2,
      },
      {
        actor: 'Mme Santos, pharmacienne',
        description:
          'En tant que pharmacienne à Rio de Janeiro, je constate une augmentation des demandes de médicaments contre la dengue. Il est crucial de sensibiliser la population et de prendre des mesures pour prévenir la maladie.',
        pourcentage: +5,
        cout: 2,
      },
    ],
  "Une nouvelle vague de criminalité frappe la ville de Salvador, au Brésil, suscitant l'inquiétude des habitants et des autorités locales.":
    [
      {
        actor: 'M. Silva, chef de police de Salvador',
        description:
          "En tant que chef de police, je confirme la présence d'une nouvelle vague de criminalité à Salvador. Nous travaillons en étroite collaboration avec les autorités pour renforcer la sécurité et réduire les taux de criminalité.",
        pourcentage: -20,
        cout: 3,
      },
      {
        actor: 'Mme Santos, habitante de Salvador',
        description:
          "En tant qu'habitante de Salvador, je suis préoccupée par la montée de la criminalité dans notre ville. Il est important de renforcer la sécurité et de prendre des mesures pour assurer la tranquillité des citoyens.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'M. Costa, représentant du gouvernement local',
        description:
          'En tant que représentant du gouvernement local, je suis conscient de la situation de criminalité à Salvador. Des mesures sont prises pour améliorer la sécurité publique et réduire les actes criminels.',
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'M. Almeida, expert en sécurité urbaine',
        description:
          "En tant qu'expert en sécurité urbaine, je souligne l'importance d'une approche holistique pour faire face à la criminalité à Salvador. Il est nécessaire de renforcer la prévention, les mesures répressives et la coopération entre les différentes parties prenantes.",
        pourcentage: -12,
        cout: 2,
      },
      {
        actor: "M. Oliveira, propriétaire d'entreprise",
        description:
          "En tant que propriétaire d'entreprise à Salvador, je ressens l'impact de la criminalité croissante sur notre économie locale. Des actions concertées doivent être entreprises pour garantir un environnement sûr et favoriser le développement économique.",
        pourcentage: +5,
        cout: 2,
      },
      {
        actor: 'Mme Santos, sociologue spécialisée dans la violence urbaine',
        description:
          "En tant que sociologue spécialisée dans la violence urbaine, je comprends les causes complexes de la criminalité à Salvador. Il est essentiel de mettre en œuvre des politiques de prévention et d'inclusion sociale pour réduire les actes criminels.",
        pourcentage: +7,
        cout: 2,
      },
    ],
  'Une grève générale paralyse actuellement la ville de Buenos Aires, en Argentine, entraînant des perturbations dans les transports et les services publics.':
    [
      {
        actor: 'M. Rodríguez, syndicaliste',
        description:
          'En tant que représentant syndical, je confirme que la grève générale est en cours à Buenos Aires. Nous revendiquons de meilleures conditions de travail et nous nous battons pour les droits des travailleurs.',
        pourcentage: -25,
        cout: 3,
      },
      {
        actor: 'Mme López, habitante de Buenos Aires',
        description:
          "En tant qu'habitante de Buenos Aires, je suis directement touchée par la grève générale. Les transports et les services publics sont fortement perturbés, ce qui entraîne des difficultés au quotidien.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'M. Gómez, représentant du gouvernement',
        description:
          "En tant que représentant du gouvernement, je reconnais l'impact de la grève générale sur Buenos Aires. Des discussions sont en cours avec les syndicats pour trouver des solutions et rétablir les services publics.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: "M. Fernández, chef d'entreprise",
        description:
          "En tant que chef d'entreprise à Buenos Aires, je ressens les conséquences économiques de la grève générale. Les activités commerciales sont ralenties, ce qui affecte la productivité et les revenus.",
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'M. García, expert en relations sociales',
        description:
          "En tant qu'expert en relations sociales, je souligne l'importance du dialogue entre les parties concernées pour résoudre les conflits et éviter les perturbations prolongées. Des négociations doivent être menées pour parvenir à un compromis.",
        pourcentage: +7,
        cout: 2,
      },
      {
        actor:
          'Mme Martínez, sociologue spécialisée dans les mouvements sociaux',
        description:
          'En tant que sociologue spécialisée dans les mouvements sociaux, je comprends les revendications des travailleurs et les tensions sociales qui conduisent à la grève générale. Il est essentiel de trouver des solutions durables pour garantir une meilleure justice sociale.',
        pourcentage: +9,
        cout: 2,
      },
    ],
  "Des scientifiques argentins découvrent une nouvelle espèce d'oiseau rare dans la région d'Ushuaïa, attirant l'attention des ornithologues du monde entier.":
    [
      {
        actor: 'Dr. García, ornithologue renommé',
        description:
          "En tant qu'ornithologue renommé, je confirme la découverte de cette nouvelle espèce d'oiseau rare à Ushuaïa. C'est une avancée significative pour la recherche ornithologique.",
        pourcentage: +20,
        cout: 3,
      },
      {
        actor: "Mme Torres, habitante d'Ushuaïa",
        description:
          "En tant qu'habitante d'Ushuaïa, je suis ravie de la découverte de cette nouvelle espèce d'oiseau rare dans notre région. Cela renforce l'importance de la préservation de notre environnement naturel.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Dr. Martínez, scientifique spécialisé en biodiversité',
        description:
          "En tant que scientifique spécialisé en biodiversité, je considère la découverte de cette nouvelle espèce d'oiseau rare comme une contribution précieuse à notre connaissance de la faune à Ushuaïa.",
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'M. Romero, guide naturaliste',
        description:
          'En tant que guide naturaliste à Ushuaïa, je suis heureux de partager cette nouvelle avec les visiteurs intéressés par la richesse de notre région en termes de biodiversité aviaire.',
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'M. Fernández, photographe animalier',
        description:
          "En tant que photographe animalier, je suis excité par cette découverte. Cela offre de nouvelles opportunités pour capturer des images uniques de cette espèce d'oiseau rare à Ushuaïa.",
        pourcentage: +8,
        cout: 2,
      },
      {
        actor: "Mme Morales, défenseur de l'environnement",
        description:
          "En tant que défenseur de l'environnement, je suis encouragée par cette découverte qui met en évidence l'importance de préserver les écosystèmes uniques de Ushuaïa pour la survie de la faune.",
        pourcentage: +6,
        cout: 2,
      },
    ],
  'Une vague de chaleur record frappe la ville de Sydney en Australie, entraînant des températures extrêmes et des préoccupations croissantes concernant les incendies de brousse.':
    [
      {
        actor: 'M. Thompson, météorologue',
        description:
          "En tant que météorologue, je confirme l'existence de cette vague de chaleur record à Sydney. Les températures atteignent des niveaux alarmants, augmentant le risque d'incendies de brousse.",
        pourcentage: -30,
        cout: 3,
      },
      {
        actor: 'Mme Davis, habitante de Sydney',
        description:
          "En tant qu'habitante de Sydney, je vis les effets de cette vague de chaleur extrême au quotidien. La chaleur est insupportable et les incendies de brousse sont une préoccupation majeure pour notre sécurité.",
        pourcentage: -25,
        cout: 2,
      },
      {
        actor: "M. Reynolds, responsable des services d'urgence",
        description:
          "En tant que responsable des services d'urgence, nous sommes en alerte maximale en raison de la vague de chaleur à Sydney. Nous travaillons activement pour prévenir et gérer les incendies de brousse qui pourraient se déclarer.",
        pourcentage: -20,
        cout: 2,
      },
      {
        actor: 'Mme Foster, spécialiste de la conservation de la faune',
        description:
          "En tant que spécialiste de la conservation de la faune, je suis préoccupée par l'impact de la vague de chaleur sur la faune et la flore de Sydney. Les animaux et les écosystèmes sont gravement menacés.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: "M. Mitchell, responsable des services d'incendie",
        description:
          "En tant que responsable des services d'incendie, nous sommes en état d'alerte élevée en raison des conditions météorologiques extrêmes à Sydney. Nous avons renforcé nos équipes pour faire face aux éventuels incendies de brousse.",
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'M. Turner, expert en climatologie',
        description:
          "En tant qu'expert en climatologie, je souligne l'importance de prendre des mesures urgentes pour faire face aux vagues de chaleur de plus en plus fréquentes et intenses à Sydney. Il est essentiel de s'adapter au changement climatique.",
        pourcentage: +5,
        cout: 2,
      },
    ],
  "Une équipe de scientifiques australiens découvre une nouvelle espèce de kangourou unique dans la région de Perth, suscitant l'enthousiasme des biologistes du monde entier.":
    [
      {
        actor: 'Dr. Anderson, biologiste spécialisé en marsupiaux',
        description:
          "En tant que biologiste spécialisé en marsupiaux, je confirme la découverte de cette nouvelle espèce de kangourou unique à Perth. C'est une avancée majeure dans notre compréhension de la biodiversité australienne.",
        pourcentage: +25,
        cout: 3,
      },
      {
        actor: 'M. Roberts, habitant de Perth',
        description:
          "En tant qu'habitant de Perth, je suis ravi d'apprendre la découverte de cette nouvelle espèce de kangourou unique dans notre région. Cela renforce l'importance de la préservation de notre écosystème local.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'Dr. Lewis, scientifique spécialisé en écologie',
        description:
          'En tant que scientifique spécialisé en écologie, je considère la découverte de cette nouvelle espèce de kangourou comme une contribution précieuse à notre connaissance de la faune endémique de Perth.',
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Mme Campbell, guide naturaliste',
        description:
          'En tant que guide naturaliste à Perth, je suis enchantée par cette découverte. Cela offre de nouvelles opportunités pour observer et étudier cette espèce de kangourou unique dans son habitat naturel.',
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: 'Mme Patel, photographe animalière',
        description:
          'En tant que photographe animalière, je suis excitée par cette découverte. Cela offre des possibilités uniques pour capturer des images exceptionnelles de cette nouvelle espèce de kangourou à Perth.',
        pourcentage: +8,
        cout: 2,
      },
      {
        actor: "M. Lopez, défenseur de l'environnement",
        description:
          "En tant que défenseur de l'environnement, je suis encouragé par cette découverte qui met en évidence l'importance de préserver les habitats naturels de Perth pour la survie de la faune endémique.",
        pourcentage: +6,
        cout: 2,
      },
    ],
  "Des chercheurs de l'Université de Darwin annoncent la découverte d'une nouvelle espèce de reptile venimeux dans la région, suscitant des préoccupations quant à la sécurité des habitants et des touristes.":
    [
      {
        actor: 'Dr. Wilson, herpétologiste',
        description:
          "En tant qu'herpétologiste, je confirme la découverte de cette nouvelle espèce de reptile venimeux à Darwin. Il est essentiel de sensibiliser la population aux précautions à prendre pour éviter les incidents.",
        pourcentage: -20,
        cout: 3,
      },
      {
        actor: 'M. Thompson, habitant de Darwin',
        description:
          "En tant qu'habitant de Darwin, je suis inquiet de la découverte de cette nouvelle espèce de reptile venimeux. Nous devons être vigilants et prendre des mesures de sécurité supplémentaires dans notre quotidien.",
        pourcentage: -15,
        cout: 2,
      },
      {
        actor: 'Mme Roberts, responsable du tourisme',
        description:
          'En tant que responsable du tourisme à Darwin, nous devons prendre des mesures pour informer les visiteurs des risques potentiels associés à la présence de cette nouvelle espèce de reptile venimeux.',
        pourcentage: -10,
        cout: 2,
      },
      {
        actor: 'M. Nguyen, expert en gestion de la faune',
        description:
          "En tant qu'expert en gestion de la faune, nous devons évaluer l'impact de cette nouvelle espèce de reptile venimeux sur l'écosystème de Darwin et mettre en place des mesures de conservation adéquates.",
        pourcentage: -8,
        cout: 2,
      },
      {
        actor: 'M. Patel, herpétologue',
        description:
          "En tant qu'herpétologue spécialisé dans les reptiles venimeux, je suis impressionné par cette découverte. Nous devons approfondir nos connaissances sur cette espèce pour mieux comprendre son comportement et sa dangerosité.",
        pourcentage: -6,
        cout: 2,
      },
      {
        actor: 'Mme Wilson, médecin local',
        description:
          "En tant que médecin local, nous devons informer la population sur les symptômes d'une morsure de ce reptile venimeux nouvellement découvert et fournir des conseils sur les mesures d'urgence à prendre.",
        pourcentage: -5,
        cout: 2,
      },
    ],
  "Des chercheurs néo-zélandais annoncent la découverte d'une nouvelle espèce d'oiseau endémique dans les forêts de Nouvelle-Zélande, suscitant l'excitation parmi les ornithologues du monde entier.":
    [
      {
        actor: 'Dr. Wilson, ornithologue',
        description:
          "En tant qu'ornithologue, je confirme la découverte de cette nouvelle espèce d'oiseau endémique en Nouvelle-Zélande. C'est une avancée passionnante pour la conservation de la biodiversité.",
        pourcentage: +30,
        cout: 3,
      },
      {
        actor: 'M. Thompson, habitant de la Nouvelle-Zélande',
        description:
          "En tant qu'habitant de la Nouvelle-Zélande, je suis enchanté d'apprendre la découverte de cette nouvelle espèce d'oiseau. Cela témoigne de la richesse de notre faune unique.",
        pourcentage: +25,
        cout: 2,
      },
      {
        actor: 'Dr. Lewis, scientifique spécialisé en écologie',
        description:
          "En tant que scientifique spécialisé en écologie, je considère la découverte de cette nouvelle espèce d'oiseau comme une contribution significative à notre connaissance de la biodiversité néo-zélandaise.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'Mme Campbell, guide naturaliste',
        description:
          "En tant que guide naturaliste en Nouvelle-Zélande, je suis ravie de cette découverte. Cela offre de nouvelles opportunités pour observer et préserver cette espèce d'oiseau unique.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Mme Patel, photographe animalière',
        description:
          "En tant que photographe animalière, je suis excitée par cette découverte. Cela offre des possibilités uniques pour capturer des images exceptionnelles de cette nouvelle espèce d'oiseau.",
        pourcentage: +10,
        cout: 2,
      },
      {
        actor: "M. Lopez, défenseur de l'environnement",
        description:
          "En tant que défenseur de l'environnement, je suis encouragé par cette découverte qui souligne l'importance de préserver les habitats naturels de la Nouvelle-Zélande pour la survie de notre faune endémique.",
        pourcentage: +8,
        cout: 2,
      },
    ],
  "Une équipe de chercheurs des Fidji affirme avoir découvert une nouvelle espèce de corail dans les récifs de l'archipel, suscitant l'intérêt des scientifiques du monde entier pour sa rareté et sa beauté.":
    [
      {
        actor: 'Dr. Wilson, biologiste marin',
        description:
          "En tant que biologiste marin, je confirme la découverte de cette nouvelle espèce de corail aux Fidji. C'est une avancée importante dans la préservation de nos récifs coralliens.",
        pourcentage: +25,
        cout: 3,
      },
      {
        actor: 'Mme Thompson, plongeuse fidjienne',
        description:
          "En tant que plongeuse fidjienne, j'ai eu la chance de voir ce nouveau corail de mes propres yeux. C'est une merveille de la nature et cela montre l'importance de protéger nos récifs.",
        pourcentage: +20,
        cout: 2,
      },
      {
        actor: 'M. Patel, guide touristique',
        description:
          "En tant que guide touristique aux Fidji, je suis ravi d'accueillir les visiteurs intéressés par la découverte de cette nouvelle espèce de corail. Cela renforce l'attrait de nos plongées et de notre biodiversité marine.",
        pourcentage: +18,
        cout: 2,
      },
      {
        actor: 'Dr. Lewis, océanographe',
        description:
          "En tant qu'océanographe, je suis enthousiasmé par cette découverte qui apporte de nouvelles informations sur la diversité des coraux dans les eaux fidjiennes. Cela enrichit notre compréhension des écosystèmes marins.",
        pourcentage: +15,
        cout: 2,
      },
      {
        actor: 'Mme Campbell, photographe sous-marine',
        description:
          "En tant que photographe sous-marine, je suis fascinée par cette nouvelle espèce de corail et j'ai hâte de capturer sa beauté dans mes images. Cela met en valeur la richesse de nos récifs.",
        pourcentage: +12,
        cout: 2,
      },
      {
        actor: 'M. Lopez, écologiste',
        description:
          "En tant qu'écologiste, je considère cette découverte comme un rappel de l'importance de préserver nos récifs coralliens. Cela renforce notre responsabilité envers la conservation de la biodiversité marine.",
        pourcentage: +10,
        cout: 2,
      },
    ],
};
