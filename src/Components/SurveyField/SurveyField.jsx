import React from 'react';
import {useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import { getForm } from '../../Services/basePhrases';
import { getNumber, getVoiceElement } from '../../Services/handleVoice';
import { useState } from 'react';
const SurveyFieldsList = (props) => {
    const data = [{
        "field_id": 1,
        "field_name": "Выполненные работы",
        "field_type": "checkbox",
        "field_description": "Заполните выполненные работы",
        "field_values": {
            "0": "Выравнивание ДК",
            "1": "Показания наклона",
            "2": "Включение ИБП",
            "3": "Восстановление питания",
            "100": "Установка транспортной колонки"
        }
    },
        {
            "field_id": 2,
            "field_name": "Использование дополнительного авто",
            "field_type": "radiobox",
            "field_description": "Использование дополнительного авто",
            "field_values": [
                "Да",
                "Нет",
                "Да, другой организации"
            ]
        },
        {
            "field_id": 3,
            "field_name": "Фото после выполнения работ",
            "field_type": "file",
            "field_description": "Прикрепите фото после выполнения работ",
            "field_values": [
                "d7bbc0ce9327410799450755a8ec1f5d.jpg",
                "757700e0ed874a18abcf5e39c4673a36.jpg",
                "98e0a3678c7f4e5bacd55c7f546d40be.jpg"
            ]
        },
        {
            "field_id": 4,
            "field_name": "Описание выполненых работ",
            "field_type": "text",
            "field_description": "Описание что было до приезда, что было сделано, что нужно доделать"
        },
        {
            "field_id": 5,
            "field_name": "Использованные материалы",
            "field_type": "checkbox",
            "field_description": "Использованные материалы",
            "field_values": [
                "Кабель",
                "Бокс",
                "Болт 20x5"
            ]
        }];

let Switcher = (props) => {
    let question = props.question;
    let component = <></>;
    switch (question.field_type) {
        case 'text':
            component = (<div className={styleClasses.surveyCard}><TextAudioInput label={question.field_name} id={question.field_id}/>
            </div>)
            break;
        case 'checkbox':
            let checkBoxes = [];
            let i = 0;
            for(let el of Object.values(question.field_values)){
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
        <>
            <div style={{backgroundColor: '#32465A', color: '#FFFFFF'}}>
                Опрос {surveyName.id}. {surveyName.name}
            </div>
            <div>
                <ul style={{padding: 0, alignItems: 'center'}}>
                    {data.map((x, idx) =>
                        <li id={idx + 1} 
                            style={{
                            listStyle: 'none',
                            backgroundColor: '#B2DC58',
                            color: '#162041',
                            borderRadius: '6px',
                            margin: '10px',
                            padding: '10px'
                        }} onClick={() => navigate('/survey-field', {state: x})}>
                            {x.field_id}. {x.field_name}
                        </li>)}
                </ul>
            </div>
        </>
    );
};

export default SurveyFieldsList;