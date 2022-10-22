export const voiceElement = (speechElement) =>{
    const speech = new SpeechSynthesisUtterance(speechElement); 
    speech.lang = "ru";
    const synth = window.speechSynthesis;
    synth.speak(speech);   
}

export const getSpokenPhrase =() => {
    // eslint-disable-next-line no-undef
    var recognizer = new webkitSpeechRecognition();
    recognizer.interimResults = true;
    recognizer.lang = 'ru-Ru';
    recognizer.onresult = function (event) {
        var result = event.results[event.resultIndex];
        if (result.isFinal) {
          return result;
        } else {
          console.log('Промежуточный результат: ', result[0].transcript);
        }
      };
    recognizer.start();
}