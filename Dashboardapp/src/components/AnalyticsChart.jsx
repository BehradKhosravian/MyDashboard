// import ChartJsAn from "./ChartJsAn";
// import table from "../assets/TablejustForrSample.png";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function AnalyticsChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "Offline orders",
        data: [2, 25, 84, 2, 25, 84, 27, 48],
      },
      {
        name: "Online orders ",
        data: [43, 68, 107, 81, 27, 48, 49],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="mx-6 mt-10 w-9/12">
      <div className="px-5 text h-fit py-4 border  border-[#E6EDFF] rounded-xl">
        <div className="analytics-header flex justify-between">
          <p className="font-semibold text-xl">Orders Analytics</p>
          <div className="flex space-x-14 ">
            <p>Offline orders</p>
            <p>Online orders </p>
            <select className="rounded-md shadow-md p-1 text-center">
              <option value="day">Daily</option>
              <option value="week">weekly</option>
              <option value="montly">Mothly</option>
              <option value="year">Yearly</option>
            </select>
          </div>
        </div>
        <div className="mt-5">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="area"
            height={270}
          />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsChart;
