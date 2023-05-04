const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
var elementoChute = document.getElementById('chute');

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    const chute = e.results[0][0].transcript;
    mostraChute(chute);
    verificaValidadeDoChute(chute);
}

function mostraChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}
recognition.addEventListener('end', ()=> recognition.start());
