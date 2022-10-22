import React, { useEffect } from 'react';
import { voiceElement } from '../Services/handleVoice';

const FloatNumberInput = () => {
    useEffect(() => {
        voiceElement(document.querySelector(".name").textContent);
      },[]);
    return (
        <div>
            <h3 className='name'>Название поля</h3>
            <input type="text"></input>
        </div>
    );
};

export default FloatNumberInput;