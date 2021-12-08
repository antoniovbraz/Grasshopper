// Cartão postal pós-escalada
// Neste desafio, você usará a propriedade .length para verificar o número total de caracteres em uma string.

// Por exemplo, 'Code is fun!'.length retorna o número 12 (espaços e símbolos também contam).

let text = 'Code is fun!'
console.log(text)
if (text.length < 80) {
  console.log('The message fits on a postcard')
}

// Quantos caracteres?
// O que esse código imprimirá?
console.log('I code'.length) // 6

// Bot de bate-papo
// Neste desafio, você criará um bot de bate-papo usando o método includes e algumas if statements.
// O método .includes() pode ser usado em uma string para verificar se ela contém um valor específico.

// Por exemplo, 'I love coding'.includes('love') pesquisa a string 'I love coding' para o argumento 'love'.
// Como a frase 'I love coding' contém 'love', todo o comando retorna true.

// INSTRUÇÕES
// A 1ª if statement já está completa. Ele responderá se 'hello' estiver em qualquer lugar na string chat.

// Atualize a 2ª if statement substituindo chat === 'bye' por chat.includes('bye')
let chat = 'hello, how are you?'
console.log(chat)
if (chat.includes('hello')) {
  console.log('Hi, can I help you pick a destination?')
}

chat = 'not today, bye.'
console.log(chat)
if (chat.includes('bye')) {
  console.log('See you later, have a great trip!')
}

// A um dia
// Neste desafio, você usará o método .replace() para substituir parte de uma string. O método .replace() procura um valor e, se o encontrar, substituirá o 1º valor por uma nova string. Por exemplo, para mudar a string 'lemons' em'lemonade', você usaria .replace('lemons', 'lemonade').

// INSTRUÇÕES
// Altere o 2º argumento em .replace() de 'mato' para 'morrow'

let message = 'Today we are going shopping!'
message = message.replace('day', 'morrow')
console.log(message)

// Existe um dia?
// O que esse código imprimirá?
console.log('Happy days'.includes('day')) //true

// Como vai?
// Qual será o resultado desse código?
let greeting = 'Hello Grasshopper!'
greeting = greeting.replace('hopper', 'jumper')
console.log(greeting) // Hello Grassjumper
