"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { MotionButton } from "../Component/Button";
import bookingimg from "../../assets/Booking.webp";
import football from "../../assets/Footballimg.jpeg";
import Link from "next/link";
const Feature = () => {
  return (
    <>
      <motion.div
        className="flex flex-col justify-center relative lg:p-5 w-full p-2 lg:max-w-[1300px] m-auto"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="p-2 w-full "
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn", repeatType: "reverse" }}
        >
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-center p-3">
            What We Do?
          </h1>
          <motion.p
            className="lg:text-xl text-center  font-bold  text-gray-200"
            initial={{ y: 20, x: 20, fontWeight: 100 }}
            whileInView={{ y: 0, x: 0, fontWeight: 700 }}
            transition={{
              duration: 1.4,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
          >
            {" "}
            &quot;We help you find the perfect sports buddy!&quot; &mdash;
            &quot;Whether You&apos;re a Professional or a Fitness
            Enthusiast!&quot; &mdash;
          </motion.p>
        </motion.div>
        <div className="p-2 flex flex-col  justify-center transition-shadow border-[2px] border-[#222] bg-[#060606]">
          <motion.h2
            className=" mt-5 p-3 lg:ml-9 lg:text-3xl  text-2xl font-bold"
            initial={{ color: "#fff", opacity: 0 }}
            whileInView={{
              color: "#146ef5",
              opacity: 1,
            }}
            transition={{ duration: 1, ease: "easeIn", repeatType: "reverse" }}
          >
            For-Professionals
          </motion.h2>
          <motion.div
            className="flex   border-1  lg:flex-row flex-col-reverse border-x-slate-50 p-2 justify-center w-full m-auto"
            initial={{ opacity: 0.4, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="lg:w-[60%] w-full p-2 flex flex-col flex-wrap">
              <div className="lg:p-2">
                <motion.h3
                  className="lg:text-4xl text-2xl lg:font-semibold font-bold text-start"
                  initial={{ x: 20, y: 20 }}
                  whileInView={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: "easeIn" }}
                >
                  Book a Knocking Partner
                </motion.h3>
              </div>
              <motion.div
                className="lg:max-w-[600px] flex  flex-col "
                initial={{ x: 30 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.p
                  className="lg:p-2 lg:text-xl text-pretty text-start text-gray-200"
                  initial={{
                    opacity: 0.5,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: "easeIn" }}
                >
                  Push Your Limits on the Cricket Field! Let us help you find
                  bowlers or throwdown specialists who can come directly to your
                  doorstep. With our app, booking a personalized bowler or
                  throwing partner is easy, so you can enhance your skills and
                  elevate your game to the next level!
                </motion.p>
                <div className="p-2 ">
                  <Link href="/professional">
                    <MotionButton
                      size={"lg"}
                      variant={"default"}
                      className="p-2 mt-3 rounded-lg justify-start  bg-cyan-600 m-auto"
                      initial={{ backgroundColor: "#fff" }}
                      whileInView={{ backgroundColor: "#2860b4", scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 1, repeatType: "reverse" }}
                    >
                      Learn More{" "}
                    </MotionButton>
                  </Link>
                </div>
              </motion.div>
            </div>

            <Image
              src={bookingimg}
              alt="bookingimg"
              loading="lazy"
              className="lg:h-[450px] w-[500px]  rounded-md object-contain  "
            />
          </motion.div>
        </div>

        <div className="p-2 flex flex-col lg:mt-8 mt-4  justify-center transition-shadow border-[2px] border-[#222] bg-[#060606]">
          <motion.h2
            className=" mt-5 p-3 lg:ml-9 lg:text-3xl  text-2xl font-bold"
            initial={{ color: "#fff", opacity: 0 }}
            whileInView={{
              color: "#146ef5",
              opacity: 1,
            }}
            transition={{ duration: 1, ease: "easeIn", repeatType: "reverse" }}
          >
            For-Socials
          </motion.h2>
          <motion.div
            className="flex   border-1  lg:flex-row flex-col-reverse border-x-slate-50 p-2 justify-center w-full m-auto"
            initial={{ opacity: 0.4, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="lg:w-[60%] w-full p-2 flex flex-col flex-wrap">
              <div className="lg:p-2">
                <motion.h3
                  className="lg:text-4xl text-2xl lg:font-semibold font-bold text-start"
                  initial={{ x: 20, y: 20 }}
                  whileInView={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: "easeIn" }}
                >
                  Find Your Sports/fitness Buddy
                </motion.h3>
              </div>
              <motion.div
                className="lg:max-w-[600px] flex  flex-col "
                initial={{ x: 30 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.p
                  className="lg:p-2 lg:text-xl text-pretty text-start text-gray-200"
                  initial={{
                    opacity: 0.5,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: "easeIn" }}
                >
                  Don&apos;t Let Your Sports or Fitness Cravings Go Unmet!
                  Whether you&apos;re looking to play cricket, football any
                  sports,or go for a run, our platform connects you with
                  like-minded enthusiasts. Post about your availability, the
                  sport you want to play, and the time, or find a session that
                  fits your schedule.Meet up in real life and keep your fitness
                  goals on track with a community that motivates you!
                </motion.p>
                <div className="p-2 ">
                  <MotionButton
                    size={"lg"}
                    variant={"default"}
                    className="p-2 mt-3 rounded-lg justify-start   m-auto"
                    initial={{ backgroundColor: "#fff" }}
                    whileInView={{ backgroundColor: "#2860b4", scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 1, repeatType: "reverse" }}
                  >
                    <Link href="/socials">Learn more </Link>
                  </MotionButton>
                </div>
              </motion.div>
            </div>

            <Image
              src={football}
              alt="footballimg"
              loading="lazy"
              className="lg:h-[450px] w-[500px]  rounded-md object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Feature;
