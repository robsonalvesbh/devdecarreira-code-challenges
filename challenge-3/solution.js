/**
 * Desafio
 * Identificar quais serão as propriedades
 * do objeto impressas no console
 */
 const pessoa = { nome: "Maria", idade: 25 };

 pessoa.idade = undefined; // Não remove a propriedade do objeto
 console.log(pessoa);
 
 delete pessoa.idade; // Remove a propriedade do objeto
 console.log(pessoa);
