import { useDispatch } from "react-redux";
import { deleteEvent } from "../features/slices/eventSlice";
import { toast } from "react-toastify";




const EventCard = ({img, date, title, description, showList, eventId}) => {

    const dispatch = useDispatch();
    const handleDeleteEvent = async (eventId) => {
        const token = localStorage.getItem('token');
        if(!token) {
            toast.error('Cannot Delete This Event')
        } else {
            const resultAction = await dispatch(deleteEvent(eventId));
            if (resultAction.type === 'event/delete/fulfilled') {
                toast.success('Event Deleted Successfully');
            } else {
                toast.error('Error deleting event');
            }
        }
        
    }

    return (

        <>
            <div className='w-[24%]'>
                <img className='w-[100%] h-[350px] rounded-md' src={img} alt="" />
                <p className='text-lg font-bold text-gray-500 pt-2'>{date}</p>
                <h1 className='text-black font-black text-3xl font-serif'>{title} </h1>
                <p className="text-lg md:text-md text-gray-700 font-sans py-3">{description}</p>
                <div className="flex justify-between items-center">
                    <p onClick={() => showList(eventId)} className="text-blue-800 font-bold text-lg font-mono underline cursor-pointer">READ MORE</p>
                    <div className="flex items-center gap-2">
                        <button className="text-white font-medium px-4 py-1 rounded bg-blue-600 font-serif hover:bg-blue-500 duration-300">Edit</button>
                        <button onClick={() => handleDeleteEvent(eventId)} className="text-white font-medium px-4 py-1 rounded bg-red-600 font-serif hover:bg-red-500 duration-300">Delete</button>
                    </div>
                </div>
            </div>
        </>

    );

}

export default EventCard;