let nomeUsuario = document.getElementById("nomeUsuario");

let btnMostrar = document.querySelector("#btnMostrar");

let mensagem = document.querySelector("#mensagem");


btnMostrar.addEventListener("click", () => {

    let nome = nomeUsuario.value;

    if(nome === ""){
        mensagem.innerText = "Digite um nome!";
    }else{
        mensagem.innerText = `Olá ${nome}, seja bem-vindo!`;
    }

});