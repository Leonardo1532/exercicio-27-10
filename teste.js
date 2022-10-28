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
    ids[index] = prompt("Insira o ID do seu produto")
    nomes[index] = prompt("Insira o nome do seu produto")
    precos[index] = prompt("Insira o PREÇO do seu produto")
    avaliacoes[index] = prompt("Insira a avaliação do seu produto")
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
            console.log("O nome é: "+ nomes[index2])
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
        console.log("O Nome do produto: ", buscaNome, "O ID do produto: ", ids)
    
    }
}
var buscaNome = prompt("Insira um nome para busca")
BuscarProdutoNome(buscaNome)


//4. Exibir todos os produtos ordenados pelo id;



