let estoque = [
    [],
]

function adicionar(id, nome, qtd){
    estoque.push([id, nome, qtd]);
    console.log("Item adicionado!!")
}

function listar(){
    teste = ""
    for (let i=0; i < estoque.length; i++){
        let linha = ""
        for (let j=0; j < estoque[i].length; j++){
            linha += estoque[i][j] + "\t"
        }
        teste += linha + "\n";
    }
    return teste
}

function remover(id){
    estoque.splice(id, 1);
}

function editar(id, qtd){
    for (let i=0; i < estoque.length; i++){
        for (let j=0; j < estoque[i].length; j++){
            if (estoque[i][0] == id){
                estoque[i][2] = qtd
                console.log("Quantidade do item editado!");
                return;
            }
        }
    }
    console.log("Item não encontrado!")
}

module.exports = {
    adicionar,
    listar,
    remover,
    editar,
  };