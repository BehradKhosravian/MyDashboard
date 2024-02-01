// import Logo from "../assets/DashLogo.svg";
// px-12 py-14 border-r
import logo from "../assets/DashLogo.svg";
import OverviewIcon from "../assets/icon/overviewShape.svg";
import productionIconAside from "../assets/icon/productIconAside.svg";
import ordersIconAside from "../assets/icon/ordersIconAside.svg";
import checkoutAside from "../assets/icon/checkoutAside.svg";
import settingAside from "../assets/icon/settingAside.svg";
import shape from "../assets/icon/shape.svg";
import helpCenterIcon from "../assets/icon/helpCenterIcon.svg";
import contactUsIcon from "../assets/icon/contactUsIcon.svg";
import logOutIcon from "../assets/icon/logOutIcon.svg";
function AsideBar() {
  return (
    <>
      <div className="aside-container flex  flex-col  w-1/6 h-screen">
        <div className="aside-logo flex px-12 py-7 mt-2 items-center">
          <img src={logo} alt="MyDashLogo" />
          <span className="font-semibold">MyDash</span>
        </div>
        <div className="aside-mainpart px-12  border-r h-screen">
          <div className="mt-10 space-y-5">
            <a className="text-[#7C8DB5] flex  font-semibold" href="#">
              <img className="mr-3" src={OverviewIcon} alt="overviewIcon" />
              Overview
            </a>
            <a
              className="text-[#7C8DB5] flex font-semibold justify-between "
              href="#"
            >
              <img className="mr-3" src={productionIconAside} alt="" />
              Product
              <img className="ml-16" src={shape} alt="" />
            </a>
            <a className="text-[#7C8DB5] flex  font-semibold" href="#">
              <img className="mr-3" src={ordersIconAside} alt="" />
              Orders
            </a>
            <a className="text-[#7C8DB5]  flex  font-semibold" href="#">
              <img className="mr-3" src={checkoutAside} alt="" />
              Checkout
            </a>
            <a className="text-[#7C8DB5] flex  font-semibold" href="#">
              <img className="mr-3" src={settingAside} alt="" />
              Setting
            </a>
          </div>
        </div>
        <div className="aside-footer pt-48 pb-10 px-12  border-r  space-y-5">
          <a className="text-[#7C8DB5] flex  font-semibold" href="">
            <img className="mr-3" src={helpCenterIcon} alt="helpCenterIcon" />
            Help Centre
          </a>
          <a className="text-[#7C8DB5] flex  font-semibold" href="">
            <img className="mr-3" src={contactUsIcon} alt="contactUsIcon" />
            Contact us
          </a>
          <a className="text-[#FF3B30] flex  font-semibold" href="">
            <img className="mr-3" src={logOutIcon} alt="contactUsIcon" />
            Log out
          </a>
        </div>
      </div>
    </>
  );
}

export default AsideBar;
