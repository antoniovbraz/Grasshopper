// Cores personalizadas
// Neste desafio, você editará as propriedades de um objeto para criar a cor magenta.
// Objetos permitem que você armazene muitas propriedades dentro de uma única variável.

let rgbObject = {
  red: 255,
  green: 255,
  blue: 0,
}

console.log(rgbObject)

console.log()

// INSTRUÇÕES
// Edite as propriedades do objeto someCustomColor para desenhar uma caixa magenta:

// Atualize a propriedade green para 0
// Atualize a propriedade blue para 255

rgbObject = {
  red: 255,
  green: 0,
  blue: 255,
}

console.log(rgbObject)

// Crie um nome para você mesmo
// Neste desafio, você adicionará um par propriedade-valor a um objeto.
// Depois, use essa propriedade em uma função console.log().

let name = {
  first: 'Martin ',
  middle: 'Luther ',
}
console.log(name.first + name.middle + name.first)

// INSTRUÇÕES
// Adicione uma propriedade last dentro do objeto name e adicione uma string como o valor
// Atualize a função print() para imprimir o valor de name.last

name = {
  first: 'Antonio Henrique ',
  middle: 'Vanucci ',
  last: 'Braz',
}
console.log(name.first + name.middle + name.last)

// Qual transmissão?
// Qual é o valor da propriedade transmission em car?

let car = {
  transmisson: 'automatic',
  doors: 4,
  color: 'Blue',
}

console.log(car.transmisson)

// Que tom de azul você consegue?
// Neste desafio, você verificará uma propriedade objeto como parte de um teste if statement.
// Se essa propriedade for maior que > 200, então o objeto será usado na console.log().

if (rgbObject.blue > 200) {
  console.log(rgbObject)
}

// Qual cor?
// Esse código criará uma caixa de que cor?
rgbObject = {
  red: 0,
  green: 0,
  blue: 255,
} //   blue

// O que é açúcar?
// Qual é o valor armazenado na variável sugar?
let teacup = { red: 100, green: 50, blue: 50 }
let sugar = teacup.blue
// 50

// É azul o suficiente?
// Qual código desenhará uma caixa apenas se a propriedade azul de rgbObject for maior do que 10?
if (rgbObject.blue > 10) {
  console.log(rgbObject)
}
