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
import Berita from "./components/LandingPage/Berita";
import Kontak from "./components/LandingPage/Kontak";

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
    height: "100vh",
    width: "100vw",
  };

  return (
    <>
      <Navbar />
      <div style={heroStyle} className="pt-[13rem] ">
        <div className="title pl-[5rem]">
          <p className="font-bold text-white text-6xl">
            Unlock your financial potential with <br />{" "}
            <span className="text-color-2">comprehensive planning</span>
          </p>
          <p className="font-normal text-white text-2xl mt-[2rem]">
            Layanan konsultasi keuangan komprehensif yang disesuaikan dengan
            kebutuhan Anda
          </p>
          <p className="font-bold text-color-2 text-[1.2rem] mt-[3rem] text-center">
            Mulai sekarang juga
          </p>
          <div className="flex items-center justify-center mt-[1rem] gap-3">
            <button className="px-3 py-2 bg-color-2 text-color-1 rounded-md hover:bg-lime-100">
              Daftar Sebagai Investor
            </button>
            <p className="text-white font-medium">ATAU</p>
            <button className="px-3 py-2 bg-color-2 text-color-1 rounded-md hover:bg-lime-100">
              Mengajukan Pendanaan
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[4rem] pl-[4rem] lg:w-screen px-10 ">
        {/* Layanan */}
        <Layanan />
        {/* Project */}
        <Project />
        {/* Why Us */}
        <KenapaKami />
        {/* Berita */}
        <Berita />
        {/* Contact */}
        <Kontak />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
