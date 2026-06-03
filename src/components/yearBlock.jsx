import '../App.css';

export default function YearBlock({ year, items }) {
    return (
        <div className="lg:w-full h-full rounded-lg p-6 flex flex-col lg:flex-col items-center gap-10 mb-15">
            <h3 className="text-2xl md:text-3xl lg:text-4xl h-[40px] md:h-[45] lg:h-[50px] w-[80px] md:w-[100px] lg:w-[120px] font-bold text-center font-serif mb-6 rounded-2xl darkgreen text-white shadow-lg flex pt-1 pb-1 pl-3">
                {year}
            </h3>
            <div className="w-full md:w-full lg:w-full flex flex-row md:flex-col lg:flex-row items-center justify-center ">
                <div className="w-full md:w-full lg:w-full space-x-3 text-black text-[18px] gap-8 md:gap-25 lg:gap-17 flex  grid grid-cols-1 lg:grid-cols-4 justify-center items-center">
                    {items.map((item, idx) => (
                        
                        <div 
                            key={idx} 
                            className="
                                w-[150px] md:w-[210px] lg:w-[250px] h-[210px] md:h-[275px] lg:h-[300px] flex items-center justify-center
                                px-1 py-5 rounded-2xl
                                bgreen
                                shadow-2xl hover:shadow-2xl
                                transition-shadow rotate-355">   
                                                            
                                    <span className="w-[150px] md:w-[200px] lg:w-[250px] 
                                    h-[220px] md:h-[270px] lg:h-[320px] px-2 bg-white 
                                    rotate-5 border-1 rounded-xl flex items-center 
                                    justify-center flex-row text-[14px] md:text-[16px] 
                                    lg:text-[18px] text-center font-semibold">{item}</span>
                                    
                        </div>
                        
                    ))}
                </div>
            </div>
            
        </div>
    );
}