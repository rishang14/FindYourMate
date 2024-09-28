"use client";

import React from 'react'

const Header = () => {
  return (
    <>
    <div className='w-full mt-[5rem] flex flex-col h-full items-center p-4'>
    <div className='p-4 '>
     <h1 className='text-6xl p-2 text-center  font-bold '>Let us find the perfect sports buddy to fuel your fitness and sports cravings!</h1>
    </div>
    <div className='p-2  w-[85%] flex justify-center '>
     <p className='text-xl text-center font-bold text-slate-400'>Never let your sports and fitness cravings fade just because no one's free. We help you find partners and let professionals book a bowler. Always aim to upgrade yourself and stay fit!</p>
    </div>  
     <div className='flex justify-center p-4 items-center gap-4'>
        <button className='p-2 rounded-md bg-gray-200 text-slate-700'>Demo 1 </button> 
        <span className='text-5xl p-2'>|</span>
        <button className='p-2 rounded-md  bg-gray-200 text-slate-700'>Demo 2 </button>
     </div>
    </div> 
    </>
  )
}

export default Header