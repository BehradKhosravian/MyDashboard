// import ChartJsAn from "./ChartJsAn";
import table from "../assets/TablejustForrSample.png";
function AnalyticsChart() {
  return (
    <div className="mx-6 mt-10 w-9/12">
      <div className="px-5 text h-80 py-4 border  border-[#E6EDFF] rounded-xl">
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
        <img src={table} alt="" />
      </div>
    </div>
  );
}

export default AnalyticsChart;
