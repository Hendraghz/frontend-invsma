import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { iconPanduan } from "../assets/panduan";
import { useState } from "react";

const PanduanUser = () => {
  const [activeTab, setActiveTab] = useState("penerbit");
  const panduan = [
    {
      step: "Tahap Pertama",
      title: "Buat akun sebagai Pengguna, verifikasi email dan nomor HP",
      desc: "Buat akun di platform INVSMA, lalu anda diwajibkan mengisi semua data yang terdapat dalam halaman registrasi atau menggunakan Google untuk login.",
      image: iconPanduan.image1,
    },
    {
      step: "Tahap Kedua",
      title: "Melengkapi data eKYC.",
      desc: "Setelah berhasil login anda diharuskan untuk mengisi data eKYC sebagai syarat dari kami.",
      image: iconPanduan.image2,
    },
    {
      step: "Tahap Ketiga",
      title: "Setelah lolos eKYC, selanjutnya pilih tombol Pendaftaran Bisnis.",
      desc: "Setelah anda lolos eKYC ada dapat mengajukan Bisnis anda dan diwajibkan Mengisi data dan upload dokumen yang diperlukan. Tim INVSMA akan menghubungi Anda untuk melanjutkan prosesnya.",
      image: iconPanduan.image3,
    },
    {
      step: "Tahap Keempat",
      title:
        "Komite INVSMA akan meninjau bisnis Anda dan memberikan keputusan.",
      desc: "Setelah bisnis anda di lakukan pengecekan oleh komite INVSMA dan dinyatakan bisnis Anda lolos due diligence, Bisnis Anda akan segera listing di Platform INVSMA.",
      image: iconPanduan.image4,
    },
    {
      step: "Tahap Kelima",
      title: "Anda akan mendapatkan notifikasi dari Tim INVSMA",
      desc: "Setelah target dana terpenuhi (efek yang ditawarkan kepada pemodal), Anda akan segera mendapatkan notifikasi dari Tim INVSMA untuk menyelesaikan administrasi.",
      image: iconPanduan.image5,
    },
    {
      step: "Tahap Keenam",
      title: "Anda dapat melakukan penarikan dana",
      desc: "Anda dapat melakukan penarikan dana hasil crowdfunding ke rekening perusahaan yang sudah didaftarkan pada Platform INVSMA.",
      image: iconPanduan.image6,
    },
    {
      step: "Tahap Ketujuh",
      title:
        "Berikan performa bisnis & bagi hasil terbaik kepada para Pemodal.",
      desc: "Kami berharap anda dapat memberikan performa dan bagi hasil terbaik bagi para pemodal.",
      image: iconPanduan.image5,
    },
  ];

  const panduan2 = [
    {
      step: "Tahap Pertama",
      title: "Buat akun sebagai Pengguna, verifikasi email dan nomor HP.",
      desc: "Buat akun di platform INVSMA, lalu anda diwajibkan mengisi semua data yang terdapat dalam halaman registrasi atau menggunakan Google untuk login.",
      image: iconPanduan.image1,
    },
    {
      step: "Tahap Kedua",
      title: "Melengkapi data eKYC.",
      desc: "Setelah berhasil login anda diharuskan untuk mengisi data eKYC sebagai syarat dari kami.",
      image: iconPanduan.image4,
    },
    {
      step: "Tahap Ketiga",
      title: "Setelah lolos eKYC, selanjutnya bisa memilih Bisnis",
      desc: "Setelah anda lolos eKYC ada dapat memilih Bisnis yang ingin anda pilih",
      image: iconPanduan.image2,
    },
    {
      step: "Tahap Keempat",
      title: "Lakukan investasi pada bisnis yang dipilih.",
      desc: "Setelah memilih anda dapat melakukan investasi dengan beragam metode pembayaran",
      image: iconPanduan.image5,
    },
    {
      step: "Tahap Kelima",
      title: "Ikuti perkembangan bisnis",
      desc: "And dapat mengikuti perkembangan bisnis yang Anda pilih melalui dashboard Anda di Platform INVSMA.",
      image: iconPanduan.image5,
    },
  ];
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex justify-center w-full">
        <div className="bg-color-3 pt-[2rem] border-b-2 w-full">
          <div className="bg-color-1 w-fit px-5 py-5 text-white font-extrabold uppercase ml-[1rem]">
            Panduan Pengguna
          </div>
          <div className="bg-white py-12 w-3/4 px-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Ayo daftarkan diri anda di INVSMA untuk meningkatkan financial
              bisnis anda serta tingakatkan investasi anda.
            </h1>
            <h1 className="text-2xl font-bold text-emerald-600 mt-[2rem]">
              Pendaftaran Gratis
            </h1>
            <button className="px-6 py-4 border border-black mt-[1rem] font-bold text-lg hover:text-white hover:bg-color-1">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 flex justify-center">
        <div className="md:w-full 2xl:w-4/5">
          <div className="desc">
            <p className="font-semibold text-xl px-10">
              Untuk memahami dan mempelajari mengenai{" "}
              <span className="text-emerald-600">Penerbit(Pengaju)</span> Dan{" "}
              <span className="text-emerald-600">Pemodal</span> anda dapat{" "}
              <br />
              mengetahui dari informasi dibawah.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-8 mt-[5rem] border-b border-gray-500 pb-[1rem]">
            <button
              className={`px-4 py-2 font-bold ${
                activeTab === "penerbit"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("penerbit")}
            >
              Menjadi Penerbit
            </button>
            <button
              className={`px-4 py-2 font-bold ${
                activeTab === "pemodal"
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab("pemodal")}
            >
              Menjadi Pemodal
            </button>
          </div>
          {activeTab === "penerbit" && (
            <div className="Penerbit px-10 mt-[2rem]">
              <div className="title">
                <p className="mt-[2rem] font-extrabold text-3xl text-center text-color-1">
                  MENJADI PENERBIT
                </p>
                <p className="text-center mt-2 font-semibold text-lg">
                  Dibawah merupakan tatacara ketika anda ingin menjadi penerbit
                </p>
              </div>
              <div className="langkah flex justify-center mt-[2rem]">
                <div className="wrap w-3/5 relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 -translate-x-1/2"></div>
                  {panduan.map((item, index) => (
                    <div
                      className="flex items-start justify-between mt-[4rem] relative"
                      key={index}
                    >
                      <div className="absolute left-1/2 mt-[1.2rem] -translate-x-1/2 -top-4 w-4 h-4 bg-emerald-600 border-2 border-emerald-600 rounded-full flex items-center justify-center"></div>
                      {index % 2 === 0 ? (
                        <>
                          <img src={item.image} alt="" className="w-[8rem]" />
                          <div className="w-[22rem]">
                            <p className="no font-semibold text-emerald-600 text-xl">
                              {item.step}
                            </p>
                            <p className="title font-bold text-color-1 text-2xl">
                              {item.title}
                            </p>
                            <p className="desc font-semibold text-gray-600 mt-3">
                              {item.desc}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-[22rem]">
                            <p className="no font-semibold text-emerald-600 text-xl">
                              {item.step}
                            </p>
                            <p className="title font-bold text-color-1 text-2xl">
                              {item.title}
                            </p>
                            <p className="desc font-semibold text-gray-600 mt-3">
                              {item.desc}
                            </p>
                          </div>
                          <img src={item.image} alt="" className="w-[8rem]" />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "pemodal" && (
            <div className="Pemodal px-10 mt-[2rem]">
              <div className="title">
                <p className="mt-[2rem] font-extrabold text-3xl text-center text-color-1">
                  MENJADI PEMODAL
                </p>
                <p className="text-center mt-2 font-semibold text-lg">
                  Dibawah merupakan tatacara ketika anda ingin menjadi Pemodal
                </p>
              </div>
              <div className="langkah flex justify-center mt-[2rem]">
                <div className="wrap w-3/5 relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 -translate-x-1/2"></div>
                  {panduan2.map((item, index) => (
                    <div
                      className="flex items-start justify-between mt-[4rem] relative"
                      key={index}
                    >
                      <div className="absolute left-1/2 mt-[1.2rem] -translate-x-1/2 -top-4 w-4 h-4 bg-emerald-600 border-2 border-emerald-600 rounded-full flex items-center justify-center"></div>
                      {index % 2 === 0 ? (
                        <>
                          <img src={item.image} alt="" className="w-[8rem]" />
                          <div className="w-[22rem]">
                            <p className="no font-semibold text-emerald-600 text-xl">
                              {item.step}
                            </p>
                            <p className="title font-bold text-color-1 text-2xl">
                              {item.title}
                            </p>
                            <p className="desc font-semibold text-gray-600 mt-3">
                              {item.desc}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-[22rem]">
                            <p className="no font-semibold text-emerald-600 text-xl">
                              {item.step}
                            </p>
                            <p className="title font-bold text-color-1 text-2xl">
                              {item.title}
                            </p>
                            <p className="desc font-semibold text-gray-600 mt-3">
                              {item.desc}
                            </p>
                          </div>
                          <img src={item.image} alt="" className="w-[8rem]" />
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PanduanUser;
