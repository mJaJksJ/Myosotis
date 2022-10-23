import React from 'react';
import {useNavigate} from "react-router-dom";
import picture from './/start_picture.jpg'
import {Button} from "primereact";

const StartPage = (props) => {
    const navigate = useNavigate();
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <img style={{width: '100vw'}} src={picture}
                     alt="Привет! Я - Рей! Ваш персональный помошник по заполнению форм. Готов оказать вам голосовую помошь по заполнению формы по сигналу 'Начать'"/>
            </div>
            <div style={{color:'#16202E'}}>
                Привет! Я - Рей! Ваш персональный помошник по заполнению форм. Готов оказать вам голосовую помошь по заполнению формы по сигналу 'Начать'
            </div>
            <Button style={{
                width: '150px',
                margin: '10px',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#72a1e5',
                border: "none",
                borderRadius: '30px'
            }} onClick={() => navigate('/survey')}>Начать</Button>
        </div>
    );
};

export default StartPage;