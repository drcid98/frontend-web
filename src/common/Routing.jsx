import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Main from "../pages/Main";
import About from "../pages/About";
import Rules from "../pages/Rules";
import Game from "../pages/Game";

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Landing/>}/>
                <Route path={'/main'} element={<Main/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/rules'} element={<Rules/>}/>
                <Route path={'/game'} element={<Game/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing