import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Route, Routes} from 'react-router-dom';
import StartPage from "./Components/StartPage/StartPage";
import Survey from "./Components/Survey/Survey";
import TextAudioInput from "./Components/TextAudioInput/TextAudioInput";

function App() {
    return (
        <div className="App">

                <Routes>
                    <Route path="/survey-field" element={<TextAudioInput/>} />
                    <Route path="/survey" element={<Survey />} />
                    <Route path="/>" element={<StartPage />} />
                </Routes>
        </div>
    );
}

export default App;
