// variaveis de manipulação do DOM
const closedCookieImg = document.getElementById('closed-cookie');
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const btnAgain = document.getElementById('btn-again');
const randomPhrase = document.getElementById('random-phrase');

// variavel com lista de frases 
const phraseList = [
  "Acredite em si mesmo e você será imparável.",
  "Cada dia é uma nova oportunidade para brilhar.",
  "Se você pode sonhar, pode realizar.",
  "A persistência leva ao sucesso.",
  "Sua determinação é sua maior força.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Encare cada desafio como uma chance de crescimento.",
  "Grandes coisas nunca vêm da zona de conforto.",
  "Mude seus pensamentos e você mudará seu mundo.",
  "A jornada mais longa começa com um único passo."
];

// função que oculta e mostra elementos em tela
function hiddenElements (){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
  
  randomPhrases();
}

// função que insere uma frase aleatoria na tela
function randomPhrases(){
  let indexPhrase = ((Math.random())*9).toFixed(0);
  randomPhrase.innerText = `${phraseList[indexPhrase]}`;
  console.log(`${indexPhrase}`)
}

// chamada das funções
closedCookieImg.addEventListener('click', hiddenElements);
btnAgain.addEventListener('click', hiddenElements);