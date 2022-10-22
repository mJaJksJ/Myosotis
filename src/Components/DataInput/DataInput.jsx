import React, { useEffect }  from 'react';
import { getVoiceElement } from '../../Services/handleVoice';

const DataInput = () => {
    useEffect(() => {
        getVoiceElement(document.querySelector(".name").textContent);
      },[]);
    return (
        <div>
            <h3 className='name'>Название поля</h3>
            <input type="date"></input>
        </div>
    );
};

export default DataInput;