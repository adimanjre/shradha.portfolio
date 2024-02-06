import Image from "next/image";
import Navbar from "./Componants/Navbar";
import HeroSection from "./Componants/HeroSection";
import TaglineCard from "./Componants/TaglineCard";
import MasterSection from "./Componants/MasterSection";
import Footer from "./Componants/Footer";

export default function Home() {
  return (
    <div>
      <section className="heroSection bg-blue-950 relative z-0">
        <div className="bg-pink-500 left-60 -top-80 opacity-45 h-96 w-96 rounded-full absolute blur-3xl"></div>
        <div className="bg-blue-500 -left-60 top-0 opacity-45 h-96 w-96 rounded-full absolute blur-3xl"></div>
        <div className="bg-indigo-500 left-40 -bottom-80 opacity-45 h-96 w-96 z-10 rounded-full absolute blur-3xl"></div>
        <div className="container mx-auto px-20">
          <Navbar/>
          <HeroSection/>
        </div>
      </section>
      <section className="bg-white  relative z-20">
        <div className="container mx-auto px-20">
          <TaglineCard/>
          <MasterSection/>
        </div>
      </section>
      <section className="bg-blue-950">
        <div className="container mx-auto px-20 py-16">
          <Footer/>
        </div>
      </section>
    </div>
  );
}
