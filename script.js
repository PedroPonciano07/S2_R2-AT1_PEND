let itemLista = document.getElementById("itemLista");

let btnAdicionar = document.querySelector("#btnAdicionar");

let lista = document.querySelector("#lista");

btnAdicionar.addEventListener("click", () => {

    let texto = itemLista.value;

    if(texto === "") return;

    let li = document.createElement("li");

    li.innerText = texto;

    li.className = "list-group-item";

    lista.appendChild(li);

    itemLista.value = "";

});