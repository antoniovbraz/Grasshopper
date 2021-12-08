// Neste desafio, você usará uma if statement e o operador de igualdade === para executar um bloco de código
// apenas se o teste for verdadeiro. Se o teste dentro dos parênteses () for verdadeiro,
// o código dentro das {} do bloco será executado. Por exemplo:

// if (x === 2) {
// console.log(x);
// }

if (random === 'yes') {
  console.log('Very good that is yes')
}

if (random === 'no') {
  console.log('Why not')
}

if (random === 'maybe') {
  console.log('Why maybe')
}

console.log()

// using a if else statement

if (random === 'yes') {
  console.log('Very good that is yes')
} else if (random === 'no') {
  console.log('Why not')
} else if (random === 'maybe') {
  console.log('Why maybe')
}

// Jogo de adivinhação
// Neste desafio, você criará dicas para adivinhar entre as 3 diferentes conchas para encontrar a ervilha escondida.
// Você usará o operador de comparação !== que significa é diferente de.
// Por exemplo, 5 !== 4 seria true, pois 5 é diferente de 4.

let concha = ['concha 1', 'concha 2', 'concha 3']
let qualConcha = concha[Math.floor(Math.random() * concha.length)]
console.log(qualConcha)

if (qualConcha !== 'concha 1') {
  console.log('Não está na concha 1')
}

if (qualConcha !== 'concha 2') {
  console.log('Não está na concha 2')
}

if (qualConcha !== 'concha 3') {
  console.log('Não está na concha 3')
}

// Como está o tempo?
// O que esse código imprimirá?
let todayWeather = 'rainy'
let tomorrowWeather = 'cloudy'

if (todayWeather === 'rainy') {
  console.log('Bring an umbrella')
}
if (todayWeather !== 'rainy') {
  console.log('Maybe the sun will come out')
}
