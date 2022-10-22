import React from 'react';
import TextInput from "../TextInput";

const Survey = (props) => {
    const questionField = props.questions;

    return (
        questionField.map((field, idx) => {
            switch (field.type) {
                case 'text':
                    return <TextInput key={idx} label={field.label}/>
                default:
                    return null
            }
        })
    );
};

export default Survey;