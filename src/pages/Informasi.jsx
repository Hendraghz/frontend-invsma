import Navbar from "./layout/Navbar";
import dash1 from "../assets/images/Asset2.webp";
import Footer from "./layout/Footer";
const Informasi = () => {
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
            INFORMASI <span className="text-white font-bold">INVSMA</span>
          </p>
          <p className="font-bold text-xl text-white mt-[1rem] px-5">
            Membangun Jembatan untuk Pertumbuhan yang Berkelanjutan dan Inklusif
          </p>
        </div>
      </div>
      {/* Informasi */}
      <div className="flex items-center px-10 mt-[1rem]">
        <div>
          <div className="text-left text">
            <p className="text-color-1 font-bold text-3xl">Informasi Umum</p>
            <p className="text-black font-light text-lg">
              Berisi Informasi secara umum bagaiamana untuk ikut serta
              membangung <br />
              ekonomi bangsa melalu investasi bersama INVSMA.
            </p>
          </div>
          {/* Pengajuan */}
          <div className="text-center w-screen mt-[3rem]">
            <p className="font-bold text-3xl text-color-1">
              Menjadi Pengaju Project
            </p>
            <p className="font-bold text-light text-black">
              Berisi panduan singkat untuk menjadi Pengaju Project
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-[2rem]">
            <div className="w-[20rem] rounded-md border border-color-1 px-5 py-5 shadow-md">
              <div>
                <p className="font-bold text-color-1 text-[1.3rem]">
                  01. Registrasi akun
                </p>
              </div>
              <div className="mt-[4rem]">
                <p>
                  Sebelum anda dapat melakukan pengajuan pendanaan terhadap
                  suatu project anda di harapkan untuk membuat akun terlebih
                  dahulu
                </p>
              </div>
            </div>
            <div className="w-[20rem] rounded-md border border-color-1 px-5 py-5 shadow-md">
              <div>
                <p className="font-bold text-color-1 text-[1.3rem]">
                  02. Mengisi Profile secara Lengkap
                </p>
              </div>
              <div className="mt-[2rem]">
                <p>
                  Setelah anda melakukan registrasi anda di haruskan untuk
                  mengisi profile anda secara lengkap secara benar dan lengkap
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-[1rem]">
            <div className="w-[20rem] rounded-md border border-color-1 px-5 py-5 shadow-md">
              <div>
                <p className="font-bold text-color-1 text-[1.3rem]">
                  03. Menuggu Verifikasi dari Pihak INVSMA
                </p>
              </div>
              <div className="mt-[2rem]">
                <p>
                  Setelah anda selesai mengisi semua data maka selanjutnya
                  adalah menunggu verifikasi dari kami.
                </p>
              </div>
            </div>
            <div className="w-[20rem] rounded-md border border-color-1 px-5 py-5 shadow-md">
              <div>
                <p className="font-bold text-color-1 text-[1.3rem]">
                  04. Pengajuan Project
                </p>
              </div>
              <div className="mt-[4rem]">
                <p>
                  Anda dapat melakukan pengajuan project secara mudah dengan
                  mengisi semua formulir yang disediakan
                </p>
              </div>
            </div>
          </div>
          <div className="text-center w-screen mt-[3rem]">
            <p className="font-bold text-3xl text-color-1">Menjadi Pemodal</p>
            <p className="font-bold text-light text-black">
              Berisi panduan singkat untuk menjadi Pemodal
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-[2rem]">
            <div className="w-[20rem] rounded-md border border-color-1 px-5 py-5 shadow-md">
              <div>
                <p className="font-bold text-color-1 text-[1.3rem]">
                  01. Registrasi akun
                </p>
              </div>
              <div className="mt-[4rem]">
                <p>
                  Sebelum anda dapat melakukan pengajuan pendanaan terhadap
                  suatu project anda di harapkan untuk membuat akun terlebih
                  dahulu
                </p>
              </div>
            </div>
            <div className="w-[20rem] rounded-md border border-color-1 px-5 py-5 shadow-md">
              <div>
                <p className="font-bold text-color-1 text-[1.3rem]">
                  02. Mengisi Profile secara Lengkap
                </p>
              </div>
              <div className="mt-[2rem]">
                <p>
                  Setelah anda melakukan registrasi anda di haruskan untuk
                  mengisi profile anda secara lengkap secara benar dan lengkap
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-[1rem]">
            <div className="w-[20rem] rounded-md border border-color-1 px-5 py-5 shadow-md">
              <div>
                <p className="font-bold text-color-1 text-[1.3rem]">
                  03. Menuggu Verifikasi dari Pihak INVSMA
                </p>
              </div>
              <div className="mt-[2rem]">
                <p>
                  Setelah anda selesai mengisi semua data maka selanjutnya
                  adalah menunggu verifikasi dari kami.
                </p>
              </div>
            </div>
            <div className="w-[20rem] rounded-md border border-color-1 px-5 py-5 shadow-md">
              <div>
                <p className="font-bold text-color-1 text-[1.3rem]">
                  04. Memilih Project dan memberikan Modal
                </p>
              </div>
              <div className="mt-[2rem]">
                <p>
                  Anda dapat langsung mencari project dan melakukan pemodalan
                  kepada bisnis yang membutuhkan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <Footer />
    </div>
  );
};

export default Informasi;
