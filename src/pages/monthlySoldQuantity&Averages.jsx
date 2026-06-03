import Header from "../components/header";
import Footer from "../components/footer.jsx";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import BackToTop from "../components/backtotop.jsx";

export default function MonthlySoldQuantity_Averages() {

  /* ===============================
     SIMULATED DATABASE
  =============================== */

  // const monthlyData = [
  //   {
  //     year: 2025,
  //     month: "December",
  //     dollarRate: 305,
  //     data: {
  //       "High Grown": { qty: 4200000, avg: 1150.22 },
  //       "Medium Grown": { qty: 3500000, avg: 1020.44 },
  //       "Low Grown": { qty: 11000000, avg: 1225.10 }
  //     }
  //   },
  //   {
  //     year: 2026,
  //     month: "January",
  //     dollarRate: 310,
  //     data: {
  //       "High Grown": { qty: 4383469, avg: 1178.68 },
  //       "Medium Grown": { qty: 3662300, avg: 1048.65 },
  //       "Low Grown": { qty: 11712678, avg: 1258.09 }
  //     }
  //   },
  //   {
  //     year: 2026,
  //     month: "February",
  //     dollarRate: 300,
  //     data: {
  //       "High Grown": { qty: 4384449, avg: 1170.68 },
  //       "Medium Grown": { qty: 3662400, avg: 1078.65 },
  //       "Low Grown": { qty: 11712578, avg: 1248.09 }
  //     }
  //   },
  //   {
  //     year: 2026,
  //     month: "March",
  //     dollarRate: 303,
  //     data: {
  //       "High Grown": { qty: 4384449, avg: 1170.68 },
  //       "Medium Grown": { qty: 3662400, avg: 1078.65 },
  //       "Low Grown": { qty: 11712578, avg: 1248.09 }
  //     }
  //   }
  // ];

  useEffect(() => {

    axios.get("http://localhost:3000/api/admin/monthly-sold-quantity")
        .then((response) => {

            const formattedData = response.data.map((item) => ({

                year: item.year,

                month: new Date(item.month).toLocaleString("default", {
                    month: "long"
                }),

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

            setMonthlyData(formattedData);

        })
        .catch((error) => {

            console.log("Error fetching monthly sold quantity:", error);

        });

  }, []);



  /* ===============================
     STATES
  =============================== */

  const currentYear = new Date().getFullYear();
  const [monthlyData, setMonthlyData] = useState([]);
  const currentMonthName = new Date().toLocaleString("default", { month: "long" });

  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const [noData, setNoData] = useState(false);

  const [showYear, setShowYear] = useState(false);
  const [showMonth, setShowMonth] = useState(false);

  /* ===============================
     YEAR LIST
  =============================== */

  const yearList = useMemo(() => {
    const list = [];
    for (let y = currentYear; y >= 2022; y--) {
      list.push(y);
    }
    return list;
  }, [currentYear]);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  /* ===============================
     DEFAULT LOAD → LATEST RECORD
  =============================== */

  useEffect(() => {
    if (monthlyData.length > 0) {
      const latest = monthlyData[monthlyData.length - 1];
      setDisplayData(latest);
      setYear(latest.year);
      setMonth(latest.month);
    }
  }, [monthlyData]);

  /* ===============================
     SEARCH
  =============================== */

  const handleSearch = () => {
    if (!year || !month) return;

    const found = monthlyData.find(
      item => item.year === year && item.month === month
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
    const latest = monthlyData[monthlyData.length - 1];
    setDisplayData(latest);
    setYear(latest.year);
    setMonth(latest.month);
    setNoData(false);
  };

  /* ===============================
     CALCULATIONS
  =============================== */

  const types = displayData ? Object.keys(displayData.data) : [];

  let totalQty = 0;
  let totalAvg = 0;

  types.forEach(type => {
    totalQty += displayData.data[type].qty;
    totalAvg += displayData.data[type].avg;
  });

  const finalAvg = types.length ? totalAvg / types.length : 0;

  const yearData = monthlyData.filter(m => m.year === displayData?.year);
  const ytdData = {};

  yearData.forEach(monthObj => {
    Object.entries(monthObj.data).forEach(([type, values]) => {
      if (!ytdData[type]) {
        ytdData[type] = { qty: 0, avgSum: 0, count: 0 };
      }
      ytdData[type].qty += values.qty;
      ytdData[type].avgSum += values.avg;
      ytdData[type].count += 1;
    });
  });

  let ytdTotalQty = 0;
  let ytdTotalAvg = 0;

  Object.values(ytdData).forEach(val => {
    ytdTotalQty += val.qty;
    ytdTotalAvg += val.avgSum / val.count;
  });

  const ytdFinalAvg = types.length ? ytdTotalAvg / types.length : 0;

  return (
    <div>

            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>

                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/monthlysoldquantity&averages.mp4"
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
      <div className="border min-h-screen bg-gray-200 text-white p-10">

        {/* FILTER SECTION */}
        <div className="flex justify-center gap-6 mb-12 lg:mt-20">


          <div className=" gap-3 flex flex-col">
              <p className="font-semibold text-[12px] lg:text-[17px] text-gray-900 bottom-4 lg:bottom-10 ml-3">
                  ◪ Select Year
              </p>
              {/* YEAR SELECT */}
              <div className="relative">
                <button
                  onClick={() => setShowYear(!showYear)}
                  className="bg-[#111a33] px-2 lg:px-8 py-0 lg:py-3 rounded-full border border-gray-600 lg:w-48 text-left text-cyan-400 font-bold text-[13px] lg:text-[17px]"
                >
                  {year || "Select Year"}
                </button>

                {showYear && (
                  <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[70px]  lg:w-full rounded shadow-lg z-50 max-h-60 overflow-y-scroll hide-scrollbar">
                    {yearList.map(y => (
                      <div
                        key={y}
                        onClick={() => {
                          setYear(y);
                          setShowYear(false);
                        }}
                        className="p-2 hover:bg-[#848ba1] cursor-pointer text-[12px] lg:text-[17px] hover:rounded-full"
                      >
                        {y === year && <span className="text-cyan-400">● </span>}
                        {y}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>



          <div className=" gap-3 flex flex-col">
              <p className="font-semibold text-[12px] lg:text-[17px] text-gray-900 bottom-4 lg:bottom-10 ml-3">
                  ◪ Select Month
              </p>
              {/* MONTH SELECT */}
              <div className="relative">
                <button
                  onClick={() => setShowMonth(!showMonth)}
                  className="bg-[#111a33] px-2 lg:px-8 py-0 lg:py-3 rounded-full border border-gray-600 lg:w-48 text-left text-cyan-400 font-bold text-[13px] lg:text-[17px]"
                >
                  {month || "Select Month"}
                </button>

                {showMonth && (
                  <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[90px]  lg:w-full rounded shadow-lg z-50 max-h-60 overflow-y-scroll hide-scrollbar">
                    {months.map(m => (
                      <div
                        key={m}
                        onClick={() => {
                          setMonth(m);
                          setShowMonth(false);
                        }}
                        className="p-2 hover:bg-[#848ba1] cursor-pointer text-[12px] lg:text-[17px] hover:rounded-full"
                      >
                        {m === month && <span className="text-cyan-400">● </span>}
                        {m}
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
                  className="bg-green-500/35 border-2 text-green-800 border-black hover:text-black px-2 lg:px-8 py-0 lg:py-3 text-[13px] lg:text-[17px] rounded-full font-bold mt-6"
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
          <h3 className="text-2xl lg:text-3xl mb-15 text-green-950 font-bold font-serif text-center flex lg:text-left mt-15 lg:mt-20 lg:pl-20 gap-2">
            The Statistics of <div className="font-bold text-red-500">{displayData.month}</div> in year <div className="font-bold text-green-900">{displayData.year}</div>
          </h3>
        )}

        {/* TABLE */}
        {displayData && (
          <div className="overflow-x-auto rounded-xl shadow-2xl mt-20 mx-20">

            <table className="w-full border-collapse">

              <thead>
                <tr className="bg-[#111a33] text-white border-b border-gray-600">
                  <th className="py-7 px-4"></th>
                  <th colSpan="3" className="text-center text-xl border-l border-gray-600">
                    {displayData.month}
                  </th>
                  <th colSpan="3" className="text-center text-xl border-l border-gray-600">
                    {displayData.year} To Date
                  </th>
                </tr>

                <tr className="bg-[#0f172a] text-green-400 border-b border-gray-600">
                  <th className="py-3 px-4 text-left">Elv</th>
                  <th className="text-center">Qty(kgs)</th>
                  <th className="text-center">Avg</th>
                  <th className="text-center">$ Value</th>
                  <th className="text-center">Qty(kgs)</th>
                  <th className="text-center">Avg</th>
                  <th className="text-center">$ Value</th>
                </tr>
              </thead>

              <tbody>
                {types.map(type => {

                  const monthQty = displayData.data[type].qty;
                  const monthAvg = displayData.data[type].avg;
                  const monthDollar = monthAvg / displayData.dollarRate;

                  const ytdQty = ytdData[type]?.qty || 0;
                  const ytdAvg = ytdData[type]
                    ? ytdData[type].avgSum / ytdData[type].count
                    : 0;
                  const ytdDollar = ytdAvg / displayData.dollarRate;

                  return (
                    <tr key={type} className="border-b border-gray-700 hover:bg-[#121933] bg-[#1b2641]">
                      <td className="py-3 px-4 border-r border-gray-600">{type}</td>
                      <td className="text-center">{monthQty.toLocaleString()}</td>
                      <td className="text-center">{monthAvg.toFixed(2)}</td>
                      <td className="text-center">{monthDollar.toFixed(2)}</td>
                      <td className="text-center border-l border-gray-600">{ytdQty.toLocaleString()}</td>
                      <td className="text-center">{ytdAvg.toFixed(2)}</td>
                      <td className="text-center">{ytdDollar.toFixed(2)}</td>
                    </tr>
                  );
                })}

                <tr className="bg-gradient-to-r from-gray-700 to-gray-600 text-cyan-400 font-bold">
                  <td className="py-3 px-4 text-white">Total</td>
                  <td className="text-center">{totalQty.toLocaleString()}</td>
                  <td className="text-center">{finalAvg.toFixed(2)}</td>
                  <td className="text-center">
                    {(finalAvg / displayData.dollarRate).toFixed(2)}
                  </td>
                  <td className="text-center">{ytdTotalQty.toLocaleString()}</td>
                  <td className="text-center">{ytdFinalAvg.toFixed(2)}</td>
                  <td className="text-center">
                    {(ytdFinalAvg / displayData.dollarRate).toFixed(2)}
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