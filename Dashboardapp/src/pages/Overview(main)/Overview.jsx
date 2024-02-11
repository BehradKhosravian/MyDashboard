import Cards from "../../components/Cards";
import AnalyticsChart from "../../components/AnalyticsChart";
import EarningPieChart from "../../components/EarningPieChart";
function Overview() {
  return (
    <div>
      <Cards />
      <div className=" w-fit md:flex md:w-full">
        <AnalyticsChart />
        <EarningPieChart />
      </div>
    </div>
  );
}

export default Overview;
