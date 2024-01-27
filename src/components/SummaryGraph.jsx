/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import refundicon from "../assets/icons/refund-icon.svg";
import totalincome from "../assets/icons/total-income-icon.svg";
import averagesaleicon from "../assets/icons/average-sale-icon.svg";
import totalordersicon from "../assets/icons/total-order-icon.svg";
import redgraph from "../assets/img/red graph.svg";
import greengraph from "../assets/img/green graph.svg";
import graphtrendup from "../assets/icons/graph-trend-up-icon.svg";
import graphtrenddown from "../assets/icons/graph-trend-down-icon.svg";

function SummaryGraph({ darkMode }) {
  return (
    <div className={`${darkMode ? "dark" : ""} max-w-[540px] self-start `}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] ">
        <Graph
          darkMode={darkMode}
          title="Total Order"
          titleImg={totalordersicon}
          graphImg={greengraph}
          graphImgAlt={`green graph`}
          timeframe={`vs. previous month`}
          figure={`350`}
          percentage={`23.5%`}
          percentageClass={`bg-[#34CAA51F] text-[#34CAA5]`}
          trendicon={graphtrendup}
        />
        <Graph
          darkMode={darkMode}
          title="Total Refund"
          titleImg={refundicon}
          graphImg={redgraph}
          graphImgAlt={`red graph`}
          timeframe={`vs. previous month`}
          figure={`270`}
          percentage={`23.5%`}
          percentageClass={`bg-[#ED544E1F] text-[#ED544E] `}
          trendicon={graphtrenddown}
        />
        <Graph
          darkMode={darkMode}
          title="Average Sales"
          titleImg={averagesaleicon}
          graphImg={redgraph}
          graphImgAlt={`red graph`}
          timeframe={`vs. previous month`}
          figure={`1567`}
          percentage={`23.5%`}
          percentageClass={`bg-[#ED544E1F] text-[#ED544E] `}
          trendicon={graphtrenddown}
        />
        <Graph
          darkMode={darkMode}
          title="Total Income"
          titleImg={totalincome}
          graphImg={greengraph}
          graphImgAlt={`green graph`}
          timeframe={`vs. previous month`}
          figure={`$350,000`}
          percentage={`23.5%`}
          percentageClass={`bg-[#34CAA51F] text-[#34CAA5] `}
          trendicon={graphtrendup}
        />
      </div>
    </div>
  );
}

function Graph({
  darkMode,
  title,
  percentage,
  titleImg,
  titleImgAlt,
  graphImg,
  graphImgAlt,
  timeframe,
  figure,
  percentageClass,
  trendicon,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
        type: "spring",
        ease: "easeInOut",
        bounce: 0.3,
      }}
      className={`${
        darkMode ? "dark border-[#edf2f675] " : ""
      } border max-w-[340px] bg-[#fff] border-[#e5eaef] rounded-[14px] p-4 `}
    >
      <div className="flex justify-between mb-[7px] ">
        <img src={titleImg} alt={titleImgAlt} />{" "}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            type: "spring",
            ease: "easeInOut",
            bounce: 0.3,
          }}
          className=" cursor-pointer "
          src={graphImg}
          alt={graphImgAlt}
        />{" "}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: "tween",
          ease: "easeInOut",
        }}
        className={`${
          darkMode ? "text-[#f5f5f5]" : ""
        } text-[#898989] mb-[7px] text-[18px] font-JakartaMd `}
      >
        {title}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
          type: "spring",
          ease: "easeInOut",
        }}
        className={`${
          darkMode ? "text-[#f5f5f5]" : ""
        }text-[#3a3f51] text-[24px] font-JakartaSmBd `}
      >
        {figure}
      </motion.p>
      <div className="flex justify-between mt-[7px] ">
        <div
          className={`${percentageClass} rounded-[50px] py-1 px-[8px] flex gap-[5px] items-center `}
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              type: "spring",
              ease: "easeInOut",
            }}
            className=""
            src={trendicon}
            alt="trend icon"
          />
          <p className="text-[12px]">{percentage}</p>
        </div>
        <p
          className={`${
            darkMode ? " text-[#f5f5f5] " : ""
          } text-[#606060] text-[14px] `}
        >
          {timeframe}
        </p>
      </div>
    </motion.div>
  );
}

export default SummaryGraph;
