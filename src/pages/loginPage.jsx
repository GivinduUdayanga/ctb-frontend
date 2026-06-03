import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login() {

        console.log("Login clicked");

        // Prevent empty fields
        if (!email || !password) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:3000/api/users/login",
                {
                    email,
                    password,
                }
            );

            console.log(" RESPONSE:", res.data);

            //  Validate response
            if (!res.data?.token) {
                toast.error("Invalid server response");
                return;
            }

            //  Save token
            localStorage.setItem("token", res.data.token);

            toast.success("Login successful!");

            //  IMPORTANT: Delay navigation slightly (fix UI race issue)
            setTimeout(() => {
                if (res.data.role === "admin") {
                    console.log("Redirecting to ADMIN");
                    window.location.href = "/#/admin";   //  safer than navigate()
                } else {
                    console.log("Redirecting to HOME");
                    window.location.href = "/#/";
                }
            }, 800);

        } catch (error) {

            console.log("LOGIN ERROR:", error);

            if (error.response) {
                console.log("BACKEND: ", error.response.data);
                toast.error(error.response.data.message || "Login failed");
            } else {
                toast.error("Server not reachable");
            }
        }
    }

    return (
        <div className="w-full h-screen bg-[url('/ourheritage1.png')] bg-center bg-cover bg-no-repeat flex">
            
            <div className="absolute inset-0 bg-black/10 z-0" />

            <div className="w-[50%] h-full flex justify-center items-center">

                <div className="border-1 w-[470px] h-[600px] backdrop-blur-3xl shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[30px] z-10">

                    <img src="/ctb_logo.webp" className="w-[55px] h-[55px]" alt="logo"/>

                    <h1 className="text-[40px] font-bold mb-[20px] text-acce text-shadow-white">
                        Login
                    </h1>

                    {/* EMAIL */}
                    <div className="mb-[20px] w-full">
                        <p className="text-gray-950 font-black italic text-[17px]">
                            Your Email
                        </p>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            placeholder="username@gmail.com" 
                            className="w-full h-[50px] rounded-lg border text-black text-[17px] p-[10px] pl-10 focus:outline-none focus:ring-2 focus:ring-green-200 bg-transparent"
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="w-full flex flex-col">
                        <p className="text-gray-950 font-black italic text-[17px]">
                            Password
                        </p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" 
                            placeholder="password" 
                            className="w-full h-[50px] mb-[20px] text-black rounded-lg border p-[10px] pl-10 text-[17px] focus:outline-none focus:ring-2 focus:ring-green-200 bg-transparent"
                        />
                    </div>

                    <Link className="text-gray-800 font-semibold text-[15px] underline text-right pb-8 w-full hover:text-blue-500 underline-offset-4">
                        Forgot password?
                    </Link>

                    {/* LOGIN BUTTON */}
                    <button
                        onClick={login} 
                        className="w-full h-[50px] bg-secondary text-black font-bold text-[20px] rounded-lg hover:bg-green-300 transition-colors border-2 border-black">
                        Login
                    </button>

                    <p className="text-secondary font-semibold pt-5 text-[15px]">
                        Don't have an account yet? 
                        <Link to="/register" className="italic underline pl-3 font-bold text-[16px] hover:text-blue-500">
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-[50%] h-full flex justify-center items-center flex-col gap-8">
                
                <img src="/ctb_logo.webp" className="w-[150px] h-[150px]" alt="logo"/>
                
                <h1 
                    style={{ textShadow: "-5px 3px 3px rgba(10,10,10,2.9)" }}
                    className="text-[50px] text-amber-400/90 font-bold italic font-serif text-center">
                    Ceylon Tea Brokers PLC
                </h1>
                
            </div>

        </div>
    );
}