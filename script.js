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
    let res = Number(Math.floor(p / (a * a)));

    if (res < 18.5) {
      resultado.innerText = `Abaixo do peso normal, IMC: ${res}`;
    } else if (res <= 24.9) {
      resultado.innerText = `Peso normal, IMC: ${res}`;
    } else if (res <= 29.9) {
      resultado.innerText = `Sobrepeso, IMC: ${res}`;
    } else if (res <= 34.9) {
      resultado.innerText = `Obesidade grau I, IMC: ${res}`;
    } else if (res <= 39.9) {
      resultado.innerText = `Obesidade grau II, IMC: ${res}`;
    } else if (res > 40) {
      resultado.innerText = `Obesidade grau III, IMC: ${res}`;
    }
  }
}
