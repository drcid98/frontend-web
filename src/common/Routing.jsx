import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Main from "../pages/Main";
import About from "../pages/About";

function Routing(){
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Landing/>}/>
                <Route path={'/main'} element={<Main/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing