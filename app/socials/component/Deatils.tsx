"use client";

import React from 'react' 
import {motion} from "framer-motion"

const Deatils = () => {
  return (
   <>
   <div className='w-full lg:h-[100vh] lg:p-4 border border-gray-900'>
     <motion.div className='lg:p-3 p-2 lg:mt-5 max-w-[1300px] m-auto'
        initial={{ x: 20,y:20 }}
        whileInView={{ x: 0 ,y:0}} 
        transition={{ duration: 1 ,ease:"easeIn"}}
     >
           <motion.h1
            className="lg:text-6xl  text-center font-bold"
            initial={{ opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1,ease:"easeIn" }}
          >
           "Tired of asking to join a team at the ground? We've got a better way!"
          </motion.h1> 
          <div className='lg:max-w-[850px] w-full mx-auto p-2'>
          <motion.p
            className="lg:text-xl text-center  font-thin  text-gray-200"
            initial={{ y: 20, x: 20,  }}
            whileInView={{ y: 0, x: 0,  }}
            transition={{ duration: 1.4, ease: "easeInOut",repeatType:"reverse" }}
          >
            "Let us help you save time and energy by connecting you with like-minded sports and fitness enthusiasts—all from the comfort of your home."
            {" "}
          </motion.p>
          </div>
     </motion.div>
   </div>
   </>
  )
}

export default Deatils