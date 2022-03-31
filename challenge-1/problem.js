/**
 * Desafio
 * Identificar o output de person1.body.weight
 */

 const person1 = { name: "Jose", body: { weight: 82 } };
 const person2 = { body: { ...person1.body }, name: "robson" };
 
 person2.body.weight = 75;
 
 console.log(person1.body.weight);


 // O output será 82 ou 75?