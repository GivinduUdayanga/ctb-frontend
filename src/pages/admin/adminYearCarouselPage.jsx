import axios from "axios";
import Loader from "../../components/loaded.jsx";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { TfiLayoutSlider } from "react-icons/tfi";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

export default  function AdminYearCarouselPage() {

    const [yearcarousel, setYearcarousel] = useState ([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(!loaded) {
            axios.get("http://localhost:3000/api/admin/year-carousel")
                .then(response => {
                    console.log(response.data);
                    setYearcarousel(response.data);
                    setLoaded(true)
                })
                .catch(error => {
                    console.error("Error fetching year carousel data:", error);
                });
        }
    }, [loaded]);

    return (
        
        <div className="w-full max-h-[620px] border-[1px] rounded-lg bg-gray-300 flex flex-col p-8">

            <div>
                <h1 className="flex flex-row items-center text-3xl font-bold mb-10 gap-[13px]">
                    <TfiLayoutSlider />Year Carousel
                </h1>
            </div>
            {/* Table Wrapper */}
            <div className="overflow-x-auto">
                {loaded ?
                    <table className="w-full table-fixed border-collapse text-sm">

                        {/* Header */}
                        <thead className="bg-black text-white uppercase text-sm">
                            <tr>
                                <th className="px-6 py-4 w-[100px] border-r border-gray-500 text-center">
                                    ID
                                </th>

                                <th className="px-6 py-4 w-[120px] border-r border-gray-500 text-center">
                                    Year
                                </th>

                                <th className="px-6 py-4 border-r border-gray-500 text-left">
                                    Description
                                </th>

                                <th className="px-6 py-4 w-[150px] text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead> 
                    

                        {/* Body */}
                        <tbody>

                            {yearcarousel.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-400 bg-white hover:bg-gray-100 transition duration-200"
                                    >
                                        
                                        <td className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                                            {item.carouselID}
                                        </td>

                                        <td className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                                            {item.year}
                                        </td>

                                        <td className="px-6 py-3 text-sm text-gray-700 max-w-[700px]">
                                            <div className="line-clamp-1">
                                                {item.description.join(", ")}
                                            </div>
                                        </td>

                                        <td className="px-6 py-3 text-center">
                                            <button
                                                onClick={() => {
                                                    const token = localStorage.getItem("token");

                                                    axios.delete(
                                                        `http://localhost:3000/api/admin/year-carousel/${item.carouselID}`,
                                                        {
                                                            headers: {
                                                                Authorization: `Bearer ${token}`
                                                            }
                                                        }
                                                    )
                                                    .then(() => {

                                                        toast.success("Year Carousel deleted successfully ...");

                                                        setYearcarousel(
                                                            yearcarousel.filter(
                                                                report => report.carouselID !== item.carouselID
                                                            )
                                                        );

                                                    })
                                                    .catch((error) => {

                                                        console.log(error);
                                                        toast.error("Delete failed");

                                                    });
                                                }}

                                                className="py-2 px-4 min-w-[90px] bg-red-500 hover:bg-red-300 hover:text-black hover:border-black hover:border-2 text-white font-bold rounded-lg transition duration-200"
                                            >
                                                Delete
                                            </button>
                                        </td>

                                    </tr>
                                )
                            )}
                        </tbody>
                </table>
                : <Loader/>}
            </div>

            <Link 
            to="/admin/add-year-carousel"
            className="w-[40px] h-[40px] flex justify-center items-center text-6xl border-[3px] border-black hover:border-green-600 rounded-full absolute right-[20px] bottom-[20px] hover:text-green-600 hover:bg-white"
            >
                <BiPlus/>
            </Link>
        </div>
    )
}