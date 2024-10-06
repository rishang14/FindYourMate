"use client";

import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/app/Sections/AnimatedText";
import { MotionButton } from "@/app/Component/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import aloneImg from "../../../assets/Standing alone.jpeg";
import football from "../../../assets/Running img.jpeg";
import basketball from "../../../assets/Basketball.jpeg";
import exercise from "../../../assets/Exercise.jpeg";
import running from "../../../assets/Running 2 img.jpeg";

type img = {
  src: StaticImageData | string;
  alt: string;
};

const imgaraay: img[] = [
  {
    src: football,
    alt: "footballimg",
  },
  {
    src: basketball,
    alt: "basketball",
  },
  {
    src: exercise,
    alt: "exercise",
  },
  {
    src: running,
    alt: "running",
  },
];

const text: string =
  "Looking for a running or exercise partner, or a team to play sports?";
const Deatils = () => {
  return (
    <>
      <div className="w-full lg:h-[100vh] lg:p-4 border border-gray-900">
        <motion.div
          className="lg:p-3 p-2 lg:mt-5 max-w-[1300px] m-auto"
          initial={{ x: 20, y: 20 }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <motion.h1
            className="lg:text-6xl  text-center font-bold"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            &quot;Tired of asking to join a team at the ground? We&apos;ve got a
            better way!&quot;
          </motion.h1>
          <div className="lg:max-w-[850px] w-full mx-auto p-2">
            <motion.p
              className="lg:text-xl text-center  font-thin  text-gray-200"
              initial={{ y: 20, x: 20 }}
              whileInView={{ y: 0, x: 0 }}
              transition={{
                duration: 1.4,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            >
              &quot;Let us help you save time and energy by connecting you with
              like-minded sports and fitness enthusiasts&mdash;all from the
              comfort of your home.&quot;{" "}
            </motion.p>
          </div>
          <div className="flex lg:p-3 lg:mt-10 lg:flex-row flex-col-reverse flex-wrap ">
            <div className="lg:w-[70%] flex flex-col ">
              <motion.div
                className="max-w-[650px] "
                initial={{ x: 20, opacity: 0.4 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h2 className="lg:text-5xl text-2xl  text-start">
                  Leave the Old Ways Behind—Find a Better Way to Play!
                </h2>
              </motion.div>
              <motion.div
                className="mt-4 max-w-[700px]"
                initial={{ opacity: 0.3, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="lg:text-xl font-extralight  text-start">
                  "Forget wasting time at the ground, hoping to join a team.
                  With our platform, you can quickly connect with like-minded
                  players and build your team—right from home. Play smarter,
                  your sports community is just a click away!"
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
                src={aloneImg}
                alt="alone img"
                className=" object-fill h-[300px] w-[400px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="lg:h-[100vh] w-full bg-white  lg:p-4 border border-gray-900 ">
        <AnimatedText text={text} color="black" />
        <div className="lg:max-w-[1300px] flex gap-2 lg:p-2 mt-5 lg:flex-row flex-col mx-auto flex-wrap w-full">
          {imgaraay.map((item) => {
            return (
              <>
                <motion.div
                  className="flex flex-col justify-center items-center"
                  initial={{ opacity: 0.5, x: 20, y: 10 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeIn" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className=" w-[300px] object-fill"
                    loading="lazy"
                  />
                </motion.div>
              </>
            );
          })}
        </div>
        <div className="lg:max-w-[1300px] p-2 mt-2 w-full flex lg:flex-row flex-col items-center mx-auto">
          <div className="lg:w-[45%] w-full p-1">
            <h1 className="lg:text-6xl text-2xl font-bold text-start text-black">
              Ready to Elevate Your Game?
            </h1>
          </div>
          <div className="lg:w-[55%] w-full p-1 flex flex-col ">
            <p className="lg:text-xl text-start text-black font-extralight ">
              "Find a running or exercise partner, or build your sports
              team—we&apos;ve got you covered. Join SportsBuddy today to boost
              your fitness, sharpen your skills, and connect with like-minded
              athletes. Your journey starts now!"
            </p>
            <div>
              <MotionButton
                size={"lg"}
                variant={"default"}
                className='" hover:bg-[#2860b4]'
                initial={{ background: "#fff", color: "black" }}
                whileInView={{ background: "#146ef5", color: "#fff" }}
                whileHover={{ scale: 1.2 }}
              >
                Join Now <IoIosArrowRoundForward color="#fff" size={"25px"} />
              </MotionButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deatils;
