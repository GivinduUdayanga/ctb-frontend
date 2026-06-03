import Header from "../components/header";
import Footer from "../components/footer.jsx";
import BackToTop from "../components/backtotop.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AwaitingSalesOfferings() {

    const [salesData, setSalesData] = useState([]);
    const [loading, setLoading] = useState(true);

    const OFFERING_TYPES = [
        {
            label: "Ex Estate",
            lot: "exEstateLot",
            qty: "exEstateQty",
        },
        {
            label: "High & Medium",
            lot: "highAndMediumLot",
            qty: "highAndMediumQty",
        },
        {
            label: "Low Grown(L)",
            lot: "lowGrownLLot",
            qty: "lowGrownLQty",
        },
        {
            label: "Semi-Leafy",
            lot: "semiLeafyLot",
            qty: "semiLeafyQty",
        },
        {
            label: "Low Grown(S)",
            lot: "lowGrownSLot",
            qty: "lowGrownSQty",
        },
        {
            label: "Premium Flowery",
            lot: "premiumFloweryLot",
            qty: "premiumFloweryQty",
        },
        {
            label: "Off Grades",
            lot: "offGradesLot",
            qty: "offGradesQty",
        },
        {
            label: "BOP1A",
            lot: "BOP1ALot",
            qty: "BOP1AQty",
        },
        {
            label: "Dusts",
            lot: "DustsLot",
            qty: "DustsQty",
        },
    ];

    useEffect(() => {

        axios
            .get(
                "http://localhost:3000/api/admin/awaiting-sales-offerings"
            )
            .then((response) => {

                setSalesData(response.data);

            })
            .catch((error) => {

                console.log(
                    "Error fetching awaiting sales offerings:",
                    error
                );

            })
            .finally(() => {

                setLoading(false);

            });

    }, []);

    const currentWeek =
        salesData.length > 0
            ? salesData[0]
            : null;

    const previousWeek =
        salesData.length > 1
            ? salesData[1]
            : null;

    function formatDate(date) {

        return new Date(date).toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );

    }

    function calculateTotals(week) {

        let lots = 0;
        let qty = 0;

        OFFERING_TYPES.forEach((item) => {

            lots += Number(
                week[item.lot] || 0
            );

            qty += Number(
                week[item.qty] || 0
            );

        });

        return {
            lots,
            qty,
        };

    }

    if (loading) {

        return (
            <div className="w-full h-screen flex items-center justify-center bg-white">
                <h2 className="text-black text-xl font-semibold">
                    Loading...
                </h2>
            </div>
        );

    }

    if (!currentWeek || !previousWeek) {

        return (
            <div className="w-full h-screen flex items-center justify-center bg-white">
                <h2 className="text-black text-xl font-semibold">
                    Not enough sales offering data available.
                </h2>
            </div>
        );

    }

    const currentTotals =
        calculateTotals(currentWeek);

    const previousTotals =
        calculateTotals(previousWeek);

    return (

        <div className="bg-white w-full">

            {/* HERO SECTION */}
            <div className="relative w-full h-[211px] lg:h-screen flex flex-col lg:overflow-hidden">

                <div className="relative top-0 w-full h-[10px] lg:h-[90px]">
                    <Header />
                </div>

                <video
                    src="/video/awaitingsalesoffering.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <div className="absolute inset-0 bg-black/20 z-10"></div>

            </div>

            {/* CONTENT */}
            <div className="min-h-full text-white mb-40 flex flex-col items-center">

                <h2 className="w-[280px] lg:w-full text-3xl md:text-4xl lg:text-5xl flex items-center justify-center font-serif text-center font-bold text-black mb-20 tracking-wide pb-5 mt-20">
                    Awaiting Sales Offerings 
                </h2>

                <div className="overflow-x-auto rounded-xl shadow-2xl ml-5 mr-5">

                    <table className="min-w-[900px] border-collapse">

                        <thead>

                            <tr className="bg-[#111a33] border-b border-gray-600">

                                <th
                                    rowSpan="2"
                                    className="py-4 px-16 text-left text-[18px] lg:text-[27px]"
                                >
                                    Sales Offering
                                </th>

                                <th
                                    colSpan="2"
                                    className="py-4 px-24 text-center border-l border-gray-600 text-[15px] lg:text-[20px]"
                                >
                                    <p className="">Sales of</p> {formatDate(previousWeek.startDate)} & {formatDate(previousWeek.endDate)}
                                </th>

                                <th
                                    colSpan="2"
                                    className="py-4 px-24 text-center border-l border-gray-600 text-[15px] lg:text-[20px]"
                                >
                                    <p className="">Sales of</p> {formatDate(currentWeek.startDate)} & {formatDate(currentWeek.endDate)}
                                </th>

                            </tr>

                            <tr className="bg-black text-green-500 text-[14px] lg:text-[17px]">

                                <th className="py-5 border-l border-r border-gray-600">
                                    Lots
                                </th>

                                <th className="py-5">
                                    Qty
                                </th>

                                <th className="py-5 border-l border-r border-gray-600">
                                    Lots
                                </th>

                                <th className="py-5">
                                    Qty
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {OFFERING_TYPES.map((item) => (

                                <tr
                                    key={item.label}
                                    className="bg-[#10162b] border-y border-gray-700 hover:bg-[#121933]"
                                >

                                    <td className="py-4 px-4 font-semibold text-[14px] lg:text-[16px]">

                                        {item.label}

                                    </td>

                                    <td className="text-center border-l border-r border-gray-700">

                                        {Number(
                                            previousWeek[item.lot]
                                        ).toLocaleString()}

                                    </td>

                                    <td className="text-center">

                                        {Number(
                                            previousWeek[item.qty]
                                        ).toLocaleString()}

                                    </td>

                                    <td className="text-center border-l border-r border-gray-700 text-cyan-400 font-semibold">

                                        {Number(
                                            currentWeek[item.lot]
                                        ).toLocaleString()}

                                    </td>

                                    <td className="text-center text-cyan-400 font-semibold">

                                        {Number(
                                            currentWeek[item.qty]
                                        ).toLocaleString()}

                                    </td>

                                </tr>

                            ))}

                            {/* GRAND TOTAL */}

                            <tr className="bg-black font-bold text-green-400 border-y border-gray-700">

                                <td className="py-6 px-4 text-[16px] lg:text-[18px]">
                                    Grand Total
                                </td>

                                <td className="text-center border-l border-r border-gray-700">

                                    {previousTotals.lots.toLocaleString()}

                                </td>

                                <td className="text-center">

                                    {previousTotals.qty.toLocaleString()}

                                </td>

                                <td className="text-center border-l border-r border-gray-700">

                                    {currentTotals.lots.toLocaleString()}

                                </td>

                                <td className="text-center">

                                    {currentTotals.qty.toLocaleString()}

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

            <Footer />
            <BackToTop />

        </div>

    );

}