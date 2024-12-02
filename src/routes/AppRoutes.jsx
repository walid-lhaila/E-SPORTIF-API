import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


function AppRoutes () {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>

    );
}


export default AppRoutes;