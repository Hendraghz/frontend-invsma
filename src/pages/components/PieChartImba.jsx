import Chart from "react-apexcharts";

const PieChartComponent = () => {
  const chartData = {
    series: [45, 35, 20], // Data for Saham, Obligasi, and Sukuk
    labels: ["Saham", "Obligasi", "Sukuk"],
  };

  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: chartData.labels,
    legend: {
      position: "bottom",
    },
    title: {
      text: "Distribusi Investasi",
      align: "center",
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value) {
          return `${value}%`;
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={chartOptions}
        series={chartData.series}
        type="pie"
        height={240}
      />
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-4">
          <div>
            <p className="font-bold text-red-500 text-md">Saham</p>
            <p className="text-md">{chartData.series[0]}%</p>
          </div>
          <p>|</p>
          <div>
            <p className="font-bold text-yellow-500">Obligasi</p>
            <p>{chartData.series[1]}%</p>
          </div>
          <p>|</p>
          <div>
            <p className="font-bold text-green-500">Sukuk</p>
            <p>{chartData.series[2]}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartComponent;
