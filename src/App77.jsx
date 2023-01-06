//App77.jsx

//App7.jsx

import React from "react";



// 라우터 추가된 후 추가된 부분
import {BrowserRouter,Routes, Route} from "react-router-dom";

import App2 from "./App2";
import Navigate from "./Navigate"
import About from "./navBar/About"
import Board from "./navBar/Board"
import NoPage from "./Pages/NoPage";
import Main from "./navBar/Main";


function App77() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App2/>}>
                    <Route index element={<Main/>}/>
                    <Route path={"main"} element={<Main />}/>
                    <Route path={"board"} element={<Board />}/>
                    <Route path={"about"} element={<About />}/>
                    <Route path={"*"} element={<NoPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App77;