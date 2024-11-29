import { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../features/slices/eventSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const EventForm = ({onclose, preventClick}) => {

        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [date, setDate] = useState('');
        const [category, setCategory] = useState('');
        const [image, setImage] = useState(null);
        const dispatch = useDispatch();
        

    
        const handleSubmit = async (e) => {
            e.preventDefault();

            const token = localStorage.getItem('token');
            if(!token) {
                toast.error('Cannot Create A Event Please Logged In First');
                return;
            }
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('category', category);
            formData.append('date', date);
            formData.append('image', image);
            const resultAction = await dispatch(createEvent({title, description, category, image, date}));
            if(createEvent.fulfilled.match(resultAction)) {
                onclose();
            }
        } 

    return (
            <>
                 <div className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10 `}>
            <div onClick={onclose} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80 `}>
                <div onClick={preventClick}
                     className=" z-50 relative bg-gray-100 border-2 border-gray-300 flex justify-center flex-col items-center w-[35%] h-[55%] m-auto py-44 mt-60 shadow-2xl shadow-gray-300/40 rounded">
                    <h1 className="text-black font-serif text-4xl font-medium">Create New Event</h1>
                    <form onSubmit={handleSubmit} className="w-[100%]">
                        <div className=" flex justify-center items-center gap-2 pt-8 ">

                        <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Ttile</label>
                                <input placeholder="" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="text"/>
                            </div>
                        <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Start Time</label>
                                <input name="date" value={date} onChange={(e) => setDate(e.target.value)} className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="datetime-local"/>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-2 py-4 ">
                        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className=" h-11 px-3 border w-[40%] border-1 border-gray-900 bg-white rounded font-serif font-medium ">
                                <option  >Select Catgeory</option>
                                <option  value="Foot-Ball">Foot-Ball</option>
                                <option  value="Tennis">Tennis</option>
                                <option  value="Bascket-Ball">Bascket-Ball</option>
                                <option  value="Swimming">Swimming</option>

                              
                            </select>
                           
                            <div className="w-[40%]">
                                <input  name="image" onChange={(e) => setImage(e.target.files[0])} className="block w-full text-md py-2 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400" type="file"/>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-2 ">
                            <div className="w-[81%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Description</label>
                                <textarea placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"/>
                            </div>
                           
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

export default EventForm;