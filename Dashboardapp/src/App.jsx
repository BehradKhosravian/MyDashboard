import "./App.css";
import AsideBar from "./components/AsideBar";
import NavigationBar from "./components/NavigationBar";
import Cards from "./components/Cards";
import AnalyticsChart from "./components/AnalyticsChart";
import EarningPieChart from "./components/EarningPieChart";

function App() {
  return (
    <>
      <div className="flex">
        <AsideBar />
        <main className=" w-4/5">
          <NavigationBar userName={"Behrad Khosravian"} />
          <Cards />
          <div className="flex">
            <AnalyticsChart />
            <EarningPieChart />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
