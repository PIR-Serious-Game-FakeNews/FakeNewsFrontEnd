export let simpleActions: Array<{
    actor: string;
  pourcentage: number;
  cout: number;
}> = [
  { actor: 'Interroger la personne concernée', pourcentage: +8, cout: 1 },
  { actor: 'Interroger un expert dans le domaine', pourcentage: +17, cout: 2 },
  { actor: 'Se renseigner sur la source', pourcentage: +25, cout: 3 },
];
