import Chart from "react-apexcharts";

const ChartComponent = () => {
    const dataInvestasi = [35, 45, 20]; 

    const chartOptions = {
        chart: {
            type: "pie",
            toolbar: {
                show: false,
            },
        },
        series: dataInvestasi,
        labels: ["Obligasi", "Saham", "Sukuk"],
        colors: ["#09412c", "#c4f363", "#ffa500"],
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
