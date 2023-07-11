import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

import React from "react";
import AlgoViz from "./components/AlgoViz";
import Grid from './components/Grid/Grid';

function App() {
    return (
        <>
            <div className="App">
                <AlgoViz />
                <Grid />
            </div>
        </>
    );
}

export default App;
