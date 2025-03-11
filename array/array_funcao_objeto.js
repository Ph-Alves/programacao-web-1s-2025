let num_A = 2
let num_B = 4
let result

/* 
let operacoes = [1, true, 3, "1"]
operacoes[2] // 3 item (porque começa do 0)
operacoes[2] = 4 //não vai dar erro
operacoes = [1, true, 4, "1"] // vai dar erro pois o array é um endereço de memória (constante)
*/

const operacoes = ["adição", "subtração", "multiplicação", "divisão", "divisão de resto"]

function imprimirResultado(num_A, num_B, operacoes, result){
    console.log(`Resultado da ${operacoes} entre ${num_A} e ${num_B} é ${result}`)
}

result = num_A + num_B
imprimirResultado(num_A, num_B, operacoes[0], result)

result = num_A - num_B
imprimirResultado(num_A, num_B, operacoes[1], result)

result = num_A * num_B
imprimirResultado(num_A, num_B, operacoes[2], result)

result = num_A / num_B
imprimirResultado(num_A, num_B, operacoes[3], result)

result = num_A % num_B
imprimirResultado(num_A, num_B, operacoes[4], result)

let matriz = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]

console.log(matriz)