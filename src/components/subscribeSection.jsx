import { useState, useEffect } from "react";
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { BsPerson } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

export default function SubscribeSection() {

    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)

    const API = "http://localhost:3000/api"

    const handleSubscribe = async () => {
        if (!email) {
            return toast.error("Please enter your email")
        }

        try {
            const res = await axios.post(`${API}/subscribe`, { email })

            toast.success(res.data.message)
            setIsSubscribed(true)

        } catch (err) {
            console.log(err)
            toast.error(err.response?.data?.message || "Something went wrong")
        }
    }

    const handleUnsubscribe = async () => {

        const confirmEmail = prompt("Enter your email to unsubscribe:")

        if (!confirmEmail) {
            return toast.error("Email is required")
        }

        try {
            const res = await axios.delete(`${API}/unsubscribe`, {
                data: { email: confirmEmail }
            })

            toast.success(res.data.message)
            setIsSubscribed(false)
            setEmail("")

        } catch (err) {
            toast.error(err.response?.data?.message || "Error occurred")
        }
    }

    return (
        <div className="h-[600px]">

            <Toaster position="top-right" />

            <div className="w-full relative bg-[url('/home3.webp')] bg-cover bg-center bg-no-repeat">

                <div className="absolute inset-0 bg-black/15 z-0" />

                <div className="relative z-50 w-full h-full flex flex-col">

                    <div className="relative w-full h-[600px] items-center justify-center flex flex-row">

                        <div className="w-[260px] md:w-[650px] lg:w-[790px] h-[500px] flex flex-col  backdrop-blur-3xl text-white border-[1px] rounded-2xl">

                            <div 
                            style={{ textShadow: "-5px 3px 3px rgba(10,10,10,2.9)" }}
                            className="text-2xl md:text-4xl lg:text-6xl font-semibold font-serif mt-20 pb-5 flex justify-center items-center text-center">
                                SUBSCRIBE US
                            </div>

                            <div className="text-[13px] md:text-[16px] lg:text-[18px] px-15 pt-[5px] w-[260px] md:w-[500px] lg:w-[600px] flex lg:ml-[93px] text-center lg:pb-[10px]">
                                We will send you weekly market reports and other related information to your email
                            </div>
                            
                            
                            <div className="w-[260px] h-[250px] flex flex-col justify-center">
                                <div className="ml-[6px] lg:ml-[200px] lg:mb-[10px] w-full pb-[1px] font-semibold text-[13px] lg:text-[17px]">
                                    Your Email
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-[220px] md:w-[340px] lg:w-[400px] h-[30px] md:h-[35px] lg:h-[40px] text-[14px] md:text-[16px] lg:text-[18px] border-white border-[2px] bg-transparent rounded-2xl flex items-center ml-4.5 lg:ml-48 pl-5 focus:outline-none focus:ring-1 focus:ring-yellow-500 "
                                    placeholder="   example@gmail.com"
                                    
                                />

                                <div>
                                    {!isSubscribed ? (
                                        <motion.button
                                            onClick={handleSubscribe}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-7 py-1.5 bgold text-[14px] md:text-[16px] lg:text-[20px] text-green-950 font-bold rounded-full border-[1px] flex items-center justify-center ml-17.5 lg:ml-80 mt-12"
                                        >
                                            Subscribe
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            onClick={handleUnsubscribe}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-7 py-1.5 bg-red-400 text-[14px] md:text-[16px] lg:text-[20px] text-white font-bold rounded-full border-[1px] flex items-center justify-center ml-17.5 lg:ml-80 mt-10"
                                        >
                                            Unsubscribe
                                        </motion.button>
                                    )}
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}