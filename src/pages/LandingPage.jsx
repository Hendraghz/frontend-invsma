import { useEffect, useState } from "react";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

import dash1 from "../assets/images/Asset2.webp";
import dash2 from "../assets/images/Asset3.webp";
import dash3 from "../assets/images/Asset4.webp";
import dash4 from "../assets/images/Asset5.webp";
import dash5 from "../assets/images/Asset6.webp";
import Layanan from "./components/LandingPage/Layanan";
import Project from "./components/LandingPage/Project";
import KenapaKami from "./components/LandingPage/KenapaKami";
import SyariahPrinsip from "./components/LandingPage/SyariahPrinsip";
import Empower from "./components/LandingPage/Empower";
import OurBestService from "./components/LandingPage/OurBestService";
import Team from "./components/LandingPage/Team";
import Disclaimer from "./components/LandingPage/Disclaimer";

const images = [
  `url(${dash1})`,
  `url(${dash2})`,
  `url(${dash3})`,
  `url(${dash4})`,
  `url(${dash5})`,
];

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), ${images[currentImage]}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  };

  return (
    <>
      <Navbar />
      <div
        style={heroStyle}
        className="pt-[13rem] md:pt-[8rem] px-4 md:px-[5rem] flex flex-col justify-center items-center text-center md:text-left"
      >
        <div className="title text-left">
          <p className="font-bold text-white text-3xl md:text-6xl leading-tight">
            Grow your business financial requirement with cutting-edge
            technology
            <br className="hidden md:block" />{" "}
            <span className="text-color-2">comprehensive planning</span>
          </p>
          <p className="font-normal text-white text-xl md:text-2xl mt-4 md:mt-[2rem]">
            Layanan konsultasi keuangan komprehensif yang disesuaikan dengan
            kebutuhan Anda
          </p>
          <p className="font-bold text-color-2 text-lg md:text-[1.2rem] mt-6 md:mt-[3rem] text-center md:text-left">
            Mulai sekarang juga
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-4 md:mt-[1rem] gap-3">
            <button className="px-4 py-2 bg-color-2 text-color-1 rounded-md hover:bg-lime-100">
              Daftar Sebagai Investor
            </button>
            <p className="text-white font-medium">ATAU</p>
            <button className="px-4 py-2 bg-color-2 text-color-1 rounded-md hover:bg-lime-100">
              Mengajukan Pendanaan
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[4rem]  lg:w-screen">
        {/* Layanan */}
        <Layanan />
        {/* Prinsip */}
        <SyariahPrinsip />
        {/* Project */}
        <Project />
        {/* Why Us */}
        <KenapaKami />
        {/*Empower  */}
        <Empower />
        {/* Our Best Service */}
        <OurBestService />
        {/* Team */}
        <Team />
        {/* Disclaimer */}
        <Disclaimer/>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
