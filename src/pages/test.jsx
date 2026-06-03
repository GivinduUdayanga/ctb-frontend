import { useState } from "react"
import { createClient } from "@supabase/supabase-js/dist/index.cjs";


const url = "https://vkpffujthjeqqleciged.supabase.co/rest/v1/"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcGZmdWp0aGplcXFsZWNpZ2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxODEyMzksImV4cCI6MjA5NDc1NzIzOX0.ocJnvZSeqKQh3t8VML4_V_DpAXK3wrwG_chaCLEhdWg"

const supabase = createClient(url, key);

export default function Test() {
  
    const [file, setFile] = useState(null);

    function handleUpload() {
        console.log(file)
        supabase.storage.from("images").upload(file.name, file, {
            cacheControl: "3600",
            upsert: false,
        }).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl;
                console.log(publicUrl)
            }
        )
    }
    
    return (

        <div className="w-full h-full flex justify-center items-center bg-white">
            <input 
                type="file"
                onChange={
                    (e)=>{
                        setFile(e.target.files[0]);
                    }
                }
            />

            <button 
                onClick={handleUpload}
                className="bg-red-600 p-2 text-white rounded-xl">
                    Upload
            </button>
        </div>
        
    )
}