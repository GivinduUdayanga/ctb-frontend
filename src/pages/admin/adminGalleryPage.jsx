import axios from "axios";
import Loader from "../../components/loaded.jsx";
import DeleteButton from "../../components/deleteButton.jsx";
import { useState, useEffect } from "react";
import { GrGallery } from "react-icons/gr";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";



export default  function AdminGalleryPage() {
    
        
        const [gallery, setGallery] = useState([]);
        const [loaded, setLoaded] = useState(false);

        useEffect(() => {
            if(!loaded) {

                axios.get("http://localhost:3000/api/admin/gallery")
                    .then(response => {
                        console.log(response.data);
                        setGallery(response.data);
                        setLoaded(true)
                    })
                    .catch(error => {
                        console.error("Error fetching gallery data:", error);
                    });
            }
        }, [loaded])

    return (
        
        <div className="w-full max-h-[620px] border-[1px] rounded-lg bg-gray-300 flex flex-col p-8">
            
            <div>
                <h1 className="flex flex-row items-center text-3xl font-bold mb-10 gap-[13px]">
                    <GrGallery /> Gallery
                </h1> 
            </div>

            {/* Table Wrapper */}
            <div className="overflow-x-auto">

                {loaded ?
                <table className="w-full text-sm text-left text-black border-gray-400">
                    
                    {/* Header */}
                    <thead className="h-[50px] text-xs uppercase bg-black text-gray-50  border-b border-white/10">
                        <tr>
                            <th className="px-5 py-3 border-white border-r-[1px] text-center">Images</th>
                            <th className="px-5 py-3 border-white border-r-[1px] text-center">ID</th>
                            <th className="px-5 py-3 border-white border-r-[1px] text-center">Title </th>
                            <th className="px-5 py-3 text-center">Action</th> 
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {gallery.map((item, index) => (
                            <tr
                                key={index}
                                className="border-gray-500 border-b-[1px] bg-white transition duration-200"
                            >
                                
                                <td className="px-5 py-2">
                                    <img 
                                        src={item.images?.[0]} 
                                        className="w-10 h-10 object-cover rounded-md border border-black shadow-sm text-center"
                                    />
                                </td>
                                <td className="px-5 py-2 text-center font-bold">
                                    {item.galleryID}
                                </td>
                                <td className="px-5 py-2">
                                    {item.title}
                                </td>
                                <td className="px-5 py-3 flex flex-row gap-10 items-center justify-center">
                                    <Link
                                        to="/admin/update-gallery"
                                        className="py-1 w-[80px] bg-green-500 cursor-pointer hover:bg-green-300 hover:border-2 hover:border-black hover:text-black flex justify-center items-center text-white font-bold p-2 rounded-lg"
                                        state={item}
                                    >
                                        Edit
                                    </Link>
                                    <DeleteButton galleryId={item.galleryID} reload={()=>{setLoaded(false)}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : <Loader/>}

            </div>

            <Link 
                to="/admin/add-gallery"
                className="w-[40px] h-[40px] flex justify-center items-center text-6xl border-[3px] border-black hover:border-green-600 rounded-full absolute right-[20px] bottom-[20px] hover:text-green-600 hover:bg-white"
            >
                <BiPlus/>
            </Link>
        </div>
    )

}