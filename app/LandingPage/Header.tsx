"use client";

import React from "react";
import { motion } from "framer-motion";
import { once } from "events";

const Header = () => {
  return (
    <>
      <div className="w-full mt-[5rem] flex flex-col h-full items-center p-4">
        <motion.div
          className="p-4 "
          initial={{
            opacity: 0,
            y: 40, 
            x:20
          }}
          animate={{
            opacity: 1,
            y: 0, 
            x:0
          }}
          transition={{
            duration: 1,
          }}
        >
          <motion.h1
            className="p-2 text-center font-bold"
            initial={{ fontSize: "40px", opacity: 0.4, lineHeight: 1 }}
            animate={{ fontSize: "60px", lineHeight: 1, opacity: 1 }}
          >
            Let us find the perfect sports buddy to fuel your fitness and sports
            cravings!
          </motion.h1>
        </motion.div>
        <motion.div
          className="p-2  w-[85%] flex justify-center"
          initial={{
            opacity: 0,
            x: 60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="text-xl text-center font-bold text-slate-400">
            Never let your sports and fitness cravings fade just because no
            one's free. We help you find partners and let professionals book a
            bowler. Always aim to upgrade yourself and stay fit!
          </p>
        </motion.div>
        <div
          className="flex justify-center p-4 items-center "
        >
          <button className="p-2 rounded-md bg-gray-200 text-slate-700">
            Demo 1{" "}
          </button>
          <span className="text-5xl p-2">|</span>
          <button className="p-2 rounded-md  bg-gray-200 text-slate-700">
            Demo 2{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
