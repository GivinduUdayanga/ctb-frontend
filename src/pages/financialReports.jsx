import Header from "../components/header";
import Footer from "../components/footer.jsx"; 
import { motion } from "framer-motion"
import { useState, useEffect } from "react";
import axios from "axios";
import BackToTop from "../components/backtotop.jsx";

// const reports = [
//     {
//         id: 4,
//         title: "Annual Report 2025/2026",
//         image: "/annual_report_2026.webp",
//         pdf: "/reports/",
//     },
//     {
//         id: 3,
//         title: "Annual Report 2024/2025",
//         image: "/annual_report_2025.webp",
//         pdf: "/reports/CTB-AR-2024-25_AR.pdf",
//     },
//     {
//         id: 2,
//         title: "Annual Report 2023/2024",
//         image: "/annual_report_2024.webp",
//         pdf: "/reports/CTB-AR-2023-24-for-upload.pdf",
//     }, 
//     {
//         id: 1,
//         title: "Annual Report 2022/2023",
//         image: "/annual_report_2023.webp",
//         pdf: "/reports/Ceylon-Tea-Brokers-PLC_Annual-Report-2022-23_CSE-1.pdf",
//     }, 
    
// ];

// const statements = [
//     {
//         id: 12,
//         title: "Interim Financial Statement",
//         date: "2025-06-30",
//         image: "/statement.webp",
//         pdf: "/reports/923_1755077453366.pdf",

//     },
//     {
//         id: 11,
//         title: "Interim Financial Statement",
//         date: "2025-03-31",
//         image: "/statement.webp",
//         pdf: "/reports/923_1748602433168.Quartely-Financial-Stateents-for-the-Quarter-Ended-31st-March-202.pdf",

//     },
//     {
//         id: 10,
//         title: "Interim Financial Statement",
//         date: "2024-12-31",
//         image: "/statement.webp",
//         pdf: "/reports/923_1739530116418.pdf",

//     },
//     {
//         id: 9,
//         title: "Interim Financial Statement",
//         date: "2024-09-30",
//         image: "/statement.webp",
//         pdf: "/reports/923_1730431726824.Quartely-Financial-Statements-for-the-Quarter-ended-30th-September-2024.pdf",

//     },
//     {
//         id: 8,
//         title: "Interim Financial Statement",
//         date: "2024-06-30",
//         image: "/statement.webp",
//         pdf: "/reports/30th-June-2024.pdf",

//     },
//     {
//         id: 7,
//         title: "Interim Financial Statement",
//         date: "2024-03-31",
//         image: "/statement.webp",
//         pdf: "/reports/31st-March-2024.pdf",

//     },
//     {
//         id: 6,
//         title: "Interim Financial Statement",
//         date: "2023-12-31",
//         image: "/statement.webp",
//         pdf: "/reports/31st-December-2023.pdf",

//     },
//     {
//         id: 5,
//         title: "Interim Financial Statement",
//         date: "2023-09-30",
//         image: "/statement.webp",
//         pdf: "/reports/Interim-Financial.pdf",

//     },
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


export default  function FinancialReports() {
    const [activePdf, setActivePdf] = useState(null);
    const [reports, setReports] = useState([]);
    const [statements, setStatements] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/annual-reports")
            .then((response) => {
                setReports(response.data);
            })
            .catch((error) => {
                console.log("Error fetching annual reports:", error);
            });

        axios.get("http://localhost:3000/api/admin/financial-statement")
            .then((response) => {
                setStatements(response.data);
            })
            .catch((error) => {
                console.log("Error fetching financial statements:", error);
            });

    }, []);

    return  (
        <div className="bg-white border">
            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>           

                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/financialreports.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* OPTIONAL DARK OVERLAY (for text readability) */}
                <div className="absolute inset-0 bg-black/20 z-10"></div>

            </div>



                    
                    <motion.div className="text-center text-3xl md:text-4xl lg:text-5xl font-serif font-semibold py-10 pb-15 lg:pb-30 mt-20">
                        <motion.span
                            animate={{ 
                                scale: [1, 1, 1,], 
                                // textShadow: [
                                //     "0 0 0px rgba(0, 128, 0, 0.4)",
                                //     "0 0 8px rgba(0, 200, 100, 0.7)",
                                //     "0 0 0px rgba(153, 0, 255, 0.4)",
                                // ],
                                // boxShadow: [
                                //     "0 0 0px rgba(0, 128, 0, 0.4)",
                                //     "0 0 8px rgba(0, 200, 100, 0.7)",
                                //     "0 0 0px rgba(153, 0, 255, 0.4)",
                                // ]
                                
                            }}
                            transition={{ 
                                duration: 2.2, 
                                repeat: Infinity, 
                                repeatType: "reverse",
                                repeatDelay: 3,
                                
                            }}
                        

                        >
                            ____________ Annual Reports ____________
                        </motion.span>
                    </motion.div>




                    <div className="flex justify-center px-10 pb-20 mt-20">
                        <div
                            className="
                                grid 
                                grid-cols-1 
                                sm:grid-cols-2 
                                lg:grid-cols-4 
                                gap-15 lg:gap-20
                                justify-items-center
                                
                            "
                        >
                            {reports.map((report) => (
                                <a
                                    key={report.id}
                                    onClick={() => setActivePdf(report.pdf)}
                                    className="
                                        w-[250px] 
                                        flex 
                                        flex-col 
                                        items-center 
                                        cursor-pointer
                                        hover:scale-105 
                                        transition-transform 
                                    "
                                >
                                    {/* Thumbnail */}
                                    <motion.img
                                        src={report.image}
                                        alt={report.title}
                                        className="w-[200px] lg:w-full h-[300px] lg:h-[350px] object-cover rounded-lg shadow-2xl"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 10, x: 0 }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    />

                                    {/* Description */}
                                    <motion.p 
                                        className="mt-6 text-[14px] md:text-[15px] lg:text-[17px] text-center font-medium text-gray-800 hover:text-sky-800 hover:underline"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        viewport={{ once: true }}
                                        animate={{ opacity: 1, scale: 1 , delayChildren: 5}}
                                    >
                                        {report.title}
                                    </motion.p>
                                </a>
                            ))}
                        </div>
                    </div>

                    




                    <div className="text-center text-3xl md:text-4xl lg:text-5xl font-serif font-semibold py-10 lg:pt-40 pb-15 lg:pb-40">
                        ________ Interim Financial Statement ________
                    </div>




                    <div className="flex justify-center px-10 pb-20">
                        <div
                            className="
                                grid 
                                grid-cols-1 
                                sm:grid-cols-2 
                                lg:grid-cols-4 
                                gap-20
                                justify-items-center
                                
                            "
                        >
                            {statements.map((statements) => (
                                <div
                                    key={statements.id}
                                    onClick={() => setActivePdf(statements.pdf)}
                                    className="
                                        w-[250px] 
                                        flex 
                                        flex-col 
                                        items-center 
                                        cursor-pointer
                                        hover:scale-105 
                                        transition-transform
                                    "
                                >
                                    {/* Thumbnail */}
                                    <motion.img
                                        src={statements.image}
                                        alt={statements.title}
                                        className="w-[200px] lg:w-full h-[300px] lg:h-[350px] object-cover rounded-lg shadow-2xl"
                                        initial={{ opacity: 0, x: -20}}
                                        whileInView={{ opacity: 10, x: 0 }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        viewport={{ once: true }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    />

                                    {/* Description */}
                                    <motion.p 
                                        className="mt-6 text-[14px] md:text-[15px] lg:text-[17px] text-center font-medium text-gray-800 hover:text-sky-800 hover:underline flex flex-col"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{duration: 1.5, ease: "easeInOut" }}
                                        viewport={{ once: true }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        <p>{statements.title}</p>
                                        <p>{statements.date}</p>
                                        
                                    </motion.p>
                                    <motion.p 
                                        className="mt-2 text-center font-medium text-gray-800 hover:text-sky-800 hover:underline "
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{duration: 1.5, ease: "easeInOut" }}
                                        viewport={{ once: true }}
                                        animate={{ opacity: 1, scale: 1 }}
                                    >
                                        
                                        
                                    </motion.p>
                                </div>
                            ))}
                        </div>
                    </div>




                    



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


                    <div></div>
                    <div></div>
        
        
        
                    
                    <div>
                        <Footer/>
                    </div>

                    <BackToTop />
                    
                </div>
    )
}