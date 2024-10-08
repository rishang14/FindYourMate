"use client";
import Link from 'next/link'
import React from 'react'  

type link={
  name:string,
  href:string
}

const Nav = ({Links}:{Links:link[]}) => {
  return (
    <nav className='flex rounded-full z-50 backdrop-blur bg-opacity-50 bg-slate-950   w-[100%] lg:max-w-[1150px] border border-slate-500 p-5'>
    <div className='flex items-center w-[80%] px-4  gap-2'>
     <Link className='text-2xl gap-2 font-bold' href={"/"}> 
      SportsBuddy
     </Link>
    </div> 
    <div className='lg:flex hidden items-center gap-4 px-4 '> 

      {
        Links.map((item,index) =>{
          return (
            <Link  href={item.href} className='text-gray-200 font-bold hover:text-blue-400' key={index} > {item.name}</Link>
          )
        })
      }
    </div>
    </nav>
  )
}

export default Nav