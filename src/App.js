import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import React from "react";

export const AnsContext = React.createContext([]);

function App() {
    return (
        <div className="App">
            <AnsContext.Provider value={[]}>
                <BrowserRouter>
                    <Routes>
                        {AppRoutes.map((route, index) => {
                            const {element, ...rest} = route;
                            return <Route key={index} {...rest} element={element}/>;
                        })}
                    </Routes>
                </BrowserRouter>
            </AnsContext.Provider>
        </div>
    );
}

export default App;
