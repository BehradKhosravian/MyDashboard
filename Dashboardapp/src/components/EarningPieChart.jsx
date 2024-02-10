import dots from "../assets/icon/threedots.svg";
import legend from "../assets/icon/Legend.svg";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

function EarningPieChart() {
  const [state, setState] = useState({
    series: [67, 42, 21],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: false,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      labels: ["Trades", "Oniline", "Offline"],
    },
  });

  return (
    <div className="mx-6 pb-2  mt-9 w-3/12 h-fit border  border-[#E6EDFF] rounded-xl">
      <div className="earning-header p-4 flex justify-between">
        <p className="font-semibold text-xl">Earnings</p>
        <button>
          <img src={dots} alt="" />
        </button>
      </div>
      <div className=" earning-main flex flex-col  items-center">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={300}
        />
        <img className="pt-4" src={legend} alt="" />
      </div>
    </div>
  );
}

export default EarningPieChart;
