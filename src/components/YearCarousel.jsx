import "../App.css";
import { useEffect, useState } from "react";
import Loader from "../components/loaded.jsx";
import axios from "axios";


export default function YearCarousel() {

  const [index, setIndex] = useState(0);
  const [yearcarousel, setYearcarousel] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    axios.get("http://localhost:3000/api/admin/year-carousel")
      .then(response => {

        console.log(response.data);

        setYearcarousel(response.data);
        setLoaded(true);

      })
      .catch(error => {

        console.error("Error fetching year carousel data:", error);

      });

  }, []);

const yearData = {};

  yearcarousel.forEach((item) => {
    let descriptions = item.description || [];

    //  HANDLE STRING (support BOTH || and ,)
    if (typeof descriptions === "string") {
      descriptions = descriptions
        .split("||")
        .map(text => text.trim())
        .filter(text => text !== "");
    }

    //  HANDLE ARRAY (from backend JSON)
    if (Array.isArray(descriptions)) {
      descriptions = descriptions
        .flat() //  important if nested
        .map(text => String(text).trim())
        .filter(text => text !== "");
    }

    //  GROUP BY YEAR
    if (!yearData[item.year]) {
      yearData[item.year] = [];
    }

    yearData[item.year] = [
      ...yearData[item.year],
      ...descriptions
    ];
  });

  const years = Object.keys(yearData);



  // ================= AUTO ROTATE =================
  useEffect(() => {

    if (years.length === 0) return;

    const interval = setInterval(() => {

      setIndex((prev) => (prev + 1) % years.length);

    }, 6000);

    return () => clearInterval(interval);

  }, [years.length]);

  // ================= BUTTON CONTROLS =================
  const next = () =>
    setIndex((prev) => (prev + 1) % years.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + years.length) % years.length);

  // ================= SWIPE =================
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) next();
    if (touchEnd - touchStart > 50) prev();
  };

  if (!loaded || years.length === 0) {
    return <Loader />;
  }

  return (
    <div className="w-full h-[720px] pb-20 bg-white text-white flex flex-col items-center overflow-x-hidden">
      
      {/* ================= CAROUSEL ================= */}
      <div
        className="relative w-full h-[250px] flex items-center justify-center perspective overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {years.map((year, i) => {
          let offset = i - index;

          // Infinite loop illusion
          if (offset > years.length / 2) offset -= years.length;
          if (offset < -years.length / 2) offset += years.length;

          return (
            <div
              key={year}
              className={`absolute flex items-center justify-center rounded-xl shadow-lg transition-all duration-700 ease-in-out ${
                offset === 0
                  ? "bg-green-950/90 scale-[122] ml-[7px] text-white border-[2px] border-green-200"
                  : "bg-white text-black border-[1px] border-black scale-90 mr-5"
              }`}
              style={{
                width: "120px",
                height: "60px",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translateX(${
                  offset * 165
                }px) translateZ(${
                  offset === 0 ? "120px" : "0px"
                })`,
                opacity: Math.abs(offset) > 3 ? 0 : 1,
                filter: offset === 0 ? "none" : "blur(0px)"
              }}
            >
              <span className="font-bold text-lg">{year}</span>
            </div>
          );
        })}

        {/* BUTTON CONTAINER */}
        <div className="absolute w-[1200px] flex justify-between -translate-y-1/2 lg:top-1/2 lg:-translate-y-1/2 bottom-[-50px] lg:bottom-auto lg:translate-y-0">
          
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="fixed left-5 sm:bottom-6 sm:left-6 lg:bottom-[-100px] lg:left-2 z-50 bg-black/70 text-white hover:bg-black/90 hover:font-bold px-2 py-1 sm:px-4 sm:py-3 rounded-full shadow-lg transition"
          >
            <span className="inline-block scale-x-[1] rotate-[180deg]">
              ➜
            </span>
          </button> 

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="fixed right-5 sm:bottom-6 sm:right-6 lg:bottom-[-100px] lg:right-2 z-50 bg-black/70 text-white hover:bg-black/90 hover:font-bold px-2 py-1 sm:px-4 sm:py-3 rounded-full shadow-lg transition"
          >
            ➜
          </button>
        </div>
      </div>

      {/* ================= ACTIVE YEAR ================= */}
      <div className=" text-4xl font-bold text-green-950 shadow-xl shadow-green-950/80 rounded-xl px-6 py-3">
        {years[index] || ""}
      </div>

      {/* ================= DETAILS ================= */}
      <div className="mt-16 max-w-[800px]  w-[90%]">
        <div className="flex flex-col gap-4">

          {Array.isArray(yearData[years[index]]) &&
            yearData[years[index]].map((detail, i) => (

              <div
                key={i}
                className="
                  flex items-start gap-7
                  bg-green-950/90
                  border border-green-700
                  rounded-xl
                  px-4 py-2
                  hover:bg-green-950/100
                  transition-all duration-300
                  shadow-lg 
                "
              >

                {/* NUMBER */}
                <div
                  className="
                    min-w-[25px]
                    h-[25px]
                    rounded-full
                    bg-green-400
                    text-black
                    flex
                    items-center
                    justify-center
                    font-bold
                    text-sm
                  "
                >
                  {i + 1}
                </div>

                {/* TEXT */}
                <div className="text-sm lg:text-[16px] leading-relaxed text-gray-100 break-words">
                  {detail}
                </div>

              </div>

            ))}

        </div>
      </div>
    </div>
  );
}