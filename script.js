function calcular() {
  let altura = document.getElementById("altura");
  let peso = document.getElementById("peso");
  let resultado = document.getElementById("resultado");

  if (altura.value.length == 0 && peso.value.length == 0) {
    alert("{ERRO}, É necessário inserir os valores nos campos corretamente!");
    resultado.innerHTML = "Informe os dados.";
  } else {
    let a = Number(altura.value);
    let p = Number(peso.value);
    let res = Number(p / (a * a));

    if (res < 18.5) {
      resultado.innerHTML = "Abaixo do peso normal.";
    } else if (res <= 24.9) {
      resultado.innerHTML = "Peso normal.";
    } else if (res <= 29.9) {
      resultado.innerHTML = "Sobrepeso.";
    } else if (res <= 34.9) {
      resultado.innerHTML = "Obesidade grau I.";
    } else if (res <= 39.9) {
      resultado.innerHTML = "Obesidade grau II.";
    } else if (res > 40) {
      resultado.innerHTML = "Obesidade grau III.";
    }
  }
}
