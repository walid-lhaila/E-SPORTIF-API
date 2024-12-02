    import Header from "../components/Header";
    import EventCard from "../components/EventCard";
    import background from "../assets/img/bg3.png";
    import background1 from "../assets/img/bg4.jpeg";
    import Footer from "../components/Footer";
    import EventForm from "../components/EventForm";
    import ParticipantsList from "../components/ParticipantsList";
    import { useEffect, useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { useNavigate } from "react-router-dom";
    import { getEvents } from "../features/slices/eventSlice";
    import { getAllParticipants } from '../features/slices/participants';
    import UpdateEventForm from "../components/UpdateEventForm";





    function Home () {

        const [isFormVisible, setIsFormVisible] = useState(false);
        const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
        const [isParticipantsListVisible, setIsParticipantsListVisible] = useState(false);
        const [selectedEventId, setSelectedEventId] = useState(null); 

        const dispatch = useDispatch();
        const navigate = useNavigate();


        const {events} = useSelector((state) =>  state.event);
        const { token } = useSelector((state) => state.auth); 

        useEffect(() => {
            if (!token) {
                navigate('/Login');
            } else {
                dispatch(getEvents());
            }
        }, [dispatch, navigate, token]);

        
    

        const handelToggleList = (eventId) => {
            setSelectedEventId(eventId)
            dispatch(getAllParticipants(eventId));
            setIsParticipantsListVisible(!isParticipantsListVisible);
        }

        const handleToggleUpdateForm = (event) => {
            setSelectedEventId(event._id);
            setUpdateFormVisible((prev) => !prev); 
        };

        const hnadleHideUpdateForm = () => {
            setUpdateFormVisible(false);
        }
        const handleHideList = () => {
            setIsParticipantsListVisible(false);
        }

        const handleToggleForm = () => {
            setIsFormVisible(!isFormVisible);
        }
        const handleHideRoom = () => {
            setIsFormVisible(false);
        }
        const handleFormClick = (event) => {
            event.stopPropagation();
        }


        return (

            <>
                <Header />
                <div className='bg-fixed' style={{ backgroundImage: `url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '840px' }}>
                    <div className='flex justify-betweeen items-center w-[90%] mx-auto pt-16'>
                        <div className='w-[50%] pt-5'>
                            <h1 className="text-5xl md:text-9xl font-black text-black py-3">BECOME A CHAMPION!</h1>
                            <p className="mt-6 text-lg md:text-xl text-gray-700 font-sans">"Join the ultimate sports experience! Discover events, connect with athletes, and compete like never before. Whether you're a beginner or a pro, there's a place for you in the action. Sign up today and be part of the game!"</p>
                            <div className="py-10">
                                <button onClick={handleToggleForm} className="text-white font-medium bg-gradient-to-r from-blue-900 via-blue-600 to-blue-500 hover:bg-gradient-to-l from-blue-500 via-blue-600 to-blue-900 duration-300 px-20 py-4 rounded text-xl font-serif">
                                    Create Event
                                </button>
                            </div>
                        </div>
                        <div className='w-[50%] flex justify-end pt-16'>
                            <img className='w-[80%]' src={background} alt="" />
                        </div>
                    </div>
                    {isFormVisible && (
                        <EventForm onclose={handleHideRoom} preventClick={handleFormClick} />
                    )}
    
                    {isUpdateFormVisible && selectedEventId && (
                        <UpdateEventForm
                            onclose={hnadleHideUpdateForm}
                            preventClick={handleFormClick}
                            eventId={selectedEventId}
                        />
                    )}
                
                    <div className="w-[80%] mx-auto pt-8">
                        <div className='flex justify-center flex-col items-center'>
                            <h1 className="text-5xl md:text-5xl text-center font-black text-black py-3">LATEST EVENTS</h1>
                            <div className='w-28 h-[3px] bg-gradient-to-r from-blue-900 via-blue-600 to-blue-500'></div>
                        </div>


                        <div className='flex flex-wrap gap-5 w-full items-center pt-20'>
                            {events && events.length > 0 ? (
                                events.map((event) => (
                                    <EventCard key={event._id} img={event.image} title={event.title} description={event.description} date={event.date} showList={() => handelToggleList(event._id)} eventId={event._id} event={event} showForm={() => handleToggleUpdateForm(event)}/>
                                ))
                            ) : (
                                <h1>There Is No Event Yet</h1>
                            )}
                        
                        </div>
                        {isParticipantsListVisible && (
                            <ParticipantsList eventId={selectedEventId} preventClick={handleFormClick} onclose={handleHideList}  />
                        )}

                    </div>
                        
                    <div className="py-10">
                        <Footer />
                    </div>
                    
                </div>
            </>

        );
    }


    export default Home;


