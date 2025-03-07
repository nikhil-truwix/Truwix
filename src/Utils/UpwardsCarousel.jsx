import { useEffect, useState } from "react";

export function UpwardsCarousel({ items }) {
    const [index, setIndex] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="relative w-full h-80 sm:h-16 overflow-hidden xl:min-h-[500px]">
            <div
                className="flex flex-col justify-center items-center transition-transform duration-500"
                style={{
                    transform: `translateY(-${index * 0.7}%)`, // Translate by 100% of the container height per item
                }}
            >
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="flex w-full justify-center text-4xl sm:h-16 xl:h-28 md:text-4xl items-center h-16 sm:text-5xl xl:text-6xl lg:text-5xl font-bold"
                    >
                        <span
                            className={
                                index === i ? "text-white" : "text-gray-400"
                            }
                        >
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
