export const getHello = () => {
    return "Привет, Я РЕЙ. Сегодня я буду твоим проводником."
    + " Чтобы приступить к работе скажите начать.";
}
export const getFieldInformation = () =>{
    return "Введите текст. Как закончите ввод скажите Готово.";
}

export const getInitFieldPhrase = () =>{
    return "Вы выбрали поле";
}

export const getForm = () => {
    return "Необходимо заполнить следующие поля. Назовите номер поля и вы перейдете к заполнению."
    + " Для окончания заполнения формы скажите закончить";
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

export const getFieldFileInformation = () =>{
    return "Когда будете готовы нажмите загрузить.";
}

export const getStopWordOnFile = () => {
    return ["фото"];
}

export const getList = () => {
    return  "Скажите ключевое слово для вывода вариантов. Для отправки ответа скажите ответить";
}
export const getListChoice = () => {
    return "Выберите вариант, сказав его номер. Если его нет и вы хотите назвать другое слово скажите начало."
}

