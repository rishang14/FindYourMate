"use client"; 

type navlinks ={
  name:string,
  href:string
}

type HeaderContent={
  heading:string, 
  para:string, 
  button: string
}

const navLinks:navlinks[]=[
  {name:"Professionals",href:"/professional"},
  {name:"Socials",href:"/socials"},
] 

const HeaderContent:HeaderContent={
  heading:" Let us find the perfect sports buddy to fuel your fitness and sports cravings!", 
  para:  "Never let your sports and fitness cravings fade just because no one's free. We help you find partners and let professionals book a  bowler. Always aim to upgrade yourself and stay fit!",
  button:"Get Started"
} 
const animatedText:string= "Join us, and let’s fulfill your passion for sports together!"

import Feature from "./Sections/Feature";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Nav from "./Sections/Nav";
import AnimatedText from "./Sections/AnimatedText";
export default function Home() { 

  return (
     <>
    <div className="lg:max-w-[1200px] md:max-w-[900px] w-full  lg:p-8 p-1 m-auto  "> 
    <div className="h-[full] w-[100%] mb-[4.8rem]">
    <Nav Links={navLinks}/> 
    <Header props={HeaderContent}/> 
    </div> 
    </div>  
    <Feature/> 
    <AnimatedText text={animatedText}/>
    <Footer/>
    </>
  );
}
