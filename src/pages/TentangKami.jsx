import Navbar from "./layout/Navbar";
import dash1 from "../assets/images/Asset2.webp";
import Footer from "./layout/Footer";

const TentangKami = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(6,113,40,0.8), rgba(6,113,40,0.3)), url(${dash1})`,
    backgroundSize: "cover",
    height: "80vh",
    width: "100vw",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <Navbar />
      <div style={heroStyle} className="pt-[13rem] flex justify-center">
        <div className="title text-center mt-[4rem]">
          <p className="font-bold text-color-2 text-4xl">
            TENTANG <span className="text-white font-bold">INVSMA</span>
          </p>
          <p className="font-bold text-xl text-white mt-[1rem] px-5">
            Membangun Jembatan untuk Pertumbuhan yang Berkelanjutan dan Inklusif
          </p>
        </div>
      </div>
      {/* Layanan */}
      <div className="pt-[4rem] pl-[4rem] lg:w-screen px-10 ">
        <div className="text-center">
          <p className="text-color-1 font-bold text-2xl uppercase">
            APA ITU INVSMA?
          </p>
          <p className="text-gray-500 font-normal text-lg mb-[2rem] mt-[1rem] px-10 text-justify">
            Di Invsma, perjalanan kami dimulai dengan pendekatan yang unik, yang
            mencerminkan komitmen kami terhadap inovasi dan kepatuhan Syariah.
            Alih-alih mengikuti jalur karier yang menuntut, semua atau tidak
            sama sekali, kami memprioritaskan keseimbangan dan kesejahteraan.
            Invsma memberikan peluang untuk menemukan kepuasan dalam kehidupan
            profesional dan pribadi Anda, sambil menghargai keluarga dan
            terlibat dalam proyek yang berdampak bersama perusahaan dalam
            komunitas Anda. Prinsip inti kami, di Invsma, adalah berinvestasi
            pada masyarakat, komunitas, dan kesuksesan klien kami, dengan tetap
            berpegang pada prinsip Syariah. Kami secara konsisten diakui sebagai
            tempat kerja terbaik, dirayakan atas komitmen kami untuk menciptakan
            lingkungan di mana individu tidak hanya unggul tetapi juga
            berkembang, semuanya sejalan dengan nilai-nilai inti kami.
          </p>
        </div>
      </div>
      {/* Yang Kami Yakini */}
      <div className="pt-[4rem] pl-[4rem] lg:w-screen px-10 ">
        <div className="text-center">
          <p className="text-color-2 font-bold text-1xl uppercase">
            Apa yang kami yakini?
          </p>
          <p className="text-color-1 font-bold text-4xl uppercase">
            Lakukan apa yang benar, selalu
          </p>
        </div>
        <div className="flex gap-3 mt-[2rem]">
          <img src={dash1} alt="das" className="w-[20rem] rounded-md" />
          <div>
            <p className="text-gray-500 font-normal text-lg mb-[2rem] mt-[1rem] px-10 text-justify">
              Di Invsma, perjalanan kami dimulai dengan pendekatan yang unik,
              yang mencerminkan komitmen kami terhadap inovasi dan kepatuhan
              Syariah. Alih-alih mengikuti jalur karier yang menuntut, semua
              atau tidak sama sekali, kami memprioritaskan keseimbangan dan
              kesejahteraan. Invsma memberikan peluang untuk menemukan kepuasan
              dalam kehidupan profesional dan pribadi Anda, sambil menghargai
              keluarga dan terlibat dalam proyek yang berdampak bersama
              perusahaan dalam komunitas Anda.
            </p>
            <p className="text-gray-500 font-normal text-lg mb-[2rem] mt-[1rem] px-10 text-justify">
              Prinsip inti kami, di Invsma, adalah berinvestasi pada masyarakat,
              komunitas, dan kesuksesan klien kami, dengan tetap berpegang pada
              prinsip Syariah. Kami secara konsisten diakui sebagai tempat kerja
              terbaik, dirayakan atas komitmen kami untuk menciptakan lingkungan
              di mana individu tidak hanya unggul tetapi juga berkembang,
              semuanya sejalan dengan nilai-nilai inti kami.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TentangKami;
