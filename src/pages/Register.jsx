import { Link, useNavigate } from "react-router-dom";
import background from "../assets/img/bg.jpeg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/slices/authSlice";





function Register() {

    const [firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const resultAction = await dispatch(register({firstName, lastName, email, password, phone}));
        if(register.fulfilled.match(resultAction)){
            navigate('/Login');
        }

    }

    return (

        <>
            <section className="bg-gradient-to-t from-white via-blue-600 to-blue-900 ">
            <div className="flex justify-center min-h-screen">
                <div className=" bg-cover w-[1100px]" style={{ backgroundImage: `url(${background})`}}></div>

                <div className="flex items-center w-full max-w-3xl px-8 mx-auto lg:px-12 lg:w-3/5">


                    <div className="w-full">
                        <div className="flex justify-center items-center mb-10">
                        <h1 class="px-10 py-2 font-bold text-6xl italic bg-gradient-to-r from-white via-blue-600 to-blue-400 inline-block text-transparent bg-clip-text">E v e n t o</h1>
                        </div>
                        <h1 className="text-3xl font-semibold font-mono tracking-wider text-white capitalize">
                            Get your free account now.
                        </h1>

                        <p className="mt-4 text-gray-200 font-mono mb-10">
                            Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                        </p>


                        <div id="forms-container" className="flex overflow-hidden transition-transform transform ease-in-out duration-500">
                            <div id="clientForm" className="w-full">
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-200 font-serif ">First Name</label>
                                        <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}   required type="text" placeholder="John-Week" className="block w-full px-5 py-3 mt-2 text-gray-300 placeholder-gray-300   bg-red-50 border border-gray-200 rounded-lg dark:text-gray-800 dark:border-red-600 focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-gray-200 font-serif">Last Name</label>
                                        <input name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}  required type="text" placeholder="0656788967" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-red-50 border border-gray-200 rounded-lg dark:text-gray-800 dark:border-red-600 focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-gray-200 font-serif">Phone Number</label>
                                        <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}  required type="number" placeholder="0656788967" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-red-50 border border-gray-200 rounded-lg dark:text-gray-800 dark:border-red-600 focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-gray-200 font-serif">Email address</label>
                                        <input name="email" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-red-50 border border-gray-200 rounded-lg dark:text-gray-800 dark:border-red-600 focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>


                                    <div>
                                        <label className="block mb-2 text-sm text-gray-200  font-serif">Password</label>
                                        <input name="password" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-300 bg-red-50 border border-red-200 rounded-lg dark:text-gray-800 dark:border-red-600 focus:border-red-600 focus:ring-red-600 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <button type="submit"
                                            className="flex items-center justify-between w-full px-6 h-12 mt-7 text-sm tracking-wide text-black capitalize transition-colors duration-300 transform bg-gradient-to-r from-blue-600 via-blue-400 to-white rounded-lg hover:bg-gradient-to-l from-blue-100 via-blue-400 to-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        <span className="text-white font-medium font-serif">Sign Up </span>

                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </form>
                                <div className="flex justify-center items-center mt-10 gap-3">
                                    <div className="w-48 h-[2px] bg-gray-100"></div>
                                    <Link to="/Login"><div className="text-gray-100 text-sm hover:underline font-serif">Or Sign in</div></Link>
                                    <div className="w-48 h-[2px] bg-gray-100"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    );

}

export default Register;