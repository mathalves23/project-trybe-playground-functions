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
function triangleCheck() {
  // seu código aqui
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
