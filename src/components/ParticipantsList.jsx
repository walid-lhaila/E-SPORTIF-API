import { useState } from "react";
import ParticipantsForm from "./ParticipantsForm";






const participantsList = ({onclose, preventClick}) => {

    const [isParticipantsFormVisible, setsParticipantsFormVisible] = useState(false);

    const handleToggleParticipantsForm = () => {
        setsParticipantsFormVisible(!isParticipantsFormVisible);
    }
    const handleHideParticipantsForm = () => {
        setsParticipantsFormVisible(false);
    }
    const handleFormClick = (event) => {
        event.stopPropagation();
    } 
    
    return (
        <>
               <div className={`fixed z-50 left-0 right-0 top-0 bottom-0 bg-black/10 `}>
            <div onClick={onclose} className={`absolute z-40 left-0 right-0 top-0 bottom-0 bg-black/80 `}>
                <div onClick={preventClick}
                     className=" z-50 relative bg-gray-100 border-2 border-gray-300 flex  flex-col items-center w-[40%] h-[83%] m-auto  mt-20 shadow-2xl shadow-gray-300/40 rounded">
                    <h1 className="text-black font-serif text-4xl font-medium py-7">Event Name</h1>
                        <div className="bg-blue-600 w-[95%] py-3 flex justify-between items-center">
                            <h1 className="text-white font-bold text-lg font-serif px-10">Participants List</h1>

                         <div className="px-10 flex gap-3">
                            <div onClick={handleToggleParticipantsForm} className="bg-white py-2 px-2 rounded-full cursor-pointer hover:bg-gradient-to-t from-blue-300 to-white duration-500">
                                <svg class="w-6 h-6 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="bg-white py-2 px-2 rounded-full cursor-pointer hover:bg-gradient-to-t from-blue-300 to-white duration-500">
                                <svg class="w-6 h-6 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                         </div>

                        </div>

                        {isParticipantsFormVisible && (
                            <ParticipantsForm onclose={handleHideParticipantsForm} preventClick={handleFormClick} />
                        )}

                        <table className='bg-gray-200 w-[96%]'>
                            <thead className="h-12 text-md text-gray-600  border-b border-gray-100 border-4">
                                <th>FULL NAME</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>
                            </thead>
                            <tbody > 
                                <tr className="text-center border-4 h-12 border-b border-gray-100 mt-2">
                                    <td>Walid Lhaila</td>
                                    <td>walidlhaila00à@gmail.com</td>
                                    <td>06786756453</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

        </>
    );
}


export default participantsList;