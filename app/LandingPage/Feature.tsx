import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import bookingimg from "../../assets/Booking.webp";
import running from "../../assets/Running.png";

const Feature = () => {
  return (
    <>
      <div className="flex flex-col justify-center lg:p-5 w-full ">
        <motion.div
          className="p-2 w-full "
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn",repeatType:"reverse"}}
        >
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold text-center p-3">What We Do?</h1>
          <motion.p
            className="text-xl text-center font-bold  text-slate-400"
            initial={{ y: 20, x: 20, fontWeight: 100 }}
            whileInView={{ y: 0, x: 0, fontWeight: 700 }}
            transition={{ duration: 1.4, ease: "easeInOut",repeatType:"reverse" }}
          >
            {" "}
            "We help you find the perfect sports buddy!" —"Whether You&apos;re a
            Professional or a Fitness Enthusiast!"—
          </motion.p>
        </motion.div>
        <div className="p-2 flex flex-col  justify-center">
          <motion.h2
            className=" mt-5 p-3 lg:ml-9  font-bold"
            initial={{ color: "#fff", fontSize: "20px", opacity: 0.4 }}
            whileInView={{
              color: "#146ef5",
              fontSize: "30px",
              lineHeight: "36px",
              opacity: 1,
            }}
            transition={{ duration: 1, ease: "easeIn",repeatType:"reverse" }}
          >
            For-Professionals
          </motion.h2>
          <div className="flex items-center  border-1  lg:flex-row flex-col-reverse border-x-slate-50 p-2 justify-center w-full m-auto">
            <div className="lg:w-[60%] w-full p-2 flex flex-col flex-wrap">
              <div className="p-2">
                <motion.h3
                  className="  font-semibold text-center"
                  initial={{ fontSize: 0, opacity: 0.4 }}
                  whileInView={{ 
                    fontSize:"36px" ,
                    lineHeight: "40px",
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: "easeIn",repeatType:"reverse"}}
                >
                  Book a Knocking Partner
                </motion.h3>
              </div>
              <motion.div
                className="max-w-[400px] flex justify-center flex-col m-auto"
                initial={{ x: -80 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1,repeatType:"reverse" }}
              >
                <motion.p
                  className="p-2  text-pretty text-center"
                  initial={{
                    color: "#fff",
                    textAlign: "start",
                    fontSize: "15px",
                    lineHeight: "14px",
                    opacity: 0.4,
                  }}
                  whileInView={{
                    color: "#94a3b8",
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "28px",
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: "easeIn",repeatType:"reverse" }}
                >
                  "Push Your Limits on the Cricket Field! Let us help you find
                  bowlers or throwdown specialists who can come directly to your
                  doorstep. With our app, booking a personalized bowler or
                  throwing partner is easy, so you can enhance your skills and
                  elevate your game to the next level!"
                </motion.p>
                <motion.button
                  className="p-2 mt-3 rounded-lg  bg-cyan-600 m-auto"
                  initial={{ backgroundColor: "#fff" }}
                  whileInView={{ backgroundColor: "#0891b2", }}
                  transition={{ duration: 1 ,repeatType:"reverse"}}
                >
                  Demo button -3{" "}
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              className="lg:w-[40%] w-full p-2 border-1 rounded-lg bg-opacity-50 backdrop-blur bg-gray-800 "
              initial={{ x: 90, opacity: 0.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn",repeatType:"reverse"}}
            >
              <Image
                src={bookingimg}
                alt="bookingimg "
                loading="lazy"
                className="h-[450px] w-[500px]  rounded-md object-contain"
              />
            </motion.div>
          </div>
        </div>
        <div className="p-2 flex lg:flex-col  flex-wrap  justify-center">
          <motion.h2
            className="text-3xl mt-5 p-3  lg:ml-9 font-bold text-[#146ef5] "
            initial={{ color: "#fff", fontSize: "20px", opacity: 0.4 }}
            whileInView={{
              color: "#146ef5",
              fontSize: "30px",
              lineHeight: "36px",
              opacity: 1,
            }}
            transition={{ duration: 1, ease: "easeIn",repeatType:"reverse"}}
          >
            For-Socials
          </motion.h2>
          <div className="flex items-center lg:ml-[5rem] flex-wrap border-1 border-x-slate-50 p-2 justify-center w-full m-auto">
            <motion.div
              className="lg:w-[40%] w-full m-auto flex lg:p-2 border-1 rounded-lg bg-opacity-50 backdrop-blur bg-gray-800 "
              initial={{ x: -90, opacity: 0.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn",repeatType:"reverse" }}
            >
              <Image
                src={running}
                alt="bookingimg "
                loading="lazy"
                className="h-[450px] w-[500px]  rounded-md object-contain"
              />
            </motion.div>
            <div className="lg:w-[60%] w-full p-2 flex flex-col  ">
              <div className="p-2">
                <motion.h3
                  className="text-4xl  font-semibold text-center"
                  initial={{ fontSize: 0, opacity: 0.4 }}
                  whileInView={{
                    fontSize: "36px",
                    lineHeight: "40px",
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: "easeIn" ,repeatType:"reverse"}}
                >
                  Find Your Sports/fitness Buddy
                </motion.h3>
              </div>
              <div className="lg:max-w-[400px] w-full flex justify-center flex-wrap flex-col m-auto">
                <motion.p
                  className="p-2 text-xl text-pretty"
                  initial={{
                    color: "#fff",
                    textAlign: "start",
                    fontSize: "15px",
                    lineHeight: "14px",
                    opacity: 0.4,
                  }}
                  whileInView={{
                    color: "#94a3b8",
                    textAlign: "center",
                    fontSize: "20px",
                    lineHeight: "28px",
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: "easeIn" ,repeatType:"reverse"}}
                >
                  "Don't Let Your Sports or Fitness Cravings Go Unmet! Whether
                  you're looking to play cricket, football any sports ,or go for
                  a run, our platform connects you with like-minded enthusiasts.
                  Post about your availability, the sport you want to play, and
                  the time, or find a session that fits your schedule.Meet up in
                  real life and keep your fitness goals on track with a
                  community that motivates you!"
                </motion.p>
                <button className="p-2 mt-3 rounded-lg  bg-cyan-600 m-auto">
                  Demo button -4{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
