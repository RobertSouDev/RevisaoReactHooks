import { useState } from "react";

export default  function Contador() {
    const [number, setNumber] = useState(10)

    const Increase = () => setNumber(number => number + 1)
    
    const decrease = () => setNumber(number => number - 1)

    return ( 
        <div className="w-90 h-90 border flex text-3xl justify-around items-center">

            <button  className="border p-2 w-20 rounded-2xl" onClick={Increase}>+</button>
            <h1>{number}</h1>
            <button className="border p-2 w-20 rounded-2xl" onClick={decrease}>-</button>
        </div>
     );
}


