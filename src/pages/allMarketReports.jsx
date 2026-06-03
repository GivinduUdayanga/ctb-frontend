import Header from "../components/header";
import Footer from "../components/footer.jsx";
import BackToTop from "../components/backtotop.jsx"; 


export default  function AllMarketReports() {

    return  (
        <div>
                                <div className="relative w-full h-screen flex flex-col lg:overflow-hidden">
                    
                                    {/* HEADER (ABOVE VIDEO) */}
                                    <div className="relative top-0 w-full h-[90px] ">
                                        <Header />
                                    </div>
                    
                                    {/* CENTER CONTENT */}
                                            <div className="relative z-50 w-full h-[calc(100vh-90px)]
                                                            flex flex-col top-[290px] gap-15 pt-30">
                    
                                                {/* Title */}
                                                <div className="relative w-[750px] h-[100px]flex items-center">
                                                
                                                <motion.div
                                                    animate={{ scale: [1, 1.08, 1] }}
                                                    transition={{
                                                        duration: 2.2,
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                        repeatDelay: 3,
                                                    }}
                                                    className="inline-block"
                                                    >
                                                    <div
                                                        className="
                                                        bg-gradient-to-r darkgreen to-gray-500 border-t-3 border-b-3
                                                        text-white
                                                        text-6xl
                                                        font-serif
                                                        font-semibold
                                                        px-28
                                                        py-4
                                                        shadow-2xl
                                                        "
                                                        style={{
                                                        clipPath: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)",
                                                        textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
                                                        }}
                                                    >
                                                        All Market Reports
                                                    </div>
                                                </motion.div>
                                                </div>
                                            </div>
                    
                                    {/* BACKGROUND VIDEO */}
                                    <video
                                        src="/ctb_video1.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover z-0"
                                    />
                    
                                    {/* OPTIONAL DARK OVERLAY (for text readability) */}
                                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                    
                                </div>



                    

                    <div></div>
                    <div></div>
        
        
        
                    
                    <div>
                        <Footer/>
                    </div>

                    <BackToTop />
                    
                </div>
    )
}