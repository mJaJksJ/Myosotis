import React, {useContext, useEffect, useState} from "react";
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
import {AnsContext} from "../../App";

const CheckBoxAudioInput = (props) => {
  const label = props.label;
  const checkBoxes = props.checkBoxes;
  const [filterCheckBoxes, setFilterCheckBoxes] = useState([]);
  const ans = useContext((AnsContext));
  const [number, setNumber] = useState(0);
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
        console.log(checkBoxes);
        console.log(phrase)
        setFilterCheckBoxes(
          checkBoxes.filter(
            (box) => box.name.toLowerCase().includes(phrase.toLowerCase().substring(0, phrase.length-1))
          )
        );
        let ans = getListChoice();
        getVoiceElement(ans, setAnsOnEnd);
      }
      else{
        const chked = [];
        checkBoxes.forEach(chx => {
          if(chx.checked){
            chked.push(chx.name);
          }
        });
ans.push({field_id: props.id, field_values: chked})
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
      let temp = document.getElementById(number);
      console.log(number);
      console.log(temp);
      temp.checked = true;
      let index = filterCheckBoxes[number-1].id;
      console.log(index);
      console.log(checkBoxes[index]);
      checkBoxes[index].checked = true;
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
        {props.label}
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
