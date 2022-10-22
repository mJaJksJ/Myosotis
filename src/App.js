import './App.css';
import TextInput from './Components/TextInput';
import { useState } from 'react';
import CheckBoxInput from './Components/CheckBoxInput/CheckBoxInput';

function App() {
  const checkBoxes = [];
  checkBoxes.push({text: "First"});
  checkBoxes.push({text: "Second"});
  checkBoxes.push({text: "Third"});
  return (  
    <div className="App">
      <CheckBoxInput checkBoxes={checkBoxes}></CheckBoxInput>
    </div>
  );
}

export default App;
