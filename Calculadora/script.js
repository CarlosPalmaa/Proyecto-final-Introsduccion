
let resultado = document.getElementById("result");

function addToResult(valor) {
  resultado.value += valor;
}

function addOperator(operador) {
  resultado.value += " " + operador + " ";
}
//Función que elimina datos
function clearResult() {
  resultado.value = "";
}
//Función encargada de operar los datos
function calculate() {
  resultado.value = eval(resultado.value);
}