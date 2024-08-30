import Sidebar from "../layout/Sidebar";
import Pie from "../components/Pie";

const Portofolio = () => {
    return (
        <div className="flex w-screen">
            <Sidebar />
            <div className="flex justify-center w-full border-l pt-[6rem]">
                <div className="px-12 w-full">
                    <div className="titlepage">
                        <h1 className="font-bold text-xl text-color-1">
                            Halaman Portofolio
                        </h1>
                    </div>
                    <div className="filter mt-[1rem]">
                        <div className="title">
                            <h1 className="font-bold text-sm text-color-1">
                                Portofolio
                            </h1>
                            <p className="font-normal text-xs ">
                                Anda Dapat melihat mengenai berbagai portofolio anda disini
                            </p>
                        </div>
                    </div>

                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -m-4">
                                <div className="lg:w-full md:w-full">
                                    {/* Pie */}
                                    <Pie />
                                </div>
                                <div className="lg:w-full md:w-full">
                                    {/* Tabel */}
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-3 py-3">
                                                        No
                                                    </th>
                                                    <th scope="col" className="px-3 py-3">
                                                        Nama Portofolio
                                                    </th>
                                                    <th scope="col" className="px-3 py-3">
                                                        Tipe Investasi
                                                    </th>
                                                    <th scope="col" className="px-3 py-3">
                                                        Jumlah Investasi (Rp)
                                                    </th>
                                                    <th scope="col" className="px-3 py-3">
                                                        Tanggal Investasi
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        1
                                                    </th>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        PT Alpha Investama
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Saham
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Rp. 150,000,000
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        20 Juli 2023
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        2
                                                    </th>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        PT Beta Finansial
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Obligasi
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Rp. 100,000,000
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        15 Agustus 2023
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        3
                                                    </th>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        PT Gamma Investasi
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Sukuk
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Rp. 200,000,000
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        10 September 2023
                                                    </td>
                                                </tr>
                                                <tr className="bg-white border-b">
                                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        4
                                                    </th>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        PT Delta Kapital
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Saham
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Rp. 300,000,000
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        5 Oktober 2023
                                                    </td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <th scope="row" className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        5
                                                    </th>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        PT Epsilon Aset
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Obligasi
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        Rp. 250,000,000
                                                    </td>
                                                    <td className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        1 November 2023
                                                    </td>
                                                </tr>
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
                    </section>

                </div>
            </div>
        </div>
    );
};

export default Portofolio;
