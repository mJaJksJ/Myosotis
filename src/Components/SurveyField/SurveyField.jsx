import React from 'react';
import TextAudioInput from "../TextAudioInput/TextAudioInput";
import styleClasses from "./SurveyField.module.css";
import {useLocation} from "react-router-dom";
import CheckBoxAudioInput from "../CheckBoxAudioInput/CheckBoxAudioInput";

let Switcher = (props) => {
    let question = props.question;
    let component = <></>;
    switch (question.field_type) {
        case 'text':
            component = (<div className={styleClasses.surveyCard}><TextAudioInput label={question.field_name}/>
            </div>)
            break;
        case 'checkbox':
            let checkBoxes = [];
            let i = 0;
            for(var el of Object.values(question.field_values)){          
                checkBoxes.push({id: i, name: el, checked: false})
                i++;
            }
            component = (<div className={styleClasses.surveyCard}><CheckBoxAudioInput label={question.field_name}
            checkBoxes={checkBoxes}/>
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