// Diga seu objetivo
// Este 1º desafio é muito simples, para que você se acostume a não ter um código inicial.

// INSTRUÇÕES
// Use uma função console.log() para imprimir a string 'I am going to climb a mountain'
console.log('I am going to climb a mountain')

// Arrume sua mala
// Para escalar uma montanha, é preciso ter todos os equipamentos corretos.
// Neste desafio, você criará um objeto chamado myBackpack e o preencherá com os equipamentos necessários.

// INSTRUÇÕES
// Crie uma variável chamada myBackpack
// Atribua um objeto{} a essa variável
// Adicione a propriedade food dentro do objeto e dê a ela o valor 'bananas'
// Adicione uma propriedade a equipment dentro do objeto e dê a ela o valor'map'
// Adicione uma propriedade de clothing dentro do objeto e dê a ela o valor 'hat'
// Use a função console.log() para imprimir a propriedade alimento do objeto usando myBackpack.food

let myBackpack = {
  food: 'bananas',
  equipment: 'map',
  clothing: 'hat',
}

console.log(myBackpack.food)

// Obtenha mais suprimentos
// No caminho para a montanha, um guarda-florestal examinou sua mochila e disse para você embalar mais alguns suprimentos.

// INSTRUÇÕES
// Substitua 'bananas' por uma array que armazene 2 ou mais alimentos
// Substitua 'map' por uma array que armazene 2 ou mais equipamentos
// Substitua 'hat' por uma array que armazene 2 ou mais roupas

myBackpack = {
  food: ['bananas', 'apple', 'pear'],
  equipment: ['map', 'lighter', 'rope'],
  clothing: ['hat', 'jacket', 'pants'],
}

console.log(myBackpack)

// Atualize seu progresso
// Você está escalando a montanha! Neste desafio, você calculará o progresso da elevação.

// INSTRUÇÕES
// A base da montanha começa a 100 metros e você escalou mais 455 metros.

// Atribuir um novo valor para a variável elevation, adicionando 455 a elevation
// Use a função console.log() para imprimir a elevation atualizada

let elevation = 100
console.log(elevation)
elevation += 455
console.log(elevation)

// Mochila errada
// Ah, não! Você decidiu parar para fazer um lanche e percebeu que deve ter pegado a mochila de outra pessoa quando o guarda-florestal a estava verificando mais cedo. Não foi você que preparou essa mochila e não sabe o que tem dentro dela.
// Você decide verificar que alimentos estão dentro da otherBackpack.

// INSTRUÇÕES
// Crie um laço for...of para verificar cada item armazenado em otherBackpack.food
// Use a função console.log() com a variável de laço element como argumento

let otherBackpack = {
  food: ['chocolate', 'snacks', 'water'],
  equipment: ['clippers', 'screw', 'rope'],
  clothing: ['shorts', 'scarf', 'underwear'],
}

for (const element of otherBackpack.food) {
  console.log(element)
}

// A subida final
// Você está quase no pico, mas deve escalar os últimos 3 metros para chegar ao topo. Tomara que a otherBackpack tenha uma corda dentro da propriedade equipment.

// INSTRUÇÕES
// Adicione um laço for...of para percorrer todos os itens dentro da otherBackpack.equipment
// Adicione uma if...else statement dentro das {}do bloco do laço for...of e teste se element é igual a'rope'
// Se o item que você está examinando for 'rope', imprima uma mensagem dizendo que a corda foi encontrada
// Dentro das {} do bloco else, imprima uma mensagem dizendo que a corda não foi encontrada
for (const element of otherBackpack.equipment) {
  if (element === 'rope') {
    console.log('I found some rope!')
  } else {
    console.log(`${element} is not useful right now`)
  }
}
