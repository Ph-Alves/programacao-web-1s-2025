const n = 3 // variável de valor único, não pode ser alterado depois de alterado.
//n=5

var j = 2 // variável normal de escopo global.
var j = 3 // seu valor pode ser alterado.

console.log('j = ' + j)

let i = 4 // declarada uma única vez, não pode ser declarada novamente.
//let i=6 dará erro 
i = 6

console.log('i = ' + i)

let minhaString = "Hello World!"
minhaString = 'Hello World!'

console.log(minhaString)

// Caso eu não declare o tipo da variável,  ela declara como VAR por padrão.
let nome = 'Paulo'
let cpf = '123'


let tString = `Meu nome é ${nome}. Meu cpf é ${cpf}`

console.log(tString)

let x = 5.0
x = .5
console.log("x vale: " + x)
x = 3
console.log("x vale agora: " + x)

// Tipos booleanos
let verdadeiro = true
let falso = false

// Tipos nulos e undefined
let conexao = null // tipo nulo, nada
let conexao2 // variável criada mas não tem valor atribuído, fica undefined

let y = x - x
console.log('y = ' + y)
