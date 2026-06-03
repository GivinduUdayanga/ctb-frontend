import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuNewspaper } from "react-icons/lu";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddLocalTeaNewsPage () {

    const [newsID, setNewsID] = useState ("");
    const [image, setImage] = useState ("");
    const [title, setTitle] = useState ("");
    const [fullDescription, setFullDescription] = useState ("");
    const [shortDescription, setShortDescription] = useState ("");
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/api/admin/local-tea-news/next-id")
            .then(res => {
                setNewsID(res.data.nextID);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    async function addLocalTeaNews() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add local tea news.");
            navigate("/login");
            return;
        }

        if(newsID==="" || image==="" || title==="" || fullDescription==="" || shortDescription==="") {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            await axios.post("http://localhost:3000/api/admin/local-tea-news/", {
                newsID: newsID,
                image: image,
                title: title,
                fullDescription: fullDescription,
                shortDescription: shortDescription
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("Local tea news added successfully");
            navigate("/admin/local-tea-news");

        } catch (error) {
            toast.error("Error adding local tea news. Please try again.");
            console.log("Error adding local tea news:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2xl shadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><LuNewspaper />Add New Local Tea News</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">News ID</label>
                        <input 
                            type="number" 
                            value={newsID} 
                            disabled
                            className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] bg-gray-200 cursor-not-allowed"
                        />
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Image</label>
                        <input type="text" value={image} onChange={(e) => {setImage(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">img - url</p>
                    </div>
                    <div className="my-[10px] w-[70%]">
                        <label className="text-black font-semibold">Title</label>
                        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Full Description</label> 
                        <textarea type="text" value={fullDescription} onChange={(e) => {setFullDescription(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500"  />
                        
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Short Description</label>
                        <textarea type="text" value={shortDescription} onChange={(e) => {setShortDescription(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">copy paste the full description part</p>
                    </div>
                    

                    <button
                        onClick={addLocalTeaNews} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Local Tea News
                    </button>
                    <Link to="/admin/local-tea-news"
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