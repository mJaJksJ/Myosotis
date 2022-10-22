import React, { useEffect } from 'react';
import { voiceElement } from '../../Services/handleVoice';
import {Card, InputText} from "primereact";

const TextAudioInput = (props) => {
    const label = props.label

    useEffect(() => {
        voiceElement();
    },[label]);

    return (
        <Card className='text' title={props.label}>
            <InputText/>
        </Card>
    )
};

export default TextAudioInput;