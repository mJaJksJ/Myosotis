import React, { useEffect } from 'react';
import { voiceElement } from '../Services/handleVoice';
const TextInput = (props) => {
    
    useEffect(() => {
        voiceElement(document.querySelector(".text").textContent);
      },[]);
    return (
        <div>
            <h3 id='label' className='text'>{props.label}</h3>
            <input type="text"></input>
        </div>
    );
};

export default TextInput;