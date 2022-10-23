import React from 'react';
import {useNavigate} from "react-router-dom";
import picture from './/start_picture.jpg'
import {Button} from "primereact";
import appStyles from "../../App.css";

const StartPage = (props) => {
    const navigate = useNavigate();
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <img style={{width: '100vw'}} src={picture}
                     alt="Я Аянами Рей? А ты кто? Айянами Рей. Значит ты тоже Аянами Рей. Да, я та кого зовут Аянами Рей."/>
            </div>
            <div>
                Я Аянами Рей? А ты кто? Айянами Рей. Значит ты тоже Аянами Рей. Да, я та кого зовут Аянами Рей.
            </div>
            <Button style={{
                width: '150px',
                margin: '10px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#b2dc58',
                border: "none"
            }} onClick={() => navigate('/survey')}>Начать</Button>
        </div>
    );
};

export default StartPage;