import React, { useEffect } from 'react';
import {Card, InputText} from "primereact";
import {getVoiceElement} from "../../Services/handleVoice";

const TextAudioInput = (props) => {
    const label = props.label

    useEffect(() => {
        getVoiceElement(label);
    },[label]);

    return (
        <Card className='text' title={props.label}>
            <InputText/>
        </Card>
    )
};

export default TextAudioInput;