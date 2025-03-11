function matrizTransposta(A) {
    console.log("Matriz Normal: ")
    for (let i=0; i < A.length; i++){
        let linha = ""
        for (let j=0; j < A[i].length; j++){
            linha += matriz[i][j] + "\t"
        }
        console.log(linha);
    }

    console.log("Matriz transposta: ")
    for (let i=0; i < A.length - 1; i++){
        let transposta = ""
        for (let j=0; j < A.length; j++){
            transposta += matriz[j][i] + "\t"
        }
        console.log(transposta);
    }
}

matriz = [
    [1,2],
    [3,4],
    [5,6]
]

matrizTransposta(matriz)