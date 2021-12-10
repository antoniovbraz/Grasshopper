// Alguns putts
// Neste desafio, você criará uma função que calcula se sua pontuação está abaixo do par.

// A função deve inserir seu score e o número de par e produzir a diferença.

// INSTRUÇÕES
// Dentro da declaração de função underPar():

// Adicione 2 parâmetros dentro dos parênteses (), o 1º para a pontuação e o 2º para o par
// Adicione um comando de retorno dentro do bloco de código {} que retorna par menos a pontuação
// Fora da declaração da função:

// Adicione 2 argumentos à chamada de função: um número para a pontuação e um número para o par

function underPar(score, even) {
  return even - score
}
console.log(underPar(5, 6))

// Funções auxiliares
// Frequentemente, o código pode ser dividido em vários componentes ou funções.
// Às vezes, pode ser útil criar primeiro essas funções individuais separadamente e,
// em seguida, reuni-las em uma função maior.

// Esses componentes menores funções podem ser chamados de funções auxiliares.

function tax(value) {
  let tax = value + value * 0.1
  return tax
}

function bigFunction(price1, price2) {
  let total = price1 + price2
  return tax(total)
}
//   No código acima, tax() é a função auxiliar.

function splitBill(total, people) {
  let withtax = tax(total)
  return withtax / people
}
console.log(splitBill(76, 4))

// Vários retornos
// A palavra-chave return é usada dentro de uma declaração de função para finalizar a função e enviar de volta a saída.
// Por exemplo:

function invert(x) {
  return 1 / x
}

// Quando a função invert() é chamada, ela mostrará o valor de 1 / x.

// Assim que um retorno for executado, a função estará concluída. Se houver algum código após um retorno, ele será ignorado.
// Por exemplo:

function invert(x) {
  return 1 / x
  console.log('done')
}

// Quando a função invert() é chamada, ela mostrará o valor de 1 / x, mas não registrará 'done',
// pois vem depois da execução do return.

function square(x) {
  console.log('start')
  return x * x
  console.log('middle')
  return 100
  console.log('end')
}

console.log(square(2))

// ode ser útil ter vários retornos em uma declaração de função contanto que se espere que apenas o retorno 1 seja executado.
// Por exemplo:

function invert(x) {
  if (x === 0) {
    return 'input was zero'
  } else {
    return 1 / x
  }
}
// Dependendo da entrada, a função invert() retorna 1 dividido pela entrada ou a string, 'input was zero'.

console.log(invert(0)) // indica 'input was zero'
console.log(invert(4)) // indica 0.25

// A função ainda funcionará usando uma if statement em vez de uma if...else statement.

// function invert(x) {
//   if (x === 0) {
//     return 'input was zero'
//   }
//   return 1 / x
// }
// Se x for zero, então a função vai retornar 'input was zero' e o resto do código é ignorado
// Se x não for zero, então a função vai retornar o valor de 1 / x

// A seguinte função vai retornar false se qualquer número em uma array de números for maior que 4.

// Caso contrário, a função vai retornar true

function lessThanFive(numbers) {
  for (let number of numbers) {
    if (number > 4) {
      return false
    }
  }
  return true
}

// Tudo ou nada
// A array testResults contém uma lista de strings. Cada string é 'pass' ou 'fail'.

// A função check() deve iterar através da array e retornar 'failed' se alguma string for igual a 'fail'.

// Se todas as strings são 'pass', então retorna o comprimento da array.

// INSTRUÇÕES
// Dentro da declaração de função check():

// Iterar por results e testar se cada string é igual a 'fail'
// Se for, retorna a string 'failed'
// Abaixo o laço for:

// Retorna results.length

let testResults = ['fail', 'pass', 'fail', 'pass', 'fail', 'pass']

function check(results) {
  for (const element of results) {
    if (element === 'fail') {
      return 'failed'
    }
  }
  return results.length
}
console.log(check(testResults))

testResults = ['pass', 'pass', 'pass', 'pass', 'pass', 'pass']

console.log(check(testResults))

// Variáveis de saída

// Em muitas funções, é útil declarar uma variável para a função para depois retornar.
// Por exemplo:

function calculateSum(numberArray) {
  let sum = 0
  for (let num of numberArray) {
    sum += num
  }
  return sum
}

let arrayOfNum = [98, 85, 76, 51, 33]

console.log(calculateSum(arrayOfNum))

// No exemplo de código acima, a variável sum foi declarada e recebeu o valor 0.

// O laço for...of itera através da array de números e adiciona cada número à sum.

// Após o laço for...of terminar de iterar, sum é retornado.

// Qual é a variável de saída no código a seguir?

function joinStrings(stringsArray) {
  let word = ''
  for (let str of stringsArray) {
    word += str
  }
  return word
} // word

let cities = [
  'London',
  'London',
  'London',
  'Lagos',
  'Lisbon',
  'Louisville',
  'Seatle',
]

console.log(joinStrings(cities))

// Quando o código não está funcionando como esperado,
// às vezes pode ser útil usar console.log() para descobrir o que está acontecendo.
// Por exemplo, dê uma olhada no código a seguir. Há um bug oculto em algum lugar:

function sum(numberArray) {
  let sum = 0
  for (let number of numberArray) {
    sum = number
  }
  return sum
}

console.log(sum([2, 3, 4]))

// Se o código estivesse funcionando corretamente, ele retornaria 9. Em vez disso, ele retorna 4.

// Vamos adicionar um console.log() dentro do laço for, para que possamos ver o que está acontecendo com sum
// enquanto o laço for itera através de numberArray.

function sum(numberArray) {
  let sum = 0
  for (let number of numberArray) {
    sum = number
    console.log(sum)
  }
  return sum
}

sum([2, 3, 4])

// Com o console.log(), a função imprime 2, 3 e 4.

// Isso nos mostra que o bug está aqui:

// sum = number
// Cada number deve ser adicionado a sum. Em vez disso, cada number está sendo atribuído a sum.

// Vamos corrigir...

function sum(numberArray) {
  let sum = 0
  for (let number of numberArray) {
    sum += number
  }
  return sum
}

sum([2, 3, 4])
//   Agora que sum = number foi alterado para sum += number, a função está funcionando corretamente.

// O teste de uma if statement é sempre true ou false. Mas e se algum outro valor for colocado dentro do teste?
// Por exemplo:

if (0) {
  console.log('True!')
} else {
  console.log('False!')
}
// Acontece que a saída será 'False!'.
// Isso significa que o número 0 é falsy, porque ele se comporta da mesma maneira que false dentro de uma teste if statement.

// Em JavaScript, existem 6 valores falsy:

// false: o valor boolean false
// 0: o número zero
// '': a string vazia, uma string sem caracteres
// NaN: significa "Not a Number" (não é um número), geralmente causado por erros matemáticos
// undefined: um valor de uma variável antes de ser atribuído um valor a ela
// null: um valor em branco que pode ser atribuído a uma variável

// Qualquer valor que não seja falsy é chamado de truthy.
// Isso significa todos os números diferentes de 0, qualquer string que não esteja vazia, qualquer objeto ou array, etc.

// Isso significa que se você colocar qualquer um desses valores truthy dentro de um teste if statement,
// o teste será aprovado e o código será executado.

// Qual é a saída deste código?

if ('word') {
  if (100) {
    console.log('1')
  } else {
    console.log('2')
  }
} else {
  console.log('3')
}

// 'word' é truthy, então o código no bloco if será executado. 100 também é truthy, então o código imprimirá 1.

// Números diferentes de zero
// Neste desafio, você registrará os números de -3 a 3, mas pulará 0.

// INSTRUÇÕES
// Altere o código dentro do laço for para que cada número seja registrado, exceto 0.

// Use uma if statement para verificar o valor de i
// Registre o número apenas se o valor não for 0

for (let i = 0 - 3; i < 4; i++) {
  if (i) {
    console.log(i)
  }
}
