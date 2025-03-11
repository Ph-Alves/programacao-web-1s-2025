function verificarNumeroPrimo(n){
    let i = n
    let result
    for (i; i > 1; i--){
        if (i != n && i != 0){
            if (n % i == 0){
                result = false
            }
        } else {
            result = true
        }
    }
    if (n == 0 || n == 1){
        result = false
        return console.log(result)
    }
    return console.log(result)
}

verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false