import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBarChartLine } from "react-icons/bs";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddMonthlySoldQuantityPage () {

    const [quantityID, setQuantityID] = useState ("");
    const [year, setYear] = useState ("");
    const [month, setMonth] = useState ("");
    const [dollarRate, setDollarRate] = useState ("");
    const [highGrownQty, setHighGrownQty] = useState ("");
    const [highGrownAvg, setHighGrownAvg] = useState ("");
    const [mediumGrownQty, setMediumGrownQty] = useState ("");
    const [mediumGrownAvg, setMediumGrownAvg] = useState ("");
    const [lowGrownQty, setLowGrownQty] = useState ("");
    const [lowGrownAvg, setLowGrownAvg] = useState ("");



    const navigate = useNavigate();

    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/monthly-sold-quantity/next-id")
            .then((response) => {

                setQuantityID(response.data.nextID);

            })
            .catch((error) => {

                console.log("Error fetching next ID:", error);

            });

    }, []);

    async function AddMonthlySoldQuantity() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add a monthly sales average");
            navigate("/login");
            return;
        }

        if(
            quantityID==="" || year==="" || month==="" || dollarRate==="" || 
            highGrownQty==="" || highGrownAvg==="" || mediumGrownQty==="" || mediumGrownAvg==="" || lowGrownQty==="" || lowGrownAvg===""
        ) {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            await axios.post("http://localhost:3000/api/admin/monthly-sold-quantity/", {
                quantityID: quantityID,
                year: year,
                month: month,
                dollarRate: dollarRate,
                highGrownQty: highGrownQty,
                highGrownAvg: highGrownAvg,
                mediumGrownQty: mediumGrownQty,
                mediumGrownAvg: mediumGrownAvg,
                lowGrownQty: lowGrownQty,
                lowGrownAvg: lowGrownAvg
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("Monthly sold quantity added successfully");
            navigate("/admin/monthly-sold-quantity");

        } catch (error) {
            toast.error("Error adding Monthly sold quantity. Please try again.");
            console.log("Error adding Monthly sold quantity:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2xl shadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><BsBarChartLine />Add New Monthly Sold Quantity</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Quantity ID</label>
                        <input
                            type="number"
                            value={quantityID}
                            disabled
                            className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] bg-gray-200 cursor-not-allowed"
                        />
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold text-[18px]">Year</label>
                        <input type="number" value={year} onChange={(e) => {setYear(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">yyyy</p>
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold text-[18px]">Month</label>
                        <input type="month" value={month} onChange={(e) => {setMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">Select month</p>
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold text-[18px]">Dollar Rate</label>
                        <input type="number" value={dollarRate} onChange={(e) => {setDollarRate(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">month's rate</p>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">High Grown</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={highGrownQty} onChange={(e) => {setHighGrownQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={highGrownAvg} onChange={(e) => {setHighGrownAvg(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Avg</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Medium Grown</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={mediumGrownQty} onChange={(e) => {setMediumGrownQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={mediumGrownAvg} onChange={(e) => {setMediumGrownAvg(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Avg</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Low Grown</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={lowGrownQty} onChange={(e) => {setLowGrownQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={lowGrownAvg} onChange={(e) => {setLowGrownAvg(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Avg</p>
                            </div>
                        </div>
                    </div>
                    
                
                    
                    
                    <button
                        onClick={AddMonthlySoldQuantity} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Monthly Sold Quantity
                    </button>
                    <Link to="/admin/monthly-sold-quantity"
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