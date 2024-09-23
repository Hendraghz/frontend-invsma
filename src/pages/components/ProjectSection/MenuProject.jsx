import { useState } from "react";
import PropTypes from "prop-types";
import { ApiUrl } from "../../../api/baseUrl";
import maps from "../../../assets/images/maps.png";

const MenuProject = ({ projectData }) => {
  const [activeSection, setActiveSection] = useState("Informasi Project");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const renderContent = (text, image) => {
    return (
      <>
        {image && (
          <div className="mb-4">
            <img
              src={`${ApiUrl}${image}`}
              alt="Section Image"
              className="max-w-full h-auto rounded-md"
            />
          </div>
        )}
        {text && (
          <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
            {text}
          </p>
        )}
      </>
    );
  };
  const renderSection = () => {
    switch (activeSection) {
      case "Finansial":
        return (
          <div className="financial mt-[2rem] px-2">
            <h2 className="text-color-1 font-bold text-2xl uppercase">
              Review Financial
            </h2>
            <div className="w-full flex justify-center">
              {renderContent(
                projectData.financialHighlights,
                projectData.image_finansial
              )}
            </div>
          </div>
        );
      case "Laporan Laba Rugi":
        return (
          <div className="investment-scheme mt-[2rem] px-2">
            <h2 className="text-color-1 font-bold text-2xl uppercase">
              Laporan Laba Rugi
            </h2>
            <div className="w-full flex justify-center">
              {renderContent(
                projectData.laporanLabaRugi,
                projectData.image_labaRugi
              )}
            </div>
          </div>
        );
      case "Analisa Resiko":
        return (
          <div className="infrastructure mt-[2rem] px-2">
            <h2 className="text-color-1 font-bold text-2xl uppercase">
              Analisa Resiko
            </h2>
            <div className="w-full flex justify-center">
              {renderContent(
                projectData.analisaResiko,
                projectData.image_analisaResiko
              )}
            </div>
          </div>
        );
      case "Strategi Bisnis":
        return (
          <div className="business-strategy mt-[2rem] px-2">
            <h2 className="text-color-1 font-bold text-2xl uppercase">
              Strategi Bisnis
            </h2>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Strategi bisnis kami berfokus pada inovasi, ekspansi pasar, dan
              peningkatan efisiensi operasional. Kami berkomitmen untuk
              mengembangkan produk dan layanan baru yang memenuhi kebutuhan
              pelanggan serta memanfaatkan peluang pasar yang muncul.
            </p>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Selain itu, kami terus memperkuat kemitraan strategis dan
              mengeksplorasi aliansi bisnis baru untuk memperluas jangkauan
              kami. Melalui strategi ini, kami bertujuan untuk mempertahankan
              keunggulan kompetitif dan mencapai pertumbuhan berkelanjutan.
            </p>
          </div>
        );
      case "Lokasi Project":
        return (
          <div className="project-location mt-[2rem] px-2">
            <h2 className="text-color-1 font-bold text-2xl uppercase">
              Lokasi Project
            </h2>
            <div className="w-full flex justify-center">
              {renderContent(projectData.lokasiProject)}
            </div>
            <div className="w-full flex justify-center">
              <a
                href={projectData.urlLokasi}
                target="_blank"
                className="flex items-center flex-col gap-2 text-blue-600 "
              >
                Klik untuk Melihat lokasi Google Map
                <img src={maps} alt="" className="w-[10rem]" />
              </a>
            </div>
          </div>
        );
      default:
        return (
          <div className="informasi mt-[2rem] px-2">
            <p className="text-color-1 font-bold text-2xl uppercase">
              {projectData.nama} - {projectData.oleh} | Tahun 2024
            </p>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              {projectData.desc}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="w-screen flex justify-center">
      <div className="flex justify-center mt-[3rem] w-full">
        <div className="w-4/5">
          <div className="category flex items-center gap-3">
            {[
              "Informasi Project",
              "Finansial",
              "Laporan Laba Rugi",
              "Analisa Resiko",
              "Strategi Bisnis",
              "Lokasi Project",
            ].map((section) => (
              <button
                key={section}
                className={`px-3 py-2 font-bold rounded-md cursor-pointer ${
                  activeSection === section
                    ? "text-color-1 bg-green-100"
                    : "text-gray-600"
                }`}
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </button>
            ))}
          </div>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

MenuProject.propTypes = {
  projectData: PropTypes.shape({
    nama: PropTypes.string.isRequired,
    oleh: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    tipe: PropTypes.string.isRequired,
    tercapai: PropTypes.number.isRequired,
    target: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    lokasi: PropTypes.string.isRequired,
    lokasiProject: PropTypes.string.isRequired,
    urlLokasi: PropTypes.string.isRequired,
    waktu_tersisa: PropTypes.number.isRequired,
    rencanaAnggaran: PropTypes.string,
    financialHighlights: PropTypes.string,
    laporanLabaRugi: PropTypes.string,
    analisaResiko: PropTypes.string,
    image_legal: PropTypes.string,
    image_pemegangSaham: PropTypes.string,
    image_rencanaAnggaran: PropTypes.string,
    image_finansial: PropTypes.string,
    image_labaRugi: PropTypes.string,
    image_analisaResiko: PropTypes.string,
  }).isRequired,
};

export default MenuProject;
