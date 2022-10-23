import React, {useContext, useEffect, useState} from 'react';
import {Card, InputTextarea} from "primereact";
import {getSpokenPhrase, getVoiceElement} from "../../Services/handleVoice";
import {
    getInitFieldPhrase,
    getFieldInformation,
    getEndOfEnter,
    getStopWordOnEnd,
    getStopWordOnAgreement
} from '../../Services/basePhrases';
import {useNavigate} from "react-router-dom";
import {AnsContext} from "../../App";

const TextAudioInput = (props) => {
    const label = props.label
    const [phrase, setPhrase] = useState('');
    const [isVoiceElement, setVoiceElement] = useState(null);
    const [isEndPhrase, setEndPhrase] = useState(null);
    const [isAnsOnEnd, setAnsOnEnd] = useState(null);
    const [ending, setEnding] = useState('');

    const ans = useContext((AnsContext));
    const [returnToSurvey, setReturnToSurvey] = useState(false)

    useEffect(() => {
        let ans = getInitFieldPhrase() + " " + label + ". " + getFieldInformation();
        getVoiceElement(ans, setVoiceElement);
    }, []);
    useEffect(() => {
        if (isVoiceElement !== null) {
            console.log("voice");
            let stopWord = getStopWordOnEnd();
            getSpokenPhrase(setPhrase, setEndPhrase, stopWord);
        }
    }, [isVoiceElement]);
    useEffect(() => {
        if (isEndPhrase !== null) {
            let ans = getEndOfEnter();
            getVoiceElement(ans, setAnsOnEnd);
        }
    }, [isEndPhrase]);
    useEffect(() => {
        if (isAnsOnEnd !== null) {
            let stopWord = getStopWordOnAgreement();
            getSpokenPhrase(setPhrase, setAnsOnEnd, stopWord, setVoiceElement, setReturnToSurvey);
        }
    }, [isAnsOnEnd]);

    const navigate = useNavigate();
    useEffect(() => {
        if (returnToSurvey) {
            ans.push({field_id: props.id, field_description: phrase});
            navigate('/survey')
        }
    })

    return (
        <div style={{
            display: "flex",
            height: '100vh',
            verticalAlign: 'center'
        }}>
            <div style={{
                width: '100vw',
                backgroundColor: '#B2DC58',
                margin: '10px',
                borderRadius:'6px'
            }} className='text'>
                <h3 style={{margin: 0, padding: '10px', color: '#FFFFFF'}}>{props.label}</h3>
                <InputTextarea style={{width: '90%', height:'82%'}} value={phrase}/>
            </div>
        </div>

    )
};

export default TextAudioInput;