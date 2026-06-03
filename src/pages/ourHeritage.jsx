import Header from "../components/header.jsx";
import YearCarousel from "../components/YearCarousel.jsx";
import RotatingYearTimeline from "../components/rotatingYearTimeline.jsx"
import TypingText from "../components/typingText.jsx";
import Footer from "../components/footer.jsx"; 
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import BackToTop from "../components/backtotop.jsx";
import '../App.css';
import { GiTeapotLeaves } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineRealEstateAgent } from "react-icons/md";



export default  function OurHeritage() {

    const navigate = useNavigate();

    const policies = [
        { title: "Remuneration" },
        { title: "Whistleblowing" },
        { title: "Privacy Policy" },
        { title: "Board Committees" },
        { title: "Corporate Disclosures" },
        { title: "Anti-Bribery & Corruption" },
        { title: "Enterprise Risk Management Policy" },
        { title: "Internal Code of Business Conduct" },
        { title: "Relations with shareholders and Investors" },
        { title: "Matters Relating to the Board of Directions" },
        { title: "Environmental, Social and Governance Sustainability" },
        { title: "Corporate Governance, Nominations and Re-election" },
        { title: "Control and Management of Company Assets and Shareholder Investments" }
    ];

    const colors = {
        deepGreen: "#1f3d2b",
        darkGreen: "#0f2f21",
        lightGreen: "#e8f0ec",
        bg: "#f4f6f5",
        white: "#ffffff",
        grayText: "#6b7280",
        border: "#e5e7eb",
        gold: "#d4af37",
    };

    const containerVariantsNew = {
        hidden: {
            opacity: 0,
            x: -120,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.2,
            delayChildren: 0.1,
            },
        },
    };

    const itemVariantsNew = {
        hidden: {
            opacity: 0,
            x: 30,
            scale: 0.6,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
            type: "spring", 
            stiffness: 120,
            damping: 20,
            },
        },
    };

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 1.5,
            delayChildren: 0.1,
            },
        },
    };

    const containerVariantsLeft = {
        hidden: {
            opacity: 0,
            x: -10,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.6,
            delayChildren: 0.1,
            },
        },
    };

    const containerVariantsRight = {
        hidden: {
            opacity: 0,
            x: 10,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.6,
            delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: 30,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
            type: "spring", 
            stiffness: 10,
            damping: 12,
            },
        },
    };

    const itemVariantsRight = {
        hidden: {
            opacity: 0,
            x: 10,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
            type: "spring", 
            stiffness: 250,
            damping: 12,
            },
        },
    };


    const itemVariantsLeft = {
        hidden: {
            opacity: 0,
            x: -10,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
            type: "spring",
            stiffness: 180,
            damping: 12,
            },
        },
    };
    

    const arrowVariantsRight = {
        hidden: { opacity: 0, rotate: 40, scale: 0.6 },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const arrowVariantsLeft = {
        hidden: { opacity: 0, rotate: -40, scale: 0.6 },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 220, damping: 10, duration: 2},
        },
    };

    const textRightVariants = {
        hidden: { opacity: 0, x: 10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        },
    };

    const textLeftVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        },
    };


    return  (

        <div className="border relative w-full bg-white">
            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative  top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>

                

                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/ourheritage.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full z-0"
                />

                {/* OPTIONAL DARK OVERLAY (for text readability) */}
                <div className="absolute inset-0"></div>

            </div>



            {/* ================= GET TO KNOW US (MODERN UI) ================= */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#f4f6f5] to-white">

            {/* TITLE */}
            <div className="text-center mb-28">
                <h2 className="text-4xl lg:text-5xl font-serif text-[#1f3d2b] font-semibold">
                GET TO KNOW US
                </h2>
                <p className="text-gray-500 mt-3">
                Ceylon Tea Brokers PLC
                </p>
            </div>

            {/* CARDS */}
            <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

                {/* HERITAGE CARD */}
                <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-3xl shadow-xl p-8 border-l-4 border-green-700 relative "
                >
                <div className="text-5xl absolute flex top-[-45px] left-[50%] transform -translate-x-1/2 bg-green-50 border-[2px] border-green-800 p-3 rounded-full top-10 left-10 text-green-800 opacity-70">
                    <MdOutlineRealEstateAgent /> 
                </div>

                <div className="absolute bottom-0 right-2 opacity-80 mt-10">
                    <img src="/tea.jpg" className="w-48 rounded-xl" />
                </div>

                <h3 className="text-xl font-bold italic text-[#1f3d2b] mb-8 ">
                    Our Heritage
                </h3>

                <p className="text-gray-600 leading-relaxed text-justify">
                    Founded in 1963, Ceylon Tea Brokers is the first stand-alone Tea Broking Company 
                    to be listed on the Colombo Stock Exchange. Since our inception, we have ascended 
                    to great  heights in the Ceylon Tea industry as a premium  service  provider specialising 
                    in tea broking and <p></p> marketing  superior quality tea from factories <p></p> representing all  
                    elevations, such as Uva High,  <p></p> Uva Medium,  Western High, Western  <p></p> Medium and Low Grown.
                </p>
                
                </motion.div>

                {/* VALUES CARD */}
                <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-3xl shadow-xl p-8 border-l-4 border-green-700 relative"
                >

                <div className="text-5xl absolute flex top-[-45px] left-[50%] transform -translate-x-1/2 bg-green-50 border-[2px] border-green-800 p-3 rounded-full top-10 left-10 text-green-800 opacity-70">
                    <FaRegHandshake /> 
                </div>
                <div className="absolute bottom-0 right-0 opacity-80">
                    <img src="/factory.png" className="w-48" />
                </div>

                <h3 className="text-xl font-bold italic text-[#1f3d2b] mb-8">
                    What We Stand For
                </h3>

                <p className="text-gray-600 leading-relaxed text-justify">
                    Covering key service areas from Tea Broking and Marketing, Financing, Warehousing  
                    Manufacturing advisory Services to Cataloguing and Real Time Informative Services. 
                    Ceylon Tea Brokers have not only become a trailblazer <p></p> in the Ceylon Tea Broking 
                    sector, but aspire to retain the market <p></p> position through innovation. Their experience  
                    of <p></p> decades and meticulous attention to everything <p></p> happening in the Tea industry, sets them apart.
                </p>
                
                </motion.div>

            </div>
            </section>




            {/* ================= WHAT WE DO (MODERN UI) ================= */}
            <section className="py-20 px-6 bg-[#f4f6f5]">

            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-serif text-[#1f3d2b] font-semibold">
                    WHAT WE DO
                </h2>
                <p className="text-gray-500 mt-3">
                    Dedicated services that create real value.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

                {/* LEFT CONTENT */}
                <div className="space-y-6">

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-700">
                    <h4 className="font-semibold text-[#1f3d2b] mb-3"> 
                        ◪ Excellence in Service
                    </h4>
                    <p className="text-gray-600 text-justify mb-2">
                        Our status as the first stand-alone tea broking company in Sri Lanka to be listed on the Colombo 
                        Stock Exchange is another outcome of our endless pursuit of unmatched quality that we believe must 
                        reflect on all that we do. Providing services to over 120 factories in Sri Lanka, we are proud to 
                        say that we handle more than 16% of the value of the produce sold at the Colombo Tea Auction.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green-700">
                    <h4 className="font-semibold text-[#1f3d2b] mb-3">
                        ◪ Customer Commitment
                    </h4>
                    <p className="text-gray-600 text-justify mb-2">
                        We firmly believe that our growth is reflected in the extent of the services we offer to our reputed 
                        customers, which is why we are committed to offering a full set of services that guarantee complete 
                        satisfaction.
                    </p>
                </div>

                </div>

                {/* RIGHT IMAGE + TAG */}
                <div className="relative">
                <img
                    src="/ourheritage2.png"
                    className="rounded-2xl shadow-xl w-full h-[340px] object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-green-900 text-white text-center p-4 rounded-b-2xl">
                    {/* Experience. Knowledge. Integrity. */}_____________  ◯  _____________
                </div>
                </div>

            </div>

            {/* SERVICES GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">

                {[
                "Tea Broking",
                "Warehousing & Sampling",
                "Manufacturing Advisory",
                "Financing",
                "Cataloguing and Real Time Informative Services",
                ].map((item, i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md text-center font-semibold text-[#1f3d2b]"
                >
                    {item}
                </motion.div>
                ))}

            </div>
            </section>


            <div className="gap-16 pb-16 w-full darkgreen">
                <div className="text-center tgold text-2xl md:text-3xl lg:text-5xl font-semibold font-serif lg:pt-20">
                        A STORY OF HUMBLE BEGINNINGS ...
                </div>
                <div className="w-full flex items-center justify-center mt-10">
                        
                    <div className="flex text-white text-[14px] md:text-[15px] lg:text-[18px] w-[300px] lg:w-[1200px] text-center">
                        
                        Ceylon Tea Brokers is amongs the most reputed tea broking companies in Sri Lanka today. However, 
                        the road to securing our status was not an easy one. It is a story of relentless resilience, courage, 
                        teamwork, commitment to the industry and its stakeholders and an undeniable thirst for knowladge and 
                        growth. As we are now among the best tea brokers in Sri Lanka, we look back at that history with pride.
                        
                    </div> 
                </div>
            </div>

            <YearCarousel/>


            



            <div className="w-full h-full relative">

                <div
                    className="
                        w-full h-full
                        
                        bg-[url('/about1.png')]
                        bg-cover bg-center bg-no-repeat
                    "
                    >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-white z-0" />
                
                    {/* CENTER CONTENT */}
                    <div className="relative z-50 w-full h-full
                                                flex flex-col">
                
                        
                                    
                        <div className="w-full h-[1400px] lg:h-[1750px] flex flex-col items-center justify-center gap-[5px] lg:gap-[25px] darkgreen">

                            <div className="flex absolute lg:w-[968px] lg:h-[200px] bottom-[1630px] lg:left-[250px] lg:border-white"></div>
                            <motion.div 
                                className="flex absolute lg:w-[468px] lg:h-[170px] bottom-[1250px] left-[70px] border-white lg:border-[2px]"
                                variants={arrowVariantsLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            ></motion.div>
                            <motion.div 
                                className="flex absolute lg:w-[468px] lg:h-[170px] bottom-[920px] left-[925px] border-white lg:border-[2px]"
                                variants={arrowVariantsRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}></motion.div>
                            <motion.div 
                                className="flex absolute lg:w-[468px] lg:h-[170px] bottom-[585px] left-[70px] border-white lg:border-[2px]"
                                variants={arrowVariantsLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            ></motion.div>
                            <motion.div 
                                className="flex absolute lg:w-[468px] lg:h-[170px] bottom-[250px] left-[925px] border-white lg:border-[2px]"
                                variants={arrowVariantsRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true}}
                            ></motion.div>

                            <div className="flex relative absolute bottom-[40px] items-center justify-center text-3xl md:text-3xl lg:text-6xl font-bold font-serif text-white w-[220px] h-[70px] lg:w-[700px] lg:h-[150px] pt-20 border-green-950">
                                
                                <motion.span
                                    animate={{ 
                                        scale: [1, 1, 1,],  
                                    }}
                                    transition={{ 
                                        duration: 2.2, 
                                        repeat: Infinity, 
                                        repeatType: "reverse",
                                        repeatDelay: 3,
                                            
                                    }}
                                    style={{ 
                                        textShadow: "-5px 3px 3px rgba(10,10,10,2.9)" 
                                    }}
                                >
                                    
                                    OUR VALUES
                                </motion.span>
                            </div>

                            <div className="w-[300px] lg:w-[1225px] h-full lg:h-[1400px] mt-10 flex relative flex-col items-center justify-center">
                                

                                <motion.div
                                    className="w-[170px] lg:w-[250px] h-[40px] lg:h-[80px] border-[1px] lg:border-[2px] bg-white text-black border-black text-[15px] md:text-[16px] lg:text-[20px] font-semibold font-serif flex absolute items-center justify-center lg:left-[10px] top-[1px] lg:top-[10px] shadow-2xl rounded-2xl"
                                    variants={titleVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover={{ scale: 1.06 }}
                                    viewport={{ once: true }}
                                >
                                    ABILITY
                                </motion.div>

                                <motion.div
                                    className="w-[300px] lg:w-[1000px] lg:h-[140px] bg flex absolute items-center justify-center font-semibold text-[13px] md:text-[14px] lg:text-[17px] text-justify lg:left-[210px] top-[90px] lg:top-[145px] p-5 border-[1px] lg:border-[2px] border-black rounded-2xl"
                                    variants={textRightVariants}  
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    Since the inception of Ceylon Tea Brokers , our extraordinary team has dedicated themselves to always being a helping hand to all our 
                                    stakeholders, adding value to their experiences and creating a stepping stone for them to reach their milestones. As we move forword, 
                                    we acknowledge the value of our learnings we have masterd over the years and dedicate ourselves to the further development of our capabilities.
                                </motion.div>

            


                                <motion.div
                                    className="w-[170px] lg:w-[250px] h-[40px] lg:h-[80px] border-[1px] lg:border-[2px] lg:right-[10px] top-[400px] lg:top-[340px] bg-white text-black border-black text-[15px] md:text-[16px] lg:text-[20px] font-semibold font-serif flex absolute items-center justify-center  shadow-2xl rounded-2xl"
                                    variants={titleVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover={{ scale: 1.06 }}
                                    viewport={{ once: true }}
                                    >
                                        CREDIBILITY
                                </motion.div>

                                <motion.div
                                    className="w-[300px] lg:w-[1000px] lg:h-[140px] bg flex absolute items-center justify-center font-semibold text-[13px] md:text-[14px] lg:text-[17px] text-justify lg:right-[210px] top-[495px] lg:top-[475px] p-5 border-[1px] lg:border-[2px] border-black rounded-2xl"
                                    variants={textLeftVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    >
                                        We value honesty above all else. We ensure it is reflected in our operations with stringent measures implemented to actively seek methods 
                                        and processes to offer our  stakeholders the chance to access the latest and the most credible sources of information on Ceylon Tea with 
                                        the utmost convenience.
                                </motion.div>


                                <motion.div
                                    className="w-[170px] lg:w-[250px] h-[40px] lg:h-[80px] border-[1px] lg:border-[2px] lg:left-[10px] top-[750px] lg:top-[675px] bg-white text-black border-black text-[15px] md:text-[16px] lg:text-[20px] font-semibold font-serif flex absolute items-center justify-center  shadow-2xl rounded-2xl "
                                    variants={titleVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover={{ scale: 1.06 }}
                                    viewport={{ once: true }}
                                    >
                                        INTEGRITY
                                </motion.div>

                                <motion.div
                                    className="w-[300px] lg:w-[1000px] lg:h-[140px] bg flex absolute items-center justify-center font-semibold text-[13px] md:text-[14px] lg:text-[17px] text-justify lg:left-[210px] top-[845px] lg:top-[810px] p-5 border-[1px] lg:border-[2px] border-black rounded-2xl "
                                    variants={textRightVariants} 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    >
                                        Doing the right thing that benefits all our stakeholders, protecting their wellbeing and growth, is at the very core of our business.
                                </motion.div>


                                <motion.div
                                    className="w-[170px] lg:w-[250px] h-[40px] lg:h-[80px] border-[1px] lg:border-[2px] lg:right-[10px] top-[1025px] lg:top-[1010px] bg-white text-black border-black text-[15px] md:text-[16px] lg:text-[20px] font-semibold font-serif flex absolute items-center justify-center shadow-2xl rounded-2xl "
                                    variants={titleVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover={{ scale: 1.06 }}
                                    viewport={{ once: true }}
                                    >
                                        TEAM WORK
                                </motion.div>

                                <motion.div
                                    className="w-[300px] lg:w-[1000px] lg:h-[140px] bg flex absolute items-center justify-center text-justify font-semibold text-[13px] md:text-[14px] lg:text-[17px] lg:right-[210px] top-[1120px] lg:top-[1145px] p-5 border-[1px] lg:border-[2px] border-black rounded-2xl"
                                    variants={textLeftVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    >
                                        Striving towards a common goal, the main ingredient of our secret sauce that leads us to our success is our incredible team.
                                </motion.div>

                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>






            <div className="w-full bg-white py-20 px-6">
  
                {/* TITLE */}
                <div className="max-w-7xl mx-auto text-center mb-[80px]">
                    <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-[#1f3d2b]">
                    COMPANY POLICIES
                    </h2>
                    <p className="text-gray-500 mt-3">
                    Ceylon Tea Brokers PLC
                    </p>
                </div>

                {/* GRID */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9">

                    {policies.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.04 }}
                        className="group bg-green-950/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-[1px] border-gray-500 cursor-pointer"
                    >
                        {/* Icon */}
                        <div className="w-full h-12 flex items-center mb-5 justify-center rounded-full bg-green-950/50 text-[#1f3d2b] mb-4">
                            <GiTeapotLeaves  className="text-4xl text-white"/>
                        </div>

                        {/* Title */}
                        <h3 className="text-[#1f3d2b] font-semibold text-lg leading-tight">
                            {item.title}
                        </h3>

                        {/* Arrow */}
                        <div className="mt-4 text-right text-[#1f3d2b] group-hover:translate-x-1 transition ">
                            ➜
                        </div>
                    </motion.div>
                    ))}

                    </div>
                </div>
            



            <div className="w-full h-[180px] flex justify-center items-center text-[15px] pt-10">
                <motion.button
                    onClick={() => navigate("/ourHeritage/gallery")}
                    className="mb-10 px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black hover:font-bold hover:text-[16px] cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Gallery Page
                </motion.button>
            </div>
            

            <div>
                <Footer/>
            </div>

            <BackToTop />                
            
        </div>
        
    )
}