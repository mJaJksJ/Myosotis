import React from 'react';
import {Link} from "react-router-dom";

const StartPage = (props) => {

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Link to={'/survey'}>Начать</Link>
        </div>
    );
};

export default StartPage;