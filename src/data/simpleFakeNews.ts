let subject : Array<string> = 
[
    "Subject 1",
    "Subject 2",
    "Subject 3",
    "Subject 4",
    "Subject 5",
    "Subject 6",
    "Subject 7",
    "Subject 8"
];

let verb : Array<string> =  
[
    "verb 1",
    "verb 2",
    "verb 3",
    "verb 4",
    "verb 5",
    "verb 6",
    "verb 7",
    "verb 8",
    "verb 9"
]

let comp : Array<string> = 
[
    "comp 1",
    "comp 2",
    "comp 3",
    "comp 4",
    "comp 5",
    "comp 6",
    "comp 7",
    "comp 8",
    "comp 9"
]

export type NewsMap = {
    [country: string]: string[];
  };

export let simpleNewsList : NewsMap = {
    France : [],
} ;

function selectRandomElement(arr: any[]): any {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

export function generateSimpleNews(location : string){
    let sn : string;
    do {
        let s = selectRandomElement(subject);
        let v = selectRandomElement(verb);
        let c = selectRandomElement(comp);
        sn = (s + " " + v + " " + c + ".");
    } while (simpleNewsList[location].includes(sn));
    simpleNewsList[location].push(sn);
}