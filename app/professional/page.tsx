import React from "react";
import LoginUI from "./loginUI";
import Nav from "../Sections/Nav";
import Footer from "../Sections/Footer";
type navlink = {
  name: string;
  href: string;
};

const Link: navlink[] = [
  { name: "Login", href: "/" },
  { name: "Register", href: "/" },
];

const page = () => {
  return (
    <>
      <div className="lg:max-w-[1200px] md:max-w-[900px] w-full  lg:p-8 p-1 m-auto  "> 
      <Nav Links={Link} />
      <LoginUI />  
      </div>
      <Footer />
    </>
  );
};

export default page;
