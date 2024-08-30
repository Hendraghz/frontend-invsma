import Sidebar from "../layout/Sidebar";

const DetailKupon = () => {
    const dataKupon = {
        namaReferal: 'PT Invesma',
        kodeKupon: 'INV123',
        potongan: 'Rp 2.200',
        totalPengajuan: 'Obligasi',
        hasilPembagian: '01/09/2023',
    };

    return (
        <div className="flex w-screen">
            <Sidebar />
            <div className="flex justify-center w-full border-l pt-[6rem]">
                <div className="px-12 w-full">
                    <div className="titlepage">
                        <h1 className="font-bold text-xl text-color-1">
                            Halaman Detail Kupon
                        </h1>
                    </div>
                    <div className="filter mt-[1rem] ">
                        <div className="title flex justify-between">
                            <div className="title">
                                <h1 className="font-bold text-sm text-color-1">
                                    Detail Kupon
                                </h1>
                                <p className="font-normal text-xs ">
                                    Anda Dapat melihat detail kupon disini
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-6 sm:py-8 lg:py-14">
                        <div className="max-w-screen-lg px-4 md:px-8">
                            <div className="grid gap-8 md:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="relative overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src="https://images.unsplash.com/photo-1706759755964-b0aa57a58c5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdXBvbnxlbnwwfHwwfHx8MA%3D%3D"
                                            loading="lazy"
                                            alt="Investment Image"
                                            className="h-[480px] w-full object-cover object-center shadow-lg"
                                        />
                                        <span className="absolute left-0 top-0 rounded-br-lg bg-green-700 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                                            Coupon
                                        </span>
                                    </div>
                                </div>

                                <div className="md:py-8">
                                    <div className="mb-2 md:mb-3">
                                        <span className="mb-0.5 inline-block text-gray-500">{dataKupon.namaReferal}</span>
                                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Detail Kupon Investasi</h2>
                                    </div>

                                    <div className="mt-10 md:mt-16 lg:mt-20">
                                        <div className="mb-3 text-lg font-semibold text-gray-800">Informasi Kupon</div>

                                        <table className="min-w-full bg-white border border-gray-200">
                                            <tbody>
                                                <tr>
                                                    <td className="px-4 py-2 text-sm font-semibold text-gray-600 border-b">Nama Referal</td>
                                                    <td className="px-4 py-2 text-sm text-gray-700 border-b">{dataKupon.namaReferal}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 text-sm font-semibold text-gray-600 border-b">Kode Kupon</td>
                                                    <td className="px-4 py-2 text-sm text-gray-700 border-b">{dataKupon.kodeKupon}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 text-sm font-semibold text-gray-600 border-b">Potongan</td>
                                                    <td className="px-4 py-2 text-sm text-gray-700 border-b">{dataKupon.potongan}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 text-sm font-semibold text-gray-600 border-b">Total Pengajuan</td>
                                                    <td className="px-4 py-2 text-sm text-gray-700 border-b">{dataKupon.totalPengajuan}</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 text-sm font-semibold text-gray-600 border-b">Hasil Pembagian</td>
                                                    <td className="px-4 py-2 text-sm text-gray-700 border-b">{dataKupon.hasilPembagian}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="flex gap-2.5 mt-8">
                                        <a
                                            href="#"
                                            className="inline-block flex-1 rounded-lg bg-color-1 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 sm:flex-none md:text-base"
                                        >
                                            Invest Now
                                        </a>

                                        <a
                                            href="#"
                                            className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailKupon;
