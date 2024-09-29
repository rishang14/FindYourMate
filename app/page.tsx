"use client"; 


type navlinks ={
  name:string,
  href:string
}

const navLinks:navlinks[]=[
  {name:"Professionals",href:"/"},
  {name:"Socials",href:"/"},
  {name:"Login",href:"/login"},
  {name:"Register",href:"/"},
]

import Feature from "./LandingPage/Feature";
import Footer from "./LandingPage/Footer";
import Header from "./LandingPage/Header";
import Nav from "./LandingPage/Nav";
export default function Home() { 

  return (
     <>
    <div className="lg:max-w-[1200px] md:max-w-[900px] w-full  lg:p-8 p-1 m-auto  "> 
    <div className="h-[full] w-[100%] mb-[4.8rem]">
    <Nav Links={navLinks}/> 
    <Header/> 
    </div> 
    <Feature/>
    </div>  
    <Footer/>
    </>
  );
}
