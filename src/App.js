import './App.css';
import Survey from "./Components/Survey/Survey";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
    const questions = [
        { label: 'Фамилия', type: 'text' },
        { label: 'Имя', type: 'text' },
        { label: 'Отчество', type: 'text' }
    ]

  return (
    <div className="App">
      <Survey questions={questions}/>
    </div>
  );
}

export default App;
