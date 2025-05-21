import { useEffect } from "react";

export default function EffectPage() {
    useEffect(()=> {
        console.log("Effect")
    }, [])

    return ( 
        <>
            <h2>Exemplo 01</h2>
        </>
     );
}

