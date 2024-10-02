import React from 'react'
import {motion} from "framer-motion"

const AnimatedText = ({text,color}:{text:string,color:string}) => {
  return (
    <motion.div className='lg:max-w-[1200px]  w-full m-auto p-3 lg:mt-5rem lg:mb-5rem'
    initial={{scale:0.5,opacity:1,color:"#2860b4",}} 
    animate={{scale:1.1,opacity:1,color:color}}
    transition={{repeatDelay:2,duration:2,repeat:Infinity,ease:"circInOut"}}
    >
    <motion.h1 className='lg:text-5xl font-bold text-xl text-center'
    >{text}</motion.h1>
    </motion.div>
  )
}

export default AnimatedText;