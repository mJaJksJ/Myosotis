import React from 'react';
import {Button} from "primereact";

const SurveyFieldsList = (props) => {
    const list = props.list;
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <ul>
                {list.map(x =>
                <li>
                    {x.field_name}
                </li>)}
            </ul>
        </div>
    );
};

export default SurveyFieldsList;