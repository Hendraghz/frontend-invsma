import Chart from "react-apexcharts";

const ChartComponent = () => {
  const dataThisMonth = [
    10000000, 15000000, 12000000, 18000000, 25000000, 30000000, 40000000,
  ];
  const dataLastMonth = [
    8000000, 14000000, 10000000, 16000000, 20000000, 28000000, 35000000,
  ];

  const chartOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false, // hide the toolbar icons
      },
    },
    series: [
      {
        name: "Bulan Ini",
        data: dataThisMonth,
        color: "green",
      },
      {
        name: "Bulan Lalu",
        data: dataLastMonth,
        color: "#5163d6",
      },
    ],
    xaxis: {
      labels: {
        show: false,
      },
    },
    title: {
      text: "Investasi Bulan Ini dan Bulan Lalu",
      align: "center",
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="area"
        height={240}
      />
      <div
        className="flex justify-center"
      >
        <div className="flex items-center gap-4">
          <div>
            <p className="font-bold text-green-500 text-md">Bulan Ini</p>
            <p className="text-md">Rp. {dataThisMonth[dataThisMonth.length - 1]}</p>
          </div>
          <p>|</p>
          <div>
            <p className="font-bold text-blue-500">Bulan Lalu</p>
            <p>Rp. {dataLastMonth[dataLastMonth.length - 1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
