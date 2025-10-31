let display = document.getElementById("display");

function adicionar(valor) {

    if (display.value.length >= 17) {
        return;
    }

    let ultimo = display.value.slice(-1);

    if (display.value === "0" && valor !== "." && !"-+÷×%".includes(valor)) {
        display.value = valor;
    } else if ("-+÷×%".includes(valor)) {
        if ("-+÷×%".includes(ultimo)){
            display.value = display.value.slice(0, -1) + valor;
        } else {
            display.value += valor;
        }
    } else {
        display.value += valor;
    }

}

function btnApagarTudo() {
  display.value = '0';
}

function btnApagar() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
    display.value = 0;
}
}

function btnIgual() {

    let expressao = display.value
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/%/g, "/100");

    try {
        let resultado = eval(expressao)
        display.value = resultado;
    } catch (erro) {
        display.value = "Erro";
    }
}