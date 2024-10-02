"use client";
import React from 'react'
import Image from 'next/image' 
import cricketImg from "../../../assets/cricketimmg.jpeg" 
import {motion} from "framer-motion"
import {MotionButton}  from '../../Component/Button'
import { IoIosArrowRoundForward } from "react-icons/io";

const Deatils = () => {
  return (
    <>
    <div className='bg-white w-full h-auto lg:p-4'>  
     <div className='lg:p-5 p-2 lg:mt-5 max-w-[1300px] m-auto'>
      <h1 className='lg:text-6xl text-black text-center font-bold'>Your Complete Cricket Experience Awaits</h1>
     <div className='flex lg:p-3 lg:mt-10 lg:flex-row flex-col-reverse flex-wrap '>  
        <div className='lg:w-[70%] flex flex-col '>
         <div className='max-w-[650px] '>
          <h2 className='lg:text-5xl text-2xl text-[#146ef5] text-start'>"Unlock Your Batting Potential with SportsBuddy"</h2> 
         </div>  
         <div className='mt-4 max-w-[700px]'> 
            <p className='lg:text-xl font-extralight text-black text-start'>"Whether you’re looking to refine your technique or take your game to the next level, SportsBuddy connects you with top-tier bowlers and throwers for professional practice. With flexible booking options and personalized matchups, you’ll always have the right partner to help you improve. Why settle for less when you can train with the best?"</p>

         </div>  
         <motion.div className='mt-3'>
         <MotionButton 
         size={"lg"} 
         variant={"default"} 
         className='" hover:bg-[#2860b4]'
             initial={{background:"#fff",color:"black"}} 
             whileInView={{background:"#146ef5",color:"#fff"}} 
             whileHover={{scale:1.2}} 
         >
          Get Started <IoIosArrowRoundForward color="#fff" size={"25px"}/>
         </MotionButton>
          </motion.div> 
       
      </div>
        <div className='lg:w-[30%]'>
            <Image 
            src={cricketImg}  
            alt='cricketIMG'
            className='object-cover h-[300px] w-[400px]'
            />
        </div>

     </div>
     </div> 
    </div>
    </>
  )
}

export default Deatils