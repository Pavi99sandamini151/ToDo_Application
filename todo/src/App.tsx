import React from 'react';
import './App.css';
import ProjectsPage from "./projects/ProjectsPage";
import Greeter from "./components/Greet";


function App() {
    return (
        <div className="App">
            <Greeter first="Pavi"/>
        </div>
    );
}

export default App;
