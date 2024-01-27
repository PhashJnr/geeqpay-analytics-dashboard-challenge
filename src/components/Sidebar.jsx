/* eslint-disable react/prop-types */
import logo from "../assets/icons/logo.svg";
import { useState } from "react";
import arrowLeft from "../assets/icons/arrow-left-svg.svg";
import arrowRight from "../assets/icons/arrow-right-svg.svg";
import categoryIcon from "../assets/icons/category-icon.svg";
import trendUpIcon from "../assets/icons/trend-up-icon.svg";
import profileIcon from "../assets/icons/profile-2user-icon.svg";
import boxIcon from "../assets/icons/box-icon.svg";
import discountIcon from "../assets/icons/discount-shape-icon.svg";
import infoIcon from "../assets/icons/info-circle-icon.svg";
import dayModeIcon from "../assets/icons/light mode-icon.svg";
import nightModeIcon from "../assets/icons/night-mode-icon.svg";
import arrowRightSidebar from "../assets/icons/arrow-right-icon.svg";
import settingsIcon from "../assets/icons/setting-2-icon.svg";
import logoutIcon from "../assets/icons/logout-icon.svg";

function Sidebar({ darkMode, setDarkMode }) {
  const [sidebar, setSidebar] = useState(false);

  return (
    <nav
      className={`sidenav bg-[#fafafa] ${
        sidebar ? "pr-[25px] bg-[#fafafa]/[0.4] backdrop-blur-sm " : ""
      } ${
        darkMode ? "dark border-[#edf2f675] " : ""
      } px-[10px] py-[20px] fixed left-0 top-0 min-h-[100vh] border-r  z-[1] border-[#e5eaef] `}
    >
      <img
        onClick={() => setSidebar(!sidebar)}
        className="h-[24px] absolute top-[62px] right-[-8px] bg-[#fff] rounded-full cursor-pointer "
        src={sidebar ? arrowLeft : arrowRight}
        alt="arrow open sidebar"
      />
      <div className="">
        <div className="logo">
          <img src={logo} />
        </div>

        <div className="sideBarMenu flex flex-col justify-between h-[100%] gap-[25px] ">
          <div className="sideBarLink mt-[35px] flex flex-col gap-[20px] justify-center ">
            <div
              className={`flex ${!sidebar ? "justify-center  " : ""} ${
                darkMode ? "border-[#fff] " : ""
              } items-center gap-[8px] border-r-[3px] py-[5px] px-[4px] rounded-[6px]  cursor-pointer border-[#0d062d] hover:bg-[#0d062d]  hover:text-[#fafafa]  `}
            >
              <img src={categoryIcon} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>Categories</p>
            </div>

            <div
              className={`flex ${!sidebar ? "justify-center" : ""} ${
                darkMode ? " hover:text-[#1a202c] " : ""
              } items-center gap-[8px] cursor-pointer py-[5px] px-[4px] rounded-[6px] hover:bg-[#0d062d]  hover:text-[#fafafa] `}
            >
              <img src={trendUpIcon} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>Charts</p>
            </div>

            <div
              className={`flex ${!sidebar ? "justify-center" : ""} ${
                darkMode ? " hover:text-[#1a202c] " : ""
              } items-center gap-[8px] cursor-pointer py-[5px] px-[4px] rounded-[6px] hover:bg-[#0d062d]  hover:text-[#fafafa] `}
            >
              <img src={profileIcon} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>Profile</p>
            </div>

            <div
              className={`flex ${!sidebar ? "justify-center" : ""} ${
                darkMode ? " hover:text-[#1a202c] " : ""
              } items-center gap-[8px] cursor-pointer py-[5px] px-[4px] rounded-[6px] hover:bg-[#0d062d]  hover:text-[#fafafa] `}
            >
              <img src={boxIcon} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>Order</p>
            </div>

            <div
              className={`flex ${!sidebar ? "justify-center" : ""} ${
                darkMode ? " hover:text-[#1a202c] " : ""
              } items-center gap-[8px] cursor-pointer py-[5px] px-[4px] rounded-[6px] hover:bg-[#0d062d]  hover:text-[#fafafa] `}
            >
              <img src={discountIcon} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>Coupons</p>
            </div>

            <div
              className={`flex ${!sidebar ? "justify-center" : ""} ${
                darkMode ? " hover:text-[#1a202c] " : ""
              } items-center gap-[8px] cursor-pointer py-[5px] px-[4px] rounded-[6px] hover:bg-[#0d062d]  hover:text-[#fafafa] `}
            >
              <img src={infoIcon} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>
                Additional Info
              </p>
            </div>

            <div
              className={` ${
                darkMode
                  ? " bg-[#1a202c] border border-[#edf2f675]"
                  : "bg-[#fff]"
              }  self-start items-center px-[5px] flex flex-col gap-[15px] py-[8px] rounded-[100px] `}
            >
              <img
                onClick={() => setDarkMode(false)}
                className={`${
                  darkMode ? "bg-[#1a202c]" : "bg-[#34caa5] "
                } rounded-full p-1 cursor-pointer `}
                src={dayModeIcon}
                alt="day mode icon"
              />

              <img
                onClick={() => setDarkMode(true)}
                className={` ${
                  darkMode ? " bg-[#34caa5] " : ""
                } cursor-pointer rounded-full p-1 `}
                src={nightModeIcon}
                alt="night mode icon"
              />
            </div>
          </div>

          <div className="sideBarLink mt-[35px] flex flex-col gap-[20px] justify-center ">
            <div
              className={`flex ${!sidebar ? "justify-center" : ""} ${
                darkMode ? " hover:text-[#1a202c] " : ""
              } items-center gap-[8px] cursor-pointer py-[5px] px-[4px] rounded-[6px] hover:bg-[#0d062d]  hover:text-[#fafafa] `}
            >
              <img src={arrowRightSidebar} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>Resources</p>
            </div>

            <div
              className={`flex ${!sidebar ? "justify-center" : ""} ${
                darkMode ? " hover:text-[#1a202c] " : ""
              } items-center gap-[8px] cursor-pointer py-[5px] px-[4px] rounded-[6px] hover:bg-[#0d062d]  hover:text-[#fafafa] `}
            >
              <img src={settingsIcon} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>Settings</p>
            </div>

            <div
              className={`flex ${!sidebar ? "justify-center" : ""} ${
                darkMode ? " hover:text-[#1a202c] " : ""
              } items-center gap-[8px] cursor-pointer py-[5px] px-[4px] rounded-[6px] hover:bg-[#0d062d]  hover:text-[#fafafa] `}
            >
              <img src={logoutIcon} alt="category icon" />
              <p className={`${sidebar ? "visible" : "hidden"} `}>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
