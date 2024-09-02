import Sidebar from "../layout/Sidebar";


const Kupon = () => {

    const referralCode = "A8J4K2M9Z1";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode)
            .then(() => {
                alert('Kode referal berhasil disalin!');
            })
            .catch(err => {
                alert('Gagal menyalin kode referal. Silakan coba lagi.');
                console.error('Error copying text: ', err);
            });
    };
    return (
        <div className="flex w-screen">
            <Sidebar />
            <div className="flex justify-center w-full border-l pt-[6rem]">
                <div className="px-12 w-full">
                    <div className="titlepage">
                        <h1 className="font-bold text-xl text-color-1">
                            Halaman Kode Rerefal
                        </h1>
                    </div>
                    <div className="filter mt-[1rem] ">
                        <div className="title flex justify-between">
                            <div className="title">
                                <h1 className="font-bold text-sm text-color-1">
                                    Kode Referal
                                </h1>
                                <p className="font-normal text-xs ">
                                    Anda Dapat melihat mengenai kode referal milik anda disini
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-6 sm:py-8 lg:py-12">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div className="mb-10 md:mb-16">
                                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                                    Ajak Teman Anda
                                </h2>

                                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                                    Dapatkan Komisi 15%  dari total inventasi teman anda Lakukan selama 1 tahun  teman anda juga dapat menikmati potongan 2%  dari total investasinya  jika mereka menggunakan code referal anda.
                                </p>
                            </div>

                            <div className="bg-green-900 text-white rounded-lg px-5 py-10 w-full h-auto text-center">
                                <h3 className="text-lg font-semibold mb-2">Bagikan Kode Referal Anda</h3>
                                <p className="text-3xl font-bold mb-4">{referralCode}</p>
                                <p className="text-sm mb-6">Atau Anda Menyalin Kode Dengan Button Dibawah</p>
                                <button
                                    onClick={handleCopy}
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition duration-200"
                                >
                                    Copy Kode
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Kupon;
