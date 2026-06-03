import Header from "../components/header";
import Footer from "../components/footer.jsx";
import axios from "axios"; 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BackToTop from "../components/backtotop.jsx";

export default  function International() {
        
    const [activeNews, setActiveNews] = useState(null);
    const [internationalNews, setInternationalNews] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/international-news")
            .then((response) => {

                console.log(response.data);

                setInternationalNews(response.data);

            })
            .catch((error) => {

                console.log("Error fetching international news:", error);

            });

    }, []);

    return  (
        <div className="bg-white">
            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>
                
                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/news.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* OPTIONAL DARK OVERLAY (for text readability) */}
                <div className="absolute inset-0 bg-black/20 z-10"></div>

            </div>
                    
                    

                    <div className="max-w-7xl mx-auto px-6 py-12">
                        {/* PAGE TITLE */}
                        <div className="py-20 text-center mb-10">
                            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold font-serif">
                            _________ International Tea News _________
                            </h1> 
                        </div>

                        {/* NEWS GRID */}
                        <div className="max-w-7xl mx-auto px-6 pb-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                            {internationalNews.map((news) => (
                                <div
                                key={news.newsID}
                                className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
                                >
                                {/* IMAGE */}
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="w-full h-56 object-cover"
                                />

                                {/* CONTENT */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h2 className="text-xl font-semibold mb-3">
                                    {news.title}
                                    </h2>

                                    {/* LIMITED DESCRIPTION */}
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                    {news.shortDescription}
                                    </p>
                                    <div className="flex items-center justify-center mt-3 ">
                                        {/* READ MORE */}
                                        <motion.button
                                            initial={{ opacity: 0, x: 100 }}
                                            whileInView={{ opacity: 10, x: 0 }}        
                                            viewport={{ once: false }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            whileHover={{scale: 1.05, y: -2}}
                                            whileTap={{scale: 0.9, y: 1}}
                                            transition={{type: "spring", stiffness: 300, damping: 15, duration: 5, ease: "easeOut"}}
                                            onClick={() => setActiveNews(news)}
                                            className="w-[100px] h-[26px] flex items-center justify-center rounded text-white bg-black hover:bg-white hover:text-[14px] hover:text-black hover:border-2 hover:font-bold hover:bg-white font-semibold text-[13px]"
                                            >
                                                Read More
                                        </motion.button>
                                    </div>
                                </div>
                                </div>
                            ))}

                            </div>
                        </div>

                        {/* =========================
                            READ MORE MODAL (FIXED UX)
                        ========================== */}
                        {activeNews && (
                            <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
                            <div className="bg-white w-[90%] max-w-4xl max-h-[90vh] rounded-lg shadow-xl relative flex flex-col">

                                {/* CLOSE */}
                                <button
                                onClick={() => setActiveNews(null)}
                                className="absolute top-3 right-4 text-xl font-bold z-10"
                                >
                                ✕
                                </button>

                                {/* SCROLLABLE CONTENT */}
                                <div className="overflow-y-auto">

                                {/* IMAGE */}
                                <img
                                    src={activeNews.image}
                                    alt={activeNews.title}
                                    className="w-150 h-100 object-cover mx-auto mt-4 rounded border-l-5 border-green-700"
                                />

                                {/* FULL CONTENT */}
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold mb-4">
                                    {activeNews.title}
                                    </h2>

                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {activeNews.fullDescription}
                                    </p>
                                </div>

                                </div>
                            </div>
                            </div>
                        )}
                    </div>
        
        
        
                    
                    <div>
                        <Footer/>
                    </div>
                    
                    <BackToTop />

                </div>
    )
}