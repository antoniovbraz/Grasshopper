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
