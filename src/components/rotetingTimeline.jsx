import { useEffect, useState } from "react"

export default function RotatingTimeline({items, delay = 3000}) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, delay);

        return () => clearInterval(id)
    }, [items.length, delay])

    const {year, text} = items[index]

    return (
        <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-xl">
            <div className="text-5xl font-bold text-gray-800 text-center mb-4">{year}</div>
            <div className="text-base text-gray-600 text-center leading-relaxed">{text}</div>
        </div>
    )
}