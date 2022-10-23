import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import TextAudioInput from "./Components/TextAudioInput/TextAudioInput";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const {element, ...rest} = route;
                        return <Route key={index} {...rest} element={element}/>;
                    })}
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
