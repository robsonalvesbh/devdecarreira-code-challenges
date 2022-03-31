// Solução

const person1 = { name: "Jose", body: { weight: 82 } };

/**
 * Fazendo o spread apenas do body
 */

// const person2 = {
//   body: { ...person1.body },
//   name: "robson"
// };

/**
 * Utilizando o JSON.parse e JSON.stringify
 */

const person2 = {
  ...JSON.parse(JSON.stringify(person1)),
  name: "robson"
};

person2.body.weight = 75;

console.log(person1.body.weight);
console.log(person2.body.weight);

console.log(person1.body === person2.body);
console.log(person1.body === { weight: 75 });
