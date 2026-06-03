import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBarChartLine } from "react-icons/bs";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddWeeklySalesAveragesPage() {
 
    const [saleID, setSaleID] = useState ("");
    const [year, setYear] = useState ("");
    const [saleWeek, setSaleWeek] = useState ("");
    const [saleCode, setSaleCode] = useState ("");
    const [uvaHigh, setUvaHigh] = useState ("");
    const [westernHigh, setWesternHigh] = useState ("");
    const [totalHighGrown, setTotalHighGrown] = useState ("");
    const [uvaMedium, setUvaMedium] = useState ("");
    const [westernMedium, setWesternMedium] = useState ("");
    const [totalMediumGrown, setTotalMediumGrown] = useState ("");
    const [totalLowGrown, setTotalLowGrown] = useState ("");
    const [ctcHigh, setCtcHigh] = useState ("");
    const [ctcMedium, setCtcMedium] = useState ("");
    const [ctcLow, setCtcLow] = useState ("");
    const [orthodoxLow, setOrthodoxLow] = useState ("");
    const [total, setTotal] = useState ("");
    
    const navigate = useNavigate();

    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/weekly-sales-averages/next-id")
            .then((response) => {

                setSaleID(response.data.nextID);

            })
            .catch((error) => {

                console.log("Error fetching next sale ID:", error);

            });

    }, []);



    async function AddWeeklySalesAverages() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add a weekly sales average");
            navigate("/login");
            return;
        }

        if(
            saleID==="" || year==="" || saleWeek==="" || saleCode==="" || 
            uvaHigh==="" || westernHigh==="" || totalHighGrown==="" || 
            uvaMedium==="" || westernMedium==="" || totalMediumGrown==="" || 
            totalLowGrown==="" || ctcHigh==="" || ctcMedium==="" || ctcLow==="" || 
            orthodoxLow==="" || total===""
        ) {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            await axios.post("http://localhost:3000/api/admin/weekly-sales-averages/", {
                saleID: saleID,
                year: year,
                saleWeek: saleWeek,
                saleCode: saleCode,
                uvaHigh: uvaHigh,
                westernHigh: westernHigh,
                totalHighGrown: totalHighGrown,
                uvaMedium: uvaMedium,
                westernMedium: westernMedium,
                totalMediumGrown: totalMediumGrown,
                totalLowGrown: totalLowGrown,
                ctcHigh: ctcHigh,
                ctcMedium: ctcMedium,
                ctcLow: ctcLow,
                orthodoxLow: orthodoxLow,
                total: total
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("Weekly sales averages added successfully");
            navigate("/admin/weekly-sales-averages");

        } catch (error) {
            toast.error("Error adding weekly sales averages. Please try again.");
            console.log("Error adding weekly sales averages:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2xl shadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><BsBarChartLine />Add New Weekly Sales Average</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    
                    <div className="my-[10px] w-[20%]">
                        <label className="text-black font-semibold text-[18px]">Sale ID</label>
                        <input
                            type="number"
                            value={saleID}
                            disabled
                            className="w-full h-[30px] rounded border-2 shadow-2xl bg-gray-200 text-black px-[20px] cursor-not-allowed"
                        />
                    </div>
                    <div className="my-[10px] w-[20%]">
                        <label className="text-black font-semibold text-[18px]">Year</label>
                        <input type="number" value={year} onChange={(e) => {setYear(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">yyyy</p>
                    </div>
                    <div className="my-[10px] w-[25%]">
                        <label className="text-black font-semibold text-[18px]">Sale Week</label>
                        <input type="date" value={saleWeek} onChange={(e) => {setSaleWeek(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="my-[10px] w-[20%]">
                        <label className="text-black font-semibold text-[18px]">Sale Code</label>
                        <input type="number" value={saleCode} onChange={(e) => {setSaleCode(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">Provide a Sale Code (1, 2, ...)</p>
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">UVA High</label>
                        <input type="number" value={uvaHigh} onChange={(e) => {setUvaHigh(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Western High</label>
                        <input type="number" value={westernHigh} onChange={(e) => {setWesternHigh(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Total High Grown</label>
                        <input type="number" value={totalHighGrown} onChange={(e) => {setTotalHighGrown(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">UVA Medium</label>
                        <input type="number" value={uvaMedium} onChange={(e) => {setUvaMedium(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Western Medium</label>
                        <input type="number" value={westernMedium} onChange={(e) => {setWesternMedium(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Total Medium Grown</label>
                        <input type="number" value={totalMediumGrown} onChange={(e) => {setTotalMediumGrown(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Total Low grown</label>
                        <input type="number" value={totalLowGrown} onChange={(e) => {setTotalLowGrown(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">CTC High</label>
                        <input type="number" value={ctcHigh} onChange={(e) => {setCtcHigh(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">CTC Medium</label>
                        <input type="number" value={ctcMedium} onChange={(e) => {setCtcMedium(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">CTC Low</label>
                        <input type="number" value={ctcLow} onChange={(e) => {setCtcLow(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Orthodox Low</label>
                        <input type="number" value={orthodoxLow} onChange={(e) => {setOrthodoxLow(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Total</label>
                        <input type="number" value={total} onChange={(e) => {setTotal(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" /> 
                    </div>
                    
                    
                    <button
                        onClick={AddWeeklySalesAverages} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Weekly Sales Averages
                    </button>
                    <Link to="/admin/weekly-sales-averages"
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
