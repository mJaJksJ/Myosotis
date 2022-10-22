import React, { useEffect, useState } from "react";
import { getSpokenPhrase } from "../../Services/handleVoice";
import { getVoiceElement } from "../../Services/handleVoice";

const CheckBoxInput = (props) => {
const [phrase, setPhrase] = useState('123'); 
  useEffect(() => {
    getVoiceElement(document.querySelector(".text").textContent);
    
    getSpokenPhrase(setPhrase);
    console.log(phrase);
    
  }, []);
  return (
    <div>
      <h3 id="label" className="text">
        Название поля
      </h3>
      {props.checkBoxes.map((checkBox, idx) => (
        <label>
          <input type="checkbox" key={idx} />
          {idx.toString() + "." + checkBox.text}
        </label>
      ))}
    </div>
  );
};

export default CheckBoxInput;
