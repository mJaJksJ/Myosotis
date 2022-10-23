import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AnsContext} from "../../App";

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

    const surveyName = {id: 1, name: 'Отчет по работе тестового приложения'}
    const navigate = useNavigate();
    const ans = useContext((AnsContext));
    return (
        <>
            <div style={{backgroundColor: '#32465A', color: '#FFFFFF'}}>
                Опрос №{surveyName.id}. {surveyName.name}
            </div>
            <div>
                <ul style={{padding: 0, alignItems: 'center'}}>
                    {data.map(x =>
                        <li style={{
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
                {JSON.stringify(ans).split(',', )}
            </div>
        </>
    );
};

export default SurveyFieldsList;