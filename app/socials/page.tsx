'use client';
import React from "react";
import Header from "../Sections/Header";
import Nav from "../Sections/Nav";
import Footer from "../Sections/Footer"; 
import Deatils from "./component/Deatils";
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
  heading:"Don't hold back on your fitness and sports cravings!,", 
  para:"Don’t suppress your sports and fitness cravings just because no one’s available—let us help you! Find your fitness partner or build your sports team today.",
  button:"Register Now"
  
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