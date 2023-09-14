// styling...

const classList = {
  body: `bg-green-500 flex flex-col text-green-500 justify-center items-center text-center`,
  cover: `bg-green-100 min-h-screen max-h-full md:py-20 py-6 md:px-20 px-3 flex flex-col w-4/5 gap-6`,
  headline: ``,
  headText: `text-3xl text-green-500 uppercase font-semibold tracking-widest`,
  inputBox: `flex justify-center items-center gap-3`,
  iBLeft: `text-lg tracking-widest text-green-500`,
  type: ``,
  iBRight: `text-lg text-gray-800 flex gap-3 items-center`,
  inputArea: `border-2 border-green-400 bg-gray-50 rounded px-1 w-20 h-8`,
  generateButton: `font-semibold hover:bg-green-600 bg-green-500 text-green-50 rounded-lg px-3 py-1`,
  generated: `flex flex-col mt-10 md:px-20 gap-5 text-lg text-green-700`,
};

for (const key in classList) {
  let elements = document.querySelector(`.${key}`);
  elements.classList = `${classList[`${key}`]}`;
  elements.classList.add(`${key}`);
}

// adding texts..

const innerText = {
  body: ``,
  cover: ``,
  headline: ``,
  headText: `Tired of boring lorem ipsum?`,
  inputBox: ``,
  iBLeft: ``,
  type: `Paragraphs:`,
  iBRight: ``,
  inputArea: ``,
  generateButton: `Generate`,
  generated: ``,
};

for (const key in innerText) {
  if (innerText[`${key}`] !== ``) {
    document.querySelector(`.${key}`).innerText = `${innerText[`${key}`]}`;
  }
}

//
// generated set up..
//

// array of capital letters

let capASCIIvalues = [];
let capLetters = [];
for (let i = 65; i < 65 + 26; i++) {
  capASCIIvalues.push(i);
  capLetters.push(String.fromCharCode(i));
}

// array of small letters

let smallASCIIvalues = [];
let smallLetters = [];
for (let i = 97; i < 97 + 26; i++) {
  smallASCIIvalues.push(i);
  smallLetters.push(String.fromCharCode(i));
}

// random number function..

function getRandomNumberWithin(limit) {
  return Math.floor(Math.random() * limit);
}

// creating get Paragraph Function..

function getParaWithin(wordLimit = 150, letterLimit = 7) {
  let smallLettersPara = ``;

  for (let i = 0; i < wordLimit; i++) {
    // creating small letters words..

    //   word 1
    let smallLettersWord1 = ``;
    for (let i = 0; i < getRandomNumberWithin(letterLimit / 2 - 1); i++) {
      let tempSL1 = `${smallLetters[getRandomNumberWithin(25)]}`;
      let tempSL2 = `${smallLetters[getRandomNumberWithin(25)]}`;
      smallLettersWord1 += tempSL1.concat(tempSL2);
    }

    //   word 2
    let smallLettersWord2 = ``;
    for (let i = 0; i < getRandomNumberWithin(letterLimit / 2 - 1); i++) {
      let tempSL1 = `${smallLetters[getRandomNumberWithin(25)]}`;
      let tempSL2 = `${smallLetters[getRandomNumberWithin(25)]}`;
      smallLettersWord2 += tempSL1.concat(tempSL2);
    }

    if (smallLettersWord1 !== "" && smallLettersWord2 !== "") {
      smallLettersPara += smallLettersWord1.concat(" ", smallLettersWord2);
    }
  }

  return smallLettersPara;
}

// ultimate function..

function getPara(value) {
  for (let i = 0; i < value; i++) {
    let paras = document.createElement("p");
    paras.innerText = getParaWithin();
    document.querySelector(".generated").appendChild(paras);
  }
}

// Form/inputArea set up..

const form = document.querySelector(".inputBox");
const inputArea = document.querySelector(".inputArea");
const generated = document.querySelector(".generated");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let value = parseInt(inputArea.value);
  generated.innerHTML = ``;
  getPara(value);
});
