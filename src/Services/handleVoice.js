import { getStopWordOnEnd } from "./basePhrases";

export const getVoiceElement = (speechElement, setVoiceElement) => {
  const speech = new SpeechSynthesisUtterance(speechElement);
  speech.lang = "ru";
  const synth = window.speechSynthesis;
  speech.onend = function () {
    setVoiceElement((prev) => !prev);
  };
  synth.speak(speech);
};

export const getSpokenPhrase = (
  setPhrase,
  setBool,
  getStopWord,
  ending = null,
  //setReturnToSurvey = null
) => {
  let recognizer = new window.webkitSpeechRecognition();
  recognizer.interimResults = true;
  recognizer.lang = "ru-Ru";
  let str = "";
  recognizer.start();
  recognizer.onresult = function (event) {
    let result = event.results[event.resultIndex];
    if (result.isFinal) {
      str += result[0].transcript;
    }
  };
  recognizer.onend = function () {
    if (ending === null) {
      if (getStopWord.every((x) => str.toLowerCase().indexOf(x) === -1)) {
        recognizer.start();
        console.log(str);
        setPhrase(str);
      } else {
        setBool((prev) => !prev);
        recognizer.stop();
        console.log(str);
      }
    } else {
      console.log(str);
      if (str.toLowerCase().indexOf("занов") !== -1) {
        ending((prev) => !prev);
        console.log("2");
        setPhrase("");
        recognizer.stop();
      } else if (str.toLowerCase().indexOf("ответит") !== -1) {
        recognizer.stop();
        /*if(setReturnToSurvey){
          setReturnToSurvey(prev => !prev);
        }*/
      }
      else{
        recognizer.start();
      }
    }
  };
};
