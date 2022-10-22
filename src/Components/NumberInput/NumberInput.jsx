import React, { useEffect }  from 'react';
import { getVoiceElement } from '../../Services/handleVoice';

const NumberInput = () => {
    useEffect(() => {
        getVoiceElement(document.querySelector(".name").textContent);
      },[]);
    return (
        <div>
            <h3 className='name'>Название поля</h3>
            <input type="text"></input>
        </div>
    );
};

export default NumberInput;