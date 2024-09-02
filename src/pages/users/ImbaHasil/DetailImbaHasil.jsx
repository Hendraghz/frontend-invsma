import Sidebar from "../../layout/Sidebar";

const DetailImbaHasil = () => {
  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex justify-center w-full border-l pt-[6rem]">
        <div className="px-12 w-full">
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Detail Imba Hasil
            </h1>
          </div>
          <div className="wrap w-full flex justify-center mt-[4rem]">
            <div className="detail w-1/2 px-8 py-5 border border-gray-200 rounded-md shadow-sm">
              <div className="header">
                <p className="font-bold text-lg">Detail Transaksi</p>
              </div>
              <div className="mt-[2rem] px-4 py-3 flex justify-between items-center rounded-xl border border-gray-300">
                <div className="flex items-center">
                  <div className="icon px-2 py-2 rounded-full bg-green-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </div>
                  <div className="ml-[1rem]">
                    <p className="text-normal">
                      Investasi ke project{" "}
                      <span className="font-bold">Resort Cofee</span>
                    </p>
                    <p className="font-normal text-gray-400 text-md">
                      Terkirim
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">Rp. 100.000</p>
                  <p className="font-normal text-md text-gray-400 text-right">
                    IDR
                  </p>
                </div>
              </div>
              <div className="tab pt-[2rem] pb-[1rem] border-b border-gray-300">
                <p className="font-bold text-sm">Details</p>
              </div>
              <div className="details pb-[2rem] border-b-2 border-gray-300">
                <div className="title mt-[1rem] mb-[1rem]">
                  <p className="font-bold">Detail Transaksi</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Transaksi Number
                  </p>
                  <p className="text-sm font-bold">1234567890</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Status Transaksi
                  </p>
                  <p className="text-sm font-bold px-5 py-2 bg-green-200 rounded-xl">
                    Success
                  </p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Tanggal Transaksi
                  </p>
                  <p className="text-sm font-bold">29 Jul,2023 2:40 PM</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">Penerima</p>
                  <p className="text-sm font-bold">John Doe</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Jumlah Terkirim
                  </p>
                  <p className="text-sm font-bold">Rp. 100.000</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Transaksi Selesai
                  </p>
                  <p className="text-sm font-bold">29 Jul,2023 3:40 PM</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Biaya Transaksi
                  </p>
                  <p className="text-sm font-bold">Rp. 5000</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Payment Method
                  </p>
                  <p className="text-sm font-bold">Credit Card</p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-[2rem]">
                <button className="bg-blue-400 hover:bg-blue-800 py-2.5 px-5 rounded-md font-bold text-white">
                  Cetak Transaksi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailImbaHasil;
