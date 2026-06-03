import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegFileLines } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default  function AdminFinancialStatementPage() {
    const [financialStatement, setFinancialStatement] = useState([]);

        useEffect(() => {
        axios.get("http://localhost:3000/api/admin/financial-statement")
            .then(response => {
                console.log(response.data);
                setFinancialStatement(response.data);
            })
            .catch(error => {
                console.error("Error fetching financial statement data:", error);
            });
    }, [])

    return (
        
        <div className="w-full max-h-[620px] border-[1px] rounded-lg bg-gray-300 flex flex-col p-8">
            
            <div>
                <h1 className="flex flex-row items-center text-3xl font-bold mb-10 gap-[13px]">
                    <FaRegFileLines /> Financial Statement
                </h1> 
            </div>

            {/* Table Wrapper */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-black border-gray-400">
                    
                    {/* Header */}
                    <thead className="h-[50px] text-xs uppercase bg-black text-gray-50  border-b border-white/10">
                        <tr>
                            <th className="px-5 py-3 border-white border-r-[1px]">Image</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Report ID</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Date</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Title</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">PDF</th>
                            <th className="px-5 py-3 ">Action</th> 
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {financialStatement.map((item, index) => (
                            <tr
                                key={index}
                                className="border-gray-500 border-b-[1px] bg-white transition duration-200"
                            >
                                <td className="px-5 py-2">
                                    <img 
                                        src={item.image} 
                                        className="w-[40px] h-[40px] object-cover rounded-md border border-black shadow-sm"
                                    />
                                </td>
                                <td className="px-5 py-2 font-bold">
                                    {item.reportID}
                                </td>
                                <td className="px-5 py-2">
                                    {new Date(item.date).toLocaleDateString()}
                                </td>
                                <td className="px-5 py-2"> 
                                    {item.title}
                                </td>
                                <td className="px-5 py-2 font-semibold">
                                    <a 
                                        href={item.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"   
                                    >
                                        View PDF
                                    </a>
                                </td>
                                <td className="px-5 py-2 text-center">
                                    <button 
                                        onClick={
                                            ()=> {
                                                const token = localStorage.getItem("token");
                                                axios.delete(`http://localhost:3000/api/admin/financial-statement/${item.reportID}` , {
                                                    headers: {
                                                        Authorization: `Bearer ${token}`
                                                    }
                                                }).then (
                                                    ()=> {
                                                        toast.success("financial statement deleted sucessfully ...");
                                                        setFinancialStatement(
                                                            financialStatement.filter(report => report.reportID !== item.reportID)
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
                to="/admin/add-financial-statement"
                className="w-[40px] h-[40px] flex justify-center items-center text-6xl border-[3px] border-black hover:border-green-600 rounded-full absolute right-[20px] bottom-[20px] hover:text-green-600 hover:bg-white"
            >
                <BiPlus/>
            </Link>
        </div>
    )
}