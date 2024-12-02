import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, updateEvent } from "../features/slices/eventSlice";


const UpdateEventForm = ({ onclose, preventClick, eventId }) => {

        const dispatch = useDispatch();
        const { events } = useSelector((state) => state.event);

        const [formData, setFormData] = useState({
            title: "",
            date: "",
            category: "",
            description: "",
            image: null,
        });


        useEffect(() => {
            if (eventId) {
                const eventToUpdate = events.find((event) => event._id === eventId);
                if (eventToUpdate) {
                    setFormData({
                        title: eventToUpdate.title || "",
                        date: eventToUpdate.date || "",
                        category: eventToUpdate.category || "",
                        description: eventToUpdate.description || "",
                        image: null, 
                    });
                }
            }
        }, [eventId, events]);

        const handleChange = (e) => {
            const { name, value, files } = e.target;
            console.log(name, files ? files[0] : value); 
            setFormData({
                ...formData,
                [name]: files ? files[0] : value,
            });
        };



        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const formDataToSubmit = new FormData();
            formDataToSubmit.append("title", formData.title);
            formDataToSubmit.append("date", formData.date);
            formDataToSubmit.append("category", formData.category);
            formDataToSubmit.append("description", formData.description);
            
            if (formData.image) {
                formDataToSubmit.append("image", formData.image);
            }
        
            try {
                await dispatch(updateEvent({ eventId, eventData: formDataToSubmit })).unwrap();
                await dispatch(getEvents());
                onclose();
            } catch (error) {
                console.error("Error updating event:", error);
            }
        };



    return (
        <>
            <div className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10`}>
                <div onClick={onclose} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80`}>
                    <div onClick={preventClick} className="z-50 relative bg-gray-100 border-2 border-gray-300 flex justify-center flex-col items-center w-[35%] h-[55%] m-auto py-44 mt-60 shadow-2xl shadow-gray-300/40 rounded">
                        <h1 className="text-black font-serif text-4xl font-medium">Update Event</h1>
                        <form onSubmit={handleSubmit} className="w-[100%]">
                            <div className="flex justify-center items-center gap-2 pt-8">
                                <div className="w-[40%]">
                                    <label className="block mb-2 text-sm font-medium text-black font-serif" htmlFor="title">Title</label>
                                    <input
                                        name="title" value={formData.title} onChange={handleChange}
                                        className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer placeholder:text-gray-400"
                                        type="text"
                                    />
                                </div>
                                <div className="w-[40%]">
                                    <label className="block mb-2 text-sm font-medium text-black font-serif" htmlFor="date">Start Time</label>
                                    <input
                                        name="date" value={formData.date} onChange={handleChange}
                                        className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer placeholder:text-gray-400"
                                        type="datetime-local"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2 py-4">
                                <select
                                    name="category" value={formData.category} onChange={handleChange}
                                    className="h-11 px-3 border w-[40%] border-1 border-gray-900 bg-white rounded font-serif font-medium"
                                >
                                    <option>Select Category</option>
                                    <option value="Foot-Ball">Foot-Ball</option>
                                    <option value="Tennis">Tennis</option>
                                    <option value="Bascket-Ball">Bascket-Ball</option>
                                    <option value="Swimming">Swimming</option>
                                </select>
                                <div className="w-[40%]">
                                <input
                                    name="image" 
                                    onChange={handleChange}
                                    className="block w-full text-md py-2 px-3 border border-gray-900 rounded cursor-pointer placeholder:text-gray-400"
                                    type="file"
                                />
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="w-[81%]">
                                    <label className="block mb-2 text-sm font-medium text-black font-serif" htmlFor="description">Description</label>
                                    <textarea
                                        name="description" value={formData.description} onChange={handleChange}
                                        placeholder="Description"
                                        className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer placeholder:text-gray-400"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-3 py-7">
                                <button type="submit" className="text-white bg-gradient-to-l from-blue-500 via-blue-700 to-blue-900 hover:bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 duration-300 text-lg font-serif font-medium px-24 py-3 rounded">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateEventForm;
