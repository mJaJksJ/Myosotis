import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AnsContext} from "../../App";
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
    }, {
        "field_id": 2,
        "field_name": "Использование дополнительного авто",
        "field_type": "radiobox",
        "field_description": "Использование дополнительного авто",
        "field_values": ["Да", "Нет", "Да, другой организации"]
    }, {
        "field_id": 3,
        "field_name": "Фото после выполнения работ",
        "field_type": "file",
        "field_description": "Прикрепите фото после выполнения работ",
        "field_values": ["d7bbc0ce9327410799450755a8ec1f5d.jpg", "757700e0ed874a18abcf5e39c4673a36.jpg", "98e0a3678c7f4e5bacd55c7f546d40be.jpg"]
    }, {
        "field_id": 4,
        "field_name": "Описание выполненых работ",
        "field_type": "text",
        "field_description": "Описание что было до приезда, что было сделано, что нужно доделать"
    }, {
        "field_id": 5,
        "field_name": "Использованные материалы",
        "field_type": "checkbox",
        "field_description": "Использованные материалы",
        "field_values": ["Кабель", "Бокс", "Болт 20x5"]
    }];

    const surveyName = {id: 1, name: 'Отчет по работе тестового приложения'}
    const navigate = useNavigate();
    const ans = useContext((AnsContext));
    const [number, setNumber] = useState(0);
    const [isVoiceElement, setVoiceElement] = useState(null);
    const [isNumber, setIsNumber] = useState(null);
    const [isEnd, setIsEnd] = useState(null);
    useEffect(() => {
        let ans = "Вы попали на форму: " + surveyName.name + ". " + getForm();
        getVoiceElement(ans, setVoiceElement);
    }, []);
    useEffect(() => {
        if(isVoiceElement !== null){
            getNumber(setNumber, ["закончить"], setIsEnd, setIsNumber);    
        }
    },[isVoiceElement]);
    useEffect(() => {
        if(isNumber !== null){
            console.log(isEnd);
            if(isEnd !== null){
                console.log("выйти");
            }
            else{
            console.log(number);
            let temp = document.getElementById(number);
            temp.click();
            }
        }
    })
    return (<>
            <div style={{backgroundColor: '#32465A', color: '#FFFFFF', padding:'10px'}}>
                Опрос №{surveyName.id}. {surveyName.name}
            </div>
            <div>
                <ul style={{padding: 0, alignItems: 'center'}}>
                    {data.map((x,idx) => <li id = {idx + 1}style={{
                        listStyle: 'none',
                        backgroundColor: '#B2DC58',
                        color: '#162041',
                        borderRadius: '6px',
                        margin: '10px',
                        padding: '10px'
                    }} onClick={() => navigate('/survey-field', {state: x})}>
                        #{x.field_id}. {x.field_name}
                    </li>)}
                </ul>
            </div>
        <div>
            <hr/>
            <b style={{color:'#162041'}}>Формируемый ответ по форме</b>
            <div style={{
                backgroundColor: '#72a1e5', borderRadius: '6px', margin: '10px', padding: '10px', color:'#162041'
            }}>
                {JSON.stringify(ans).split(',',)}
            </div>
        </div>

        </>);
};

export default SurveyFieldsList;