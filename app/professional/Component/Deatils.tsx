"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MotionButton } from "../../Component/Button";
import AnimatedText from "@/app/Sections/AnimatedText";
import { IoIosArrowRoundForward } from "react-icons/io";
import cricketImg from "../../../assets/cricketimmg.jpeg";

const variety: Array<string> = [
  "Fast Right/Left-Handed",
  "Spin Right/Left-Handed",
  "Leg Spin Right/Left-Handed",
  "Off Spin Right/Left-Handed",
  "Chinaman Left-Handed",
  "Thrower Right/Left handed",
];

const animatedText: string = "Enhance your batting skills with their help!";
const Deatils = () => {
  const scrollref = useRef(null);
  return (
    <>
      <div className="bg-white w-full  lg:p-4 border border-black">
        <motion.div 
          className="lg:p-3 p-2 lg:mt-5 max-w-[1300px] m-auto"
          initial={{ x: 20,y:20 }}
          whileInView={{ x: 0 ,y:0}} 
          transition={{ duration: 1 ,ease:"easeIn"}}
        >
          <motion.h1
            className="lg:text-6xl text-black text-center font-bold"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1,ease:"easeIn" }}
          >
            Your Complete Cricket Experience Awaits
          </motion.h1>
          <div className="flex lg:p-3 lg:mt-10 lg:flex-row flex-col-reverse flex-wrap ">
            <div className="lg:w-[70%] flex flex-col ">
              <motion.div className="max-w-[650px] " 
              initial={{x:20,opacity:0.4}} 
              whileInView={{x:0,opacity:1}} 
              transition={{duration:1,ease:"easeOut"}}
              >
                <h2 className="lg:text-5xl text-2xl text-[#146ef5] text-start">
                  "Unlock Your Batting Potential with SportsBuddy"
                </h2>
              </motion.div>
              <motion.div className="mt-4 max-w-[700px]"
              initial={{opacity:0.3,y:-20}}
              whileInView={{opacity:1,y:0}} 
              transition={{duration:1}}
              >
                <p className="lg:text-xl font-extralight text-black text-start">
                  "Whether you&apos;re looking to refine your technique or take your
                  game to the next level, SportsBuddy connects you with top-tier
                  bowlers and throwers for professional practice. With flexible
                  booking options and personalized matchups, you&apos;ll always have
                  the right partner to help you improve. Why settle for less
                  when you can train with the best?"
                </p>
              </motion.div>
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
        </motion.div>
        <div className="lg:mt-10 mt-2">
          <AnimatedText text={animatedText} color="black" />
        </div>
        <div className="lg:mt-5 flex lg:flex-row flex-col m-auto lg:max-w-[1300px] ">
          <div className="lg:w-[70%] lg:mt-10 mt-[0]" ref={scrollref}>
            <motion.h1
              className="lg:text-7xl w-full text-2xl  text-start font-[400] text-black  lg:max-w-[800px]"
              initial={{ x: 20,  }}
              whileInView={{ x: 0,  }}
              transition={{ duration: 2 }}
              viewport={{ root: scrollref }}
            >
              Personalized Bowler and Thrower Options to Suit Your Needs
            </motion.h1>
          </div>
          <motion.div
            className="flex gap-2 lg:w-[30%] w-full lg:mx-0 mx-auto lg:mt-10 mt-3  items-center justify-end flex-col flex-wrap "
            initial={{ y: -20, x: 20 }}
            whileInView={{ y: 0, x: 0 }}
            viewport={{ root: scrollref }}
            transition={{ ease: "linear", duration:1 }}
          >
            <motion.p className=" lg:text-2xl text-start font-extralight text-black"
            initial={{opacity:0.4,x:-20}} 
            whileInView={{opacity:1,x:0}}
            transition={{duration:1}}
            > 
            
            Book a bowler or thrower at your convenience, for the time you need, and they&apos;ll come right to your doorstep!"
            </motion.p>
                <MotionButton
                  size={"lg"}
                  variant={"default"}
                  className='" hover:bg-[#2860b4] '
                  initial={{ background: "#fff", color: "black" }}
                  whileInView={{ background: "#146ef5", color: "#fff" }}
                  whileHover={{ scale: 1.2 }}
                >
                  Register{" "}
                  <IoIosArrowRoundForward color="#fff" size={"25px"} />
                </MotionButton>
          </motion.div>
        </div>
      </div> 
      <div className="lg:p-3 p-2 lg:mt-5 max-w-[1300px] m-auto flex flex-col">
        <motion.div className="p-2 w-full"
         initial={{ x: 30, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         transition={{ duration: 1, ease: "easeIn",repeatType:"reverse"}}>
          <h1 className="lg:text-6xl text-2xl text-center font-bold">Join and Earn as a Bowler or Thrower</h1>  
        </motion.div> 
        <motion.p
            className="lg:text-xl text-center  font-bold  text-gray-200"
            initial={{ y: 20, x: 20, fontWeight: 100 }}
            whileInView={{ y: 0, x: 0, fontWeight: 700 }}
            transition={{ duration: 1.4, ease: "easeInOut",repeatType:"reverse" }}
          >
            Sign up, set your pricing, and let others hire you for their sessions!   {" "}
          </motion.p> 
          <motion.div className="w-full flex justify-center lg:p-4">
          <MotionButton
                  size={"lg"}
                  variant={"default"}
                  className='" hover:bg-[#2860b4] '
                  initial={{ background: "#fff", color: "black" }}
                  whileInView={{ background: "#146ef5", color: "#fff" }}
                  whileHover={{ scale: 1.2 }}
                >
                  Get Started{" "}
                  <IoIosArrowRoundForward color="#fff" size={"25px"} />
                </MotionButton>
          </motion.div>

      </div>
    </>
  );
};

export default Deatils;
