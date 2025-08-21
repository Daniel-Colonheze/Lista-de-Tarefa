// Mapeando elementos

const input = document.querySelector("input");
const botao = document.querySelector("button");
const ul = document.querySelector("ul");
const listaVazia = document.querySelector(".listaVazia");
const mensagemErro = document.querySelector(".mensagemErro");

// quando eu clicar no botao , tal coisa acontece

botao.onclick = () => {
    if (input.value !== "") {
        const inputValue = input.value;                      // PEGAR VALUE DO INPUT 
        let novoLi = document.createElement("li");
        novoLi.innerText = inputValue;
        ul.appendChild(novoLi);
        input.value = "";
        input.focus();
        mensagemErro.classList.remove("ativo")
        renderizarLista();
    } else {
        mensagemErro.classList.add("ativo");
    }
}

// Apagar itens da lista


function renderizarLista() {
    const arrayItens = document.querySelectorAll("li");

    arrayItens.forEach((item) => {
        item.onclick = () => {
            if(item.classList.contains("listaVazia")){

            }else{
                ul.removeChild(item);
            renderizarLista();
            }
        };
    });
    if (arrayItens.length <= 1) {
        listaVazia.classList.add("ativo")
    } else {
        listaVazia.classList.remove("ativo")
    }
}

renderizarLista();

