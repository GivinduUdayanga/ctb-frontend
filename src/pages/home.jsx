import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import BackToTop from "../components/backtotop.jsx"
import YearCarousel from "../components/YearCarousel.jsx";
import SubscribeSection from "../components/subscribeSection.jsx";
import '../App.css';
import TypingText from "../components/typingText"; 
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import RotatingYearTimeline from "../components/rotatingYearTimeline.jsx"
import OurLatestNews from "../components/ourlatestNews.jsx";
 

const slides = [
  {
    buttonText: "Read More",
    path: "/ourHeritage",
  },
  {
    buttonText: "Read More",
    path: "/news/ourLatest",
  },
  {
    buttonText: "Read More",
    path: "/marketReports",
  },
];


export default  function Home() {



    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        }, 9300); // change every 9.3 seconds

        return () => clearInterval(interval);
    }, []);


    const containerVariants = {
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

    const itemVariants = {
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
            damping: 12,
            },
        },
    };

    const arrowVariantsRight = {
        hidden: { opacity: 0, rotate: 40, scale: 0.6 },
        visible: (i) => ({
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: i * 0.2,   // 👈 automatic delay
            },
        }),
    };

    const homePage = {

    };

    return  (
        <div className="flex flex-col w-full min-h-screen bg-white">
            <div className="relative w-full h-[211px] lg:h-auto flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative z-20 top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>

                
                <div className="relative z-0 w-full h-[calc(100vh-90px)]
                                        flex flex-col gap-15">

                            
                
                </div>

                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/home.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 lg:w-full z-0 "
                />
                
                {/* OPTIONAL DARK OVERLAY (for text readability) */}
                <div className="absolute inset-0 bg-black/20 z-10 "></div>

            </div>


            <div>
                <div className="w-full h-[35px] md:h-[36px] lg:h-[41px] text-[11px] md:text-[13px] lg:text-[14px] text-white flex justify-center items-center lg:mb-5 mt-10">
                    <motion.button
                        onClick={() => navigate(slides[current].path)}
                        className="mb-5 px-[10px] lg:px-6 py-[1px] lg:py-2 bg-black text-white border-[1px] rounded-lg font-semibold hover:bg-white hover:text-black hover:border-[2px] hover:border-black hover:font-bold cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {slides[current].buttonText}
                    </motion.button>
                </div>
            </div>


            <div className="w-full h-full">
                <div className=" w-full h-full flex flex-col justify-center items-center bg-white">
                    
                        
                        <div className="w-auto h-[50px] text-[14px] md:text-[16px] lg:text-[18px] flex justify-center items-center font-mono">
                            CEYLON TEA BROKERS PLC
                        </div>
                        <div className="w-auto h-[90px] text-2xl md:text-4xl lg:text-5xl text-center flex justify-center items-center font-semibold font-serif ">
                            GET TO KNOW US
                        </div>
                        
                    
                        <div className="w-auto md:w-[600px] lg:w-[1300px] lg:h-[400px] gap-20 flex flex-col lg:flex-row justify-center items-center">
                            <div className="flex px-10 py-5 w-[260px] lg:w-[600px] h-auto lg:h-[200px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold shadow-xl rounded-r-xl border-l-4 border-green-700">
                                
                                    Founded in 1963, Ceylon Tea Brokers is the first stand-alone Tea Broking Company to be listed 
                                    on the Colombo Stock Exchange. Since our inception, we have ascended to great heights in the Ceylon 
                                    Tea industry as a premium service provider specializing in tea broking and marketing superior quality 
                                    tea from factories representing all elevations, such as
                                    
                                
                            </div>
                            <div className="w-[260px] lg:w-[500px] h-[350px] flex flex-col gap-8">

                                <motion.div
                                    className="w-[260px] h-[350px] flex flex-col relative items-center"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.4 }}
                                    
                                    
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-[100px] md:w-[170px] lg:w-[180px] h-[40px] md:h-[45px] lg:h-[50px] items-center justify-center flex absolute lg:left-[10px] lg:top-[10px] font-semibold shadow-xl shadow-green-950/20 rounded-xl bg-white border-1 border-l-4 border-green-700"
                                    >
                                        Uva High
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-[150px] md:w-[240px] lg:w-[250px] h-[40px] md:h-[45px] lg:h-[50px] items-center justify-center flex  absolute lg:left-[90px] top-[80px] font-semibold shadow-xl shadow-green-950/20 rounded-xl bg-white border-1 border-l-4 border-green-700"
                                    >
                                        Uva Medium
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-[200px] md:w-[310px] lg:w-[320px] h-[40px] md:h-[45px] lg:h-[50px] items-center justify-center flex absolute lg:left-[170px] top-[150px] font-semibold shadow-xl shadow-green-950/20 rounded-xl bg-white border-1 border-l-4 border-green-700"
                                    >
                                        Western High
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-[150px] md:w-[240px] lg:w-[250px] h-[40px] md:h-[45px] lg:h-[50px] items-center justify-center flex absolute lg:left-[90px] top-[220px] font-semibold shadow-xl shadow-green-950/20 rounded-xl bg-white border-1 border-l-4 border-green-700"
                                    >
                                        Western Medium
                                    </motion.div>

                                    <motion.div
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-[130px] md:w-[170px] lg:w-[180px] h-[40px] md:h-[45px] lg:h-[50px] pl-5 pr-5 items-center justify-center flex absolute lg:left-[10px] top-[290px] font-semibold  shadow-xl shadow-green-950/20 rounded-xl bg-white border-1 border-l-4 border-green-700"
                                    >
                                        Low Grown
                                    </motion.div>
                                </motion.div>

                            </div>
                        </div>
                        <div className="w-full h-[70px] text-[15px] md:text-[17px] lg:text-[19px] flex justify-center items-center font-mono">
                            Find more about what we do.
                        </div>                   
                        <div className="w-full h-[30px] md:h-[36px] lg:h-[41px] text-[11px] md:text-[13px] lg:text-[14px] mb-10 flex justify-center items-center pt-10">
                            <motion.button
                                onClick={() => navigate("/ourHeritage")}
                                className="mb-10 px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-white hover:text-black hover:border-2 hover:font-bold hover:text-[16px] hover:border-black cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </div>
                    
                </div>       
            </div>




            <div className="w-full h-screen">

                <div
                    className="
                        w-full h-screen
                        relative
                        bg-[url('/home.webp')]
                        bg-cover bg-center bg-no-repeat
                    "
                    >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/10 z-0" />
                
                    {/* CENTER CONTENT */}
                    <div className="relative z-50 w-full h-full
                                                flex flex-col">
                
                        
                                    
                        <div className="relative w-full h-full items-center justify-center flex flex-row  lg:pr-[600px]">
                            <div className="w-full h-[600px] flex flex-col justify-center items-center gap-[15px] lg:gap-[30px]">
                                <div className="w-[260px] md:w-[400px] lg:w-[540px] h-[160px] md:h-[160px] lg:h-[200px] flex flex-col justify-center items-center gap-5 md:gap-7 lg:gap-10 rounded-xl backdrop-blur-3xl border">
                                    <div className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold font-serif text-green-950">
                                        OUR VISION
                                    </div>
                                    <div className="text-[14px] md:text-[16px] lg:text-[18px] text-justify pl-9 pr-9 font-semibold">
                                        To be a dynamic and leading service organization.
                                    </div>
                                </div>
                                <div className="w-[260px] md:w-[400px] lg:w-[540px] h-[350px] flex flex-col justify-center items-center gap-10 rounded-xl backdrop-blur-3xl border">
                                    <div className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold font-serif text-green-950">
                                        OUR MISSION
                                    </div>
                                    <div className="text-[14px] md:text-[16px] lg:text-[18px] text-justify pl-9 pr-9 font-semibold">
                                        In our core business of Tea Broking, to be the preferred choice of the industry. Provide a professional and fully-integrated service, thus adding value to our clients, employees, shareholders in the county. Be a socially responsible corporate citizen.
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>




            <div className="relative w-full h-full">
                <div className="w-full h-full flex flex-col items-center pt-[50px] pb-[15px] md:gap-[3px] lg:gap-[5px]">
                    <div className="w-full h-[100px] flex justify-center items-center text-2xl md:text-[4xl] lg:text-5xl text-center font-semibold font-serif text-green-950">
                        OUR VALUES
                    </div>
                    <div className="w-[260px] md:w-[600px] lg:w-[840px] h-[100px] flex justify-center items-center text-center text-[15px] md:text-[17px] lg:text-[19px] font-medium">
                        Provide a professional and fully-integrated service, thus adding value to our clients, employees, shareholders and the country.
                            
                    </div>
                    <div className="w-full h-auto lg:h-[300px] pt-[100px] flex flex-col md:flex-col lg:flex-row  justify-center items-center gap-10 md:gap-14 lg:gap-15 pl-35 pr-35">
                        <motion.div 
                            className="h-[300px] w-[200px] lg:w-[240px] rotate-355 rounded-xl bgreen"
                            variants={arrowVariantsRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true}}
                            custom={1}
                            >
                            <div className="h-[300px] w-[200px] lg:w-[240px] rotate-5 flex flex-col justify-center items-center gap-12 bg-gray-100 shadow-2xl rounded-xl border-black border-[1px]">
                                <div className="font-serif font-semibold text-xl darkgreen w-full h-[40px] flex items-center justify-center text-white">
                                    ABILITY
                                </div>
                                <div className="flex text-justify font-semibold w-[180px] lg:w-[200px] p-2 ml-15 mr-15">
                                    Since the inception of Ceylon Tea Brokers, our extraordinary team has dedicated themselves to always
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="h-[300px] w-[200px] lg:w-[240px] rotate-355 rounded-xl bgreen"
                            variants={arrowVariantsRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 }}
                            custom={2}
                            >
                            <div className="h-[300px] w-[200px] lg:w-[240px] rotate-5 flex flex-col justify-center items-center gap-12 bg-gray-100 shadow-2xl rounded-xl border-black border-[1px]">
                                <div className="font-serif font-semibold text-xl darkgreen w-full h-[40px] flex items-center justify-center text-white">
                                    CREDIBILITY    
                                </div>
                                <div className="flex text-justify font-semibold w-[180px] lg:w-[200px] p-2 ml-15 mr-15">
                                    We value honesty above all else. We ensure it is reflected in our operations with stringent measures
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="h-[300px] w-[200px] lg:w-[240px] rotate-355 rounded-xl bgreen"
                            variants={arrowVariantsRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={3}
                            >
                            <div className="h-[300px] w-[200px] lg:w-[240px] rotate-5 flex flex-col justify-center items-center gap-12 bg-gray-100 shadow-2xl rounded-xl border-black border-[1px]">
                                <div className="font-serif font-semibold text-xl darkgreen w-full h-[40px] flex items-center justify-center text-white">
                                    INTEGRITY
                                </div>
                                <div className="flex text-justify font-semibold w-[180px] lg:w-[200px] p-2 ml-15 mr-15">
                                    Doing the right thing that benefits all our stakeholders, protecting their wellbeing and growth, is at
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="h-[300px] w-[200px] lg:w-[240px] rotate-355 rounded-xl bgreen"
                            variants={arrowVariantsRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={4}
                            >
                            <div className="h-[300px] w-[200px] lg:w-[240px] rotate-5 flex flex-col justify-center items-center gap-12 bg-gray-100 shadow-2xl rounded-xl border-black border-[1px]">
                                <div className="font-serif font-semibold text-xl darkgreen w-full h-[40px] flex items-center justify-center text-white">
                                    TEAM WORK
                                </div>
                                <div className="flex text-justify font-semibold w-[180px] lg:w-[200px] p-2 ml-15 mr-15">
                                    Striving towards a common goal, the main ingredient of our secret sauce that leads us to our success
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="w-full h-[30px] md:h-[36px] lg:h-[41px] text-[11px] md:text-[13px] lg:text-[14px] flex justify-center items-center pt-[130px] pb-[20px]">
                        <motion.button
                            onClick={() => navigate("/ourHeritage")}
                            className="mb-10 px-6 py-2 bg-black text-white rounded-lg font-semibold hover:bg-white hover:text-black hover:border-2 hover:font-bold hover:text-[16px] hover:border-black cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Read More
                        </motion.button>
                    </div>
                </div>
            </div>




            <div className="w-full h-screen">

                <div
                    className="
                        w-full h-screen
                        relative absolute
                        bg-[url('/home2.webp')]
                        bg-cover bg-center bg-no-repeat
                    "
                    >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 z-0" />
                
                    {/* CENTER CONTENT */}
                    <div className="relative z-50 w-full h-full
                                                flex flex-col">
                
                        
                                    
                        <div className="relative absolute w-full h-full items-center justify-center flex flex-row lg:pl-160">
                            <div className="w-full h-[600px] flex flex-col gap-[50px] items-center">
                                <div className="w-[260px] md:w-[380px] lg:w-[540px] h-[70px] md:h-[80px] lg:h-[100px] flex items-center justify-center gap-10 rounded-xl backdrop-blur-3xl border-[2px] border-black ml-[700px]">
                                    <div className="text-[12px] md:text-[15px] lg:text-[18px] text-justify pl-9 pr-9 font-mono font-semibold text-green-950 ">
                                        CEYLON TEA BROKERS PLC
                                    </div>
                                </div>
                                <div className="w-[260px] md:w-[400px] lg:w-[540px] h-[450px] flex flex-col justify-center items-center gap-10 rounded-xl backdrop-blur-3xl border-[2px] border-black ml-[700px]">
                                    <div className="text-2xl md:text-[3xl] lg:text-4xl text-center font-semibold font-serif text-green-950">
                                        HIGHER STANDARDS
                                    </div>
                                    <div className="text-[14px] md:text-[16px] lg:text-[18px] text-justify pl-9 pr-9 font-semibold text-gray-950">
                                        We believe that our customers are at the core of all 
                                        that we do. Their satisfaction, sustainable growth 
                                        and ultimate success matter to us as much as it does 
                                        to them. Accordingly, to support their ascension, 
                                        we promise to deliver services of the highest standards, 
                                        with precise accuracy, up-to-date knowledge of the 
                                        industry and a keen eye for quality, today, tomorrow 
                                        and always.
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>




            <div className="w-full h-full flex items-center flex-col text-center pt-[80px] pb-[20px]">

                <h2 className=" w-full text-2xl md:text-4xl lg:text-5xl font-bold mb-10 mt-[5px] font-serif text-green-950">
                    ROAD TO SUCCESS
                </h2>
                <p className="flex w-[260px] lg:w-[1100px] italic pl-3 pr-6 lg:px-10 lg:h-[80px] md:mx-30 lg:mx-25 text-[14px] md:text-[16px] lg:text-[18px] items-center justify-center font-semibold shadow-lg shadow-lime-950/80 rounded-r-3xl border-l-4 border-green-700">
                    There is no such thing as an overnight success. Successful organizations spend years facing challenges before becoming industry leaders.
                </p>

            </div>


            <div className="w-full h-full flex items-center justify-center pt-[20px] pb-[100px]">
                <YearCarousel/>
            </div>
            
             
                          



            <div className="w-full h-full flex flex-col items-center justify-center text-center gap-[50px] pb-20 bg-white">
                <div className="flex flex-col w-full h-full text-white lg:h-[250px] darkgreen pt-12 pb-10 gap-10 items-center">
                    <div className="text-2xl md:text-4xl lg:text-5xl px-10 lg:px-0 font-semibold font-serif flex item-center justify-center text-center tgold">
                        OUR ACCOMPLISHMENTS
                    </div>
                    <p className="h-auto w-[260px] md:w-[600px] lg:w-[1200px] text-[14px] md:text-[16px] lg:text-[18px] font-semibold flex item-center justify-center mx-10">
                        We are proud to say that Ceylon Tea Brokers handles over 16% of the total volume of Tea sold at the Colombo Tea Auction. To acknowledge our service and similar contributions to the industry, we have been awarded a myriad of awards.
                            
                    </p>   
                </div>
                <div className="lg:w-[1250px] h-full flex flex-col justify-center items-center lg:flex-row gap-16 mt-10 pr-1"> 
                    <motion.div 
                        className="rounded-lg rotate-356 bgreen h-[320px] w-[230px]"
                        variants={arrowVariantsRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true}}
                        custom={1}
                        >   
                        <div className="h-[320px] w-[230px] flex flex-col rotate-4 rounded-lg shadow-2xl border-[1px] bg-white border-black justify-center items-center">
                            <div className="text-[16px] md:text-[17px] lg:text-[18px] flex items-center justify-center font-serif w-full text-white darkgreen font-semibold p-8 h-[70px] mt-8 mb-6">
                                SILVER AWARD 
                            </div>
                            <div className="text-[14px] md:text-[15px] lg:text-[16px] text-justify flex items-center justify-center font-semibold p-3 mt-2 mb-3 h-[200px] w-[200px]">
                                Service Organization Category at the 54th Annual Report Awards competition organized by CA Sri Lanka.
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="rounded-lg rotate-356 bgreen h-[320px] w-[230px]"
                        variants={arrowVariantsRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true}}
                        custom={2}
                        >
                        <div className="h-[320px] w-[230px] flex flex-col rotate-4 rounded-lg shadow-2xl border-[1px] bg-white border-black justify-center items-center">
                            <div className="text-[16px] md:text-[17px] lg:text-[18px] flex items-center justify-center font-serif w-full text-white darkgreen font-semibold p-8 h-[70px] mt-8 mb-6">
                                CREDIBILITY
                            </div>
                            <div className="text-[14px] md:text-[15px] lg:text-[16px] text-justify flex items-center justify-center font-semibold p-3 mt-2 mb-3 h-[200px] w-[200px]">
                                We value honesty above all else. We ensure it is reflected in our operations with stringent measures.
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="rounded-lg rotate-356 bgreen h-[320px] w-[230px]"
                        variants={arrowVariantsRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true}}
                        custom={3}
                        >
                        <div className="h-[320px] w-[230px] flex flex-col rotate-4 rounded-lg shadow-2xl border-[1px] bg-white border-black justify-center items-center">
                            <div className="text-[16px] md:text-[17px] lg:text-[18px] flex items-center justify-center font-serif w-full text-white darkgreen font-semibold p-8 h-[70px] mt-8 mb-6">
                                OVERALL MERIT AWARD
                            </div>
                            <div className="text-[14px] md:text-[15px] lg:text-[16px] text-justify flex items-center justify-center font-semibold p-3 mt-2 mb-3 h-[200px] w-[200px]">
                                Overall Merit Award at the CMA Excellence in Integrated Reporting Awards 2018 organized by CMA Sri Lanka.
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="rounded-lg rotate-356 bgreen h-[320px] w-[230px]"
                        variants={arrowVariantsRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true}}
                        custom={4}
                        >
                        <div className="h-[320px] w-[230px] flex flex-col rotate-4 rounded-lg shadow-2xl border-[1px] bg-white border-black justify-center items-center">
                            <div className="text-[16px] md:text-[17px] lg:text-[17px] flex items-center justify-center font-serif w-full text-white darkgreen font-semibold p-8 h-[70px] mt-8 mb-6">
                                BEST INTEGRATED REPORT
                            </div>
                            <div className="text-[14px] md:text-[15px] lg:text-[16px] text-justify flex items-center justify-center font-semibold p-3 mt-2 mb-3 h-[200px] w-[200px]">
                                Striving towards a common goal, the main ingredient of our secret sauce that leads us to our success.
                            </div>
                        </div>
                    </motion.div>
                </div>
                  
            </div>




            <div className="w-full h-full bg pt-20 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-[35px] w-full lg:h-[300px] pt-1 items-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-semibold font-serif px-40 lg:px-50 gap-20 text-center text-black">
                        WHAT'S HAPPENING IN THE WORLD OF CEYLON TEA?
                    </div>

                    <div className="w-[260px] md:w-full lg:w-full flex flex-col items-center justify-center text-black">
                        <div className="flex pl-3 pr-6 lg:px-10 lg:h-[100px] md:mx-30 lg:mx-15 mx-20 text-[14px] md:text-[16px] lg:text-[18px] items-center justify-center text-center font-semibold shadow-2xl shadow-green-950/50 rounded-r-xl border-l-4 border-green-700">
                            <div>
                                Are you as passionate as we are about the splendors of Ceylon Tea?Our extensive selection of latest news from the world of Ceylon tea covers everything you want to know!
                                      
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 lg:mt-0 flex items-center justify-center w-[260px] md:h-auto lg:h-[500px]">
                    <OurLatestNews/>
                </div>

                <div className="w-full h-[30px] md:h-[36px] mt-10 mb-5 lg:h-[41px] text-[11px] md:text-[13px] lg:text-[14px] text-white flex justify-center items-center">
                    <motion.button
                        onClick={() => navigate("/news/ourLatest")}
                        className="mb-5 px-[5px] lg:px-6 py-1.5 lg:py-2 bg-black text-white rounded-lg font-semibold hover:bg-white hover:text-black hover:border-2 hover:font-bold hover:text-[16px] hover:border-black cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Latest News
                    </motion.button>
                </div>
                
            </div>



            <SubscribeSection/>




            <div className="w-full h-full flex flex-col">
                <Footer/>
            </div>

            <div className=" "><BackToTop /></div>

        </div>
    )
}