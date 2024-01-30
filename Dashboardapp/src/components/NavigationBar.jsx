import SearchIcon from "../assets/icon/searchIcon.svg";
import bellIcon from "../assets/icon/bellIcon.svg";
import userImage from "../assets/icon/userImage.jpg";
import shapeIcon from "../assets/icon/shape.svg";
function NavigationBar({ userName }) {
  return (
    <div className="flex flex-col w-full">
      <div className="header-container flex justify-between">
        <div className="py-8 px-6">
          <h1 className=" font-semibold text-2xl 	">
            Welcome Back , {userName}
          </h1>
          <p className=" text-[#7C8DB5] text-xs leading-8	 ">
            Here is the information about all your orders
          </p>
        </div>
        <div className="userIcon py-8 px-6 flex items-center space-x-5 mr-6">
          <img className=" size-4" src={SearchIcon} />
          <img className=" size-4" src={bellIcon} />
          <div className="user-container flex items-center space-x-2 ">
            <img
              className="rounded-full size-8"
              src={userImage}
              alt="userIcon"
            />
            <span className=" text-xs font-semibold">{userName}</span>
            <img className=" size-2" src={shapeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
