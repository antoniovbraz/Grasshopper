// Laço de strings
// Neste desafio, será usado um laço for...of para imprimir cada letra de uma string, linha por linha.
// O Laço for...of permite que você repita o mesmo bloco de código várias vezes.
// Por exemplo, for (var element of 'hello') {} executaria o código dentro das {} do bloco 5 vezes,
// pois a string 'hello' tem 5 caracteres.

for (const letter of 'Antonio') {
  console.log(letter)
}

// Arco-íris mais comprido
// Neste desafio, você usará um laço for...of para repetir uma array de cores e criar um padrão de arco-íris.
for (const x of [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]) {
  console.log(x)
  console.log()
}

// Decodificador de imagem
// Neste desafio, você usará uma if statement dentro de um laço for...of para
// revelar uma imagem. Cada vez que o laço for...of faz uma iteração,
// a if statement aninhada dentro dele testará a letter atual em palavra.

let palavra = 'antonio henrique'

for (let letter of palavra) {
  if (letter !== 'e') {
    console.log(letter);
  }
}

// Qual direção?
// Qual será a saída deste código?

for (const element of [5,4,3,2,0,1]) {
  console.log(element)
}

// 5,4,3,2,0,1
