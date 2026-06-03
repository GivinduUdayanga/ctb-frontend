import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";


export default function AdminAddMonthlyProductionPage () {

    const [productionID, setproductionID] = useState(1);
    const [year, setYear] = useState ("");
    const [month, setMonth] = useState ("");

    const [orthodoxHighMonth, setOrthodoxHighMonth] = useState (""); 
    const [orthodoxHighYtd, setOrthodoxHighYtd] = useState ("");
    const [orthodoxMediumMonth, setOrthodoxMediumMonth] = useState (""); 
    const [orthodoxMediumYtd, setOrthodoxMediumYtd] = useState ("");
    const [orthodoxLowMonth, setOrthodoxLowMonth] = useState ("");
    const [orthodoxLowYtd, setOrthodoxLowYtd] = useState ("");

    const [ctcHighMonth, setCtcHighMonth] = useState (""); 
    const [ctcHighYtd, setCtcHighYtd] = useState ("");
    const [ctcMediumMonth, setCtcMediumMonth] = useState (""); 
    const [ctcMediumYtd, setCtcMediumYtd] = useState ("");
    const [ctcLowMonth, setCtcLowMonth] = useState ("");
    const [ctcLowYtd, setCtcLowYtd] = useState ("");

    const [greenTeaHighMonth, setGreenTeaHighMonth] = useState (""); 
    const [greenTeaHighYtd, setGreenTeaHighYtd] = useState ("");
    const [greenTeaMediumMonth, setGreenTeaMediumMonth] = useState (""); 
    const [greenTeaMediumYtd, setGreenTeaMediumYtd] = useState ("");
    const [greenTeaLowMonth, setGreenTeaLowMonth] = useState ("");
    const [greenTeaLowYtd, setGreenTeaLowYtd] = useState ("");

    const [totalTeaProductionHighMonth, setTotalTeaProductionHighMonth] = useState (""); 
    const [totalTeaProductionHighYtd, setTotalTeaProductionHighYtd] = useState ("");
    const [totalTeaProductionMediumMonth, setTotalTeaProductionMediumMonth] = useState (""); 
    const [totalTeaProductionMediumYtd, setTotalTeaProductionMediumYtd] = useState ("");
    const [totalTeaProductionLowMonth, setTotalTeaProductionLowMonth] = useState ("");
    const [totalTeaProductionLowYtd, setTotalTeaProductionLowYtd] = useState ("");
    



    const navigate = useNavigate();

    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/monthly-production/next-id")
            .then((response) => {
                setproductionID(response.data.nextID);
            })
            .catch((error) => {
                console.log("Error fetching next ID:", error);
            });

    }, []);

    async function AddMonthlyProduction() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add a monthly production");
            navigate("/login");
            return;
        }

        if(
            productionID==="" || year==="" || month==="" || 
            orthodoxHighMonth==="" || orthodoxHighYtd==="" || orthodoxMediumMonth==="" || orthodoxMediumYtd==="" || orthodoxLowMonth==="" || orthodoxLowYtd==="" ||
            ctcHighMonth==="" || ctcHighYtd==="" || ctcMediumMonth==="" || ctcMediumYtd==="" || ctcLowMonth==="" || ctcLowYtd===""|| 
            greenTeaHighMonth==="" || greenTeaHighYtd==="" || greenTeaMediumMonth==="" || greenTeaMediumYtd==="" || greenTeaLowMonth==="" || greenTeaLowYtd===""|| 
            totalTeaProductionHighMonth==="" || totalTeaProductionHighYtd==="" || totalTeaProductionMediumMonth==="" || totalTeaProductionMediumYtd==="" || totalTeaProductionLowMonth==="" || totalTeaProductionLowYtd===""
        ) {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            await axios.post("http://localhost:3000/api/admin/monthly-production/", {
                productionID: productionID,
                year: year,
                month: `${month}-01`,

                orthodoxHighMonth: orthodoxHighMonth,
                orthodoxHighYtd: orthodoxHighYtd,
                orthodoxMediumMonth: orthodoxMediumMonth,
                orthodoxMediumYtd: orthodoxMediumYtd,
                orthodoxLowMonth: orthodoxLowMonth,
                orthodoxLowYtd: orthodoxLowYtd,

                ctcHighMonth: ctcHighMonth,
                ctcHighYtd: ctcHighYtd,
                ctcMediumMonth: ctcMediumMonth,
                ctcMediumYtd: ctcMediumYtd,
                ctcLowMonth: ctcLowMonth,
                ctcLowYtd: ctcLowYtd,

                greenTeaHighMonth: greenTeaHighMonth,
                greenTeaHighYtd: greenTeaHighYtd,
                greenTeaMediumMonth: greenTeaMediumMonth,
                greenTeaMediumYtd: greenTeaMediumYtd,
                greenTeaLowMonth: greenTeaLowMonth,
                greenTeaLowYtd: greenTeaLowYtd,

                totalTeaProductionHighMonth: totalTeaProductionHighMonth,
                totalTeaProductionHighYtd: totalTeaProductionHighYtd,
                totalTeaProductionMediumMonth: totalTeaProductionMediumMonth,
                totalTeaProductionMediumYtd: totalTeaProductionMediumYtd,
                totalTeaProductionLowMonth: totalTeaProductionLowMonth,
                totalTeaProductionLowYtd: totalTeaProductionLowYtd,
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("Monthly production added successfully");
            navigate("/admin/monthly-production");

        } catch (error) {
            toast.error("Error adding Monthly production. Please try again.");
            console.log("Error adding Monthly production:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2xl shadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><AiOutlineProduct />Add New Monthly Productions</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold text-[18px]">Production ID</label>
                        <input
                            type="number"
                            value={productionID}
                            disabled
                            className="w-full h-[30px] rounded border-2 shadow-2xl text-gray-500 bg-gray-100 px-[20px] cursor-not-allowed focus:outline-none"
                        />
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold text-[18px]">Year</label>
                        <input type="number" value={year} onChange={(e) => {setYear(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">yyyy</p>
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold text-[18px]">Month</label>
                        <input type="month" value={month} onChange={(e) => {setMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">Select Month</p>
                    </div>
                    
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-bold text-[18px] underline">ORTHODOX</label> 
                        <label className="text-black font-semibold text-[18px] ml-30">High</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={orthodoxHighMonth} onChange={(e) => {setOrthodoxHighMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={orthodoxHighYtd} onChange={(e) => {setOrthodoxHighYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                        <label className="text-black font-semibold text-[18px] ml-30">Medium</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={orthodoxMediumMonth} onChange={(e) => {setOrthodoxMediumMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={orthodoxMediumYtd} onChange={(e) => {setOrthodoxMediumYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                        <label className="text-black font-semibold text-[18px] ml-30">Low</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={orthodoxLowMonth} onChange={(e) => {setOrthodoxLowMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={orthodoxLowYtd} onChange={(e) => {setOrthodoxLowYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-bold text-[18px] underline">CTC</label>
                        <label className="text-black font-semibold text-[18px] ml-30">High</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={ctcHighMonth} onChange={(e) => {setCtcHighMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={ctcHighYtd} onChange={(e) => {setCtcHighYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                        <label className="text-black font-semibold text-[18px] ml-30">Medium</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={ctcMediumMonth} onChange={(e) => {setCtcMediumMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={ctcMediumYtd} onChange={(e) => {setCtcMediumYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                        <label className="text-black font-semibold text-[18px] ml-30">Low</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={ctcLowMonth} onChange={(e) => {setCtcLowMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={ctcLowYtd} onChange={(e) => {setCtcLowYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-bold text-[18px] underline">Green Tea</label>
                        <label className="text-black font-semibold text-[18px] ml-30">High</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={greenTeaHighMonth} onChange={(e) => {setGreenTeaHighMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={greenTeaHighYtd} onChange={(e) => {setGreenTeaHighYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                        <label className="text-black font-semibold text-[18px] ml-30">Medium</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={greenTeaMediumMonth} onChange={(e) => {setGreenTeaMediumMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={greenTeaMediumYtd} onChange={(e) => {setGreenTeaMediumYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                        <label className="text-black font-semibold text-[18px] ml-30">Low</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={greenTeaLowMonth} onChange={(e) => {setGreenTeaLowMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={greenTeaLowYtd} onChange={(e) => {setGreenTeaLowYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                    </div>

                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-bold text-[18px] underline">Total Tea Production</label>
                        <label className="text-black font-semibold text-[18px] ml-30">High</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={totalTeaProductionHighMonth} onChange={(e) => {setTotalTeaProductionHighMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={totalTeaProductionHighYtd} onChange={(e) => {setTotalTeaProductionHighYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                        <label className="text-black font-semibold text-[18px] ml-30">Medium</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={totalTeaProductionMediumMonth} onChange={(e) => {setTotalTeaProductionMediumMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={totalTeaProductionMediumYtd} onChange={(e) => {setTotalTeaProductionMediumYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                        <label className="text-black font-semibold text-[18px] ml-30">Low</label>
                        <div className="flex flex-row flex-wrap justify-between ml-30">
                            <div className="w-[45%]">
                                <input type="number" value={totalTeaProductionLowMonth} onChange={(e) => {setTotalTeaProductionLowMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For month</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={totalTeaProductionLowYtd} onChange={(e) => {setTotalTeaProductionLowYtd(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">For YTD</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <button
                        onClick={AddMonthlyProduction} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Monthly Production
                    </button>
                    <Link to="/admin/monthly-production"
                    className="w-[45%]">
                        <button className="w-full h-[40px] bg-red-700 text-gray-100 rounded hover:bg-red-300 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Cancel
                        </button>
                    </Link>
                    
                </div>
                <div className="flex flex-row justify-between mx-20">
                    
                </div>
            </div>
        </div>
    )
}