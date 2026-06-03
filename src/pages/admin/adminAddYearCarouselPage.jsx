import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TfiLayoutSlider } from "react-icons/tfi";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddYearCarouselPage () {

    const [carouselID, setCarouselID] = useState ("");
    const [year, setYear] = useState ("");
    const [description, setDescription] = useState ("");
    
    const navigate = useNavigate();

    useEffect(() => {

        axios
            .get(
                "http://localhost:3000/api/admin/year-carousel/next-id"
            )

            .then((response) => {

                setCarouselID(response.data.nextID);

            })

            .catch((error) => {

                console.log(
                    "Error fetching next carousel ID:",
                    error
                );

            });

    }, []);

    async function addYearCarouselItem() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add year carousel items.");
            navigate("/login");
            return;
        }

        if( carouselID==="" || year==="" || description==="") {
            toast.error("Please fill all required fields");
            return;
        }

        try {
            
            const descriptionInArray = description
                .split("||")
                .map(item => item.trim())
                .filter(item => item !== "");

            await axios.post("http://localhost:3000/api/admin/year-carousel/", {
            
                carouselID: carouselID,
                year: year,
                description: descriptionInArray,
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("New year carousel item added successfully");
            navigate("/admin/year-carousel");

        } catch (error) {
            toast.error("Error adding new year carousel item. Please try again.");
            console.log("Error adding new year carousel item:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2x slhadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><TfiLayoutSlider />Add New Year Carousel Item</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    
                    
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Carousel ID</label>
                        <input
                            type="text"
                            value={carouselID}
                            disabled
                            className="
                                w-full h-[30px]
                                rounded border-2
                                shadow-2xl
                                text-black px-[20px]
                                bg-gray-100
                                cursor-not-allowed
                            "
                        />
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Year</label>
                        <input type="text" value={year} onChange={(e) => {setYear(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Description</label>
                        <textarea type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">Separate multiple description points with "||"</p>
                    </div>
                    

                    <button
                        onClick={addYearCarouselItem} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Year Carousel Item
                    </button>
                    <Link to="/admin/year-carousel"
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