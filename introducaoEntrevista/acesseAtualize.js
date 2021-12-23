// Para acessar um item específico em uma array, pode ser usada a indexação da array.

// Por exemplo:

let supplies = ['dive mask', 'water shoes', 'fins', 'scuba tank']
let fins = supplies[2]
// supplies[2] acessa o 3º item em supplies, pois as arrays são indexadas começando em 0.

// Indexação também pode ser usado para adicionar ou alterar um valor em uma array.

// Por exemplo, alterar o 2º item em supplies de 'water shoes' para 'wetsuit' seria semelhante a:

supplies = ['dive mask', 'water shoes', 'fins', 'scuba tank']
supplies[1] = 'wetsuit'

// Quando .length é anexado a uma array, ele retorna o número de itens nessa array.

// Por exemplo, [4, 5].length retornará o número 2, porque a array contém 2 itens.

supplies = ['dive mask', 'water shoes', 'fins', 'scuba tank']
console.log(supplies.length) // 4

// O último item em uma array é indexado em .length - 1.
// Em outras palavras, o último item sempre tem um índice que é 1 a menos que o comprimento da array.

// Por exemplo: a array supplies tem um length de 4, então o índice do último item é 3.

// Se um 5º item fosse adicionado a supplies, o último item estaria em índice 4.

supplies = ['dive mask', 'water shoes', 'fins', 'scuba tank']
let index = supplies.length - 1
console.log(supplies[index]) // scuba tank

// Dar forma
// Nesta lição, você mudará a última string na shapes array de circle para hexagon.

// INSTRUÇÕES
// Complete a função setLastValue() para que receba uma array e uma string e substitua o último item na array com a string.

// A função setLastValue() precisará:

// 2 parâmetros de entrada: uma array e uma string
// Uma variável para armazenar o último índice da array
// Atribuir a entrada string na array no último índice
// Em seguida, completar a chamada de função para mudar o valor do último item da array shapes.

let shapes = ['triangle', 'square', 'pentagon', 'circle']

function setLastValue(array, string) {
  let lastIndex = array.length - 1
  array[lastIndex] = string
  return lastIndex
}
setLastValue(shapes, 'hexagon')
for (let item of shapes) {
  console.log(item)
}

// Para acessar um item de uma array, você se consulta o seu número de índice.

// Por exemplo, array[0] acessa o 1º item na array e array[array.length-1] acessa o último item na array.

// Às vezes, você desejará acessar itens da array em um índice vizinho.

// Dado um número índice, i, você pode usar i + 1 ou i - 1 para acessar os itens adjacentes a ele.
// Por exemplo:

let array = ['a', 'b', 'c']
let i = 0
let neighborIndex = i + 1

array[i]
array[neighborIndex]

// No código acima, se i é 0, então neighborIndex é 0 + 1 ou 1.

// array[0] é 'a' e array[1] é 'b'.

array = [1, 2, 3, 4, 5]
i = 2
neighborIndex = i + 1

console.log(array[i] + ',' + array[neighborIndex])

function getNeighbor(arr, i) {
  let neighborIndex = i + 1
  return arr[neighborIndex]
}
console.log(
  'The neighbor to ' + array[index] + ' is ' + getNeighbor(array, index),
)

// Um laço for clássico tem três componentes:

// A variável iterativa e o valor inicial: let i = 0
// O teste para determinar se o laço deve continuar em laço: i < 10
// E como a variável iterativa deve mudar após cada laço: i++

// A variável iterativa é definida antes do bloco de código {} ser executado e o teste é verificado antes de cada laço do código.
// A variável iterativa só é atualizada após o bloco de código do laço ter sido executado.

for (let i = 0; i < 2; i++) {
  console.log(i)
}

// No código de exemplo acima, o laço flui por essas etapas:

// 1. Definindo o valor da variável inicial de i para 0
// 2. Testando se o laço deve estar em execução enquanto i é 0
// 3. Executando o bloco de código console.log(i)
// 4. Atualização de i para 1
// 5. Testando se o laço deve estar em execução enquanto i é 1
// 6. Executando o bloco de código console.log(i)
// 7. Atualização de i para 2
// 8. Testando se o laço deve estar sendo executando enquanto i é 2
// 9. Isso significa que o código registrará 0 e 1 no console.

// Ao acessar elementos vizinhos de uma array em um laço for clássico, é importante definir um ponto inicial ou final correto para o laço.

// Por exemplo, o seguinte laço for clássico tem um bug nele:

for (let i = 0; i < array.length - 1; i++) {
  let neighborIndex = i + 1
  console.log(array[neighborIndex])
}
// Se existissem 7 elementos na array, o que aconteceria quando i fosse 6?

// Lembre-se, a indexação da array começa em 0.

array = ['lemon', 'apple', 'orange']

for (let i = 0; i < array.length - 1; i++) {
  let neighborIndex = i + 1
  console.log(array[neighborIndex])
}

// Se o código dentro de um laço for clássico verifica os elementos vizinhos antes do índice atual, verifique se o laço não começa em 0.

// Por exemplo:

for (let i = 1; i < array.length; i++) {
  neighborBefore = i - 1
  console.log(array[neighborBefore])
}

// Neste exemplo, i é inicialmente definido como 1. Isso significa que console.log(array[i - 1]) imprime o elemento em índice 0.

// Se i fosse definido como 0, então console.log(array[i - 1])
// tentaria imprimir o elemento em índice -1, que não existe (índices de array não podem ser negativos).

// let array = ['lemon', 'apple', 'orange']

for (let i = 1; i < array.length; i++) {
  console.log(array[i - 1])
}

// Tudo o que você aprendeu nas últimas lições sobre arrays também pode ser aplicado a strings.
// É possível acessar caracteres individuais em uma string da mesma forma que acessa itens individuais em uma array.

// Por exemplo, 'fruit'[0] acessa o 1º caractere em 'fruit'.

// Como você acessaria o 't' em 'fruit'?

let lastIndex = 'fruit'.length - 1
console.log('fruit'[lastIndex])

// Fazer um laço pelos caracteres em uma string é como fazer um laço pelos itens de uma array. Por exemplo:

for (let index = 0; index < 'fruit'.length; index++) {
  console.log('fruit'[index])
}

// O código acima imprime todos os caracteres em 'fruit'.

// index começa em 0 e incrementa em 1 cada vez que o laço é executado até atingir o número índice para o último caractere e o laço para.

// Também é possível acessar caracteres adjacentes em uma string da mesma forma que faz com os itens em uma array.

// Dado um número índice, i, você pode usar i + 1 ou i - 1 para acessar seus vizinhos.

// O que é string[neighborIndex]?

let string = 'JavaScript'
i = 3
neighborIndex = i - 1
console.log(string[neighborIndex])
console.log()

// Por exemplo, se você usar i - 1 dentro de um laço, então o laço deve começar no 2º caractere.

for (let i = 1; i < 'fruit'.length; i++) {
  let neighborIndex = i - 1
  console.log('fruit'[i])
  console.log('fruit'[neighborIndex])
}

// Se você usar i + 1 dentro de um laço, então o laço deve terminar no penúltimo caractere.

for (let i = 0; i < 'fruit'.length - 1; i++) {
  let neighborIndex = i + 1
  console.log('fruit'[i])
  console.log('fruit'[neighborIndex])
}
