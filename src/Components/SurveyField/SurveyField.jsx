import React from 'react';
import TextAudioInput from "../TextAudioInput/TextAudioInput";
import styleClasses from "./SurveyField.module.css";
import {useLocation} from "react-router-dom";

let Switcher = (props) => {
    let question = props.question;
    let component = <></>;
    switch (question.field_type) {
        case 'text':
            component = (<div className={styleClasses.surveyCard}><TextAudioInput label={question.field_name}/>
            </div>)
            break;
        default:
            component = (<div>{question.field_type} is not implemented</div>);
            break;
    }
    return component;
};

const SurveyField = (props) => {
    const question = useLocation().state;
    return (
        <div>
            <Switcher question={question}/>
        </div>
    );
};

export default SurveyField;