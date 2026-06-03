import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiAlignItemLeftLine } from "react-icons/ri";
import toast from "react-hot-toast";
import axios from "axios";

export default function AdminAddAwaitingSalesOfferingsPage() {

    const [saleID, setSaleID] = useState("");
    const [startDate, setStartDate] = useState ("");
    const [endDate, setEndDate] = useState ("");
    const [exEstateLot, setExEstateLot] = useState ("");
    const [exEstateQty, setExEstateQty] = useState ("");
    const [highAndMediumLot, setHighAndMediumLot] = useState ("");
    const [highAndMediumQty, setHighAndMediumQty] = useState ("");
    const [lowGrownLLot, setLowGrownLLot] = useState ("");
    const [lowGrownLQty, setLowGrownLQty] = useState ("");
    const [semiLeafyLot, setSemiLeafyLot] = useState ("");
    const [semiLeafyQty, setSemiLeafyQty] = useState ("");
    const [lowGrownSLot, setLowGrownSLot] = useState ("");
    const [lowGrownSQty, setLowGrownSQty] = useState ("");
    const [premiumFloweryLot, setPremiumFloweryLot] = useState ("");
    const [premiumFloweryQty, setPremiumFloweryQty] = useState ("");
    const [offGradesLot, setOffGradesLot] = useState ("");
    const [offGradesQty, setOffGradesQty] = useState ("");
    const [BOP1ALot, setBOP1ALot] = useState ("");
    const [BOP1AQty, setBOP1AQty] = useState ("");
    const [DustsLot, setDustsLot] = useState ("");
    const [DustsQty, setDustsQty] = useState ("");
    
    const navigate = useNavigate();


    useEffect(() => {

        axios
            .get(
                "http://localhost:3000/api/admin/awaiting-sales-offerings/next-id"
            )

            .then((response) => {

                setSaleID(response.data.nextID);

            })

            .catch((error) => {

                console.log(
                    "Error fetching next sale ID:",
                    error
                );

            });

    }, []);

    async function addAwaitingSalesOfferings() {
        const token = localStorage.getItem("token");
        if (token == null) {
            toast.error("You must be logged in as an admin to add a Awaiting Sales Offerings");
            navigate("/login");
            return;
        }

        if(
            saleID===  undefined ||
            startDate==="" || endDate==="" || exEstateLot==="" || 
            exEstateQty==="" || highAndMediumLot==="" || highAndMediumQty==="" || 
            lowGrownLLot==="" || lowGrownLQty==="" || semiLeafyLot==="" || 
            semiLeafyQty==="" || lowGrownSLot==="" || lowGrownSQty==="" || 
            premiumFloweryLot==="" || premiumFloweryQty==="" || offGradesLot==="" || 
            offGradesQty==="" || BOP1ALot==="" || BOP1AQty==="" || 
            DustsLot==="" || DustsQty===""
        ) {
            toast.error("Please fill all required fields");
            return;
        }

        try {

            await axios.post("http://localhost:3000/api/admin/awaiting-sales-offerings/", {
                saleID: saleID,
                startDate: startDate,
                endDate: endDate,
                exEstateLot: exEstateLot,
                exEstateQty: exEstateQty,
                highAndMediumLot: highAndMediumLot,
                highAndMediumQty: highAndMediumQty,
                lowGrownLLot: lowGrownLLot,
                lowGrownLQty: lowGrownLQty,
                semiLeafyLot: semiLeafyLot,
                semiLeafyQty: semiLeafyQty,
                lowGrownSLot: lowGrownSLot,
                lowGrownSQty: lowGrownSQty,
                premiumFloweryLot: premiumFloweryLot,
                premiumFloweryQty: premiumFloweryQty,
                offGradesLot: offGradesLot,
                offGradesQty: offGradesQty,
                BOP1ALot: BOP1ALot,
                BOP1AQty: BOP1AQty,
                DustsLot: DustsLot,
                DustsQty: DustsQty,
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            toast.success("Awaiting sales offerings added successfully");
            navigate("/admin/awaiting-sales-offerings");

        } catch (error) {
            toast.error("Error adding awaiting sales offerings. Please try again.");
            console.log("Error adding awaiting sales offerings:");
            console.log(error);
        }

    }


    return (
        <div className="w-full h-full flex justify-center p-[50px] items-start text-black overflow-y-scroll">
            <div className="w-[800px] bg-gray-300 p-[30px] rounded-2xl shadow-2xl overflow-y-visible">

                <h1 className="w-full text-2xl font-bold mb-[20px] flex items-center gap-[10px]"><RiAlignItemLeftLine />Add New Awaiting Sales Offering</h1>

                <div className="w-full bg-white p-[20px] flex flex-row flex-wrap justify-between rounded-xl">
                    
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold text-[18px]">Sale ID</label>
                        <input
                            type="number"
                            value={saleID}
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
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold text-[18px]">Start Date</label>
                        <input type="date" value={startDate} onChange={(e) => {setStartDate(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="my-[10px] w-[30%]">
                        <label className="text-black font-semibold text-[18px]">End Date</label>
                        <input type="date" value={endDate} onChange={(e) => {setEndDate(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Ex Estate</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={exEstateLot} onChange={(e) => {setExEstateLot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={exEstateQty} onChange={(e) => {setExEstateQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">High & Medium</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={highAndMediumLot} onChange={(e) => {setHighAndMediumLot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={highAndMediumQty} onChange={(e) => {setHighAndMediumQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Low Grown(L)</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={lowGrownLLot} onChange={(e) => {setLowGrownLLot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={lowGrownLQty} onChange={(e) => {setLowGrownLQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Semi-Leafy</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={semiLeafyLot} onChange={(e) => {setSemiLeafyLot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={semiLeafyQty} onChange={(e) => {setSemiLeafyQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Low Grown(S)</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={lowGrownSLot} onChange={(e) => {setLowGrownSLot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={lowGrownSQty} onChange={(e) => {setLowGrownSQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Premium Flowery</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={premiumFloweryLot} onChange={(e) => {setPremiumFloweryLot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={premiumFloweryQty} onChange={(e) => {setPremiumFloweryQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Off Grades</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={offGradesLot} onChange={(e) => {setOffGradesLot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={offGradesQty} onChange={(e) => {setOffGradesQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">BOP1A</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={BOP1ALot} onChange={(e) => {setBOP1ALot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={BOP1AQty} onChange={(e) => {setBOP1AQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    <div className="my-[10px] w-full gap-2 flex flex-col">
                        <label className="text-black font-semibold text-[18px]">Dusts</label>
                        <div className="flex flex-row flex-wrap justify-between ml-10">
                            <div className="w-[45%]">
                                <input type="number" value={DustsLot} onChange={(e) => {setDustsLot(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Lot</p>
                            </div>
                            <div className="w-[45%]">
                                <input type="number" value={DustsQty} onChange={(e) => {setDustsQty(e.target.value)}} className="w-full h-[30px] rounded border-2 shadow-2xl text-black px-[20px] focus:outline-none focus:ring-1 focus:ring-green-500" />
                                <p className="text-gray-500 text-sm font-semibold text-right mr-7">Qty</p>
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={addAwaitingSalesOfferings} 
                        className="w-[45%] h-[40px] bg-green-700 text-white rounded hover:bg-green-200 mt-[20px] hover:text-black hover:border-[1px] hover:border-black transition-color font-semibold hover:font-bold">
                            Add Awaiting Sales Offerings
                    </button>
                    <Link to="/admin/awaiting-sales-offerings"
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
