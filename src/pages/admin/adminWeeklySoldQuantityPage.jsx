import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { BsBarChartLine } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default  function AdminWeeklySoldQuantityPage() {

    const [weeklySoldQuantity, setWeeklySoldQuantity] = useState([]);

        useEffect(() => {
        axios.get("http://localhost:3000/api/admin/weekly-sold-quantity")
            .then(response => {
                console.log(response.data);
                setWeeklySoldQuantity(response.data);
            })
            .catch(error => {
                console.error("Error fetching weekly sold quantity data:", error);
            });
    }, [])

    return (
        
        <div className="w-full max-h-[620px] border-[1px] rounded-lg bg-gray-300 flex flex-col p-8">
            
            <div>
                <h1 className="flex flex-row items-center text-3xl font-bold mb-10 gap-[13px]">
                    <BsBarChartLine />Weekly Sold Quantity & Averages
                </h1> 
            </div>

            {/* Table Wrapper */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-black border-gray-400">
                    
                    {/* Header */}
                    <thead className="h-[50px] text-xs uppercase bg-black text-gray-50  border-b border-white/10">
                        <tr>
                            <th className="px-5 py-3 border-white border-r-[1px]">ID</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Year</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Sale Code</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Dollar Rate</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">HG Qty</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">HG Avg</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">MG Qty</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">MG Avg</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">LG Qty</th>
                            <th className="px-5 py-3 ">Action</th> 
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {weeklySoldQuantity.map((item, index) => (
                            <tr
                                key={index}
                                className="border-gray-500 border-b-[1px] bg-white transition duration-200"
                            >
                                <td className="px-5 py-2 font-bold">
                                    {item.quantityID}
                                </td>
                                <td className="px-5 py-2 font-bold">
                                    {item.year}
                                </td>
                                <td className="px-5 py-2 font-bold">
                                    {item.saleCode}
                                </td>
                                <td className="px-5 py-2 flex gap-[10px] items-center ">  
                                    <p className="font-bold">Rs.</p> {item.dollarRate}
                                </td>
                                <td className="px-5 py-2"> 
                                    {item.highGrownQty}
                                </td>
                                <td className="px-5 py-2">
                                    {item.highGrownAvg}
                                </td>
                                <td className="px-5 py-2">
                                    {item.mediumGrownQty}
                                </td>
                                <td className="px-5 py-2">
                                    {item.mediumGrownAvg}
                                </td>
                                <td className="px-5 py-2">
                                    {item.lowGrownQty}
                                </td>
                                <td className="px-5 py-2 text-center">
                                    <button 
                                        onClick={
                                            ()=> {
                                                const token = localStorage.getItem("token");
                                                axios.delete(`http://localhost:3000/api/admin/weekly-sold-quantity/${item.quantityID}` , {
                                                    headers: {
                                                        Authorization: `Bearer ${token}`
                                                    }
                                                }).then (
                                                    ()=> {
                                                        toast.success("weekly sold quantity deleted sucessfully ...");
                                                        setWeeklySoldQuantity(
                                                            weeklySoldQuantity.filter(report => report.quantityID !== item.quantityID)
                                                        );
                                                    }
                                                ).catch((error) => {
                                                    console.log(error);
                                                    toast.error("Delete failed"); 
                                                });
                                            }
                                        }
                                        className="py-1 w-[80px] bg-red-500 cursor-pointer hover:bg-green-200 hover:border-2 hover:border-black hover:text-black flex justify-center items-center text-white font-bold p-2 rounded-lg">
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Link 
                to="/admin/add-weekly-sold-quantity"
                className="w-[40px] h-[40px] flex justify-center items-center text-6xl border-[3px] border-black hover:border-green-600 rounded-full absolute right-[20px] bottom-[20px] hover:text-green-600 hover:bg-white"
            >
                <BiPlus/>
            </Link>
        </div>
    )
} 

