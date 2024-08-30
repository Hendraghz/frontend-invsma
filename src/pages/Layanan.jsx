import Navbar from "./layout/Navbar";
import dash1 from "../assets/images/Asset2.webp";
import peta from "../assets/images/Peta.png";
import seimbang from "../assets/images/seimbang.png";
import manajemen from "../assets/images/manajemen.png";
import Footer from "./layout/Footer";

const Layanan = () => {
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
        <div className="title text-center mt-[6rem]">
          <p className="font-bold text-color-2 text-4xl">
            LAYANAN - LAYANAN INVSMA <br />
          </p>
          <p className="font-bold text-xl text-white mt-[1rem] px-5">
            Tim kami yang berdedikasi bekerja sama dengan Anda untuk mendapatkan
            wawasan mendalam tentang aspirasi Anda, dan bersama-sama, kami
            menyusun cetak biru pragmatis yang membuka jalan menuju pencapaian
            tujuan Anda.
          </p>
        </div>
      </div>
      {/* Layanan */}
      <div className="pt-[4rem] pl-[4rem] lg:w-screen px-10 ">
        <div className="text-center">
          <p className="text-color-1 font-bold text-2xl uppercase">
            Menyesuaikan rencana menggunakan kemampuan yang terdaftar
          </p>
          <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] px-10">
            Tim kami yang berdedikasi bekerja sama dengan Anda untuk mendapatkan
            wawasan mendalam tentang aspirasi Anda, dan bersama-sama, kami
            menyusun cetak biru pragmatis yang membuka jalan menuju pencapaian
            tujuan Anda.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div className="flex bg-color-1 px-6 py-3 w-[51rem] rounded-md justify-between">
            <div className="w-[30rem]">
              <p className="font-bold text-xl text-color-2">
                Peta Jalan Keuangan yang Disesuaikan
              </p>
              <p className="text-white font-light text-md mt-[1rem] text-justify">
                Merancang peta jalan keuangan individual, memadukan strategi
                jangka pendek dan jangka panjang dengan mulus untuk memastikan
                kesuksesan finansial Anda baik saat ini maupun di masa depan.
              </p>
            </div>
            <div className="px-5 py-5 bg-gray-100 rounded-md shadow-md">
              <img src={peta} alt="peta" className="w-[8rem]" />
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <div className="bg-color-1 px-6 py-3 w-[25rem] rounded-md justify-between">
              <div>
                <p className="font-bold text-xl text-color-2">
                  Menyeimbangkan Kebutuhan Mendesak dengan Tujuan Masa Depan
                </p>
                <p className="text-white font-light text-md mt-[1rem] text-justify">
                  Mencapai keseimbangan yang halus antara menangani kebutuhan
                  keuangan langsung dan perencanaan strategis untuk tujuan masa
                  depan melalui pengaturan keuangan yang bijaksana.
                </p>
              </div>
              <div className="px-5 py-5 bg-gray-100 rounded-md shadow-md mt-[3.5rem] flex justify-center">
                <img src={seimbang} alt="peta" className="w-[8rem]" />
              </div>
            </div>
            <div className="bg-color-1 px-6 py-3 w-[25rem] rounded-md justify-between">
              <div>
                <p className="font-bold text-xl text-color-2">
                  Manajemen Keuangan Holistik
                </p>
                <p className="text-white font-light text-lg mt-[1rem] text-justify">
                  Memberikan pendekatan holistik terhadap manajemen keuangan
                  yang mencakup stabilitas keuangan jangka pendek dan
                  pembangunan kekayaan jangka panjang, semuanya dalam satu
                  rencana komprehensif.
                </p>
              </div>
              <div className="px-5 py-5 bg-gray-100 rounded-md mt-[1rem] shadow-md flex justify-center">
                <img src={manajemen} alt="peta" className="w-[8rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step - Step */}
      <div className="pt-[4rem] pl-[4rem] lg:w-screen px-10 ">
        <div className="text-center">
          <p className="text-color-1 font-bold text-2xl uppercase">
            Proses Layanan INVSMA
          </p>
        </div>

        <div className="flex justify-center">
          <div>
            <div className="flex justify-center mt-[1rem]">
              <p className="px-2 py-2 rounded-full bg-color-1 text-white w-fit font-bold text-sm">
                01
              </p>
            </div>
            <div className="flex w-[60rem]">
              <div className="w-[30rem] border-r border-color-1">
                01. Mengenal Anda
              </div>
              <div className="w-[30rem] pl-[10rem] text-justify">
                <p>
                  Mengenal Anda Sebelum keterlibatan formal, kami
                  memprioritaskan pemahaman situasi pribadi Anda, tujuan
                  keuangan, dan perhatian utama yang mendorong pencarian Anda
                  akan nasihat keuangan. Ini membentuk dasar untuk lingkup
                  pekerjaan yang disepakati bersama. Silakan temukan di bawah
                  daftar lengkap kemampuan kami.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="px-2 py-2 rounded-full bg-color-1 text-white w-fit font-bold text-sm">
                02
              </p>
            </div>
            <div className="flex w-[60rem]">
              <div className="w-[30rem] border-r border-color-1">
                02. Mendapatkan Kejelasan tentang Keuangan Anda
              </div>
              <div className="w-[30rem] pl-[10rem] text-justify">
                <p>
                  Keterlibatan perencanaan komprehensif kami dimulai dengan
                  menilai neraca dan arus kas Anda secara bersama-sama. Akses
                  portal klien kami yang aman untuk mengunggah dokumen atau
                  menautkan akun Anda secara elektronik.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="px-2 py-2 rounded-full bg-color-1 text-white w-fit font-bold text-sm">
                03
              </p>
            </div>
            <div className="flex w-[60rem]">
              <div className="w-[30rem] border-r border-color-1">
                03. Membangun Visi Keuangan Anda
              </div>
              <div className="w-[30rem] pl-[10rem] text-justify">
                <p>
                  Kami bekerja sama dengan Anda untuk memprioritaskan tujuan
                  Anda dan menilai pilihan keuangan dan risiko yang terlibat
                  dalam mencapainya. Melalui kemitraan yang erat, kami
                  menetapkan proyeksi dasar kekayaan finansial Anda di masa
                  depan, memberikan peta jalan untuk kesuksesan Anda.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="px-2 py-2 rounded-full bg-color-1 text-white w-fit font-bold text-sm">
                04
              </p>
            </div>
            <div className="flex w-[60rem]">
              <div className="w-[30rem] border-r border-color-1">
                04. Menganalisis Pengorbanan
              </div>
              <div className="w-[30rem] pl-[10rem] text-justify">
                <p>
                  Kami menggunakan model keuangan kami untuk mengembangkan
                  skenario alternatif, menginformasikan rekomendasi tentang
                  pajak, asuransi, dan investasi agar selaras dengan tujuan
                  Anda. Menjelajahi skenario untuk menyelaraskan rekomendasi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-3 py-2 bg-color-1 text-white rounded-md mt-[1rem] hover:bg-green-500">
            Hubungi Kami
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layanan;
