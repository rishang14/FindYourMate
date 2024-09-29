import React from "react";
import LoginUI from "./loginUI";
import Nav from "../LandingPage/Nav";
import Footer from "../LandingPage/Footer";
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
      <Nav Links={Link} />
      <LoginUI />
      <Footer />
    </>
  );
};

export default page;
