//Criar uma variável chamada 'nome' e mostre no console: "Olá, meu nome é.......". Usando templateString
const nome = 'Wilson';
console.log(`Olá, meu nome é ${nome}`);

//Crie duas variáveis de números e mostre a soma
const num1 = 3;
const num2 = 5;
const soma = num1 + num2;
console.log(`A soma de ${num1} + ${num2} é ${soma}`);

//calcule o dobro de um número armazenado em uma variável
const n1 = 10;
const mult = n1 * 2;
console.log(`O dobro de ${n1} é ${mult}`);

const num = 7;
console.log(`O dobro de ${num} é ${num + num}`);

//Verifique se um número é par ou impar
const parOuImpar = 2;
if (parOuImpar % 2 === 0) {
    console.log(`O número ${parOuImpar} é par`)
} else {
    console.log(`O número ${parOuImpar} é ímpar`)
}

//Verificar se uma pessoa é maior de idade
const idade = 18;
if (idade >=18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade');
}

//operador ternário ? :
const idade2 = 18;
const maioridade2 = (idade2 >= 18) ? `Você tem ${idade2} e é maior de idade` : 'Menor de idade';
console.log(maioridade2)

//Receba uma nota (0-10) e exiba: "Aprovado" >7, "Recuperação >=5 && <=6.9" ou "Reprovado < 4.9"
const nota = 11;
if (nota >=7 && nota <=10) {
    console.log('Aprovado')
} else if (nota >=5 && nota <= 6.9) {
    console.log('Recuperação')
} else if (nota <= 4.9 && nota >= 0) {
    console.log('Reprovado')
} else {
    console.log('Nota inválida')
}
