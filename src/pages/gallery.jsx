import { useState, useEffect } from "react";
import BackToTop from "../components/backtotop.jsx";
import Loader from "../components/loaded.jsx";
import axios from "axios";

export default function Gallery() {

        const currentYear = new Date().getFullYear();

        const [galleryData, setGalleryData] = useState([]);
        const [loaded, setLoaded] = useState(false);

        useEffect(() => {

            axios.get("http://localhost:3000/api/admin/gallery")
                .then((response) => {

                    setGalleryData(response.data);
                    setLoaded(true);

                })
                .catch((error) => {

                    console.log("Error fetching gallery data:", error);

                });

        }, []);

        const [selectedEvent, setSelectedEvent] = useState(null);
        const [selectedImageIndex, setSelectedImageIndex] = useState(0);


        const openEvent = (event) => {
            setSelectedEvent(event);
            setSelectedImageIndex(0);
        };

        const closeGallery = () => {
            setSelectedEvent(null);
            setSelectedImageIndex(0);
        };

        if(!loaded){
            return <Loader />
        }

        return (
            <div className="w-full min-h-screen bg-gray-100 mt-10 pb-5">

                <h1 className="text-5xl h-[100px] font-bold text-center mb-12 flex items-center justify-center font-mono text-white darkgreen">
                    Gallery {currentYear}
                </h1>

                {galleryData.map((event, index) => (
                    <div key={index} className="mb-16 pl-10 pr-10">

                        <h2 className="text-3xl font-semibold mb-4">
                            {event.title}
                        </h2>

                        <div className="flex gap-7">

                            {event.images.slice(0, 5).map((img, i) => {

                                const extraCount = event.images.length - 5;

                                return (
                                    <div
                                        key={i}
                                        className="relative w-64 h-48 cursor-pointer overflow-hidden rounded-xl border-1 shadow-lg"
                                        onClick={() => openEvent(event)}
                                    >
                                        <img
                                            src={img}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />

                                        {i === 4 && extraCount > 0 && (
                                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-3xl font-bold">
                                                +{extraCount}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                ))}

                {/* FULL SCREEN MODAL */}
                {selectedEvent && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-6">

                        {/* Close Button */}
                        <button
                            onClick={closeGallery}
                            className="absolute top-6 right-40 text-white text-3xl font-bold"
                        >
                            ✕
                        </button>

                        {/* Large Image */}
                        <div className="w-full max-w-4xl h-[540px] flex items-center justify-center mb-6 rounded-xl">
                            <img
                                src={selectedEvent.images[selectedImageIndex]}
                                alt=""
                                className="max-h-full object-contain rounded-xl"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-3 overflow-x-auto w-full max-w-5xl px-4 scrollbar-hide">

                            {selectedEvent.images.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt=""
                                    onClick={() => setSelectedImageIndex(i)}
                                    className={`w-32 h-24 object-cover cursor-pointer rounded-lg border-4 ${
                                        selectedImageIndex === i
                                            ? "border-white"
                                            : "border-transparent"
                                    }`}
                                />
                            ))}

                        </div>
                    </div>
                )}

                <BackToTop />
            </div>
        );

    

}
