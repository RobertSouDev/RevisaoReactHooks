import { useEffect, useState } from "react";

export default function Effect() {
    const [count, SetCount] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Efeito montadso!");
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="text-3xl flex gap-4 items-center text-white">
            <button
                onClick={() => {
                    SetCount(count - 1);
                }}
                className=" w-30 h-20 bg-red-400  rounded-2xl"
            >
                -
            </button>
            {count}
            <button
                onClick={() => {
                    SetCount(count + 1);
                }}
                className=" w-30 h-20 bg-green-400  rounded-2xl"
            >
                +
            </button>
        </div>
    );
}
