import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsPersonAdd } from "react-icons/bs";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddOurTeamPage () {

    const [memberID, setMemberID] = useState ("");
    const [category, setCategory] = useState ("");
    const [image, setImage] = useState ("");
    const [name, setName] = useState ("");
    const [position, setPosition] = useState ("");
    const [description, setDescription] = useState ("");
    
    
    const navigate = useNavigate();

    useEffect(() => {

        axios.get("http://localhost:3000/api/admin/our-team/next-id")
            .then((response) => {

                setMemberID(response.data.nextID);

            })
            .catch((error) => {

                console.log("Error fetching next member ID:", error);

            });

    }, []);

    async function addOurTeamMember() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add our team members.");
            navigate("/login");
            return;
        }

        if(memberID==="" || category==="" || image==="" || name==="" || position==="" || description==="") {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            await axios.post("http://localhost:3000/api/admin/our-team/", {
                memberID: memberID,
                category: category,
                image: image,
                name: name,
                position: position,
                description: description
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("New member added successfully");
            navigate("/admin/our-team");

        } catch (error) {
            toast.error("Error adding new member. Please try again.");
            console.log("Error adding new member:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2xl shadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><BsPersonAdd />Add New Team Member</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Member ID</label>
                        <input
                            type="number"
                            value={memberID}
                            disabled
                            className="w-full h-[30px] rounded border-2 cursor-not-allowed text-black px-[20px] focus:outline-none"
                        />
                    </div>
                    <div className="my-[10px] w-[40%]">
                        <label className="text-black font-semibold">Category</label>
                        <select type="text" value={category} onChange={(e) => {setCategory(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-[14px] text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" >
                            <option value=""></option>
                            <option value="BoardOfDirectors">BOARD OF DIRECTORS</option>
                            <option value="OtherKeyPersonnel">OTHER KEY PERSONNEL</option>
                        </select>
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Image</label>
                        <input type="text" value={image} onChange={(e) => {setImage(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">img - url</p>
                    </div>
                    <div className="my-[10px] w-[45%]">
                        <label className="text-black font-semibold">Name</label>
                        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-[12px] text-right">USE BLOCK LETTERS</p>
                    </div>
                    <div className="my-[10px] w-[45%]">
                        <label className="text-black font-semibold">Position</label>
                        <input type="text" value={position} onChange={(e) => {setPosition(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-[12px] text-right">USE BLOCK LETTERS</p>
                    </div>
                    <div className="my-[10px] w-full">
                        <label className="text-black font-semibold">Description</label>
                        <textarea type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    
                    

                    <button
                        onClick={addOurTeamMember} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Member
                    </button>
                    <Link to="/admin/our-team"
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