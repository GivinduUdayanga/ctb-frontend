import Header from "../components/header";
import Footer from "../components/footer.jsx";
import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import BackToTop from "../components/backtotop.jsx";

export default function MonthlyProduction() {

  /* ===============================
     SIMULATED DATABASE
  =============================== */

  // const productionData = [
  //   {
  //       year: 2025,
  //       month: "October",
  //       categories: {
  //           ORTHODOX: {
  //           High: { month: 3728400, ytd: 42048210 },
  //           Medium: { month: 2489200, ytd: 32015640 },
  //           Low: { month: 1153200, ytd: 8754460 }
  //           },
  //           CTC: {
  //           High: { month: 438720, ytd: 4321180 },
  //           Medium: { month: 76540, ytd: 742350 },
  //           Low: { month: 81230, ytd: 13268420 }
  //           },
  //           "GREEN TEA": {
  //           High: { month: 94560, ytd: 1098450 },
  //           Medium: { month: 70240, ytd: 912380 },
  //           Low: { month: 870, ytd: 6980 }
  //           },
  //           "Total Tea Production": {
  //           High: { month: 4261680, ytd: 47467640 },
  //           Medium: { month: 2635980, ytd: 41670430 },
  //           Low: { month: 1235300, ytd: 14829760 }
  //           }
  //       }
  //   },
  //   {
  //       year: 2025,
  //       month: "November",
  //       categories: {
  //           ORTHODOX: {
  //           High: { month: 3897250, ytd: 45945460 },
  //           Medium: { month: 2598740, ytd: 34614380 },
  //           Low: { month: 1196400, ytd: 9950860 }
  //           },
  //           CTC: {
  //           High: { month: 462580, ytd: 4783760 },
  //           Medium: { month: 79860, ytd: 822210 },
  //           Low: { month: 84560, ytd: 14113980 }
  //           },
  //           "GREEN TEA": {
  //           High: { month: 100120, ytd: 1198570 },
  //           Medium: { month: 82450, ytd: 994830 },
  //           Low: { month: 960, ytd: 7940 }
  //           },
  //           "Total Tea Production": {
  //           High: { month: 4459950, ytd: 51927600 },
  //           Medium: { month: 2761050, ytd: 44431480 },
  //           Low: { month: 1281920, ytd: 16111680 }
  //           }
  //       }
  //   }, 
  //   {
  //       year: 2025,
  //       month: "December",
  //       categories: {
  //           ORTHODOX: {
  //           High: { month: 4028378, ytd: 49937731 },
  //           Medium: { month: 2678120, ytd: 37907808 },
  //           Low: { month: 1225977, ytd: 10380441 }
  //           },
  //           CTC: {
  //           High: { month: 485599, ytd: 5193917 },
  //           Medium: { month: 86005, ytd: 913597 },
  //           Low: { month: 86865, ytd: 14923784 }
  //           },
  //           "GREEN TEA": {
  //           High: { month: 106728, ytd: 1273255 },
  //           Medium: { month: 88968, ytd: 1053943 },
  //           Low: { month: 1014, ytd: 8379 }
  //           },
  //           "Total Tea Production": {
  //           High: { month: 4620705, ytd: 56404902 },
  //           Medium: { month: 2863105, ytd: 48094618 },
  //           Low: { month: 1312971, ytd: 159620603 }
  //           }
  //       }
  //   },
  //   {
  //       year: 2026,
  //       month: "January",
  //       categories: {
  //           ORTHODOX: {
  //           High: { month: 3856120, ytd: 3856120 },
  //           Medium: { month: 2514780, ytd: 2514780 },
  //           Low: { month: 1189640, ytd: 1189640 }
  //           },
  //           CTC: {
  //           High: { month: 462310, ytd: 462310 },
  //           Medium: { month: 80540, ytd: 80540 },
  //           Low: { month: 79210, ytd: 79210 }
  //           },
  //           "GREEN TEA": {
  //           High: { month: 98450, ytd: 98450 },
  //           Medium: { month: 75480, ytd: 75480 },
  //           Low: { month: 890, ytd: 890 }
  //           },
  //           "Total Tea Production": {
  //           High: { month: 4416880, ytd: 4416880 },
  //           Medium: { month: 2670800, ytd: 2670800 },
  //           Low: { month: 1269740, ytd: 1269740 }
  //           }
  //       }
  //   },

  //   {
  //       year: 2026,
  //       month: "February",
  //       categories: {
  //           ORTHODOX: {
  //           High: { month: 3984500, ytd: 7840620 },
  //           Medium: { month: 2632200, ytd: 5146980 },
  //           Low: { month: 1218700, ytd: 2408340 }
  //           },
  //           CTC: {
  //           High: { month: 478920, ytd: 941230 },
  //           Medium: { month: 84210, ytd: 164750 },
  //           Low: { month: 83540, ytd: 162750 }
  //           },
  //           "GREEN TEA": {
  //           High: { month: 102340, ytd: 200790 },
  //           Medium: { month: 81260, ytd: 156740 },
  //           Low: { month: 940, ytd: 1830 }
  //           },
  //           "Total Tea Production": {
  //           High: { month: 4565760, ytd: 8982640 },
  //           Medium: { month: 2797670, ytd: 5468470 },
  //           Low: { month: 1303180, ytd: 2572920 }
  //           }
  //       }
  //   },
            
    
  // ];


  const [productionData, setProductionData] = useState([]);

  /* ===============================
     MONTH ORDER
  =============================== */

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];


  useEffect(() => {

      axios.get("http://localhost:3000/api/admin/monthly-production")
          .then((response) => {

              const formattedData = response.data.map((item) => ({

                  year: item.year,

                  month: new Date(item.month).toLocaleString("default", {
                      month: "long"
                  }),

                  categories: {

                      ORTHODOX: {
                          High: {
                              month: item.orthodoxHighMonth,
                              ytd: item.orthodoxHighYtd
                          },
                          Medium: {
                              month: item.orthodoxMediumMonth,
                              ytd: item.orthodoxMediumYtd
                          },
                          Low: {
                              month: item.orthodoxLowMonth,
                              ytd: item.orthodoxLowYtd
                          }
                      },

                      CTC: {
                          High: {
                              month: item.ctcHighMonth,
                              ytd: item.ctcHighYtd
                          },
                          Medium: {
                              month: item.ctcMediumMonth,
                              ytd: item.ctcMediumYtd
                          },
                          Low: {
                              month: item.ctcLowMonth,
                              ytd: item.ctcLowYtd
                          }
                      },

                      "GREEN TEA": {
                          High: {
                              month: item.greenTeaHighMonth,
                              ytd: item.greenTeaHighYtd
                          },
                          Medium: {
                              month: item.greenTeaMediumMonth,
                              ytd: item.greenTeaMediumYtd
                          },
                          Low: {
                              month: item.greenTeaLowMonth,
                              ytd: item.greenTeaLowYtd
                          }
                      },

                      "Total Tea Production": {
                          High: {
                              month: item.totalTeaProductionHighMonth,
                              ytd: item.totalTeaProductionHighYtd
                          },
                          Medium: {
                              month: item.totalTeaProductionMediumMonth,
                              ytd: item.totalTeaProductionMediumYtd
                          },
                          Low: {
                              month: item.totalTeaProductionLowMonth,
                              ytd: item.totalTeaProductionLowYtd
                          }
                      }
                  }

              }));

              setProductionData(formattedData);

          })
          .catch((error) => {
              console.log("Error fetching production data:", error);
          });

  }, []);



  /* ===============================
     FIND LATEST RECORD (DYNAMIC)
  =============================== */

  const latestRecord = productionData.reduce((latest, current) => {

    if (!latest) return current;

    if (current.year > latest.year) return current;

    if (current.year === latest.year) {
      const currentIndex = months.indexOf(current.month);
      const latestIndex = months.indexOf(latest.month);
      if (currentIndex > latestIndex) return current;
    }

    return latest;

  }, null);

  const latestYear = latestRecord?.year;
  const latestMonth = latestRecord?.month;

  /* ===============================
     STATES
  =============================== */

  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const [noData, setNoData] = useState(false);

  const [showYear, setShowYear] = useState(false);
  const [showMonth, setShowMonth] = useState(false);

  /* ===============================
     YEAR LIST (ONLY YEARS WITH DATA)
  =============================== */

  const yearList = useMemo(() => {
    const years = [...new Set(productionData.map(item => item.year))];
    return years.sort((a, b) => b - a);
  }, [productionData]);

  /* ===============================
     DEFAULT LOAD → LATEST RECORD
  =============================== */

  useEffect(() => {
    if (latestRecord) {
      setDisplayData(latestRecord);
      setYear(latestRecord.year);
      setMonth(latestRecord.month);
    }
  }, [latestRecord]);

  /* ===============================
     SEARCH
  =============================== */

  const handleSearch = () => {
    if (!year || !month) return;

    const found = productionData.find(
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
    const latestR = latestRecord;
    setDisplayData(latestR);
    setYear(latestR.year);
    setMonth(latestR.month);
    setNoData(false);
  };

  /* ===============================
     TABLE BLOCK COMPONENT
  =============================== */

  const TableBlock = ({ title, data }) => {

    const types = ["High","Medium","Low"];

    const monthTotal = types.reduce(
      (sum, type) => sum + data[type].month, 0
    );

    const ytdTotal = types.reduce(
      (sum, type) => sum + data[type].ytd, 0
    );

    return (
      <div className="bg-[#111a33] rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-[#1a2445] px-10 py-5 font-bold text-xl tracking-wide">
          {title}
        </div>

        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0f172a] text-green-400 border-b border-gray-600 text-[19px]">
              <th className="py-5 px-4 text-left"></th>
              <th className="text-center">Month</th>
              <th className="text-center px-1 lg:px-0">Year to Date</th>
            </tr>
          </thead>

          <tbody>
            {types.map(type => (
              <tr key={type} className="border-b border-gray-700 hover:bg-[#121933] text-[17px]">
                <td className="py-3 px-4">{type}</td>
                <td className="text-center text-[13px] lg:text-[14px]">{data[type].month.toLocaleString()}</td>
                <td className="text-center text-[13px] lg:text-[14px]">{data[type].ytd.toLocaleString()}</td>
              </tr>
            ))}

            <tr className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold text-[17px]">
              <td className="py-3 px-4">Total</td>
              <td className="text-center text-cyan-400 text-[13px] lg:text-[14px]">{monthTotal.toLocaleString()}</td>
              <td className="text-center text-cyan-400 text-[13px] lg:text-[14px]">{ytdTotal.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  /* ===============================
     RETURN
  =============================== */

  return (
    <div>

            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>

                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/monthlyproduction.mp4"
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
      <div className="min-h-screen text-white p-10 mt-20">

        {/* FILTER SECTION */}
        <div className="flex justify-center gap-6 mb-10">


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
                  <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[70px] lg:w-full rounded shadow-lg z-50 max-h-60 overflow-y-scroll hide-scrollbar">
                    {yearList.map(y => (
                      <div
                        key={y}
                        onClick={() => {
                          setYear(y);
                          setShowYear(false);
                        }}
                        className="p-2 hover:bg-[#848ba1] cursor-pointer text-[12px] lg:text-[17px] hover:rounded-full"
                      >
                        {y === latestYear && <span className="text-cyan-400">● </span>}
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
                        {m === latestMonth && <span className="text-cyan-400">● </span>}
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
                className="bg-green-500/35 border-2 text-green-800 border-black hover:text-black px-2 lg:px-8 py-0 lg:py-3 text-[12px] lg:text-[17px] rounded-full font-bold mt-6"
              >
                Search
              </button>
          </div>
        </div>

        {/* SUBTITLE */}
        {displayData && (
          <h3 className="text-2xl lg:text-4xl mb-10 flex text-green-950 font-bold font-serif text-center lg:text-left lg:pl-20 gap-2 mt-20">
            The Statistics of <div className="font-bold text-red-500">{displayData.month}</div> in year <div className="font-bold text-green-900">{displayData.year}</div>
          </h3>
        )}

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

        {/* TABLE GRID */}
        {displayData && (
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 lg:gap-20 my-20  px-2 lg:px-16">
            <TableBlock title="ORTHODOX" data={displayData.categories.ORTHODOX} />
            <TableBlock title="CTC" data={displayData.categories.CTC} />
            <TableBlock title="GREEN TEA" data={displayData.categories["GREEN TEA"]} />
            <TableBlock title="Total Tea Production" data={displayData.categories["Total Tea Production"]} />
          </div>
        )}

      </div>

      <Footer />
      <BackToTop />
    </div>

  );
}