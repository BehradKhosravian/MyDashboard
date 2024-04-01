import "./App.css";
import SideBar from "./components/SideBar";
import NavigationBar from "./components/NavigationBar";
import Orders from "./pages/Orders/Orders";
import Overview from "./pages/Overview(main)/Overview";
import NoutFound from "./pages/404NouFound/NoutFound";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Products/Product";
import HelpCenter from "./pages/Helpcenter/HelpCenter";
import Contactus from "./pages/Contactus/Contactus";
import Logout from "./pages/Logout/Logout";
import Setting from "./pages/Setting/Setting";
import Checkout from "./pages/CheckOut/Checkout";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
function App() {
  const [login, setLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // const router = useRoutes(routes)
  return (
    <>
      {login && (
        <div className="flex">
          {isOpen ? <SideBar isOpen={isOpen} /> : null}
          <div className="text-3xl z-20 position fixed left-2">
            <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
          </div>
          <main className=" w-full">
            <NavigationBar userName={"Behrad Khosravian"} />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/product" element={<Product />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/helpcenter" element={<HelpCenter />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<NoutFound />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
