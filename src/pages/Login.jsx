
import { Link } from 'react-router-dom';
import background from '../assets/img/bg.jpeg';




function Login() {

    return (

        <>
               <div className=" bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md shadow-[#79C5EF]/70 mt-32 lg:max-w-6xl">
            <div className="hidden bg-cover lg:block lg:w-1/2" style={{ backgroundImage: `url(${background})`}}></div>

            <div className="w-full px-6 py-16 md:px-8 lg:w-1/2 h-[710px]">
                <div className="flex justify-center mx-auto">
                <h1 class="px-10 py-2 font-bold text-6xl italic bg-gradient-to-r from-white via-blue-600 to-blue-400 inline-block text-transparent bg-clip-text">E v e n t o</h1>
                </div>

                <p className="text-xl text-center font-medium font-serif text-gray-200 dark:text-gray-200 pt-20">
                    Welcome !
                </p>

                <a href="" className="flex items-center justify-center mt-4 text-gray-200 bg-white transition-colors duration-300 transhtmlForm border rounded-lg bg-white dark:text-gray-800 dark:hover:bg-indigo-100 hover:text-black">
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </a>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-white lg:w-1/4"></span>

                    <a href="#" className="text-xs text-center text-gray-50 uppercase text-white hover:underline">or login
                        with email</a>

                    <span className="w-1/5 border-b dark:border-white lg:w-1/4"></span>
                </div>

                <form>
                
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-serif font-medium text-gray-200"  htmlFor="LoggingEmailAddress">Email Address</label>
                        <input  name="email" className="block w-full px-4 py-2 text-gray-200 bg-white border rounded-lg dark:bg-red-50 dark:text-black dark:border-white focus:border-red-600 focus:ring-opacity-40 dark:focus:border-red-600 focus:outline-none focus:ring" type="email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm  font-serif font-medium text-gray-200" htmlFor="loggingPassword">Password</label>
                            <a href="#" className="text-xs text-white hover:underline">Forget Password?</a>
                        </div>

                        <input name="password" className="block w-full px-4 py-2 text-gray-200 bg-white border rounded-lg dark:bg-red-50 dark:text-black dark:border-white focus:border-red-600 focus:ring-opacity-40 dark:focus:border-red-600 focus:outline-none focus:ring" type="password" />
                    </div>

                    <div className="mt-6">
                        <button type="submit" className="w-full px-6 py-3 text-sm font-medium  text-white capitalize transition-colors duration-300 transhtmlForm bg-gradient-to-l from-blue-600 via-blue-500 to-white hover:bg-gradient-to-r from-white via-blue-500 to-blue-600 border-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-white md:w-1/4"></span>

                    <Link to="/Register" className="text-xs  uppercase text-white hover:underline">or sign up</Link>

                    <span className="w-1/5 border-b dark:border-white md:w-1/4"></span>
                </div>
            </div>
        </div>
        </>

    )

}  

export default Login;