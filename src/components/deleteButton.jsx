import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DeleteButton(props) {

    const galleryID = props.galleryId;
    const reload = props.reload;
    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {

        setIsDeleting(true);

        const token = localStorage.getItem("token");

        axios.delete(
            `http://localhost:3000/api/admin/gallery/${galleryID}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then(() => {

            toast.success("Gallery item deleted successfully...");

            setIsDeleting(false);
            setIsMessageOpen(false);

            reload();

        })
        .catch((error) => {

            console.log(error);

            toast.error("Delete failed ...");

            setIsDeleting(false);

        });
    }

    return (
        <>
            <button 
                onClick={()=>{setIsMessageOpen(true)}}
                className="py-1 w-[80px] bg-red-500 cursor-pointer hover:bg-red-300 hover:border-2 hover:border-black hover:text-black flex justify-center items-center text-white font-bold p-2 rounded-lg">
                    Delete
            </button>
            {isMessageOpen && (
                <div className="w-[100vw] fixed top-0 left-0 h-screen z-[9999] bg-black/55 flex items-center justify-center">
                    <div className="w-[600px] h-[300px] bg-white rounded-2xl border-black/70 border-[2px] relative flex flex-col items-center justify-center">
                        <button 
                            onClick={()=>{setIsMessageOpen(false)}}
                            className="w-[40px] h-[40px] bg-red-600 rounded-full text-white text-xl font-bold cursor-pointer hover:bg-red-400 hover:text-black hover:font-bold absolute right-[-35px] top-[-35px]">
                                X
                        </button>
                        <h1 className="text-xl mb-12 text-green-900 font-semibold text-center"> Are you sure you want to delete gallery items {galleryID} ?</h1>
                        <div className="w-full flex justify-center gap-10">
                            <button
                                disabled={isDeleting}
                                onClick={handleDelete}
                                className="py-1 w-[80px] bg-red-500 cursor-pointer border-white border-2 hover:bg-green-100 hover:border-2 hover:border-black hover:text-black flex justify-center items-center text-white font-bold p-2 rounded-lg"
                            >
                                Delete
                            </button>
                            <button
                                onClick={()=>{setIsMessageOpen(false)}}
                                className="py-1 w-[80px] bg-black cursor-pointer border-white border-2 hover:bg-green-100 hover:border-2 hover:border-black hover:text-black flex justify-center items-center text-white font-bold p-2 rounded-lg"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
