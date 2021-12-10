// Ao resolver um problema com funções, normalmente é bom começar pensando "qual é a entrada?" e "qual é a saída?"

// A entrada é a informação que a função precisa para responder à pergunta que você está fazendo.

// A saída é a resposta à sua pergunta.

// Por exemplo, se você perguntasse "Quanto tempo vou demorar para chegar em casa?"
// a entrada pode ser a distância até sua casa e a velocidade média de seu carro. A saída seria a duração.

// O que poderia ser usado como entrada para a seguinte pergunta:
// "Quantas horas preciso trabalhar para economizar para comprar uma nova TV?"

// A resposta seria Pagamento por hora

// Também é útil pensar em quais tipos de dados a entrada e a saída estarão. Você já conhece muitos tipos de dados diferentes:

// strings
// números
// arrays
// objetos
// boolean (verdadeiro ou falso)

// Que tipo de dados será a saída provável para a pergunta "Quantos minutos vou demorar para chegar em casa?"
// número

// Ao criar uma função, você pode especificar a entrada usando parâmetros.
// Parâmetros são como variáveis usadas apenas na declaração de função.

// Qual é o parâmetro neste código?

// function myFunction(statement) {
//  console​.log(statement)
// }

// statement

// Um comando de retorno geralmente é usado em uma função para retornar a saída.

// function myFunction(statement) {
//  return statement
// }

// Outra coisa a considerar ao resolver problemas usando funções é a diferença entre parâmetros e argumentos.

// Um parâmetro é usado ao declarar a função. Um argumento é usado ao chamar uma função.

function sum(num1, num2) {
  return num1 + num2
}

let score1 = 16
let score2 = 11

sum(score1, score2)

// No exemplo acima, num1 e num2 são parâmetros. Eles existem apenas dentro da declaração de função.
// score1 e score2 são ambos argumentos. Eles são variáveis definidas antes de serem usadas em uma chamada de função.

// Quais são os parâmetros?

// function aFunction(here, there) {
//   return here / there
// }

// aFunction(positionX, positionY)

// here, there

// Quais são os argumentos?

// function aFunction(arr, i) {
//     return arr[i]
// }

// console​.log(aFunction(array, index))

// array, index

// E, por último, lembre-se de que uma função não será executada até que seja chamada.
