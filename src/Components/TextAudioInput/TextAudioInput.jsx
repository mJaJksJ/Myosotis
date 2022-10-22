import React, { useEffect, useState } from 'react';
import {Card, InputText} from "primereact";
import {getSpokenPhrase, getVoiceElement} from "../../Services/handleVoice";
import {  getInitFieldPhrase,getFieldInformation, getEndOfEnter, getStopWordOnEnd, getStopWordOnAgreement } from '../../Services/basePhrases';

const TextAudioInput = (props) => {
    const label = props.label
    const [phrase, setPhrase] = useState('');
    const [isVoiceElement, setVoiceElement] = useState(null);
    const [isEndPhrase, setEndPhrase] = useState(null);
    const [isAnsOnEnd, setAnsOnEnd] = useState(null);
    const [ending, setEnding] = useState('');

    useEffect(() => {
        let ans = getInitFieldPhrase() + " " + label +  ". " + getFieldInformation();
        getVoiceElement(ans, setVoiceElement);
    },[]);
    useEffect(() => {
        if(isVoiceElement !== null){
            console.log("voice");
            let stopWord = getStopWordOnEnd();
             getSpokenPhrase(setPhrase, setEndPhrase, stopWord);
        }
    },[isVoiceElement]);
    useEffect(() => {
        if(isEndPhrase !== null){
            let ans = getEndOfEnter();
            getVoiceElement(ans, setAnsOnEnd);
        }
    },[isEndPhrase]);
    useEffect(() => {
        if(isAnsOnEnd !== null){
            let stopWord = getStopWordOnAgreement();
            getSpokenPhrase(setPhrase, setAnsOnEnd, stopWord, setVoiceElement);
        }
    },[isAnsOnEnd]);


    return (
        <Card className='text' title={props.label}>
            <InputText value={phrase}/>
        </Card>
    )
};

export default TextAudioInput;