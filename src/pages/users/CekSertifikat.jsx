import NavbarUser from "../layout/NavbarUser";
import Footer from "../layout/Footer";
import Logo from "../../assets/images/Logo.png";
const Ceksertifikat = () => {
  return (
    <div>
      <NavbarUser />
      <div className="pt-[6rem] px-10  pb-[3rem] border-l flex items-center justify-center w-full">
        <div className="wrap flex flex-col items-center w-screen">
          <img src={Logo} alt="" width={80} />
          <div className="title text-center">
            <p className="font-bold text-color-1">
              Cek Sertifikat Anda di INVSMA
            </p>
            <p className="font-normal text-color-1">
              Silahkan masukkan nomor sertifikat secara benar untuk mencari
              sertifikat
            </p>
          </div>
          <div className="search flex justify-start w-full px-[5rem] mt-6">
            <div className="flex items-center w-[25rem]">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                placeholder="Masukkan Nomor Sertifikat..."
                required
                name="search"
              />
              <button className="px-3 py-2 bg-color-1 text-white rounded-md ml-[1rem] hover:bg-green-800">Cari</button>
            </div>
          </div>
          <div className="sertifikat w-full px-[5rem] mt-[2rem]">
            <p className="pb-3 border-b border-color-1">Data Sertifikat Anda</p>
            <div className="flex items-center gap-3 mt-[1rem]">
              <div className="w-[15rem] h-[15rem] shadow-md">
                <div className="w-[15rem] h-[8rem] bg-gray-300 rounded-md"></div>
                <div className="flex justify-between px-2">
                  <p className="font-normal text-sm mt-2 text-gray-500">
                    No Sertifikat Anda
                  </p>
                  <p className="font-bold text-sm mt-2">3123123812937</p>
                </div>
                <p className="text-center font-bold mt-4">Sertifikat Atas</p>
              </div>
              <div className="w-[15rem] h-[15rem] shadow-md">
                <div className="w-[15rem] h-[8rem] bg-gray-300 rounded-md"></div>
                <div className="flex justify-between px-2">
                  <p className="font-normal text-sm mt-2 text-gray-500">
                    No Sertifikat Anda
                  </p>
                  <p className="font-bold text-sm mt-2">3123123812937</p>
                </div>
                <p className="text-center font-bold mt-4">Sertifikat Atas</p>
              </div>
              <div className="w-[15rem] h-[15rem] shadow-md">
                <div className="w-[15rem] h-[8rem] bg-gray-300 rounded-md"></div>
                <div className="flex justify-between px-2">
                  <p className="font-normal text-sm mt-2 text-gray-500">
                    No Sertifikat Anda
                  </p>
                  <p className="font-bold text-sm mt-2">3123123812937</p>
                </div>
                <p className="text-center font-bold mt-4">Sertifikat Atas</p>
              </div>
              <div className="w-[15rem] h-[15rem] shadow-md">
                <div className="w-[15rem] h-[8rem] bg-gray-300 rounded-md"></div>
                <div className="flex justify-between px-2">
                  <p className="font-normal text-sm mt-2 text-gray-500">
                    No Sertifikat Anda
                  </p>
                  <p className="font-bold text-sm mt-2">3123123812937</p>
                </div>
                <p className="text-center font-bold mt-4">Sertifikat Atas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ceksertifikat;
