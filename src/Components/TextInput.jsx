import React, { useEffect } from 'react';
import { getVoiceElement } from '../Services/handleVoice';
const TextInput = () => {
    
    useEffect(() => {
        getVoiceElement(document.querySelector(".text").textContent);
      },[]);

    return (
        <div>
            <h3 id='label' className='text'>Название поля</h3>
            <input type="text"></input>
        </div>
    );
};

export default TextInput;