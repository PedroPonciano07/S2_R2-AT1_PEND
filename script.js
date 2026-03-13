let nomeUsuario = document.getElementById("nomeUsuario");

let btnMostrar = document.querySelector("#btnMostrar");

let mensagem = document.querySelector("#mensagem");

btnMostrar.addEventListener("click", () => {

    let nome = nomeUsuario.value;

    if(nome === ""){
        mensagem.innerText = "Digite um nome!";
        mensagem.className = "text-danger mt-4";
    }else{
        mensagem.innerText = `Olá ${nome}, seja bem-vindo!`;
        mensagem.className = "text-success mt-4";
    }

});