import Header from "../components/header";
import Footer from "../components/footer.jsx";
import { motion } from "framer-motion";
import TypingText from "../components/typingText";
import { useNavigate } from "react-router-dom";
import BackToTop from "../components/backtotop.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/loaded.jsx";


export default function OurTeam() {

    const [ourTeam, setOurTeam] = useState([]);
    const [loaded, setLoaded] = useState(false);


    // ================= FETCH DATA =================
    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/our-team")
            .then((response) => {

                console.log(response.data);

                setOurTeam(response.data);
                setLoaded(true);

            })
            .catch((error) => {

                console.log("Error fetching team data:", error);

            });

    }, []);

     // ================= FILTER DATA =================

    const boardOfDirectors = ourTeam.filter(
        (member) => member.category === "BoardOfDirectors"
    );

    const keyPersons = ourTeam.filter(
        (member) => member.category === "OtherKeyPersonnel"
    );

    if(!loaded){
        return <Loader />
    }


    return (
        <div className="bg-teal-950">

                        <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">
            
                            {/* HEADER (ABOVE VIDEO) */}
                            <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                                <Header />
                            </div>
            
                        
            
                            {/* BACKGROUND VIDEO */}
                            <video
                                src="/video/ourteam.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="absolute inset-0 lg:w-full z-0"
                            />
            
                            {/* OPTIONAL DARK OVERLAY (for text readability) */}
                            <div className="absolute inset-0 bg-black/10 z-10"></div>
            
                        </div>

            {/* ================= PARAGRAPH ================= */}
            <div className="w-full flex items-center justify-center p-10 mt-15 mb-15 text-center">
                <div className="w-[1300px] text-[20px] lg:text-[25px] font-serif text-white leading-relaxed">
                    <TypingText
                        text="Our competent team is the heart and soul of our company, ensuring that we continuously offer our customers the best service, even during the most challenging times!"
                        delay={0.3}
                    />
                </div>
            </div>

            {/* BOARD OF DIRECTORS SECTION */}
            <div className="relative flex flex-col items-center pt-15 p-10 bg-white">

                <div className="text-2xl lg:text-5xl text-center text-green-950 font-semibold font-serif pt-20 pb-10">
                    _________ BOARD OF DIRECTORS _________
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[50px] pt-10 justify-center">
                    {boardOfDirectors.slice(0, 2).map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>

                {boardOfDirectors.length > 2 && (
                    <div className="grid sm:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-[50px] pt-10">
                        {boardOfDirectors.slice(2).map((member, index) => (
                            <TeamCard key={index} member={member} />
                        ))}
                    </div>
                )}
            </div>

            {/* KEY PERSONS */}
            <div className="flex flex-col items-center pt-20 p-10 bg-white">

                <div className="text-2xl lg:text-5xl text-center text-green-950 font-semibold font-serif pt-10 pb-10">
                    ________ OTHER KEY PERSONNEL ________
                </div>

                <div className="grid sm:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-[50px] pt-20">
                    {keyPersons.map((member, index) => (
                        <TeamCard key={index} member={member} />
                    ))}
                </div>
            </div>

            <Footer />
            <BackToTop />

        </div>
    );
}

/* =========================
   REUSABLE TEAM CARD
========================= */

function TeamCard({ member }) {

    return (
        <div className="h-[360px] flex flex-col gap-[12px]">

            <motion.div
                className="flex relative w-[230px] h-[315px] text-white overflow-hidden rounded-xl shadow"
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                
                {/* NAME */}
                <div className="w-full absolute z-20 text-[15px] font-semibold bg-black pl-2 top-[255px]">
                    {member.name}
                </div>

                {/* POSITION */}
                <div className="w-full h-[38px] rounded-b-xl absolute z-20 text-[10px] font-semibold bg-black pl-2 top-[277px]">
                    {member.position}
                </div>

                {/* IMAGE */}
                <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-[230px] h-[315px] object-cover z-0 pt-5 rounded-xl shadow bg-gradient-to-t from-gray-900 to-gray-100"
                />

                {/* HOVER OVERLAY */}
                <motion.div
                    variants={{
                        rest: { y: "100%", opacity: 0 },
                        hover: { y: "0%", opacity: 1 },
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 right-0 z-30
                    h-full bg-black/90 p-4 text-[12px]
                    leading-relaxed overflow-y-auto"
                >
                    <p style={{ whiteSpace: "pre-line" }}>
                        {member.description}
                    </p>
                </motion.div>

            </motion.div>

            
                    
        </div>
    );
}
