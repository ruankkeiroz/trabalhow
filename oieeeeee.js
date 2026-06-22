let form = document.getElementById("id_form");
let lista_result = document.getElementById("resultado");
let animales = [];

form.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let idade = document.getElementById("id_idade").value;
    let especie = document.getElementById("id_especie").value;
    let animal = {
        nome: nome,
        idade: idade,
        especie: especie,
    }

    adicionar(animal);
    listar();
    cadastrarLocalStorage("animaizes", animales);
});

function adicionar(animal){
    animales.push(animal);
};

function listar(){
    lista_result.innerHTML = "";
    console.log(lista_result);

    for(let i = 0; i < animales.length; i++){
        lista_result.innerHTML += `${i}| Nome: ${animales[i].nome}, Idade: ${animales[i].idade}, Espécie: ${animales[i].especie} <p>
        <input type="button" onclick="excluir(${i})" value = "Excluir">
        <input type="button" onclick="editar(${i})" value = "Editar">
        <br/>`;
    }
};

function excluir(indice){
let resposta = confirm("Tem certeza que deseja excluir o animal?(essa ação não poderá ser revertida futuramente)")
   if(resposta){
     animales.splice(indice, 1);
    console.log("Animal deletado com sucesso!")}

     else{console.log("Animal não deletado, aeeee")};

      
    listar();
};

function editar(indice){

    let NovoNome = prompt("Digite o novo nome: ", animales[indice].nome);
    let NovaIdade = prompt("Digite a nova idade: ", animales[indice].idade);
    let NovaEspecie = prompt("Informe a nova espécie: ", animales[indice].especie);

    if(NovoNome && NovaIdade && NovaEspecie){
        animales[indice].nome = NovoNome;
        animales[indice].idade = NovaIdade;
        animales[indice].especie = NovaEspecie;
    }
    console.log(NovoNome)
    listar();

};

function cadastrarLocalStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor));
};
function listarLocalStorage(){
    animales = JSON.parse(localStorage.getItem("animaizes"));
    console.log(JSON.parse(localStorage.getItem("animaizes")));
    listar();

};
listarLocalStorage();

//JSON.stringify converte um objeto em string
//JSON.join converte de array para string
//JSON.parse converte string pra objeto
//localStorage.setItem("chave", string) // Cadastrar localmente
//localStorage.getItem("chave") // Consultar através de uma chave
//localStorage.key() // Retorna a chave pelo índice
//localStorage.clear // limpar os dados do localstorage