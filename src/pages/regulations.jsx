import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer.jsx"; 
import { motion } from "framer-motion"
import BackToTop from "../components/backtotop.jsx";


export default  function Regulations() {

    /* =========================
     PDF MODAL STATE
    ========================== */
    const [activePdf, setActivePdf] = useState(null);

    /* =========================
        YEAR TOGGLE STATE
    ========================== */
    const [openYear, setOpenYear] = useState(null);
    const [regulationsData, setRegulationsData] = useState({});

    /* =========================
        AUTO YEAR GENERATION
        (2020 → Current Year)
    ========================== */
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - startYear + 1 },
        (_, i) => startYear + i
    );

    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/regulations")
            .then((response) => {

                const groupedData = {};

                response.data.forEach((item) => {

                    if (!groupedData[item.year]) {
                        groupedData[item.year] = [];
                    }

                    groupedData[item.year].push({
                        title: item.title,
                        image: item.image,
                        pdf: item.pdf
                    });

                });

                setRegulationsData(groupedData);

            })
            .catch((error) => {

                console.log("Error fetching regulations:", error);

            });

    }, []);



    /* =========================
        ANIMATION 
    ========================== */

    const container ={
        hidden: { opacity: 0, y: 100, },
        visible: {
            opacity: 1, y: 0,
            transition: {
                staggerChildren: 0.15,
                duration: 1.5,
                ease: "linear",
                delayChildren: 5,}
        }
    };





    
    /* =========================
        TOGGLE HANDLER
    ========================== */
    const handleToggleYear = (year) => {
        setOpenYear(openYear === year ? null : year);
    };




    return  (
        <div className="bg-white">
            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>

                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/regulations.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* OPTIONAL DARK OVERLAY (for text readability) */}
                <div className="absolute inset-0 bg-black/20 z-10"></div>

            </div>




                    <motion.div className="w-full h-full mt-10 mb-10 flex flex-col items-center lg:px-30 space-y-6 p-10 relative "
                                    >

                        {years.reverse().map((year) => (
                            <div key={year} className=" rounded-lg lg:w-full ">

                            {/* YEAR BUTTON */}
                            <motion.button
                                // variants={container}
                                // initial="hidden"
                                // animate="visible"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 10, x: 0 }}        
                                viewport={{ once: true }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{scale: 1.05, y: -2}}
                                whileTap={{scale: 0.9, y: 1}}
                                transition={{type: "spring", stiffness: 300, damping: 15, duration: 5, ease: "easeOut"}}
                                onClick={() => handleToggleYear(year)}
                                className="w-[300px] lg:w-full h-[40px] lg:h-[55px] flex flex-row justify-between items-center border-1 border-green-700 border-l-4 hover:border-l-2 px-6  bg-gray-50 hover:bg-black hover:text-white hover:text-xl hover:font-bold font-semibold text-[12px] md:text-[13px] lg:text-[15px] hover:w-[1170px] hover:ml-7"
                            >   
                                <div className="lg:px-20 justify-between flex flex-row items-center text-[14px] md:text-[15px] lg:text-[17px]">
                                    Regulations {year} 
                                    
                                </div>    
                            </motion.button>

                            {/* REGULATIONS LIST */}
                            {openYear === year && (
                                <div className="mt-1 pt-3 pb-3 lg:pt-15 lg:pb-10 grid md:grid-cols-4 gap-3 pl-6 b_green w-full rounded-2xl border-1">

                                {(regulationsData[year] || []).length === 0 ? (
                                    <div className="text-red-500 text-[12px] md:text-[13px] lg:text-[16px] lg:ml-30 w-full font-semibold">
                                    No regulations available for this year.
                                    </div>
                                ) : (
                                    regulationsData[year].map((reg, index) => (
                                    <motion.div
                                        key={index}
                                        className="h-[400px] w-[235px] shadow-2xl m-4 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer border-1"
                                        onClick={() => setActivePdf(reg.pdf)}
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}        
                                        viewport={{ once: false }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        whileHover={{scale: 1.05, y: 2}}
                                        whileTap={{scale: 0.9, y: 1}}
                                        transition={{type: "spring", stiffness: 300, damping: 15, duration: 5, ease: "easeOut"}}
                                    >
                                        <img
                                        src={reg.image}
                                        alt={reg.title}
                                        className="h-[300px] object-cover p-1 bg-white"
                                        />
                                        <div className="p-2 text-center text-[13px] bg-gray-100 hover:text-sky-600">
                                            <h3 className="font-semibold mb-2 h-[85px] hover:underline hover:underline-offset-3 hover:italic">
                                                {reg.title}
                                            </h3>
                                        
                                        </div>
                                    </motion.div>
                                    ))
                                )}

                                </div>
                            )}

                            </div>
                        ))}

                    </motion.div>




                    {/* =========================
                        PDF MODAL (YOUR EXACT LOGIC)
                    ========================== */}
                    {activePdf && (
                        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
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
                            title="Regulation PDF"
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