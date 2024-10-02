"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MotionButton } from "../../Component/Button";
import AnimatedText from "@/app/Sections/AnimatedText";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiCricketBall } from "react-icons/bi";
import cricketImg from "../../../assets/cricketimmg.jpeg";
import { once } from "events";

const variety: Array<string> = [
  "Fast Right/Left-Handed",
  "Spin Right/Left-Handed",
  "Leg Spin Right/Left-Handed",
  "Off Spin Right/Left-Handed",
  "Chinaman Left-Handed",
  "Thrower Right/Left handed",
];

const animatedText:string= "Enhance your batting skills with their help!"
const Deatils = () => {
  return (
    <>
      <div className="bg-white w-full  lg:p-4">
        <div className="lg:p-3 p-2 lg:mt-5 max-w-[1300px] m-auto">
          <h1 className="lg:text-6xl text-black text-center font-bold">
            Your Complete Cricket Experience Awaits
          </h1>
          <div className="flex lg:p-3 lg:mt-10 lg:flex-row flex-col-reverse flex-wrap ">
            <div className="lg:w-[70%] flex flex-col ">
              <div className="max-w-[650px] ">
                <h2 className="lg:text-5xl text-2xl text-[#146ef5] text-start">
                  "Unlock Your Batting Potential with SportsBuddy"
                </h2>
              </div>
              <div className="mt-4 max-w-[700px]">
                <p className="lg:text-xl font-extralight text-black text-start">
                  "Whether you’re looking to refine your technique or take your
                  game to the next level, SportsBuddy connects you with top-tier
                  bowlers and throwers for professional practice. With flexible
                  booking options and personalized matchups, you’ll always have
                  the right partner to help you improve. Why settle for less
                  when you can train with the best?"
                </p>
              </div>
              <motion.div className="mt-3">
                <MotionButton
                  size={"lg"}
                  variant={"default"}
                  className='" hover:bg-[#2860b4]'
                  initial={{ background: "#fff", color: "black" }}
                  whileInView={{ background: "#146ef5", color: "#fff" }}
                  whileHover={{ scale: 1.2 }}
                >
                  Get Started{" "}
                  <IoIosArrowRoundForward color="#fff" size={"25px"} />
                </MotionButton>
              </motion.div>
            </div>
            <div className="lg:w-[30%]">
              <Image
                src={cricketImg}
                alt="cricketIMG"
                className="object-cover h-[300px] w-[400px]"
              />
            </div>
          </div>
        </div> 
        <div className="lg:mt-10 mt-2">
        <AnimatedText text={animatedText} color="black" />
        </div>
        <div className="lg:mt-5 flex lg:flex-row flex-col-reverse m-auto lg:max-w-[1300px] "> 
          <div className="lg:w-[50%] lg:mt-10">
          <motion.h1 className="lg:text-7xl w-full text-2xl  text-start font-[400] text-black lg:max-w-[800px]"
          initial={{x:20}}
          whileInView={{x:0}} 
          viewport={{once:true}}
          transition={{duration:2,}}
          > 
            Personalized Bowler and Thrower Options to Suit Your Needs
          </motion.h1>
          </div>
          <motion.div className="flex gap-2 lg:w-[50%] w-[90%] lg:mx-0 mx-auto lg:mt-10 items-center  flex-wrap "
           initial={{y:-20,x:20}} 
           whileInView={{y:0,x:0}}
           transition={{duration:1,ease:"linear"}}
          >
            {variety.map((item) => {
              return (
                <motion.div
                  className=" p-2 lg:w-[49%] w-full h-[100px] flex items-center gap-2 rounded-xl border   border-gray-400"
                  initial={{opacity:0.4,background:"#fff"}} 
                  animate={{opacity:1,background:" #e5e7eb "}} 
                  transition={{repeat:Infinity,repeatDelay:2, duration:1.5}}
                  key={item}
                >  
                   <BiCricketBall color="black" size={"20px"}/>
                  <h3 className="text-xl text-center font-extralight text-[#6a5a5a]">{item}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div> 
      
      </div>
    </>
  );
};

export default Deatils;
