import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../layout/Sidebar";
import { getDataTransaksi } from "../../api/transaksi/transaksi";
import { jwtDecode } from "jwt-decode";

const getStatusClass = (status) => {
  switch (status) {
    case "sukses":
      return "bg-green-300 text-white";
    case "pending":
      return "bg-blue-500 text-white";
    case "Dimulai":
      return "bg-yellow-500 text-white";
    default:
      return "";
  }
};

const DataTransaksi = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;
  const token = localStorage.getItem("authTokens");
  const decoded = jwtDecode(token);
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getDataTransaksi(decoded.userId);
        setTransactions(response);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  // Calculate the transactions to display on the current page
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const handleNext = () => {
    if (currentPage < Math.ceil(transactions.length / transactionsPerPage)) {
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
      <Sidebar />
      <div className="flex justify-center w-full border-l pt-[6rem]">
        <div className="px-12 w-full">
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Transaksi
            </h1>
          </div>
          <div className="filter mt-[1rem]">
            <div className="title">
              <h1 className="font-bold text-sm text-color-1">
                Filter Data Transaksi
              </h1>
              <p className="font-normal text-xs ">
                Anda dapat memfilter history transaksi anda berdasarkan data
                filter di bawah.
              </p>
            </div>
            <div className="form filter mt-[1.5rem] flex items-center gap-3 w-full">
              <div className="mb-3 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Jenis Investasi
                </label>
                <select
                  id="jenis-investasi"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Pilih Jenis Investasi</option>
                  <option value="Obligasi">Obligasi</option>
                  <option value="Saham">Saham</option>
                </select>
              </div>
              <div className="mb-3 w-full">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Status
                </label>
                <select
                  id="status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Pilih Status</option>
                  <option value="Listing">Listing</option>
                  <option value="Selesai">Selesai</option>
                  <option value="Dimulai">Dimulai</option>
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
                    Jumlah
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lokasi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jenis
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
                {currentTransactions.map((transaction, index) => (
                  <tr className="bg-white border-b" key={transaction.id}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {indexOfFirstTransaction + index + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {transaction.project.nama}
                    </th>
                    <td className="px-6 py-4">
                      Rp. {transaction.nominal.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">{transaction.project.lokasi}</td>
                    <td className="px-6 py-4">
                      {new Date(transaction.tanggal).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">{transaction.project.tipe}</td>
                    <td className="px-6 py-4">
                      <p
                        className={`px-4 py-2 text-center rounded-md ${getStatusClass(
                          transaction.status
                        )}`}
                      >
                        {transaction.status}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        className="font-medium hover:bg-color-1 hover:text-color-2 px-2 py-2 bg-color-2 text-color-1 rounded-md"
                      >
                        Detail
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
              Showing {indexOfFirstTransaction + 1} to{" "}
              {Math.min(indexOfLastTransaction, transactions.length)} of{" "}
              {transactions.length} Entries
            </p>
            <button
              onClick={handleNext}
              disabled={
                currentPage ===
                Math.ceil(transactions.length / transactionsPerPage)
              }
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

export default DataTransaksi;
