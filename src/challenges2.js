// Desafio 10
function techList(tec, nameString) {
  tec = tec.sort();
  let result = [];
  if (tec.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tec.length; index += 1) {
    let addTech = {
      tech: tec[index],
      name: nameString,
    };
    result.push(addTech);
  }
  return result;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let aMenosB = Math.abs(lineA - lineB);
  let aMaisB = Math.abs(lineA + lineB);
  let aMenosC = Math.abs(lineA - lineC);
  let aMaisC = Math.abs(lineA + lineC);
  let bMenosC = Math.abs(lineB - lineC);
  let bMaisC = Math.abs(lineB + lineC);
  if (aMenosB < lineC && lineC < (aMaisB) || aMenosC < lineB && lineB < (aMaisC) || bMenosC < lineA && lineA < (bMaisC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
