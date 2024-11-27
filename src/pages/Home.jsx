import Header from "../components/Header";
import EventCard from "../components/EventCard";
import background from "../assets/img/bg3.png";
import background1 from "../assets/img/bg4.jpeg";
import bgtennis from '../assets/img/bgtennis.jpeg'
import classico from '../assets/img/elclassico.jpeg';
import rider from '../assets/img/rider.jpeg';
import Footer from "../components/Footer";
import EventForm from "../components/EventForm";
import ParticipantsList from "../components/ParticipantsList";
import { useState } from "react";




function Home () {

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [isParticipantsListVisible, setIsParticipantsListVisible] = useState(false);


    const handelToggleList = () => {
        setIsParticipantsListVisible(!isParticipantsListVisible);
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
                    <EventForm onclose={handleHideRoom} preventClick={handleFormClick}/>
                )}
            
                <div className="w-[80%] mx-auto pt-8">
                    <div className='flex justify-center flex-col items-center'>
                        <h1 className="text-5xl md:text-5xl text-center font-black text-black py-3">LATEST EVENTS</h1>
                        <div className='w-28 h-[3px] bg-gradient-to-r from-blue-900 via-blue-600 to-blue-500'></div>
                    </div>


                    <div className='flex flex-wrap gap-5 w-full items-center pt-20'>

                        <EventCard img={bgtennis} showList={handelToggleList}/>
                        <EventCard img={classico} />
                        <EventCard img={rider} />
                        <EventCard img={bgtennis} />

                    </div>
                    {isParticipantsListVisible && (
                        <ParticipantsList preventClick={handleFormClick} onclose={handleHideList}  />
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


