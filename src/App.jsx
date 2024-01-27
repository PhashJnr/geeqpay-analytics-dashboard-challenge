import { useLocalStorage } from "./hooks/useLocaleStorage";
import Navbar from "./components/Navbar";
import SalesGraph from "./components/SalesGraph";
import Dashboardlayout from "./components/Dashboardlayout";
import Sidebar from "./components/Sidebar";
import SummaryGraph from "./components/SummaryGraph";
import LastOrders from "./components/LastOrders";
import TopPlatform from "./components/TopPlatform";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage(true, "isDark?");

  return (
    <>
      <Navbar darkMode={darkMode} />
      <Sidebar setDarkMode={setDarkMode} darkMode={darkMode} />
      <main className={`${darkMode ? "dark" : ""} main ml-[70px] z-[1] p-3 `}>
        <Dashboardlayout darkMode={darkMode}>
          <SalesGraph darkMode={darkMode} />
          <SummaryGraph darkMode={darkMode} />
          <LastOrders darkMode={darkMode} />
          <TopPlatform darkMode={darkMode} />
        </Dashboardlayout>
      </main>
    </>
  );
}

export default App;
