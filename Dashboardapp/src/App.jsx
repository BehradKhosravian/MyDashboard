import "./App.css";
import SideBar from "./components/SideBar";
import NavigationBar from "./components/NavigationBar";
import Orders from "./pages/Orders/Orders";
import Overview from "./pages/Overview(main)/Overview";
import Checkout from "./pages/Checkout/Checkout";
import NoutFound from "./pages/404NouFound/NoutFound";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Products/Product";
import HelpCenter from "./pages/Helpcenter/HelpCenter";
import Contactus from "./pages/Contactus/Contactus";
import Logout from "./pages/Logout/Logout";
import Setting from "./pages/Setting/Setting";

function App() {
  // const router = useRoutes(routes)
  return (
    <>
      <div className="flex">
        <SideBar />
        <main className=" w-4/5">
          <NavigationBar userName={"Behrad Khosravian"} />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Helpcenter" element={<HelpCenter />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Logout" element={<Logout />} />

            <Route path="*" element={<NoutFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
