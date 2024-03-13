import Cards from "../../components/Cards";
import AnalyticsChart from "../../components/AnalyticsChart";
import EarningPieChart from "../../components/EarningPieChart";
function Overview() {
  return (
    <div>
      <Cards />
      <div className=" w-fit md:flex md:w-full mx-0">
        <AnalyticsChart />
        <EarningPieChart />
      </div>
    </div>
  );
}

export default Overview;
