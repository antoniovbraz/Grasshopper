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
