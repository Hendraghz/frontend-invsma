import { useState, useEffect } from "react";
import NavbarUser from "../../layout/NavbarUser";
import { Link } from "react-router-dom";
import { getProjectUser } from "../../../api/project/apiproject";
import { jwtDecode } from "jwt-decode";

const AjukanPendanaan = () => {
  const [ajuan, setAjuan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ajuanPerPage = 5;
  const token = localStorage.getItem("authTokens");
  const decoded = jwtDecode(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectUser(decoded.userId);
        setAjuan(Array.isArray(data) ? data : []); // Ensure ajuan is an array
      } catch (error) {
        console.error("Error fetching project data:", error);
        setAjuan([]); // Fallback to an empty array in case of error
      }
    };
    fetchData();
  }, []);

  const numberFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  // Calculate the transactions to display on the current page
  const indexOfLastajuan = currentPage * ajuanPerPage;
  const indexOfFirstajuan = indexOfLastajuan - ajuanPerPage;
  const currentajuan = ajuan.slice(indexOfFirstajuan, indexOfLastajuan);

  const handleNext = () => {
    if (currentPage < Math.ceil(ajuan.length / ajuanPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <NavbarUser />
      <div className="pt-[6rem] border-l px-12 w-screen flex justify-center">
        <div>
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Pengajuan Pendanaan
            </h1>
          </div>
          <div className="filter mt-[1rem]">
            <div className="flex w-full justify-between">
              <div className="title">
                <h1 className="font-bold text-sm text-color-1">
                  Filter Data Pengajuan anda
                </h1>
                <p className="font-normal text-xs ">
                  Anda dapat memfilter history Pengajuan anda anda berdasarkan
                  data filter di bawah.
                </p>
              </div>
              <Link to={"/create-pendanaan"}>
                <button className="px-3 py-1 bg-color-1 text-white rounded-md">
                  Buat Pengajuan Anda
                </button>
              </Link>
            </div>
            <div className="form filter mt-[1.5rem] flex items-center gap-3 w-full">
              <div className="mb-3 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Jenis Investasi
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Pilih Jenis Investasi</option>
                  <option value="US">Obligasi</option>
                  <option value="CA">Saham</option>
                </select>
              </div>
              <div className="mb-3 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Status
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Pilih Status</option>
                  <option value="US">Listing</option>
                  <option value="CA">Selesai</option>
                  <option value="CA">Dimulai</option>
                </select>
              </div>
              <div className="mb-3 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Nama Bisnis
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Nama Bisnis"
                />
              </div>
              <div className="mb-3 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Tanggal
                </label>
                <input
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
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
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama PT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lokasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tercapai
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Target
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Waktu Tersisa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tipe
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Dibuat Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentajuan.map((ajuan, index) => {
                  let status;

                  // Menetapkan status untuk tiga item pertama berdasarkan indeks
                  if (index === 0) {
                    status = "Pending";
                  } else if (index === 1) {
                    status = "Terverifikasi";
                  } else if (index === 2) {
                    status = "Ditolak";
                  } else {
                    // Contoh logika default untuk item lainnya (bisa diubah sesuai kebutuhan)
                    if (
                      ajuan.waktu_tersisa > 0 &&
                      ajuan.tercapai < ajuan.target
                    ) {
                      status = "Pending";
                    } else if (ajuan.tercapai >= ajuan.target) {
                      status = "Terverifikasi";
                    } else if (
                      ajuan.waktu_tersisa <= 0 &&
                      ajuan.tercapai < ajuan.target
                    ) {
                      status = "Ditolak";
                    } else {
                      status = "Unknown"; // Status default jika tidak memenuhi kondisi manapun
                    }
                  }

                  return (
                    <tr className="bg-white border-b" key={index}>
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
                        {ajuan.nama}
                      </th>
                      <td className="px-6 py-4">{ajuan.oleh}</td>
                      <td className="px-6 py-4">{ajuan.lokasi}</td>
                      <td className="px-6 py-4">
                        {numberFormat(ajuan.tercapai)}
                      </td>
                      <td className="px-6 py-4">
                        {numberFormat(ajuan.target)}
                      </td>
                      <td className="px-6 py-4">{ajuan.waktu_tersisa}</td>
                      <td className="px-6 py-4">{ajuan.tipe}</td>
                      <td className="px-6 py-4">{ajuan.createdAt}</td>
                      <td className="px-6 py-4">
                        {status === "Pending" && (
                          <p className="px-3 py-2 bg-yellow-300 rounded-md text-color-1">
                            {status}
                          </p>
                        )}
                        {status === "Terverifikasi" && (
                          <p className="px-3 py-2 bg-green-500 rounded-md text-white">
                            {status}
                          </p>
                        )}
                        {status === "Ditolak" && (
                          <p className="px-3 py-2 bg-red-500 rounded-md text-color-1">
                            {status}
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right flex items-center">
                        <Link to={`/edit-pendanaan/${ajuan.id}`}>
                          <button className="font-medium text-white hover:underline px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-100">
                            Edit
                          </button>
                        </Link>
                        <button className="font-medium text-white hover:underline px-3 py-1 bg-red-600 rounded-md hover:bg-red-100 ml-2">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  );
                })}
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
              {Math.min(indexOfLastajuan, ajuan.length)} of {ajuan.length}{" "}
              Entries
            </p>
            <button
              onClick={handleNext}
              disabled={currentPage === Math.ceil(ajuan.length / ajuanPerPage)}
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

export default AjukanPendanaan;
