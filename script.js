let inputTarefa = document.getElementById("inputTarefa");

let btnAdicionar = document.querySelector("#btnAdicionar");

let listaTarefas = document.querySelector("#listaTarefas");

let mensagem = document.querySelector("#mensagem");


btnAdicionar.addEventListener("click", () => {

let texto = inputTarefa.value;

if(texto === ""){

mensagem.innerText = "Tarefa vazia!";
mensagem.className = "text-danger fw-bold";

return;

}

let li = document.createElement("li");

li.className = "list-group-item d-flex justify-content-between align-items-center";


let span = document.createElement("span");

span.innerText = texto;


let btnRemover = document.createElement("button");

btnRemover.innerText = "Remover";

btnRemover.className = "btn btn-danger btn-sm";


btnRemover.addEventListener("click", () => {

li.remove();

});


li.appendChild(span);

li.appendChild(btnRemover);

listaTarefas.appendChild(li);


inputTarefa.value = "";

mensagem.innerText = "Tarefa adicionada com sucesso!";
mensagem.className = "text-success fw-bold";

});