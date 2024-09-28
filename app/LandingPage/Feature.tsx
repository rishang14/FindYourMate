import Image from 'next/image'
import React from 'react'  
import bookingimg from "../../assets/Booking.webp";

const Feature = () => {
  return (
   <>
   <div className='flex flex-col justify-center p-5 w-full '> 
    <div className='p-2 w-full '>
    <h1 className="text-7xl font-bold text-center p-3">What We  Do?</h1>
    <p className='text-xl text-center fonnt-bold  text-slate-400'> "We help you find the perfect sports buddy!" —"Whether You&apos;re a Professional or a Fitness Enthusiast!"—</p>
    </div> 
    <div className='p-2 flex flex-col  justify-center'>
        <h2 className='text-3xl mt-5 p-3 ml-9 font-bold text-[#146ef5] '>For-Professionals</h2> 
        <div className='flex items-center  border-1 border-x-slate-50 p-2 justify-center w-full m-auto'>
            <div className='w-[60%] p-2 flex flex-col '>
                <div className='p-2'>
                 <h3 className='text-4xl  font-semibold text-center'>Book a Knocking Partner</h3>
                </div> 
                <div className='max-w-[400px] flex justify-center flex-col m-auto'>
                <p className='p-2 text-xl text-pretty text-center text-slate-400'>"Push Your Limits on the Cricket Field! Let us help you find bowlers or throwdown specialists who can come directly to your doorstep. With our app, booking a personalized bowler or throwing partner is easy, so you can enhance your skills and elevate your game to the next level!"</p> 
                <button className='p-2 mt-3 rounded-lg  bg-cyan-600 m-auto'>Demo button -3 </button>
                </div>
            </div>
            <div className='w-[40%]  p-2 border-1 rounded-lg bg-opacity-50 backdrop-blur bg-gray-800 '>
                <Image src={bookingimg} alt='bookingimg ' loading='lazy' className='h-[450px] w-[500px]  rounded-md object-contain' />
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Feature