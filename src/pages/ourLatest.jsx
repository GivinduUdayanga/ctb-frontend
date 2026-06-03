import Header from "../components/header";
import Footer from "../components/footer.jsx"; 
import OurLatestNews from "../components/ourlatestNews.jsx";
import { motion } from "framer-motion";
import BackToTop from "../components/backtotop.jsx";


export default  function OurLatest() {


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
                            ___________ Our Latest News ___________
                            </h1>
                        </div>

                        <div className="mb-20">
                            <OurLatestNews/>
                        </div>

                        
                    </div>
                    

                        
                    
        
        
        
                    
                    <div>
                        <Footer/>
                    </div>
                    <BackToTop />
                </div>
    )
}