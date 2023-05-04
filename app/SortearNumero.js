const menorNumero = 1;
const maiorNumero = 100;
const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio(){
    return parseInt(Math.random() * (maiorNumero + 1));
}
console.log(numeroSecreto);

const elementoMenorNumero = document.getElementById('menor-valor');
const elementoMaiorNumero = document.getElementById('maior-valor');

elementoMenorNumero.innerHTML = menorNumero;
elementoMaiorNumero.innerHTML = maiorNumero;