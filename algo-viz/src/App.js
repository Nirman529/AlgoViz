import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Grid from './components/Grid/Grid';
import PathFinder from './components/PathFinder/PathFinder';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import PageNotFound from './components/NoPage/PageNotFound';

function App() {
    return (
        <>
            <div className="App">

                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path='aStarPathFinder' element={<Grid />} />
                            <Route path='*' element={<PageNotFound />} />

                        </Route>
                    </Routes>
                </BrowserRouter>



            </div>
        </>
    );
}

export default App;
