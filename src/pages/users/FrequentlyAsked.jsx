import NavbarUser from "../layout/NavbarUser";
import Footer from "../layout/Footer";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";
const FrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Apa itu INVSMA?",
      answer:
        "INVSMA adalah platform yang menyediakan informasi mengenai investasi dan manajemen keuangan.",
    },
    {
      question: "Bagaimana cara mendaftar di INVSMA?",
      answer:
        "Anda dapat mendaftar dengan mengunjungi halaman pendaftaran dan mengisi formulir yang tersedia.",
    },
    {
      question: "Apakah INVSMA aman digunakan?",
      answer:
        "Ya, INVSMA telah menerapkan berbagai lapisan keamanan untuk melindungi data dan privasi pengguna.",
    },
  ];

  return (
    <div>
      <NavbarUser />
      <div className="pt-[6rem] px-10  pb-[3rem] border-l flex items-center justify-center w-full">
        <div className="wrap flex flex-col items-center w-screen">
          <div className="w-4/5 bg-color-2 rounded-md px-10 py-4 flex flex-col items-center">
            <img src={Logo} alt="" width={80} />
            <div className="title text-center">
              <p className="font-bold text-color-1">FAQ</p>
              <p className="font-normal text-color-1">
                Frequently Asked Question
              </p>
            </div>
          </div>
          <div className="mt-[2rem]  w-4/5">
            <p className="font-bold text-color-1 text-left text-md">
              Beberapa Pertanyaan Umum Terhadap INVSMA
            </p>
            <p className="font-normal text-color-1 text-left text-sm">
              Klik Pertanyaan untuk melihat jawaban
            </p>
            <div className="mt-[1rem]">
              {faqData.map((item, index) => (
                <div key={index} className="mb-2">
                  <button
                    className="w-full text-left font-semibold text-color-1 text-md focus:outline-none px-4 py-3 rounded-md bg-color-2"
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                  </button>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out px-4 py-1 ${
                      activeIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <p className="mt-2 text-color-1 text-sm">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FrequentlyAsked;
