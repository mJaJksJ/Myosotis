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
  ending = null
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
      } else {
        recognizer.start();
      }
    }
  };
};

export const getTriggerPhrase = (stopWords, setBool) => {
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
    if (stopWords.some((x) => str.toLowerCase().indexOf(x) !== -1)) {
      let stopWord = "1";
      for (let s of stopWords) {
        if (str.toLowerCase().indexOf(s) !== -1) {
          stopWord = s;
          break;
        }
      }
      console.log(stopWord);
      switch (stopWord) {
        case "фото":
          recognizer.stop();
          setBool((prev) => !prev);
          break;
        default:
          break;
      }
    } else {
      recognizer.start();
    }
  };
};

export const getNumber = (setNumber, stopWords, setAgain, setIsNumber) => {
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
    console.log(str);
    if(str.toLowerCase().indexOf("один") !== -1) {

      setNumber(1);
      recognizer.stop();
      setIsNumber(prev => !prev);
    }
    else if(!isNaN(parseInt(str))){
      setNumber(parseInt(str));
      setIsNumber(prev => !prev);
      recognizer.stop();
    }
    else if (stopWords.some((x) => str.toLowerCase().indexOf(x) !== -1)){
      let stopWord = "1";
      for (let s of stopWords) {
        if (str.toLowerCase().indexOf(s) !== -1) {
          stopWord = s;
          break;
        }
      }
      console.log(stopWord);
      switch (stopWord) {
        case "начало":
          recognizer.stop();
          setAgain(prev => !prev);
          break;
        default:
          break;
      }
    }
    else {
      str = "";
      recognizer.start();
    }
  };
}

export const getKeyWord = (setPhrase, setEnd) => {
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
      if(str ===  ""){
        recognizer.start();
      }
      else{
        setPhrase(str);
        setEnd(prev => !prev);
        recognizer.stop();
      }
    }
}