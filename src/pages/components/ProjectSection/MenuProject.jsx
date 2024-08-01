import { useState } from "react";
import PropTypes from "prop-types";

const MenuProject = ({ projectData }) => {
  const [activeSection, setActiveSection] = useState("Informasi Project");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Finansial":
        return (
          <div className="financial mt-[2rem] px-2">
            <h2 className="text-color-1 font-bold text-2xl uppercase">
              Keuangan (2 Tahun)
            </h2>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Dalam dua tahun terakhir, kami telah mencapai pertumbuhan yang
              signifikan dalam pendapatan dan laba bersih. Kami telah
              menginvestasikan sumber daya kami dengan bijak untuk memastikan
              stabilitas keuangan jangka panjang dan mempertahankan tren positif
              dalam semua metrik keuangan utama.
            </p>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Selain itu, kami telah mengurangi utang dan meningkatkan arus kas
              operasional, yang memberikan kami fleksibilitas untuk berinvestasi
              lebih lanjut dalam peluang bisnis baru dan memperkuat posisi pasar
              kami. Kami berkomitmen untuk terus mengoptimalkan kinerja keuangan
              kami demi kepentingan semua pemangku kepentingan.
            </p>
          </div>
        );
      case "Skema Investasi":
        return (
          <div className="investment-scheme mt-[2rem] px-2">
            <h2 className="text-color-1 font-bold text-2xl uppercase">
              Skema Investasi (1 Bulan)
            </h2>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Selama satu bulan terakhir, skema investasi kami telah menunjukkan
              hasil yang menggembirakan dengan tingkat pengembalian sebesar 5%.
              Strategi investasi kami yang terdiversifikasi dan analisis pasar
              yang mendalam telah membantu kami mencapai hasil ini.
            </p>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Dengan berfokus pada sektor-sektor yang memiliki potensi
              pertumbuhan tinggi dan mengelola risiko dengan hati-hati, kami
              yakin bahwa skema investasi kami akan terus memberikan
              pengembalian yang kompetitif bagi para investor dalam jangka
              panjang.
            </p>
          </div>
        );
      case "Informasi Infrastruktur":
        return (
          <div className="infrastructure mt-[2rem] px-2">
            <h2 className="text-color-1 font-bold text-2xl uppercase">
              Informasi Infrastruktur
            </h2>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Kami telah mengembangkan infrastruktur yang solid untuk mendukung
              pertumbuhan bisnis kami. Ini mencakup jaringan distribusi yang
              luas, fasilitas produksi yang modern, dan teknologi informasi yang
              canggih. Infrastruktur ini memungkinkan kami untuk beroperasi
              dengan efisiensi tinggi dan memberikan layanan terbaik kepada
              pelanggan.
            </p>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Selain itu, kami terus berinvestasi dalam peningkatan
              infrastruktur untuk memastikan bahwa kami tetap berada di garis
              depan industri. Proyek-proyek baru sedang dalam pengembangan untuk
              memperluas kapasitas dan meningkatkan kinerja operasional kami
              secara keseluruhan.
            </p>
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
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Proyek-proyek kami tersebar di berbagai lokasi strategis untuk
              memaksimalkan aksesibilitas dan efisiensi operasional. Setiap
              lokasi dipilih berdasarkan analisis yang mendalam untuk memastikan
              bahwa kami dapat mencapai tujuan bisnis kami dengan efektif.
            </p>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[50rem] text-justify">
              Dari kawasan industri hingga pusat kota, kami memastikan bahwa
              setiap proyek kami didukung oleh infrastruktur yang memadai dan
              akses yang baik ke sumber daya penting. Hal ini memungkinkan kami
              untuk beroperasi dengan optimal dan memberikan nilai tambah kepada
              pelanggan kami.
            </p>
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
    <div>
      <div className="flex justify-center mt-[3rem]">
        <div className="w-4/5">
          <div className="category flex items-center gap-3">
            {[
              "Informasi Project",
              "Finansial",
              "Skema Investasi",
              "Informasi Infrastruktur",
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
    tercapai: PropTypes.string.isRequired,
    Target: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    lokasi: PropTypes.string.isRequired,
    waktu_tersisa: PropTypes.string.isRequired,
  }).isRequired,
};

export default MenuProject;
