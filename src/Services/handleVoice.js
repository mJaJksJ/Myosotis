export const getVoiceElement = (speechElement) =>{
    const speech = new SpeechSynthesisUtterance(speechElement); 
    speech.lang = "ru";
    const synth = window.speechSynthesis;
    synth.speak(speech);   
}

export const getSpokenPhrase = (setPhrase) => {
    // eslint-disable-next-line no-undef
    var recognizer = new webkitSpeechRecognition();
    recognizer.interimResults = true;
    recognizer.lang = 'ru-Ru';
    var str = "";
    recognizer.start();
    recognizer.onresult = function (event) {
        var result = event.results[event.resultIndex];
        if (result.isFinal) {
            //  str =  result[0].transcript;
        } else {
          str += result[0].transcript;
          setPhrase(str);
        }
      };
    recognizer.onend = function(){
        setPhrase(str);
    } 
    
    
}