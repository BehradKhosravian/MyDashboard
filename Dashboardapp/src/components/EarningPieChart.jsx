import dots from "../assets/icon/threedots.svg";
import CircleChart from "../assets/icon/Circle-Chart.svg";
import legend from "../assets/icon/Legend.svg";
function EarningPieChart() {
  return (
    <div className="mx-6 mt-10 w-3/12 h-80  border  border-[#E6EDFF] rounded-xl">
      <div className="earning-header p-4 flex justify-between">
        <p className="font-semibold text-xl">Earnings</p>
        <button>
          <img src={dots} alt="" />
        </button>
      </div>
      <div className="earning-main flex flex-col  items-center">
        <img className="size-3/4" src={CircleChart} alt="" />
        <img className="pt-4" src={legend} alt="" />
      </div>
    </div>
  );
}

export default EarningPieChart;
