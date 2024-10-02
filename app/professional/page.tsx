'use client';
import React from "react";
import Header from "../Sections/Header";
import Nav from "../Sections/Nav";
import Footer from "../Sections/Footer";
import Deatils from "./Component/Deatils"; 
import AnimatedText from "../Sections/AnimatedText";
type navlink = {
  name: string;
  href: string;
};


type HeaderContent={
  heading:string, 
  para:string, 
  button: string
}

const Link: navlink[] = [
  { name: "Login", href: "/" },
  { name: "Register", href: "/" },
];

const heading:HeaderContent ={ 
  heading:"Become a Cricket Pro and Achieve Your Dream with SportsBuddy!", 
  para:"Looking to upgrade your batting skills or earn extra income as a bowler or thrower? We're here to help with both!",
  button:"Join us"
  
} 

const page = () => {
  return (
    <>
      <div className="lg:max-w-[1200px] md:max-w-[900px] w-full lg:h-[100vh]  lg:p-8 p-1 m-auto  "> 
      <Nav Links={Link} />
      <Header props={heading}/>
      </div>  
      <Deatils/> 
      <Footer />
    </>
  );
};

export default page;
