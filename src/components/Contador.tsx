import { useState } from "react";

export default function Contador() {
    const [number, setNumber] = useState<number>(10);

    const Increase = () => setNumber((number) => number + 1);

    const decrease = () => setNumber((number) => number - 1);

    const reset = () => setNumber(10);

    return (
        <div className="md:h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 p-8 flex justify-center items-center">
            <div className="w-96 h-96 bg-gray-300 shadow-2xl rounded-4xl flex flex-col ">
                <div className="h-72 text-3xl items-center flex justify-around">
                    <button
                        className="shadow-2xs p-2 w-20 rounded-2xl bg-green-400 text-white "
                        onClick={Increase}
                    >
                        +
                    </button>
                    <h1>{number}</h1>
                    <button
                        className="shadow-2xs p-2 w-20 rounded-2xl bg-red-400 text-white "
                        onClick={decrease}
                    >
                        -
                    </button>
                </div>
                <div className="w-full h-20 flex justify-center items-center ">
                    <button
                        onClick={reset}
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-2xl transition-colors duration-300 text-2xl"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}
