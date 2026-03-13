let itemLista = document.getElementById("itemLista");

let btnAdicionar = document.querySelector("#btnAdicionar");

let lista = document.querySelector("#lista");


btnAdicionar.addEventListener("click", () => {

    let texto = itemLista.value;

    let li = document.createElement("li");

    li.innerText = texto;

    lista.appendChild(li);

    itemLista.value = "";

});