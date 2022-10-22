import logo from './logo.svg';
import './App.css';
import TextInput from './Components/TextInput';
import Survey from "./Components/Survey/Survey";

function App() {
    const questions = [
        { label: 'Фамилия', type: 'text' },
        { label: 'Имя', type: 'text' },
        { label: 'Отчество', type: 'text' }
    ]

  return (
    <div className="App">
      <Survey questions={questions}></Survey>
    </div>
  );
}

export default App;
