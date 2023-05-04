function verificaValidadeDoChute(chute){
    numero = +chute;

    if(chuteDiferenteDeNumero(numero)){
        elementoChute.innerHTML += ` 
        <div> Valor inválido </> `;
    }
    if(chuteForaDoRange(numero)){
       elementoChute.innerHTML += `
       <div>Valor inválido: fale um número entre ${menorNumero} e ${maiorNumero} `;
    }
    if(numeroMaior(numero)){
        elementoChute.innerHTML += `
        <div> O número secreto é maior </div>`;
    }
    if(numeroMenor(numero)){
        elementoChute.innerHTML += `
        <div> O número secreto é menor </div>`;
    }
    if(acertou(numero)){
        elementoChute.innerHTML += `
        <div> Parabéns! Você acertou o número secreto
        <button class="jogar-novamente" data-reiniciar >Jogar novamente</button></div>`;
        var jogarNovamente = document.querySelector('[data-reiniciar]');
        jogarNovamente.addEventListener('click', ()=>{
            window.location.reload();
        } );
    }
}

function chuteDiferenteDeNumero(numero){
    return Number.isNaN(numero);
}

function chuteForaDoRange(numero){
    return numero < menorNumero || numero > maiorNumero;
}
function acertou(numero){
    return numero === numeroSecreto;
}
function numeroMaior(numero){
    return numero < numeroSecreto;
}
function numeroMenor(numero){
    return numero > numeroSecreto;
}
