import Header from "../components/header";
import GoogleMap from "../components/GoogleMap.jsx";
import Footer from "../components/footer.jsx";
import BackToTop from "../components/backtotop.jsx";  
import { useState } from "react";   
import axios from "axios";         
import toast, { Toaster } from "react-hot-toast"; 
import { motion } from "framer-motion"
import { MdCall } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


export default  function Contact() {

    // ✅ CORRECT STATE (moved here)
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // VALID EMAIL
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    async function handleSubmit() {

        if (fullName === "" || email === "" || message === "") {
            toast.error("Please fill all fields");
            return;
        }

        if (!isValidEmail(email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        const loadingToast = toast.loading("Sending message...");

        try {
            await axios.post("http://localhost:3000/contact/", {
                fullName,
                email,
                message
            });

            toast.dismiss(loadingToast);
            toast.success("Message sent successfully");
            

            setFullName("");
            setEmail("");
            setMessage("");

        } catch (error) {
            console.error(error);
            toast.error("Error sending message. Please try again.");
        }
    }

    function capitalizeWords(text) {
        return text
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());
    }

    return  (
        <div className="bg-white">
             <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                {/* HEADER (ABOVE VIDEO) */}
                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>

                {/* BACKGROUND VIDEO */}
                <video
                    src="/video/contactus.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* OPTIONAL DARK OVERLAY (for text readability) */}
                <div className="absolute inset-0 bg-black/10 z-10"></div>

            </div>



                    <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-20 p-10 mt-20 mb-10">
                        <div className="h-[500px] w-[280px] lg:w-[500px] flex flex-col items-center justify-center gap-16 shadow-2xl rounded-xl">
                            <div className="flex justify-center items-center text-[21px] md:text-[xl] lg:text-2xl font-semibold font-serif">
                                Head Office
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-row items-center gap-5">
                                    <div>
                                        <MdCall 
                                            className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-semibold font-serif text-[12px] lg:text-[13px]"> 
                                            Call Us
                                        </div>
                                        <div className="text-[13px] lg:text-[14px]">
                                            +94 11 4607777
                                        </div> 
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <div>
                                        <FaFax 
                                            className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-semibold font-serif text-[12px] lg:text-[13px]">
                                            Fax Us
                                        </div>
                                        <div className="text-[13px] lg:text-[14px]">
                                            +94 11 4607788
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <div>
                                        <MdEmail 
                                            className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-semibold font-serif text-[12px] lg:text-[13px]">
                                            Email Us
                                        </div>
                                        <div className="text-[13px] lg:text-[14px]">
                                            general@ceylonteabrokers.com
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-5">
                                    <div>
                                        <FaLocationDot 
                                            className="w-[30px] lg:w-[50px] h-[30px] lg:h-[50px]"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-semibold font-serif text-[12px] lg:text-[13px]">
                                            Visit Us
                                        </div>
                                        <div className="text-[13px] lg:text-[14px]">
                                            481, T.B. Jayah Mawatha, Colombo 10, Sri Lanka.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-1 lg:border-0 rounded-xl h-[500px] w-[320px] lg:w-[500px] flex flex-col gap-10 justify-center items-center lg:pt-10">

                            <div className="text-[21px] lg:text-2xl font-semibold font-serif bg-green-950/15 py-1 px-5 rounded-full w-max">
                                Reach Us
                            </div> 

                            <div className="flex flex-col gap-10">

                                <input
                                    type="text"
                                    placeholder="Full name"
                                    value={fullName}
                                    onChange={(e) => setFullName(capitalizeWords(e.target.value))}
                                    className="w-[300px] lg:w-[500px] h-[30px] pl-4 pr-4 border font-semibold rounded"
                                />

                                <input 
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-[300px] lg:w-[500px] h-[30px] pl-4 pr-4 border font-semibold rounded"
                                />

                                <textarea 
                                    rows={5}
                                    placeholder="Your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-[300px] lg:w-[500px] h-[150px] pl-4 pr-4 border font-semibold rounded"
                                /> 
                            </div>

                            <motion.button
                                onClick={handleSubmit}
                                className="mb-10 px-6 py-2 bg-black text-white rounded-full font-semibold"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit
                            </motion.button>

                        </div>
                    </div>




                    <div className="flex items-center justify-center">
                    </div>




                    <div className="w-full h-full lg:h-[600px] flex flex-col lg:flex-row items-center lg:justify-center pt-5 pb-10 gap-10 lg:gap-36 lg:pb-15 lg:pt-15 mt-10 mb-10">
                        <div className="flex flex-col gap-10 ">
                            <div className="font-semibold text-[14px] md:text-[15px] lg:text-[16px] bg-green-950/15 py-1 px-5 rounded-full w-max">
                                SAMPLE ROOM
                            </div>
                            <div className="w-[280px] lg:w-[320px] h-[380px] flex flex-col gap-10 shadow-2xl p-6 rounded-xl">
                                <div className="flex items-center justify-center text-[16px] md:text-xl lg:text-2xl font-semibold font-serif"> 
                                    GRANDPASS
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <MdCall 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]"> 
                                                Call Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                +94 11 245 2733
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <MdEmail 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]">
                                                Email Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                general@ceylonteabrokers.com
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <FaLocationDot 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]">
                                                Visit Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                <div>No. 74, Dewass Lane,</div>
                                                <div>Grandpass, Colombo 14.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <div className="flex flex-col gap-10 ">
                            <div className="font-semibold text-[14px] md:text-[15px] lg:text-[16px] bg-green-950/15 py-1 px-5 rounded-full w-max">
                                WAREHOUSE
                            </div>
                            <div className="w-[320px] h-[380px] flex flex-col gap-10 shadow-2xl p-6 rounded-xl">
                                <div className="flex items-center justify-center text-[16px] md:text-xl lg:text-2xl font-semibold font-serif"> 
                                    GRANDPASS
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <MdCall 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]"> 
                                                Call Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                +94 11 474 0956
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <MdEmail 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]">
                                                Email Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                general@ceylonteabrokers.com
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <FaLocationDot 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]">
                                                Visit Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                <div>No. 74, Dewass Lane,</div>
                                                <div>Grandpass, Colombo 14.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>

                        <div className="flex flex-col gap-10 ">
                            <div className="font-semibold text-[14px] md:text-[15px] lg:text-[16px] bg-green-950/15 py-1 px-5 rounded-full w-max">
                                WAREHOUSE
                            </div>
                            <div className="w-[320px] h-[380px] flex flex-col gap-10 shadow-2xl p-6 rounded-xl">
                                <div className="flex items-center justify-center text-[16px] md:text-xl lg:text-2xl font-semibold font-serif"> 
                                    WATTALA
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <MdCall 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]"> 
                                                Call Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                +94 11 429 4964
                                            </div> 
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <MdEmail 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]">
                                                Email Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                general@ceylonteabrokers.com
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-center gap-5">
                                        <div>
                                            <FaLocationDot 
                                                className="w-[20px] lg:w-[30px] h-[20px] lg:h-[30px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <div className="font-semibold font-serif text-[11px] lg:text-[13px]">
                                                Visit Us
                                            </div>
                                            <div className="text-[12px] md:text-[13px] lg:text-[15px]">
                                                <div>No. 26, Welikadamulla Rode,</div>
                                                <div>Enderamulla, Wattala.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>

                    </div>




                    <div className="w-full h-[600px] flex items-center justify-center bg-green-950 mb-20">
                        <GoogleMap />

                    </div>
    
        
                    
                    <div>
                        <Footer/>
                    </div>

                    <BackToTop />
                    
                </div>
    )
}