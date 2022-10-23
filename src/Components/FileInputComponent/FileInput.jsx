import React, { useEffect, useState } from "react";
import { Card, FileUpload, InputText } from "primereact";
import {
  getFieldFileInformation,
  getInitFieldPhrase,
  getStopWordOnFile,
} from "../../Services/basePhrases";
import { beepSound, getVoiceElement } from "../../Services/handleVoice";
import { getTriggerPhrase } from "../../Services/handleVoice";
const FileInput = (props) => {
  const label = props.label;
  const [isVoiceElement, setVoiceElement] = useState(null);
  const [isMakePhoto, setMakePhoto] = useState(null);
  const [isUploadFile, setUploadFIle] = useState(null);
  useEffect(() => {
    let ans =
      getInitFieldPhrase() + " " + label + ". " + getFieldFileInformation();
      getVoiceElement(ans, setMakePhoto);
  }, []);
  useEffect(() => {
    if (isMakePhoto !== null) {
      document.querySelector(".y").click();
      let words = getStopWordOnFile();
      getTriggerPhrase(words, setUploadFIle);
      // document.querySelector(".photo").click();
    }
  }, [isMakePhoto]);
  // useEffect(() => {
  //   if (isUploadFile !== null) {
  //     console.log("asd");
  //   }
  // }, [isUploadFile]);
  return (
    <Card className="text" title={props.label}>
      <input type="file" className="photo"></input>
      <button className="y">Click me</button>
    </Card>
  );
};

export default FileInput;
