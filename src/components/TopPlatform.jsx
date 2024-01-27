/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function TopPlatform({ darkMode }) {
  return (
    <div
      className={`${
        darkMode ? "dark border-[#edf2f675] " : ""
      } topPlatform p-5 bg-[#fff] max-w-[540px] self-start rounded-[14px] border border-[#e5eaef] row-start-3 row-end-4 lg:col-start-2 lg:row-start-2 `}
    >
      <div>
        <div className="flex justify-between mb-[25px] ">
          <p
            className={`${
              darkMode ? "text-[#f5f5f5]" : ""
            }text-[#26282C] font-JakartaSmBd  `}
          >
            Top Platform
          </p>
          <p className="text-[#34CAA5] font-JakartaSmBd  ">See All</p>
        </div>

        <Platform
          darkMode={darkMode}
          platform="Book Bazaar"
          amount="$2,500,000"
          percentage="+15%"
          customProgressStyle="book"
          customValue="50"
        />

        <Platform
          darkMode={darkMode}
          platform="Artisan Aisle"
          amount="$1,800,000"
          percentage="+10%"
          customProgressStyle="artisan"
          customValue="47"
        />

        <Platform
          darkMode={darkMode}
          platform="Toy Troop"
          amount="$1,200,000"
          percentage="+8%"
          customProgressStyle="toy"
          customValue="30"
        />

        <Platform
          darkMode={darkMode}
          platform="XStore"
          amount="$1,050,000"
          percentage="+5%"
          customProgressStyle="xstore"
          customValue="27"
        />
      </div>
    </div>
  );
}

function Platform({
  darkMode,
  platform,
  amount,
  percentage,
  customValue,
  customProgressStyle,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        type: "tween",
        ease: "easeInOut",
      }}
      className={`${darkMode ? "text-[#fafafa]" : ""}`}
    >
      <p
        className={` ${
          darkMode ? "text-[#f5f5f5]" : ""
        } text-[#22242c] font-JakartaSmBd  `}
      >
        {platform}
      </p>
      <progress
        className={`${customProgressStyle} cursor-pointer ${
          darkMode ? "progressdark" : ""
        } `}
        value={customValue}
        max="100"
        title={`${customValue}%`}
      >
        {" "}
      </progress>

      <div
        className={` ${
          darkMode ? "text-[#f5f5f5]" : ""
        } flex justify-between text-[#525252]  mb-[15px] text-[18px] `}
      >
        <p className="">{amount}</p>
        <p className="">{percentage}</p>
      </div>
    </motion.div>
  );
}

export default TopPlatform;
