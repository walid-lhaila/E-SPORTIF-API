



const EventCard = ({img, showList}) => {

    return (

        <>
            <div className='w-[24%]'>
                <img className='w-[100%] h-[350px] rounded-md' src={img} alt="" />
                <p className='text-lg font-bold text-gray-500 pt-2'>JUNE 20TH, 2024</p>
                <h1 className='text-black font-black text-3xl font-serif'>Lorem ipsum dolor sit amet </h1>
                <p className="text-lg md:text-md text-gray-700 font-sans py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quae tenetur vitae delectus! Id iure . . . </p>
                <p onClick={showList} className="text-blue-800 font-bold text-lg font-mono underline cursor-pointer">READ MORE</p>
            </div>
        </>

    );

}

export default EventCard;