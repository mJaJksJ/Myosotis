import React from 'react';
import CheckBoxAudioInput from '../CheckBoxAudioInput/CheckBoxAudioInput';
import FileInput from '../FileInputComponent/FileInput';
import TextAudioInput from "../TextAudioInput/TextAudioInput";
import styleClasses from "./Survey.module.css";

const Survey = (props) => {
    const questionField = props.questions;
    const checkBoxes = [
        {id: 1, name:"футбол", checked: false},
        {id: 2,name:"волейбол", checked: false},
        {id: 3,name:"баскетбол", checked: false},
        {id: 4, name:"футбол", checked: false}
    ];

    return (
        <div style={{width: '50%'}}>
            {questionField.map((field, idx) =>
            {
                switch (field.type) {
                    case 'text':
                        return <div className={styleClasses.surveyCard}><CheckBoxAudioInput key={idx} label={field.label} checkBoxes={checkBoxes}/></div>
                    default:
                        return null
                }
            })}
        </div>
    );
};

export default Survey;