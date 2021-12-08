// Contando com laços
// Neste desafio, você usará um laço for clássico para repetir o código um certo número de vezes.

for (let i = 0; i < 3; i = i + 1) {
  console.log('hello')
}

console.log()

// INSTRUÇÕES
// Atualize os parênteses () do laço for clássico para continuar o laço até que i seja 10
// Mude o argumento na função print() para usar a letiável de laço i em vez de 'hello'

for (let i = 0; i < 10; i = i + 1) {
  console.log(i)
}

console.log()

// Feliz Ano Novo
// Neste desafio, você usará um laço for clássico para criar uma contagem regressiva para o Ano Novo.

for (let i = 1; i < 11; i = i + 1) {
  console.log(i)
}
console.log('Happy New Year!')

console.log()

// INSTRUÇÕES
// Altere a letiável de laço i para conter o valor 10 em vez de 1
// Mude o teste para continuar o laço enquanto i > 0, em vez de i < 11
// Mude a atualização para diminuir i em 1 a cada laço. Por exemplo, i = i - 1 em vez de i = i + 1

for (let i = 10; i > 0; i = i - 1) {
  console.log(i)
}
console.log('Happy New Year!')

// What's i?
// Lembre-se de que um laço for clássico tem 3 partes:
for (let i = 2; i < 7; i = i + 1) {
  console.log(i)
}

// Onde a iteração começa, isto é, onde i começa: let i = 2; Onde i parará de contar e não imprimirá: i < 7;
// E por quanto vai contar: i: i = i + 1
// O laço for clássico acima irá imprimir: 2 3 4 5 6

// Qual será a saida desse código?
// 0,1,2,3,4
for (let i = 0; i < 5; i = i + 1) {
  console.log(i)
}

console.log()
// Gerador de nomes de banda
// Neste desafio, você usará um laço dentro de outro laço para ajudar a gerar novas ideias de nomes de banda.
// Isso se chama usar um laço aninhado.

for (let adj of ['Raging']) {
  for (let noun of ['Pharmacists']) {
    console.log('The ' + adj + ' ' + noun)
  }
}

console.log()
// INSTRUÇÕES
// Ajude a gerar novas ideias de nomes de banda combinando duas arrays [] usando laços aninhados

// Adicione 2 strings ao array do laço externo, como 'Happy' e 'Hungry'
// Adicione 2 strings ao array do laço interno, como 'Squids' e 'Twins'

for (let adj of ['Raging', 'Happy', 'Hungry']) {
  for (let noun of ['Pharmacists', 'Squids', 'Twins']) {
    console.log('The ' + adj + ' ' + noun)
  }
}
