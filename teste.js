//Você deve criar funções para:
//1. Cadastrar um produto. Um produto deve ter um 
//id, nome, preço e avaliação;


// deafio 1

var qtdProduto = "s"

var ids = []
var nomes = []
var precos = []
var avaliacoes = []
var index = 0

function CadastrarProduto() {
    ids[index] = parseInt(prompt("Insira o ID do seu produto"))
    nomes[index] = prompt("Insira o nome do seu produto")
    precos[index] = parseInt(prompt("Insira o PREÇO do seu produto"))
    avaliacoes[index] = parseInt(prompt("Insira a avaliação do seu produto"))
    index++
    console.log("Produto cadastrado com sucesso")
    console.log(ids, nomes, precos, avaliacoes)
}

CadastrarProduto()


var opcaoBusca
function Buscar() {
    opcaoBusca = prompt("Qual opção de busca você prefere?: pelo ID(1) pelo NOME(2)")
}

Buscar()

/*desafio 2
Buscar um produto por id, ou seja, passar o id como parâmetro e exibir as
informações do produto correspondente;
*/

function BuscarProdutoID(buscaID) {

    for (var index2 = 0; index2 < index; index2++) {
        if (buscaID == ids[index2]) {

            console.log("O ID do produto é: " + ids[index2])
            console.log("O nome é: " + nomes[index2])
            console.log("O preço é: ", precos[index2])
            console.log("A avaliação: ", avaliacoes[index2])

        }
    }
}

var buscaID = prompt("Insira um ID para busca")
BuscarProdutoID(buscaID)


/*desafio 3
Buscar um produto pelo nome e retornar o id dele;
E.: Entrada = Mouse Médio
Retorno = 2
*/

function BuscarProdutoNome(buscaNome) {

    for (var index3 = 0; index3 < index; index3++) {

        if (buscaNome == nomes[index3]) {

            console.log("O nome do produto é: " + nomes[index3] + " O ID do produto é: " + ids[index3])

        }
    }
    if (buscaNome == nomes[index]) {
        nomes[index] = buscaNome
        console.log("O Nome do produto: ", buscaNome)
        console.log("O ID do produto: ", ids)

    }
}
var buscaNome = prompt("Insira um nome para busca")
BuscarProdutoNome(buscaNome)


//4. Exibir todos os produtos ordenados pelo id;

var menorID = 0
var idSup = []


function OrdenarId() {
    for (var index4 = 0; index4 < ids.length; index4++) {
        menorID = ids[index4]
        for (var index5 = 0; index5 < ids.length; index5++) {
            if (ids[index5] < menorID) {
                menorID = ids[index5]
            }
        }
        for (var contador = 0; contador < ids.length; contador++) {
            if (menorID == ids[contador]) {
                idSup[index4] = ids[contador]
                ids[contador] = 10000000
            }
        }
    }
    console.log(idSup)
    ids = idSup
}
OrdenarId()

//Exibir os produtos ordenador pelo preço;

var menorPreco = 0
var precoSup = []

function OrdenarPreco() {
    for (var contador = 0; contador < precos.length; contador++) {
        menorPreco = precos[contador]
        for (var contador2 = 0; contador2 < precos.length; contador2++) {
            if (precos[contador2] < menorPreco) {
                menorPreco = precos[contador2]
            }
        }
        for (var contador3 = 0; contador3 < precos.length; contador3++) {
            if (menorPreco == precos[contador3]) {
                precoSup[contador] = precos[contador3]
                precos[contador3] = 10000000
            }
        }
    }
    console.log(precoSup)
    precos = precoSup
}
OrdenarPreco()

//6. Exibir os produtos pela ordem de avaliação;

var menorAvaliacao = 0
var avaliacaoSup = []

function OrdenarAvaliacao() {
    for (var contador = 0; contador < avaliacoes.length; contador++) {
        menorAvaliacao = avaliacoes[contador]
        for (var contador2 = 0; contador2 < avaliacoes.length; contador2++) {
            if (avaliacoes[contador2] < menorAvaliacao) {
                menorAvaliacao = avaliacoes[contador2]
            }
        }
        for (var contador3 = 0; contador3 < avaliacoes.length; contador3++) {
            if (menorAvaliacao == avaliacoes[contador3]) {
                avaliacaoSup[contador] = avaliacoes[contador3]
                avaliacoes[contador3] = 10000000
            }
        }
    }
    console.log(avaliacaoSup)
    avaliacoes = avaliacaoSup
}
OrdenarAvaliacao()




//7. Atualizar o preço de um produto, para isso deve receber o id do produto como parâmetro e o novo valor para atualizar;

var precoAtualizado
var idAtualizar = prompt("Insira o ID do produto que queira atualizar")


function AtualizarPreco(idAtualizar) {

    precoAtualizado = parseInt(prompt("Insira um novo valor para o produto"))
    for(var index = 0; index < ids.length; index++){
        if(idAtualizar == ids[index]){
            precos[index] = precoAtualizado 
            console.log("o novo valor deste produto é: " + precoAtualizado )
        }
    }

}
AtualizarPreco(idAtualizar)

/* 8. Deletar um produto, não esqueça de organizar as informações para que não fique
espaços vazios;
Por fim, utilizando as funções criadas organize a execução do seu código, faça com que o
usuário possa escolher qual função executar e quando encerrar o programa.
*/



