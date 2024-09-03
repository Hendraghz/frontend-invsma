import Chart from "react-apexcharts";

const ChartComponent = () => {
    const dataInvestasi = [40, 30, 30]; // Dummy data: 40% obligasi, 30% saham, 30% sukuk

    const chartOptions = {
        chart: {
            type: "pie",
            toolbar: {
                show: false, // hide the toolbar icons
            },
        },
        series: dataInvestasi,
        labels: ["Obligasi", "Saham", "Sukuk"],
        colors: ["#09412c", "#c4f363", "#ffa500"], // Third color is orange
        title: {
            text: "Distribusi Investasi",
            align: "center",
            
        },
        tooltip: {
            enabled: true,
        },
        dataLabels: {
            enabled: true,
        },
        legend: {
            position: "right",
            fontSize: "15px"
        },
    };

    return (
        <div>
            <Chart
                options={chartOptions}
                series={chartOptions.series}
                type="pie"
                height={440}
                width={440}
            />
        </div>
    );
};

export default ChartComponent;
