import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/header.jsx"
import Test from "./pages/test.jsx"
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home.jsx"
import LoginPage from "./pages/loginPage.jsx";
import OurHeritage from './pages/ourHeritage.jsx'
import Gallery from './pages/gallery.jsx'
import MarketReports from "./pages/marketReports.jsx"
import AwaitingSalesOfferings from "./pages/awaitingSalesOfferings.jsx"
import WeeklySalesAverages from "./pages/weeklySalesAverages.jsx"
import WeeklySoldQuantity_Averages from "./pages/weeklySoldQuantity&Averages.jsx"
import MonthlySoldQuantity_Averages from "./pages/monthlySoldQuantity&Averages.jsx"
import MonthlyProduction from "./pages/monthlyProduction.jsx"
import ExportCountry_Wise from "./pages/exportsCountry-Wise.jsx"
import FinancialReports from "./pages/financialReports.jsx"
import OurLatest from "./pages/ourLatest.jsx"
import LocalTeaNews from "./pages/localTeaNews.jsx"
import International from "./pages/international.jsx"
import Regulations from "./pages/regulations.jsx"
import Contact from "./pages/contact.jsx"
import OurTeam from "./pages/ourTeam.jsx"
import AllMarketReports from './pages/allMarketReports.jsx'
import AllIndustryOverviewReports from './pages/allIndustryOverviewReports.jsx'
import AdminPage from './pages/adminPage.jsx'
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    
      <HashRouter>
        <Toaster position="top-right" />
        <div className="w-full h-screen bg-black">
          
          <Routes path = "/">
            
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path = "/login" element={<LoginPage/>} />
            <Route path = "/admin/*" element={<AdminPage/>} />
            <Route path="/ourHeritage" element={<OurHeritage/>}/>
            <Route path="/ourTeam" element={<OurTeam/>}/>
            <Route path="/ourHeritage/gallery" element={<Gallery/>}/>

            <Route path="/marketReports" element={<MarketReports/>}/>
            <Route path="/marketReports/allMarketReports" element={<AllMarketReports/>}/>
            <Route path="/marketReports/allIndustryOverviewReports" element={<AllIndustryOverviewReports/>}/>

            <Route path="/statistics/awaitingSalesOfferings" element={<AwaitingSalesOfferings/>}/>
            <Route path="/statistics/weeklySalesAverages" element={<WeeklySalesAverages/>}/>
            <Route path="/statistics/soldQuantity&Averages/weekly" element={<WeeklySoldQuantity_Averages/>}/>
            <Route path="/statistics/soldQuantity&Averages/monthly" element={<MonthlySoldQuantity_Averages/>}/>
            <Route path="/statistics/monthlyProduction" element={<MonthlyProduction/>}/>
            <Route path="/statistics/export/country-wise" element={<ExportCountry_Wise/>}/>

            <Route path="/financialReports" element={<FinancialReports/>}/>

            <Route path="/news/ourLatest" element={<OurLatest/>}/>
            <Route path="/news/localTeaNews" element={<LocalTeaNews/>}/>
            <Route path="/news/internationalNews" element={<International/>}/>

            <Route path="/regulations" element={<Regulations/>}/>

            <Route path="/contact" element={<Contact/>}/>

          </Routes>
        </div>
      </HashRouter>
    
  )
}

export default App
