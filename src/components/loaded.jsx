export default function Loader() {
    return (
        <div className="w-full h-screen fixed top-0 left-0 bg-black/55 flex flex-col gap-10 justify-center items-center">
            <div className="w-[40px] h-[40px] border-4 border-green-400 border-t-transparent rounded-full animate-spin">           
            </div>
            <div className="text-green-100 text-[25px] font-mono">
                        Loading...
            </div>
        </div>
    )
}