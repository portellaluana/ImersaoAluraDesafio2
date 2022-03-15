let contadorTentativa = 0;
console.log("start ", contadorTentativa);
function tentar() {
  contadorTentativa++;
  console.log("tentar ", contadorTentativa);
  let resultado = document.getElementById("resultado");

  if (contadorTentativa > 3) {
    resultado.innerHTML = "Acabaram as tentativas";
  } else {
    let numeroSecreto = parseInt(Math.random() * 11);
    let chute = parseInt(document.getElementById("tentativa").value);
    if (chute == numeroSecreto) {
      resultado.innerHTML = "Acertou";
    } else if (chute > 10 || chute < 0) {
      resultado.innerHTML = "Digite um número de 0 a 10";
    } else {
      resultado.innerHTML = "Errou, é o número " + numeroSecreto;
    }
  }
}
