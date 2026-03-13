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

li.className = "list-group-item d-flex align-items-center justify-content-between";


let div = document.createElement("div");

div.className = "d-flex align-items-center gap-2";


let checkbox = document.createElement("input");

checkbox.type = "checkbox";

checkbox.className = "form-check-input";


let span = document.createElement("span");

span.innerText = texto;


checkbox.addEventListener("change", () => {

if(checkbox.checked){

span.style.textDecoration = "line-through";
span.style.color = "gray";

}else{

span.style.textDecoration = "none";
span.style.color = "black";

}

});


let btnRemover = document.createElement("button");

btnRemover.innerText = "Remover";

btnRemover.className = "btn btn-danger btn-sm";


btnRemover.addEventListener("click", () => {

li.remove();

});


div.appendChild(checkbox);

div.appendChild(span);

li.appendChild(div);

li.appendChild(btnRemover);

listaTarefas.appendChild(li);


inputTarefa.value = "";

mensagem.innerText = "Tarefa adicionada!";
mensagem.className = "text-success fw-bold";

});