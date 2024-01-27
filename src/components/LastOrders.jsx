/* eslint-disable react/prop-types */
import { useState } from "react";
import invoicedownloadicon from "../assets/icons/invoice-download-icon.svg";
import invoicedownloadicondark from "../assets/icons/invoice-download-icon-dark.svg";
import marcusImg from "../assets/img/order-img-marcus.svg";
import jaydonImg from "../assets/img/order-img-jaydon.svg";
import coreyImg from "../assets/img/order-img-corey.svg";
import cooperImg from "../assets/img/order-img-cooper.svg";
import phillipImg from "../assets/img/order-img-phillip.svg";
import cancelIcon from "../assets/icons/cancel-icon-svg.svg";

function LastOrders({ darkMode }) {
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [getInvoiceData, setGetInvoiceData] = useState({
    name: "",
    date: "",
    amount: "",
    status: "",
  });

  console.log("getInvoiceData", getInvoiceData);

  return (
    <>
      <div
        className={`${
          darkMode ? "dark border-[#edf2f675] " : "border-[#edf2f7] "
        } p-5 bg-[#fff] rounded-[14px]  border self-start    `}
      >
        <div className=" overflow-x-scroll  lg:overflow-x-hidden ">
          <div className="flex justify-between mb-4 ">
            <p
              className={`text-[#26282C] font-JakartaSmBd ${
                darkMode ? " text-[#f5f5f5] " : ""
              } `}
            >
              Last Orders
            </p>
            <p className="text-[#34CAA5] font-JakartaSmBd  ">See All</p>
          </div>

          <table className="table-auto w-[700px] sm:w-full  ">
            <thead>
              <tr className=" theadRow text-[#9CA4AB] ">
                <th className="p-2 w-1/4 text-left ">Name</th>
                <th className="p-2 w-1/5 text-left">Date</th>
                <th className="p-2 w-1/6 text-left">Amount</th>
                <th className="p-2 w-1/6 text-left">Status</th>
                <th className="p-2 w-1/6 text-left">Invoice</th>
              </tr>
            </thead>

            <tbody className="">
              <TableData
                darkMode={darkMode}
                setIsInvoiceModalOpen={setIsInvoiceModalOpen}
                setGetInvoiceData={setGetInvoiceData}
                orderImg={marcusImg}
                name="Marcus Bergson"
                date="Nov 15, 2023"
                amount="$80,000"
                status="Paid"
              />

              <TableData
                darkMode={darkMode}
                setIsInvoiceModalOpen={setIsInvoiceModalOpen}
                setGetInvoiceData={setGetInvoiceData}
                orderImg={jaydonImg}
                name="Jaydon Vaccaro"
                date="Nov 15, 2023"
                amount="$150,000"
                status="Refund"
              />
              <TableData
                darkMode={darkMode}
                setIsInvoiceModalOpen={setIsInvoiceModalOpen}
                setGetInvoiceData={setGetInvoiceData}
                orderImg={coreyImg}
                name="Corey Schleifer"
                date="Nov 14, 2023"
                amount="$87,000"
                status="Paid"
              />
              <TableData
                darkMode={darkMode}
                setIsInvoiceModalOpen={setIsInvoiceModalOpen}
                setGetInvoiceData={setGetInvoiceData}
                orderImg={cooperImg}
                name="Cooper Press"
                date="Nov 14, 2023"
                amount="$100,000"
                status="Refund"
              />
              <TableData
                darkMode={darkMode}
                setIsInvoiceModalOpen={setIsInvoiceModalOpen}
                setGetInvoiceData={setGetInvoiceData}
                orderImg={phillipImg}
                name="Phillip Lubin"
                date="Nov 13, 2023"
                amount="$78,000"
                status="Paid"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* {modal} */}
      <InvoiceModal
        darkMode={darkMode}
        setIsInvoiceModalOpen={setIsInvoiceModalOpen}
        isInvoiceModalOpen={isInvoiceModalOpen}
        getInvoiceData={getInvoiceData}
      />
    </>
  );
}

function TableData({
  darkMode,
  name,
  date,
  amount,
  status,
  orderImg,
  setIsInvoiceModalOpen,
  setGetInvoiceData,
}) {
  return (
    <tr
      key={orderImg}
      className={`text-[] border-t border-[#edf2f675] text-[16px] ${
        darkMode ? "border-[#edf2f675]" : "border-[#edf2f6]"
      } `}
    >
      <td className="py-3 flex items-center gap-[10px] text-[] ">
        {" "}
        <img className=" font-JakartaMd " src={orderImg} alt="order img" />{" "}
        {name}
      </td>
      <td
        className={`${
          darkMode ? " text-[#f5f5f5] " : ""
        } py-3 text-[#737373]  `}
      >
        {date}
      </td>
      <td
        className={`p-3 text-[#0D062D] font-JakartaMd ${
          darkMode ? " text-[#f5f5f5] " : ""
        }  `}
      >
        {amount}
      </td>
      <td
        className={`py-3 ${
          status === "Paid" ? "text-[#34caa5]" : "text-[#ED544E]"
        }`}
      >
        {status}
      </td>
      <td
        onClick={() => {
          setIsInvoiceModalOpen(true);
          setGetInvoiceData({ name, date, amount, status, orderImg });
        }}
        className={`py-3 text-[#0D062D]  flex  gap-[5px] cursor-pointer hover:opacity-80 ${
          darkMode ? " text-[#f5f5f5] " : ""
        } `}
      >
        <img
          src={darkMode ? invoicedownloadicondark : invoicedownloadicon}
          alt="invoice download icon"
        />
        <p className="text-[14px]  ">View</p>
      </td>
    </tr>
  );
}

function InvoiceModal({
  darkMode,
  isInvoiceModalOpen,
  getInvoiceData,
  setIsInvoiceModalOpen,
}) {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isInvoicePreviewModalOpen, setIsInvoicePreviewModalOpen] =
    useState(false);

  const { name } = getInvoiceData;

  function generateRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const transactionId = generateRandomString(10);

  return (
    <>
      <div
        className={`${
          isInvoiceModalOpen ? "visible" : "hidden"
        } fixed inset-0 z-[2] bg-[#fff]/[0.1] backdrop-blur-[2.5px] w-[100%] h-[100%] flex items-center justify-center `}
      >
        <div
          className={`${
            darkMode ? "dark" : ""
          } bg-[#fff] border relative border-[#edf2f7] shadow-md max-w-[650px] mx-auto p-6 rounded-[9px] `}
        >
          <img
            onClick={() => setIsInvoiceModalOpen(false)}
            className="absolute top-3 h-[24px] right-3 rounded-[3px] cursor-pointer "
            src={cancelIcon}
            alt=""
          />
          <div>
            <p className="text-center mt-[7px] ">
              You are about to download a transaction invoice.
            </p>

            <div className="flex justify-between px-4 mt-[40px] ">
              <button
                onClick={() => setIsInvoicePreviewModalOpen(true)}
                className=" bg-[#ED544E] text-[#fff] px-[12px] py-[8px] rounded-[9px]"
              >
                Preview
              </button>

              <a
                href={`/public/invoices/${name}.png`}
                download={`Geegpay Transaction ID ${transactionId} `}
              >
                <button
                  // onClick={handleDownload}
                  className="bg-[#34CAA5] text-[#fffffff1] px-[12px] py-[8px] rounded-[9px] "
                >
                  Download
                </button>
              </a>
            </div>

            <button
              onClick={() => setIsSupportModalOpen(true)}
              className="w-full py-[8px] mt-[20px] border rounded-[30px] "
            >
              Report an issue
            </button>
          </div>
        </div>
      </div>
      <SupportChatModal
        darkMode={darkMode}
        isSupportModalOpen={isSupportModalOpen}
        setIsSupportModalOpen={setIsSupportModalOpen}
        getInvoiceData={getInvoiceData}
      />
      <InvoicePreviewModal
        darkMode={darkMode}
        isInvoicePreviewModalOpen={isInvoicePreviewModalOpen}
        setIsInvoicePreviewModalOpen={setIsInvoicePreviewModalOpen}
        getInvoiceData={getInvoiceData}
      />
    </>
  );
}

function SupportChatModal({
  darkMode,
  getInvoiceData,
  setIsSupportModalOpen,
  isSupportModalOpen,
}) {
  function generateRandomString(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const transactionId = generateRandomString(10);

  console.log("isSupportModalOpen2", isSupportModalOpen);
  console.log("getInvoiceData", getInvoiceData);

  const { name, date, amount } = getInvoiceData;

  return (
    <>
      <div
        className={`${
          isSupportModalOpen ? "visible" : "hidden"
        } fixed inset-0 bg-[#fff]/[0.1] z-[5] backdrop-blur-[2.5px] w-[100%] h-[100%] flex items-center justify-center`}
      >
        <div
          className={`${
            darkMode ? "dark" : ""
          } bg-[#fff] border relative border-[#edf2f7] shadow-md max-w-[650px] mx-auto p-6 rounded-[9px] `}
        >
          <img
            onClick={() => setIsSupportModalOpen(false)}
            className="absolute top-3 h-[24px] right-3 rounded-[3px] cursor-pointer "
            src={cancelIcon}
            alt=""
          />
          <div>
            <form
              onChange={(e) => e.preventDefault()}
              className="flex flex-col"
            >
              <label htmlFor="recepient" id="">
                Recepient
              </label>
              <input
                id="recepient"
                value={name}
                type="text"
                className={`${
                  darkMode ? "dark" : ""
                } w-full mb-[8px] border border-[#edf2f7] py-[8px] rounded-[6px] px-[6px] `}
              />

              <label htmlFor="date">Transaction Date</label>
              <input
                type="text"
                value={date}
                className={`${
                  darkMode ? "dark" : ""
                } w-full mb-[8px] border border-[#edf2f7] py-[8px] rounded-[6px] px-[6px] `}
              />

              <label htmlFor="transactionId">Transaction ID</label>
              <input
                type="text"
                value={transactionId}
                className={`${
                  darkMode ? "dark" : ""
                } w-full border mb-[8px] border-[#edf2f7] py-[8px] rounded-[6px] px-[6px] `}
                disabled
              />

              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                value={amount}
                className={`${
                  darkMode ? "dark" : ""
                } w-full border mb-[8px] border-[#edf2f7] py-[8px] rounded-[6px] px-[6px] `}
              />

              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="5"
                className={`${
                  darkMode ? "dark" : ""
                } w-full border mb-[8px] border-[#edf2f7] py-[8px] rounded-[6px] px-[6px] `}
              ></textarea>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsSupportModalOpen(false);
                }}
                className="w-full mb-[3px] py-[8px] mt-[20px] border rounded-[30px] "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function InvoicePreviewModal({
  darkMode,
  getInvoiceData,
  setIsInvoicePreviewModalOpen,
  isInvoicePreviewModalOpen,
}) {
  const { name } = getInvoiceData;

  return (
    <div
      className={`${
        isInvoicePreviewModalOpen ? "visible" : "hidden"
      } fixed inset-0 z-[2] bg-[#fff]/[0.1] backdrop-blur-[2.5px]  w-[100%] h-[100%] px-3 flex items-center justify-center `}
    >
      <div
        className={`${
          darkMode ? "dark" : ""
        } bg-[#fff]  overflow-scroll border relative border-[#edf2f7] shadow-md w-[800px] h-[80vh] mx-auto p-6 rounded-[9px] `}
      >
        <img
          onClick={() => setIsInvoicePreviewModalOpen(false)}
          className="absolute top-3 h-[24px] right-3 rounded-[3px] cursor-pointer "
          src={cancelIcon}
          alt=""
        />
        <div className="flex justify-center items-center">
          <iframe
            title="Invoice"
            src={`/public/invoices/${name}.png`}
            className="w-[500px] h-[600px] z-40"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LastOrders;
