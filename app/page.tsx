import Feature from "./LandingPage/Feature";
import Footer from "./LandingPage/Footer";
import Header from "./LandingPage/Header";
import Nav from "./LandingPage/Nav";
export default function Home() {
  return (
     <>
    <div className="max-w-[1200px]  p-8 m-auto  "> 
    <div className="h-[full] w-[100%] mb-[4.8rem]">
    <Nav/> 
    <Header/> 
    </div> 
    <Feature/>
    </div>  
    <Footer/>
    </>
  );
}
