"use client";

import React from "react";
import { motion } from "framer-motion"; 
import { MotionButton, } from "../Component/Button";
import { IoIosArrowRoundForward } from "react-icons/io";


type props = {
  heading: string;
  para: string;
  button?: string;
};

const Header = ({ props }: { props: props }) => {
  return (
    <>
      <div className="w-full lg:mt-[5rem] md:mt-[2rem] mt-[1rem] flex flex-col h-full items-center lg:p-4">
        <motion.div
          className="lg:p-4"
          initial={{
            opacity: 0,
            y: 20,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <motion.h1 className="lg:text-6xl md:text-4xl text-3xl p-2 text-center font-bold">
            {props.heading}
          </motion.h1>
        </motion.div>
        <motion.div
          className="lg:p-2  lg:w-[85%] w-full flex justify-center"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="lg:text-xl  text-center font-bold text-gray-200">
            {props.para}
          </p>
        </motion.div>
        <div className="flex justify-center p-4 items-center ">
         <MotionButton   className=" hover:bg-[#2860b4]" variant={"default"} size={"lg"} 
         initial={{background:"#fff",color:"black"}} 
         whileInView={{background:"#146ef5",color:"#fff"}} 
         whileHover={{scale:1.2}} 
         >
           Get Started  <IoIosArrowRoundForward color="#fff" size={"25px"}/>
         </MotionButton>
        </div>
      </div>
    </>
  );
};

export default Header;
