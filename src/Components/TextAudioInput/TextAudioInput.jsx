import React, { useEffect, useState } from 'react';
import {Card, InputText} from "primereact";
import {getSpokenPhrase, getVoiceElement} from "../../Services/handleVoice";
import {  getInitFieldPhrase,getFieldInformation } from '../../Services/basePhrases';

const TextAudioInput = (props) => {
    const label = props.label
    const [phrase, setPhrase] = useState('123');
    const [voiceElement, setVoiceElement] = useState(false);
    useEffect(() => {
        let ans = getInitFieldPhrase() + " " + label +  ". " + getFieldInformation();
        getVoiceElement(ans, setVoiceElement);
        //getSpokenPhrase(setPhrase);
    },[]);
    useEffect(() => {
        if(voiceElement){
             getSpokenPhrase(setPhrase);
        }
    },[voiceElement]);

    return (
        <Card className='text' title={props.label}>
            <InputText value={phrase}/>
        </Card>
    )
};

export default TextAudioInput;