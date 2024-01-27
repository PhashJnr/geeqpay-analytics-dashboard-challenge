/* eslint-disable react/prop-types */
import { useState } from "react";
import searchIcon from "../assets/icons/Search-icon.svg";
import calenderIcon from "../assets/icons/calender icon.svg";
import calenderDarkMode from "../assets/icons/calendar-for-darkmode-svg.svg";
import notificationIcon from "../assets/icons/notification-icon.svg";
import notificationdark from "../assets/icons/notificaton-icon-dark.svg";
import dropdownIcon from "../assets/icons/Arrow-Down-icon.svg";
import dropdownDark from "../assets/icons/Arrow-down-icon-dark.svg";
import profileImg from "../assets/img/nav-profile-img.svg";
import filterIcon from "../assets/icons/filter-icon.svg";
import markasreadIcon from "../assets/icons/mark-as-read-icon.svg";

function Navbar({ darkMode }) {
  const [notification, setNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav
      className={`${
        darkMode ? "dark border-[#edf2f675] " : ""
      } navbar bg-[#fafafa] ml-[50px] z-[1] py-[9px] relative navbar-expand-lg navbar-dark bg-dark border-b border-[#e5eaef] pl-[30px]`}
    >
      <div className="flex gap-[20px] justify-between items-center ">
        <div>
          <h2 className="font-JakartaSmBd text-[20px]">Dashboard</h2>
        </div>

        <div className="flex gap-[25px] mr-[20px] ">
          <div className=" flex items-center searchBar relative ">
            <input
              className={` ${
                darkMode ? "dark border-[#edf2f675]" : ""
              } border border-[#dadddd] hidden sm:block text-[16px] text-[#a3a3a3] pl-[55px] lg:pl-[35px] py-[9px] max-w-[340px] rounded-[24px] bg-[#fff] `}
              placeholder="Search..."
            />
            <img
              className="absolute top-[20px] left-[3px] ml-[10px] "
              src={searchIcon}
              alt="search"
            />
          </div>

          <div className=" calender flex items-center font-JakartaMd ">
            <img
              className="mr-[5px] h-[24px] "
              src={darkMode ? calenderDarkMode : calenderIcon}
              alt="calender icon"
            />

            <p className="hidden lg:block ">November 15, 2023</p>
          </div>

          <div
            onClick={() => {
              setShowProfile(false);
              setNotification(!notification);
            }}
            className="notification flex  items-center font-JakartaMd "
          >
            <img
              className="mr-[5px] hover:opacity-60  cursor-pointer "
              src={darkMode ? notificationdark : notificationIcon}
              alt="notification icon"
            />

            <div
              className={`${
                darkMode ? "dark  border-[#edf2f675] " : "border-[#dadddd]"
              } ${
                notification ? "visible" : "hidden"
              } bg-[#fff] absolute border top-[80px] shadow-sm rounded-[14px] max-w-[350px] p-3 left-[] translate-x-[-70px] `}
            >
              <div
                className={` ${
                  darkMode ? "dark" : ""
                } flex justify-between gap-[50px] `}
              >
                <p className={``}>Alerts</p>
                <div className="flex gap-[5px] ">
                  <img src={filterIcon} alt="filter notification icon" />
                  <img
                    src={markasreadIcon}
                    alt="mark notification as read icon"
                  />
                </div>
              </div>
              <p
                className={`${
                  darkMode ? "dark" : ""
                } px-[6px] py-[10px] mt-[15px] bg-[#fafafa] rounded-[6px] `}
              >
                New alerts will show up here
              </p>
            </div>
          </div>

          <div
            onClick={() => {
              setNotification(false);
              setShowProfile(!showProfile);
            }}
            className={`${
              darkMode ? " border-[#edf2f675] " : ""
            } profile flex items-center cursor-pointer border border-[#dadada] px-[8px] py-[2px] rounded-[28px] font-JakartaMd `}
          >
            <div className="profile-img  mr-[10px] ">
              <img className=" rounded-full " src={profileImg} alt="profile" />
            </div>
            <div className="lg:flex flex-col hidden ">
              <p
                className={`${
                  darkMode ? "text-[#fafafa]" : ""
                } text-[#26282c] text-right `}
              >
                Justin Bergson
              </p>
              <p
                className={`${
                  darkMode ? "text-[#fafafa]" : ""
                }  text-[#787486] `}
              >
                Justin@gmail.com
              </p>

              <div
                className={`${
                  darkMode ? "dark  border-[#edf2f675] " : "border-[#dadddd]"
                } ${
                  showProfile ? "visible" : "hidden"
                } profileDropDown bg-[#fff] absolute border top-[80px] shadow-sm rounded-[14px] max-w-[200px] w-full p-3 right-[40px]  `}
              >
                <ul
                  className={` ${
                    darkMode ? "dark" : ""
                  } flex flex-col text-[#26282c]  justify-between gap-[5px] `}
                >
                  <li
                    className={` ${
                      darkMode
                        ? "dark  border-[#edf2f675] "
                        : "border-[#dadddd]"
                    }  text-[#26282c] border-b py-[8px] pb-[10px] text-[16px] inline-flex flex-col `}
                  >
                    Justin Bergson{" "}
                    <span className="text-[#787486] text-[14px] ">
                      Justin@gmail.com
                    </span>{" "}
                  </li>
                  <li className=" py-[8px] ">Manage Account</li>
                  <li className="py-[8px]">Log Out</li>
                </ul>
              </div>
            </div>

            <img
              className="ml-[4px]"
              src={darkMode ? dropdownDark : dropdownIcon}
              alt="drop down icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
