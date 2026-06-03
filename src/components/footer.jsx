import { TiSocialFacebook } from "react-icons/ti";
import { TbBrandYoutube } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function Footer() {

    const navigate = useNavigate();

    return (
    
        <div className="flex flex-col items-center justify-center pt-10 pb-5 text-white bg-black">
                        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-32">
                            <div className="flex flex-col items-center justify-center gap-5">
                                <img 
                                    src="/ctb_logo.webp" 
                                    alt="Logo" 
                                    className="w-[180px] md:w-[200px] lg:w-[220px] h-auto"
                                />
                                <div className=" flex items-center justify-center pb-5 font-mono text-[13px] md:text-[14px]">
                                    Ceylon Tea Brokers PLC
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row gap-10 md:gap-20 lg:gap-20 pt-10">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-col items-center md:items-start lg:items-start md:text-[20px] text-[18px] font-semibold font-serif underline underline-offset-[6px]">
                                        Head Office
                                    </div>
                                    <div className="flex flex-col gap-3 font-mono text-[14px] md:text-[15px]">
                                        <div className="flex flex-col md:flex-col items-center md:items-start lg:items-start">
                                            <div>
                                                481, T.B. Jayah Mawatha,
                                            </div>
                                            <div>
                                                Colombo 10, Sri Lanka.
                                            </div>
                                            
                                        </div>
                                        <div>
                                            <div className="flex flex-row gap-3 justify-center md:justify-start">
                                                <div>
                                                    Tel : 
                                                </div>
                                                <div>
                                                    +94 11 4607777
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-3 justify-center md:justify-start">
                                                <div>
                                                    Fax :
                                                </div>
                                                <div>
                                                    +94 11 4607788 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:flex-col items-center md:items-start lg:items-start">
                                            general@ceylonteabrokers.com
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col md:flex-col items-center md:items-start lg:items-start text-[18px] md:text-[20px] font-semibold font-serif underline underline-offset-[6px]">
                                        Quick Links
                                    </div>
                                    <div className="flex flex-col md:flex-col items-center md:items-start lg:items-start font-mono text-[14px] md:text-[15px]">
                                        <div
                                        onClick={() => navigate("https://srilankateaboard.lk/")}
                                        className="cursor-pointer hover:text-teal-300">
                                            Sri Lanka Tea Board
                                        </div>
                                        <div onClick={() => navigate("https://www.tri.lk/")}
                                        className="cursor-pointer hover:text-teal-300">
                                            Tea Research Institute of Sri Lanka
                                        </div>
                                        <div
                                        onClick={() => navigate("https://worldteadirectory.com/")}
                                        className="cursor-pointer hover:text-teal-300">
                                            World Tea Directory
                                        </div>
                                        <div
                                        onClick={() => navigate("https://www.worldteanews.com/")}
                                        className="cursor-pointer hover:text-teal-300">
                                            World Tea News
                                        </div>
                                        <div
                                        onClick={() => navigate("https://www.economist.com/")}
                                        className="cursor-pointer hover:text-teal-300">
                                            World Economy
                                        </div>
                                        <div
                                        onClick={() => navigate("/ourHeritage")}
                                        className="cursor-pointer hover:text-teal-300">
                                            More Links
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-center pt-10 gap-6 md:gap-8">
                            <div >
                                <motion.button
                                onClick={() => navigate("https://www.facebook.com/ceylonteabrokers")} 
                                className="h-[25px] w-6 rounded border-[3px] text-[50px] flex items-center bg-black hover:text-teal-300 hover:border-teal-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                <TiSocialFacebook />
                                </motion.button>
                            </div>

                            <div> 
                                <motion.button
                                onClick={() => navigate("https://www.youtube.com/channel/UCslCBhHBbjm-sb_o2TCdG3Q")}
                                className="h-[20px] w-8 text-[50px] flex items-center rounded-2xl bg-black hover:text-teal-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                <TbBrandYoutube />
                                </motion.button>
                            </div>

                            <div> 
                                <motion.button
                                onClick={() => navigate("https://www.linkedin.com/company/ceylon-tea-brokers/posts/?feedView=all")}
                                className="h-[28px] w-8 rounded-xl text-[50px] flex items-center bg-black hover:text-teal-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                <TbBrandLinkedin />
                                </motion.button> 
                            </div>

                            <div >
                                <motion.button
                                onClick={() => navigate("https://www.instagram.com/Ceylon_tea_brokers/")}
                                className="h-[28px] w-7 rounded-xl text-[50px] flex items-center bg-black hover:text-teal-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                <FiInstagram />
                                </motion.button>
                            </div>

                            <div>
                                <motion.button
                                onClick={() => navigate("https://www.tiktok.com/@ceylonteabrokers")}
                                className="h-[25px] w-6 rounded border-[3px] text-[25px] flex items-center justify-center bg-black hover:text-teal-300 hover:border-teal-300 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                <AiOutlineTikTok />
                                </motion.button> 
                            </div>

                        </div> 
                        
                        <div className="text-center pt-10 text-[11px] md:text-[12px] font-mono underline underline-offset-[4px]">
                            Powered By CTB IT-Division 2026 
                        </div>
                    </div>
    )
}