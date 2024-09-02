import { Link } from "react-router-dom";
import PieChartComponent from "../components/PieChartImba";
import Sidebar from "../layout/Sidebar";

const ImbaHasil = () => {
  const data = [
    {
      id: 1,
      namaBisnis: "PT INVSMA",
      imbaHasil: "Rp. 2200",
      tipe: "Obligasi",
      tanggalPengembalian: "25 April 2025",
      status: "Success",
    },
    {
      id: 2,
      namaBisnis: "PT GROWTECH",
      imbaHasil: "Rp. 3500",
      tipe: "Saham",
      tanggalPengembalian: "12 Mei 2025",
      status: "Success",
    },
    {
      id: 3,
      namaBisnis: "CV TEKNO",
      imbaHasil: "Rp. 1800",
      tipe: "Reksa Dana",
      tanggalPengembalian: "8 Juni 2025",
      status: "Pending",
    },
    {
      id: 4,
      namaBisnis: "PT FINCORP",
      imbaHasil: "Rp. 2750",
      tipe: "Deposito",
      tanggalPengembalian: "30 Juli 2025",
      status: "Success",
    },
  ];
  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex justify-center w-full border-l pt-[6rem]">
        <div className="px-12 w-full">
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Imba Hasil
            </h1>
          </div>
          <div className="filter mt-[1rem]">
            <div className="title">
              <h1 className="font-bold text-sm text-color-1">Imba Hasil</h1>
              <p className="font-normal text-xs ">
                Anda Dapat melihat secara detail mengenai pembagian Hasil Anda
                dalam investasi
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="shadow-xl px-3 py-3 w-[25rem] h-fit">
              <PieChartComponent />
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
                    Imba Hasil
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tipe
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Pengembalian
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item.id}
                    </th>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.namaBisnis}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.imbaHasil}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.tipe}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.tanggalPengembalian}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.status}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      <Link to={"/detail-imba-hasil"}>
                        <button className="px-3 py-1 bg-color-2 text-white rounded-md">
                          Detail
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex mt-[2rem] pb-[4rem] justify-center items-center">
            <button className="flex items-center justify-center px-3 h-8  text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
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

export default ImbaHasil;
