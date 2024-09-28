import Feature from "./LandingPage/Feature";
import Header from "./LandingPage/Header";
import Nav from "./LandingPage/Nav";
export default function Home() {
  return (
    <div className="max-w-[1200px]  p-8 m-auto  "> 
    <div className="h-[full] w-[100%] mb-[5.2rem]">
    <Nav/> 
    <Header/> 
    </div> 
    <Feature/>
    </div>
  );
}
