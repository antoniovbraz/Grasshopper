// Matemática modificadora
// Neste desafio, você usará o operador mais e o operador menos para atualizar um valor de variável.

let x = 5
x = x + 5
console.log('x is ' + x)
x = x - 2
console.log('x is now ' + x)

// Simplesmente mais matemática
// Neste desafio, você usará o operador de multiplicação *
// e o operador de divisão / para atualizar o valor de uma variável.

let y = 10
y = y * 3
console.log(y)
y = y / 2
console.log(y)

// Quanto é?
// Qual será o valor final da variável x?

let z = 1
z = z + 3
z = 10 - z

console.log(z)

// How Many Seconds?
// Na programação, é muito comum criar uma variável usando outra variável:

let days = 2
let hours = days * 24
console.log(hours)
// O código acima converte 2 days em 48 hours porque há 24 horas em 1 day.

// Um minuto tem 60 segundos. Como você converteria minutes em seconds?
let minutes = 35
let seconds = minutes * 60
console.log(seconds)

// Abra a fechadura
// Neste desafio, você usará o operador e && para combinar 2 verificações em 1 if statement.
// Por exemplo, a if statement if(bColor === 'blue' && gColor === 'green')
// só executa o código nas {} do bloco se bColor contiver o valor 'blue' e gColor contiver o valor 'green'.

let pinNumber = 5
let foundKey = 'no'
console.log('pinNumber is ' + pinNumber)
console.log('foundKey is ' + foundKey)

pinNumber = 10
foundKey = 'no'
console.log('pinNumber is ' + pinNumber)
console.log('foundKey is ' + foundKey)
if (foundKey === 'no' && pinNumber === 10) {
  console.log('The pin number is right, but you are missing the key.')
}

pinNumber = 10
foundKey = 'yes'
console.log('pinNumber is ' + pinNumber)
console.log('foundKey is ' + foundKey)
if (foundKey === 'yes' && pinNumber === 10) {
  console.log('You opened the lock!')
}

// Descreva os números
// Neste desafio, você usará mais operadores como o operador maior que >, o operador menor que < e o operador ou ||

console.log('x is ' + x)
console.log('y is ' + y)
if (x > 3 && y < 11) {
  console.log('x is greater than 3, and y is less than 11')
}
if (x > 10 || y > 10) {
  console.log('x or y, or both, are greater than 10')
}
