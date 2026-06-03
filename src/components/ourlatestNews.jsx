import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";


export default function OurLatestNews() {
       
    
    const [newsData, setNewsData] = useState([]);
    const [activeNews, setActiveNews] = useState(null);
    
    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/our-latest-news")
            .then((response) => {
                setNewsData(response.data);
            })
            .catch((error) => {
                console.log("Error fetching news:", error);
            });

    }, []);

    return (
        <div>

                            <div className="max-w-7xl">
        
                                {/* NEWS GRID */}
                                <div className="max-w-7xl mx-auto px-6 lg:px-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[80px] w-[260px] md:w-auto lg:w-[1200px]">
        
                                    {newsData.map((news) => (
                                        <div
                                        key={news.newsID}
                                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
                                        >
                                        {/* IMAGE */}
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-56 object-cover border-1 rounded-t-lg border-b-white"
                                        />
        
                                        {/* CONTENT */}
                                        <div className="pt-6 pl-5 pr-5 pb-3 flex flex-col flex-1">
                                            <h2 className="lg:text-xl h-[62px] flex justify-center text-center font-semibold mb-3 underline underline-offset-5">
                                            {news.title}
                                            </h2>
        
                                            {/* LIMITED DESCRIPTION */}
                                            <p className="text-gray-600 h-[65px] text-justify text-[12px] md:text-[13px] lg:text-sm line-clamp-3">
                                            {news.shortDescription}
                                            </p>
                                            <div className="flex items-center justify-center mt-3">
                                                {/* READ MORE */}
                                                <motion.button
                                                    initial={{ opacity: 0, x: 50 }}
                                                    whileInView={{ opacity: 10, x: 0 }}        
                                                    viewport={{ once: true }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    whileHover={{scale: 1.05, y: -2}}
                                                    whileTap={{scale: 0.9, y: 1}}
                                                    transition={{type: "spring", stiffness: 300, damping: 15, duration: 5, ease: "easeOut"}}
                                                    onClick={() => setActiveNews(news)}
                                                    className="w-[80px] md:w-[90px] lg:w-[100px] h-[22px] md:h-[23px] lg:h-[26px] flex items-center justify-center rounded text-white bg-black hover:bg-white hover:text-[14px] hover:text-black hover:border-2 hover:font-bold hover:bg-white font-semibold text-[11px] md:text-[12px] lg:text-[13px]"
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
                            
        
                                
                            
                
                
                
                            
                            
                        </div>
    )
}