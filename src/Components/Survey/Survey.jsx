import React from 'react';
import TextAudioInput from "../TextAudioInput/TextAudioInput";
import styleClasses from "./Survey.module.css";

const Survey = (props) => {
    const questionField = props.questions;

    return (
        <div style={{width: '50%'}}>
            {questionField.map((field, idx) =>
            {
                switch (field.type) {
                    case 'text':
                        return <div className={styleClasses.surveyCard}><TextAudioInput key={idx} label={field.label}/></div>
                    default:
                        return null
                }
            })}
        </div>
    );
};

export default Survey;