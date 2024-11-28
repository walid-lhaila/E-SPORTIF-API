



const EventCard = ({img, date, title, description, showList, eventId}) => {

    return (

        <>
            <div className='w-[24%]'>
                <img className='w-[100%] h-[350px] rounded-md' src={img} alt="" />
                <p className='text-lg font-bold text-gray-500 pt-2'>{date}</p>
                <h1 className='text-black font-black text-3xl font-serif'>{title} </h1>
                <p className="text-lg md:text-md text-gray-700 font-sans py-3">{description}</p>
                <p onClick={() => showList(eventId)} className="text-blue-800 font-bold text-lg font-mono underline cursor-pointer">READ MORE</p>
            </div>
        </>

    );

}

export default EventCard;