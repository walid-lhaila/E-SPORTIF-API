



const EventForm = ({onclose, preventClick}) => {
    return (
            <>
                 <div className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10 `}>
            <div onClick={onclose} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80 `}>
                <div onClick={preventClick}
                     className=" z-50 relative bg-gray-100 border-2 border-gray-300 flex justify-center flex-col items-center w-[35%] h-[55%] m-auto py-44 mt-60 shadow-2xl shadow-gray-300/40 rounded">
                    <h1 className="text-black font-serif text-4xl font-medium">Create New Event</h1>
                    <form className="w-[100%]">
                        <div className=" flex justify-center items-center gap-2 pt-8 ">

                        <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Ttile</label>
                                <input placeholder="" name="title" className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="text"/>
                            </div>
                        <div className="w-[40%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Start Time</label>
                                <input name="startTime" className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"
                                       type="datetime-local"/>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-2 py-4 ">
                        <select name="category" className=" h-11 px-3 border w-[40%] border-1 border-gray-900 bg-white rounded font-serif font-medium ">
                                <option  value="">Select Catgeory</option>
                                <option  value="">Foot-Ball</option>
                                <option  value="">Tennis</option>
                                <option  value="">Bascket-Ball</option>
                                <option  value="">Swimming</option>

                              
                            </select>
                           
                            <div className="w-[40%]">
                                <input  name="poster" className="block w-full text-md py-2 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400" type="file"/>
                            </div>
                        </div>
                        <div className=" flex justify-center items-center gap-2 ">
                            <div className="w-[81%]">
                                <label className="block mb-2 text-sm font-medium text-black font-serif"
                                       htmlFor="file_input">Description</label>
                                <textarea placeholder="Description" name="description" className="block w-full text-md py-2.5 px-3 border border-gray-900 rounded cursor-pointer  placeholder:text-gray-400"/>
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