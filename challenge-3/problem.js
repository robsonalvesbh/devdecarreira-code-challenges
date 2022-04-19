/**
 * Desafio
 * Identificar quais serão as propriedades
 * do objeto impressas no console
 */
const pessoa = { nome: "Maria", idade: 25 };

pessoa.idade = undefined;

console.log(Object.keys(pessoa));

// O output será:
// B. [ 'nome',  'idade' ]
