// Desafio 1
function compareTrue(par1, par2) {
  let compare = true;
  if (par1 === true && par2 === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let splited = string.split(' ');
  return splited;
}

// Desafio 4
function concatName(array) {
  let concatText = array[array.length - 1].concat(', ', array[0]);
  return concatText;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ties + (wins * 3);
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let highestNumber = numeros[0];
  let qtdMaiorNumero = 0;
  for (let valor of numeros) {
    if (highestNumber < valor) {
      highestNumber = valor;
    }
  }
  for (let valor of numeros) {
    if (highestNumber === valor) {
      qtdMaiorNumero += 1;
    }
  }
  return qtdMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let print;
  if (distanceCat1 < distanceCat2) {
    print = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    print = 'cat2';
  } else {
    print = 'os gatos trombam e o rato foge';
  }
  return print;
}

// Desafio 8
function fizzBuzz2(numArray) {
  if (numArray % 15 === 0) {
    return 'fizzBuzz';
  }
  if (numArray % 3 === 0) {
    return 'fizz';
  }
  if (numArray % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function fizzBuzz(arreio) {
  let resultado = [];
  for (let numArray of arreio) {
    resultado.push(fizzBuzz2(numArray));
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  frase = frase.replace(/a/g, '1');
  frase = frase.replace(/e/g, '2');
  frase = frase.replace(/i/g, '3');
  frase = frase.replace(/o/g, '4');
  frase = frase.replace(/u/g, '5');
  return frase;
}
function decode(frase) {
  frase = frase.replace(/1/g, 'a');
  frase = frase.replace(/2/g, 'e');
  frase = frase.replace(/3/g, 'i');
  frase = frase.replace(/4/g, 'o');
  frase = frase.replace(/5/g, 'u');
  return frase;
}
// Source: https://www.w3schools.com/js/js_string_methods.asp

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
