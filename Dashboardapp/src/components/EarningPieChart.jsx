import dots from "../assets/icon/threedots.svg";
import legend from "../assets/icon/Legend.svg";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import EarningChartButton from "./EariningChartButton";

function EarningPieChart() {
  const [state, setState] = useState({
    series: [90, 85, 75],
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
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="lg:mx-6   mb-10 w-screen  mt-10 md:w-4/12 lg:w-3/12 h-fit border  border-[#E6EDFF] rounded-xl">
      {/* header of earning Chart */}
      <div className="earning-header p-4 flex justify-between relative">
        <p className="font-semibold text-xl">Earnings</p>
        <button onClick={handleIsOpen}>
          <img src={dots} alt="" />
        </button>
        {isOpen ? <EarningChartButton /> : null}
      </div>
      {/* Main chart compopnent */}
      <div className=" earning-main flex flex-col  items-center">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={300}
        />
        <img className="py-4 lg:p-2" src={legend} alt="" />
      </div>
    </div>
  );
}

export default EarningPieChart;
