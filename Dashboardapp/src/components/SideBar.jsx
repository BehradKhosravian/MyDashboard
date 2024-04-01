// import Logo from "../assets/DashLogo.svg";
// px-12 py-14 border-r
import logo from "../assets/DashLogo.svg";
import OverviewIcon from "../assets/icon/overviewShape.svg";
import productionIconAside from "../assets/icon/productIconAside.svg";
import ordersIconAside from "../assets/icon/ordersIconAside.svg";
import checkoutAside from "../assets/icon/checkoutAside.svg";
import settingAside from "../assets/icon/settingAside.svg";
// import shape from "../assets/icon/shape.svg";
import helpCenterIcon from "../assets/icon/helpCenterIcon.svg";
import contactUsIcon from "../assets/icon/contactUsIcon.svg";
import logOutIcon from "../assets/icon/logOutIcon.svg";
import { Link, NavLink } from "react-router-dom";
function SideBar() {
  return (
    <>
      <section className="sideBar-container  bg-slate-50 flex-col  w-1/6 h-full lg:block">
        <div className="fixed bg-slate-50 h-screen z-10">
          <div className="sideBar-logo flex px-12 py-7 mt-2 items-center">
            <img src={logo} alt="MyDashLogo" />
            <span className="font-semibold">MyDash</span>
          </div>
          <div className="sideBar-mainpart px-12  border-r ">
            <div className="mt-10 space-y-5">
              <NavLink
                to="/"
                className="text-[#7C8DB5] flex  font-semibold hover:text-[#347AE2]"
              >
                <img className="mr-3" src={OverviewIcon} alt="overviewIcon" />
                Overview
              </NavLink>
              <NavLink
                to="product"
                className="text-[#7C8DB5] flex font-semibold hover:text-[#347AE2]"
              >
                <img className="mr-3" src={productionIconAside} alt="" />
                Product
              </NavLink>
              <a href="#"></a>
              <NavLink
                to="/orders"
                className="text-[#7C8DB5] flex  font-semibold hover:text-[#347AE2]"
              >
                <img className="mr-3" src={ordersIconAside} alt="" />
                Orders
              </NavLink>
              <Link
                // to="/checkout"
                className="text-[#7C8DB5]  flex  font-semibold hover:text-[#347AE2]"
              >
                <img className="mr-3" src={checkoutAside} alt="" />
                Checkout
              </Link>
              <Link
                // to="/setting"
                className="text-[#7C8DB5]  flex  font-semibold hover:text-[#347AE2]"
              >
                <img className="mr-3" src={settingAside} alt="" />
                Setting
              </Link>
            </div>
          </div>
          <div className="sideBar-footer  bg-slate-50 pt-48 pb-10 px-12  border-r  space-y-5">
            <Link
              // to="/helpcenter"
              className="text-[#7C8DB5] flex  font-semibold hover:text-[#347AE2]"
            >
              <img className="mr-3" src={helpCenterIcon} alt="helpCenterIcon" />
              Help Center
            </Link>
            <NavLink
              to="/contactus"
              className="text-[#7C8DB5] flex  font-semibold hover:text-[#347AE2]"
              href=""
            >
              <img className="mr-3" src={contactUsIcon} alt="contactUsIcon" />
              Contact us
            </NavLink>
            <NavLink
              to="/Logout"
              className="text-[#FF3B30] flex  font-semibold"
            >
              <img className="mr-3" src={logOutIcon} alt="contactUsIcon" />
              Log out
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default SideBar;
