import React from 'react';
import {Link} from "react-router-dom";

const StartPage = (props) => {

    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:'column'}}>
            <div>
                <img src={'https://github.com/mJaJksJ/Myosotis/blob/StartPageAndSurveys/public/images/start_picture.jpg'} alt="Я Аянами Рей? А ты кто? Айянами Рей. Значит ты тоже Аянами Рей. Да, я та кого зовут Аянами Рей."/>
            </div>
            <Link to={'/survey'}>Начать</Link>
        </div>
    );
};

export default StartPage;