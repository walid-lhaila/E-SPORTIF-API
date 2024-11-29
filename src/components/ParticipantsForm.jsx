import { useState } from "react";
import { useDispatch } from "react-redux";
import { addParticipants } from "../features/slices/participants";
import { register } from "../features/slices/authSlice";





const ParticipantsForm = ({onclose, preventClick, eventId}) => {
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const participants = [
            {
                fullName,
                email,
                phoneNumber,
            },
        ];
        const resultAction = await dispatch(addParticipants({eventId, participants}));
        if(addParticipants.fulfilled.match(resultAction)){
            onclose();
        }
    }
    return  (

        <>

<div className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10 `}>
            <div onClick={onclose} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80 `}>
                <div onClick={preventClick}
                     className=" z-50 relative bg-gray-100 border-2 border-gray-300 flex justify-center flex-col items-center w-[35%] h-[40%] m-auto py-44 mt-60 shadow-2xl shadow-gray-300/40 rounded">
                    <h1 className="text-black font-serif text-4xl font-medium">Add New Participants </h1>
                    <form onSubmit={handleSubmit} className="w-[100%]">
                        <div className=" flex justify-center items-center gap-2 pt-8 ">

                        <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Full Name</label>
                                <input placeholder="" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="text"/>
                            </div>
                        <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Phone Number</label>
                                <input name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="number"/>
                            </div>
                        </div>

                        <div className="w-[82%] mx-auto py-2">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Adress Email</label>
                                <input placeholder="" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="text"/>
                        </div>
                        

                        <div className="flex justify-center items-center gap-3 py-7">
                            <button
                                className="text-white bg-gradient-to-l from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 duration-300 text-lg font-serif font-medium px-24 py-3 rounded">Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        </>
    
    );
}


export default ParticipantsForm;