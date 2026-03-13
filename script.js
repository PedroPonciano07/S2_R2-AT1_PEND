let texto = document.getElementById("texto");

let btnAlterar = document.querySelector("#btnAlterar");


btnAlterar.addEventListener("click", () => {

    texto.innerText = "Texto alterado com JavaScript!";

});
