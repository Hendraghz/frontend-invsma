import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), ${images[currentImage]}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
  };
  const text1 = "Grow your business financial";
  const text2 = "Grow your investment potential";

  const [currentText, setCurrentText] = useState(text1);
  const [isText1, setIsText1] = useState(true); // Mengontrol teks mana yang ditampilkan

  useEffect(() => {
    const interval = setInterval(() => {
      setIsText1((prevIsText1) => !prevIsText1); // Toggle antara text1 dan text2
      setCurrentText(isText1 ? text2 : text1); // Ganti teks ketika yang satu selesai
    }, 6000); // Interval waktu setelah animasi selesai

    return () => clearInterval(interval);
  }, [isText1]); // Tambahkan dependensi `isText1`

  const letters = currentText.split(" ").map((word) => word.split(""));

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Controls the delay between each word animation
      },
    },
  };

  const letterAnimation = {
    hidden: { rotateY: -90, opacity: 0 }, // Flip horizontal ke kiri
    visible: { rotateY: 0, opacity: 1, transition: { duration: 0.4 } }, // Normal
    exit: { rotateY: 90, opacity: 0, transition: { duration: 0.4 } }, // Flip horizontal ke kanan
  };

  return (
    <>
      <Navbar />
      <div
        style={heroStyle}
        className="pt-[13rem] md:pt-[8rem] px-4 md:px-[5rem] flex flex-col justify-center items-start text-center md:text-left"
      >
        <div className="title text-left">
          <motion.div
            className="flip-text"
            variants={container}
            initial="hidden"
            animate="visible"
            key={currentText}
            style={{ display: "flex", gap: "0.5rem" }} // Adjust gap between words
          >
            {letters.map((word, wordIndex) => (
              <motion.div
                key={wordIndex}
                variants={wordContainer}
                className="flex font-extrabold text-white text-4xl md:text-7xl "
              >
                {word.map((letter, index) => (
                  <motion.span key={index} variants={letterAnimation}>
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </motion.div>
          <p className="font-semibold text-white text-xl md:text-2xl mt-4 md:mt-[2rem] px-4">
            Comprehensive financial consulting services tailored to your needs
          </p>
          <div className="flex flex-col md:flex-row items-center justify-start md:justify-start mt-4 md:mt-[3rem] md:px-4 gap-3">
            <button className="px-4 py-3 bg-white text-color-1 font-semibold hover:bg-color-1 hover:text-white">
              Daftar Sekarang
            </button>
            <p className="text-white font-medium">ATAU</p>
            <button className="px-8 py-3 bg-white text-color-1 font-semibold hover:bg-color-1 hover:text-white">
              Login
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
        <Disclaimer />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
