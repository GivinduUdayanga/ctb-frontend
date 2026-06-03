import Header from "../components/header";
import Footer from "../components/footer.jsx";
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import BackToTop from "../components/backtotop.jsx";

export default function WeeklySoldQuantityAverages() {

    /* ===============================
      SIMULATED DATABASE
    =============================== */

    // const weeklyData = [
    //   {
    //     year: 2025,
    //     saleCode: "52",
    //     dollarRate: 295,
    //     data: {
    //       "High Grown": { qty: 880000, avg: 1100.5 },
    //       "Medium Grown": { qty: 720000, avg: 950.2 },
    //       "Low Grown": { qty: 2800000, avg: 1180.4 }
    //     }
    //   },
    //   {
    //     year: 2026,
    //     saleCode: "01",
    //     dollarRate: 300,
    //     data: {
    //       "High Grown": { qty: 934731, avg: 1175.83 },
    //       "Medium Grown": { qty: 767987, avg: 996.88 },
    //       "Low Grown": { qty: 3094466, avg: 1217.03 }
    //     }
    //   },
    //   {
    //     year: 2026,
    //     saleCode: "02",
    //     dollarRate: 305,
    //     data: {
    //       "High Grown": { qty: 910500, avg: 1140.45 },
    //       "Medium Grown": { qty: 750300, avg: 980.22 },
    //       "Low Grown": { qty: 2987400, avg: 1195.1 }
    //     }
    //   }
    // ];

  /* ===============================
     STATES
  =============================== */

    const currentYear = new Date().getFullYear();
    const currentWeek = String(new Date().getWeek?.() || 8).padStart(2, "0"); 
    // fallback 08 if getWeek not available

    const [year, setYear] = useState(null);
    const [saleCode, setSaleCode] = useState(null);

    const [displayData, setDisplayData] = useState(null);
    const [noData, setNoData] = useState(false);

    const [showYear, setShowYear] = useState(false);
    const [showSale, setShowSale] = useState(false);
    const [weeklyData, setWeeklyData] = useState([]);

    /* ===============================
      YEAR LIST (Current → 2022)
    =============================== */

    const yearList = useMemo(() => {
      const list = [];
      for (let y = currentYear; y >= 2022; y--) {
        list.push(y);
      }
      return list;
    }, [currentYear]);

    /* ===============================
      SALE CODE LIST (01–52)
    =============================== */

    const saleCodes = useMemo(() => {
      return Array.from({ length: 52 }, (_, i) =>
        String(i + 1).padStart(2, "0")
      );
    }, []);

    /* ===============================
      DEFAULT LOAD → LATEST RECORD
    =============================== */

    useEffect(() => {

      axios.get("http://localhost:3000/api/admin/weekly-sold-quantity")
          .then((response) => {

              const formattedData = response.data.map((item) => ({

                  year: item.year,

                  saleCode: String(item.saleCode).padStart(2, "0"),

                  dollarRate: item.dollarRate,

                  data: {

                      "High Grown": {
                          qty: item.highGrownQty,
                          avg: item.highGrownAvg
                      },

                      "Medium Grown": {
                          qty: item.mediumGrownQty,
                          avg: item.mediumGrownAvg
                      },

                      "Low Grown": {
                          qty: item.lowGrownQty,
                          avg: item.lowGrownAvg
                      }

                  }

              }));

              setWeeklyData(formattedData);

              if (formattedData.length > 0) {

                  const latest = formattedData[0];

                  setDisplayData(latest);

                  setYear(latest.year);

                  setSaleCode(latest.saleCode);

              }

          })
          .catch((error) => {

              console.log("Error fetching weekly data:", error);

          });

    }, []);

    /* ===============================
      SEARCH FUNCTION
    =============================== */

    const handleSearch = () => {
      if (!year || !saleCode) return;

      const found = weeklyData.find(
        item => item.year === year && item.saleCode === saleCode
      );

      if (found) {
        setDisplayData(found);
        setNoData(false);
      } else {
        setDisplayData(null);
        setNoData(true);
      }
    };

    const resetToDefault = () => {
      const latest = weeklyData[weeklyData.length - 1];
      setDisplayData(latest);
      setYear(latest.year);
      setSaleCode(latest.saleCode);
      setNoData(false);
    };

    /* ===============================
      CALCULATIONS
    =============================== */

    const types = displayData ? Object.keys(displayData.data) : [];

    const totalQty = displayData
      ? types.reduce((sum, t) => sum + displayData.data[t].qty, 0)
      : 0;

    const finalAvg = displayData
      ? types.reduce((sum, t) => sum + displayData.data[t].avg, 0) / types.length
      : 0;

    return (
      <div>

                <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                  {/* HEADER (ABOVE VIDEO) */}
                  <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                      <Header />
                  </div>


                  {/* BACKGROUND VIDEO */}
                  <video
                      src="/video/weeklysoldquantity&averages.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover z-0"
                  />

                  {/* OPTIONAL DARK OVERLAY (for text readability) */}
                  <div className="absolute inset-0 bg-black/20 z-10"></div>

              </div>

        {/* MAIN SECTION */}
        <div className="min-h-screen bg-gray-200 text-white pt-10 px-7">

          {/* FILTER SECTION */}
          <div className="flex justify-center gap-3 lg:gap-6 lg:mb-10 lg:mt-20">
            <div className=" gap-3 flex flex-col">
              <p className="font-semibold text-[12px] lg:text-[17px] text-gray-900 bottom-4 lg:bottom-10 ml-3">
                  ◪ Select year
              </p>
              {/* YEAR SELECT */}
              <div className="relative">
                <button
                  onClick={() => setShowYear(!showYear)}
                  className="bg-[#111a33] px-2 lg:px-8 py-0.5 lg:py-3 rounded-full border border-gray-600 w-15 lg:w-48 text-left text-[12px] lg:text-[16px] text-cyan-400 font-bold"
                >
                  {year ? `${year}` : "Select Year"}
                </button>

                {showYear && (
                  <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[70px] lg:w-full text-[12px] lg:text-[16px] rounded shadow-lg z-50">
                    {yearList.map(y => (
                      <div
                        key={y}
                        onClick={() => {
                          setYear(y);
                          setShowYear(false);
                        }}
                        className="p-2 hover:bg-[#848ba1] cursor-pointer hover:rounded-full"
                      >
                        {y === currentYear && <span className="text-cyan-400">● </span>}
                        {y}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className=" gap-3 flex flex-col"> 
              <p className="font-semibold text-[12px] lg:text-[17px] text-gray-900 bottom-4 lg:bottom-10 ml-3">
                  ◪ Select Sale Code
              </p>
              {/* SALE CODE SELECT */}
              <div className="relative">
                <button
                  onClick={() => setShowSale(!showSale)}
                  className="bg-[#111a33] px-2 lg:px-8 py-0.5 lg:py-3 rounded-full border border-gray-600 w-15 lg:w-48 text-left text-[12px] lg:text-[16px] text-cyan-400 font-bold"
                >
                  {saleCode ? `Sale ${saleCode}` : "Select Sale Code"}
                </button>

                {showSale && (
                  <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[70px] lg:w-full rounded shadow-lg z-50 max-h-60 overflow-y-scroll text-[12px] lg:text-[16px]">
                    {saleCodes.map(code => (
                      <div
                        key={code}
                        onClick={() => {
                          setSaleCode(code);
                          setShowSale(false);
                        }}
                        className="p-2 hover:bg-[#848ba1] cursor-pointer hover:rounded-full"
                      >
                        {code === saleCode && <span className="text-cyan-400">● </span>}
                        Sale {code}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className=" gap-3 flex flex-col"> 
              <p className="font-semibold text-[12px] lg:text-[17px] text-gray-900 bottom-4 lg:bottom-10 ml-3">
                                    
              </p>
              <button
                onClick={handleSearch}
                className="bg-green-500/35 border-2 text-green-800 border-black hover:text-black px-2 lg:px-8 py-0.5 lg:py-3 text-[12px] lg:text-[16px] rounded-full font-bold ml-15 mt-6"
              >
                Search
              </button>
            </div>
          </div>

          {/* ERROR BUTTON */}
          {noData && (
            <div className="text-center mt-40">

              <div className="text-red-600 text-2xl font-bold font-mono">No data found for selected Year & Sale Code</div>
              <button
                onClick={resetToDefault}
                className="bg-red-600 text-white px-8 py-2 rounded font-bold shadow-lg mt-10"
              >
                Click to Reset
              </button>
            </div>
          )}

          {/* SUBTITLE */}
          {displayData && (
            <h3 className="text-2xl lg:text-3xl mb-15 text-green-950 font-bold text-center lg:text-left lg:pt-[30px] lg:pl-20 flex font-serif gap-2">
              The Statistics of Sale <div className="font-bold text-red-500">{displayData.saleCode}</div> in year <div className="font-bold text-green-900">{displayData.year}</div>
            </h3>
          )}

          {/* TABLE */}
          {displayData && (
            <div className="flex lg:w-full rounded-2xl pt-20">
              <table className="w-full text-sm bg-[#111a33] mr-[150px] ml-[150px] mb-[150px]">
                <thead>
                  <tr className="bg-[#0f172a] text-green-400 border-b border-gray-600">
                    <th className="py-5 px-4 text-left text-[14px] lg:text-[20px]">Elv</th>
                    <th className="text-center px-2 text-[14px] lg:text-[20px]">Qty (kgs)</th>
                    <th className="text-center px-2 text-[14px] lg:text-[20px]">Avg</th>
                    <th className="text-center px-2 text-[14px] lg:text-[20px]">$ Value</th>
                  </tr>
                </thead>

                <tbody>
                  {types.map(type => {
                    const { qty, avg } = displayData.data[type];
                    const dollarValue = avg / displayData.dollarRate;

                    return (
                      <tr key={type} className="border-b border-gray-700 hover:bg-[#121933]">
                        <td className="py-3 px-4 text-[12px] lg:text-[18px]">{type}</td>
                        <td className="text-center text-[11px] lg:text-[18px]">{qty.toLocaleString()}</td>
                        <td className="text-center text-[11px] lg:text-[18px]">{avg.toFixed(2)}</td>
                        <td className="text-center text-cyan-400 font-semibold text-[12px] lg:text-[18px]">
                          {dollarValue.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}

                  <tr className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold">
                    <td className="py-3 px-4 text-[14px] lg:text-[18px]">Total</td>
                    <td className="text-center text-cyan-400 text-[11px] lg:text-[18px]">{totalQty.toLocaleString()}</td>
                    <td className="text-center text-cyan-400 text-[11px] lg:text-[18px]">{finalAvg.toFixed(2)}</td>
                    <td className="text-center text-cyan-400 text-[11px] lg:text-[18px]">
                      {(finalAvg / displayData.dollarRate).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

        </div>

        <Footer />
        <BackToTop />
      </div>
    );
  }