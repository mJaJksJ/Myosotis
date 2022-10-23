import React, { useEffect, useState } from "react";
import {
  getKeyWord,
  getNumber,
  getSpokenPhrase,
} from "../../Services/handleVoice";
import { getVoiceElement } from "../../Services/handleVoice";
import {
  getInitFieldPhrase,
  getList,
  getListChoice,
} from "../../Services/basePhrases";
import { getStopWordOnEnd } from "../../Services/basePhrases";

const CheckBoxAudioInput = (props) => {
  const label = props.label;
  const checkBoxes = props.checkBoxes;
  const [filterCheckBoxes, setFilterCheckBoxes] = useState([]);

  const [number, setNumber] = useState("123");
  const [phrase, setPhrase] = useState();
  const [isVoiceElement, setVoiceElement] = useState(null);
  const [isChoiceActive, setActiveChoice] = useState(null);
  const [isAnsOnEnd, setAnsOnEnd] = useState(null);
  const [isNumber, setIsNumber] = useState(null);
  const [isNextNumber, setNextNumber] = useState(null);
  const [fake, setFake] = useState(false);
  useEffect(() => {
    let ans = getInitFieldPhrase() + " " + label + ". " + getList();
    getVoiceElement(ans, setVoiceElement);
  }, []);
  useEffect(() => {
    if (isVoiceElement !== null) {
      setFilterCheckBoxes([]);
      getVoiceElement("говорите", setFake);
      getKeyWord(setPhrase, setActiveChoice);
    }
  }, [isVoiceElement]);
  useEffect(() => {
    if (isChoiceActive !== null) {
      if (phrase.toLowerCase().indexOf("ответит") === -1) {
        setFilterCheckBoxes(
          checkBoxes.filter(
            (box) => phrase.toLowerCase().indexOf(box.name.toLowerCase()) !== -1
          )
        );
        let ans = getListChoice();
        getVoiceElement(ans, setAnsOnEnd);
      }
      else{
        console.log("ответ записан");
      }
    }
  }, [isChoiceActive]);
  useEffect(() => {
    if (isAnsOnEnd !== null) {
      getNumber(setNumber, ["начало"], setVoiceElement, setIsNumber);
    }
  }, [isAnsOnEnd]);
  useEffect(() => {
    if (isNumber !== null) {
      console.log(filterCheckBoxes);
      let temp = document.getElementById(number.toString());
      console.log(temp);
      temp.checked = true;
      let index = filterCheckBoxes[number - 1].id;
      console.log(index);
      console.log(checkBoxes[index - 1]);
      checkBoxes[index - 1].checked = true;
      console.log(checkBoxes);
      setNextNumber((prev) => !prev);
    }
  }, [isNumber]);
  useEffect(() => {
    if (isNextNumber !== null) {
      getVoiceElement("Назовите еще номер или скажите начало", setAnsOnEnd);
    }
  }, [isNextNumber]);
  return (
    <div>
      <h3 id="label" className="text">
        Название поля
      </h3>
      {filterCheckBoxes.map((filterCheckBox, idx) => (
        <label>
          <input
            id={idx + 1}
            className="check"
            type="checkbox"
            key={filterCheckBox.id}
            checked={filterCheckBox.checked}
          />
          {(idx + 1).toString() + "." + filterCheckBox.name}
        </label>
      ))}
    </div>
  );
};

export default CheckBoxAudioInput;
