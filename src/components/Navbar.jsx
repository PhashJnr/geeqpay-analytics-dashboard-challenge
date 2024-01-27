/* eslint-disable react/prop-types */
import searchIcon from "../assets/icons/Search-icon.svg";
import calenderIcon from "../assets/icons/calender icon.svg";
import calenderDarkMode from "../assets/icons/calendar-for-darkmode-svg.svg";
import notificationIcon from "../assets/icons/notification-icon.svg";
import notificationdark from "../assets/icons/notificaton-icon-dark.svg";
import dropdownIcon from "../assets/icons/Arrow-Down-icon.svg";
import dropdownDark from "../assets/icons/Arrow-Down-icon-dark.svg";
import profileImg from "../assets/img/nav-profile-img.svg";

function Navbar({ darkMode }) {
  return (
    <nav
      className={`${
        darkMode ? "dark border-[#edf2f675] " : ""
      } navbar bg-[#fafafa] ml-[50px] z-[1] py-[9px] navbar-expand-lg navbar-dark bg-dark border-b border-[#e5eaef] pl-[30px] `}
    >
      <div className="flex gap-[20px] justify-between items-center ">
        <div>
          <h2 className="font-JakartaSmBd text-[20px]  ">Dashboard</h2>
        </div>

        <div className="flex gap-[25px] mr-[20px] ">
          <div className=" flex items-center searchBar relative ">
            <input
              className={` ${
                darkMode ? "dark border-[#edf2f675]" : ""
              } border border-[#dadddd] hidden sm:block text-[16px] text-[#a3a3a3] pl-[35px] py-[9px] max-w-[340px] rounded-[24px] bg-[#fff] `}
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

          <div className="notification flex items-center font-JakartaMd ">
            <img
              className="mr-[5px] hover:opacity-60  cursor-pointer "
              src={darkMode ? notificationdark : notificationIcon}
              alt="notification icon"
            />
          </div>

          <div
            className={`${
              darkMode ? " border-[#edf2f675] " : ""
            } profile flex items-center border border-[#dadada] px-[8px] py-[2px] rounded-[28px] font-JakartaMd `}
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
