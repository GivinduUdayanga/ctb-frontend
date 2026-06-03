import Header from "../components/header";
import Footer from "../components/footer.jsx"; 
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import BackToTop from "../components/backtotop.jsx";

export default function ExportCountry_Wise() {


  const currentYear = new Date().getFullYear();
  const [exportData, setExportData] = useState([]);

  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const [noData, setNoData] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [showMonth, setShowMonth] = useState(false);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

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


    useEffect(() => {

      axios.get("http://localhost:3000/api/admin/export-country-wise")
        .then((response) => {

          const formattedData = response.data.map((item) => ({

            year: item.year,

            month: new Date(item.month).toLocaleString("default", {
              month: "long"
            }),

            countries: {

              Iraq: item.iraqQty,
              Russia: item.russiaQty,
              Turkey: item.turkeyQty,
              Libya: item.libyaQty,
              "U.A.E.": item.uaeQty,
              Chile: item.chileQty,
              China: item.chinaQty,
              Iran: item.iranQty,
              Azerbaijan: item.azerbaijanQty,
              "Saudi Arabia": item.saudiArabiaQty,
              Syria: item.syriaQty,
              Germany: item.germanyQty,
              "U.S.A.": item.usaQty,
              Japan: item.japanQty,
              Jordan: item.jordanQty,
              Taiwan: item.taiwanQty,
              Poland: item.polandQty,
              "Hong Kong": item.hongKongQty,
              Belgium: item.belgiumQty,
              Kuwait: item.kuwaitQty,
              Tunisia: item.tunisiaQty,
              "Netherlands (Holand)": item.netherlandsHolandQty,
              Ireland: item.irelandQty,
              Australia: item.australiaQty,
              Egypt: item.egyptQty,
              Lebanon: item.lebanonQty,
              Ukraine: item.ukraineQty,
              Israel: item.israelQty,
              Guinea: item.guineaQty,
              "U.K.": item.ukQty,
              Other: item.otherQty
            }

          }));

          setExportData(formattedData);

        })
        .catch((error) => {

          console.log("Error fetching export country-wise data:", error);

        });

    }, []);

  /* ===============================
     FIND LATEST RECORD
  =============================== */

  const latestRecord = exportData.reduce((latest, current) => {

    if (!latest) return current;

    if (current.year > latest.year) return current;

    if (current.year === latest.year) {

      const currentIndex = months.indexOf(current.month);
      const latestIndex = months.indexOf(latest.month);

      if (currentIndex > latestIndex) {
        return current;
      }
    }

    return latest;

  }, null);
  const latestYear = latestRecord?.year;
  const latestMonth = latestRecord?.month;

  /* ===============================
     DEFAULT LOAD
  =============================== */

  useEffect(() => {
    if (latestRecord) {
      setDisplayData(latestRecord);
      setYear(latestRecord.year);
      setMonth(latestRecord.month);
    }
  }, [latestRecord]);

  /* ===============================
     SEARCH FUNCTION
  =============================== */

  const handleSearch = () => {
    if (!year || !month) return;

    const found = exportData.find(
      item =>
        Number(item.year) === Number(year) &&
        item.month === month
    );

    if (found) {
      setDisplayData(found);
      setNoData(false);
    } else {
      setDisplayData(null);
      setNoData(true);
    }
  };

  /* ===============================
     RESET FUNCTION
  =============================== */

  const resetToDefault = () => {
    if (latestRecord) {
      setDisplayData(latestRecord);
      setYear(latestRecord.year);
      setMonth(latestRecord.month);
      setNoData(false);
    }
  };

  /* ===============================
     TABLE DATA
  =============================== */

  const countryEntries = displayData
    ? Object.entries(displayData.countries)
    : [];

  const totalQty = countryEntries.reduce(
    (sum, [, qty]) => sum + qty,
    0
  );

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
                    src="/video/exportscountry-wise.mp4"
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
      <div className="min-h-screen bg-gray-200 text-white p-10">

        {/* FILTER */}
        <div className="flex justify-center gap-6 mb-12 mt-10">


          <div className=" gap-3 flex flex-col">
            <p className="font-semibold text-[12px] lg:text-[17px] text-gray-900 bottom-4 lg:bottom-10 ml-3">
                ◪ Select year
            </p>
            {/* YEAR SELECT */}
            <div className="relative">
              <button
                onClick={() => setShowYear(!showYear)}
                className="bg-[#111a33] px-2 lg:px-8 py-0 lg:py-3 rounded-full border border-gray-600 lg:w-48 text-left text-cyan-400 font-bold text-[12px] lg:text-[17px]"
              > 
                {year || "Select Year"}
              </button>

              {showYear && (
                <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[70px] lg:w-full rounded shadow-lg z-50 max-h-60 overflow-y-scroll hide-scrollbar">
                  {yearList.map(y => (
                    <div
                      key={y}
                      onClick={() => { setYear(y); setShowYear(false); }}
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
                className="bg-[#111a33] px-2 lg:px-8 py-0 lg:py-3 rounded-full border border-gray-600 lg:w-48 text-left text-cyan-400 font-bold text-[12px] lg:text-[17px]"
              >
                {month || "Select Month"}
              </button>

              {showMonth && (
                <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[90px] lg:w-full rounded shadow-lg z-50 max-h-60 overflow-y-scroll hide-scrollbar">
                  {months.map(m => (
                    <div
                      key={m}
                      onClick={() => { setMonth(m); setShowMonth(false); }}
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
            {/* SEARCH BUTTON */}
            <button
              onClick={handleSearch}
              className="bg-green-500/35 border-2 text-green-800 border-black hover:text-black px-2 lg:px-8 py-0 lg:py-3 text-[12px] lg:text-[17px] rounded-full font-bold ml-15 mt-6"
            >
              Search
            </button>
          </div>
        </div>

        {/* SUBTITLE */}
        {displayData && (
          <h3 className="text-2xl lg:text-4xl mt-20 flex text-green-950 font-bold lg:text-left font-serif lg:pl-32 gap-3">
            The statistics of <div className="font-bold text-red-500">{month}</div> in year <div className="font-bold text-green-900">{year}</div>
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

        {/* TABLE */}
        {displayData && (
          <div className="overflow-x-auto rounded-xl shadow-2xl w-full max-w-[900px] flex justify-center mx-auto mt-16">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0f172a] text-green-400 border-b border-gray-600">
                  <th className="py-4 px-6 text-center text-lg ">Country</th>
                  <th className="py-4 text-center text-lg">Qty (kgs)</th>
                </tr>
              </thead>

              <tbody>
                {countryEntries.map(([country, qty]) => (
                  <tr
                    key={country}
                    className="border-b bg-[#111a33] border-gray-700 hover:bg-[#121933]"
                  >
                    <td className="py-3 px-6 text-center w-[50%] text-[12px] lg:text-[17px]">{country}</td>
                    <td className="text-center text-[12px] lg:text-[17px]">{qty.toLocaleString()}</td>
                  </tr>
                ))}

                <tr className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-bold">
                  <td className="py-3 px-6 text-center text-[17px] lg:text-[17px]">Total</td>
                  <td className="text-center text-cyan-400 text-xl text-[15px] lg:text-[17px]">{totalQty.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="text-[14px] lg:text-lg text-gray-700 mt-10 italic lg:text-left text-center lg:pl-80">
          *source - SRI LANKA CUSTOMS
        </div>
      </div>

      <Footer />

      <BackToTop />
      
    </div>
  );
}