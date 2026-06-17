let form = document.getElementById("id_form");

let animales = [];

form.addEventListener("submit", evento => {
    evento.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let idade = document.getElementById("id_idade").value;
    let especie = document.getElementById("id_especie").value;
    let animal = {
        nome_chave: nome,
        idade_chave: idade,
        especie_chave: especie,
    }
console.log(animal.idade_chave)


//declarando e atribuindo valores em um objeto

    // let pessoa = {
    //     nome:"Ruan",
    //     matricula: 6767,
    //     fala : () =>{
    //         console.log("aaaaaaaaaaaaaaaaaaaa")
    //     }
    // }

    // pessoa.fala();
    // console.log(pessoa.nome);

    animales.push(animal);
console.log(animales);
    console.log(animales);

    cadastrarLocalStorage("animaizes", animales)
});
//JSON.stringify converte um objeto em string
//JSON.join converte de array para string
//JSON.parse converte string pra objeto
function cadastrarLocalStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor));
    console.log()

}

function ListarLocalStorage(){
    console.log(JSON.parse(localStorage.getItem("animaizes")))
    let obj_temp = JSON.parse(localStorage.getItem("animaizes"));

console.log(obj_temp)
    resultado.innerHTML = "";

    for(let i = 0; i < obj_temp.length; i++){
        let div = document.createElement('div');
        div.innerHTML = `Nome: ${obj_temp[i].nome_chave}, Idade: ${obj_temp[i].idade_chave}, Espécie: ${obj_temp[i].especie_chave} -- <br/>`
        resultado.append(div);
    };


};
//localStorage.setItem("chave", string) // Cadastrar localmente
//localStorage.getItem("chave") // Consultar através de uma chave
//localStorage.key() // Retorna a chave pelo índice
//localStorage.clear // limpar os dados do localstorage