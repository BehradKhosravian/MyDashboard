import riseIcon from "../assets/icon/riseIcon.svg";
import fallIcon from "../assets/icon/fallIcon.svg";
import ordersIcon from "../assets/icon/ordersIcon.svg";
import productsIcon from "../assets/icon/productsIcon.svg";
import checkedIcon from "../assets/icon/checkedIcon.svg";
import arrowrightIcon from "../assets/icon/arrowrightIcon.svg";
import CardButton from "./CardButton";

function Card({ number, title, amount, percentage }) {
  return (
    <>
      <div
        className={`w-full  md:w-1/4 ${
          title === "Refunded"
            ? ""
            : "border-b md:border-r md:border-b-0  border-[#E6EDFF]"
        }`}
      >
        <div className="main-report flex  justify-between">
          <div>
            <p className=" text-sm lg:text-3xl font-semibold leading-snug">
              {number}
            </p>
            <p className=" text-xs lg:text-sm ">
              {title === "Refund " ? title : "Total " + title}
            </p>
          </div>
          <div className=" pr-8">
            <CardButton
              icon={
                title === "users"
                  ? ordersIcon
                  : title == "products"
                  ? productsIcon
                  : title == "checked"
                  ? checkedIcon
                  : arrowrightIcon
              }
              title={title}
            />
          </div>
        </div>
        <div className="rise-fall-time space-x-3 flex align-middle px-2 py-3">
          <img src={percentage > 0 ? riseIcon : fallIcon} alt="rise" />
          <span className="text-[#7C8DB5] text-sm ">{amount}</span>
          <span className="text-[#7C8DB5] text-sm">
            {percentage > 0
              ? "+" + percentage + "% this week"
              : +percentage + "% this week"}
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
