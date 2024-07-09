import Chart from "react-apexcharts";
const ApexChart = ({
  data = [],
  type = "area",
  strokeWidth = 3,
  height = 82,
  fillColors = ["#5DE8BE"],
}) => (
  <Chart
    options={{
      chart: {
        id: "locked-value",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        height: "auto",
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        width: strokeWidth,
        curve: "straight",
        colors: ["#5EE5D5"],
      },
      fill: {
        colors: fillColors,
        gradient: {
          opacityFrom: 0.45,
          opacityTo: 0,
        },
      },
    }}
    series={[
      {
        name: "series-1",
        data,
      },
    ]}
    type={type}
    height={height}
  />
);

export default ApexChart;
