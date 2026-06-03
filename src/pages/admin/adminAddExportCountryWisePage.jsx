import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiExportBold } from "react-icons/pi";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddExportCountryWisePage () {

    const [exportID, setExportID] = useState ("");
    const [year, setYear] = useState ("");
    const [month, setMonth] = useState ("");
    const [iraqQty, setIraqQty] = useState ("");
    const [russiaQty, setRussiaQty] = useState ("");
    const [turkeyQty, setTurkeyQty] = useState ("");
    const [libyaQty, setLibyaQty] = useState ("");
    const [uaeQty, setUaeQty] = useState ("");
    const [chileQty, setChileQty] = useState ("");
    const [chinaQty, setChinaQty] = useState ("");
    const [iranQty, setIranQty] = useState ("");
    const [azerbaijanQty, setAzerbaijanQty] = useState (""); 
    const [saudiArabiaQty, setSaudiArabiaQty] = useState ("");  
    const [syriaQty, setSyriaQty] = useState ("");
    const [germanyQty, setGermanyQty] = useState ("");
    const [usaQty, setUsaQty] = useState ("");
    const [japanQty, setJapanQty] = useState ("");
    const [jordanQty, setJordanQty] = useState ("");
    const [taiwanQty, setTaiwanQty] = useState ("");
    const [polandQty, setPolandQty] = useState ("");
    const [hongKongQty, setHongKongQty] = useState ("");
    const [belgiumQty, setBelgiumQty] = useState ("");
    const [kuwaitQty, setKuwaitQty] = useState ("");
    const [tunisiaQty, setTunisiaQty] = useState ("");
    const [netherlandsHolandQty, setNetherlandsHolandQty] = useState ("");
    const [irelandQty, setIrelandQty] = useState ("");
    const [australiaQty, setAustraliaQty] = useState ("");
    const [egyptQty, setEgyptQty] = useState ("");
    const [lebanonQty, setLebanonQty] = useState ("");
    const [ukraineQty, setUkraineQty] = useState ("");
    const [israelQty, setIsraelQty] = useState ("");
    const [guineaQty, setGuineaQty] = useState ("");
    const [ukQty, setUkQty] = useState ("");
    const [otherQty, setOtherQty] = useState ("");



    const navigate = useNavigate();

        useEffect(() => {

            axios.get("http://localhost:3000/api/admin/export-country-wise/next-id")
                .then((response) => {

                    setExportID(response.data.nextID);

                })
                .catch((error) => {

                    console.log("Error fetching next export ID:", error);

                });

        }, []);

    async function AddExportCountryWise() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add a weekly sales average");
            navigate("/login");
            return;
        }

        if(
            exportID ==="" || year ==="" || month ==="" || 
            iraqQty ==="" || russiaQty ==="" || turkeyQty ==="" || libyaQty ==="" || uaeQty ==="" || chileQty ==="" || 
            chinaQty ==="" || iranQty ==="" || azerbaijanQty ==="" || saudiArabiaQty ==="" || syriaQty ==="" || 
            germanyQty ==="" || usaQty ==="" || japanQty ==="" || jordanQty ==="" || taiwanQty ==="" || polandQty ==="" || 
            hongKongQty ==="" || belgiumQty ==="" || kuwaitQty ==="" || tunisiaQty ==="" || netherlandsHolandQty ==="" || 
            irelandQty ==="" || australiaQty ==="" || egyptQty ==="" || lebanonQty ==="" || ukraineQty ==="" || israelQty ==="" || 
            guineaQty ==="" || ukQty === ""|| otherQty ===""
        ) {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            await axios.post("http://localhost:3000/api/admin/export-country-wise/", {
                exportID: exportID,
                year: year,
                month: month,
                iraqQty: iraqQty,
                russiaQty: russiaQty,
                turkeyQty: turkeyQty,
                libyaQty: libyaQty,
                uaeQty: uaeQty,
                chileQty: chileQty,
                chinaQty: chinaQty,
                iranQty: iranQty,
                azerbaijanQty: azerbaijanQty,
                saudiArabiaQty: saudiArabiaQty,
                syriaQty: syriaQty,
                germanyQty: germanyQty,
                usaQty: usaQty,
                japanQty: japanQty,
                jordanQty: jordanQty,
                taiwanQty: taiwanQty,
                polandQty: polandQty,
                hongKongQty: hongKongQty,
                belgiumQty: belgiumQty,
                kuwaitQty: kuwaitQty,
                tunisiaQty: tunisiaQty,
                netherlandsHolandQty: netherlandsHolandQty,
                irelandQty: irelandQty,
                australiaQty: australiaQty,
                egyptQty: egyptQty,
                lebanonQty: lebanonQty,
                ukraineQty: ukraineQty,
                israelQty: israelQty,
                guineaQty: guineaQty,
                ukQty: ukQty,
                otherQty: otherQty
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("Export country-wise quantity added successfully");
            navigate("/admin/export-country-wise");

        } catch (error) {
            toast.error("Error adding Export country-wise quantity. Please try again.");
            console.log("Error adding Export country-wise quantity:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2xl shadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><PiExportBold />Add New Export Country-Wise Quantity</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold">Export ID</label>
                        <input
                            type="number"
                            value={exportID}
                            disabled
                            className="w-full h-[30px] rounded border-2 shadow-2xl bg-gray-200 text-black px-[20px] cursor-not-allowed"
                        />
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold text-[18px]">Year</label>
                        <input type="number" value={year} onChange={(e) => {setYear(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">yyyy</p>
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold text-[18px]">month</label>
                        <input type="month" value={month} onChange={(e) => {setMonth(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                        <p className="text-sm text-gray-500 w-full text-right">Select month</p>
                    </div>
                    
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Iraq</label>
                        <div className="w-[50%]">
                            <input type="number" value={iraqQty} onChange={(e) => {setIraqQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Russia</label>
                        <div className="w-[50%]">
                            <input type="number" value={russiaQty} onChange={(e) => {setRussiaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Turkey</label>
                        <div className="w-[50%]">
                            <input type="number" value={turkeyQty} onChange={(e) => {setTurkeyQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Libya</label>
                        <div className="w-[50%]">
                            <input type="number" value={libyaQty} onChange={(e) => {setLibyaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">U.A.E.</label>
                        <div className="w-[50%]">
                            <input type="number" value={uaeQty} onChange={(e) => {setUaeQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Chile</label>
                        <div className="w-[50%]">
                            <input type="number" value={chileQty} onChange={(e) => {setChileQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">China</label>
                        <div className="w-[50%]">
                            <input type="number" value={chinaQty} onChange={(e) => {setChinaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Iran</label>
                        <div className="w-[50%]">
                            <input type="number" value={iranQty} onChange={(e) => {setIranQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Azerbaijan</label> 
                        <div className="w-[50%]">
                            <input type="number" value={azerbaijanQty} onChange={(e) => {setAzerbaijanQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Saudi Arabia</label> 
                        <div className="w-[50%]">
                            <input type="number" value={saudiArabiaQty} onChange={(e) => {setSaudiArabiaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Syria</label> 
                        <div className="w-[50%]">
                            <input type="number" value={syriaQty} onChange={(e) => {setSyriaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Germany</label>
                        <div className="w-[50%]">
                            <input type="number" value={germanyQty} onChange={(e) => {setGermanyQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">U.S.A.</label>
                        <div className="w-[50%]">
                            <input type="number" value={usaQty} onChange={(e) => {setUsaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Japan</label>
                        <div className="w-[50%]">
                            <input type="number" value={japanQty} onChange={(e) => {setJapanQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Jordan</label> 
                        <div className="w-[50%]">
                            <input type="number" value={jordanQty} onChange={(e) => {setJordanQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Taiwan</label> 
                        <div className="w-[50%]">
                            <input type="number" value={taiwanQty} onChange={(e) => {setTaiwanQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Poland</label> 
                        <div className="w-[50%]">
                            <input type="number" value={polandQty} onChange={(e) => {setPolandQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Hong Kong</label>
                        <div className="w-[50%]">
                            <input type="number" value={hongKongQty} onChange={(e) => {setHongKongQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Belgium</label>
                        <div className="w-[50%]">
                            <input type="number" value={belgiumQty} onChange={(e) => {setBelgiumQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Kuwait</label> 
                        <div className="w-[50%]">
                            <input type="number" value={kuwaitQty} onChange={(e) => {setKuwaitQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Tunisia</label>
                        <div className="w-[50%]">
                            <input type="number" value={tunisiaQty} onChange={(e) => {setTunisiaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Netherlands (Holand)</label>
                        <div className="w-[50%]">
                            <input type="number" value={netherlandsHolandQty} onChange={(e) => {setNetherlandsHolandQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Ireland</label>
                        <div className="w-[50%]">
                            <input type="number" value={irelandQty} onChange={(e) => {setIrelandQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Australia</label>
                        <div className="w-[50%]">
                            <input type="number" value={australiaQty} onChange={(e) => {setAustraliaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Egypt</label> 
                        <div className="w-[50%]">
                            <input type="number" value={egyptQty} onChange={(e) => {setEgyptQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Lebanon</label> 
                        <div className="w-[50%]">
                            <input type="number" value={lebanonQty} onChange={(e) => {setLebanonQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Ukraine</label>
                        <div className="w-[50%]">
                            <input type="number" value={ukraineQty} onChange={(e) => {setUkraineQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Israel</label> 
                        <div className="w-[50%]">
                            <input type="number" value={israelQty} onChange={(e) => {setIsraelQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Guinea</label> 
                        <div className="w-[50%]">
                            <input type="number" value={guineaQty} onChange={(e) => {setGuineaQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">U.K.</label> 
                        <div className="w-[50%]">
                            <input type="number" value={ukQty} onChange={(e) => {setUkQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div>
                    <div className="my-[10px] w-full gap-10 flex flex-row justify-between mx-30">
                        <label className="text-black font-semibold text-[18px]">Other</label> 
                        <div className="w-[50%]">
                            <input type="number" value={otherQty} onChange={(e) => {setOtherQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                            <p className="text-gray-500 text-[10px] font-semibold text-right mr-7">Qty(kgs)</p>
                        </div>   
                    </div> 

                    
                    
                    <button
                        onClick={AddExportCountryWise} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Export Country Wise
                    </button>
                    <Link to="/admin/export-country-wise"
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