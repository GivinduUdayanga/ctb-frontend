import Header from "../components/header";
import WebsiteStats from "../components/websiteStats.jsx";
import axios from "axios";
import Footer from "../components/footer.jsx"; 
import { useEffect, useState } from "react";
import SalesBarChart from "../components/SalesBarChart";
import { motion } from "framer-motion";
import BackToTop from "../components/backtotop.jsx";



export default  function WeeklySalesAverages() {

    const [year, setYear] = useState(null);
    const [saleCode, setSaleCode] = useState(null);
    const [currentWeek, setCurrentWeek] = useState(null);
    const [lastWeek, setLastWeek] = useState(null);
    const [allSalesData, setAllSalesData] = useState([]);;
    const [showYear, setShowYear] = useState(false);
    const [showSale, setShowSale] = useState(false);
    const [noData, setNoData] = useState(false);


    const formatDate = (dateStr) =>
        new Date(dateStr).toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "long",
                year: "numeric",
            }
        );


    const yearList = [
        ...new Set(
            allSalesData.map((item) => item.year)
        ),
    ].sort((a, b) => b - a);

    const saleCodes = [
        ...new Set(
            allSalesData.map((item) =>
                String(item.saleCode).padStart(2, "0")
            )
        ),
    ].sort((a, b) => a.localeCompare(b));




    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/weekly-sales-averages")
            .then((response) => {

                setAllSalesData(response.data);

            })
            .catch((error) => {

                console.log("Error fetching weekly sales averages:", error);

            });

    }, []);

    

    useEffect(() => {

        if (allSalesData.length > 0) {

            // Latest item in sorted array
            const latestItem = allSalesData[allSalesData.length - 1];

            setYear(latestItem.year);
            setSaleCode(String(latestItem.saleCode));
        }

    }, [allSalesData]);


    
    useEffect(() => {

        const current = allSalesData.find(
            item =>
                Number(item.year) === Number(year) &&
                Number(item.saleCode) === Number(saleCode)
        );
        

        if (current) {

            setCurrentWeek(current);

        }

    }, [year, saleCode, allSalesData]);

    useEffect(() => {

        if (!currentWeek) return;

        const currentIndex = allSalesData.findIndex(
            item =>
                Number(item.year) === Number(currentWeek.year) &&
                Number(item.saleCode) === Number(currentWeek.saleCode)
        );

        if (currentIndex > 0) {

            setLastWeek(allSalesData[currentIndex - 1]);

        }

    }, [currentWeek, allSalesData]);

    

    const handleSearch = () => {

        const found = allSalesData.find(
            item =>
                Number(item.year) === Number(year) &&
                String(item.saleCode).padStart(2, "0") === saleCode
        );

        if (found) {

            setCurrentWeek(found);
            setNoData(false);

        } 
        
        else {

            setCurrentWeek(null);
            setLastWeek(null);
            setNoData(true);

        }

    };


    return  (
        <div className="w-full flex-col min-h-screen items-center bg-white">


            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>


                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/weeklysalesaverages.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* OPTIONAL DARK OVERLAY (for text readability) */}
                <div className="absolute inset-0 bg-black/20 z-10"></div>

            </div>

                    <div className="flex w-[250px] lg:w-full text-center items-center justify-center text-2xl md:text-3xl lg:text-5xl font-semibold font-serif ml-15.5 lg:ml-0 pt-5 pb-5 lg:pt-15 lg:pb-15 mt-20">
                        _________ Weekly Sales Averages _________
                    </div>

                    {/* FILTER SECTION */}
                    <div className="flex justify-center gap-3 lg:gap-6 lg:mb-10 lg:mt-20 mt-10">
                        
                        <div className=" gap-3 flex flex-col">
                            <p className="font-semibold text-[12px] lg:text-[17px] text-gray-900 bottom-4 lg:bottom-10 ml-3">
                                ◪ Select year
                            </p>
                            {/* YEAR SELECT */}
                            <div className="relative">

                                <button
                                    onClick={() => setShowYear(!showYear)}
                                    className="bg-[#111a33] px-2 lg:px-8 py-0.5 lg:py-3 rounded-full border border-gray-600 w-20 lg:w-48 text-left text-[12px] lg:text-[16px] text-cyan-400 font-bold"
                                >
                                    {year || "Year"}
                                </button>

                                {showYear && (

                                    <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[80px] lg:w-full text-white text-[12px] lg:text-[16px] shadow-lg z-50 font-semibold">

                                        {yearList.map((y) => (

                                            <div
                                                key={y}
                                                onClick={() => {

                                                    setYear(y);
                                                    setShowYear(false);

                                                }}
                                                className="p-2 hover:bg-[#848ba1] cursor-pointer  hover:rounded-full"
                                            >
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
                                    className="bg-[#111a33] px-2 lg:px-8 py-0.5 lg:py-3 rounded-full border border-gray-600 w-24 lg:w-48 text-left text-[12px] lg:text-[16px] text-cyan-400 font-bold"
                                >
                                    {saleCode ? `Sale ${saleCode}` : "Sale"}
                                </button>

                                {showSale && (

                                    <div className="absolute bg-[#374052] border border-gray-600 mt-1 w-[90px] lg:w-full shadow-lg z-50 max-h-60 overflow-y-scroll text-[12px] lg:text-[16px] text-white font-semibold">

                                        {saleCodes.map((code) => (

                                            <div
                                                key={code}
                                                onClick={() => {

                                                    setSaleCode(code);
                                                    setShowSale(false);

                                                }}
                                                className="p-2 hover:bg-[#848ba1] cursor-pointer hover:rounded-full"
                                            >
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
                            {/* SEARCH BUTTON */}
                            <button
                                onClick={handleSearch}
                                className="bg-green-500/35 border-2 text-green-800 border-black hover:text-black px-3 lg:px-8 py-0.5 lg:py-3 text-[12px] lg:text-[16px] rounded-full font-bold mt-6"
                            >
                                Search
                            </button>
                        </div>

                    </div>

                    <div className="w-[300px] ml-9 lg:ml-0 lg:w-full flex flex-col items-center justify-center pt-5">
                        
                    </div>


                    


                    {noData && (

                        <div className="text-center mt-20">

                            <div className="text-red-600 text-xl lg:text-2xl font-bold font-mono">
                                No data found for selected Year & Sale Code
                            </div>

                        </div>

                    )}

                    
                    {/* TABLE */}
                    {currentWeek && lastWeek && (

                    <div className="w-[320px] lg:w-full  ml-2 text-green-950 p-4 lg:p-6 rounded-lg mb-20">

                        {/* Title */}
                        <div className="flex justify-between items-center mb-4"> 

                            <h2 className="w-[200px] lg:w-auto text-left text-[20px] md:text-[25px] lg:text-4xl font-serif tracking-wide flex pb-10 pt-5 px-10 gap-2">
                                The Statistics of Sales Number <div className="font-bold text-red-500">{currentWeek.saleCode}</div> in <div className="font-bold text-green-900">{currentWeek.year}</div>
                            </h2>

                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto lg:mx-[130px] lg:p-[20px] bg-[#0b1020] text-white border-[1px] flex justify-center rounded-2xl">

                            <table className="w-full border-collapse">

                                <thead>

                                    <tr className="border-b border-gray-600">

                                        <th className="text-left py-3 px-2 lg:pl-20 text-[13px] lg:text-[24px]">
                                            Statistics Types
                                        </th>

                                        <th className="text-center py-3 px-2 text-[13px] lg:text-[20px] text-green-500">
                                            Sales of {formatDate(lastWeek.saleWeek)}
                                        </th>

                                        <th className="text-center py-3 px-2 text-[13px] lg:text-[20px] text-green-500">
                                            Sales of {formatDate(currentWeek.saleWeek)}
                                        </th>

                                        <th className="text-center py-3 px-2 text-[13px] lg:text-[20px]">
                                            Variance
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {Object.keys(currentWeek.stats).map((type) => {

                                        const lastValue = lastWeek.stats[type];

                                        const currentValue = currentWeek.stats[type];

                                        const variance = currentValue - lastValue;

                                        return (

                                            <tr
                                                key={type}
                                                className="border-b border-gray-700 hover:bg-[#121933]"
                                            >

                                                <td className="py-3 px-2 font-medium pl-4 lg:pl-10 text-[10px] lg:text-[17px]">
                                                    {type}
                                                </td>

                                                <td className="text-center py-3 px-2 text-[13px] lg:text-[17px]">
                                                    {lastValue.toFixed(2)}
                                                </td>

                                                <td className="text-center py-3 px-2 text-cyan-400 font-semibold text-[13px] lg:text-[17px]">
                                                    {currentValue.toFixed(2)}
                                                </td>

                                                <td
                                                    className={`text-center py-3 text-[13px] lg:text-[18px] px-2 font-semibold ${
                                                        variance >= 0
                                                            ? "text-green-400"
                                                            : "text-red-400"
                                                    }`}
                                                >
                                                    {variance.toFixed(2)}
                                                </td>

                                            </tr>

                                        );

                                    })}

                                </tbody>

                            </table>

                        </div>

                    </div>

                    )}
        
        
                    
                    <div className="">
                        <Footer/>
                    </div>
                    
                    
                    <BackToTop />
                    
                </div>
    )
}