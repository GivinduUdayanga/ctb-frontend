import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BsBarChartLine } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { PiExportBold } from "react-icons/pi";
import { FaRegFileLines } from "react-icons/fa6";
import { LuNewspaper } from "react-icons/lu";
import { BsPersonAdd } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { TfiLayoutSlider } from "react-icons/tfi";
import AdminMarketReportsPage from "./admin/adminMarketReportsPage.jsx";
import AdminAddMarketReportsPage from "./admin/adminAddMarketReportsPage.jsx";
import AdminAwaitingSalesOfferingsPage from "./admin/adminAwaitingSalesOfferingsPage.jsx";
import AdminAddAwaitingSalesOfferingsPage from "./admin/adminAddAwaitingSalesOfferingsPage.jsx";
import AdminWeeklySalesAveragesPage from "./admin/adminWeeklySalesAveragesPage.jsx";
import AdminAddWeeklySalesAveragesPage from "./admin/adminAddWeeklySalesAveragesPage.jsx";
import AdminWeeklySoldQuantityPage from "./admin/adminWeeklySoldQuantityPage.jsx";
import AdminAddWeeklySoldQuantityPage from "./admin/adminAddWeeklySoldQuantityPage.jsx";
import AdminMonthlySoldQuantityPage from "./admin/adminMonthlySoldQuantityPage.jsx";
import AdminAddMonthlySoldQuantityPage from "./admin/adminAddMonthlySoldQuantityPage.jsx";
import AdminMonthlyProductionPage from "./admin/adminMonthlyProductionPage.jsx";
import AdminAddMonthlyProductionPage from "./admin/adminAddMonthlyProductionPage.jsx";
import AdminExportCountryWisePage from "./admin/adminExportCountryWisePage.jsx";
import AdminAddExportCountryWisePage from "./admin/adminAddExportCountryWisePage.jsx";
import AdminAnnualReportsPage from "./admin/adminAnnualReportsPage.jsx";
import AdminAddAnnualReportsPage from "./admin/adminAddAnnualReportsPage.jsx";
import AdminFinancialStatementPage from "./admin/adminFinancialStatementPage.jsx";
import AdminAddFinancialStatementPage from "./admin/adminAddFinancialStatementPage.jsx";
import AdminOurLatestNewsPage from "./admin/adminOurLatestNewsPage.jsx";
import AdminAddOurLatestNewsPage from "./admin/adminAddOurLatestNewsPage.jsx";
import AdminLocalTeaNewsPage from "./admin/adminLocalTeaNewsPage.jsx";
import AdminAddLocalTeaNewsPage from "./admin/adminAddLocalTeaNewsPage.jsx";
import AdminInternationalNewsPage from "./admin/adminInternationalNewsPage.jsx";
import AdminAddInternationalNewsPage from "./admin/adminAddInternationalNewsPage.jsx";
import AdminRegulationsPage from "./admin/adminRegulationsPage.jsx";
import AdminAddRegulationsPage from "./admin/adminAddRegulationsPage.jsx";
import AdminOurTeamPage from "./admin/adminOurTeamPage.jsx";
import AdminAddOurTeamPage from "./admin/adminAddOurTeamPage.jsx";
import AdminGalleryPage from "./admin/adminGalleryPage.jsx";
import AdminAddGalleryPage from "./admin/adminAddGalleryPage.jsx";
import AdminUpdateGalleryPage from "./admin/adminUpdateGalleryPage.jsx";
import AdminYearCarouselPage from "./admin/adminYearCarouselPage.jsx";
import AdminAddYearCarouselPage from "./admin/adminAddYearCarouselPage.jsx";


export default function AdminPage() {

    const navigate = useNavigate();

    // 🔐 Protect admin page
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div className="w-full h-screen flex bg-gray-100 ">

            {/* SIDEBAR */}
            <div className="w-[330px] bg-green-800 text-white p-5">

                <h1 className="text-[40px] flex justify-center font-bold mb-6">Admin Panel</h1>

                <div className="flex flex-col gap-5 text-[14px] h-[calc(100%-95px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">

                    <Link to="/admin/market-reports" className="flex flex-row items-center gap-5"> <FaRegFileLines /> Market Reports </Link>
                    <Link to="/admin/awaiting-sales-offerings" className="flex flex-row items-center gap-5"> <RiAlignItemLeftLine /> Awaiting Sales Offerings </Link>
                    <Link to="/admin/weekly-sales-averages" className="flex flex-row items-center gap-5"> <BsBarChartLine /> Weekly Sales Averages </Link>
                    <Link to="/admin/weekly-sold-quantity" className="flex flex-row items-center gap-5"> <BsBarChartLine /> Weekly Sold Quantity & Averages </Link>
                    <Link to="/admin/monthly-sold-quantity" className="flex flex-row items-center gap-5"> <BsBarChartLine /> Monthly Sold Quantity & Averages </Link>
                    <Link to="/admin/monthly-production" className="flex flex-row items-center gap-5"> <AiOutlineProduct /> Monthly Production </Link>
                    <Link to="/admin/export-country-wise" className="flex flex-row items-center gap-5"> <PiExportBold /> Export Country-wise </Link>
                    <Link to="/admin/annual-reports" className="flex flex-row items-center gap-5"> <FaRegFileLines /> Annual Reports </Link>
                    <Link to="/admin/financial-statement" className="flex flex-row items-center gap-5"> <FaRegFileLines /> Financial Statement </Link>
                    <Link to="/admin/our-latest-news" className="flex flex-row items-center gap-5"> <LuNewspaper /> Our Latest News </Link>
                    <Link to="/admin/local-tea-news" className="flex flex-row items-center gap-5"> <LuNewspaper /> Local Tea News </Link>
                    <Link to="/admin/international-news" className="flex flex-row items-center gap-5"> <LuNewspaper /> International News </Link>
                    <Link to="/admin/regulations" className="flex flex-row items-center gap-5"> <FaRegFileLines /> Regulations </Link>
                    <Link to="/admin/our-team" className="flex flex-row items-center gap-5"> <BsPersonAdd /> Our Team </Link>
                    <Link to="/admin/gallery" className="flex flex-row items-center gap-5"> <GrGallery /> Gallery </Link>
                    <Link to="/admin/year-carousel" className="flex flex-row items-center gap-5"> <TfiLayoutSlider /> Year Carousel </Link>
                </div>

            </div>

            {/* CONTENT */}
            <div className="flex-1 p-6 bg-white overflow-y-auto "> 

                <Routes index element={<h1>Admin Dashboard</h1>} >
                
                    <Route path="market-reports" element={<AdminMarketReportsPage />} />
                    <Route path="add-market-reports" element={<AdminAddMarketReportsPage />} />
                    <Route path="awaiting-sales-offerings" element={<AdminAwaitingSalesOfferingsPage />} />
                    <Route path="add-awaiting-sales-offerings" element={<AdminAddAwaitingSalesOfferingsPage />} />
                    <Route path="weekly-sales-averages" element={<AdminWeeklySalesAveragesPage />} />
                    <Route path="add-weekly-sales-averages" element={<AdminAddWeeklySalesAveragesPage />} />
                    <Route path="weekly-sold-quantity" element={<AdminWeeklySoldQuantityPage />} />
                    <Route path="add-weekly-sold-quantity" element={<AdminAddWeeklySoldQuantityPage />} />
                    <Route path="monthly-sold-quantity" element={<AdminMonthlySoldQuantityPage />} />
                    <Route path="add-monthly-sold-quantity" element={<AdminAddMonthlySoldQuantityPage />} />
                    <Route path="monthly-production" element={<AdminMonthlyProductionPage />} />
                    <Route path="add-monthly-production" element={<AdminAddMonthlyProductionPage />} />
                    <Route path="export-country-wise" element={<AdminExportCountryWisePage />} />
                    <Route path="add-export-country-wise" element={<AdminAddExportCountryWisePage />} />
                    <Route path="annual-reports" element={<AdminAnnualReportsPage />} />
                    <Route path="add-annual-reports" element={<AdminAddAnnualReportsPage />} />
                    <Route path="financial-statement" element={<AdminFinancialStatementPage />} />
                    <Route path="add-financial-statement" element={<AdminAddFinancialStatementPage />} />
                    <Route path="our-latest-news" element={<AdminOurLatestNewsPage />} />
                    <Route path="add-our-latest-news" element={<AdminAddOurLatestNewsPage />} />
                    <Route path="local-tea-news" element={<AdminLocalTeaNewsPage />} />
                    <Route path="add-local-tea-news" element={<AdminAddLocalTeaNewsPage />} />
                    <Route path="international-news" element={<AdminInternationalNewsPage />} />
                    <Route path="add-international-news" element={<AdminAddInternationalNewsPage />} />
                    <Route path="regulations" element={<AdminRegulationsPage />} />
                    <Route path="add-regulations" element={<AdminAddRegulationsPage />} />
                    <Route path="our-team" element={<AdminOurTeamPage />} />
                    <Route path="add-our-team" element={<AdminAddOurTeamPage />} />
                    <Route path="gallery" element={<AdminGalleryPage />} />
                    <Route path="add-gallery" element={<AdminAddGalleryPage />} />
                    <Route path="update-gallery" element={<AdminUpdateGalleryPage />}/>
                    <Route path="year-carousel" element={<AdminYearCarouselPage />} />
                    <Route path="add-year-carousel" element={<AdminAddYearCarouselPage />} />



                </Routes>

            </div>

        </div>
    );
}