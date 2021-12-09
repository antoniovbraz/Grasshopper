let cities = [
  'London',
  'London',
  'London',
  'Lagos',
  'Lisbon',
  'Louisville',
  'Seatle',
]
let arrayOfNum = [98, 85, 76, 51, 33]

// Corrija os dados
// Neste desafio, você usará o método .slice() para criar uma nova array.
// O método .slice() cria uma nova array copiando uma subseção de outra array.
// São necessários 2 argumentos: um índice de array onde começar a copiar e um índice onde terminar (fim não incluído).

// INSTRUÇÕES
// Atualize cities.slice() no último console.log() para começar a partir do 3º elemento, em vez do 1º elemento
console.log(cities.slice(2, 7))

// Um novo lugar
// Neste desafio, você usará o método .push() para adicionar um novo elemento ao final de uma array.

// INSTRUÇÕES
// Dentro do objeto boatAtlanta:

// Altere o valor de destination de Seattle para 'Atlanta'
// Altere o valor de transportMode de car para 'boat'

let lastedit = cities[cities.length - 1]
// console.log(last.destination)
let boatAtlanta = {
  destination: 'Atlanta',
  transportMode: 'boat',
  cost: 200,
  country: 'Hoptopia',
}
cities.push(boatAtlanta)
last = cities[cities.length - 1]
console.log(last.destination)
console.log(last.transportMode)
// console.log(cities)

// Um novo caminho
// Neste desafio, você usará o método .pop() para remover o último elemento de uma array.
// O método .pop() removerá o último item em uma array.
// Por exemplo: myArray.pop() pegaria o último item salvo em myArray, removeria esse item de myArray e retornaria
// o valor do item.

// INSTRUÇÕES
// Atualize atlantaTravel.transportMode para que seja igual a 'hovercraft'
// Adicione cities.push() à próxima linha de código
// Use atlantaTravel como um argumento para cities.push()

let atlantaTravel = cities.pop()
atlantaTravel.transportMode = 'hovercraft'
cities.push(atlantaTravel)
last = cities[cities.length - 1]
console.log(last.destination)
console.log(last.transportMode)

// Hora de ir
// Neste desafio, você usará o operador de propagação para copiar todos os elementos de uma array em outra array.

// INSTRUÇÕES
// Adicione o operador de propagação (...) para flights
// Adicione o operador de propagação (...) para buses
let flights = ['8am', '12pm', '6am', '7pm', '11am']
let trains = ['8am', '12pm', '6am', '7pm', '11am']
let buses = ['8am', '12pm', '6am', '7pm', '11am']

let departures = [...flights, ...trains, ...buses]
for (let time of departures) {
  console.log(time)
}
console.log(departures.length + ' total times')

// Noite e dia
// Neste desafio, você usará o método .filter() para selecionar itens de uma array que passam em um determinado teste.

// Cada item na array é usado como um argumento em uma função retorno de chamada e se retornar true, o item passa pelo filtro.
// Caso contrário, o item é filtrado.

// INSTRUÇÕES
// Atualize a declaração da variável pmTimes para usar .filter() como um método em departures
// Atualize o método .filter() para usar o argumento evening

function morning(time) {
  return time.includes('am')
}

function evening(time) {
  return time.includes('pm')
}

let amTimes = departures.filter(morning)
let pmTimes = departures.filter(evening)

console.log('Day times: ' + amTimes)

console.log('Night times: ' + pmTimes)

// Encontrar um bom negócio
// Neste desafio, você usará o método.forEach() para descobrir os preços mais altos e mais baixos
// de uma passagem de avião na semana anterior.
// O método .forEach() percorre cada item de uma array e usa o item como um argumento
// para a função retorno de chamada especificada.

// INSTRUÇÕES
// Na linha acima do último console.log():

// Adicione flightPrices.forEach() e use compareToMinimum como um argumento
let flightPrices = [161, 118, 281, 344, 129, 257, 287]

let max = flightPrices[0]
let min = flightPrices[0]

function compareToMaximum(value) {
  max = value > max ? value : max
}

function compareToMinimum(value) {
  min = value < min ? value : min
}
console.log(flightPrices)
flightPrices.forEach(compareToMaximum)
console.log('Maximum: ' + max)
flightPrices.forEach(compareToMinimum)
console.log('Minimum: ' + min)

function average(array) {
  let total = 0
  for (let element of array) {
    total += element
  }
  return total / array.length
}

console.log('The average is:')
console.log(average(flightPrices))

function underTwoHundred(value) {
  return value < 200
}

let under200 = flightPrices.filter(underTwoHundred)
console.log(under200)

let hour = Math.random(24)
console.log(hour + ':00')

if (hour < 13) {
  console.log('good morning')
}

if (hour > 12) {
  console.log('good afternoon')
}
