import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/slices/authSlice";




const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate('/Login'); 
    };
    return (
        <nav className=' fixed w-[100%] bg-slate-200 py-2'>
            <div className="flex justify-between items-center px-10">
                <h1 class="px-10 py-2 font-bold text-4xl italic bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">E v e n t o</h1>
                <button onClick={handleLogout} className="text-white bg-red-600 hover:bg-red-500 font-medium px-10 py-2 font-serif rounded">Log Out</button>
            </div>
        </nav>
    )
}

export default Header;