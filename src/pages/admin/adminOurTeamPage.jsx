import axios from "axios";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { BsPersonAdd } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default  function AdminOurTeamPage() {
    const [ourTeam, setOurTeam] = useState([]);

        useEffect(() => {
        axios.get("http://localhost:3000/api/admin/our-team")
            .then(response => {
                console.log(response.data);
                setOurTeam(response.data);
            })
            .catch(error => {
                console.error("Error fetching our team data:", error);
            });
    }, [])

    return (
        
        <div className="w-full max-h-[620px] border-[1px] rounded-lg bg-gray-300 flex flex-col p-8">
            
            <div>
                <h1 className="flex flex-row items-center text-3xl font-bold mb-10 gap-[13px]">
                    <BsPersonAdd /> Our Team
                </h1> 
            </div>

            {/* Table Wrapper */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-black border-gray-400">
                    
                    {/* Header */}
                    <thead className="h-[50px] text-xs uppercase bg-black text-gray-50  border-b border-white/10">
                        <tr>
                            <th className="px-5 py-3 border-white border-r-[1px]">Image</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">ID</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Category</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Name</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Position</th>
                            <th className="px-5 py-3 border-white border-r-[1px]">Description</th>
                            <th className="px-5 py-3 ">Action</th> 
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {ourTeam.map((item, index) => (
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
                                    {item.memberID}
                                </td>
                                <td className="px-5 py-2">
                                    {item.category}
                                </td>
                                <td className="px-5 py-2"> 
                                    {item.name}
                                </td>
                                <td className="px-5 py-2">
                                    {item.position}
                                </td>
                                <td className="px-5 py-2">
                                     {item.description?.split(" ").slice(0, 10).join(" ")}...
                                </td>
                                <td className="px-5 py-2 text-center">
                                    <button 
                                        onClick={
                                            ()=> {
                                                const token = localStorage.getItem("token");
                                                axios.delete(`http://localhost:3000/api/admin/our-team/${item.memberID}` , {
                                                    headers: {
                                                        Authorization: `Bearer ${token}`
                                                    }
                                                }).then (
                                                    ()=> {
                                                        toast.success("annual reports deleted sucessfully ...");
                                                        setOurTeam(
                                                            ourTeam.filter(report => report.memberID !== item.memberID)
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
                to="/admin/add-our-team"
                className="w-[40px] h-[40px] flex justify-center items-center text-6xl border-[3px] border-black hover:border-green-600 rounded-full absolute right-[20px] bottom-[20px] hover:text-green-600 hover:bg-white"
            >
                <BiPlus/>
            </Link>
        </div>
    )
}