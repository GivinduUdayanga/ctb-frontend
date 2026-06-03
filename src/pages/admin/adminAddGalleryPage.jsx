import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddGalleryPage () {

    const [galleryID, setGalleryID] = useState("");
    const [title, setTitle] = useState ("");
    const [images, setImages] = useState ("");
    
    
    const navigate = useNavigate();

    async function addGalleryItem() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add gallery items.");
            navigate("/login");
            return;
        }

        if( galleryID==="" || images==="" || title==="") {
            toast.error("Please fill all required fields");
            return;
        }

        try {
            
            const imagesInArray = images
                .split(",")
                .map(img => img.trim())
                .filter(img => img !== "");

            await axios.post("http://localhost:3000/api/admin/gallery/", {
                
                galleryID: galleryID,
                images: imagesInArray,
                title: title,
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("New gallery item added successfully");
            navigate("/admin/gallery");

        } catch (error) {
            toast.error("Error adding new gallery item. Please try again.");
            console.log("Error adding new gallery item:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2x slhadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><GrGallery />Add New Gallery Item</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold">ID</label>
                        <input type="text" value={galleryID} onChange={(e) => {setGalleryID(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Title</label>
                        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Image or Images</label>
                        <input type="text" value={images} onChange={(e) => {setImages(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">Separate multiple image URLs with commas (img - url)</p>
                    </div>
                    

                    <button
                        onClick={addGalleryItem} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Gallery Item
                    </button>
                    <Link to="/admin/gallery"
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