export const getFieldInformation = () =>{
    return "Введите текст. Как закончите ввод скажите Готово.";
}

export const getInitFieldPhrase = () =>{
    return "Вы выбрали поле";
}

export const getStopWordOnEnd = () => {
    return ["готов"];
}

export const getEndOfEnter = () => {
    return "Вы записали ответ. Для его перезаписи скажите Заново."+ 
    " Если вас устраивает ответ, то скажите Ответить"
}

export const getStopWordOnAgreement = () => {
    return ["заново", "ответить"];
}