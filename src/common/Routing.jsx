import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Main from "../pages/Main";
import About from "../pages/About";
import Rules from "../pages/Rules";
import Login from "../profile/Login";
import SignUp from "../profile/Signup";
import UserCheck from "../protected/UserCheck";
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
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<SignUp/>}/>
                <Route path={'/userCheck'} element={<UserCheck/>}/>
                <Route path={'/game'} element={<Game/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Routing