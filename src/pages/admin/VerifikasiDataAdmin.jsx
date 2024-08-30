import { useState, useEffect } from "react";
import SidebarAdmin from "../layout/SidebarAdmin";
import { getVerifikasiDetails, verifikasiData } from "../../api/admin/adminapi";
import Swal from "sweetalert2";

const VerifikasiDataAdmin = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerpage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datadetails = await getVerifikasiDetails();
        setData(datadetails);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchData();
  }, []);

  const handleVerifikasi = async (id_user) => {
    try {
      const response = await verifikasiData(id_user);
      if (response.status === "success") {
        Swal.fire({
          title: "Success",
          text: response.message,
          icon: "success",
        });
      } else {
        throw new Error(response.msg);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to verify data",
        icon: "error",
      });
      console.error("Error verifying data:", error);
    }
  };

  // Calculate the transactions to display on the current page
  const indexOfLastajuan = currentPage * dataPerpage;
  const indexOfFirstajuan = indexOfLastajuan - dataPerpage;
  const currentData = data.slice(indexOfFirstajuan, indexOfLastajuan);

  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / dataPerpage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="flex w-screen">
      <SidebarAdmin />
      <div className="flex justify-center w-full border-l pt-[6rem]">
        <div className="px-12">
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Verifikasi Data Admin
            </h1>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jabatan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email Pengurus
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis Kelamin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama Perusahaan
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((transaction, index) => (
                  <tr className="bg-white border-b" key={transaction.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {indexOfFirstajuan + index + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {transaction.nama_lengkap_pengurus}
                    </th>
                    <td className="px-6 py-4">{transaction.jabatan}</td>
                    <td className="px-6 py-4">{transaction.email_pengurus}</td>
                    <td className="px-6 py-4">{transaction.jenis_kelamin}</td>
                    <td className="px-6 py-4">{transaction.nama_perusahaan}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleVerifikasi(transaction.id_user)}
                        className="font-medium text-white bg-blue-600 px-3 py-1 hover:bg-blue-300 rounded-md text-sm"
                      >
                        Verifikasi Data
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex mt-[2rem] pb-[4rem] justify-center items-center">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8  text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
            >
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
            <p className="mx-8">
              Showing {indexOfFirstajuan + 1} to{" "}
              {Math.min(indexOfLastajuan, data.length)} of {data.length} Entries
            </p>
            <button
              onClick={handleNext}
              disabled={currentPage === Math.ceil(data.length / dataPerpage)}
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 "
            >
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

export default VerifikasiDataAdmin;
