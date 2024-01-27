/* eslint-disable react/prop-types */
function Dashboardlayout({ children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-[20px] items-center justify-center ">
      {children}
    </div>
  );
}

export default Dashboardlayout;
