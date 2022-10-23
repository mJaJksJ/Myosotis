import React from "react";
import { useNavigate } from "react-router-dom";
import picture from ".//start_picture.jpg";
import { Button } from "primereact";
import appStyles from "../../App.css";
import { useEffect } from "react";
import { getHello } from "../../Services/basePhrases";
import { getInitFieldPhrase } from "../../Services/basePhrases";
import { getList } from "../../Services/basePhrases";
import { getKeyWord, getTriggerPhrase, getVoiceElement } from "../../Services/handleVoice";
import { useState } from "react";

const StartPage = (props) => {
  const navigate = useNavigate();
  const [isVoiceElement, setVoiceElement] = useState(null);
  const [fake, setFake] = useState(false);
  const [isAnsOnEnd, setAnsOnEnd] = useState(null);
  const[phrase, setPhrase] = useState("");
  const[isNext, setNext] = useState(null);
  useEffect(() => {
    let ans = getHello();
    getVoiceElement(ans, setVoiceElement);
  }, []);
  useEffect(() => {
    if (isVoiceElement !== null) {
        getTriggerPhrase(["начат"], setAnsOnEnd);
    }
  }, [isVoiceElement]);
  useEffect(() => {
    if (isAnsOnEnd !== null) {
        let ans = "Назовите номер опроса";
        getVoiceElement(ans, setFake);
        getKeyWord(setPhrase, setNext);
    }
  }, [isAnsOnEnd]);
  useEffect(() => {
    if(isNext !== null){
        document.querySelector(".button").click();
    }
  },[isNext])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <img
          style={{ width: "100vw" }}
          src={picture}
          alt="Я Аянами Рей? А ты кто? Айянами Рей. Значит ты тоже Аянами Рей. Да, я та кого зовут Аянами Рей."
        />
      </div>
      <div style={{ color: "#16202E" }}>
        Я Аянами Рей? А ты кто? Айянами Рей. Значит ты тоже Аянами Рей. Да, я та
        кого зовут Аянами Рей.
      </div>
      <Button
      className="button"
        style={{
          width: "150px",
          margin: "10px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#b2dc58",
          border: "none",
          borderRadius: "30px",
        }}
        onClick={() => navigate("/survey")}
      >
        Начать
      </Button>
    </div>
  );
};

export default StartPage;
