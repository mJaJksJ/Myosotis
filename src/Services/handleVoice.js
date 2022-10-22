export const getVoiceElement = (speechElement, setVoiceElement) =>{
    const speech = new SpeechSynthesisUtterance(speechElement); 
    speech.lang = "ru";
    const synth = window.speechSynthesis;
    speech.onend = function(){
        setVoiceElement(prev => !prev);
    }
    synth.speak(speech);  
}

export const getSpokenPhrase = (setPhrase) => {;
    let recognizer = new window.webkitSpeechRecognition();
    recognizer.interimResults = true;
    recognizer.lang = 'ru-Ru';
    let str = "";
    recognizer.onresult = function (event) {
        let result = event.results[event.resultIndex];
        if (result.isFinal) {
            str =  result[0].transcript;
            console.log(result[0].transcrip);
        } else {
          str += result[0].transcript;
          console.log(result[0].transcript);
        }
      };
    recognizer.onend = function(){
        console.log("*");console.log(str);
        setPhrase(str);
    } 
    recognizer.start();
   
    
    
}