import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegFileLines } from "react-icons/fa6";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddRegulationsPage () {

    const [reportID, setReportID] = useState ("");
    const [year, setYear] = useState ("");
    const [image, setImage] = useState ("");
    const [title, setTitle] = useState ("");
    const [pdf, setPdf] = useState ("");
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/api/admin/regulations")
            .then((response) => {

                if (response.data.length > 0) {

                    const lastID = response.data[0].reportID;
                    setReportID(lastID + 1);

                } else {

                    setReportID(1);

                }
            })
            .catch((error) => {
                console.log("Error fetching report ID:", error);
                setReportID(1);
            });

    }, []);

    async function addRegulation() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add a regulation.");
            navigate("/login");
            return;
        }

        if( year==="" || image==="" || title==="" || pdf==="") {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            await axios.post("http://localhost:3000/api/admin/regulations/", {
                year: year,
                image: image,
                title: title,
                pdf: pdf,
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("Regulation added successfully");
            navigate("/admin/regulations");

        } catch (error) {
            toast.error("Error adding regulation. Please try again.");
            console.log("Error adding regulation:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2xl shadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><FaRegFileLines />Add New Regulation</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Report ID</label>
                        <input
                            type="number"
                            value={reportID}
                            disabled
                            className="w-full h-[30px] rounded border-2 shadow-2xl text-black bg-gray-100 px-[20px] cursor-not-allowed focus:outline-none"
                        />
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Year</label> 
                        <input type="year" value={year} onChange={(e) => {setYear(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500"  />
                        <p className="text-sm text-gray-500 w-full text-right">YYYY</p>
                        
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Image</label>
                        <input type="text" value={image} onChange={(e) => {setImage(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">img - url</p>
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Title</label>
                        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">PDF</label>
                        <input type="text" value={pdf} onChange={(e) => {setPdf(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">pdf - url</p>
                    </div>

                    <button
                        onClick={addRegulation} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Regulation
                    </button>
                    <Link to="/admin/regulations"
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