import Header from "../components/header";
import Footer from "../components/footer.jsx"; 
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import axios from "axios";
import BackToTop from "../components/backtotop.jsx";


function formatMarketReportDate(startDate, endDate) {

    const start = new Date(startDate);
    const end = new Date(endDate);

    const startDay = start.getDate();
    const endDay = end.getDate();

    const month = end.toLocaleString(
        "default",
        { month: "long" }
    );

    const year = end.getFullYear();

    function getOrdinal(day) {

        if (day > 3 && day < 21) return day + "th";

        switch (day % 10) {

            case 1:
                return day + "st";

            case 2:
                return day + "nd";

            case 3:
                return day + "rd";

            default:
                return day + "th";

        }

    }

    return `${getOrdinal(startDay)} & ${getOrdinal(endDay)} ${month} ${year}`;
}


// const reports = [
//     {
//         id: 4,
//         title: "Interim Financial Statement",
//         date: "2023-06-30",
//         image: "/statement.webp",
//         pdf: "/reports/30th-June-2023.pdf",

//     },
//     {
//         id: 3,
//         title: "Interim Financial Statement",
//         date: "2023-03-31",
//         image: "/statement.webp",
//         pdf: "/reports/Interim-Financials-for-the-Quarter-Ended-31st-March-2023.pdf",

//     },
//     {
//         id: 2,
//         title: "Interim Financial Statement",
//         date: "2022-12-31",
//         image: "/statement.webp",
//         pdf: "/reports/Interim-Financials-for-the-Quarter-Ended-31st-December-2022.pdf",

//     },
//     {
//         id: 1,
//         title: "Interim Financial Statement",
//         date: "2022-09-30",
//         image: "/statement.webp",
//         pdf: "/reports/Publishing-FS-September-2022.pdf",

//     } 
    
// ];

// const overview = [
    
//     {
//         id: 4,
//         title: "Interim Financial Statement",
//         date: "2023-06-30",
//         image: "/statement.webp",
//         pdf: "/reports/30th-June-2023.pdf",

//     },
//     {
//         id: 3,
//         title: "Interim Financial Statement",
//         date: "2023-03-31",
//         image: "/statement.webp",
//         pdf: "/reports/Interim-Financials-for-the-Quarter-Ended-31st-March-2023.pdf",

//     },
//     {
//         id: 2,
//         title: "Interim Financial Statement",
//         date: "2022-12-31",
//         image: "/statement.webp",
//         pdf: "/reports/Interim-Financials-for-the-Quarter-Ended-31st-December-2022.pdf",

//     },
//     {
//         id: 1,
//         title: "Interim Financial Statement",
//         date: "2022-09-30",
//         image: "/statement.webp",
//         pdf: "/reports/Publishing-FS-September-2022.pdf",

//     }
// ]



export default function MarketReports() {


    /* =========================
       STATES
    ========================= */

    const [marketReports, setMarketReports] = useState([]);
    const [activePdf, setActivePdf] = useState(null);

    /* =========================
       FETCH DATABASE DATA
    ========================= */

    useEffect(() => {

        axios
            .get("http://localhost:3000/api/admin/market-reports")
            .then((response) => {

                const sortedData = response.data.sort(
                    (a, b) =>
                        new Date(b.startDate) -
                        new Date(a.startDate)
                );

                setMarketReports(sortedData);

            })
            .catch((error) => {

                console.log(
                    "Error fetching market reports:",
                    error
                );

            });

    }, []);

    /* =========================
       LATEST REPORTS
    ========================= */

    const latestReports = [...marketReports]
        .sort(
            (a, b) =>
                new Date(b.startDate) -
                new Date(a.startDate)
        )
        .slice(0, 4);

    const featured = latestReports[0];
    const sideReports = latestReports.slice(1);

    /* =========================
   GROUP REPORTS BY HEADER
========================= */

const groupedReports = marketReports.reduce(
    (acc, report) => {

        if (!acc[report.header]) {

            acc[report.header] = [];

        }

        acc[report.header].push(report);

        return acc;

    },
    {}
);

    

    return  (
        
        <div>
            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">
                    
                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>
                    
                    
                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/marketreports.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                    
                {/* OPTIONAL DARK OVERLAY (for text readability) */}
            <div className="absolute inset-0 bg-black/20 z-10"></div>
                    
        </div>

                    

        

                {/* BUTTON */}
                {/* <div className="flex justify-center mt-20 lg:mt-30">
                    <motion.button
                        onClick={() => navigate("/marketReports/allMarketReports")}
                        className="px-4 lg:px-8 py-1.5 lg:py-3 text-[13px] md:text-[15px] lg:text-[16px] bg-black text-white rounded font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View All Market Reports
                    </motion.button>
                </div> */}
        


        {/* =========================
            DYNAMIC FEATURED SECTIONS
        ========================= */}

        {
            Object.entries(groupedReports).map(
                ([headerTitle, reports]) => {

                    const sortedReports = [...reports].sort(
                        (a, b) =>
                            new Date(b.startDate) -
                            new Date(a.startDate)
                    );

                    const featured = sortedReports[0];
                    const sideReports = sortedReports.slice(1, 4);

                    return (

                        <div
                            key={headerTitle}
                            className="lg:max-w-9xl lg:mx-auto lg:px-50 lg:py-24 bg-white flex flex-col items-center justify-center"
                        >

                            {/* HEADER */}

                            <h2 className="w-[300px] lg:w-full text-center text-2xl md:text-3xl lg:text-5xl font-serif font-semibold mb-10 lg:mb-20 mt-10 lg:mt-0">

                                {headerTitle} - {new Date(featured.startDate).getFullYear()}

                            </h2>

                            {/* REPORT LAYOUT */}

                            <div className="w-full lg:w-full grid grid-cols-1 lg:grid-cols-3 lg:pl-[20px] lg:pr-[240px] flex items-center justify-center gap-6 ">

                                {/* LEFT – FEATURED CARD */}

                                {featured && (

                                    <motion.div
                                        onClick={() =>
                                            setActivePdf(featured.pdf)
                                        }
                                        className="lg:col-span-2 bg-white rounded-xl shadow-2xl p-5 ml-12 lg:ml-40 cursor-pointer w-[200px] lg:w-[400px] h-[300px] lg:h-[500px] flex flex-col items-center justify-center"
                                        initial={{
                                            opacity: 0,
                                            y: -30
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeInOut"
                                        }}
                                        viewport={{
                                            once: true
                                        }}
                                        whileHover={{
                                            scale: 1.02
                                        }}
                                    >

                                        <img
                                            src={featured.image}
                                            alt={featured.title}
                                            className="w-[100px] lg:w-[250px] h-[200px] lg:h-[340px] object-cover rounded mb-8 flex justify-center"
                                        />

                                        <div className="text-center">

                                            <p className="text-[15px] md:text-[17px] lg:text-xl font-semibold">

                                                {featured.title}

                                            </p>

                                            <p className="text-[13px] md:text-[15px] lg:text-[17px] text-gray-600 mt-2">

                                                {
                                                    formatMarketReportDate(
                                                        featured.startDate,
                                                        featured.endDate
                                                    )
                                                }

                                            </p>

                                        </div>

                                    </motion.div>

                                )}

                                {/* RIGHT – SMALL CARDS */}

                                <div className="w-[280px] lg:w-full flex flex-col lg:gap-8.5 gap-6 ml-2 lg:ml-0 lg:mr-20">

                                    {
                                        sideReports.map(
                                            (report, index) => (

                                                <motion.div
                                                    key={report.id}
                                                    onClick={() =>
                                                        setActivePdf(report.pdf)
                                                    }
                                                    className="flex items-center gap-6 p-2 pl-4 bg-white rounded-xl shadow-2xl cursor-pointer hover:shadow-none lg:w-[450px]"
                                                    initial={{
                                                        opacity: 0,
                                                        x: -30
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0
                                                    }}
                                                    transition={{
                                                        duration: 1.1,
                                                        delay: index * 0.1,
                                                        ease: "easeInOut"
                                                    }}
                                                    viewport={{
                                                        once: true
                                                    }}
                                                    whileHover={{
                                                        y: -6
                                                    }}
                                                >

                                                    <img
                                                        src={report.image}
                                                        alt={report.title}
                                                        className="w-15 lg:w-25 h-20 lg:h-32 object-cover"
                                                    />

                                                    <div>

                                                        <p className="text-[15px] md:text-[17px] lg:text-xl font-semibold text-gray-900">

                                                            {report.title}

                                                        </p>

                                                        <p className="text-[13px] md:text-[15px] lg:text-[17px] text-gray-500">

                                                            {
                                                                formatMarketReportDate(
                                                                    report.startDate,
                                                                    report.endDate
                                                                )
                                                            }

                                                        </p>

                                                    </div>

                                                </motion.div>

                                            )
                                        )
                                    }

                                </div>

                            </div>

                        </div>

                    );

                }
            )
        }                          

            {/* <div className="flex  items-center justify-center mt-5">
                <motion.button
                    onClick={() => navigate("/marketReports/allIndustryOverviewReports")}
                    className="mb-10 px-4 lg:px-6 py-1.5 lg:py-3 bg-black text-white rounded font-semibold text-[13px] md:text-[15px] lg:text-[16px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    View All Industry Overview Reports
                </motion.button>
            </div> */}
                    
                    
                    
                                        {/* PDF MODAL */}
                                        {activePdf && (
                                            <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center ">
                                            <div className="relative bg-gray-400 w-[90%] h-[90%] rounded-lg shadow-xl pt-10 pl-1 pr-1 pb-1">
                    
                                                {/* CLOSE */}
                                                <button
                                                onClick={() => setActivePdf(null)}
                                                className="absolute top-2 right-4 text-xl font-bold text-black"
                                                >
                                                ✕
                                                </button>
                    
                                                {/* DOWNLOAD */}
                                                <a
                                                href={activePdf}
                                                download
                                                className="absolute top-2 left-4 bg-black text-white px-2 py-1 text-[12px] rounded"
                                                >
                                                Download PDF
                                                </a>
                    
                                                {/* PDF VIEWER */}
                                                <iframe
                                                src={activePdf}
                                                title="Financial Report"
                                                className="w-full h-full"
                                                />
                                            </div>
                                            </div>
                                        )}


                    <div>
                        <Footer/>
                    </div>
                    <BackToTop />

                </div>

    )
}