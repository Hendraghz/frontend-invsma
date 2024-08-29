import Sidebar from "../layout/Sidebar";

const PasarSekunder = () => {
  const data = [
    {
      no: 1,
      namaBisnis: "PT INVSMA",
      hargaAcuan: "Rp. 2200",
      hargaSaham: "Rp. 2400",
      jumlahInvestor: "1.500",
      sahamTersedia: "2.000.000",
    },
    {
      no: 2,
      namaBisnis: "PT ABCD",
      hargaAcuan: "Rp. 5000",
      hargaSaham: "Rp. 5200",
      jumlahInvestor: "2.300",
      sahamTersedia: "1.500.000",
    },
    {
      no: 3,
      namaBisnis: "PT XYZ",
      hargaAcuan: "Rp. 7500",
      hargaSaham: "Rp. 7400",
      jumlahInvestor: "1.800",
      sahamTersedia: "3.000.000",
    },
    {
      no: 4,
      namaBisnis: "PT EFGH",
      hargaAcuan: "Rp. 15000",
      hargaSaham: "Rp. 14700",
      jumlahInvestor: "2.000",
      sahamTersedia: "1.000.000",
    },
    {
      no: 5,
      namaBisnis: "PT JKLM",
      hargaAcuan: "Rp. 8000",
      hargaSaham: "Rp. 8200",
      jumlahInvestor: "1.200",
      sahamTersedia: "2.500.000",
    },
  ];

  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex justify-center w-full border-l pt-[6rem]">
        <div className="px-12 w-full">
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Pasar Sekunder
            </h1>
          </div>
          <div className="filter mt-[1rem]">
            <div className="title">
              <h1 className="font-bold text-sm text-color-1">Pasar Sekunder</h1>
              <p className="font-normal text-xs ">
                Penjelasan mengenai pasar sekunder
              </p>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama Bisnis
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga Acuan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga Saham Saat Ini
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jumlah Investor
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Saham Tersedia
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr className="bg-white border-b" key={index}>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.no}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.namaBisnis}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.hargaAcuan}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.hargaSaham}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.jumlahInvestor}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.sahamTersedia}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex mt-[2rem] pb-[4rem] justify-center items-center">
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
              <svg
                className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
              Previous
            </button>
            <p className="mx-8">Showing to Entries</p>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
              Next
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasarSekunder;
