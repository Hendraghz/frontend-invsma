import Sidebar from "../layout/Sidebar";
import ApexCharts from "react-apexcharts";

const DetailDividen = () => {

    const chartOptions = {
        chart: {
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ['2023-04-25', '2024-04-25', '2025-04-25'],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy'
            },
        },
        fill: {
            colors: ['#2563eb'],
            type: 'gradient',
            gradient: {
                shade: 'light',
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
            }
        }
    };

    const chartSeries = [
        {
            name: 'Dividen',
            data: [15000000, 16000000, 17000000]
        }
    ];

    return (
        <div className="flex w-screen">
            <Sidebar />
            <div className="flex justify-center w-full border-l pt-[6rem]">
                <div className="px-12 w-full">
                    <div className="titlepage">
                        <h1 className="font-bold text-xl text-color-1">
                            Halaman Detail Dividen
                        </h1>
                    </div>
                    <div className="filter mt-[1rem] ">
                        <div className="title flex justify-between">
                            <div className="title">
                                <h1 className="font-bold text-sm text-color-1">
                                    Detail Dividen
                                </h1>
                                <p className="font-normal text-xs ">
                                    Anda Dapat melihat detail dividen disini
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto p-6">
                        {/* Informasi Utama Investasi */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Detail Investasi</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold">Nama Investasi</h3>
                                    <p className="text-gray-700">PT Alpha Investama</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Tipe Investasi</h3>
                                    <p className="text-gray-700">Saham</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Jumlah Investasi</h3>
                                    <p className="text-gray-700">Rp. 450,000,000</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Tanggal Investasi</h3>
                                    <p className="text-gray-700">20 Juli 2023</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Status Investasi</h3>
                                    <p className="text-gray-700">Aktif</p>
                                </div>
                            </div>
                        </div>

                        {/* Detail Dividen */}
                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                            <h2 className="text-2xl font-bold mb-4">Detail Dividen</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold">Jumlah Dividen</h3>
                                    <p className="text-gray-700">Rp. 15,000</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Tanggal Pembayaran</h3>
                                    <p className="text-gray-700">25 April 2025</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Frekuensi Pembayaran</h3>
                                    <p className="text-gray-700">Tahunan</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">Status Pembayaran</h3>
                                    <p className="text-gray-700">Success</p>
                                </div>
                            </div>
                        </div>

                        {/* Grafik Pembayaran Dividen */}
                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">

                            {/* Grafik Pembayaran Dividen */}
                            <h2 className="text-2xl font-bold mb-4">Grafik Pembayaran Dividen</h2>
                            <ApexCharts
                                options={chartOptions}
                                series={chartSeries}
                                type="area"
                                height={350}
                            />
                        </div>

                        {/* Tombol Aksi */}
                        <div className="flex justify-end space-x-4 mt-6">
                            <button className="px-4 py-2 bg-color-1 text-white rounded-md">
                                Download Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DetailDividen;
