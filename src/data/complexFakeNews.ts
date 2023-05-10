type News = {
    enonce: string;
    actions: Action[];
  };
  
  type Action = {
    actor : string;
    description: string;
    pourcentage: number;
  };

  export const complexNewsEnonce : Array<string> = [
    "Une équipe de scientifiques affirme avoir découvert un nouveau traitement contre le cancer qui guérit 100% des patients.",
    "Les autorités ont découvert un réseau de trafiquants d’animaux exotiques dans la région.",
  ];

  export const complexNewsList: { [enonce : string] : {actor : string, description: string, pourcentage: number}[] }= {
    "Une équipe de scientifiques affirme avoir découvert un nouveau traitement contre le cancer qui guérit 100% des patients.":
    [
      { actor: "Dr. Thomas, oncologue",
      description:  "Je suis au courant de cette étude, mais les résultats ne sont pas aussi prometteurs qu’ils le prétendent. Il y a encore beaucoup de tests à faire avant de valider ces résultats.", 
      pourcentage: -7 },
      { actor: "Mme Dupont, une patiente atteinte d’un cancer du sein",
      description: "J’ai participé à l’étude, mais le traitement n’a pas fonctionné pour moi. Il y a encore des progrès à faire" , 
       pourcentage: -5 },
      { actor: "Le Pr. Martin, spécialiste en immunothérapie", 
      description: " Il y a effectivement de nouvelles pistes intéressantes dans la recherche contre le cancer, mais il faut rester prudent quant à l’efficacité de ce traitement." , 
      pourcentage: -10 },
      { actor: "Le Dr. Smith, pharmacologue", 
      description: "Je ne suis pas sûr que ce traitement soit viable sur le long terme. Il pourrait y avoir des effets secondaires graves. " , 
      pourcentage: -20 },
      { actor: "Mr. Dubois, un patient atteint d’un cancer du foie", 
      description: "J’ai participé à l’étude et je suis d’ores et déjà guéri. Ce traitement va révolutionner la médecine ! " , 
      pourcentage: +5 }
    ],
     "Les autorités ont découvert un réseau de trafiquants d’animaux exotiques dans la région." :
     [
      { actor: "Un garde forestier", 
      description: "J’ai vu plusieurs camions suspects se garer près de la zone protégée ces dernières semaines." , 
      pourcentage: +15 },
      { actor: "Un vétérinaire", 
      description: "J’ai été contacté par des personnes cherchant à faire soigner des animaux exotiques ces derniers temps " , 
      pourcentage: +10 },
      { actor: "Un agent immobilier", 
      description: "Je n’ai pas remarqué de ventes de biens immobiliers suspectes ces derniers temps." , 
      pourcentage: -7 },
      { actor: "Un habitant local", 
      description: "Je n’ai pas l’impression que quelque chose ait changé dans le quartier, je n’ai rien entendu à ce propos " , 
      pourcentage: -10 },
      { actor: "Un responsable gouvernemental en charge de la protection de la faune",
      description: "Nous avons effectivement découvert un réseau de trafiquants d’animaux exotiques dans la région et nous sommes en train d’enquêter. " , 
       pourcentage: +25 },
    ],

  };
  





  