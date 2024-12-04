function narrateText(text) {
   
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }

    
    if (text.trim()) {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'pt-BR'; 
        window.speechSynthesis.speak(speech);
    }
}


window.addEventListener('beforeunload', function () {
    window.speechSynthesis.cancel();
});

document.addEventListener('DOMContentLoaded', function () {
    const narrateButton = document.getElementById('narrate-btn'); 
    const textElement = document.getElementById('text-to-narrate'); 

    
    if (narrateButton && textElement) {
        narrateButton.addEventListener('click', function () {
            const text = textElement.textContent.trim(); 
            narrateText(text);
        });
    }
});
