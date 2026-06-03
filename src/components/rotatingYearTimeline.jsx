import { useState, useEffect } from "react";
import YearBlock from "./yearBlock.jsx";
import { HistoryByYear } from "./historyByYear.js";

export default function RotatingYearTimeline ({delay = 4000}) {
    
    
    const years = Object.keys(HistoryByYear)
        .map(Number)
        .sort((a, b) => a - b);
    const [currentIdx, setCurrentIdx] = useState(0)
    const [fade, setFade] = useState(true)

    
    
    useEffect(() => {
        if (!years.length) return;

        const rotate = setInterval(() => {
            setFade(false)

            setTimeout(() => {
                setCurrentIdx((prev) => (prev + 1) % years.length)
                setFade(true)
            },500)
        }, delay)

        return () => clearInterval(rotate)
    }, [delay, years.length])

    const activeYear = years[currentIdx]
    const activeItems = HistoryByYear[activeYear]

    return ( 

        <div className="w-full flex flex-col items-center justify-center gap-5 pb-15">
                                <div
                                    className= {`transform transition-all duration-500 ${
                                        fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
                                    }`}
                                    >
                                        <YearBlock 
                                            year={activeYear} 
                                            items={activeItems}
                                        />
                                </div>

                                <div className="h-full w-full flex justify-center space-x-5">
                                    {years.map((y, idx) => (
                                        <span
                                            key={y}
                                            clasName={`w-2.5 h-2 rounded-full ${
                                                idx === currentIdx ? "bg-white shadow-md border-l-1 border-e-1 w-11" : "darkgreen shadow-md border-b-1"
                                            }`}
                                        />
                                    ))}
                                </div> 
                            </div>


        
    )
}