// // Escopo letiável
// Na programação, o escopo determina onde uma letiável está acessível.
// As letiáveis podem ter escopo global ou local.

// Uma letiável global pode ser usada em todo o código.
// Uma letiável local só pode ser usada dentro do bloco onde é declarada.

// No código abaixo, a letiável myLocalNumber é declarada usando a chave let.
// Isso significa que ele só existe dentro do bloco da if statement.
// O impossibleCalculation não funcionará porque a letiável myLocalNumber não existe fora da if statement.

let myGlobalNumber = 5
if (myGlobalNumber > 3) {
  let myLocalNumber = 4
}
// let impossibleCalculation = myGlobalNumber + myLocalNumber

// Guardião da cores
// Às vezes, é necessário manter as letiáveis separadas, para garantir que não sejam alteradas por engano.
// letiáveis declaradas com let não podem ser usadas fora do bloco de código onde vivem.

// INSTRUÇÕES
// Dentro das {} do bloco de código do laço for...of:

// Adicione console.log(color)

let color = 'yellow'
console.log(color)
for (let color of ['blue', 'green']) {
  console.log(color)
}
console.log(color)

// Deixar para lá?
// Qual será o resultado desse código?

let x = 10
if (x > 5) {
  let x = 1
} else {
  let x = 0
}

console.log(x) // 10

// Estradas ou trilhos
// Neste desafio, você usará um operador ternário para decidir se tomará um carro ou trem baseado no menor tempo de viagem.

// O operador ternário usa um ponto de interrogação ?
// E dois pontos : para substituir uma if...else statement inteira por uma única linha de código.
// Por exemplo: test ? doThisIfTrue : elseDoThis.

// INSTRUÇÕES
// Na parte inferior do código:

// Adicione um operador ternário que testa se o valor de car é menor que o valor de train
// Imprimir 'Drive a car' se o teste for true
// Imprimir 'Buy train tickets' se o teste for false

let timeOffWork = 7
let daysNeeded = 5
timeOffWork > daysNeeded
  ? console.log('Go on vacation')
  : console.log('Go to work')
let train = 3
let car = 2
car < train ? console.log('Drive a car') : console.log('Buy train tickets')

// Matemática mais simples
// Neste desafio, você usará os operadores de incremento e decremento para atualizar rapidamente uma variável.
// O operador de incremento ++ adiciona 1 a uma variável, enquanto o operador de decremento -- subtrai 1.
// Por exemplo, count++ é igual a count = count + 1.

// INSTRUÇÕES
// Atualize x após a 1ª função console.log(), usando o operador de decremento --

x = 5
x++
console.log('x is ' + x)
x--
console.log('x is now ' + x)

// O inverno está chegando
// Neste desafio, você atualizará rapidamente as variáveis usando os operadores atribuição de adição += e
// atribuição de subtração -=.

// A formiga guardou 40 sementes para o inverno, enquanto o gafanhoto não guardou nenhuma.
// A generosa formiga decide presentear o gafanhoto com 10 sementes.

// INSTRUÇÕES
// Atualize o código para que gift seja subtraído de ant e adicionado a grasshopper.

// Altere ant -= 1 para ant -= gift
// Altere grasshopper += 1 para grasshopper += gift
let ant = 40
let gift = 10
let grasshopper = 0
ant -= gift
grasshopper += gift
console.log(
  'The Ant has ' +
    ant +
    ' seeds, and the Grasshopper has ' +
    grasshopper +
    ' seeds',
)
