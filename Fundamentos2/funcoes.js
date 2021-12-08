// Casa de câmbio
// Neste desafio, você aprenderá sobre declarações de função.
// Declarações de função salvam um bloco de código que pode ser usado sempre que o nome da função é chamado.

// INSTRUÇÕES
// A declaração de função inYen() pegará um número em dólares americanos e o converterá em ienes japoneses.

// Atualize o 0 no último console.log() com inYen(100).

function inYen(dollars, ___) {
  let amount = dollars * 113
  return amount
}
console.log('20 US dollars is:')
console.log(inYen(20) + ' Japanese yen')
console.log('100 US dollars is:')
console.log(inYen(100) + ' Japanese yen')

// Um pouco mais de mudança
// Neste desafio, você criará uma declaração de função que usa um comando de retorno para converter dólares em baht tailandês.
// A palavra-chave return diz a uma função para parar de executar e retorna um valor.

// INSTRUÇÕES
// Dentro do bloco de código {} da função inBaht():

// Use let para criar uma variável chamada baht
// Atribuir baht o valor dollars * 33
// Return baht

let wallet = 50
function inYen(dollars) {
  let yen = dollars * 113
  return yen
}
function inBaht(dollars) {
  let baht = dollars * 33
  return baht
}
console.log(wallet + ' US dollars is:')
console.log(inYen(wallet) + ' Japanese yen')
console.log(inBaht(wallet) + ' Thai baht')

// Ao máximo
// Nesta lição, você adicionará uma chamada de função a uma declaração de função.
// Complete a declaração de função maximum() adicionando uma chamada de função larger().

// INSTRUÇÕES
// Dentro do laço for...of da declaração de função maximum():

// Altere max = num para max = larger(max, num)

let arrayOfNum = [98, 85, 76, 51, 33]

function larger(a, b) {
  return a > b ? a : b
}
function maximum(array) {
  let max = 0
  for (let num of array) {
    max = larger(max, num)
  }
  return max
}
console.log(arrayOfNum)
console.log(maximum(arrayOfNum))

// Substituição de recursão
// Neste desafio, você usará uma função para corrigir recursivamente todos os erros de digitação de uma string.

// INSTRUÇÕES
// Na última linha da declaração de função updateAllNames():

// Altere a return string para return updateAllNames()
// Atualize os argumentos para (string, oldPart, newPart) respectivamente

let travelDocument =
  'Hello grasshoperVacation! You will be going to Maui. Your travel code is: "no1grasshoper" Enjoy your trip grasshoper!'

function updateAllNames(string, oldPart, newPart) {
  if (string.includes(oldPart) === false) {
    return string
  }
  string = string.replace(oldPart, newPart)
  return updateAllNames(string, oldPart, newPart)
}
console.log(travelDocument)
console.log(updateAllNames(travelDocument, 'grasshoper', 'grasshopper'))

// Quando irá parar?
// Quando a função sumUpTo() parará de chamar a si mesma (parar recursão)?
function sumUpTo(number) {
  if (number === 1) {
    return 1
  }
  return number + sumUpTo(number - 1)
}

console.log(sumUpTo(4))

// Meu assistente
// Neste desafio, você usará uma função que recebe outra função como um argumento. A função sendo usada como um argumento é uma função de retorno de chamada.

// INSTRUÇÕES
// Adicione outra chamada de função myAssistant()
// Para o 1º argumento: dê um tempo como uma string
// Para o 2º argumento: use setAlarm outurnOnLights como função retorno de chamada

// function myAssistant(time, callbackFunction) {
//   console.log(
//     'I am your personal assistant, and I am happy to help with your request',
//   )
//   callbackFunction(time)
// }
// myAssistant('6pm', recordShow)

// Nesta lição, você usará a palavra-chave import para importar uma função para usar como um retorno de chamada.
// Um comando de importação é uma maneira de usar o código armazenado em um local diferente.
// Use a função de retorno de chamada turnOffFan dentro de uma chamada de função myAssistant() para agendar quando desligar o ventilador.

// INSTRUÇÕES
// Na parte inferior do código:

// Adicione myAssistant()
// Use uma string como o 1º argumento para definir a hora
// Use turnOffFan como o 2º argumento para usar como um retorno de chamada
// import {
//   recordShow,
//   setAlarm,
//   turnOffFan,
//   turnOnFan,
//   turnOffLight,
//   turnOnLight,
// } from 'assistantFunctions'
// function myAssistant(time, callbackFunction, ___) {
//   console.log('Scheduling:')
//   callbackFunction(time, ___)
//   console.log('Complete.')
// }
// myAssistant('8am', turnOnFan)
// myAssistant('8pm', turnOffFan)
