export default function PdfModal({ activePdf, setActivePdf }) {

    return (
        <>

                    {/* =========================
                        PDF MODAL (YOUR EXACT LOGIC)
                    ========================== */}
                    {activePdf && (
                        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
                        <div className="relative bg-gray-400 w-[90%] h-[90%] rounded-lg shadow-xl pt-10 pl-1 pr-1 pb-1">

                            {/* CLOSE */}
                            <button
                            onClick={() => setActivePdf(null)}
                            className="absolute top-2 right-4 text-xl font-bold text-black"
                            >
                            ✕
                            </button>

                            {/* DOWNLOAD */}
                            <a
                            href={activePdf}
                            download
                            className="absolute top-2 left-4 bg-black text-white px-2 py-1 text-[12px] rounded"
                            >
                            Download PDF
                            </a>

                            {/* PDF VIEWER */}
                            <iframe
                            src={activePdf}
                            title="Regulation PDF"
                            className="w-full h-full"
                            />
                        </div>
                        </div>
                    )}
        </>

    )}