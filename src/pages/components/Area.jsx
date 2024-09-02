import Chart from "react-apexcharts";

const AreaChart = () => {
    // Data untuk masing-masing jenis investasi
    const dataObligasi = [5000000, 10000000, 15000000, 12000000, 18000000, 25000000, 30000000];
    const dataSaham = [8000000, 12000000, 14000000, 10000000, 16000000, 20000000, 28000000];
    const dataSukuk = [3000000, 5000000, 7000000, 6000000, 10000000, 15000000, 20000000];

    const chartOptions = {
        chart: {
            type: "area",
            toolbar: {
                show: false, // Hide toolbar icons
            },
        },
        series: [
            {
                name: "Obligasi",
                data: dataObligasi,
            },
            {
                name: "Saham",
                data: dataSaham,
            },
            {
                name: "Sukuk",
                data: dataSukuk,
            },
        ],
        xaxis: {
            categories: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"], // Contoh kategori untuk setiap hari dalam seminggu
        },
        yaxis: {
            min: 0,
            max: 200000000, // Menentukan skala maksimum 200 juta
            tickAmount: 10, // Jumlah garis grid pada sumbu Y
            labels: {
                formatter: (value) => {
                    // Format angka menjadi Rupiah
                    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
                }
            }
        },
        title: {
            text: "Distribusi Investasi",
            align: "center",
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (value) => {
                    // Format angka menjadi Rupiah
                    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
                }
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth', // Membuat garis halus
        },
        colors: ["#4CAF50", "#5163d6", "#FFA500"], // Warna area chart untuk Obligasi, Saham, Sukuk
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.2,
                stops: [0, 90, 100]
            }
        }
    };

    return (
        <div>
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="area"
                height={400}
            />
            <div className="flex justify-center mt-4">
                <div className="flex items-center gap-4">
                    <div>
                        <p className="font-bold text-green-500 text-md">Obligasi</p>
                        <p className="text-md">Rp. {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(dataObligasi[dataObligasi.length - 1])}</p>
                    </div>
                    <p>|</p>
                    <div>
                        <p className="font-bold text-blue-500">Saham</p>
                        <p>Rp. {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(dataSaham[dataSaham.length - 1])}</p>
                    </div>
                    <p>|</p>
                    <div>
                        <p className="font-bold text-orange-500">Sukuk</p>
                        <p>Rp. {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(dataSukuk[dataSukuk.length - 1])}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaChart;
